/**
 * Models Repository
 * Data access layer for user model operations
 */

import type { PrismaClient } from '../../generated/client'
import type { UserModel, ModelComponent } from '../models'

export class ModelsRepository {
  constructor(private prisma: PrismaClient) {}

  /**
   * Get all user models (for admin/public listing)
   */
  async getAllModels(): Promise<UserModel[]> {
    const models = await this.prisma.userModel.findMany({
      where: {
        isDeleted: false,
      },
      include: {
        user: true,
        modelComponents: {
          include: {
            metric: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return models.map(this.toDomainModel)
  }

  /**
   * Get model by ID
   */
  async getModelById(id: string): Promise<UserModel | null> {
    const model = await this.prisma.userModel.findUnique({
      where: {
        id,
        isDeleted: false,
      },
      include: {
        user: true,
        modelComponents: {
          include: {
            metric: true,
          },
        },
      },
    })

    return model ? this.toDomainModel(model) : null
  }

  /**
   * Get models by user ID
   */
  async getModelsByUserId(userId: string): Promise<UserModel[]> {
    const models = await this.prisma.userModel.findMany({
      where: {
        userId,
        isDeleted: false,
      },
      include: {
        user: true,
        modelComponents: {
          include: {
            metric: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return models.map(this.toDomainModel)
  }

  /**
   * Get public models
   */
  async getPublicModels(): Promise<UserModel[]> {
    const models = await this.prisma.userModel.findMany({
      where: {
        isPublic: true,
        isListed: true,
        isDeleted: false,
      },
      include: {
        user: true,
        modelComponents: {
          include: {
            metric: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return models.map(this.toDomainModel)
  }

  /**
   * Get model by share token
   */
  async getModelByShareToken(shareToken: string): Promise<UserModel | null> {
    const model = await this.prisma.userModel.findUnique({
      where: {
        shareToken,
        isDeleted: false,
      },
      include: {
        user: true,
        modelComponents: {
          include: {
            metric: true,
          },
        },
      },
    })

    return model ? this.toDomainModel(model) : null
  }

  /**
   * Create a new model
   */
  async createModel(modelData: Omit<UserModel, 'id' | 'createdAt' | 'updatedAt' | 'user' | 'modelComponents'>): Promise<UserModel> {
    const model = await this.prisma.userModel.create({
      data: {
        name: modelData.name,
        description: modelData.description,
        definition: modelData.definition as any,
        userId: modelData.userId,
        isPublic: modelData.isPublic,
        isListed: modelData.isListed,
        shareToken: modelData.shareToken,
      },
      include: {
        user: true,
        modelComponents: {
          include: {
            metric: true,
          },
        },
      },
    })

    return this.toDomainModel(model)
  }

  /**
   * Update a model
   */
  async updateModel(id: string, updateData: Partial<Omit<UserModel, 'id' | 'createdAt' | 'updatedAt' | 'user' | 'modelComponents'>>): Promise<UserModel | null> {
    const model = await this.prisma.userModel.update({
      where: { id },
      data: {
        ...(updateData.name && { name: updateData.name }),
        ...(updateData.description !== undefined && { description: updateData.description }),
        ...(updateData.definition && { definition: updateData.definition as any }),
        ...(updateData.isPublic !== undefined && { isPublic: updateData.isPublic }),
        ...(updateData.isListed !== undefined && { isListed: updateData.isListed }),
        ...(updateData.shareToken !== undefined && { shareToken: updateData.shareToken }),
      },
      include: {
        user: true,
        modelComponents: {
          include: {
            metric: true,
          },
        },
      },
    })

    return this.toDomainModel(model)
  }

  /**
   * Delete a model (soft delete)
   */
  async deleteModel(id: string): Promise<boolean> {
    try {
      await this.prisma.userModel.update({
        where: { id },
        data: { isDeleted: true },
      })
      return true
    } catch {
      return false
    }
  }

  /**
   * Create model components
   */
  async createModelComponents(components: Omit<ModelComponent, 'id' | 'model' | 'metric'>[]): Promise<ModelComponent[]> {
    const created = await Promise.all(
      components.map(component =>
        this.prisma.modelComponent.create({
          data: {
            modelId: component.modelId,
            metricId: component.metricId,
            weight: component.weight,
            isActive: component.isActive,
          },
          include: {
            metric: true,
            model: true,
          },
        })
      )
    )

    return created.map(this.toModelComponentDomainModel)
  }

  /**
   * Update model components for a model
   */
  async updateModelComponents(modelId: string, components: Omit<ModelComponent, 'id' | 'model' | 'metric'>[]): Promise<ModelComponent[]> {
    // Delete existing components
    await this.prisma.modelComponent.deleteMany({
      where: { modelId },
    })

    // Create new components
    return this.createModelComponents(components)
  }

  /**
   * Get model components by model ID
   */
  async getModelComponents(modelId: string): Promise<ModelComponent[]> {
    const components = await this.prisma.modelComponent.findMany({
      where: {
        modelId,
        isActive: true,
      },
      include: {
        metric: true,
        model: true,
      },
    })

    return components.map(this.toModelComponentDomainModel)
  }

  /**
   * Convert Prisma model to domain model
   */
  private toDomainModel(prismaModel: any): UserModel {
    return {
      id: prismaModel.id,
      name: prismaModel.name,
      description: prismaModel.description,
      definition: prismaModel.definition,
      userId: prismaModel.userId,
      isPublic: prismaModel.isPublic,
      isListed: prismaModel.isListed,
      shareToken: prismaModel.shareToken,
      createdAt: prismaModel.createdAt,
      updatedAt: prismaModel.updatedAt,
      user: prismaModel.user ? {
        id: prismaModel.user.id,
        email: prismaModel.user.email,
        name: prismaModel.user.name,
        createdAt: prismaModel.user.createdAt,
        updatedAt: prismaModel.user.updatedAt,
      } : undefined,
      modelComponents: prismaModel.modelComponents?.map(this.toModelComponentDomainModel),
    }
  }

  /**
   * Convert Prisma model component to domain model
   */
  private toModelComponentDomainModel(prismaComponent: any): ModelComponent {
    return {
      id: prismaComponent.id,
      modelId: prismaComponent.modelId,
      metricId: prismaComponent.metricId,
      weight: prismaComponent.weight,
      isActive: prismaComponent.isActive,
      metric: prismaComponent.metric ? {
        id: prismaComponent.metric.id,
        name: prismaComponent.metric.name,
        displayName: prismaComponent.metric.displayName,
        description: prismaComponent.metric.description,
        category: prismaComponent.metric.category,
        dataType: prismaComponent.metric.dataType,
        unit: prismaComponent.metric.unit,
        isActive: prismaComponent.metric.isActive,
        createdAt: prismaComponent.metric.createdAt,
        updatedAt: prismaComponent.metric.updatedAt,
      } : undefined,
    }
  }
} 