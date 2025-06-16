
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model Referee
 * 
 */
export type Referee = $Result.DefaultSelection<Prisma.$RefereePayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Metric
 * 
 */
export type Metric = $Result.DefaultSelection<Prisma.$MetricPayload>
/**
 * Model UserModel
 * 
 */
export type UserModel = $Result.DefaultSelection<Prisma.$UserModelPayload>
/**
 * Model ModelComponent
 * 
 */
export type ModelComponent = $Result.DefaultSelection<Prisma.$ModelComponentPayload>
/**
 * Model AiSuggestion
 * 
 */
export type AiSuggestion = $Result.DefaultSelection<Prisma.$AiSuggestionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Position: {
  QUARTERBACK: 'QUARTERBACK',
  RUNNING_BACK: 'RUNNING_BACK',
  WIDE_RECEIVER: 'WIDE_RECEIVER',
  TIGHT_END: 'TIGHT_END',
  OFFENSIVE_LINE: 'OFFENSIVE_LINE',
  DEFENSIVE_END: 'DEFENSIVE_END',
  DEFENSIVE_TACKLE: 'DEFENSIVE_TACKLE',
  LINEBACKER: 'LINEBACKER',
  CORNERBACK: 'CORNERBACK',
  SAFETY: 'SAFETY',
  KICKER: 'KICKER',
  PUNTER: 'PUNTER',
  LONG_SNAPPER: 'LONG_SNAPPER'
};

export type Position = (typeof Position)[keyof typeof Position]


export const GameStatus: {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  POSTPONED: 'POSTPONED'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]


export const MetricCategory: {
  PLAYER: 'PLAYER',
  TEAM: 'TEAM',
  POSITION: 'POSITION',
  REF: 'REF',
  PLAYBOOK: 'PLAYBOOK'
};

export type MetricCategory = (typeof MetricCategory)[keyof typeof MetricCategory]

}

export type Position = $Enums.Position

export const Position: typeof $Enums.Position

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

export type MetricCategory = $Enums.MetricCategory

export const MetricCategory: typeof $Enums.MetricCategory

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs>;

  /**
   * `prisma.referee`: Exposes CRUD operations for the **Referee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referees
    * const referees = await prisma.referee.findMany()
    * ```
    */
  get referee(): Prisma.RefereeDelegate<ExtArgs>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs>;

  /**
   * `prisma.metric`: Exposes CRUD operations for the **Metric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metric.findMany()
    * ```
    */
  get metric(): Prisma.MetricDelegate<ExtArgs>;

  /**
   * `prisma.userModel`: Exposes CRUD operations for the **UserModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserModels
    * const userModels = await prisma.userModel.findMany()
    * ```
    */
  get userModel(): Prisma.UserModelDelegate<ExtArgs>;

  /**
   * `prisma.modelComponent`: Exposes CRUD operations for the **ModelComponent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelComponents
    * const modelComponents = await prisma.modelComponent.findMany()
    * ```
    */
  get modelComponent(): Prisma.ModelComponentDelegate<ExtArgs>;

  /**
   * `prisma.aiSuggestion`: Exposes CRUD operations for the **AiSuggestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiSuggestions
    * const aiSuggestions = await prisma.aiSuggestion.findMany()
    * ```
    */
  get aiSuggestion(): Prisma.AiSuggestionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Team: 'Team',
    Player: 'Player',
    Referee: 'Referee',
    Game: 'Game',
    Metric: 'Metric',
    UserModel: 'UserModel',
    ModelComponent: 'ModelComponent',
    AiSuggestion: 'AiSuggestion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "team" | "player" | "referee" | "game" | "metric" | "userModel" | "modelComponent" | "aiSuggestion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      Referee: {
        payload: Prisma.$RefereePayload<ExtArgs>
        fields: Prisma.RefereeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefereeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefereePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefereeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefereePayload>
          }
          findFirst: {
            args: Prisma.RefereeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefereePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefereeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefereePayload>
          }
          findMany: {
            args: Prisma.RefereeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefereePayload>[]
          }
          create: {
            args: Prisma.RefereeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefereePayload>
          }
          createMany: {
            args: Prisma.RefereeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefereeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefereePayload>[]
          }
          delete: {
            args: Prisma.RefereeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefereePayload>
          }
          update: {
            args: Prisma.RefereeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefereePayload>
          }
          deleteMany: {
            args: Prisma.RefereeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefereeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefereeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefereePayload>
          }
          aggregate: {
            args: Prisma.RefereeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferee>
          }
          groupBy: {
            args: Prisma.RefereeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefereeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefereeCountArgs<ExtArgs>
            result: $Utils.Optional<RefereeCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Metric: {
        payload: Prisma.$MetricPayload<ExtArgs>
        fields: Prisma.MetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findFirst: {
            args: Prisma.MetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findMany: {
            args: Prisma.MetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          create: {
            args: Prisma.MetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          createMany: {
            args: Prisma.MetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          delete: {
            args: Prisma.MetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          update: {
            args: Prisma.MetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          deleteMany: {
            args: Prisma.MetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          aggregate: {
            args: Prisma.MetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetric>
          }
          groupBy: {
            args: Prisma.MetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricCountArgs<ExtArgs>
            result: $Utils.Optional<MetricCountAggregateOutputType> | number
          }
        }
      }
      UserModel: {
        payload: Prisma.$UserModelPayload<ExtArgs>
        fields: Prisma.UserModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPayload>
          }
          findFirst: {
            args: Prisma.UserModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPayload>
          }
          findMany: {
            args: Prisma.UserModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPayload>[]
          }
          create: {
            args: Prisma.UserModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPayload>
          }
          createMany: {
            args: Prisma.UserModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPayload>[]
          }
          delete: {
            args: Prisma.UserModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPayload>
          }
          update: {
            args: Prisma.UserModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPayload>
          }
          deleteMany: {
            args: Prisma.UserModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPayload>
          }
          aggregate: {
            args: Prisma.UserModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserModel>
          }
          groupBy: {
            args: Prisma.UserModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserModelCountArgs<ExtArgs>
            result: $Utils.Optional<UserModelCountAggregateOutputType> | number
          }
        }
      }
      ModelComponent: {
        payload: Prisma.$ModelComponentPayload<ExtArgs>
        fields: Prisma.ModelComponentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelComponentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelComponentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelComponentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelComponentPayload>
          }
          findFirst: {
            args: Prisma.ModelComponentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelComponentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelComponentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelComponentPayload>
          }
          findMany: {
            args: Prisma.ModelComponentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelComponentPayload>[]
          }
          create: {
            args: Prisma.ModelComponentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelComponentPayload>
          }
          createMany: {
            args: Prisma.ModelComponentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelComponentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelComponentPayload>[]
          }
          delete: {
            args: Prisma.ModelComponentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelComponentPayload>
          }
          update: {
            args: Prisma.ModelComponentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelComponentPayload>
          }
          deleteMany: {
            args: Prisma.ModelComponentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelComponentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModelComponentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelComponentPayload>
          }
          aggregate: {
            args: Prisma.ModelComponentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelComponent>
          }
          groupBy: {
            args: Prisma.ModelComponentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelComponentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelComponentCountArgs<ExtArgs>
            result: $Utils.Optional<ModelComponentCountAggregateOutputType> | number
          }
        }
      }
      AiSuggestion: {
        payload: Prisma.$AiSuggestionPayload<ExtArgs>
        fields: Prisma.AiSuggestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiSuggestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSuggestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiSuggestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSuggestionPayload>
          }
          findFirst: {
            args: Prisma.AiSuggestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSuggestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiSuggestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSuggestionPayload>
          }
          findMany: {
            args: Prisma.AiSuggestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSuggestionPayload>[]
          }
          create: {
            args: Prisma.AiSuggestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSuggestionPayload>
          }
          createMany: {
            args: Prisma.AiSuggestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiSuggestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSuggestionPayload>[]
          }
          delete: {
            args: Prisma.AiSuggestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSuggestionPayload>
          }
          update: {
            args: Prisma.AiSuggestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSuggestionPayload>
          }
          deleteMany: {
            args: Prisma.AiSuggestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiSuggestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AiSuggestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSuggestionPayload>
          }
          aggregate: {
            args: Prisma.AiSuggestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiSuggestion>
          }
          groupBy: {
            args: Prisma.AiSuggestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiSuggestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiSuggestionCountArgs<ExtArgs>
            result: $Utils.Optional<AiSuggestionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userModels: number
    aiSuggestions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userModels?: boolean | UserCountOutputTypeCountUserModelsArgs
    aiSuggestions?: boolean | UserCountOutputTypeCountAiSuggestionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiSuggestionWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    players: number
    homeGames: number
    awayGames: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | TeamCountOutputTypeCountPlayersArgs
    homeGames?: boolean | TeamCountOutputTypeCountHomeGamesArgs
    awayGames?: boolean | TeamCountOutputTypeCountAwayGamesArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountHomeGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountAwayGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type RefereeCountOutputType
   */

  export type RefereeCountOutputType = {
    games: number
  }

  export type RefereeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | RefereeCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * RefereeCountOutputType without action
   */
  export type RefereeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefereeCountOutputType
     */
    select?: RefereeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RefereeCountOutputType without action
   */
  export type RefereeCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type MetricCountOutputType
   */

  export type MetricCountOutputType = {
    modelComponents: number
  }

  export type MetricCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modelComponents?: boolean | MetricCountOutputTypeCountModelComponentsArgs
  }

  // Custom InputTypes
  /**
   * MetricCountOutputType without action
   */
  export type MetricCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricCountOutputType
     */
    select?: MetricCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetricCountOutputType without action
   */
  export type MetricCountOutputTypeCountModelComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelComponentWhereInput
  }


  /**
   * Count Type UserModelCountOutputType
   */

  export type UserModelCountOutputType = {
    modelComponents: number
    aiSuggestions: number
  }

  export type UserModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modelComponents?: boolean | UserModelCountOutputTypeCountModelComponentsArgs
    aiSuggestions?: boolean | UserModelCountOutputTypeCountAiSuggestionsArgs
  }

  // Custom InputTypes
  /**
   * UserModelCountOutputType without action
   */
  export type UserModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelCountOutputType
     */
    select?: UserModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserModelCountOutputType without action
   */
  export type UserModelCountOutputTypeCountModelComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelComponentWhereInput
  }

  /**
   * UserModelCountOutputType without action
   */
  export type UserModelCountOutputTypeCountAiSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiSuggestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userModels?: boolean | User$userModelsArgs<ExtArgs>
    aiSuggestions?: boolean | User$aiSuggestionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userModels?: boolean | User$userModelsArgs<ExtArgs>
    aiSuggestions?: boolean | User$aiSuggestionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userModels: Prisma.$UserModelPayload<ExtArgs>[]
      aiSuggestions: Prisma.$AiSuggestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userModels<T extends User$userModelsArgs<ExtArgs> = {}>(args?: Subset<T, User$userModelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModelPayload<ExtArgs>, T, "findMany"> | Null>
    aiSuggestions<T extends User$aiSuggestionsArgs<ExtArgs> = {}>(args?: Subset<T, User$aiSuggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiSuggestionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.userModels
   */
  export type User$userModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelInclude<ExtArgs> | null
    where?: UserModelWhereInput
    orderBy?: UserModelOrderByWithRelationInput | UserModelOrderByWithRelationInput[]
    cursor?: UserModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserModelScalarFieldEnum | UserModelScalarFieldEnum[]
  }

  /**
   * User.aiSuggestions
   */
  export type User$aiSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSuggestion
     */
    select?: AiSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSuggestionInclude<ExtArgs> | null
    where?: AiSuggestionWhereInput
    orderBy?: AiSuggestionOrderByWithRelationInput | AiSuggestionOrderByWithRelationInput[]
    cursor?: AiSuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiSuggestionScalarFieldEnum | AiSuggestionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    abbreviation: string | null
    city: string | null
    conference: string | null
    division: string | null
    logoUrl: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    abbreviation: string | null
    city: string | null
    conference: string | null
    division: string | null
    logoUrl: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    abbreviation: number
    city: number
    conference: number
    division: number
    logoUrl: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    city?: true
    conference?: true
    division?: true
    logoUrl?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    city?: true
    conference?: true
    division?: true
    logoUrl?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    city?: true
    conference?: true
    division?: true
    logoUrl?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    abbreviation: string
    city: string
    conference: string | null
    division: string | null
    logoUrl: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    city?: boolean
    conference?: boolean
    division?: boolean
    logoUrl?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    players?: boolean | Team$playersArgs<ExtArgs>
    homeGames?: boolean | Team$homeGamesArgs<ExtArgs>
    awayGames?: boolean | Team$awayGamesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    city?: boolean
    conference?: boolean
    division?: boolean
    logoUrl?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    city?: boolean
    conference?: boolean
    division?: boolean
    logoUrl?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | Team$playersArgs<ExtArgs>
    homeGames?: boolean | Team$homeGamesArgs<ExtArgs>
    awayGames?: boolean | Team$awayGamesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      players: Prisma.$PlayerPayload<ExtArgs>[]
      homeGames: Prisma.$GamePayload<ExtArgs>[]
      awayGames: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      abbreviation: string
      city: string
      conference: string | null
      division: string | null
      logoUrl: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    players<T extends Team$playersArgs<ExtArgs> = {}>(args?: Subset<T, Team$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany"> | Null>
    homeGames<T extends Team$homeGamesArgs<ExtArgs> = {}>(args?: Subset<T, Team$homeGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany"> | Null>
    awayGames<T extends Team$awayGamesArgs<ExtArgs> = {}>(args?: Subset<T, Team$awayGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */ 
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly abbreviation: FieldRef<"Team", 'String'>
    readonly city: FieldRef<"Team", 'String'>
    readonly conference: FieldRef<"Team", 'String'>
    readonly division: FieldRef<"Team", 'String'>
    readonly logoUrl: FieldRef<"Team", 'String'>
    readonly isDeleted: FieldRef<"Team", 'Boolean'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
  }

  /**
   * Team.players
   */
  export type Team$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Team.homeGames
   */
  export type Team$homeGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Team.awayGames
   */
  export type Team$awayGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    number: number | null
    weight: number | null
    age: number | null
  }

  export type PlayerSumAggregateOutputType = {
    number: number | null
    weight: number | null
    age: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    position: $Enums.Position | null
    number: number | null
    height: string | null
    weight: number | null
    age: number | null
    teamId: string | null
    isActive: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    position: $Enums.Position | null
    number: number | null
    height: string | null
    weight: number | null
    age: number | null
    teamId: string | null
    isActive: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    position: number
    number: number
    height: number
    weight: number
    age: number
    teamId: number
    isActive: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    number?: true
    weight?: true
    age?: true
  }

  export type PlayerSumAggregateInputType = {
    number?: true
    weight?: true
    age?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    position?: true
    number?: true
    height?: true
    weight?: true
    age?: true
    teamId?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    position?: true
    number?: true
    height?: true
    weight?: true
    age?: true
    teamId?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    position?: true
    number?: true
    height?: true
    weight?: true
    age?: true
    teamId?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: string
    name: string
    position: $Enums.Position
    number: number | null
    height: string | null
    weight: number | null
    age: number | null
    teamId: string
    isActive: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    number?: boolean
    height?: boolean
    weight?: boolean
    age?: boolean
    teamId?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    number?: boolean
    height?: boolean
    weight?: boolean
    age?: boolean
    teamId?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    position?: boolean
    number?: boolean
    height?: boolean
    weight?: boolean
    age?: boolean
    teamId?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      position: $Enums.Position
      number: number | null
      height: string | null
      weight: number | null
      age: number | null
      teamId: string
      isActive: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */ 
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'String'>
    readonly name: FieldRef<"Player", 'String'>
    readonly position: FieldRef<"Player", 'Position'>
    readonly number: FieldRef<"Player", 'Int'>
    readonly height: FieldRef<"Player", 'String'>
    readonly weight: FieldRef<"Player", 'Int'>
    readonly age: FieldRef<"Player", 'Int'>
    readonly teamId: FieldRef<"Player", 'String'>
    readonly isActive: FieldRef<"Player", 'Boolean'>
    readonly isDeleted: FieldRef<"Player", 'Boolean'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
    readonly updatedAt: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model Referee
   */

  export type AggregateReferee = {
    _count: RefereeCountAggregateOutputType | null
    _avg: RefereeAvgAggregateOutputType | null
    _sum: RefereeSumAggregateOutputType | null
    _min: RefereeMinAggregateOutputType | null
    _max: RefereeMaxAggregateOutputType | null
  }

  export type RefereeAvgAggregateOutputType = {
    number: number | null
    yearsExp: number | null
  }

  export type RefereeSumAggregateOutputType = {
    number: number | null
    yearsExp: number | null
  }

  export type RefereeMinAggregateOutputType = {
    id: string | null
    name: string | null
    number: number | null
    position: string | null
    yearsExp: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefereeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    number: number | null
    position: string | null
    yearsExp: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefereeCountAggregateOutputType = {
    id: number
    name: number
    number: number
    position: number
    yearsExp: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RefereeAvgAggregateInputType = {
    number?: true
    yearsExp?: true
  }

  export type RefereeSumAggregateInputType = {
    number?: true
    yearsExp?: true
  }

  export type RefereeMinAggregateInputType = {
    id?: true
    name?: true
    number?: true
    position?: true
    yearsExp?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefereeMaxAggregateInputType = {
    id?: true
    name?: true
    number?: true
    position?: true
    yearsExp?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefereeCountAggregateInputType = {
    id?: true
    name?: true
    number?: true
    position?: true
    yearsExp?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RefereeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referee to aggregate.
     */
    where?: RefereeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referees to fetch.
     */
    orderBy?: RefereeOrderByWithRelationInput | RefereeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefereeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Referees
    **/
    _count?: true | RefereeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefereeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefereeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefereeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefereeMaxAggregateInputType
  }

  export type GetRefereeAggregateType<T extends RefereeAggregateArgs> = {
        [P in keyof T & keyof AggregateReferee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferee[P]>
      : GetScalarType<T[P], AggregateReferee[P]>
  }




  export type RefereeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefereeWhereInput
    orderBy?: RefereeOrderByWithAggregationInput | RefereeOrderByWithAggregationInput[]
    by: RefereeScalarFieldEnum[] | RefereeScalarFieldEnum
    having?: RefereeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefereeCountAggregateInputType | true
    _avg?: RefereeAvgAggregateInputType
    _sum?: RefereeSumAggregateInputType
    _min?: RefereeMinAggregateInputType
    _max?: RefereeMaxAggregateInputType
  }

  export type RefereeGroupByOutputType = {
    id: string
    name: string
    number: number | null
    position: string | null
    yearsExp: number | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: RefereeCountAggregateOutputType | null
    _avg: RefereeAvgAggregateOutputType | null
    _sum: RefereeSumAggregateOutputType | null
    _min: RefereeMinAggregateOutputType | null
    _max: RefereeMaxAggregateOutputType | null
  }

  type GetRefereeGroupByPayload<T extends RefereeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefereeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefereeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefereeGroupByOutputType[P]>
            : GetScalarType<T[P], RefereeGroupByOutputType[P]>
        }
      >
    >


  export type RefereeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    position?: boolean
    yearsExp?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    games?: boolean | Referee$gamesArgs<ExtArgs>
    _count?: boolean | RefereeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referee"]>

  export type RefereeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    position?: boolean
    yearsExp?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["referee"]>

  export type RefereeSelectScalar = {
    id?: boolean
    name?: boolean
    number?: boolean
    position?: boolean
    yearsExp?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RefereeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | Referee$gamesArgs<ExtArgs>
    _count?: boolean | RefereeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RefereeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RefereePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Referee"
    objects: {
      games: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      number: number | null
      position: string | null
      yearsExp: number | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["referee"]>
    composites: {}
  }

  type RefereeGetPayload<S extends boolean | null | undefined | RefereeDefaultArgs> = $Result.GetResult<Prisma.$RefereePayload, S>

  type RefereeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RefereeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RefereeCountAggregateInputType | true
    }

  export interface RefereeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Referee'], meta: { name: 'Referee' } }
    /**
     * Find zero or one Referee that matches the filter.
     * @param {RefereeFindUniqueArgs} args - Arguments to find a Referee
     * @example
     * // Get one Referee
     * const referee = await prisma.referee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefereeFindUniqueArgs>(args: SelectSubset<T, RefereeFindUniqueArgs<ExtArgs>>): Prisma__RefereeClient<$Result.GetResult<Prisma.$RefereePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Referee that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RefereeFindUniqueOrThrowArgs} args - Arguments to find a Referee
     * @example
     * // Get one Referee
     * const referee = await prisma.referee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefereeFindUniqueOrThrowArgs>(args: SelectSubset<T, RefereeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefereeClient<$Result.GetResult<Prisma.$RefereePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Referee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefereeFindFirstArgs} args - Arguments to find a Referee
     * @example
     * // Get one Referee
     * const referee = await prisma.referee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefereeFindFirstArgs>(args?: SelectSubset<T, RefereeFindFirstArgs<ExtArgs>>): Prisma__RefereeClient<$Result.GetResult<Prisma.$RefereePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Referee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefereeFindFirstOrThrowArgs} args - Arguments to find a Referee
     * @example
     * // Get one Referee
     * const referee = await prisma.referee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefereeFindFirstOrThrowArgs>(args?: SelectSubset<T, RefereeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefereeClient<$Result.GetResult<Prisma.$RefereePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Referees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefereeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referees
     * const referees = await prisma.referee.findMany()
     * 
     * // Get first 10 Referees
     * const referees = await prisma.referee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refereeWithIdOnly = await prisma.referee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefereeFindManyArgs>(args?: SelectSubset<T, RefereeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefereePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Referee.
     * @param {RefereeCreateArgs} args - Arguments to create a Referee.
     * @example
     * // Create one Referee
     * const Referee = await prisma.referee.create({
     *   data: {
     *     // ... data to create a Referee
     *   }
     * })
     * 
     */
    create<T extends RefereeCreateArgs>(args: SelectSubset<T, RefereeCreateArgs<ExtArgs>>): Prisma__RefereeClient<$Result.GetResult<Prisma.$RefereePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Referees.
     * @param {RefereeCreateManyArgs} args - Arguments to create many Referees.
     * @example
     * // Create many Referees
     * const referee = await prisma.referee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefereeCreateManyArgs>(args?: SelectSubset<T, RefereeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referees and returns the data saved in the database.
     * @param {RefereeCreateManyAndReturnArgs} args - Arguments to create many Referees.
     * @example
     * // Create many Referees
     * const referee = await prisma.referee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referees and only return the `id`
     * const refereeWithIdOnly = await prisma.referee.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefereeCreateManyAndReturnArgs>(args?: SelectSubset<T, RefereeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefereePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Referee.
     * @param {RefereeDeleteArgs} args - Arguments to delete one Referee.
     * @example
     * // Delete one Referee
     * const Referee = await prisma.referee.delete({
     *   where: {
     *     // ... filter to delete one Referee
     *   }
     * })
     * 
     */
    delete<T extends RefereeDeleteArgs>(args: SelectSubset<T, RefereeDeleteArgs<ExtArgs>>): Prisma__RefereeClient<$Result.GetResult<Prisma.$RefereePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Referee.
     * @param {RefereeUpdateArgs} args - Arguments to update one Referee.
     * @example
     * // Update one Referee
     * const referee = await prisma.referee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefereeUpdateArgs>(args: SelectSubset<T, RefereeUpdateArgs<ExtArgs>>): Prisma__RefereeClient<$Result.GetResult<Prisma.$RefereePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Referees.
     * @param {RefereeDeleteManyArgs} args - Arguments to filter Referees to delete.
     * @example
     * // Delete a few Referees
     * const { count } = await prisma.referee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefereeDeleteManyArgs>(args?: SelectSubset<T, RefereeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefereeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referees
     * const referee = await prisma.referee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefereeUpdateManyArgs>(args: SelectSubset<T, RefereeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Referee.
     * @param {RefereeUpsertArgs} args - Arguments to update or create a Referee.
     * @example
     * // Update or create a Referee
     * const referee = await prisma.referee.upsert({
     *   create: {
     *     // ... data to create a Referee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referee we want to update
     *   }
     * })
     */
    upsert<T extends RefereeUpsertArgs>(args: SelectSubset<T, RefereeUpsertArgs<ExtArgs>>): Prisma__RefereeClient<$Result.GetResult<Prisma.$RefereePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Referees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefereeCountArgs} args - Arguments to filter Referees to count.
     * @example
     * // Count the number of Referees
     * const count = await prisma.referee.count({
     *   where: {
     *     // ... the filter for the Referees we want to count
     *   }
     * })
    **/
    count<T extends RefereeCountArgs>(
      args?: Subset<T, RefereeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefereeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefereeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefereeAggregateArgs>(args: Subset<T, RefereeAggregateArgs>): Prisma.PrismaPromise<GetRefereeAggregateType<T>>

    /**
     * Group by Referee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefereeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefereeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefereeGroupByArgs['orderBy'] }
        : { orderBy?: RefereeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefereeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefereeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Referee model
   */
  readonly fields: RefereeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Referee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefereeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends Referee$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Referee$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Referee model
   */ 
  interface RefereeFieldRefs {
    readonly id: FieldRef<"Referee", 'String'>
    readonly name: FieldRef<"Referee", 'String'>
    readonly number: FieldRef<"Referee", 'Int'>
    readonly position: FieldRef<"Referee", 'String'>
    readonly yearsExp: FieldRef<"Referee", 'Int'>
    readonly isDeleted: FieldRef<"Referee", 'Boolean'>
    readonly createdAt: FieldRef<"Referee", 'DateTime'>
    readonly updatedAt: FieldRef<"Referee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Referee findUnique
   */
  export type RefereeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referee
     */
    select?: RefereeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefereeInclude<ExtArgs> | null
    /**
     * Filter, which Referee to fetch.
     */
    where: RefereeWhereUniqueInput
  }

  /**
   * Referee findUniqueOrThrow
   */
  export type RefereeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referee
     */
    select?: RefereeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefereeInclude<ExtArgs> | null
    /**
     * Filter, which Referee to fetch.
     */
    where: RefereeWhereUniqueInput
  }

  /**
   * Referee findFirst
   */
  export type RefereeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referee
     */
    select?: RefereeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefereeInclude<ExtArgs> | null
    /**
     * Filter, which Referee to fetch.
     */
    where?: RefereeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referees to fetch.
     */
    orderBy?: RefereeOrderByWithRelationInput | RefereeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referees.
     */
    cursor?: RefereeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referees.
     */
    distinct?: RefereeScalarFieldEnum | RefereeScalarFieldEnum[]
  }

  /**
   * Referee findFirstOrThrow
   */
  export type RefereeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referee
     */
    select?: RefereeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefereeInclude<ExtArgs> | null
    /**
     * Filter, which Referee to fetch.
     */
    where?: RefereeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referees to fetch.
     */
    orderBy?: RefereeOrderByWithRelationInput | RefereeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referees.
     */
    cursor?: RefereeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referees.
     */
    distinct?: RefereeScalarFieldEnum | RefereeScalarFieldEnum[]
  }

  /**
   * Referee findMany
   */
  export type RefereeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referee
     */
    select?: RefereeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefereeInclude<ExtArgs> | null
    /**
     * Filter, which Referees to fetch.
     */
    where?: RefereeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referees to fetch.
     */
    orderBy?: RefereeOrderByWithRelationInput | RefereeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Referees.
     */
    cursor?: RefereeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referees.
     */
    skip?: number
    distinct?: RefereeScalarFieldEnum | RefereeScalarFieldEnum[]
  }

  /**
   * Referee create
   */
  export type RefereeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referee
     */
    select?: RefereeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefereeInclude<ExtArgs> | null
    /**
     * The data needed to create a Referee.
     */
    data: XOR<RefereeCreateInput, RefereeUncheckedCreateInput>
  }

  /**
   * Referee createMany
   */
  export type RefereeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referees.
     */
    data: RefereeCreateManyInput | RefereeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referee createManyAndReturn
   */
  export type RefereeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referee
     */
    select?: RefereeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Referees.
     */
    data: RefereeCreateManyInput | RefereeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referee update
   */
  export type RefereeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referee
     */
    select?: RefereeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefereeInclude<ExtArgs> | null
    /**
     * The data needed to update a Referee.
     */
    data: XOR<RefereeUpdateInput, RefereeUncheckedUpdateInput>
    /**
     * Choose, which Referee to update.
     */
    where: RefereeWhereUniqueInput
  }

  /**
   * Referee updateMany
   */
  export type RefereeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Referees.
     */
    data: XOR<RefereeUpdateManyMutationInput, RefereeUncheckedUpdateManyInput>
    /**
     * Filter which Referees to update
     */
    where?: RefereeWhereInput
  }

  /**
   * Referee upsert
   */
  export type RefereeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referee
     */
    select?: RefereeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefereeInclude<ExtArgs> | null
    /**
     * The filter to search for the Referee to update in case it exists.
     */
    where: RefereeWhereUniqueInput
    /**
     * In case the Referee found by the `where` argument doesn't exist, create a new Referee with this data.
     */
    create: XOR<RefereeCreateInput, RefereeUncheckedCreateInput>
    /**
     * In case the Referee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefereeUpdateInput, RefereeUncheckedUpdateInput>
  }

  /**
   * Referee delete
   */
  export type RefereeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referee
     */
    select?: RefereeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefereeInclude<ExtArgs> | null
    /**
     * Filter which Referee to delete.
     */
    where: RefereeWhereUniqueInput
  }

  /**
   * Referee deleteMany
   */
  export type RefereeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referees to delete
     */
    where?: RefereeWhereInput
  }

  /**
   * Referee.games
   */
  export type Referee$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Referee without action
   */
  export type RefereeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referee
     */
    select?: RefereeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefereeInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    week: number | null
    season: number | null
    homeScore: number | null
    awayScore: number | null
    temperature: number | null
    attendance: number | null
  }

  export type GameSumAggregateOutputType = {
    week: number | null
    season: number | null
    homeScore: number | null
    awayScore: number | null
    temperature: number | null
    attendance: number | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    gameDate: Date | null
    week: number | null
    season: number | null
    homeTeamId: string | null
    awayTeamId: string | null
    refereeId: string | null
    homeScore: number | null
    awayScore: number | null
    status: $Enums.GameStatus | null
    venue: string | null
    temperature: number | null
    weather: string | null
    attendance: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    gameDate: Date | null
    week: number | null
    season: number | null
    homeTeamId: string | null
    awayTeamId: string | null
    refereeId: string | null
    homeScore: number | null
    awayScore: number | null
    status: $Enums.GameStatus | null
    venue: string | null
    temperature: number | null
    weather: string | null
    attendance: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    gameDate: number
    week: number
    season: number
    homeTeamId: number
    awayTeamId: number
    refereeId: number
    homeScore: number
    awayScore: number
    status: number
    venue: number
    temperature: number
    weather: number
    attendance: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    week?: true
    season?: true
    homeScore?: true
    awayScore?: true
    temperature?: true
    attendance?: true
  }

  export type GameSumAggregateInputType = {
    week?: true
    season?: true
    homeScore?: true
    awayScore?: true
    temperature?: true
    attendance?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    gameDate?: true
    week?: true
    season?: true
    homeTeamId?: true
    awayTeamId?: true
    refereeId?: true
    homeScore?: true
    awayScore?: true
    status?: true
    venue?: true
    temperature?: true
    weather?: true
    attendance?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    gameDate?: true
    week?: true
    season?: true
    homeTeamId?: true
    awayTeamId?: true
    refereeId?: true
    homeScore?: true
    awayScore?: true
    status?: true
    venue?: true
    temperature?: true
    weather?: true
    attendance?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    gameDate?: true
    week?: true
    season?: true
    homeTeamId?: true
    awayTeamId?: true
    refereeId?: true
    homeScore?: true
    awayScore?: true
    status?: true
    venue?: true
    temperature?: true
    weather?: true
    attendance?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    gameDate: Date
    week: number | null
    season: number
    homeTeamId: string
    awayTeamId: string
    refereeId: string | null
    homeScore: number | null
    awayScore: number | null
    status: $Enums.GameStatus
    venue: string | null
    temperature: number | null
    weather: string | null
    attendance: number | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameDate?: boolean
    week?: boolean
    season?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    refereeId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    status?: boolean
    venue?: boolean
    temperature?: boolean
    weather?: boolean
    attendance?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    referee?: boolean | Game$refereeArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameDate?: boolean
    week?: boolean
    season?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    refereeId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    status?: boolean
    venue?: boolean
    temperature?: boolean
    weather?: boolean
    attendance?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    referee?: boolean | Game$refereeArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    gameDate?: boolean
    week?: boolean
    season?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    refereeId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    status?: boolean
    venue?: boolean
    temperature?: boolean
    weather?: boolean
    attendance?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    referee?: boolean | Game$refereeArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    referee?: boolean | Game$refereeArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      homeTeam: Prisma.$TeamPayload<ExtArgs>
      awayTeam: Prisma.$TeamPayload<ExtArgs>
      referee: Prisma.$RefereePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameDate: Date
      week: number | null
      season: number
      homeTeamId: string
      awayTeamId: string
      refereeId: string | null
      homeScore: number | null
      awayScore: number | null
      status: $Enums.GameStatus
      venue: string | null
      temperature: number | null
      weather: string | null
      attendance: number | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    homeTeam<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    awayTeam<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    referee<T extends Game$refereeArgs<ExtArgs> = {}>(args?: Subset<T, Game$refereeArgs<ExtArgs>>): Prisma__RefereeClient<$Result.GetResult<Prisma.$RefereePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */ 
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly gameDate: FieldRef<"Game", 'DateTime'>
    readonly week: FieldRef<"Game", 'Int'>
    readonly season: FieldRef<"Game", 'Int'>
    readonly homeTeamId: FieldRef<"Game", 'String'>
    readonly awayTeamId: FieldRef<"Game", 'String'>
    readonly refereeId: FieldRef<"Game", 'String'>
    readonly homeScore: FieldRef<"Game", 'Int'>
    readonly awayScore: FieldRef<"Game", 'Int'>
    readonly status: FieldRef<"Game", 'GameStatus'>
    readonly venue: FieldRef<"Game", 'String'>
    readonly temperature: FieldRef<"Game", 'Int'>
    readonly weather: FieldRef<"Game", 'String'>
    readonly attendance: FieldRef<"Game", 'Int'>
    readonly isDeleted: FieldRef<"Game", 'Boolean'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
  }

  /**
   * Game.referee
   */
  export type Game$refereeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referee
     */
    select?: RefereeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefereeInclude<ExtArgs> | null
    where?: RefereeWhereInput
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model Metric
   */

  export type AggregateMetric = {
    _count: MetricCountAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  export type MetricMinAggregateOutputType = {
    id: string | null
    name: string | null
    displayName: string | null
    description: string | null
    category: $Enums.MetricCategory | null
    dataType: string | null
    unit: string | null
    isActive: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetricMaxAggregateOutputType = {
    id: string | null
    name: string | null
    displayName: string | null
    description: string | null
    category: $Enums.MetricCategory | null
    dataType: string | null
    unit: string | null
    isActive: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetricCountAggregateOutputType = {
    id: number
    name: number
    displayName: number
    description: number
    category: number
    dataType: number
    unit: number
    isActive: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetricMinAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    description?: true
    category?: true
    dataType?: true
    unit?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetricMaxAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    description?: true
    category?: true
    dataType?: true
    unit?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetricCountAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    description?: true
    category?: true
    dataType?: true
    unit?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metric to aggregate.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrics
    **/
    _count?: true | MetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricMaxAggregateInputType
  }

  export type GetMetricAggregateType<T extends MetricAggregateArgs> = {
        [P in keyof T & keyof AggregateMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetric[P]>
      : GetScalarType<T[P], AggregateMetric[P]>
  }




  export type MetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithAggregationInput | MetricOrderByWithAggregationInput[]
    by: MetricScalarFieldEnum[] | MetricScalarFieldEnum
    having?: MetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricCountAggregateInputType | true
    _min?: MetricMinAggregateInputType
    _max?: MetricMaxAggregateInputType
  }

  export type MetricGroupByOutputType = {
    id: string
    name: string
    displayName: string
    description: string | null
    category: $Enums.MetricCategory
    dataType: string
    unit: string | null
    isActive: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: MetricCountAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  type GetMetricGroupByPayload<T extends MetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricGroupByOutputType[P]>
            : GetScalarType<T[P], MetricGroupByOutputType[P]>
        }
      >
    >


  export type MetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    description?: boolean
    category?: boolean
    dataType?: boolean
    unit?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modelComponents?: boolean | Metric$modelComponentsArgs<ExtArgs>
    _count?: boolean | MetricCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    description?: boolean
    category?: boolean
    dataType?: boolean
    unit?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectScalar = {
    id?: boolean
    name?: boolean
    displayName?: boolean
    description?: boolean
    category?: boolean
    dataType?: boolean
    unit?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modelComponents?: boolean | Metric$modelComponentsArgs<ExtArgs>
    _count?: boolean | MetricCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metric"
    objects: {
      modelComponents: Prisma.$ModelComponentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      displayName: string
      description: string | null
      category: $Enums.MetricCategory
      dataType: string
      unit: string | null
      isActive: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["metric"]>
    composites: {}
  }

  type MetricGetPayload<S extends boolean | null | undefined | MetricDefaultArgs> = $Result.GetResult<Prisma.$MetricPayload, S>

  type MetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MetricFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MetricCountAggregateInputType | true
    }

  export interface MetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metric'], meta: { name: 'Metric' } }
    /**
     * Find zero or one Metric that matches the filter.
     * @param {MetricFindUniqueArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricFindUniqueArgs>(args: SelectSubset<T, MetricFindUniqueArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Metric that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MetricFindUniqueOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Metric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricFindFirstArgs>(args?: SelectSubset<T, MetricFindFirstArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Metric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metric.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricWithIdOnly = await prisma.metric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricFindManyArgs>(args?: SelectSubset<T, MetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Metric.
     * @param {MetricCreateArgs} args - Arguments to create a Metric.
     * @example
     * // Create one Metric
     * const Metric = await prisma.metric.create({
     *   data: {
     *     // ... data to create a Metric
     *   }
     * })
     * 
     */
    create<T extends MetricCreateArgs>(args: SelectSubset<T, MetricCreateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Metrics.
     * @param {MetricCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricCreateManyArgs>(args?: SelectSubset<T, MetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metrics and returns the data saved in the database.
     * @param {MetricCreateManyAndReturnArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Metric.
     * @param {MetricDeleteArgs} args - Arguments to delete one Metric.
     * @example
     * // Delete one Metric
     * const Metric = await prisma.metric.delete({
     *   where: {
     *     // ... filter to delete one Metric
     *   }
     * })
     * 
     */
    delete<T extends MetricDeleteArgs>(args: SelectSubset<T, MetricDeleteArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Metric.
     * @param {MetricUpdateArgs} args - Arguments to update one Metric.
     * @example
     * // Update one Metric
     * const metric = await prisma.metric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricUpdateArgs>(args: SelectSubset<T, MetricUpdateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Metrics.
     * @param {MetricDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricDeleteManyArgs>(args?: SelectSubset<T, MetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricUpdateManyArgs>(args: SelectSubset<T, MetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Metric.
     * @param {MetricUpsertArgs} args - Arguments to update or create a Metric.
     * @example
     * // Update or create a Metric
     * const metric = await prisma.metric.upsert({
     *   create: {
     *     // ... data to create a Metric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metric we want to update
     *   }
     * })
     */
    upsert<T extends MetricUpsertArgs>(args: SelectSubset<T, MetricUpsertArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metric.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends MetricCountArgs>(
      args?: Subset<T, MetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricAggregateArgs>(args: Subset<T, MetricAggregateArgs>): Prisma.PrismaPromise<GetMetricAggregateType<T>>

    /**
     * Group by Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricGroupByArgs['orderBy'] }
        : { orderBy?: MetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metric model
   */
  readonly fields: MetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modelComponents<T extends Metric$modelComponentsArgs<ExtArgs> = {}>(args?: Subset<T, Metric$modelComponentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelComponentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Metric model
   */ 
  interface MetricFieldRefs {
    readonly id: FieldRef<"Metric", 'String'>
    readonly name: FieldRef<"Metric", 'String'>
    readonly displayName: FieldRef<"Metric", 'String'>
    readonly description: FieldRef<"Metric", 'String'>
    readonly category: FieldRef<"Metric", 'MetricCategory'>
    readonly dataType: FieldRef<"Metric", 'String'>
    readonly unit: FieldRef<"Metric", 'String'>
    readonly isActive: FieldRef<"Metric", 'Boolean'>
    readonly isDeleted: FieldRef<"Metric", 'Boolean'>
    readonly createdAt: FieldRef<"Metric", 'DateTime'>
    readonly updatedAt: FieldRef<"Metric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Metric findUnique
   */
  export type MetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findUniqueOrThrow
   */
  export type MetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findFirst
   */
  export type MetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findFirstOrThrow
   */
  export type MetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findMany
   */
  export type MetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric create
   */
  export type MetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to create a Metric.
     */
    data: XOR<MetricCreateInput, MetricUncheckedCreateInput>
  }

  /**
   * Metric createMany
   */
  export type MetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metric createManyAndReturn
   */
  export type MetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metric update
   */
  export type MetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to update a Metric.
     */
    data: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
    /**
     * Choose, which Metric to update.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric updateMany
   */
  export type MetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
  }

  /**
   * Metric upsert
   */
  export type MetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The filter to search for the Metric to update in case it exists.
     */
    where: MetricWhereUniqueInput
    /**
     * In case the Metric found by the `where` argument doesn't exist, create a new Metric with this data.
     */
    create: XOR<MetricCreateInput, MetricUncheckedCreateInput>
    /**
     * In case the Metric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
  }

  /**
   * Metric delete
   */
  export type MetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter which Metric to delete.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric deleteMany
   */
  export type MetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to delete
     */
    where?: MetricWhereInput
  }

  /**
   * Metric.modelComponents
   */
  export type Metric$modelComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelComponent
     */
    select?: ModelComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelComponentInclude<ExtArgs> | null
    where?: ModelComponentWhereInput
    orderBy?: ModelComponentOrderByWithRelationInput | ModelComponentOrderByWithRelationInput[]
    cursor?: ModelComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelComponentScalarFieldEnum | ModelComponentScalarFieldEnum[]
  }

  /**
   * Metric without action
   */
  export type MetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
  }


  /**
   * Model UserModel
   */

  export type AggregateUserModel = {
    _count: UserModelCountAggregateOutputType | null
    _min: UserModelMinAggregateOutputType | null
    _max: UserModelMaxAggregateOutputType | null
  }

  export type UserModelMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    isPublic: boolean | null
    isListed: boolean | null
    shareToken: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserModelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    isPublic: boolean | null
    isListed: boolean | null
    shareToken: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserModelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    definition: number
    userId: number
    isPublic: number
    isListed: number
    shareToken: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserModelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    isPublic?: true
    isListed?: true
    shareToken?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserModelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    isPublic?: true
    isListed?: true
    shareToken?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserModelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    definition?: true
    userId?: true
    isPublic?: true
    isListed?: true
    shareToken?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModel to aggregate.
     */
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     */
    orderBy?: UserModelOrderByWithRelationInput | UserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserModels
    **/
    _count?: true | UserModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserModelMaxAggregateInputType
  }

  export type GetUserModelAggregateType<T extends UserModelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserModel[P]>
      : GetScalarType<T[P], AggregateUserModel[P]>
  }




  export type UserModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModelWhereInput
    orderBy?: UserModelOrderByWithAggregationInput | UserModelOrderByWithAggregationInput[]
    by: UserModelScalarFieldEnum[] | UserModelScalarFieldEnum
    having?: UserModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserModelCountAggregateInputType | true
    _min?: UserModelMinAggregateInputType
    _max?: UserModelMaxAggregateInputType
  }

  export type UserModelGroupByOutputType = {
    id: string
    name: string
    description: string | null
    definition: JsonValue
    userId: string | null
    isPublic: boolean
    isListed: boolean
    shareToken: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserModelCountAggregateOutputType | null
    _min: UserModelMinAggregateOutputType | null
    _max: UserModelMaxAggregateOutputType | null
  }

  type GetUserModelGroupByPayload<T extends UserModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserModelGroupByOutputType[P]>
            : GetScalarType<T[P], UserModelGroupByOutputType[P]>
        }
      >
    >


  export type UserModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    userId?: boolean
    isPublic?: boolean
    isListed?: boolean
    shareToken?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserModel$userArgs<ExtArgs>
    modelComponents?: boolean | UserModel$modelComponentsArgs<ExtArgs>
    aiSuggestions?: boolean | UserModel$aiSuggestionsArgs<ExtArgs>
    _count?: boolean | UserModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModel"]>

  export type UserModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    userId?: boolean
    isPublic?: boolean
    isListed?: boolean
    shareToken?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserModel$userArgs<ExtArgs>
  }, ExtArgs["result"]["userModel"]>

  export type UserModelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    userId?: boolean
    isPublic?: boolean
    isListed?: boolean
    shareToken?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserModel$userArgs<ExtArgs>
    modelComponents?: boolean | UserModel$modelComponentsArgs<ExtArgs>
    aiSuggestions?: boolean | UserModel$aiSuggestionsArgs<ExtArgs>
    _count?: boolean | UserModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserModel$userArgs<ExtArgs>
  }

  export type $UserModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserModel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      modelComponents: Prisma.$ModelComponentPayload<ExtArgs>[]
      aiSuggestions: Prisma.$AiSuggestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      definition: Prisma.JsonValue
      userId: string | null
      isPublic: boolean
      isListed: boolean
      shareToken: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userModel"]>
    composites: {}
  }

  type UserModelGetPayload<S extends boolean | null | undefined | UserModelDefaultArgs> = $Result.GetResult<Prisma.$UserModelPayload, S>

  type UserModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserModelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserModelCountAggregateInputType | true
    }

  export interface UserModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserModel'], meta: { name: 'UserModel' } }
    /**
     * Find zero or one UserModel that matches the filter.
     * @param {UserModelFindUniqueArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserModelFindUniqueArgs>(args: SelectSubset<T, UserModelFindUniqueArgs<ExtArgs>>): Prisma__UserModelClient<$Result.GetResult<Prisma.$UserModelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserModel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserModelFindUniqueOrThrowArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserModelFindUniqueOrThrowArgs>(args: SelectSubset<T, UserModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserModelClient<$Result.GetResult<Prisma.$UserModelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindFirstArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserModelFindFirstArgs>(args?: SelectSubset<T, UserModelFindFirstArgs<ExtArgs>>): Prisma__UserModelClient<$Result.GetResult<Prisma.$UserModelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindFirstOrThrowArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserModelFindFirstOrThrowArgs>(args?: SelectSubset<T, UserModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserModelClient<$Result.GetResult<Prisma.$UserModelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserModels
     * const userModels = await prisma.userModel.findMany()
     * 
     * // Get first 10 UserModels
     * const userModels = await prisma.userModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userModelWithIdOnly = await prisma.userModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserModelFindManyArgs>(args?: SelectSubset<T, UserModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserModel.
     * @param {UserModelCreateArgs} args - Arguments to create a UserModel.
     * @example
     * // Create one UserModel
     * const UserModel = await prisma.userModel.create({
     *   data: {
     *     // ... data to create a UserModel
     *   }
     * })
     * 
     */
    create<T extends UserModelCreateArgs>(args: SelectSubset<T, UserModelCreateArgs<ExtArgs>>): Prisma__UserModelClient<$Result.GetResult<Prisma.$UserModelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserModels.
     * @param {UserModelCreateManyArgs} args - Arguments to create many UserModels.
     * @example
     * // Create many UserModels
     * const userModel = await prisma.userModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserModelCreateManyArgs>(args?: SelectSubset<T, UserModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserModels and returns the data saved in the database.
     * @param {UserModelCreateManyAndReturnArgs} args - Arguments to create many UserModels.
     * @example
     * // Create many UserModels
     * const userModel = await prisma.userModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserModels and only return the `id`
     * const userModelWithIdOnly = await prisma.userModel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserModelCreateManyAndReturnArgs>(args?: SelectSubset<T, UserModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserModel.
     * @param {UserModelDeleteArgs} args - Arguments to delete one UserModel.
     * @example
     * // Delete one UserModel
     * const UserModel = await prisma.userModel.delete({
     *   where: {
     *     // ... filter to delete one UserModel
     *   }
     * })
     * 
     */
    delete<T extends UserModelDeleteArgs>(args: SelectSubset<T, UserModelDeleteArgs<ExtArgs>>): Prisma__UserModelClient<$Result.GetResult<Prisma.$UserModelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserModel.
     * @param {UserModelUpdateArgs} args - Arguments to update one UserModel.
     * @example
     * // Update one UserModel
     * const userModel = await prisma.userModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserModelUpdateArgs>(args: SelectSubset<T, UserModelUpdateArgs<ExtArgs>>): Prisma__UserModelClient<$Result.GetResult<Prisma.$UserModelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserModels.
     * @param {UserModelDeleteManyArgs} args - Arguments to filter UserModels to delete.
     * @example
     * // Delete a few UserModels
     * const { count } = await prisma.userModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserModelDeleteManyArgs>(args?: SelectSubset<T, UserModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserModels
     * const userModel = await prisma.userModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserModelUpdateManyArgs>(args: SelectSubset<T, UserModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserModel.
     * @param {UserModelUpsertArgs} args - Arguments to update or create a UserModel.
     * @example
     * // Update or create a UserModel
     * const userModel = await prisma.userModel.upsert({
     *   create: {
     *     // ... data to create a UserModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserModel we want to update
     *   }
     * })
     */
    upsert<T extends UserModelUpsertArgs>(args: SelectSubset<T, UserModelUpsertArgs<ExtArgs>>): Prisma__UserModelClient<$Result.GetResult<Prisma.$UserModelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelCountArgs} args - Arguments to filter UserModels to count.
     * @example
     * // Count the number of UserModels
     * const count = await prisma.userModel.count({
     *   where: {
     *     // ... the filter for the UserModels we want to count
     *   }
     * })
    **/
    count<T extends UserModelCountArgs>(
      args?: Subset<T, UserModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserModelAggregateArgs>(args: Subset<T, UserModelAggregateArgs>): Prisma.PrismaPromise<GetUserModelAggregateType<T>>

    /**
     * Group by UserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserModelGroupByArgs['orderBy'] }
        : { orderBy?: UserModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserModel model
   */
  readonly fields: UserModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserModel$userArgs<ExtArgs> = {}>(args?: Subset<T, UserModel$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    modelComponents<T extends UserModel$modelComponentsArgs<ExtArgs> = {}>(args?: Subset<T, UserModel$modelComponentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelComponentPayload<ExtArgs>, T, "findMany"> | Null>
    aiSuggestions<T extends UserModel$aiSuggestionsArgs<ExtArgs> = {}>(args?: Subset<T, UserModel$aiSuggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiSuggestionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserModel model
   */ 
  interface UserModelFieldRefs {
    readonly id: FieldRef<"UserModel", 'String'>
    readonly name: FieldRef<"UserModel", 'String'>
    readonly description: FieldRef<"UserModel", 'String'>
    readonly definition: FieldRef<"UserModel", 'Json'>
    readonly userId: FieldRef<"UserModel", 'String'>
    readonly isPublic: FieldRef<"UserModel", 'Boolean'>
    readonly isListed: FieldRef<"UserModel", 'Boolean'>
    readonly shareToken: FieldRef<"UserModel", 'String'>
    readonly isDeleted: FieldRef<"UserModel", 'Boolean'>
    readonly createdAt: FieldRef<"UserModel", 'DateTime'>
    readonly updatedAt: FieldRef<"UserModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserModel findUnique
   */
  export type UserModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * Filter, which UserModel to fetch.
     */
    where: UserModelWhereUniqueInput
  }

  /**
   * UserModel findUniqueOrThrow
   */
  export type UserModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * Filter, which UserModel to fetch.
     */
    where: UserModelWhereUniqueInput
  }

  /**
   * UserModel findFirst
   */
  export type UserModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * Filter, which UserModel to fetch.
     */
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     */
    orderBy?: UserModelOrderByWithRelationInput | UserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModels.
     */
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModels.
     */
    distinct?: UserModelScalarFieldEnum | UserModelScalarFieldEnum[]
  }

  /**
   * UserModel findFirstOrThrow
   */
  export type UserModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * Filter, which UserModel to fetch.
     */
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     */
    orderBy?: UserModelOrderByWithRelationInput | UserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModels.
     */
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModels.
     */
    distinct?: UserModelScalarFieldEnum | UserModelScalarFieldEnum[]
  }

  /**
   * UserModel findMany
   */
  export type UserModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * Filter, which UserModels to fetch.
     */
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     */
    orderBy?: UserModelOrderByWithRelationInput | UserModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserModels.
     */
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     */
    skip?: number
    distinct?: UserModelScalarFieldEnum | UserModelScalarFieldEnum[]
  }

  /**
   * UserModel create
   */
  export type UserModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * The data needed to create a UserModel.
     */
    data: XOR<UserModelCreateInput, UserModelUncheckedCreateInput>
  }

  /**
   * UserModel createMany
   */
  export type UserModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserModels.
     */
    data: UserModelCreateManyInput | UserModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserModel createManyAndReturn
   */
  export type UserModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserModels.
     */
    data: UserModelCreateManyInput | UserModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserModel update
   */
  export type UserModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * The data needed to update a UserModel.
     */
    data: XOR<UserModelUpdateInput, UserModelUncheckedUpdateInput>
    /**
     * Choose, which UserModel to update.
     */
    where: UserModelWhereUniqueInput
  }

  /**
   * UserModel updateMany
   */
  export type UserModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserModels.
     */
    data: XOR<UserModelUpdateManyMutationInput, UserModelUncheckedUpdateManyInput>
    /**
     * Filter which UserModels to update
     */
    where?: UserModelWhereInput
  }

  /**
   * UserModel upsert
   */
  export type UserModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * The filter to search for the UserModel to update in case it exists.
     */
    where: UserModelWhereUniqueInput
    /**
     * In case the UserModel found by the `where` argument doesn't exist, create a new UserModel with this data.
     */
    create: XOR<UserModelCreateInput, UserModelUncheckedCreateInput>
    /**
     * In case the UserModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserModelUpdateInput, UserModelUncheckedUpdateInput>
  }

  /**
   * UserModel delete
   */
  export type UserModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelInclude<ExtArgs> | null
    /**
     * Filter which UserModel to delete.
     */
    where: UserModelWhereUniqueInput
  }

  /**
   * UserModel deleteMany
   */
  export type UserModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModels to delete
     */
    where?: UserModelWhereInput
  }

  /**
   * UserModel.user
   */
  export type UserModel$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * UserModel.modelComponents
   */
  export type UserModel$modelComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelComponent
     */
    select?: ModelComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelComponentInclude<ExtArgs> | null
    where?: ModelComponentWhereInput
    orderBy?: ModelComponentOrderByWithRelationInput | ModelComponentOrderByWithRelationInput[]
    cursor?: ModelComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelComponentScalarFieldEnum | ModelComponentScalarFieldEnum[]
  }

  /**
   * UserModel.aiSuggestions
   */
  export type UserModel$aiSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSuggestion
     */
    select?: AiSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSuggestionInclude<ExtArgs> | null
    where?: AiSuggestionWhereInput
    orderBy?: AiSuggestionOrderByWithRelationInput | AiSuggestionOrderByWithRelationInput[]
    cursor?: AiSuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiSuggestionScalarFieldEnum | AiSuggestionScalarFieldEnum[]
  }

  /**
   * UserModel without action
   */
  export type UserModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelInclude<ExtArgs> | null
  }


  /**
   * Model ModelComponent
   */

  export type AggregateModelComponent = {
    _count: ModelComponentCountAggregateOutputType | null
    _avg: ModelComponentAvgAggregateOutputType | null
    _sum: ModelComponentSumAggregateOutputType | null
    _min: ModelComponentMinAggregateOutputType | null
    _max: ModelComponentMaxAggregateOutputType | null
  }

  export type ModelComponentAvgAggregateOutputType = {
    weight: number | null
  }

  export type ModelComponentSumAggregateOutputType = {
    weight: number | null
  }

  export type ModelComponentMinAggregateOutputType = {
    id: string | null
    modelId: string | null
    metricId: string | null
    weight: number | null
    isActive: boolean | null
  }

  export type ModelComponentMaxAggregateOutputType = {
    id: string | null
    modelId: string | null
    metricId: string | null
    weight: number | null
    isActive: boolean | null
  }

  export type ModelComponentCountAggregateOutputType = {
    id: number
    modelId: number
    metricId: number
    weight: number
    isActive: number
    _all: number
  }


  export type ModelComponentAvgAggregateInputType = {
    weight?: true
  }

  export type ModelComponentSumAggregateInputType = {
    weight?: true
  }

  export type ModelComponentMinAggregateInputType = {
    id?: true
    modelId?: true
    metricId?: true
    weight?: true
    isActive?: true
  }

  export type ModelComponentMaxAggregateInputType = {
    id?: true
    modelId?: true
    metricId?: true
    weight?: true
    isActive?: true
  }

  export type ModelComponentCountAggregateInputType = {
    id?: true
    modelId?: true
    metricId?: true
    weight?: true
    isActive?: true
    _all?: true
  }

  export type ModelComponentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelComponent to aggregate.
     */
    where?: ModelComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelComponents to fetch.
     */
    orderBy?: ModelComponentOrderByWithRelationInput | ModelComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelComponents
    **/
    _count?: true | ModelComponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelComponentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelComponentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelComponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelComponentMaxAggregateInputType
  }

  export type GetModelComponentAggregateType<T extends ModelComponentAggregateArgs> = {
        [P in keyof T & keyof AggregateModelComponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelComponent[P]>
      : GetScalarType<T[P], AggregateModelComponent[P]>
  }




  export type ModelComponentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelComponentWhereInput
    orderBy?: ModelComponentOrderByWithAggregationInput | ModelComponentOrderByWithAggregationInput[]
    by: ModelComponentScalarFieldEnum[] | ModelComponentScalarFieldEnum
    having?: ModelComponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelComponentCountAggregateInputType | true
    _avg?: ModelComponentAvgAggregateInputType
    _sum?: ModelComponentSumAggregateInputType
    _min?: ModelComponentMinAggregateInputType
    _max?: ModelComponentMaxAggregateInputType
  }

  export type ModelComponentGroupByOutputType = {
    id: string
    modelId: string
    metricId: string
    weight: number
    isActive: boolean
    _count: ModelComponentCountAggregateOutputType | null
    _avg: ModelComponentAvgAggregateOutputType | null
    _sum: ModelComponentSumAggregateOutputType | null
    _min: ModelComponentMinAggregateOutputType | null
    _max: ModelComponentMaxAggregateOutputType | null
  }

  type GetModelComponentGroupByPayload<T extends ModelComponentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelComponentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelComponentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelComponentGroupByOutputType[P]>
            : GetScalarType<T[P], ModelComponentGroupByOutputType[P]>
        }
      >
    >


  export type ModelComponentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    metricId?: boolean
    weight?: boolean
    isActive?: boolean
    model?: boolean | UserModelDefaultArgs<ExtArgs>
    metric?: boolean | MetricDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelComponent"]>

  export type ModelComponentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    metricId?: boolean
    weight?: boolean
    isActive?: boolean
    model?: boolean | UserModelDefaultArgs<ExtArgs>
    metric?: boolean | MetricDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelComponent"]>

  export type ModelComponentSelectScalar = {
    id?: boolean
    modelId?: boolean
    metricId?: boolean
    weight?: boolean
    isActive?: boolean
  }

  export type ModelComponentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | UserModelDefaultArgs<ExtArgs>
    metric?: boolean | MetricDefaultArgs<ExtArgs>
  }
  export type ModelComponentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | UserModelDefaultArgs<ExtArgs>
    metric?: boolean | MetricDefaultArgs<ExtArgs>
  }

  export type $ModelComponentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelComponent"
    objects: {
      model: Prisma.$UserModelPayload<ExtArgs>
      metric: Prisma.$MetricPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      modelId: string
      metricId: string
      weight: number
      isActive: boolean
    }, ExtArgs["result"]["modelComponent"]>
    composites: {}
  }

  type ModelComponentGetPayload<S extends boolean | null | undefined | ModelComponentDefaultArgs> = $Result.GetResult<Prisma.$ModelComponentPayload, S>

  type ModelComponentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModelComponentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ModelComponentCountAggregateInputType | true
    }

  export interface ModelComponentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelComponent'], meta: { name: 'ModelComponent' } }
    /**
     * Find zero or one ModelComponent that matches the filter.
     * @param {ModelComponentFindUniqueArgs} args - Arguments to find a ModelComponent
     * @example
     * // Get one ModelComponent
     * const modelComponent = await prisma.modelComponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelComponentFindUniqueArgs>(args: SelectSubset<T, ModelComponentFindUniqueArgs<ExtArgs>>): Prisma__ModelComponentClient<$Result.GetResult<Prisma.$ModelComponentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ModelComponent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ModelComponentFindUniqueOrThrowArgs} args - Arguments to find a ModelComponent
     * @example
     * // Get one ModelComponent
     * const modelComponent = await prisma.modelComponent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelComponentFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelComponentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelComponentClient<$Result.GetResult<Prisma.$ModelComponentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ModelComponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelComponentFindFirstArgs} args - Arguments to find a ModelComponent
     * @example
     * // Get one ModelComponent
     * const modelComponent = await prisma.modelComponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelComponentFindFirstArgs>(args?: SelectSubset<T, ModelComponentFindFirstArgs<ExtArgs>>): Prisma__ModelComponentClient<$Result.GetResult<Prisma.$ModelComponentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ModelComponent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelComponentFindFirstOrThrowArgs} args - Arguments to find a ModelComponent
     * @example
     * // Get one ModelComponent
     * const modelComponent = await prisma.modelComponent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelComponentFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelComponentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelComponentClient<$Result.GetResult<Prisma.$ModelComponentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ModelComponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelComponentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelComponents
     * const modelComponents = await prisma.modelComponent.findMany()
     * 
     * // Get first 10 ModelComponents
     * const modelComponents = await prisma.modelComponent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelComponentWithIdOnly = await prisma.modelComponent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelComponentFindManyArgs>(args?: SelectSubset<T, ModelComponentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelComponentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ModelComponent.
     * @param {ModelComponentCreateArgs} args - Arguments to create a ModelComponent.
     * @example
     * // Create one ModelComponent
     * const ModelComponent = await prisma.modelComponent.create({
     *   data: {
     *     // ... data to create a ModelComponent
     *   }
     * })
     * 
     */
    create<T extends ModelComponentCreateArgs>(args: SelectSubset<T, ModelComponentCreateArgs<ExtArgs>>): Prisma__ModelComponentClient<$Result.GetResult<Prisma.$ModelComponentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ModelComponents.
     * @param {ModelComponentCreateManyArgs} args - Arguments to create many ModelComponents.
     * @example
     * // Create many ModelComponents
     * const modelComponent = await prisma.modelComponent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelComponentCreateManyArgs>(args?: SelectSubset<T, ModelComponentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModelComponents and returns the data saved in the database.
     * @param {ModelComponentCreateManyAndReturnArgs} args - Arguments to create many ModelComponents.
     * @example
     * // Create many ModelComponents
     * const modelComponent = await prisma.modelComponent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModelComponents and only return the `id`
     * const modelComponentWithIdOnly = await prisma.modelComponent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelComponentCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelComponentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelComponentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ModelComponent.
     * @param {ModelComponentDeleteArgs} args - Arguments to delete one ModelComponent.
     * @example
     * // Delete one ModelComponent
     * const ModelComponent = await prisma.modelComponent.delete({
     *   where: {
     *     // ... filter to delete one ModelComponent
     *   }
     * })
     * 
     */
    delete<T extends ModelComponentDeleteArgs>(args: SelectSubset<T, ModelComponentDeleteArgs<ExtArgs>>): Prisma__ModelComponentClient<$Result.GetResult<Prisma.$ModelComponentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ModelComponent.
     * @param {ModelComponentUpdateArgs} args - Arguments to update one ModelComponent.
     * @example
     * // Update one ModelComponent
     * const modelComponent = await prisma.modelComponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelComponentUpdateArgs>(args: SelectSubset<T, ModelComponentUpdateArgs<ExtArgs>>): Prisma__ModelComponentClient<$Result.GetResult<Prisma.$ModelComponentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ModelComponents.
     * @param {ModelComponentDeleteManyArgs} args - Arguments to filter ModelComponents to delete.
     * @example
     * // Delete a few ModelComponents
     * const { count } = await prisma.modelComponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelComponentDeleteManyArgs>(args?: SelectSubset<T, ModelComponentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelComponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelComponents
     * const modelComponent = await prisma.modelComponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelComponentUpdateManyArgs>(args: SelectSubset<T, ModelComponentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModelComponent.
     * @param {ModelComponentUpsertArgs} args - Arguments to update or create a ModelComponent.
     * @example
     * // Update or create a ModelComponent
     * const modelComponent = await prisma.modelComponent.upsert({
     *   create: {
     *     // ... data to create a ModelComponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelComponent we want to update
     *   }
     * })
     */
    upsert<T extends ModelComponentUpsertArgs>(args: SelectSubset<T, ModelComponentUpsertArgs<ExtArgs>>): Prisma__ModelComponentClient<$Result.GetResult<Prisma.$ModelComponentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ModelComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelComponentCountArgs} args - Arguments to filter ModelComponents to count.
     * @example
     * // Count the number of ModelComponents
     * const count = await prisma.modelComponent.count({
     *   where: {
     *     // ... the filter for the ModelComponents we want to count
     *   }
     * })
    **/
    count<T extends ModelComponentCountArgs>(
      args?: Subset<T, ModelComponentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelComponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelComponentAggregateArgs>(args: Subset<T, ModelComponentAggregateArgs>): Prisma.PrismaPromise<GetModelComponentAggregateType<T>>

    /**
     * Group by ModelComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelComponentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModelComponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelComponentGroupByArgs['orderBy'] }
        : { orderBy?: ModelComponentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelComponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelComponentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelComponent model
   */
  readonly fields: ModelComponentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelComponent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelComponentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends UserModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserModelDefaultArgs<ExtArgs>>): Prisma__UserModelClient<$Result.GetResult<Prisma.$UserModelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    metric<T extends MetricDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MetricDefaultArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModelComponent model
   */ 
  interface ModelComponentFieldRefs {
    readonly id: FieldRef<"ModelComponent", 'String'>
    readonly modelId: FieldRef<"ModelComponent", 'String'>
    readonly metricId: FieldRef<"ModelComponent", 'String'>
    readonly weight: FieldRef<"ModelComponent", 'Float'>
    readonly isActive: FieldRef<"ModelComponent", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ModelComponent findUnique
   */
  export type ModelComponentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelComponent
     */
    select?: ModelComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelComponentInclude<ExtArgs> | null
    /**
     * Filter, which ModelComponent to fetch.
     */
    where: ModelComponentWhereUniqueInput
  }

  /**
   * ModelComponent findUniqueOrThrow
   */
  export type ModelComponentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelComponent
     */
    select?: ModelComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelComponentInclude<ExtArgs> | null
    /**
     * Filter, which ModelComponent to fetch.
     */
    where: ModelComponentWhereUniqueInput
  }

  /**
   * ModelComponent findFirst
   */
  export type ModelComponentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelComponent
     */
    select?: ModelComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelComponentInclude<ExtArgs> | null
    /**
     * Filter, which ModelComponent to fetch.
     */
    where?: ModelComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelComponents to fetch.
     */
    orderBy?: ModelComponentOrderByWithRelationInput | ModelComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelComponents.
     */
    cursor?: ModelComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelComponents.
     */
    distinct?: ModelComponentScalarFieldEnum | ModelComponentScalarFieldEnum[]
  }

  /**
   * ModelComponent findFirstOrThrow
   */
  export type ModelComponentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelComponent
     */
    select?: ModelComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelComponentInclude<ExtArgs> | null
    /**
     * Filter, which ModelComponent to fetch.
     */
    where?: ModelComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelComponents to fetch.
     */
    orderBy?: ModelComponentOrderByWithRelationInput | ModelComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelComponents.
     */
    cursor?: ModelComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelComponents.
     */
    distinct?: ModelComponentScalarFieldEnum | ModelComponentScalarFieldEnum[]
  }

  /**
   * ModelComponent findMany
   */
  export type ModelComponentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelComponent
     */
    select?: ModelComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelComponentInclude<ExtArgs> | null
    /**
     * Filter, which ModelComponents to fetch.
     */
    where?: ModelComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelComponents to fetch.
     */
    orderBy?: ModelComponentOrderByWithRelationInput | ModelComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelComponents.
     */
    cursor?: ModelComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelComponents.
     */
    skip?: number
    distinct?: ModelComponentScalarFieldEnum | ModelComponentScalarFieldEnum[]
  }

  /**
   * ModelComponent create
   */
  export type ModelComponentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelComponent
     */
    select?: ModelComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelComponentInclude<ExtArgs> | null
    /**
     * The data needed to create a ModelComponent.
     */
    data: XOR<ModelComponentCreateInput, ModelComponentUncheckedCreateInput>
  }

  /**
   * ModelComponent createMany
   */
  export type ModelComponentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelComponents.
     */
    data: ModelComponentCreateManyInput | ModelComponentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelComponent createManyAndReturn
   */
  export type ModelComponentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelComponent
     */
    select?: ModelComponentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ModelComponents.
     */
    data: ModelComponentCreateManyInput | ModelComponentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelComponentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModelComponent update
   */
  export type ModelComponentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelComponent
     */
    select?: ModelComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelComponentInclude<ExtArgs> | null
    /**
     * The data needed to update a ModelComponent.
     */
    data: XOR<ModelComponentUpdateInput, ModelComponentUncheckedUpdateInput>
    /**
     * Choose, which ModelComponent to update.
     */
    where: ModelComponentWhereUniqueInput
  }

  /**
   * ModelComponent updateMany
   */
  export type ModelComponentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelComponents.
     */
    data: XOR<ModelComponentUpdateManyMutationInput, ModelComponentUncheckedUpdateManyInput>
    /**
     * Filter which ModelComponents to update
     */
    where?: ModelComponentWhereInput
  }

  /**
   * ModelComponent upsert
   */
  export type ModelComponentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelComponent
     */
    select?: ModelComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelComponentInclude<ExtArgs> | null
    /**
     * The filter to search for the ModelComponent to update in case it exists.
     */
    where: ModelComponentWhereUniqueInput
    /**
     * In case the ModelComponent found by the `where` argument doesn't exist, create a new ModelComponent with this data.
     */
    create: XOR<ModelComponentCreateInput, ModelComponentUncheckedCreateInput>
    /**
     * In case the ModelComponent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelComponentUpdateInput, ModelComponentUncheckedUpdateInput>
  }

  /**
   * ModelComponent delete
   */
  export type ModelComponentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelComponent
     */
    select?: ModelComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelComponentInclude<ExtArgs> | null
    /**
     * Filter which ModelComponent to delete.
     */
    where: ModelComponentWhereUniqueInput
  }

  /**
   * ModelComponent deleteMany
   */
  export type ModelComponentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelComponents to delete
     */
    where?: ModelComponentWhereInput
  }

  /**
   * ModelComponent without action
   */
  export type ModelComponentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelComponent
     */
    select?: ModelComponentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelComponentInclude<ExtArgs> | null
  }


  /**
   * Model AiSuggestion
   */

  export type AggregateAiSuggestion = {
    _count: AiSuggestionCountAggregateOutputType | null
    _min: AiSuggestionMinAggregateOutputType | null
    _max: AiSuggestionMaxAggregateOutputType | null
  }

  export type AiSuggestionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    modelId: string | null
    context: string | null
    wasAccepted: boolean | null
    createdAt: Date | null
  }

  export type AiSuggestionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    modelId: string | null
    context: string | null
    wasAccepted: boolean | null
    createdAt: Date | null
  }

  export type AiSuggestionCountAggregateOutputType = {
    id: number
    userId: number
    modelId: number
    context: number
    suggestedMetrics: number
    wasAccepted: number
    createdAt: number
    _all: number
  }


  export type AiSuggestionMinAggregateInputType = {
    id?: true
    userId?: true
    modelId?: true
    context?: true
    wasAccepted?: true
    createdAt?: true
  }

  export type AiSuggestionMaxAggregateInputType = {
    id?: true
    userId?: true
    modelId?: true
    context?: true
    wasAccepted?: true
    createdAt?: true
  }

  export type AiSuggestionCountAggregateInputType = {
    id?: true
    userId?: true
    modelId?: true
    context?: true
    suggestedMetrics?: true
    wasAccepted?: true
    createdAt?: true
    _all?: true
  }

  export type AiSuggestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiSuggestion to aggregate.
     */
    where?: AiSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiSuggestions to fetch.
     */
    orderBy?: AiSuggestionOrderByWithRelationInput | AiSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiSuggestions
    **/
    _count?: true | AiSuggestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiSuggestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiSuggestionMaxAggregateInputType
  }

  export type GetAiSuggestionAggregateType<T extends AiSuggestionAggregateArgs> = {
        [P in keyof T & keyof AggregateAiSuggestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiSuggestion[P]>
      : GetScalarType<T[P], AggregateAiSuggestion[P]>
  }




  export type AiSuggestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiSuggestionWhereInput
    orderBy?: AiSuggestionOrderByWithAggregationInput | AiSuggestionOrderByWithAggregationInput[]
    by: AiSuggestionScalarFieldEnum[] | AiSuggestionScalarFieldEnum
    having?: AiSuggestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiSuggestionCountAggregateInputType | true
    _min?: AiSuggestionMinAggregateInputType
    _max?: AiSuggestionMaxAggregateInputType
  }

  export type AiSuggestionGroupByOutputType = {
    id: string
    userId: string | null
    modelId: string | null
    context: string
    suggestedMetrics: JsonValue
    wasAccepted: boolean
    createdAt: Date
    _count: AiSuggestionCountAggregateOutputType | null
    _min: AiSuggestionMinAggregateOutputType | null
    _max: AiSuggestionMaxAggregateOutputType | null
  }

  type GetAiSuggestionGroupByPayload<T extends AiSuggestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiSuggestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiSuggestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiSuggestionGroupByOutputType[P]>
            : GetScalarType<T[P], AiSuggestionGroupByOutputType[P]>
        }
      >
    >


  export type AiSuggestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    modelId?: boolean
    context?: boolean
    suggestedMetrics?: boolean
    wasAccepted?: boolean
    createdAt?: boolean
    user?: boolean | AiSuggestion$userArgs<ExtArgs>
    model?: boolean | AiSuggestion$modelArgs<ExtArgs>
  }, ExtArgs["result"]["aiSuggestion"]>

  export type AiSuggestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    modelId?: boolean
    context?: boolean
    suggestedMetrics?: boolean
    wasAccepted?: boolean
    createdAt?: boolean
    user?: boolean | AiSuggestion$userArgs<ExtArgs>
    model?: boolean | AiSuggestion$modelArgs<ExtArgs>
  }, ExtArgs["result"]["aiSuggestion"]>

  export type AiSuggestionSelectScalar = {
    id?: boolean
    userId?: boolean
    modelId?: boolean
    context?: boolean
    suggestedMetrics?: boolean
    wasAccepted?: boolean
    createdAt?: boolean
  }

  export type AiSuggestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AiSuggestion$userArgs<ExtArgs>
    model?: boolean | AiSuggestion$modelArgs<ExtArgs>
  }
  export type AiSuggestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AiSuggestion$userArgs<ExtArgs>
    model?: boolean | AiSuggestion$modelArgs<ExtArgs>
  }

  export type $AiSuggestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiSuggestion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      model: Prisma.$UserModelPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      modelId: string | null
      context: string
      suggestedMetrics: Prisma.JsonValue
      wasAccepted: boolean
      createdAt: Date
    }, ExtArgs["result"]["aiSuggestion"]>
    composites: {}
  }

  type AiSuggestionGetPayload<S extends boolean | null | undefined | AiSuggestionDefaultArgs> = $Result.GetResult<Prisma.$AiSuggestionPayload, S>

  type AiSuggestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AiSuggestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AiSuggestionCountAggregateInputType | true
    }

  export interface AiSuggestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiSuggestion'], meta: { name: 'AiSuggestion' } }
    /**
     * Find zero or one AiSuggestion that matches the filter.
     * @param {AiSuggestionFindUniqueArgs} args - Arguments to find a AiSuggestion
     * @example
     * // Get one AiSuggestion
     * const aiSuggestion = await prisma.aiSuggestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiSuggestionFindUniqueArgs>(args: SelectSubset<T, AiSuggestionFindUniqueArgs<ExtArgs>>): Prisma__AiSuggestionClient<$Result.GetResult<Prisma.$AiSuggestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AiSuggestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AiSuggestionFindUniqueOrThrowArgs} args - Arguments to find a AiSuggestion
     * @example
     * // Get one AiSuggestion
     * const aiSuggestion = await prisma.aiSuggestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiSuggestionFindUniqueOrThrowArgs>(args: SelectSubset<T, AiSuggestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiSuggestionClient<$Result.GetResult<Prisma.$AiSuggestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AiSuggestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSuggestionFindFirstArgs} args - Arguments to find a AiSuggestion
     * @example
     * // Get one AiSuggestion
     * const aiSuggestion = await prisma.aiSuggestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiSuggestionFindFirstArgs>(args?: SelectSubset<T, AiSuggestionFindFirstArgs<ExtArgs>>): Prisma__AiSuggestionClient<$Result.GetResult<Prisma.$AiSuggestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AiSuggestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSuggestionFindFirstOrThrowArgs} args - Arguments to find a AiSuggestion
     * @example
     * // Get one AiSuggestion
     * const aiSuggestion = await prisma.aiSuggestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiSuggestionFindFirstOrThrowArgs>(args?: SelectSubset<T, AiSuggestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiSuggestionClient<$Result.GetResult<Prisma.$AiSuggestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AiSuggestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSuggestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiSuggestions
     * const aiSuggestions = await prisma.aiSuggestion.findMany()
     * 
     * // Get first 10 AiSuggestions
     * const aiSuggestions = await prisma.aiSuggestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiSuggestionWithIdOnly = await prisma.aiSuggestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiSuggestionFindManyArgs>(args?: SelectSubset<T, AiSuggestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiSuggestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AiSuggestion.
     * @param {AiSuggestionCreateArgs} args - Arguments to create a AiSuggestion.
     * @example
     * // Create one AiSuggestion
     * const AiSuggestion = await prisma.aiSuggestion.create({
     *   data: {
     *     // ... data to create a AiSuggestion
     *   }
     * })
     * 
     */
    create<T extends AiSuggestionCreateArgs>(args: SelectSubset<T, AiSuggestionCreateArgs<ExtArgs>>): Prisma__AiSuggestionClient<$Result.GetResult<Prisma.$AiSuggestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AiSuggestions.
     * @param {AiSuggestionCreateManyArgs} args - Arguments to create many AiSuggestions.
     * @example
     * // Create many AiSuggestions
     * const aiSuggestion = await prisma.aiSuggestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiSuggestionCreateManyArgs>(args?: SelectSubset<T, AiSuggestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiSuggestions and returns the data saved in the database.
     * @param {AiSuggestionCreateManyAndReturnArgs} args - Arguments to create many AiSuggestions.
     * @example
     * // Create many AiSuggestions
     * const aiSuggestion = await prisma.aiSuggestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiSuggestions and only return the `id`
     * const aiSuggestionWithIdOnly = await prisma.aiSuggestion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiSuggestionCreateManyAndReturnArgs>(args?: SelectSubset<T, AiSuggestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiSuggestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AiSuggestion.
     * @param {AiSuggestionDeleteArgs} args - Arguments to delete one AiSuggestion.
     * @example
     * // Delete one AiSuggestion
     * const AiSuggestion = await prisma.aiSuggestion.delete({
     *   where: {
     *     // ... filter to delete one AiSuggestion
     *   }
     * })
     * 
     */
    delete<T extends AiSuggestionDeleteArgs>(args: SelectSubset<T, AiSuggestionDeleteArgs<ExtArgs>>): Prisma__AiSuggestionClient<$Result.GetResult<Prisma.$AiSuggestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AiSuggestion.
     * @param {AiSuggestionUpdateArgs} args - Arguments to update one AiSuggestion.
     * @example
     * // Update one AiSuggestion
     * const aiSuggestion = await prisma.aiSuggestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiSuggestionUpdateArgs>(args: SelectSubset<T, AiSuggestionUpdateArgs<ExtArgs>>): Prisma__AiSuggestionClient<$Result.GetResult<Prisma.$AiSuggestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AiSuggestions.
     * @param {AiSuggestionDeleteManyArgs} args - Arguments to filter AiSuggestions to delete.
     * @example
     * // Delete a few AiSuggestions
     * const { count } = await prisma.aiSuggestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiSuggestionDeleteManyArgs>(args?: SelectSubset<T, AiSuggestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiSuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSuggestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiSuggestions
     * const aiSuggestion = await prisma.aiSuggestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiSuggestionUpdateManyArgs>(args: SelectSubset<T, AiSuggestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AiSuggestion.
     * @param {AiSuggestionUpsertArgs} args - Arguments to update or create a AiSuggestion.
     * @example
     * // Update or create a AiSuggestion
     * const aiSuggestion = await prisma.aiSuggestion.upsert({
     *   create: {
     *     // ... data to create a AiSuggestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiSuggestion we want to update
     *   }
     * })
     */
    upsert<T extends AiSuggestionUpsertArgs>(args: SelectSubset<T, AiSuggestionUpsertArgs<ExtArgs>>): Prisma__AiSuggestionClient<$Result.GetResult<Prisma.$AiSuggestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AiSuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSuggestionCountArgs} args - Arguments to filter AiSuggestions to count.
     * @example
     * // Count the number of AiSuggestions
     * const count = await prisma.aiSuggestion.count({
     *   where: {
     *     // ... the filter for the AiSuggestions we want to count
     *   }
     * })
    **/
    count<T extends AiSuggestionCountArgs>(
      args?: Subset<T, AiSuggestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiSuggestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiSuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSuggestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiSuggestionAggregateArgs>(args: Subset<T, AiSuggestionAggregateArgs>): Prisma.PrismaPromise<GetAiSuggestionAggregateType<T>>

    /**
     * Group by AiSuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSuggestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiSuggestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiSuggestionGroupByArgs['orderBy'] }
        : { orderBy?: AiSuggestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiSuggestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiSuggestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiSuggestion model
   */
  readonly fields: AiSuggestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiSuggestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiSuggestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AiSuggestion$userArgs<ExtArgs> = {}>(args?: Subset<T, AiSuggestion$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    model<T extends AiSuggestion$modelArgs<ExtArgs> = {}>(args?: Subset<T, AiSuggestion$modelArgs<ExtArgs>>): Prisma__UserModelClient<$Result.GetResult<Prisma.$UserModelPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiSuggestion model
   */ 
  interface AiSuggestionFieldRefs {
    readonly id: FieldRef<"AiSuggestion", 'String'>
    readonly userId: FieldRef<"AiSuggestion", 'String'>
    readonly modelId: FieldRef<"AiSuggestion", 'String'>
    readonly context: FieldRef<"AiSuggestion", 'String'>
    readonly suggestedMetrics: FieldRef<"AiSuggestion", 'Json'>
    readonly wasAccepted: FieldRef<"AiSuggestion", 'Boolean'>
    readonly createdAt: FieldRef<"AiSuggestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiSuggestion findUnique
   */
  export type AiSuggestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSuggestion
     */
    select?: AiSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AiSuggestion to fetch.
     */
    where: AiSuggestionWhereUniqueInput
  }

  /**
   * AiSuggestion findUniqueOrThrow
   */
  export type AiSuggestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSuggestion
     */
    select?: AiSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AiSuggestion to fetch.
     */
    where: AiSuggestionWhereUniqueInput
  }

  /**
   * AiSuggestion findFirst
   */
  export type AiSuggestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSuggestion
     */
    select?: AiSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AiSuggestion to fetch.
     */
    where?: AiSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiSuggestions to fetch.
     */
    orderBy?: AiSuggestionOrderByWithRelationInput | AiSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiSuggestions.
     */
    cursor?: AiSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiSuggestions.
     */
    distinct?: AiSuggestionScalarFieldEnum | AiSuggestionScalarFieldEnum[]
  }

  /**
   * AiSuggestion findFirstOrThrow
   */
  export type AiSuggestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSuggestion
     */
    select?: AiSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AiSuggestion to fetch.
     */
    where?: AiSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiSuggestions to fetch.
     */
    orderBy?: AiSuggestionOrderByWithRelationInput | AiSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiSuggestions.
     */
    cursor?: AiSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiSuggestions.
     */
    distinct?: AiSuggestionScalarFieldEnum | AiSuggestionScalarFieldEnum[]
  }

  /**
   * AiSuggestion findMany
   */
  export type AiSuggestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSuggestion
     */
    select?: AiSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which AiSuggestions to fetch.
     */
    where?: AiSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiSuggestions to fetch.
     */
    orderBy?: AiSuggestionOrderByWithRelationInput | AiSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiSuggestions.
     */
    cursor?: AiSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiSuggestions.
     */
    skip?: number
    distinct?: AiSuggestionScalarFieldEnum | AiSuggestionScalarFieldEnum[]
  }

  /**
   * AiSuggestion create
   */
  export type AiSuggestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSuggestion
     */
    select?: AiSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSuggestionInclude<ExtArgs> | null
    /**
     * The data needed to create a AiSuggestion.
     */
    data: XOR<AiSuggestionCreateInput, AiSuggestionUncheckedCreateInput>
  }

  /**
   * AiSuggestion createMany
   */
  export type AiSuggestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiSuggestions.
     */
    data: AiSuggestionCreateManyInput | AiSuggestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiSuggestion createManyAndReturn
   */
  export type AiSuggestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSuggestion
     */
    select?: AiSuggestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AiSuggestions.
     */
    data: AiSuggestionCreateManyInput | AiSuggestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSuggestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiSuggestion update
   */
  export type AiSuggestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSuggestion
     */
    select?: AiSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSuggestionInclude<ExtArgs> | null
    /**
     * The data needed to update a AiSuggestion.
     */
    data: XOR<AiSuggestionUpdateInput, AiSuggestionUncheckedUpdateInput>
    /**
     * Choose, which AiSuggestion to update.
     */
    where: AiSuggestionWhereUniqueInput
  }

  /**
   * AiSuggestion updateMany
   */
  export type AiSuggestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiSuggestions.
     */
    data: XOR<AiSuggestionUpdateManyMutationInput, AiSuggestionUncheckedUpdateManyInput>
    /**
     * Filter which AiSuggestions to update
     */
    where?: AiSuggestionWhereInput
  }

  /**
   * AiSuggestion upsert
   */
  export type AiSuggestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSuggestion
     */
    select?: AiSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSuggestionInclude<ExtArgs> | null
    /**
     * The filter to search for the AiSuggestion to update in case it exists.
     */
    where: AiSuggestionWhereUniqueInput
    /**
     * In case the AiSuggestion found by the `where` argument doesn't exist, create a new AiSuggestion with this data.
     */
    create: XOR<AiSuggestionCreateInput, AiSuggestionUncheckedCreateInput>
    /**
     * In case the AiSuggestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiSuggestionUpdateInput, AiSuggestionUncheckedUpdateInput>
  }

  /**
   * AiSuggestion delete
   */
  export type AiSuggestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSuggestion
     */
    select?: AiSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSuggestionInclude<ExtArgs> | null
    /**
     * Filter which AiSuggestion to delete.
     */
    where: AiSuggestionWhereUniqueInput
  }

  /**
   * AiSuggestion deleteMany
   */
  export type AiSuggestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiSuggestions to delete
     */
    where?: AiSuggestionWhereInput
  }

  /**
   * AiSuggestion.user
   */
  export type AiSuggestion$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AiSuggestion.model
   */
  export type AiSuggestion$modelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelInclude<ExtArgs> | null
    where?: UserModelWhereInput
  }

  /**
   * AiSuggestion without action
   */
  export type AiSuggestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSuggestion
     */
    select?: AiSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSuggestionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    abbreviation: 'abbreviation',
    city: 'city',
    conference: 'conference',
    division: 'division',
    logoUrl: 'logoUrl',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    position: 'position',
    number: 'number',
    height: 'height',
    weight: 'weight',
    age: 'age',
    teamId: 'teamId',
    isActive: 'isActive',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const RefereeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    number: 'number',
    position: 'position',
    yearsExp: 'yearsExp',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RefereeScalarFieldEnum = (typeof RefereeScalarFieldEnum)[keyof typeof RefereeScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    gameDate: 'gameDate',
    week: 'week',
    season: 'season',
    homeTeamId: 'homeTeamId',
    awayTeamId: 'awayTeamId',
    refereeId: 'refereeId',
    homeScore: 'homeScore',
    awayScore: 'awayScore',
    status: 'status',
    venue: 'venue',
    temperature: 'temperature',
    weather: 'weather',
    attendance: 'attendance',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const MetricScalarFieldEnum: {
    id: 'id',
    name: 'name',
    displayName: 'displayName',
    description: 'description',
    category: 'category',
    dataType: 'dataType',
    unit: 'unit',
    isActive: 'isActive',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetricScalarFieldEnum = (typeof MetricScalarFieldEnum)[keyof typeof MetricScalarFieldEnum]


  export const UserModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    definition: 'definition',
    userId: 'userId',
    isPublic: 'isPublic',
    isListed: 'isListed',
    shareToken: 'shareToken',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserModelScalarFieldEnum = (typeof UserModelScalarFieldEnum)[keyof typeof UserModelScalarFieldEnum]


  export const ModelComponentScalarFieldEnum: {
    id: 'id',
    modelId: 'modelId',
    metricId: 'metricId',
    weight: 'weight',
    isActive: 'isActive'
  };

  export type ModelComponentScalarFieldEnum = (typeof ModelComponentScalarFieldEnum)[keyof typeof ModelComponentScalarFieldEnum]


  export const AiSuggestionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    modelId: 'modelId',
    context: 'context',
    suggestedMetrics: 'suggestedMetrics',
    wasAccepted: 'wasAccepted',
    createdAt: 'createdAt'
  };

  export type AiSuggestionScalarFieldEnum = (typeof AiSuggestionScalarFieldEnum)[keyof typeof AiSuggestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Position'
   */
  export type EnumPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Position'>
    


  /**
   * Reference to a field of type 'Position[]'
   */
  export type ListEnumPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Position[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'GameStatus[]'
   */
  export type ListEnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus[]'>
    


  /**
   * Reference to a field of type 'MetricCategory'
   */
  export type EnumMetricCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricCategory'>
    


  /**
   * Reference to a field of type 'MetricCategory[]'
   */
  export type ListEnumMetricCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricCategory[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userModels?: UserModelListRelationFilter
    aiSuggestions?: AiSuggestionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userModels?: UserModelOrderByRelationAggregateInput
    aiSuggestions?: AiSuggestionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userModels?: UserModelListRelationFilter
    aiSuggestions?: AiSuggestionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    abbreviation?: StringFilter<"Team"> | string
    city?: StringFilter<"Team"> | string
    conference?: StringNullableFilter<"Team"> | string | null
    division?: StringNullableFilter<"Team"> | string | null
    logoUrl?: StringNullableFilter<"Team"> | string | null
    isDeleted?: BoolFilter<"Team"> | boolean
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    players?: PlayerListRelationFilter
    homeGames?: GameListRelationFilter
    awayGames?: GameListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    city?: SortOrder
    conference?: SortOrderInput | SortOrder
    division?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    players?: PlayerOrderByRelationAggregateInput
    homeGames?: GameOrderByRelationAggregateInput
    awayGames?: GameOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    abbreviation?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    city?: StringFilter<"Team"> | string
    conference?: StringNullableFilter<"Team"> | string | null
    division?: StringNullableFilter<"Team"> | string | null
    logoUrl?: StringNullableFilter<"Team"> | string | null
    isDeleted?: BoolFilter<"Team"> | boolean
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    players?: PlayerListRelationFilter
    homeGames?: GameListRelationFilter
    awayGames?: GameListRelationFilter
  }, "id" | "abbreviation">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    city?: SortOrder
    conference?: SortOrderInput | SortOrder
    division?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    abbreviation?: StringWithAggregatesFilter<"Team"> | string
    city?: StringWithAggregatesFilter<"Team"> | string
    conference?: StringNullableWithAggregatesFilter<"Team"> | string | null
    division?: StringNullableWithAggregatesFilter<"Team"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Team"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Team"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    position?: EnumPositionFilter<"Player"> | $Enums.Position
    number?: IntNullableFilter<"Player"> | number | null
    height?: StringNullableFilter<"Player"> | string | null
    weight?: IntNullableFilter<"Player"> | number | null
    age?: IntNullableFilter<"Player"> | number | null
    teamId?: StringFilter<"Player"> | string
    isActive?: BoolFilter<"Player"> | boolean
    isDeleted?: BoolFilter<"Player"> | boolean
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    number?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    teamId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    name?: StringFilter<"Player"> | string
    position?: EnumPositionFilter<"Player"> | $Enums.Position
    number?: IntNullableFilter<"Player"> | number | null
    height?: StringNullableFilter<"Player"> | string | null
    weight?: IntNullableFilter<"Player"> | number | null
    age?: IntNullableFilter<"Player"> | number | null
    teamId?: StringFilter<"Player"> | string
    isActive?: BoolFilter<"Player"> | boolean
    isDeleted?: BoolFilter<"Player"> | boolean
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }, "id">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    number?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    teamId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Player"> | string
    name?: StringWithAggregatesFilter<"Player"> | string
    position?: EnumPositionWithAggregatesFilter<"Player"> | $Enums.Position
    number?: IntNullableWithAggregatesFilter<"Player"> | number | null
    height?: StringNullableWithAggregatesFilter<"Player"> | string | null
    weight?: IntNullableWithAggregatesFilter<"Player"> | number | null
    age?: IntNullableWithAggregatesFilter<"Player"> | number | null
    teamId?: StringWithAggregatesFilter<"Player"> | string
    isActive?: BoolWithAggregatesFilter<"Player"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Player"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
  }

  export type RefereeWhereInput = {
    AND?: RefereeWhereInput | RefereeWhereInput[]
    OR?: RefereeWhereInput[]
    NOT?: RefereeWhereInput | RefereeWhereInput[]
    id?: StringFilter<"Referee"> | string
    name?: StringFilter<"Referee"> | string
    number?: IntNullableFilter<"Referee"> | number | null
    position?: StringNullableFilter<"Referee"> | string | null
    yearsExp?: IntNullableFilter<"Referee"> | number | null
    isDeleted?: BoolFilter<"Referee"> | boolean
    createdAt?: DateTimeFilter<"Referee"> | Date | string
    updatedAt?: DateTimeFilter<"Referee"> | Date | string
    games?: GameListRelationFilter
  }

  export type RefereeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    yearsExp?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    games?: GameOrderByRelationAggregateInput
  }

  export type RefereeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    number?: number
    AND?: RefereeWhereInput | RefereeWhereInput[]
    OR?: RefereeWhereInput[]
    NOT?: RefereeWhereInput | RefereeWhereInput[]
    name?: StringFilter<"Referee"> | string
    position?: StringNullableFilter<"Referee"> | string | null
    yearsExp?: IntNullableFilter<"Referee"> | number | null
    isDeleted?: BoolFilter<"Referee"> | boolean
    createdAt?: DateTimeFilter<"Referee"> | Date | string
    updatedAt?: DateTimeFilter<"Referee"> | Date | string
    games?: GameListRelationFilter
  }, "id" | "number">

  export type RefereeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    yearsExp?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RefereeCountOrderByAggregateInput
    _avg?: RefereeAvgOrderByAggregateInput
    _max?: RefereeMaxOrderByAggregateInput
    _min?: RefereeMinOrderByAggregateInput
    _sum?: RefereeSumOrderByAggregateInput
  }

  export type RefereeScalarWhereWithAggregatesInput = {
    AND?: RefereeScalarWhereWithAggregatesInput | RefereeScalarWhereWithAggregatesInput[]
    OR?: RefereeScalarWhereWithAggregatesInput[]
    NOT?: RefereeScalarWhereWithAggregatesInput | RefereeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Referee"> | string
    name?: StringWithAggregatesFilter<"Referee"> | string
    number?: IntNullableWithAggregatesFilter<"Referee"> | number | null
    position?: StringNullableWithAggregatesFilter<"Referee"> | string | null
    yearsExp?: IntNullableWithAggregatesFilter<"Referee"> | number | null
    isDeleted?: BoolWithAggregatesFilter<"Referee"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Referee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Referee"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    gameDate?: DateTimeFilter<"Game"> | Date | string
    week?: IntNullableFilter<"Game"> | number | null
    season?: IntFilter<"Game"> | number
    homeTeamId?: StringFilter<"Game"> | string
    awayTeamId?: StringFilter<"Game"> | string
    refereeId?: StringNullableFilter<"Game"> | string | null
    homeScore?: IntNullableFilter<"Game"> | number | null
    awayScore?: IntNullableFilter<"Game"> | number | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    venue?: StringNullableFilter<"Game"> | string | null
    temperature?: IntNullableFilter<"Game"> | number | null
    weather?: StringNullableFilter<"Game"> | string | null
    attendance?: IntNullableFilter<"Game"> | number | null
    isDeleted?: BoolFilter<"Game"> | boolean
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    homeTeam?: XOR<TeamRelationFilter, TeamWhereInput>
    awayTeam?: XOR<TeamRelationFilter, TeamWhereInput>
    referee?: XOR<RefereeNullableRelationFilter, RefereeWhereInput> | null
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    gameDate?: SortOrder
    week?: SortOrderInput | SortOrder
    season?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    refereeId?: SortOrderInput | SortOrder
    homeScore?: SortOrderInput | SortOrder
    awayScore?: SortOrderInput | SortOrder
    status?: SortOrder
    venue?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    weather?: SortOrderInput | SortOrder
    attendance?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    homeTeam?: TeamOrderByWithRelationInput
    awayTeam?: TeamOrderByWithRelationInput
    referee?: RefereeOrderByWithRelationInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    gameDate?: DateTimeFilter<"Game"> | Date | string
    week?: IntNullableFilter<"Game"> | number | null
    season?: IntFilter<"Game"> | number
    homeTeamId?: StringFilter<"Game"> | string
    awayTeamId?: StringFilter<"Game"> | string
    refereeId?: StringNullableFilter<"Game"> | string | null
    homeScore?: IntNullableFilter<"Game"> | number | null
    awayScore?: IntNullableFilter<"Game"> | number | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    venue?: StringNullableFilter<"Game"> | string | null
    temperature?: IntNullableFilter<"Game"> | number | null
    weather?: StringNullableFilter<"Game"> | string | null
    attendance?: IntNullableFilter<"Game"> | number | null
    isDeleted?: BoolFilter<"Game"> | boolean
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    homeTeam?: XOR<TeamRelationFilter, TeamWhereInput>
    awayTeam?: XOR<TeamRelationFilter, TeamWhereInput>
    referee?: XOR<RefereeNullableRelationFilter, RefereeWhereInput> | null
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    gameDate?: SortOrder
    week?: SortOrderInput | SortOrder
    season?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    refereeId?: SortOrderInput | SortOrder
    homeScore?: SortOrderInput | SortOrder
    awayScore?: SortOrderInput | SortOrder
    status?: SortOrder
    venue?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    weather?: SortOrderInput | SortOrder
    attendance?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    gameDate?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    week?: IntNullableWithAggregatesFilter<"Game"> | number | null
    season?: IntWithAggregatesFilter<"Game"> | number
    homeTeamId?: StringWithAggregatesFilter<"Game"> | string
    awayTeamId?: StringWithAggregatesFilter<"Game"> | string
    refereeId?: StringNullableWithAggregatesFilter<"Game"> | string | null
    homeScore?: IntNullableWithAggregatesFilter<"Game"> | number | null
    awayScore?: IntNullableWithAggregatesFilter<"Game"> | number | null
    status?: EnumGameStatusWithAggregatesFilter<"Game"> | $Enums.GameStatus
    venue?: StringNullableWithAggregatesFilter<"Game"> | string | null
    temperature?: IntNullableWithAggregatesFilter<"Game"> | number | null
    weather?: StringNullableWithAggregatesFilter<"Game"> | string | null
    attendance?: IntNullableWithAggregatesFilter<"Game"> | number | null
    isDeleted?: BoolWithAggregatesFilter<"Game"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type MetricWhereInput = {
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    id?: StringFilter<"Metric"> | string
    name?: StringFilter<"Metric"> | string
    displayName?: StringFilter<"Metric"> | string
    description?: StringNullableFilter<"Metric"> | string | null
    category?: EnumMetricCategoryFilter<"Metric"> | $Enums.MetricCategory
    dataType?: StringFilter<"Metric"> | string
    unit?: StringNullableFilter<"Metric"> | string | null
    isActive?: BoolFilter<"Metric"> | boolean
    isDeleted?: BoolFilter<"Metric"> | boolean
    createdAt?: DateTimeFilter<"Metric"> | Date | string
    updatedAt?: DateTimeFilter<"Metric"> | Date | string
    modelComponents?: ModelComponentListRelationFilter
  }

  export type MetricOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    dataType?: SortOrder
    unit?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelComponents?: ModelComponentOrderByRelationAggregateInput
  }

  export type MetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    displayName?: StringFilter<"Metric"> | string
    description?: StringNullableFilter<"Metric"> | string | null
    category?: EnumMetricCategoryFilter<"Metric"> | $Enums.MetricCategory
    dataType?: StringFilter<"Metric"> | string
    unit?: StringNullableFilter<"Metric"> | string | null
    isActive?: BoolFilter<"Metric"> | boolean
    isDeleted?: BoolFilter<"Metric"> | boolean
    createdAt?: DateTimeFilter<"Metric"> | Date | string
    updatedAt?: DateTimeFilter<"Metric"> | Date | string
    modelComponents?: ModelComponentListRelationFilter
  }, "id" | "name">

  export type MetricOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    dataType?: SortOrder
    unit?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetricCountOrderByAggregateInput
    _max?: MetricMaxOrderByAggregateInput
    _min?: MetricMinOrderByAggregateInput
  }

  export type MetricScalarWhereWithAggregatesInput = {
    AND?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    OR?: MetricScalarWhereWithAggregatesInput[]
    NOT?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Metric"> | string
    name?: StringWithAggregatesFilter<"Metric"> | string
    displayName?: StringWithAggregatesFilter<"Metric"> | string
    description?: StringNullableWithAggregatesFilter<"Metric"> | string | null
    category?: EnumMetricCategoryWithAggregatesFilter<"Metric"> | $Enums.MetricCategory
    dataType?: StringWithAggregatesFilter<"Metric"> | string
    unit?: StringNullableWithAggregatesFilter<"Metric"> | string | null
    isActive?: BoolWithAggregatesFilter<"Metric"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Metric"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Metric"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Metric"> | Date | string
  }

  export type UserModelWhereInput = {
    AND?: UserModelWhereInput | UserModelWhereInput[]
    OR?: UserModelWhereInput[]
    NOT?: UserModelWhereInput | UserModelWhereInput[]
    id?: StringFilter<"UserModel"> | string
    name?: StringFilter<"UserModel"> | string
    description?: StringNullableFilter<"UserModel"> | string | null
    definition?: JsonFilter<"UserModel">
    userId?: StringNullableFilter<"UserModel"> | string | null
    isPublic?: BoolFilter<"UserModel"> | boolean
    isListed?: BoolFilter<"UserModel"> | boolean
    shareToken?: StringNullableFilter<"UserModel"> | string | null
    isDeleted?: BoolFilter<"UserModel"> | boolean
    createdAt?: DateTimeFilter<"UserModel"> | Date | string
    updatedAt?: DateTimeFilter<"UserModel"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    modelComponents?: ModelComponentListRelationFilter
    aiSuggestions?: AiSuggestionListRelationFilter
  }

  export type UserModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    definition?: SortOrder
    userId?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    isListed?: SortOrder
    shareToken?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    modelComponents?: ModelComponentOrderByRelationAggregateInput
    aiSuggestions?: AiSuggestionOrderByRelationAggregateInput
  }

  export type UserModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shareToken?: string
    AND?: UserModelWhereInput | UserModelWhereInput[]
    OR?: UserModelWhereInput[]
    NOT?: UserModelWhereInput | UserModelWhereInput[]
    name?: StringFilter<"UserModel"> | string
    description?: StringNullableFilter<"UserModel"> | string | null
    definition?: JsonFilter<"UserModel">
    userId?: StringNullableFilter<"UserModel"> | string | null
    isPublic?: BoolFilter<"UserModel"> | boolean
    isListed?: BoolFilter<"UserModel"> | boolean
    isDeleted?: BoolFilter<"UserModel"> | boolean
    createdAt?: DateTimeFilter<"UserModel"> | Date | string
    updatedAt?: DateTimeFilter<"UserModel"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    modelComponents?: ModelComponentListRelationFilter
    aiSuggestions?: AiSuggestionListRelationFilter
  }, "id" | "shareToken">

  export type UserModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    definition?: SortOrder
    userId?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    isListed?: SortOrder
    shareToken?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserModelCountOrderByAggregateInput
    _max?: UserModelMaxOrderByAggregateInput
    _min?: UserModelMinOrderByAggregateInput
  }

  export type UserModelScalarWhereWithAggregatesInput = {
    AND?: UserModelScalarWhereWithAggregatesInput | UserModelScalarWhereWithAggregatesInput[]
    OR?: UserModelScalarWhereWithAggregatesInput[]
    NOT?: UserModelScalarWhereWithAggregatesInput | UserModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserModel"> | string
    name?: StringWithAggregatesFilter<"UserModel"> | string
    description?: StringNullableWithAggregatesFilter<"UserModel"> | string | null
    definition?: JsonWithAggregatesFilter<"UserModel">
    userId?: StringNullableWithAggregatesFilter<"UserModel"> | string | null
    isPublic?: BoolWithAggregatesFilter<"UserModel"> | boolean
    isListed?: BoolWithAggregatesFilter<"UserModel"> | boolean
    shareToken?: StringNullableWithAggregatesFilter<"UserModel"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"UserModel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserModel"> | Date | string
  }

  export type ModelComponentWhereInput = {
    AND?: ModelComponentWhereInput | ModelComponentWhereInput[]
    OR?: ModelComponentWhereInput[]
    NOT?: ModelComponentWhereInput | ModelComponentWhereInput[]
    id?: StringFilter<"ModelComponent"> | string
    modelId?: StringFilter<"ModelComponent"> | string
    metricId?: StringFilter<"ModelComponent"> | string
    weight?: FloatFilter<"ModelComponent"> | number
    isActive?: BoolFilter<"ModelComponent"> | boolean
    model?: XOR<UserModelRelationFilter, UserModelWhereInput>
    metric?: XOR<MetricRelationFilter, MetricWhereInput>
  }

  export type ModelComponentOrderByWithRelationInput = {
    id?: SortOrder
    modelId?: SortOrder
    metricId?: SortOrder
    weight?: SortOrder
    isActive?: SortOrder
    model?: UserModelOrderByWithRelationInput
    metric?: MetricOrderByWithRelationInput
  }

  export type ModelComponentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    modelId_metricId?: ModelComponentModelIdMetricIdCompoundUniqueInput
    AND?: ModelComponentWhereInput | ModelComponentWhereInput[]
    OR?: ModelComponentWhereInput[]
    NOT?: ModelComponentWhereInput | ModelComponentWhereInput[]
    modelId?: StringFilter<"ModelComponent"> | string
    metricId?: StringFilter<"ModelComponent"> | string
    weight?: FloatFilter<"ModelComponent"> | number
    isActive?: BoolFilter<"ModelComponent"> | boolean
    model?: XOR<UserModelRelationFilter, UserModelWhereInput>
    metric?: XOR<MetricRelationFilter, MetricWhereInput>
  }, "id" | "modelId_metricId">

  export type ModelComponentOrderByWithAggregationInput = {
    id?: SortOrder
    modelId?: SortOrder
    metricId?: SortOrder
    weight?: SortOrder
    isActive?: SortOrder
    _count?: ModelComponentCountOrderByAggregateInput
    _avg?: ModelComponentAvgOrderByAggregateInput
    _max?: ModelComponentMaxOrderByAggregateInput
    _min?: ModelComponentMinOrderByAggregateInput
    _sum?: ModelComponentSumOrderByAggregateInput
  }

  export type ModelComponentScalarWhereWithAggregatesInput = {
    AND?: ModelComponentScalarWhereWithAggregatesInput | ModelComponentScalarWhereWithAggregatesInput[]
    OR?: ModelComponentScalarWhereWithAggregatesInput[]
    NOT?: ModelComponentScalarWhereWithAggregatesInput | ModelComponentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModelComponent"> | string
    modelId?: StringWithAggregatesFilter<"ModelComponent"> | string
    metricId?: StringWithAggregatesFilter<"ModelComponent"> | string
    weight?: FloatWithAggregatesFilter<"ModelComponent"> | number
    isActive?: BoolWithAggregatesFilter<"ModelComponent"> | boolean
  }

  export type AiSuggestionWhereInput = {
    AND?: AiSuggestionWhereInput | AiSuggestionWhereInput[]
    OR?: AiSuggestionWhereInput[]
    NOT?: AiSuggestionWhereInput | AiSuggestionWhereInput[]
    id?: StringFilter<"AiSuggestion"> | string
    userId?: StringNullableFilter<"AiSuggestion"> | string | null
    modelId?: StringNullableFilter<"AiSuggestion"> | string | null
    context?: StringFilter<"AiSuggestion"> | string
    suggestedMetrics?: JsonFilter<"AiSuggestion">
    wasAccepted?: BoolFilter<"AiSuggestion"> | boolean
    createdAt?: DateTimeFilter<"AiSuggestion"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    model?: XOR<UserModelNullableRelationFilter, UserModelWhereInput> | null
  }

  export type AiSuggestionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    modelId?: SortOrderInput | SortOrder
    context?: SortOrder
    suggestedMetrics?: SortOrder
    wasAccepted?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    model?: UserModelOrderByWithRelationInput
  }

  export type AiSuggestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiSuggestionWhereInput | AiSuggestionWhereInput[]
    OR?: AiSuggestionWhereInput[]
    NOT?: AiSuggestionWhereInput | AiSuggestionWhereInput[]
    userId?: StringNullableFilter<"AiSuggestion"> | string | null
    modelId?: StringNullableFilter<"AiSuggestion"> | string | null
    context?: StringFilter<"AiSuggestion"> | string
    suggestedMetrics?: JsonFilter<"AiSuggestion">
    wasAccepted?: BoolFilter<"AiSuggestion"> | boolean
    createdAt?: DateTimeFilter<"AiSuggestion"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    model?: XOR<UserModelNullableRelationFilter, UserModelWhereInput> | null
  }, "id">

  export type AiSuggestionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    modelId?: SortOrderInput | SortOrder
    context?: SortOrder
    suggestedMetrics?: SortOrder
    wasAccepted?: SortOrder
    createdAt?: SortOrder
    _count?: AiSuggestionCountOrderByAggregateInput
    _max?: AiSuggestionMaxOrderByAggregateInput
    _min?: AiSuggestionMinOrderByAggregateInput
  }

  export type AiSuggestionScalarWhereWithAggregatesInput = {
    AND?: AiSuggestionScalarWhereWithAggregatesInput | AiSuggestionScalarWhereWithAggregatesInput[]
    OR?: AiSuggestionScalarWhereWithAggregatesInput[]
    NOT?: AiSuggestionScalarWhereWithAggregatesInput | AiSuggestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiSuggestion"> | string
    userId?: StringNullableWithAggregatesFilter<"AiSuggestion"> | string | null
    modelId?: StringNullableWithAggregatesFilter<"AiSuggestion"> | string | null
    context?: StringWithAggregatesFilter<"AiSuggestion"> | string
    suggestedMetrics?: JsonWithAggregatesFilter<"AiSuggestion">
    wasAccepted?: BoolWithAggregatesFilter<"AiSuggestion"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AiSuggestion"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userModels?: UserModelCreateNestedManyWithoutUserInput
    aiSuggestions?: AiSuggestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userModels?: UserModelUncheckedCreateNestedManyWithoutUserInput
    aiSuggestions?: AiSuggestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userModels?: UserModelUpdateManyWithoutUserNestedInput
    aiSuggestions?: AiSuggestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userModels?: UserModelUncheckedUpdateManyWithoutUserNestedInput
    aiSuggestions?: AiSuggestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    abbreviation: string
    city: string
    conference?: string | null
    division?: string | null
    logoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerCreateNestedManyWithoutTeamInput
    homeGames?: GameCreateNestedManyWithoutHomeTeamInput
    awayGames?: GameCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    abbreviation: string
    city: string
    conference?: string | null
    division?: string | null
    logoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    homeGames?: GameUncheckedCreateNestedManyWithoutHomeTeamInput
    awayGames?: GameUncheckedCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUpdateManyWithoutTeamNestedInput
    homeGames?: GameUpdateManyWithoutHomeTeamNestedInput
    awayGames?: GameUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    homeGames?: GameUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayGames?: GameUncheckedUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    abbreviation: string
    city: string
    conference?: string | null
    division?: string | null
    logoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateInput = {
    id?: string
    name: string
    position: $Enums.Position
    number?: number | null
    height?: string | null
    weight?: number | null
    age?: number | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutPlayersInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    name: string
    position: $Enums.Position
    number?: number | null
    height?: string | null
    weight?: number | null
    age?: number | null
    teamId: string
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    number?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    number?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateManyInput = {
    id?: string
    name: string
    position: $Enums.Position
    number?: number | null
    height?: string | null
    weight?: number | null
    age?: number | null
    teamId: string
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    number?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    number?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefereeCreateInput = {
    id?: string
    name: string
    number?: number | null
    position?: string | null
    yearsExp?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutRefereeInput
  }

  export type RefereeUncheckedCreateInput = {
    id?: string
    name: string
    number?: number | null
    position?: string | null
    yearsExp?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutRefereeInput
  }

  export type RefereeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExp?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutRefereeNestedInput
  }

  export type RefereeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExp?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutRefereeNestedInput
  }

  export type RefereeCreateManyInput = {
    id?: string
    name: string
    number?: number | null
    position?: string | null
    yearsExp?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefereeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExp?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefereeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExp?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    gameDate: Date | string
    week?: number | null
    season: number
    homeScore?: number | null
    awayScore?: number | null
    status?: $Enums.GameStatus
    venue?: string | null
    temperature?: number | null
    weather?: string | null
    attendance?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    homeTeam: TeamCreateNestedOneWithoutHomeGamesInput
    awayTeam: TeamCreateNestedOneWithoutAwayGamesInput
    referee?: RefereeCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    gameDate: Date | string
    week?: number | null
    season: number
    homeTeamId: string
    awayTeamId: string
    refereeId?: string | null
    homeScore?: number | null
    awayScore?: number | null
    status?: $Enums.GameStatus
    venue?: string | null
    temperature?: number | null
    weather?: string | null
    attendance?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: NullableIntFieldUpdateOperationsInput | number | null
    season?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: TeamUpdateOneRequiredWithoutHomeGamesNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayGamesNestedInput
    referee?: RefereeUpdateOneWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: NullableIntFieldUpdateOperationsInput | number | null
    season?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    refereeId?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateManyInput = {
    id?: string
    gameDate: Date | string
    week?: number | null
    season: number
    homeTeamId: string
    awayTeamId: string
    refereeId?: string | null
    homeScore?: number | null
    awayScore?: number | null
    status?: $Enums.GameStatus
    venue?: string | null
    temperature?: number | null
    weather?: string | null
    attendance?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: NullableIntFieldUpdateOperationsInput | number | null
    season?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: NullableIntFieldUpdateOperationsInput | number | null
    season?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    refereeId?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricCreateInput = {
    id?: string
    name: string
    displayName: string
    description?: string | null
    category: $Enums.MetricCategory
    dataType?: string
    unit?: string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    modelComponents?: ModelComponentCreateNestedManyWithoutMetricInput
  }

  export type MetricUncheckedCreateInput = {
    id?: string
    name: string
    displayName: string
    description?: string | null
    category: $Enums.MetricCategory
    dataType?: string
    unit?: string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    modelComponents?: ModelComponentUncheckedCreateNestedManyWithoutMetricInput
  }

  export type MetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumMetricCategoryFieldUpdateOperationsInput | $Enums.MetricCategory
    dataType?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelComponents?: ModelComponentUpdateManyWithoutMetricNestedInput
  }

  export type MetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumMetricCategoryFieldUpdateOperationsInput | $Enums.MetricCategory
    dataType?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelComponents?: ModelComponentUncheckedUpdateManyWithoutMetricNestedInput
  }

  export type MetricCreateManyInput = {
    id?: string
    name: string
    displayName: string
    description?: string | null
    category: $Enums.MetricCategory
    dataType?: string
    unit?: string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumMetricCategoryFieldUpdateOperationsInput | $Enums.MetricCategory
    dataType?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumMetricCategoryFieldUpdateOperationsInput | $Enums.MetricCategory
    dataType?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModelCreateInput = {
    id?: string
    name: string
    description?: string | null
    definition: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    isListed?: boolean
    shareToken?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutUserModelsInput
    modelComponents?: ModelComponentCreateNestedManyWithoutModelInput
    aiSuggestions?: AiSuggestionCreateNestedManyWithoutModelInput
  }

  export type UserModelUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    definition: JsonNullValueInput | InputJsonValue
    userId?: string | null
    isPublic?: boolean
    isListed?: boolean
    shareToken?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    modelComponents?: ModelComponentUncheckedCreateNestedManyWithoutModelInput
    aiSuggestions?: AiSuggestionUncheckedCreateNestedManyWithoutModelInput
  }

  export type UserModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isListed?: BoolFieldUpdateOperationsInput | boolean
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutUserModelsNestedInput
    modelComponents?: ModelComponentUpdateManyWithoutModelNestedInput
    aiSuggestions?: AiSuggestionUpdateManyWithoutModelNestedInput
  }

  export type UserModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: JsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isListed?: BoolFieldUpdateOperationsInput | boolean
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelComponents?: ModelComponentUncheckedUpdateManyWithoutModelNestedInput
    aiSuggestions?: AiSuggestionUncheckedUpdateManyWithoutModelNestedInput
  }

  export type UserModelCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    definition: JsonNullValueInput | InputJsonValue
    userId?: string | null
    isPublic?: boolean
    isListed?: boolean
    shareToken?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isListed?: BoolFieldUpdateOperationsInput | boolean
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: JsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isListed?: BoolFieldUpdateOperationsInput | boolean
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelComponentCreateInput = {
    id?: string
    weight?: number
    isActive?: boolean
    model: UserModelCreateNestedOneWithoutModelComponentsInput
    metric: MetricCreateNestedOneWithoutModelComponentsInput
  }

  export type ModelComponentUncheckedCreateInput = {
    id?: string
    modelId: string
    metricId: string
    weight?: number
    isActive?: boolean
  }

  export type ModelComponentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    model?: UserModelUpdateOneRequiredWithoutModelComponentsNestedInput
    metric?: MetricUpdateOneRequiredWithoutModelComponentsNestedInput
  }

  export type ModelComponentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    metricId?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModelComponentCreateManyInput = {
    id?: string
    modelId: string
    metricId: string
    weight?: number
    isActive?: boolean
  }

  export type ModelComponentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModelComponentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    metricId?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AiSuggestionCreateInput = {
    id?: string
    context: string
    suggestedMetrics: JsonNullValueInput | InputJsonValue
    wasAccepted?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAiSuggestionsInput
    model?: UserModelCreateNestedOneWithoutAiSuggestionsInput
  }

  export type AiSuggestionUncheckedCreateInput = {
    id?: string
    userId?: string | null
    modelId?: string | null
    context: string
    suggestedMetrics: JsonNullValueInput | InputJsonValue
    wasAccepted?: boolean
    createdAt?: Date | string
  }

  export type AiSuggestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    suggestedMetrics?: JsonNullValueInput | InputJsonValue
    wasAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAiSuggestionsNestedInput
    model?: UserModelUpdateOneWithoutAiSuggestionsNestedInput
  }

  export type AiSuggestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    context?: StringFieldUpdateOperationsInput | string
    suggestedMetrics?: JsonNullValueInput | InputJsonValue
    wasAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiSuggestionCreateManyInput = {
    id?: string
    userId?: string | null
    modelId?: string | null
    context: string
    suggestedMetrics: JsonNullValueInput | InputJsonValue
    wasAccepted?: boolean
    createdAt?: Date | string
  }

  export type AiSuggestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    suggestedMetrics?: JsonNullValueInput | InputJsonValue
    wasAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiSuggestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    context?: StringFieldUpdateOperationsInput | string
    suggestedMetrics?: JsonNullValueInput | InputJsonValue
    wasAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserModelListRelationFilter = {
    every?: UserModelWhereInput
    some?: UserModelWhereInput
    none?: UserModelWhereInput
  }

  export type AiSuggestionListRelationFilter = {
    every?: AiSuggestionWhereInput
    some?: AiSuggestionWhereInput
    none?: AiSuggestionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiSuggestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    city?: SortOrder
    conference?: SortOrder
    division?: SortOrder
    logoUrl?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    city?: SortOrder
    conference?: SortOrder
    division?: SortOrder
    logoUrl?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    city?: SortOrder
    conference?: SortOrder
    division?: SortOrder
    logoUrl?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionFilter<$PrismaModel> | $Enums.Position
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TeamRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    number?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    teamId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    number?: SortOrder
    weight?: SortOrder
    age?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    number?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    teamId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    number?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    teamId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    number?: SortOrder
    weight?: SortOrder
    age?: SortOrder
  }

  export type EnumPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionWithAggregatesFilter<$PrismaModel> | $Enums.Position
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPositionFilter<$PrismaModel>
    _max?: NestedEnumPositionFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RefereeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    position?: SortOrder
    yearsExp?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefereeAvgOrderByAggregateInput = {
    number?: SortOrder
    yearsExp?: SortOrder
  }

  export type RefereeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    position?: SortOrder
    yearsExp?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefereeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    position?: SortOrder
    yearsExp?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefereeSumOrderByAggregateInput = {
    number?: SortOrder
    yearsExp?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type RefereeNullableRelationFilter = {
    is?: RefereeWhereInput | null
    isNot?: RefereeWhereInput | null
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    gameDate?: SortOrder
    week?: SortOrder
    season?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    refereeId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    status?: SortOrder
    venue?: SortOrder
    temperature?: SortOrder
    weather?: SortOrder
    attendance?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    week?: SortOrder
    season?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    temperature?: SortOrder
    attendance?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    gameDate?: SortOrder
    week?: SortOrder
    season?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    refereeId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    status?: SortOrder
    venue?: SortOrder
    temperature?: SortOrder
    weather?: SortOrder
    attendance?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    gameDate?: SortOrder
    week?: SortOrder
    season?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    refereeId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    status?: SortOrder
    venue?: SortOrder
    temperature?: SortOrder
    weather?: SortOrder
    attendance?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    week?: SortOrder
    season?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    temperature?: SortOrder
    attendance?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type EnumMetricCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricCategory | EnumMetricCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MetricCategory[] | ListEnumMetricCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricCategory[] | ListEnumMetricCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricCategoryFilter<$PrismaModel> | $Enums.MetricCategory
  }

  export type ModelComponentListRelationFilter = {
    every?: ModelComponentWhereInput
    some?: ModelComponentWhereInput
    none?: ModelComponentWhereInput
  }

  export type ModelComponentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetricCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    category?: SortOrder
    dataType?: SortOrder
    unit?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetricMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    category?: SortOrder
    dataType?: SortOrder
    unit?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetricMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    category?: SortOrder
    dataType?: SortOrder
    unit?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMetricCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricCategory | EnumMetricCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MetricCategory[] | ListEnumMetricCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricCategory[] | ListEnumMetricCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricCategoryWithAggregatesFilter<$PrismaModel> | $Enums.MetricCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricCategoryFilter<$PrismaModel>
    _max?: NestedEnumMetricCategoryFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    definition?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    isListed?: SortOrder
    shareToken?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    isListed?: SortOrder
    shareToken?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    isListed?: SortOrder
    shareToken?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserModelRelationFilter = {
    is?: UserModelWhereInput
    isNot?: UserModelWhereInput
  }

  export type MetricRelationFilter = {
    is?: MetricWhereInput
    isNot?: MetricWhereInput
  }

  export type ModelComponentModelIdMetricIdCompoundUniqueInput = {
    modelId: string
    metricId: string
  }

  export type ModelComponentCountOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    metricId?: SortOrder
    weight?: SortOrder
    isActive?: SortOrder
  }

  export type ModelComponentAvgOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type ModelComponentMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    metricId?: SortOrder
    weight?: SortOrder
    isActive?: SortOrder
  }

  export type ModelComponentMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    metricId?: SortOrder
    weight?: SortOrder
    isActive?: SortOrder
  }

  export type ModelComponentSumOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserModelNullableRelationFilter = {
    is?: UserModelWhereInput | null
    isNot?: UserModelWhereInput | null
  }

  export type AiSuggestionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    modelId?: SortOrder
    context?: SortOrder
    suggestedMetrics?: SortOrder
    wasAccepted?: SortOrder
    createdAt?: SortOrder
  }

  export type AiSuggestionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    modelId?: SortOrder
    context?: SortOrder
    wasAccepted?: SortOrder
    createdAt?: SortOrder
  }

  export type AiSuggestionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    modelId?: SortOrder
    context?: SortOrder
    wasAccepted?: SortOrder
    createdAt?: SortOrder
  }

  export type UserModelCreateNestedManyWithoutUserInput = {
    create?: XOR<UserModelCreateWithoutUserInput, UserModelUncheckedCreateWithoutUserInput> | UserModelCreateWithoutUserInput[] | UserModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModelCreateOrConnectWithoutUserInput | UserModelCreateOrConnectWithoutUserInput[]
    createMany?: UserModelCreateManyUserInputEnvelope
    connect?: UserModelWhereUniqueInput | UserModelWhereUniqueInput[]
  }

  export type AiSuggestionCreateNestedManyWithoutUserInput = {
    create?: XOR<AiSuggestionCreateWithoutUserInput, AiSuggestionUncheckedCreateWithoutUserInput> | AiSuggestionCreateWithoutUserInput[] | AiSuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiSuggestionCreateOrConnectWithoutUserInput | AiSuggestionCreateOrConnectWithoutUserInput[]
    createMany?: AiSuggestionCreateManyUserInputEnvelope
    connect?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
  }

  export type UserModelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserModelCreateWithoutUserInput, UserModelUncheckedCreateWithoutUserInput> | UserModelCreateWithoutUserInput[] | UserModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModelCreateOrConnectWithoutUserInput | UserModelCreateOrConnectWithoutUserInput[]
    createMany?: UserModelCreateManyUserInputEnvelope
    connect?: UserModelWhereUniqueInput | UserModelWhereUniqueInput[]
  }

  export type AiSuggestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AiSuggestionCreateWithoutUserInput, AiSuggestionUncheckedCreateWithoutUserInput> | AiSuggestionCreateWithoutUserInput[] | AiSuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiSuggestionCreateOrConnectWithoutUserInput | AiSuggestionCreateOrConnectWithoutUserInput[]
    createMany?: AiSuggestionCreateManyUserInputEnvelope
    connect?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserModelUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserModelCreateWithoutUserInput, UserModelUncheckedCreateWithoutUserInput> | UserModelCreateWithoutUserInput[] | UserModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModelCreateOrConnectWithoutUserInput | UserModelCreateOrConnectWithoutUserInput[]
    upsert?: UserModelUpsertWithWhereUniqueWithoutUserInput | UserModelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserModelCreateManyUserInputEnvelope
    set?: UserModelWhereUniqueInput | UserModelWhereUniqueInput[]
    disconnect?: UserModelWhereUniqueInput | UserModelWhereUniqueInput[]
    delete?: UserModelWhereUniqueInput | UserModelWhereUniqueInput[]
    connect?: UserModelWhereUniqueInput | UserModelWhereUniqueInput[]
    update?: UserModelUpdateWithWhereUniqueWithoutUserInput | UserModelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserModelUpdateManyWithWhereWithoutUserInput | UserModelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserModelScalarWhereInput | UserModelScalarWhereInput[]
  }

  export type AiSuggestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiSuggestionCreateWithoutUserInput, AiSuggestionUncheckedCreateWithoutUserInput> | AiSuggestionCreateWithoutUserInput[] | AiSuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiSuggestionCreateOrConnectWithoutUserInput | AiSuggestionCreateOrConnectWithoutUserInput[]
    upsert?: AiSuggestionUpsertWithWhereUniqueWithoutUserInput | AiSuggestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiSuggestionCreateManyUserInputEnvelope
    set?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    disconnect?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    delete?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    connect?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    update?: AiSuggestionUpdateWithWhereUniqueWithoutUserInput | AiSuggestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiSuggestionUpdateManyWithWhereWithoutUserInput | AiSuggestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiSuggestionScalarWhereInput | AiSuggestionScalarWhereInput[]
  }

  export type UserModelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserModelCreateWithoutUserInput, UserModelUncheckedCreateWithoutUserInput> | UserModelCreateWithoutUserInput[] | UserModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModelCreateOrConnectWithoutUserInput | UserModelCreateOrConnectWithoutUserInput[]
    upsert?: UserModelUpsertWithWhereUniqueWithoutUserInput | UserModelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserModelCreateManyUserInputEnvelope
    set?: UserModelWhereUniqueInput | UserModelWhereUniqueInput[]
    disconnect?: UserModelWhereUniqueInput | UserModelWhereUniqueInput[]
    delete?: UserModelWhereUniqueInput | UserModelWhereUniqueInput[]
    connect?: UserModelWhereUniqueInput | UserModelWhereUniqueInput[]
    update?: UserModelUpdateWithWhereUniqueWithoutUserInput | UserModelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserModelUpdateManyWithWhereWithoutUserInput | UserModelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserModelScalarWhereInput | UserModelScalarWhereInput[]
  }

  export type AiSuggestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiSuggestionCreateWithoutUserInput, AiSuggestionUncheckedCreateWithoutUserInput> | AiSuggestionCreateWithoutUserInput[] | AiSuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiSuggestionCreateOrConnectWithoutUserInput | AiSuggestionCreateOrConnectWithoutUserInput[]
    upsert?: AiSuggestionUpsertWithWhereUniqueWithoutUserInput | AiSuggestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiSuggestionCreateManyUserInputEnvelope
    set?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    disconnect?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    delete?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    connect?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    update?: AiSuggestionUpdateWithWhereUniqueWithoutUserInput | AiSuggestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiSuggestionUpdateManyWithWhereWithoutUserInput | AiSuggestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiSuggestionScalarWhereInput | AiSuggestionScalarWhereInput[]
  }

  export type PlayerCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutHomeTeamInput = {
    create?: XOR<GameCreateWithoutHomeTeamInput, GameUncheckedCreateWithoutHomeTeamInput> | GameCreateWithoutHomeTeamInput[] | GameUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: GameCreateOrConnectWithoutHomeTeamInput | GameCreateOrConnectWithoutHomeTeamInput[]
    createMany?: GameCreateManyHomeTeamInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutAwayTeamInput = {
    create?: XOR<GameCreateWithoutAwayTeamInput, GameUncheckedCreateWithoutAwayTeamInput> | GameCreateWithoutAwayTeamInput[] | GameUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: GameCreateOrConnectWithoutAwayTeamInput | GameCreateOrConnectWithoutAwayTeamInput[]
    createMany?: GameCreateManyAwayTeamInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutHomeTeamInput = {
    create?: XOR<GameCreateWithoutHomeTeamInput, GameUncheckedCreateWithoutHomeTeamInput> | GameCreateWithoutHomeTeamInput[] | GameUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: GameCreateOrConnectWithoutHomeTeamInput | GameCreateOrConnectWithoutHomeTeamInput[]
    createMany?: GameCreateManyHomeTeamInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutAwayTeamInput = {
    create?: XOR<GameCreateWithoutAwayTeamInput, GameUncheckedCreateWithoutAwayTeamInput> | GameCreateWithoutAwayTeamInput[] | GameUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: GameCreateOrConnectWithoutAwayTeamInput | GameCreateOrConnectWithoutAwayTeamInput[]
    createMany?: GameCreateManyAwayTeamInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type PlayerUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTeamInput | PlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTeamInput | PlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTeamInput | PlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type GameUpdateManyWithoutHomeTeamNestedInput = {
    create?: XOR<GameCreateWithoutHomeTeamInput, GameUncheckedCreateWithoutHomeTeamInput> | GameCreateWithoutHomeTeamInput[] | GameUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: GameCreateOrConnectWithoutHomeTeamInput | GameCreateOrConnectWithoutHomeTeamInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutHomeTeamInput | GameUpsertWithWhereUniqueWithoutHomeTeamInput[]
    createMany?: GameCreateManyHomeTeamInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutHomeTeamInput | GameUpdateWithWhereUniqueWithoutHomeTeamInput[]
    updateMany?: GameUpdateManyWithWhereWithoutHomeTeamInput | GameUpdateManyWithWhereWithoutHomeTeamInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUpdateManyWithoutAwayTeamNestedInput = {
    create?: XOR<GameCreateWithoutAwayTeamInput, GameUncheckedCreateWithoutAwayTeamInput> | GameCreateWithoutAwayTeamInput[] | GameUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: GameCreateOrConnectWithoutAwayTeamInput | GameCreateOrConnectWithoutAwayTeamInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutAwayTeamInput | GameUpsertWithWhereUniqueWithoutAwayTeamInput[]
    createMany?: GameCreateManyAwayTeamInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutAwayTeamInput | GameUpdateWithWhereUniqueWithoutAwayTeamInput[]
    updateMany?: GameUpdateManyWithWhereWithoutAwayTeamInput | GameUpdateManyWithWhereWithoutAwayTeamInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type PlayerUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTeamInput | PlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTeamInput | PlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTeamInput | PlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutHomeTeamNestedInput = {
    create?: XOR<GameCreateWithoutHomeTeamInput, GameUncheckedCreateWithoutHomeTeamInput> | GameCreateWithoutHomeTeamInput[] | GameUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: GameCreateOrConnectWithoutHomeTeamInput | GameCreateOrConnectWithoutHomeTeamInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutHomeTeamInput | GameUpsertWithWhereUniqueWithoutHomeTeamInput[]
    createMany?: GameCreateManyHomeTeamInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutHomeTeamInput | GameUpdateWithWhereUniqueWithoutHomeTeamInput[]
    updateMany?: GameUpdateManyWithWhereWithoutHomeTeamInput | GameUpdateManyWithWhereWithoutHomeTeamInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutAwayTeamNestedInput = {
    create?: XOR<GameCreateWithoutAwayTeamInput, GameUncheckedCreateWithoutAwayTeamInput> | GameCreateWithoutAwayTeamInput[] | GameUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: GameCreateOrConnectWithoutAwayTeamInput | GameCreateOrConnectWithoutAwayTeamInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutAwayTeamInput | GameUpsertWithWhereUniqueWithoutAwayTeamInput[]
    createMany?: GameCreateManyAwayTeamInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutAwayTeamInput | GameUpdateWithWhereUniqueWithoutAwayTeamInput[]
    updateMany?: GameUpdateManyWithWhereWithoutAwayTeamInput | GameUpdateManyWithWhereWithoutAwayTeamInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutPlayersInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    connect?: TeamWhereUniqueInput
  }

  export type EnumPositionFieldUpdateOperationsInput = {
    set?: $Enums.Position
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeamUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    upsert?: TeamUpsertWithoutPlayersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPlayersInput, TeamUpdateWithoutPlayersInput>, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type GameCreateNestedManyWithoutRefereeInput = {
    create?: XOR<GameCreateWithoutRefereeInput, GameUncheckedCreateWithoutRefereeInput> | GameCreateWithoutRefereeInput[] | GameUncheckedCreateWithoutRefereeInput[]
    connectOrCreate?: GameCreateOrConnectWithoutRefereeInput | GameCreateOrConnectWithoutRefereeInput[]
    createMany?: GameCreateManyRefereeInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutRefereeInput = {
    create?: XOR<GameCreateWithoutRefereeInput, GameUncheckedCreateWithoutRefereeInput> | GameCreateWithoutRefereeInput[] | GameUncheckedCreateWithoutRefereeInput[]
    connectOrCreate?: GameCreateOrConnectWithoutRefereeInput | GameCreateOrConnectWithoutRefereeInput[]
    createMany?: GameCreateManyRefereeInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutRefereeNestedInput = {
    create?: XOR<GameCreateWithoutRefereeInput, GameUncheckedCreateWithoutRefereeInput> | GameCreateWithoutRefereeInput[] | GameUncheckedCreateWithoutRefereeInput[]
    connectOrCreate?: GameCreateOrConnectWithoutRefereeInput | GameCreateOrConnectWithoutRefereeInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutRefereeInput | GameUpsertWithWhereUniqueWithoutRefereeInput[]
    createMany?: GameCreateManyRefereeInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutRefereeInput | GameUpdateWithWhereUniqueWithoutRefereeInput[]
    updateMany?: GameUpdateManyWithWhereWithoutRefereeInput | GameUpdateManyWithWhereWithoutRefereeInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutRefereeNestedInput = {
    create?: XOR<GameCreateWithoutRefereeInput, GameUncheckedCreateWithoutRefereeInput> | GameCreateWithoutRefereeInput[] | GameUncheckedCreateWithoutRefereeInput[]
    connectOrCreate?: GameCreateOrConnectWithoutRefereeInput | GameCreateOrConnectWithoutRefereeInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutRefereeInput | GameUpsertWithWhereUniqueWithoutRefereeInput[]
    createMany?: GameCreateManyRefereeInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutRefereeInput | GameUpdateWithWhereUniqueWithoutRefereeInput[]
    updateMany?: GameUpdateManyWithWhereWithoutRefereeInput | GameUpdateManyWithWhereWithoutRefereeInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutHomeGamesInput = {
    create?: XOR<TeamCreateWithoutHomeGamesInput, TeamUncheckedCreateWithoutHomeGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeGamesInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutAwayGamesInput = {
    create?: XOR<TeamCreateWithoutAwayGamesInput, TeamUncheckedCreateWithoutAwayGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayGamesInput
    connect?: TeamWhereUniqueInput
  }

  export type RefereeCreateNestedOneWithoutGamesInput = {
    create?: XOR<RefereeCreateWithoutGamesInput, RefereeUncheckedCreateWithoutGamesInput>
    connectOrCreate?: RefereeCreateOrConnectWithoutGamesInput
    connect?: RefereeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type TeamUpdateOneRequiredWithoutHomeGamesNestedInput = {
    create?: XOR<TeamCreateWithoutHomeGamesInput, TeamUncheckedCreateWithoutHomeGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeGamesInput
    upsert?: TeamUpsertWithoutHomeGamesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutHomeGamesInput, TeamUpdateWithoutHomeGamesInput>, TeamUncheckedUpdateWithoutHomeGamesInput>
  }

  export type TeamUpdateOneRequiredWithoutAwayGamesNestedInput = {
    create?: XOR<TeamCreateWithoutAwayGamesInput, TeamUncheckedCreateWithoutAwayGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayGamesInput
    upsert?: TeamUpsertWithoutAwayGamesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutAwayGamesInput, TeamUpdateWithoutAwayGamesInput>, TeamUncheckedUpdateWithoutAwayGamesInput>
  }

  export type RefereeUpdateOneWithoutGamesNestedInput = {
    create?: XOR<RefereeCreateWithoutGamesInput, RefereeUncheckedCreateWithoutGamesInput>
    connectOrCreate?: RefereeCreateOrConnectWithoutGamesInput
    upsert?: RefereeUpsertWithoutGamesInput
    disconnect?: RefereeWhereInput | boolean
    delete?: RefereeWhereInput | boolean
    connect?: RefereeWhereUniqueInput
    update?: XOR<XOR<RefereeUpdateToOneWithWhereWithoutGamesInput, RefereeUpdateWithoutGamesInput>, RefereeUncheckedUpdateWithoutGamesInput>
  }

  export type ModelComponentCreateNestedManyWithoutMetricInput = {
    create?: XOR<ModelComponentCreateWithoutMetricInput, ModelComponentUncheckedCreateWithoutMetricInput> | ModelComponentCreateWithoutMetricInput[] | ModelComponentUncheckedCreateWithoutMetricInput[]
    connectOrCreate?: ModelComponentCreateOrConnectWithoutMetricInput | ModelComponentCreateOrConnectWithoutMetricInput[]
    createMany?: ModelComponentCreateManyMetricInputEnvelope
    connect?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
  }

  export type ModelComponentUncheckedCreateNestedManyWithoutMetricInput = {
    create?: XOR<ModelComponentCreateWithoutMetricInput, ModelComponentUncheckedCreateWithoutMetricInput> | ModelComponentCreateWithoutMetricInput[] | ModelComponentUncheckedCreateWithoutMetricInput[]
    connectOrCreate?: ModelComponentCreateOrConnectWithoutMetricInput | ModelComponentCreateOrConnectWithoutMetricInput[]
    createMany?: ModelComponentCreateManyMetricInputEnvelope
    connect?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
  }

  export type EnumMetricCategoryFieldUpdateOperationsInput = {
    set?: $Enums.MetricCategory
  }

  export type ModelComponentUpdateManyWithoutMetricNestedInput = {
    create?: XOR<ModelComponentCreateWithoutMetricInput, ModelComponentUncheckedCreateWithoutMetricInput> | ModelComponentCreateWithoutMetricInput[] | ModelComponentUncheckedCreateWithoutMetricInput[]
    connectOrCreate?: ModelComponentCreateOrConnectWithoutMetricInput | ModelComponentCreateOrConnectWithoutMetricInput[]
    upsert?: ModelComponentUpsertWithWhereUniqueWithoutMetricInput | ModelComponentUpsertWithWhereUniqueWithoutMetricInput[]
    createMany?: ModelComponentCreateManyMetricInputEnvelope
    set?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    disconnect?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    delete?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    connect?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    update?: ModelComponentUpdateWithWhereUniqueWithoutMetricInput | ModelComponentUpdateWithWhereUniqueWithoutMetricInput[]
    updateMany?: ModelComponentUpdateManyWithWhereWithoutMetricInput | ModelComponentUpdateManyWithWhereWithoutMetricInput[]
    deleteMany?: ModelComponentScalarWhereInput | ModelComponentScalarWhereInput[]
  }

  export type ModelComponentUncheckedUpdateManyWithoutMetricNestedInput = {
    create?: XOR<ModelComponentCreateWithoutMetricInput, ModelComponentUncheckedCreateWithoutMetricInput> | ModelComponentCreateWithoutMetricInput[] | ModelComponentUncheckedCreateWithoutMetricInput[]
    connectOrCreate?: ModelComponentCreateOrConnectWithoutMetricInput | ModelComponentCreateOrConnectWithoutMetricInput[]
    upsert?: ModelComponentUpsertWithWhereUniqueWithoutMetricInput | ModelComponentUpsertWithWhereUniqueWithoutMetricInput[]
    createMany?: ModelComponentCreateManyMetricInputEnvelope
    set?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    disconnect?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    delete?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    connect?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    update?: ModelComponentUpdateWithWhereUniqueWithoutMetricInput | ModelComponentUpdateWithWhereUniqueWithoutMetricInput[]
    updateMany?: ModelComponentUpdateManyWithWhereWithoutMetricInput | ModelComponentUpdateManyWithWhereWithoutMetricInput[]
    deleteMany?: ModelComponentScalarWhereInput | ModelComponentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserModelsInput = {
    create?: XOR<UserCreateWithoutUserModelsInput, UserUncheckedCreateWithoutUserModelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserModelsInput
    connect?: UserWhereUniqueInput
  }

  export type ModelComponentCreateNestedManyWithoutModelInput = {
    create?: XOR<ModelComponentCreateWithoutModelInput, ModelComponentUncheckedCreateWithoutModelInput> | ModelComponentCreateWithoutModelInput[] | ModelComponentUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelComponentCreateOrConnectWithoutModelInput | ModelComponentCreateOrConnectWithoutModelInput[]
    createMany?: ModelComponentCreateManyModelInputEnvelope
    connect?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
  }

  export type AiSuggestionCreateNestedManyWithoutModelInput = {
    create?: XOR<AiSuggestionCreateWithoutModelInput, AiSuggestionUncheckedCreateWithoutModelInput> | AiSuggestionCreateWithoutModelInput[] | AiSuggestionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AiSuggestionCreateOrConnectWithoutModelInput | AiSuggestionCreateOrConnectWithoutModelInput[]
    createMany?: AiSuggestionCreateManyModelInputEnvelope
    connect?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
  }

  export type ModelComponentUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<ModelComponentCreateWithoutModelInput, ModelComponentUncheckedCreateWithoutModelInput> | ModelComponentCreateWithoutModelInput[] | ModelComponentUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelComponentCreateOrConnectWithoutModelInput | ModelComponentCreateOrConnectWithoutModelInput[]
    createMany?: ModelComponentCreateManyModelInputEnvelope
    connect?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
  }

  export type AiSuggestionUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<AiSuggestionCreateWithoutModelInput, AiSuggestionUncheckedCreateWithoutModelInput> | AiSuggestionCreateWithoutModelInput[] | AiSuggestionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AiSuggestionCreateOrConnectWithoutModelInput | AiSuggestionCreateOrConnectWithoutModelInput[]
    createMany?: AiSuggestionCreateManyModelInputEnvelope
    connect?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutUserModelsNestedInput = {
    create?: XOR<UserCreateWithoutUserModelsInput, UserUncheckedCreateWithoutUserModelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserModelsInput
    upsert?: UserUpsertWithoutUserModelsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserModelsInput, UserUpdateWithoutUserModelsInput>, UserUncheckedUpdateWithoutUserModelsInput>
  }

  export type ModelComponentUpdateManyWithoutModelNestedInput = {
    create?: XOR<ModelComponentCreateWithoutModelInput, ModelComponentUncheckedCreateWithoutModelInput> | ModelComponentCreateWithoutModelInput[] | ModelComponentUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelComponentCreateOrConnectWithoutModelInput | ModelComponentCreateOrConnectWithoutModelInput[]
    upsert?: ModelComponentUpsertWithWhereUniqueWithoutModelInput | ModelComponentUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ModelComponentCreateManyModelInputEnvelope
    set?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    disconnect?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    delete?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    connect?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    update?: ModelComponentUpdateWithWhereUniqueWithoutModelInput | ModelComponentUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ModelComponentUpdateManyWithWhereWithoutModelInput | ModelComponentUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ModelComponentScalarWhereInput | ModelComponentScalarWhereInput[]
  }

  export type AiSuggestionUpdateManyWithoutModelNestedInput = {
    create?: XOR<AiSuggestionCreateWithoutModelInput, AiSuggestionUncheckedCreateWithoutModelInput> | AiSuggestionCreateWithoutModelInput[] | AiSuggestionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AiSuggestionCreateOrConnectWithoutModelInput | AiSuggestionCreateOrConnectWithoutModelInput[]
    upsert?: AiSuggestionUpsertWithWhereUniqueWithoutModelInput | AiSuggestionUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: AiSuggestionCreateManyModelInputEnvelope
    set?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    disconnect?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    delete?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    connect?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    update?: AiSuggestionUpdateWithWhereUniqueWithoutModelInput | AiSuggestionUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: AiSuggestionUpdateManyWithWhereWithoutModelInput | AiSuggestionUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: AiSuggestionScalarWhereInput | AiSuggestionScalarWhereInput[]
  }

  export type ModelComponentUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<ModelComponentCreateWithoutModelInput, ModelComponentUncheckedCreateWithoutModelInput> | ModelComponentCreateWithoutModelInput[] | ModelComponentUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelComponentCreateOrConnectWithoutModelInput | ModelComponentCreateOrConnectWithoutModelInput[]
    upsert?: ModelComponentUpsertWithWhereUniqueWithoutModelInput | ModelComponentUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ModelComponentCreateManyModelInputEnvelope
    set?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    disconnect?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    delete?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    connect?: ModelComponentWhereUniqueInput | ModelComponentWhereUniqueInput[]
    update?: ModelComponentUpdateWithWhereUniqueWithoutModelInput | ModelComponentUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ModelComponentUpdateManyWithWhereWithoutModelInput | ModelComponentUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ModelComponentScalarWhereInput | ModelComponentScalarWhereInput[]
  }

  export type AiSuggestionUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<AiSuggestionCreateWithoutModelInput, AiSuggestionUncheckedCreateWithoutModelInput> | AiSuggestionCreateWithoutModelInput[] | AiSuggestionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AiSuggestionCreateOrConnectWithoutModelInput | AiSuggestionCreateOrConnectWithoutModelInput[]
    upsert?: AiSuggestionUpsertWithWhereUniqueWithoutModelInput | AiSuggestionUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: AiSuggestionCreateManyModelInputEnvelope
    set?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    disconnect?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    delete?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    connect?: AiSuggestionWhereUniqueInput | AiSuggestionWhereUniqueInput[]
    update?: AiSuggestionUpdateWithWhereUniqueWithoutModelInput | AiSuggestionUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: AiSuggestionUpdateManyWithWhereWithoutModelInput | AiSuggestionUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: AiSuggestionScalarWhereInput | AiSuggestionScalarWhereInput[]
  }

  export type UserModelCreateNestedOneWithoutModelComponentsInput = {
    create?: XOR<UserModelCreateWithoutModelComponentsInput, UserModelUncheckedCreateWithoutModelComponentsInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutModelComponentsInput
    connect?: UserModelWhereUniqueInput
  }

  export type MetricCreateNestedOneWithoutModelComponentsInput = {
    create?: XOR<MetricCreateWithoutModelComponentsInput, MetricUncheckedCreateWithoutModelComponentsInput>
    connectOrCreate?: MetricCreateOrConnectWithoutModelComponentsInput
    connect?: MetricWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserModelUpdateOneRequiredWithoutModelComponentsNestedInput = {
    create?: XOR<UserModelCreateWithoutModelComponentsInput, UserModelUncheckedCreateWithoutModelComponentsInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutModelComponentsInput
    upsert?: UserModelUpsertWithoutModelComponentsInput
    connect?: UserModelWhereUniqueInput
    update?: XOR<XOR<UserModelUpdateToOneWithWhereWithoutModelComponentsInput, UserModelUpdateWithoutModelComponentsInput>, UserModelUncheckedUpdateWithoutModelComponentsInput>
  }

  export type MetricUpdateOneRequiredWithoutModelComponentsNestedInput = {
    create?: XOR<MetricCreateWithoutModelComponentsInput, MetricUncheckedCreateWithoutModelComponentsInput>
    connectOrCreate?: MetricCreateOrConnectWithoutModelComponentsInput
    upsert?: MetricUpsertWithoutModelComponentsInput
    connect?: MetricWhereUniqueInput
    update?: XOR<XOR<MetricUpdateToOneWithWhereWithoutModelComponentsInput, MetricUpdateWithoutModelComponentsInput>, MetricUncheckedUpdateWithoutModelComponentsInput>
  }

  export type UserCreateNestedOneWithoutAiSuggestionsInput = {
    create?: XOR<UserCreateWithoutAiSuggestionsInput, UserUncheckedCreateWithoutAiSuggestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiSuggestionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserModelCreateNestedOneWithoutAiSuggestionsInput = {
    create?: XOR<UserModelCreateWithoutAiSuggestionsInput, UserModelUncheckedCreateWithoutAiSuggestionsInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutAiSuggestionsInput
    connect?: UserModelWhereUniqueInput
  }

  export type UserUpdateOneWithoutAiSuggestionsNestedInput = {
    create?: XOR<UserCreateWithoutAiSuggestionsInput, UserUncheckedCreateWithoutAiSuggestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiSuggestionsInput
    upsert?: UserUpsertWithoutAiSuggestionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiSuggestionsInput, UserUpdateWithoutAiSuggestionsInput>, UserUncheckedUpdateWithoutAiSuggestionsInput>
  }

  export type UserModelUpdateOneWithoutAiSuggestionsNestedInput = {
    create?: XOR<UserModelCreateWithoutAiSuggestionsInput, UserModelUncheckedCreateWithoutAiSuggestionsInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutAiSuggestionsInput
    upsert?: UserModelUpsertWithoutAiSuggestionsInput
    disconnect?: UserModelWhereInput | boolean
    delete?: UserModelWhereInput | boolean
    connect?: UserModelWhereUniqueInput
    update?: XOR<XOR<UserModelUpdateToOneWithWhereWithoutAiSuggestionsInput, UserModelUpdateWithoutAiSuggestionsInput>, UserModelUncheckedUpdateWithoutAiSuggestionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionFilter<$PrismaModel> | $Enums.Position
  }

  export type NestedEnumPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionWithAggregatesFilter<$PrismaModel> | $Enums.Position
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPositionFilter<$PrismaModel>
    _max?: NestedEnumPositionFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type NestedEnumMetricCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricCategory | EnumMetricCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MetricCategory[] | ListEnumMetricCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricCategory[] | ListEnumMetricCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricCategoryFilter<$PrismaModel> | $Enums.MetricCategory
  }

  export type NestedEnumMetricCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricCategory | EnumMetricCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MetricCategory[] | ListEnumMetricCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricCategory[] | ListEnumMetricCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricCategoryWithAggregatesFilter<$PrismaModel> | $Enums.MetricCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricCategoryFilter<$PrismaModel>
    _max?: NestedEnumMetricCategoryFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserModelCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    definition: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    isListed?: boolean
    shareToken?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    modelComponents?: ModelComponentCreateNestedManyWithoutModelInput
    aiSuggestions?: AiSuggestionCreateNestedManyWithoutModelInput
  }

  export type UserModelUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    definition: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    isListed?: boolean
    shareToken?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    modelComponents?: ModelComponentUncheckedCreateNestedManyWithoutModelInput
    aiSuggestions?: AiSuggestionUncheckedCreateNestedManyWithoutModelInput
  }

  export type UserModelCreateOrConnectWithoutUserInput = {
    where: UserModelWhereUniqueInput
    create: XOR<UserModelCreateWithoutUserInput, UserModelUncheckedCreateWithoutUserInput>
  }

  export type UserModelCreateManyUserInputEnvelope = {
    data: UserModelCreateManyUserInput | UserModelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AiSuggestionCreateWithoutUserInput = {
    id?: string
    context: string
    suggestedMetrics: JsonNullValueInput | InputJsonValue
    wasAccepted?: boolean
    createdAt?: Date | string
    model?: UserModelCreateNestedOneWithoutAiSuggestionsInput
  }

  export type AiSuggestionUncheckedCreateWithoutUserInput = {
    id?: string
    modelId?: string | null
    context: string
    suggestedMetrics: JsonNullValueInput | InputJsonValue
    wasAccepted?: boolean
    createdAt?: Date | string
  }

  export type AiSuggestionCreateOrConnectWithoutUserInput = {
    where: AiSuggestionWhereUniqueInput
    create: XOR<AiSuggestionCreateWithoutUserInput, AiSuggestionUncheckedCreateWithoutUserInput>
  }

  export type AiSuggestionCreateManyUserInputEnvelope = {
    data: AiSuggestionCreateManyUserInput | AiSuggestionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserModelUpsertWithWhereUniqueWithoutUserInput = {
    where: UserModelWhereUniqueInput
    update: XOR<UserModelUpdateWithoutUserInput, UserModelUncheckedUpdateWithoutUserInput>
    create: XOR<UserModelCreateWithoutUserInput, UserModelUncheckedCreateWithoutUserInput>
  }

  export type UserModelUpdateWithWhereUniqueWithoutUserInput = {
    where: UserModelWhereUniqueInput
    data: XOR<UserModelUpdateWithoutUserInput, UserModelUncheckedUpdateWithoutUserInput>
  }

  export type UserModelUpdateManyWithWhereWithoutUserInput = {
    where: UserModelScalarWhereInput
    data: XOR<UserModelUpdateManyMutationInput, UserModelUncheckedUpdateManyWithoutUserInput>
  }

  export type UserModelScalarWhereInput = {
    AND?: UserModelScalarWhereInput | UserModelScalarWhereInput[]
    OR?: UserModelScalarWhereInput[]
    NOT?: UserModelScalarWhereInput | UserModelScalarWhereInput[]
    id?: StringFilter<"UserModel"> | string
    name?: StringFilter<"UserModel"> | string
    description?: StringNullableFilter<"UserModel"> | string | null
    definition?: JsonFilter<"UserModel">
    userId?: StringNullableFilter<"UserModel"> | string | null
    isPublic?: BoolFilter<"UserModel"> | boolean
    isListed?: BoolFilter<"UserModel"> | boolean
    shareToken?: StringNullableFilter<"UserModel"> | string | null
    isDeleted?: BoolFilter<"UserModel"> | boolean
    createdAt?: DateTimeFilter<"UserModel"> | Date | string
    updatedAt?: DateTimeFilter<"UserModel"> | Date | string
  }

  export type AiSuggestionUpsertWithWhereUniqueWithoutUserInput = {
    where: AiSuggestionWhereUniqueInput
    update: XOR<AiSuggestionUpdateWithoutUserInput, AiSuggestionUncheckedUpdateWithoutUserInput>
    create: XOR<AiSuggestionCreateWithoutUserInput, AiSuggestionUncheckedCreateWithoutUserInput>
  }

  export type AiSuggestionUpdateWithWhereUniqueWithoutUserInput = {
    where: AiSuggestionWhereUniqueInput
    data: XOR<AiSuggestionUpdateWithoutUserInput, AiSuggestionUncheckedUpdateWithoutUserInput>
  }

  export type AiSuggestionUpdateManyWithWhereWithoutUserInput = {
    where: AiSuggestionScalarWhereInput
    data: XOR<AiSuggestionUpdateManyMutationInput, AiSuggestionUncheckedUpdateManyWithoutUserInput>
  }

  export type AiSuggestionScalarWhereInput = {
    AND?: AiSuggestionScalarWhereInput | AiSuggestionScalarWhereInput[]
    OR?: AiSuggestionScalarWhereInput[]
    NOT?: AiSuggestionScalarWhereInput | AiSuggestionScalarWhereInput[]
    id?: StringFilter<"AiSuggestion"> | string
    userId?: StringNullableFilter<"AiSuggestion"> | string | null
    modelId?: StringNullableFilter<"AiSuggestion"> | string | null
    context?: StringFilter<"AiSuggestion"> | string
    suggestedMetrics?: JsonFilter<"AiSuggestion">
    wasAccepted?: BoolFilter<"AiSuggestion"> | boolean
    createdAt?: DateTimeFilter<"AiSuggestion"> | Date | string
  }

  export type PlayerCreateWithoutTeamInput = {
    id?: string
    name: string
    position: $Enums.Position
    number?: number | null
    height?: string | null
    weight?: number | null
    age?: number | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    position: $Enums.Position
    number?: number | null
    height?: string | null
    weight?: number | null
    age?: number | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerCreateOrConnectWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type PlayerCreateManyTeamInputEnvelope = {
    data: PlayerCreateManyTeamInput | PlayerCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutHomeTeamInput = {
    id?: string
    gameDate: Date | string
    week?: number | null
    season: number
    homeScore?: number | null
    awayScore?: number | null
    status?: $Enums.GameStatus
    venue?: string | null
    temperature?: number | null
    weather?: string | null
    attendance?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    awayTeam: TeamCreateNestedOneWithoutAwayGamesInput
    referee?: RefereeCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutHomeTeamInput = {
    id?: string
    gameDate: Date | string
    week?: number | null
    season: number
    awayTeamId: string
    refereeId?: string | null
    homeScore?: number | null
    awayScore?: number | null
    status?: $Enums.GameStatus
    venue?: string | null
    temperature?: number | null
    weather?: string | null
    attendance?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateOrConnectWithoutHomeTeamInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutHomeTeamInput, GameUncheckedCreateWithoutHomeTeamInput>
  }

  export type GameCreateManyHomeTeamInputEnvelope = {
    data: GameCreateManyHomeTeamInput | GameCreateManyHomeTeamInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutAwayTeamInput = {
    id?: string
    gameDate: Date | string
    week?: number | null
    season: number
    homeScore?: number | null
    awayScore?: number | null
    status?: $Enums.GameStatus
    venue?: string | null
    temperature?: number | null
    weather?: string | null
    attendance?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    homeTeam: TeamCreateNestedOneWithoutHomeGamesInput
    referee?: RefereeCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutAwayTeamInput = {
    id?: string
    gameDate: Date | string
    week?: number | null
    season: number
    homeTeamId: string
    refereeId?: string | null
    homeScore?: number | null
    awayScore?: number | null
    status?: $Enums.GameStatus
    venue?: string | null
    temperature?: number | null
    weather?: string | null
    attendance?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateOrConnectWithoutAwayTeamInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutAwayTeamInput, GameUncheckedCreateWithoutAwayTeamInput>
  }

  export type GameCreateManyAwayTeamInputEnvelope = {
    data: GameCreateManyAwayTeamInput | GameCreateManyAwayTeamInput[]
    skipDuplicates?: boolean
  }

  export type PlayerUpsertWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerUpdateManyWithWhereWithoutTeamInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutTeamInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    OR?: PlayerScalarWhereInput[]
    NOT?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    position?: EnumPositionFilter<"Player"> | $Enums.Position
    number?: IntNullableFilter<"Player"> | number | null
    height?: StringNullableFilter<"Player"> | string | null
    weight?: IntNullableFilter<"Player"> | number | null
    age?: IntNullableFilter<"Player"> | number | null
    teamId?: StringFilter<"Player"> | string
    isActive?: BoolFilter<"Player"> | boolean
    isDeleted?: BoolFilter<"Player"> | boolean
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
  }

  export type GameUpsertWithWhereUniqueWithoutHomeTeamInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutHomeTeamInput, GameUncheckedUpdateWithoutHomeTeamInput>
    create: XOR<GameCreateWithoutHomeTeamInput, GameUncheckedCreateWithoutHomeTeamInput>
  }

  export type GameUpdateWithWhereUniqueWithoutHomeTeamInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutHomeTeamInput, GameUncheckedUpdateWithoutHomeTeamInput>
  }

  export type GameUpdateManyWithWhereWithoutHomeTeamInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutHomeTeamInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: StringFilter<"Game"> | string
    gameDate?: DateTimeFilter<"Game"> | Date | string
    week?: IntNullableFilter<"Game"> | number | null
    season?: IntFilter<"Game"> | number
    homeTeamId?: StringFilter<"Game"> | string
    awayTeamId?: StringFilter<"Game"> | string
    refereeId?: StringNullableFilter<"Game"> | string | null
    homeScore?: IntNullableFilter<"Game"> | number | null
    awayScore?: IntNullableFilter<"Game"> | number | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    venue?: StringNullableFilter<"Game"> | string | null
    temperature?: IntNullableFilter<"Game"> | number | null
    weather?: StringNullableFilter<"Game"> | string | null
    attendance?: IntNullableFilter<"Game"> | number | null
    isDeleted?: BoolFilter<"Game"> | boolean
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
  }

  export type GameUpsertWithWhereUniqueWithoutAwayTeamInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutAwayTeamInput, GameUncheckedUpdateWithoutAwayTeamInput>
    create: XOR<GameCreateWithoutAwayTeamInput, GameUncheckedCreateWithoutAwayTeamInput>
  }

  export type GameUpdateWithWhereUniqueWithoutAwayTeamInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutAwayTeamInput, GameUncheckedUpdateWithoutAwayTeamInput>
  }

  export type GameUpdateManyWithWhereWithoutAwayTeamInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutAwayTeamInput>
  }

  export type TeamCreateWithoutPlayersInput = {
    id?: string
    name: string
    abbreviation: string
    city: string
    conference?: string | null
    division?: string | null
    logoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    homeGames?: GameCreateNestedManyWithoutHomeTeamInput
    awayGames?: GameCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    abbreviation: string
    city: string
    conference?: string | null
    division?: string | null
    logoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    homeGames?: GameUncheckedCreateNestedManyWithoutHomeTeamInput
    awayGames?: GameUncheckedCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamCreateOrConnectWithoutPlayersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
  }

  export type TeamUpsertWithoutPlayersInput = {
    update: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPlayersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type TeamUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeGames?: GameUpdateManyWithoutHomeTeamNestedInput
    awayGames?: GameUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeGames?: GameUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayGames?: GameUncheckedUpdateManyWithoutAwayTeamNestedInput
  }

  export type GameCreateWithoutRefereeInput = {
    id?: string
    gameDate: Date | string
    week?: number | null
    season: number
    homeScore?: number | null
    awayScore?: number | null
    status?: $Enums.GameStatus
    venue?: string | null
    temperature?: number | null
    weather?: string | null
    attendance?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    homeTeam: TeamCreateNestedOneWithoutHomeGamesInput
    awayTeam: TeamCreateNestedOneWithoutAwayGamesInput
  }

  export type GameUncheckedCreateWithoutRefereeInput = {
    id?: string
    gameDate: Date | string
    week?: number | null
    season: number
    homeTeamId: string
    awayTeamId: string
    homeScore?: number | null
    awayScore?: number | null
    status?: $Enums.GameStatus
    venue?: string | null
    temperature?: number | null
    weather?: string | null
    attendance?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateOrConnectWithoutRefereeInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutRefereeInput, GameUncheckedCreateWithoutRefereeInput>
  }

  export type GameCreateManyRefereeInputEnvelope = {
    data: GameCreateManyRefereeInput | GameCreateManyRefereeInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutRefereeInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutRefereeInput, GameUncheckedUpdateWithoutRefereeInput>
    create: XOR<GameCreateWithoutRefereeInput, GameUncheckedCreateWithoutRefereeInput>
  }

  export type GameUpdateWithWhereUniqueWithoutRefereeInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutRefereeInput, GameUncheckedUpdateWithoutRefereeInput>
  }

  export type GameUpdateManyWithWhereWithoutRefereeInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutRefereeInput>
  }

  export type TeamCreateWithoutHomeGamesInput = {
    id?: string
    name: string
    abbreviation: string
    city: string
    conference?: string | null
    division?: string | null
    logoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerCreateNestedManyWithoutTeamInput
    awayGames?: GameCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUncheckedCreateWithoutHomeGamesInput = {
    id?: string
    name: string
    abbreviation: string
    city: string
    conference?: string | null
    division?: string | null
    logoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    awayGames?: GameUncheckedCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamCreateOrConnectWithoutHomeGamesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutHomeGamesInput, TeamUncheckedCreateWithoutHomeGamesInput>
  }

  export type TeamCreateWithoutAwayGamesInput = {
    id?: string
    name: string
    abbreviation: string
    city: string
    conference?: string | null
    division?: string | null
    logoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerCreateNestedManyWithoutTeamInput
    homeGames?: GameCreateNestedManyWithoutHomeTeamInput
  }

  export type TeamUncheckedCreateWithoutAwayGamesInput = {
    id?: string
    name: string
    abbreviation: string
    city: string
    conference?: string | null
    division?: string | null
    logoUrl?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    homeGames?: GameUncheckedCreateNestedManyWithoutHomeTeamInput
  }

  export type TeamCreateOrConnectWithoutAwayGamesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutAwayGamesInput, TeamUncheckedCreateWithoutAwayGamesInput>
  }

  export type RefereeCreateWithoutGamesInput = {
    id?: string
    name: string
    number?: number | null
    position?: string | null
    yearsExp?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefereeUncheckedCreateWithoutGamesInput = {
    id?: string
    name: string
    number?: number | null
    position?: string | null
    yearsExp?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefereeCreateOrConnectWithoutGamesInput = {
    where: RefereeWhereUniqueInput
    create: XOR<RefereeCreateWithoutGamesInput, RefereeUncheckedCreateWithoutGamesInput>
  }

  export type TeamUpsertWithoutHomeGamesInput = {
    update: XOR<TeamUpdateWithoutHomeGamesInput, TeamUncheckedUpdateWithoutHomeGamesInput>
    create: XOR<TeamCreateWithoutHomeGamesInput, TeamUncheckedCreateWithoutHomeGamesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutHomeGamesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutHomeGamesInput, TeamUncheckedUpdateWithoutHomeGamesInput>
  }

  export type TeamUpdateWithoutHomeGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUpdateManyWithoutTeamNestedInput
    awayGames?: GameUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutHomeGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    awayGames?: GameUncheckedUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUpsertWithoutAwayGamesInput = {
    update: XOR<TeamUpdateWithoutAwayGamesInput, TeamUncheckedUpdateWithoutAwayGamesInput>
    create: XOR<TeamCreateWithoutAwayGamesInput, TeamUncheckedCreateWithoutAwayGamesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutAwayGamesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutAwayGamesInput, TeamUncheckedUpdateWithoutAwayGamesInput>
  }

  export type TeamUpdateWithoutAwayGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUpdateManyWithoutTeamNestedInput
    homeGames?: GameUpdateManyWithoutHomeTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutAwayGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    homeGames?: GameUncheckedUpdateManyWithoutHomeTeamNestedInput
  }

  export type RefereeUpsertWithoutGamesInput = {
    update: XOR<RefereeUpdateWithoutGamesInput, RefereeUncheckedUpdateWithoutGamesInput>
    create: XOR<RefereeCreateWithoutGamesInput, RefereeUncheckedCreateWithoutGamesInput>
    where?: RefereeWhereInput
  }

  export type RefereeUpdateToOneWithWhereWithoutGamesInput = {
    where?: RefereeWhereInput
    data: XOR<RefereeUpdateWithoutGamesInput, RefereeUncheckedUpdateWithoutGamesInput>
  }

  export type RefereeUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExp?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefereeUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExp?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelComponentCreateWithoutMetricInput = {
    id?: string
    weight?: number
    isActive?: boolean
    model: UserModelCreateNestedOneWithoutModelComponentsInput
  }

  export type ModelComponentUncheckedCreateWithoutMetricInput = {
    id?: string
    modelId: string
    weight?: number
    isActive?: boolean
  }

  export type ModelComponentCreateOrConnectWithoutMetricInput = {
    where: ModelComponentWhereUniqueInput
    create: XOR<ModelComponentCreateWithoutMetricInput, ModelComponentUncheckedCreateWithoutMetricInput>
  }

  export type ModelComponentCreateManyMetricInputEnvelope = {
    data: ModelComponentCreateManyMetricInput | ModelComponentCreateManyMetricInput[]
    skipDuplicates?: boolean
  }

  export type ModelComponentUpsertWithWhereUniqueWithoutMetricInput = {
    where: ModelComponentWhereUniqueInput
    update: XOR<ModelComponentUpdateWithoutMetricInput, ModelComponentUncheckedUpdateWithoutMetricInput>
    create: XOR<ModelComponentCreateWithoutMetricInput, ModelComponentUncheckedCreateWithoutMetricInput>
  }

  export type ModelComponentUpdateWithWhereUniqueWithoutMetricInput = {
    where: ModelComponentWhereUniqueInput
    data: XOR<ModelComponentUpdateWithoutMetricInput, ModelComponentUncheckedUpdateWithoutMetricInput>
  }

  export type ModelComponentUpdateManyWithWhereWithoutMetricInput = {
    where: ModelComponentScalarWhereInput
    data: XOR<ModelComponentUpdateManyMutationInput, ModelComponentUncheckedUpdateManyWithoutMetricInput>
  }

  export type ModelComponentScalarWhereInput = {
    AND?: ModelComponentScalarWhereInput | ModelComponentScalarWhereInput[]
    OR?: ModelComponentScalarWhereInput[]
    NOT?: ModelComponentScalarWhereInput | ModelComponentScalarWhereInput[]
    id?: StringFilter<"ModelComponent"> | string
    modelId?: StringFilter<"ModelComponent"> | string
    metricId?: StringFilter<"ModelComponent"> | string
    weight?: FloatFilter<"ModelComponent"> | number
    isActive?: BoolFilter<"ModelComponent"> | boolean
  }

  export type UserCreateWithoutUserModelsInput = {
    id?: string
    email: string
    name?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiSuggestions?: AiSuggestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserModelsInput = {
    id?: string
    email: string
    name?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiSuggestions?: AiSuggestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserModelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserModelsInput, UserUncheckedCreateWithoutUserModelsInput>
  }

  export type ModelComponentCreateWithoutModelInput = {
    id?: string
    weight?: number
    isActive?: boolean
    metric: MetricCreateNestedOneWithoutModelComponentsInput
  }

  export type ModelComponentUncheckedCreateWithoutModelInput = {
    id?: string
    metricId: string
    weight?: number
    isActive?: boolean
  }

  export type ModelComponentCreateOrConnectWithoutModelInput = {
    where: ModelComponentWhereUniqueInput
    create: XOR<ModelComponentCreateWithoutModelInput, ModelComponentUncheckedCreateWithoutModelInput>
  }

  export type ModelComponentCreateManyModelInputEnvelope = {
    data: ModelComponentCreateManyModelInput | ModelComponentCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type AiSuggestionCreateWithoutModelInput = {
    id?: string
    context: string
    suggestedMetrics: JsonNullValueInput | InputJsonValue
    wasAccepted?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAiSuggestionsInput
  }

  export type AiSuggestionUncheckedCreateWithoutModelInput = {
    id?: string
    userId?: string | null
    context: string
    suggestedMetrics: JsonNullValueInput | InputJsonValue
    wasAccepted?: boolean
    createdAt?: Date | string
  }

  export type AiSuggestionCreateOrConnectWithoutModelInput = {
    where: AiSuggestionWhereUniqueInput
    create: XOR<AiSuggestionCreateWithoutModelInput, AiSuggestionUncheckedCreateWithoutModelInput>
  }

  export type AiSuggestionCreateManyModelInputEnvelope = {
    data: AiSuggestionCreateManyModelInput | AiSuggestionCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserModelsInput = {
    update: XOR<UserUpdateWithoutUserModelsInput, UserUncheckedUpdateWithoutUserModelsInput>
    create: XOR<UserCreateWithoutUserModelsInput, UserUncheckedCreateWithoutUserModelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserModelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserModelsInput, UserUncheckedUpdateWithoutUserModelsInput>
  }

  export type UserUpdateWithoutUserModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSuggestions?: AiSuggestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSuggestions?: AiSuggestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModelComponentUpsertWithWhereUniqueWithoutModelInput = {
    where: ModelComponentWhereUniqueInput
    update: XOR<ModelComponentUpdateWithoutModelInput, ModelComponentUncheckedUpdateWithoutModelInput>
    create: XOR<ModelComponentCreateWithoutModelInput, ModelComponentUncheckedCreateWithoutModelInput>
  }

  export type ModelComponentUpdateWithWhereUniqueWithoutModelInput = {
    where: ModelComponentWhereUniqueInput
    data: XOR<ModelComponentUpdateWithoutModelInput, ModelComponentUncheckedUpdateWithoutModelInput>
  }

  export type ModelComponentUpdateManyWithWhereWithoutModelInput = {
    where: ModelComponentScalarWhereInput
    data: XOR<ModelComponentUpdateManyMutationInput, ModelComponentUncheckedUpdateManyWithoutModelInput>
  }

  export type AiSuggestionUpsertWithWhereUniqueWithoutModelInput = {
    where: AiSuggestionWhereUniqueInput
    update: XOR<AiSuggestionUpdateWithoutModelInput, AiSuggestionUncheckedUpdateWithoutModelInput>
    create: XOR<AiSuggestionCreateWithoutModelInput, AiSuggestionUncheckedCreateWithoutModelInput>
  }

  export type AiSuggestionUpdateWithWhereUniqueWithoutModelInput = {
    where: AiSuggestionWhereUniqueInput
    data: XOR<AiSuggestionUpdateWithoutModelInput, AiSuggestionUncheckedUpdateWithoutModelInput>
  }

  export type AiSuggestionUpdateManyWithWhereWithoutModelInput = {
    where: AiSuggestionScalarWhereInput
    data: XOR<AiSuggestionUpdateManyMutationInput, AiSuggestionUncheckedUpdateManyWithoutModelInput>
  }

  export type UserModelCreateWithoutModelComponentsInput = {
    id?: string
    name: string
    description?: string | null
    definition: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    isListed?: boolean
    shareToken?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutUserModelsInput
    aiSuggestions?: AiSuggestionCreateNestedManyWithoutModelInput
  }

  export type UserModelUncheckedCreateWithoutModelComponentsInput = {
    id?: string
    name: string
    description?: string | null
    definition: JsonNullValueInput | InputJsonValue
    userId?: string | null
    isPublic?: boolean
    isListed?: boolean
    shareToken?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiSuggestions?: AiSuggestionUncheckedCreateNestedManyWithoutModelInput
  }

  export type UserModelCreateOrConnectWithoutModelComponentsInput = {
    where: UserModelWhereUniqueInput
    create: XOR<UserModelCreateWithoutModelComponentsInput, UserModelUncheckedCreateWithoutModelComponentsInput>
  }

  export type MetricCreateWithoutModelComponentsInput = {
    id?: string
    name: string
    displayName: string
    description?: string | null
    category: $Enums.MetricCategory
    dataType?: string
    unit?: string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricUncheckedCreateWithoutModelComponentsInput = {
    id?: string
    name: string
    displayName: string
    description?: string | null
    category: $Enums.MetricCategory
    dataType?: string
    unit?: string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricCreateOrConnectWithoutModelComponentsInput = {
    where: MetricWhereUniqueInput
    create: XOR<MetricCreateWithoutModelComponentsInput, MetricUncheckedCreateWithoutModelComponentsInput>
  }

  export type UserModelUpsertWithoutModelComponentsInput = {
    update: XOR<UserModelUpdateWithoutModelComponentsInput, UserModelUncheckedUpdateWithoutModelComponentsInput>
    create: XOR<UserModelCreateWithoutModelComponentsInput, UserModelUncheckedCreateWithoutModelComponentsInput>
    where?: UserModelWhereInput
  }

  export type UserModelUpdateToOneWithWhereWithoutModelComponentsInput = {
    where?: UserModelWhereInput
    data: XOR<UserModelUpdateWithoutModelComponentsInput, UserModelUncheckedUpdateWithoutModelComponentsInput>
  }

  export type UserModelUpdateWithoutModelComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isListed?: BoolFieldUpdateOperationsInput | boolean
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutUserModelsNestedInput
    aiSuggestions?: AiSuggestionUpdateManyWithoutModelNestedInput
  }

  export type UserModelUncheckedUpdateWithoutModelComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: JsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isListed?: BoolFieldUpdateOperationsInput | boolean
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiSuggestions?: AiSuggestionUncheckedUpdateManyWithoutModelNestedInput
  }

  export type MetricUpsertWithoutModelComponentsInput = {
    update: XOR<MetricUpdateWithoutModelComponentsInput, MetricUncheckedUpdateWithoutModelComponentsInput>
    create: XOR<MetricCreateWithoutModelComponentsInput, MetricUncheckedCreateWithoutModelComponentsInput>
    where?: MetricWhereInput
  }

  export type MetricUpdateToOneWithWhereWithoutModelComponentsInput = {
    where?: MetricWhereInput
    data: XOR<MetricUpdateWithoutModelComponentsInput, MetricUncheckedUpdateWithoutModelComponentsInput>
  }

  export type MetricUpdateWithoutModelComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumMetricCategoryFieldUpdateOperationsInput | $Enums.MetricCategory
    dataType?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricUncheckedUpdateWithoutModelComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumMetricCategoryFieldUpdateOperationsInput | $Enums.MetricCategory
    dataType?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAiSuggestionsInput = {
    id?: string
    email: string
    name?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userModels?: UserModelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiSuggestionsInput = {
    id?: string
    email: string
    name?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userModels?: UserModelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAiSuggestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiSuggestionsInput, UserUncheckedCreateWithoutAiSuggestionsInput>
  }

  export type UserModelCreateWithoutAiSuggestionsInput = {
    id?: string
    name: string
    description?: string | null
    definition: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    isListed?: boolean
    shareToken?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutUserModelsInput
    modelComponents?: ModelComponentCreateNestedManyWithoutModelInput
  }

  export type UserModelUncheckedCreateWithoutAiSuggestionsInput = {
    id?: string
    name: string
    description?: string | null
    definition: JsonNullValueInput | InputJsonValue
    userId?: string | null
    isPublic?: boolean
    isListed?: boolean
    shareToken?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    modelComponents?: ModelComponentUncheckedCreateNestedManyWithoutModelInput
  }

  export type UserModelCreateOrConnectWithoutAiSuggestionsInput = {
    where: UserModelWhereUniqueInput
    create: XOR<UserModelCreateWithoutAiSuggestionsInput, UserModelUncheckedCreateWithoutAiSuggestionsInput>
  }

  export type UserUpsertWithoutAiSuggestionsInput = {
    update: XOR<UserUpdateWithoutAiSuggestionsInput, UserUncheckedUpdateWithoutAiSuggestionsInput>
    create: XOR<UserCreateWithoutAiSuggestionsInput, UserUncheckedCreateWithoutAiSuggestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiSuggestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiSuggestionsInput, UserUncheckedUpdateWithoutAiSuggestionsInput>
  }

  export type UserUpdateWithoutAiSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userModels?: UserModelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userModels?: UserModelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserModelUpsertWithoutAiSuggestionsInput = {
    update: XOR<UserModelUpdateWithoutAiSuggestionsInput, UserModelUncheckedUpdateWithoutAiSuggestionsInput>
    create: XOR<UserModelCreateWithoutAiSuggestionsInput, UserModelUncheckedCreateWithoutAiSuggestionsInput>
    where?: UserModelWhereInput
  }

  export type UserModelUpdateToOneWithWhereWithoutAiSuggestionsInput = {
    where?: UserModelWhereInput
    data: XOR<UserModelUpdateWithoutAiSuggestionsInput, UserModelUncheckedUpdateWithoutAiSuggestionsInput>
  }

  export type UserModelUpdateWithoutAiSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isListed?: BoolFieldUpdateOperationsInput | boolean
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutUserModelsNestedInput
    modelComponents?: ModelComponentUpdateManyWithoutModelNestedInput
  }

  export type UserModelUncheckedUpdateWithoutAiSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: JsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isListed?: BoolFieldUpdateOperationsInput | boolean
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelComponents?: ModelComponentUncheckedUpdateManyWithoutModelNestedInput
  }

  export type UserModelCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    definition: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    isListed?: boolean
    shareToken?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiSuggestionCreateManyUserInput = {
    id?: string
    modelId?: string | null
    context: string
    suggestedMetrics: JsonNullValueInput | InputJsonValue
    wasAccepted?: boolean
    createdAt?: Date | string
  }

  export type UserModelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isListed?: BoolFieldUpdateOperationsInput | boolean
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelComponents?: ModelComponentUpdateManyWithoutModelNestedInput
    aiSuggestions?: AiSuggestionUpdateManyWithoutModelNestedInput
  }

  export type UserModelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isListed?: BoolFieldUpdateOperationsInput | boolean
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelComponents?: ModelComponentUncheckedUpdateManyWithoutModelNestedInput
    aiSuggestions?: AiSuggestionUncheckedUpdateManyWithoutModelNestedInput
  }

  export type UserModelUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isListed?: BoolFieldUpdateOperationsInput | boolean
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiSuggestionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    suggestedMetrics?: JsonNullValueInput | InputJsonValue
    wasAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: UserModelUpdateOneWithoutAiSuggestionsNestedInput
  }

  export type AiSuggestionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    context?: StringFieldUpdateOperationsInput | string
    suggestedMetrics?: JsonNullValueInput | InputJsonValue
    wasAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiSuggestionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: NullableStringFieldUpdateOperationsInput | string | null
    context?: StringFieldUpdateOperationsInput | string
    suggestedMetrics?: JsonNullValueInput | InputJsonValue
    wasAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateManyTeamInput = {
    id?: string
    name: string
    position: $Enums.Position
    number?: number | null
    height?: string | null
    weight?: number | null
    age?: number | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateManyHomeTeamInput = {
    id?: string
    gameDate: Date | string
    week?: number | null
    season: number
    awayTeamId: string
    refereeId?: string | null
    homeScore?: number | null
    awayScore?: number | null
    status?: $Enums.GameStatus
    venue?: string | null
    temperature?: number | null
    weather?: string | null
    attendance?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateManyAwayTeamInput = {
    id?: string
    gameDate: Date | string
    week?: number | null
    season: number
    homeTeamId: string
    refereeId?: string | null
    homeScore?: number | null
    awayScore?: number | null
    status?: $Enums.GameStatus
    venue?: string | null
    temperature?: number | null
    weather?: string | null
    attendance?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    number?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    number?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    number?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUpdateWithoutHomeTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: NullableIntFieldUpdateOperationsInput | number | null
    season?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    awayTeam?: TeamUpdateOneRequiredWithoutAwayGamesNestedInput
    referee?: RefereeUpdateOneWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutHomeTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: NullableIntFieldUpdateOperationsInput | number | null
    season?: IntFieldUpdateOperationsInput | number
    awayTeamId?: StringFieldUpdateOperationsInput | string
    refereeId?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyWithoutHomeTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: NullableIntFieldUpdateOperationsInput | number | null
    season?: IntFieldUpdateOperationsInput | number
    awayTeamId?: StringFieldUpdateOperationsInput | string
    refereeId?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUpdateWithoutAwayTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: NullableIntFieldUpdateOperationsInput | number | null
    season?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: TeamUpdateOneRequiredWithoutHomeGamesNestedInput
    referee?: RefereeUpdateOneWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutAwayTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: NullableIntFieldUpdateOperationsInput | number | null
    season?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    refereeId?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyWithoutAwayTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: NullableIntFieldUpdateOperationsInput | number | null
    season?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    refereeId?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateManyRefereeInput = {
    id?: string
    gameDate: Date | string
    week?: number | null
    season: number
    homeTeamId: string
    awayTeamId: string
    homeScore?: number | null
    awayScore?: number | null
    status?: $Enums.GameStatus
    venue?: string | null
    temperature?: number | null
    weather?: string | null
    attendance?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateWithoutRefereeInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: NullableIntFieldUpdateOperationsInput | number | null
    season?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: TeamUpdateOneRequiredWithoutHomeGamesNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutRefereeInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: NullableIntFieldUpdateOperationsInput | number | null
    season?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyWithoutRefereeInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: NullableIntFieldUpdateOperationsInput | number | null
    season?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelComponentCreateManyMetricInput = {
    id?: string
    modelId: string
    weight?: number
    isActive?: boolean
  }

  export type ModelComponentUpdateWithoutMetricInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    model?: UserModelUpdateOneRequiredWithoutModelComponentsNestedInput
  }

  export type ModelComponentUncheckedUpdateWithoutMetricInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModelComponentUncheckedUpdateManyWithoutMetricInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModelComponentCreateManyModelInput = {
    id?: string
    metricId: string
    weight?: number
    isActive?: boolean
  }

  export type AiSuggestionCreateManyModelInput = {
    id?: string
    userId?: string | null
    context: string
    suggestedMetrics: JsonNullValueInput | InputJsonValue
    wasAccepted?: boolean
    createdAt?: Date | string
  }

  export type ModelComponentUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    metric?: MetricUpdateOneRequiredWithoutModelComponentsNestedInput
  }

  export type ModelComponentUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricId?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModelComponentUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricId?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AiSuggestionUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    suggestedMetrics?: JsonNullValueInput | InputJsonValue
    wasAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAiSuggestionsNestedInput
  }

  export type AiSuggestionUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    context?: StringFieldUpdateOperationsInput | string
    suggestedMetrics?: JsonNullValueInput | InputJsonValue
    wasAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiSuggestionUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    context?: StringFieldUpdateOperationsInput | string
    suggestedMetrics?: JsonNullValueInput | InputJsonValue
    wasAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamCountOutputTypeDefaultArgs instead
     */
    export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RefereeCountOutputTypeDefaultArgs instead
     */
    export type RefereeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RefereeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MetricCountOutputTypeDefaultArgs instead
     */
    export type MetricCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MetricCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserModelCountOutputTypeDefaultArgs instead
     */
    export type UserModelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserModelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamDefaultArgs instead
     */
    export type TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayerDefaultArgs instead
     */
    export type PlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RefereeDefaultArgs instead
     */
    export type RefereeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RefereeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameDefaultArgs instead
     */
    export type GameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MetricDefaultArgs instead
     */
    export type MetricArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MetricDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserModelDefaultArgs instead
     */
    export type UserModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserModelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModelComponentDefaultArgs instead
     */
    export type ModelComponentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModelComponentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AiSuggestionDefaultArgs instead
     */
    export type AiSuggestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AiSuggestionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}