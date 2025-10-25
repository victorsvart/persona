
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model UserProfessionalExperience
 * 
 */
export type UserProfessionalExperience = $Result.DefaultSelection<Prisma.$UserProfessionalExperiencePayload>
/**
 * Model UserProfessionalSummary
 * 
 */
export type UserProfessionalSummary = $Result.DefaultSelection<Prisma.$UserProfessionalSummaryPayload>
/**
 * Model UserAcademicInformation
 * 
 */
export type UserAcademicInformation = $Result.DefaultSelection<Prisma.$UserAcademicInformationPayload>
/**
 * Model UserSkill
 * 
 */
export type UserSkill = $Result.DefaultSelection<Prisma.$UserSkillPayload>
/**
 * Model UserApplications
 * 
 */
export type UserApplications = $Result.DefaultSelection<Prisma.$UserApplicationsPayload>
/**
 * Model UserResume
 * 
 */
export type UserResume = $Result.DefaultSelection<Prisma.$UserResumePayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfessionalExperience`: Exposes CRUD operations for the **UserProfessionalExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfessionalExperiences
    * const userProfessionalExperiences = await prisma.userProfessionalExperience.findMany()
    * ```
    */
  get userProfessionalExperience(): Prisma.UserProfessionalExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfessionalSummary`: Exposes CRUD operations for the **UserProfessionalSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfessionalSummaries
    * const userProfessionalSummaries = await prisma.userProfessionalSummary.findMany()
    * ```
    */
  get userProfessionalSummary(): Prisma.UserProfessionalSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAcademicInformation`: Exposes CRUD operations for the **UserAcademicInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAcademicInformations
    * const userAcademicInformations = await prisma.userAcademicInformation.findMany()
    * ```
    */
  get userAcademicInformation(): Prisma.UserAcademicInformationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSkill`: Exposes CRUD operations for the **UserSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkills
    * const userSkills = await prisma.userSkill.findMany()
    * ```
    */
  get userSkill(): Prisma.UserSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userApplications`: Exposes CRUD operations for the **UserApplications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserApplications
    * const userApplications = await prisma.userApplications.findMany()
    * ```
    */
  get userApplications(): Prisma.UserApplicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userResume`: Exposes CRUD operations for the **UserResume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserResumes
    * const userResumes = await prisma.userResume.findMany()
    * ```
    */
  get userResume(): Prisma.UserResumeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    UserProfessionalExperience: 'UserProfessionalExperience',
    UserProfessionalSummary: 'UserProfessionalSummary',
    UserAcademicInformation: 'UserAcademicInformation',
    UserSkill: 'UserSkill',
    UserApplications: 'UserApplications',
    UserResume: 'UserResume'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "userProfessionalExperience" | "userProfessionalSummary" | "userAcademicInformation" | "userSkill" | "userApplications" | "userResume"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      UserProfessionalExperience: {
        payload: Prisma.$UserProfessionalExperiencePayload<ExtArgs>
        fields: Prisma.UserProfessionalExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfessionalExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfessionalExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalExperiencePayload>
          }
          findFirst: {
            args: Prisma.UserProfessionalExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfessionalExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalExperiencePayload>
          }
          findMany: {
            args: Prisma.UserProfessionalExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalExperiencePayload>[]
          }
          create: {
            args: Prisma.UserProfessionalExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalExperiencePayload>
          }
          createMany: {
            args: Prisma.UserProfessionalExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfessionalExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalExperiencePayload>[]
          }
          delete: {
            args: Prisma.UserProfessionalExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalExperiencePayload>
          }
          update: {
            args: Prisma.UserProfessionalExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalExperiencePayload>
          }
          deleteMany: {
            args: Prisma.UserProfessionalExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfessionalExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfessionalExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalExperiencePayload>[]
          }
          upsert: {
            args: Prisma.UserProfessionalExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalExperiencePayload>
          }
          aggregate: {
            args: Prisma.UserProfessionalExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfessionalExperience>
          }
          groupBy: {
            args: Prisma.UserProfessionalExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfessionalExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfessionalExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfessionalExperienceCountAggregateOutputType> | number
          }
        }
      }
      UserProfessionalSummary: {
        payload: Prisma.$UserProfessionalSummaryPayload<ExtArgs>
        fields: Prisma.UserProfessionalSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfessionalSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfessionalSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalSummaryPayload>
          }
          findFirst: {
            args: Prisma.UserProfessionalSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfessionalSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalSummaryPayload>
          }
          findMany: {
            args: Prisma.UserProfessionalSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalSummaryPayload>[]
          }
          create: {
            args: Prisma.UserProfessionalSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalSummaryPayload>
          }
          createMany: {
            args: Prisma.UserProfessionalSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfessionalSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalSummaryPayload>[]
          }
          delete: {
            args: Prisma.UserProfessionalSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalSummaryPayload>
          }
          update: {
            args: Prisma.UserProfessionalSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalSummaryPayload>
          }
          deleteMany: {
            args: Prisma.UserProfessionalSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfessionalSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfessionalSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalSummaryPayload>[]
          }
          upsert: {
            args: Prisma.UserProfessionalSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfessionalSummaryPayload>
          }
          aggregate: {
            args: Prisma.UserProfessionalSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfessionalSummary>
          }
          groupBy: {
            args: Prisma.UserProfessionalSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfessionalSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfessionalSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfessionalSummaryCountAggregateOutputType> | number
          }
        }
      }
      UserAcademicInformation: {
        payload: Prisma.$UserAcademicInformationPayload<ExtArgs>
        fields: Prisma.UserAcademicInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAcademicInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAcademicInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAcademicInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAcademicInformationPayload>
          }
          findFirst: {
            args: Prisma.UserAcademicInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAcademicInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAcademicInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAcademicInformationPayload>
          }
          findMany: {
            args: Prisma.UserAcademicInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAcademicInformationPayload>[]
          }
          create: {
            args: Prisma.UserAcademicInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAcademicInformationPayload>
          }
          createMany: {
            args: Prisma.UserAcademicInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAcademicInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAcademicInformationPayload>[]
          }
          delete: {
            args: Prisma.UserAcademicInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAcademicInformationPayload>
          }
          update: {
            args: Prisma.UserAcademicInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAcademicInformationPayload>
          }
          deleteMany: {
            args: Prisma.UserAcademicInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAcademicInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAcademicInformationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAcademicInformationPayload>[]
          }
          upsert: {
            args: Prisma.UserAcademicInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAcademicInformationPayload>
          }
          aggregate: {
            args: Prisma.UserAcademicInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAcademicInformation>
          }
          groupBy: {
            args: Prisma.UserAcademicInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAcademicInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAcademicInformationCountArgs<ExtArgs>
            result: $Utils.Optional<UserAcademicInformationCountAggregateOutputType> | number
          }
        }
      }
      UserSkill: {
        payload: Prisma.$UserSkillPayload<ExtArgs>
        fields: Prisma.UserSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findFirst: {
            args: Prisma.UserSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findMany: {
            args: Prisma.UserSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          create: {
            args: Prisma.UserSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          createMany: {
            args: Prisma.UserSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          delete: {
            args: Prisma.UserSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          update: {
            args: Prisma.UserSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          deleteMany: {
            args: Prisma.UserSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          upsert: {
            args: Prisma.UserSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          aggregate: {
            args: Prisma.UserSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkill>
          }
          groupBy: {
            args: Prisma.UserSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSkillCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillCountAggregateOutputType> | number
          }
        }
      }
      UserApplications: {
        payload: Prisma.$UserApplicationsPayload<ExtArgs>
        fields: Prisma.UserApplicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserApplicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApplicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserApplicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApplicationsPayload>
          }
          findFirst: {
            args: Prisma.UserApplicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApplicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserApplicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApplicationsPayload>
          }
          findMany: {
            args: Prisma.UserApplicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApplicationsPayload>[]
          }
          create: {
            args: Prisma.UserApplicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApplicationsPayload>
          }
          createMany: {
            args: Prisma.UserApplicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserApplicationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApplicationsPayload>[]
          }
          delete: {
            args: Prisma.UserApplicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApplicationsPayload>
          }
          update: {
            args: Prisma.UserApplicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApplicationsPayload>
          }
          deleteMany: {
            args: Prisma.UserApplicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserApplicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserApplicationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApplicationsPayload>[]
          }
          upsert: {
            args: Prisma.UserApplicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApplicationsPayload>
          }
          aggregate: {
            args: Prisma.UserApplicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserApplications>
          }
          groupBy: {
            args: Prisma.UserApplicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserApplicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserApplicationsCountArgs<ExtArgs>
            result: $Utils.Optional<UserApplicationsCountAggregateOutputType> | number
          }
        }
      }
      UserResume: {
        payload: Prisma.$UserResumePayload<ExtArgs>
        fields: Prisma.UserResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResumePayload>
          }
          findFirst: {
            args: Prisma.UserResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResumePayload>
          }
          findMany: {
            args: Prisma.UserResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResumePayload>[]
          }
          create: {
            args: Prisma.UserResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResumePayload>
          }
          createMany: {
            args: Prisma.UserResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResumePayload>[]
          }
          delete: {
            args: Prisma.UserResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResumePayload>
          }
          update: {
            args: Prisma.UserResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResumePayload>
          }
          deleteMany: {
            args: Prisma.UserResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResumePayload>[]
          }
          upsert: {
            args: Prisma.UserResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResumePayload>
          }
          aggregate: {
            args: Prisma.UserResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserResume>
          }
          groupBy: {
            args: Prisma.UserResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserResumeCountArgs<ExtArgs>
            result: $Utils.Optional<UserResumeCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    userProfessionalExperience?: UserProfessionalExperienceOmit
    userProfessionalSummary?: UserProfessionalSummaryOmit
    userAcademicInformation?: UserAcademicInformationOmit
    userSkill?: UserSkillOmit
    userApplications?: UserApplicationsOmit
    userResume?: UserResumeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
    sessions: number
    accounts: number
    user_professional_experiences: number
    user_academic_information: number
    applications: number
    resumes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    user_professional_experiences?: boolean | UserCountOutputTypeCountUser_professional_experiencesArgs
    user_academic_information?: boolean | UserCountOutputTypeCountUser_academic_informationArgs
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
    resumes?: boolean | UserCountOutputTypeCountResumesArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_professional_experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfessionalExperienceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_academic_informationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAcademicInformationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserApplicationsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserResumeWhereInput
  }


  /**
   * Count Type UserApplicationsCountOutputType
   */

  export type UserApplicationsCountOutputType = {
    resumes: number
  }

  export type UserApplicationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | UserApplicationsCountOutputTypeCountResumesArgs
  }

  // Custom InputTypes
  /**
   * UserApplicationsCountOutputType without action
   */
  export type UserApplicationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplicationsCountOutputType
     */
    select?: UserApplicationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserApplicationsCountOutputType without action
   */
  export type UserApplicationsCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserResumeWhereInput
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
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    displayUsername: string | null
    onboarded: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    displayUsername: string | null
    onboarded: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    username: number
    displayUsername: number
    onboarded: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    displayUsername?: true
    onboarded?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    displayUsername?: true
    onboarded?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    displayUsername?: true
    onboarded?: true
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
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    username: string | null
    displayUsername: string | null
    onboarded: boolean
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    displayUsername?: boolean
    onboarded?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    user_professional_summary?: boolean | User$user_professional_summaryArgs<ExtArgs>
    user_professional_experiences?: boolean | User$user_professional_experiencesArgs<ExtArgs>
    user_academic_information?: boolean | User$user_academic_informationArgs<ExtArgs>
    user_skill?: boolean | User$user_skillArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    resumes?: boolean | User$resumesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    displayUsername?: boolean
    onboarded?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    displayUsername?: boolean
    onboarded?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    displayUsername?: boolean
    onboarded?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "username" | "displayUsername" | "onboarded", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    user_professional_summary?: boolean | User$user_professional_summaryArgs<ExtArgs>
    user_professional_experiences?: boolean | User$user_professional_experiencesArgs<ExtArgs>
    user_academic_information?: boolean | User$user_academic_informationArgs<ExtArgs>
    user_skill?: boolean | User$user_skillArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    resumes?: boolean | User$resumesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      user_professional_summary: Prisma.$UserProfessionalSummaryPayload<ExtArgs> | null
      user_professional_experiences: Prisma.$UserProfessionalExperiencePayload<ExtArgs>[]
      user_academic_information: Prisma.$UserAcademicInformationPayload<ExtArgs>[]
      user_skill: Prisma.$UserSkillPayload<ExtArgs> | null
      applications: Prisma.$UserApplicationsPayload<ExtArgs>[]
      resumes: Prisma.$UserResumePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
      username: string | null
      displayUsername: string | null
      onboarded: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_professional_summary<T extends User$user_professional_summaryArgs<ExtArgs> = {}>(args?: Subset<T, User$user_professional_summaryArgs<ExtArgs>>): Prisma__UserProfessionalSummaryClient<$Result.GetResult<Prisma.$UserProfessionalSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_professional_experiences<T extends User$user_professional_experiencesArgs<ExtArgs> = {}>(args?: Subset<T, User$user_professional_experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfessionalExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_academic_information<T extends User$user_academic_informationArgs<ExtArgs> = {}>(args?: Subset<T, User$user_academic_informationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAcademicInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_skill<T extends User$user_skillArgs<ExtArgs> = {}>(args?: Subset<T, User$user_skillArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resumes<T extends User$resumesArgs<ExtArgs> = {}>(args?: Subset<T, User$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly username: FieldRef<"User", 'String'>
    readonly displayUsername: FieldRef<"User", 'String'>
    readonly onboarded: FieldRef<"User", 'Boolean'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.user_professional_summary
   */
  export type User$user_professional_summaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalSummary
     */
    select?: UserProfessionalSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalSummary
     */
    omit?: UserProfessionalSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalSummaryInclude<ExtArgs> | null
    where?: UserProfessionalSummaryWhereInput
  }

  /**
   * User.user_professional_experiences
   */
  export type User$user_professional_experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalExperience
     */
    select?: UserProfessionalExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalExperience
     */
    omit?: UserProfessionalExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalExperienceInclude<ExtArgs> | null
    where?: UserProfessionalExperienceWhereInput
    orderBy?: UserProfessionalExperienceOrderByWithRelationInput | UserProfessionalExperienceOrderByWithRelationInput[]
    cursor?: UserProfessionalExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProfessionalExperienceScalarFieldEnum | UserProfessionalExperienceScalarFieldEnum[]
  }

  /**
   * User.user_academic_information
   */
  export type User$user_academic_informationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAcademicInformation
     */
    select?: UserAcademicInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAcademicInformation
     */
    omit?: UserAcademicInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAcademicInformationInclude<ExtArgs> | null
    where?: UserAcademicInformationWhereInput
    orderBy?: UserAcademicInformationOrderByWithRelationInput | UserAcademicInformationOrderByWithRelationInput[]
    cursor?: UserAcademicInformationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAcademicInformationScalarFieldEnum | UserAcademicInformationScalarFieldEnum[]
  }

  /**
   * User.user_skill
   */
  export type User$user_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    where?: UserSkillWhereInput
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplications
     */
    select?: UserApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApplications
     */
    omit?: UserApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApplicationsInclude<ExtArgs> | null
    where?: UserApplicationsWhereInput
    orderBy?: UserApplicationsOrderByWithRelationInput | UserApplicationsOrderByWithRelationInput[]
    cursor?: UserApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserApplicationsScalarFieldEnum | UserApplicationsScalarFieldEnum[]
  }

  /**
   * User.resumes
   */
  export type User$resumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeInclude<ExtArgs> | null
    where?: UserResumeWhereInput
    orderBy?: UserResumeOrderByWithRelationInput | UserResumeOrderByWithRelationInput[]
    cursor?: UserResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserResumeScalarFieldEnum | UserResumeScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model UserProfessionalExperience
   */

  export type AggregateUserProfessionalExperience = {
    _count: UserProfessionalExperienceCountAggregateOutputType | null
    _avg: UserProfessionalExperienceAvgAggregateOutputType | null
    _sum: UserProfessionalExperienceSumAggregateOutputType | null
    _min: UserProfessionalExperienceMinAggregateOutputType | null
    _max: UserProfessionalExperienceMaxAggregateOutputType | null
  }

  export type UserProfessionalExperienceAvgAggregateOutputType = {
    version: number | null
  }

  export type UserProfessionalExperienceSumAggregateOutputType = {
    version: number | null
  }

  export type UserProfessionalExperienceMinAggregateOutputType = {
    id: string | null
    institution: string | null
    role: string | null
    start_date: Date | null
    end_date: Date | null
    summary: string | null
    version: number | null
    userId: string | null
    at_university: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfessionalExperienceMaxAggregateOutputType = {
    id: string | null
    institution: string | null
    role: string | null
    start_date: Date | null
    end_date: Date | null
    summary: string | null
    version: number | null
    userId: string | null
    at_university: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfessionalExperienceCountAggregateOutputType = {
    id: number
    institution: number
    role: number
    start_date: number
    end_date: number
    summary: number
    version: number
    userId: number
    at_university: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfessionalExperienceAvgAggregateInputType = {
    version?: true
  }

  export type UserProfessionalExperienceSumAggregateInputType = {
    version?: true
  }

  export type UserProfessionalExperienceMinAggregateInputType = {
    id?: true
    institution?: true
    role?: true
    start_date?: true
    end_date?: true
    summary?: true
    version?: true
    userId?: true
    at_university?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfessionalExperienceMaxAggregateInputType = {
    id?: true
    institution?: true
    role?: true
    start_date?: true
    end_date?: true
    summary?: true
    version?: true
    userId?: true
    at_university?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfessionalExperienceCountAggregateInputType = {
    id?: true
    institution?: true
    role?: true
    start_date?: true
    end_date?: true
    summary?: true
    version?: true
    userId?: true
    at_university?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfessionalExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfessionalExperience to aggregate.
     */
    where?: UserProfessionalExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfessionalExperiences to fetch.
     */
    orderBy?: UserProfessionalExperienceOrderByWithRelationInput | UserProfessionalExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfessionalExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfessionalExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfessionalExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfessionalExperiences
    **/
    _count?: true | UserProfessionalExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfessionalExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfessionalExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfessionalExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfessionalExperienceMaxAggregateInputType
  }

  export type GetUserProfessionalExperienceAggregateType<T extends UserProfessionalExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfessionalExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfessionalExperience[P]>
      : GetScalarType<T[P], AggregateUserProfessionalExperience[P]>
  }




  export type UserProfessionalExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfessionalExperienceWhereInput
    orderBy?: UserProfessionalExperienceOrderByWithAggregationInput | UserProfessionalExperienceOrderByWithAggregationInput[]
    by: UserProfessionalExperienceScalarFieldEnum[] | UserProfessionalExperienceScalarFieldEnum
    having?: UserProfessionalExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfessionalExperienceCountAggregateInputType | true
    _avg?: UserProfessionalExperienceAvgAggregateInputType
    _sum?: UserProfessionalExperienceSumAggregateInputType
    _min?: UserProfessionalExperienceMinAggregateInputType
    _max?: UserProfessionalExperienceMaxAggregateInputType
  }

  export type UserProfessionalExperienceGroupByOutputType = {
    id: string
    institution: string
    role: string
    start_date: Date | null
    end_date: Date | null
    summary: string | null
    version: number
    userId: string
    at_university: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserProfessionalExperienceCountAggregateOutputType | null
    _avg: UserProfessionalExperienceAvgAggregateOutputType | null
    _sum: UserProfessionalExperienceSumAggregateOutputType | null
    _min: UserProfessionalExperienceMinAggregateOutputType | null
    _max: UserProfessionalExperienceMaxAggregateOutputType | null
  }

  type GetUserProfessionalExperienceGroupByPayload<T extends UserProfessionalExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfessionalExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfessionalExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfessionalExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfessionalExperienceGroupByOutputType[P]>
        }
      >
    >


  export type UserProfessionalExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    role?: boolean
    start_date?: boolean
    end_date?: boolean
    summary?: boolean
    version?: boolean
    userId?: boolean
    at_university?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfessionalExperience"]>

  export type UserProfessionalExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    role?: boolean
    start_date?: boolean
    end_date?: boolean
    summary?: boolean
    version?: boolean
    userId?: boolean
    at_university?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfessionalExperience"]>

  export type UserProfessionalExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    role?: boolean
    start_date?: boolean
    end_date?: boolean
    summary?: boolean
    version?: boolean
    userId?: boolean
    at_university?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfessionalExperience"]>

  export type UserProfessionalExperienceSelectScalar = {
    id?: boolean
    institution?: boolean
    role?: boolean
    start_date?: boolean
    end_date?: boolean
    summary?: boolean
    version?: boolean
    userId?: boolean
    at_university?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfessionalExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institution" | "role" | "start_date" | "end_date" | "summary" | "version" | "userId" | "at_university" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfessionalExperience"]>
  export type UserProfessionalExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfessionalExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfessionalExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfessionalExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfessionalExperience"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      institution: string
      role: string
      start_date: Date | null
      end_date: Date | null
      summary: string | null
      version: number
      userId: string
      at_university: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfessionalExperience"]>
    composites: {}
  }

  type UserProfessionalExperienceGetPayload<S extends boolean | null | undefined | UserProfessionalExperienceDefaultArgs> = $Result.GetResult<Prisma.$UserProfessionalExperiencePayload, S>

  type UserProfessionalExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfessionalExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfessionalExperienceCountAggregateInputType | true
    }

  export interface UserProfessionalExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfessionalExperience'], meta: { name: 'UserProfessionalExperience' } }
    /**
     * Find zero or one UserProfessionalExperience that matches the filter.
     * @param {UserProfessionalExperienceFindUniqueArgs} args - Arguments to find a UserProfessionalExperience
     * @example
     * // Get one UserProfessionalExperience
     * const userProfessionalExperience = await prisma.userProfessionalExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfessionalExperienceFindUniqueArgs>(args: SelectSubset<T, UserProfessionalExperienceFindUniqueArgs<ExtArgs>>): Prisma__UserProfessionalExperienceClient<$Result.GetResult<Prisma.$UserProfessionalExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfessionalExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfessionalExperienceFindUniqueOrThrowArgs} args - Arguments to find a UserProfessionalExperience
     * @example
     * // Get one UserProfessionalExperience
     * const userProfessionalExperience = await prisma.userProfessionalExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfessionalExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfessionalExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfessionalExperienceClient<$Result.GetResult<Prisma.$UserProfessionalExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfessionalExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalExperienceFindFirstArgs} args - Arguments to find a UserProfessionalExperience
     * @example
     * // Get one UserProfessionalExperience
     * const userProfessionalExperience = await prisma.userProfessionalExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfessionalExperienceFindFirstArgs>(args?: SelectSubset<T, UserProfessionalExperienceFindFirstArgs<ExtArgs>>): Prisma__UserProfessionalExperienceClient<$Result.GetResult<Prisma.$UserProfessionalExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfessionalExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalExperienceFindFirstOrThrowArgs} args - Arguments to find a UserProfessionalExperience
     * @example
     * // Get one UserProfessionalExperience
     * const userProfessionalExperience = await prisma.userProfessionalExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfessionalExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfessionalExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfessionalExperienceClient<$Result.GetResult<Prisma.$UserProfessionalExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfessionalExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfessionalExperiences
     * const userProfessionalExperiences = await prisma.userProfessionalExperience.findMany()
     * 
     * // Get first 10 UserProfessionalExperiences
     * const userProfessionalExperiences = await prisma.userProfessionalExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfessionalExperienceWithIdOnly = await prisma.userProfessionalExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfessionalExperienceFindManyArgs>(args?: SelectSubset<T, UserProfessionalExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfessionalExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfessionalExperience.
     * @param {UserProfessionalExperienceCreateArgs} args - Arguments to create a UserProfessionalExperience.
     * @example
     * // Create one UserProfessionalExperience
     * const UserProfessionalExperience = await prisma.userProfessionalExperience.create({
     *   data: {
     *     // ... data to create a UserProfessionalExperience
     *   }
     * })
     * 
     */
    create<T extends UserProfessionalExperienceCreateArgs>(args: SelectSubset<T, UserProfessionalExperienceCreateArgs<ExtArgs>>): Prisma__UserProfessionalExperienceClient<$Result.GetResult<Prisma.$UserProfessionalExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfessionalExperiences.
     * @param {UserProfessionalExperienceCreateManyArgs} args - Arguments to create many UserProfessionalExperiences.
     * @example
     * // Create many UserProfessionalExperiences
     * const userProfessionalExperience = await prisma.userProfessionalExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfessionalExperienceCreateManyArgs>(args?: SelectSubset<T, UserProfessionalExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfessionalExperiences and returns the data saved in the database.
     * @param {UserProfessionalExperienceCreateManyAndReturnArgs} args - Arguments to create many UserProfessionalExperiences.
     * @example
     * // Create many UserProfessionalExperiences
     * const userProfessionalExperience = await prisma.userProfessionalExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfessionalExperiences and only return the `id`
     * const userProfessionalExperienceWithIdOnly = await prisma.userProfessionalExperience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfessionalExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfessionalExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfessionalExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfessionalExperience.
     * @param {UserProfessionalExperienceDeleteArgs} args - Arguments to delete one UserProfessionalExperience.
     * @example
     * // Delete one UserProfessionalExperience
     * const UserProfessionalExperience = await prisma.userProfessionalExperience.delete({
     *   where: {
     *     // ... filter to delete one UserProfessionalExperience
     *   }
     * })
     * 
     */
    delete<T extends UserProfessionalExperienceDeleteArgs>(args: SelectSubset<T, UserProfessionalExperienceDeleteArgs<ExtArgs>>): Prisma__UserProfessionalExperienceClient<$Result.GetResult<Prisma.$UserProfessionalExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfessionalExperience.
     * @param {UserProfessionalExperienceUpdateArgs} args - Arguments to update one UserProfessionalExperience.
     * @example
     * // Update one UserProfessionalExperience
     * const userProfessionalExperience = await prisma.userProfessionalExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfessionalExperienceUpdateArgs>(args: SelectSubset<T, UserProfessionalExperienceUpdateArgs<ExtArgs>>): Prisma__UserProfessionalExperienceClient<$Result.GetResult<Prisma.$UserProfessionalExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfessionalExperiences.
     * @param {UserProfessionalExperienceDeleteManyArgs} args - Arguments to filter UserProfessionalExperiences to delete.
     * @example
     * // Delete a few UserProfessionalExperiences
     * const { count } = await prisma.userProfessionalExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfessionalExperienceDeleteManyArgs>(args?: SelectSubset<T, UserProfessionalExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfessionalExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfessionalExperiences
     * const userProfessionalExperience = await prisma.userProfessionalExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfessionalExperienceUpdateManyArgs>(args: SelectSubset<T, UserProfessionalExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfessionalExperiences and returns the data updated in the database.
     * @param {UserProfessionalExperienceUpdateManyAndReturnArgs} args - Arguments to update many UserProfessionalExperiences.
     * @example
     * // Update many UserProfessionalExperiences
     * const userProfessionalExperience = await prisma.userProfessionalExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfessionalExperiences and only return the `id`
     * const userProfessionalExperienceWithIdOnly = await prisma.userProfessionalExperience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfessionalExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfessionalExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfessionalExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfessionalExperience.
     * @param {UserProfessionalExperienceUpsertArgs} args - Arguments to update or create a UserProfessionalExperience.
     * @example
     * // Update or create a UserProfessionalExperience
     * const userProfessionalExperience = await prisma.userProfessionalExperience.upsert({
     *   create: {
     *     // ... data to create a UserProfessionalExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfessionalExperience we want to update
     *   }
     * })
     */
    upsert<T extends UserProfessionalExperienceUpsertArgs>(args: SelectSubset<T, UserProfessionalExperienceUpsertArgs<ExtArgs>>): Prisma__UserProfessionalExperienceClient<$Result.GetResult<Prisma.$UserProfessionalExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfessionalExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalExperienceCountArgs} args - Arguments to filter UserProfessionalExperiences to count.
     * @example
     * // Count the number of UserProfessionalExperiences
     * const count = await prisma.userProfessionalExperience.count({
     *   where: {
     *     // ... the filter for the UserProfessionalExperiences we want to count
     *   }
     * })
    **/
    count<T extends UserProfessionalExperienceCountArgs>(
      args?: Subset<T, UserProfessionalExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfessionalExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfessionalExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfessionalExperienceAggregateArgs>(args: Subset<T, UserProfessionalExperienceAggregateArgs>): Prisma.PrismaPromise<GetUserProfessionalExperienceAggregateType<T>>

    /**
     * Group by UserProfessionalExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalExperienceGroupByArgs} args - Group by arguments.
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
      T extends UserProfessionalExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfessionalExperienceGroupByArgs['orderBy'] }
        : { orderBy?: UserProfessionalExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfessionalExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfessionalExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfessionalExperience model
   */
  readonly fields: UserProfessionalExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfessionalExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfessionalExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfessionalExperience model
   */
  interface UserProfessionalExperienceFieldRefs {
    readonly id: FieldRef<"UserProfessionalExperience", 'String'>
    readonly institution: FieldRef<"UserProfessionalExperience", 'String'>
    readonly role: FieldRef<"UserProfessionalExperience", 'String'>
    readonly start_date: FieldRef<"UserProfessionalExperience", 'DateTime'>
    readonly end_date: FieldRef<"UserProfessionalExperience", 'DateTime'>
    readonly summary: FieldRef<"UserProfessionalExperience", 'String'>
    readonly version: FieldRef<"UserProfessionalExperience", 'Int'>
    readonly userId: FieldRef<"UserProfessionalExperience", 'String'>
    readonly at_university: FieldRef<"UserProfessionalExperience", 'Boolean'>
    readonly createdAt: FieldRef<"UserProfessionalExperience", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfessionalExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfessionalExperience findUnique
   */
  export type UserProfessionalExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalExperience
     */
    select?: UserProfessionalExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalExperience
     */
    omit?: UserProfessionalExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserProfessionalExperience to fetch.
     */
    where: UserProfessionalExperienceWhereUniqueInput
  }

  /**
   * UserProfessionalExperience findUniqueOrThrow
   */
  export type UserProfessionalExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalExperience
     */
    select?: UserProfessionalExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalExperience
     */
    omit?: UserProfessionalExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserProfessionalExperience to fetch.
     */
    where: UserProfessionalExperienceWhereUniqueInput
  }

  /**
   * UserProfessionalExperience findFirst
   */
  export type UserProfessionalExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalExperience
     */
    select?: UserProfessionalExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalExperience
     */
    omit?: UserProfessionalExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserProfessionalExperience to fetch.
     */
    where?: UserProfessionalExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfessionalExperiences to fetch.
     */
    orderBy?: UserProfessionalExperienceOrderByWithRelationInput | UserProfessionalExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfessionalExperiences.
     */
    cursor?: UserProfessionalExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfessionalExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfessionalExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfessionalExperiences.
     */
    distinct?: UserProfessionalExperienceScalarFieldEnum | UserProfessionalExperienceScalarFieldEnum[]
  }

  /**
   * UserProfessionalExperience findFirstOrThrow
   */
  export type UserProfessionalExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalExperience
     */
    select?: UserProfessionalExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalExperience
     */
    omit?: UserProfessionalExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserProfessionalExperience to fetch.
     */
    where?: UserProfessionalExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfessionalExperiences to fetch.
     */
    orderBy?: UserProfessionalExperienceOrderByWithRelationInput | UserProfessionalExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfessionalExperiences.
     */
    cursor?: UserProfessionalExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfessionalExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfessionalExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfessionalExperiences.
     */
    distinct?: UserProfessionalExperienceScalarFieldEnum | UserProfessionalExperienceScalarFieldEnum[]
  }

  /**
   * UserProfessionalExperience findMany
   */
  export type UserProfessionalExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalExperience
     */
    select?: UserProfessionalExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalExperience
     */
    omit?: UserProfessionalExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserProfessionalExperiences to fetch.
     */
    where?: UserProfessionalExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfessionalExperiences to fetch.
     */
    orderBy?: UserProfessionalExperienceOrderByWithRelationInput | UserProfessionalExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfessionalExperiences.
     */
    cursor?: UserProfessionalExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfessionalExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfessionalExperiences.
     */
    skip?: number
    distinct?: UserProfessionalExperienceScalarFieldEnum | UserProfessionalExperienceScalarFieldEnum[]
  }

  /**
   * UserProfessionalExperience create
   */
  export type UserProfessionalExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalExperience
     */
    select?: UserProfessionalExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalExperience
     */
    omit?: UserProfessionalExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfessionalExperience.
     */
    data: XOR<UserProfessionalExperienceCreateInput, UserProfessionalExperienceUncheckedCreateInput>
  }

  /**
   * UserProfessionalExperience createMany
   */
  export type UserProfessionalExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfessionalExperiences.
     */
    data: UserProfessionalExperienceCreateManyInput | UserProfessionalExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfessionalExperience createManyAndReturn
   */
  export type UserProfessionalExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalExperience
     */
    select?: UserProfessionalExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalExperience
     */
    omit?: UserProfessionalExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfessionalExperiences.
     */
    data: UserProfessionalExperienceCreateManyInput | UserProfessionalExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfessionalExperience update
   */
  export type UserProfessionalExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalExperience
     */
    select?: UserProfessionalExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalExperience
     */
    omit?: UserProfessionalExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfessionalExperience.
     */
    data: XOR<UserProfessionalExperienceUpdateInput, UserProfessionalExperienceUncheckedUpdateInput>
    /**
     * Choose, which UserProfessionalExperience to update.
     */
    where: UserProfessionalExperienceWhereUniqueInput
  }

  /**
   * UserProfessionalExperience updateMany
   */
  export type UserProfessionalExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfessionalExperiences.
     */
    data: XOR<UserProfessionalExperienceUpdateManyMutationInput, UserProfessionalExperienceUncheckedUpdateManyInput>
    /**
     * Filter which UserProfessionalExperiences to update
     */
    where?: UserProfessionalExperienceWhereInput
    /**
     * Limit how many UserProfessionalExperiences to update.
     */
    limit?: number
  }

  /**
   * UserProfessionalExperience updateManyAndReturn
   */
  export type UserProfessionalExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalExperience
     */
    select?: UserProfessionalExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalExperience
     */
    omit?: UserProfessionalExperienceOmit<ExtArgs> | null
    /**
     * The data used to update UserProfessionalExperiences.
     */
    data: XOR<UserProfessionalExperienceUpdateManyMutationInput, UserProfessionalExperienceUncheckedUpdateManyInput>
    /**
     * Filter which UserProfessionalExperiences to update
     */
    where?: UserProfessionalExperienceWhereInput
    /**
     * Limit how many UserProfessionalExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfessionalExperience upsert
   */
  export type UserProfessionalExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalExperience
     */
    select?: UserProfessionalExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalExperience
     */
    omit?: UserProfessionalExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfessionalExperience to update in case it exists.
     */
    where: UserProfessionalExperienceWhereUniqueInput
    /**
     * In case the UserProfessionalExperience found by the `where` argument doesn't exist, create a new UserProfessionalExperience with this data.
     */
    create: XOR<UserProfessionalExperienceCreateInput, UserProfessionalExperienceUncheckedCreateInput>
    /**
     * In case the UserProfessionalExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfessionalExperienceUpdateInput, UserProfessionalExperienceUncheckedUpdateInput>
  }

  /**
   * UserProfessionalExperience delete
   */
  export type UserProfessionalExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalExperience
     */
    select?: UserProfessionalExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalExperience
     */
    omit?: UserProfessionalExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalExperienceInclude<ExtArgs> | null
    /**
     * Filter which UserProfessionalExperience to delete.
     */
    where: UserProfessionalExperienceWhereUniqueInput
  }

  /**
   * UserProfessionalExperience deleteMany
   */
  export type UserProfessionalExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfessionalExperiences to delete
     */
    where?: UserProfessionalExperienceWhereInput
    /**
     * Limit how many UserProfessionalExperiences to delete.
     */
    limit?: number
  }

  /**
   * UserProfessionalExperience without action
   */
  export type UserProfessionalExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalExperience
     */
    select?: UserProfessionalExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalExperience
     */
    omit?: UserProfessionalExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalExperienceInclude<ExtArgs> | null
  }


  /**
   * Model UserProfessionalSummary
   */

  export type AggregateUserProfessionalSummary = {
    _count: UserProfessionalSummaryCountAggregateOutputType | null
    _avg: UserProfessionalSummaryAvgAggregateOutputType | null
    _sum: UserProfessionalSummarySumAggregateOutputType | null
    _min: UserProfessionalSummaryMinAggregateOutputType | null
    _max: UserProfessionalSummaryMaxAggregateOutputType | null
  }

  export type UserProfessionalSummaryAvgAggregateOutputType = {
    experience_years: number | null
    version: number | null
  }

  export type UserProfessionalSummarySumAggregateOutputType = {
    experience_years: number | null
    version: number | null
  }

  export type UserProfessionalSummaryMinAggregateOutputType = {
    id: string | null
    experience_years: number | null
    summary: string | null
    version: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfessionalSummaryMaxAggregateOutputType = {
    id: string | null
    experience_years: number | null
    summary: string | null
    version: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfessionalSummaryCountAggregateOutputType = {
    id: number
    experience_years: number
    summary: number
    version: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfessionalSummaryAvgAggregateInputType = {
    experience_years?: true
    version?: true
  }

  export type UserProfessionalSummarySumAggregateInputType = {
    experience_years?: true
    version?: true
  }

  export type UserProfessionalSummaryMinAggregateInputType = {
    id?: true
    experience_years?: true
    summary?: true
    version?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfessionalSummaryMaxAggregateInputType = {
    id?: true
    experience_years?: true
    summary?: true
    version?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfessionalSummaryCountAggregateInputType = {
    id?: true
    experience_years?: true
    summary?: true
    version?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfessionalSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfessionalSummary to aggregate.
     */
    where?: UserProfessionalSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfessionalSummaries to fetch.
     */
    orderBy?: UserProfessionalSummaryOrderByWithRelationInput | UserProfessionalSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfessionalSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfessionalSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfessionalSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfessionalSummaries
    **/
    _count?: true | UserProfessionalSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfessionalSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfessionalSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfessionalSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfessionalSummaryMaxAggregateInputType
  }

  export type GetUserProfessionalSummaryAggregateType<T extends UserProfessionalSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfessionalSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfessionalSummary[P]>
      : GetScalarType<T[P], AggregateUserProfessionalSummary[P]>
  }




  export type UserProfessionalSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfessionalSummaryWhereInput
    orderBy?: UserProfessionalSummaryOrderByWithAggregationInput | UserProfessionalSummaryOrderByWithAggregationInput[]
    by: UserProfessionalSummaryScalarFieldEnum[] | UserProfessionalSummaryScalarFieldEnum
    having?: UserProfessionalSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfessionalSummaryCountAggregateInputType | true
    _avg?: UserProfessionalSummaryAvgAggregateInputType
    _sum?: UserProfessionalSummarySumAggregateInputType
    _min?: UserProfessionalSummaryMinAggregateInputType
    _max?: UserProfessionalSummaryMaxAggregateInputType
  }

  export type UserProfessionalSummaryGroupByOutputType = {
    id: string
    experience_years: number
    summary: string | null
    version: number
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserProfessionalSummaryCountAggregateOutputType | null
    _avg: UserProfessionalSummaryAvgAggregateOutputType | null
    _sum: UserProfessionalSummarySumAggregateOutputType | null
    _min: UserProfessionalSummaryMinAggregateOutputType | null
    _max: UserProfessionalSummaryMaxAggregateOutputType | null
  }

  type GetUserProfessionalSummaryGroupByPayload<T extends UserProfessionalSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfessionalSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfessionalSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfessionalSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfessionalSummaryGroupByOutputType[P]>
        }
      >
    >


  export type UserProfessionalSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    experience_years?: boolean
    summary?: boolean
    version?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfessionalSummary"]>

  export type UserProfessionalSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    experience_years?: boolean
    summary?: boolean
    version?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfessionalSummary"]>

  export type UserProfessionalSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    experience_years?: boolean
    summary?: boolean
    version?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfessionalSummary"]>

  export type UserProfessionalSummarySelectScalar = {
    id?: boolean
    experience_years?: boolean
    summary?: boolean
    version?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfessionalSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "experience_years" | "summary" | "version" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfessionalSummary"]>
  export type UserProfessionalSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfessionalSummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfessionalSummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfessionalSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfessionalSummary"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      experience_years: number
      summary: string | null
      version: number
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfessionalSummary"]>
    composites: {}
  }

  type UserProfessionalSummaryGetPayload<S extends boolean | null | undefined | UserProfessionalSummaryDefaultArgs> = $Result.GetResult<Prisma.$UserProfessionalSummaryPayload, S>

  type UserProfessionalSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfessionalSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfessionalSummaryCountAggregateInputType | true
    }

  export interface UserProfessionalSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfessionalSummary'], meta: { name: 'UserProfessionalSummary' } }
    /**
     * Find zero or one UserProfessionalSummary that matches the filter.
     * @param {UserProfessionalSummaryFindUniqueArgs} args - Arguments to find a UserProfessionalSummary
     * @example
     * // Get one UserProfessionalSummary
     * const userProfessionalSummary = await prisma.userProfessionalSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfessionalSummaryFindUniqueArgs>(args: SelectSubset<T, UserProfessionalSummaryFindUniqueArgs<ExtArgs>>): Prisma__UserProfessionalSummaryClient<$Result.GetResult<Prisma.$UserProfessionalSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfessionalSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfessionalSummaryFindUniqueOrThrowArgs} args - Arguments to find a UserProfessionalSummary
     * @example
     * // Get one UserProfessionalSummary
     * const userProfessionalSummary = await prisma.userProfessionalSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfessionalSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfessionalSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfessionalSummaryClient<$Result.GetResult<Prisma.$UserProfessionalSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfessionalSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalSummaryFindFirstArgs} args - Arguments to find a UserProfessionalSummary
     * @example
     * // Get one UserProfessionalSummary
     * const userProfessionalSummary = await prisma.userProfessionalSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfessionalSummaryFindFirstArgs>(args?: SelectSubset<T, UserProfessionalSummaryFindFirstArgs<ExtArgs>>): Prisma__UserProfessionalSummaryClient<$Result.GetResult<Prisma.$UserProfessionalSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfessionalSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalSummaryFindFirstOrThrowArgs} args - Arguments to find a UserProfessionalSummary
     * @example
     * // Get one UserProfessionalSummary
     * const userProfessionalSummary = await prisma.userProfessionalSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfessionalSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfessionalSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfessionalSummaryClient<$Result.GetResult<Prisma.$UserProfessionalSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfessionalSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfessionalSummaries
     * const userProfessionalSummaries = await prisma.userProfessionalSummary.findMany()
     * 
     * // Get first 10 UserProfessionalSummaries
     * const userProfessionalSummaries = await prisma.userProfessionalSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfessionalSummaryWithIdOnly = await prisma.userProfessionalSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfessionalSummaryFindManyArgs>(args?: SelectSubset<T, UserProfessionalSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfessionalSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfessionalSummary.
     * @param {UserProfessionalSummaryCreateArgs} args - Arguments to create a UserProfessionalSummary.
     * @example
     * // Create one UserProfessionalSummary
     * const UserProfessionalSummary = await prisma.userProfessionalSummary.create({
     *   data: {
     *     // ... data to create a UserProfessionalSummary
     *   }
     * })
     * 
     */
    create<T extends UserProfessionalSummaryCreateArgs>(args: SelectSubset<T, UserProfessionalSummaryCreateArgs<ExtArgs>>): Prisma__UserProfessionalSummaryClient<$Result.GetResult<Prisma.$UserProfessionalSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfessionalSummaries.
     * @param {UserProfessionalSummaryCreateManyArgs} args - Arguments to create many UserProfessionalSummaries.
     * @example
     * // Create many UserProfessionalSummaries
     * const userProfessionalSummary = await prisma.userProfessionalSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfessionalSummaryCreateManyArgs>(args?: SelectSubset<T, UserProfessionalSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfessionalSummaries and returns the data saved in the database.
     * @param {UserProfessionalSummaryCreateManyAndReturnArgs} args - Arguments to create many UserProfessionalSummaries.
     * @example
     * // Create many UserProfessionalSummaries
     * const userProfessionalSummary = await prisma.userProfessionalSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfessionalSummaries and only return the `id`
     * const userProfessionalSummaryWithIdOnly = await prisma.userProfessionalSummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfessionalSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfessionalSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfessionalSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfessionalSummary.
     * @param {UserProfessionalSummaryDeleteArgs} args - Arguments to delete one UserProfessionalSummary.
     * @example
     * // Delete one UserProfessionalSummary
     * const UserProfessionalSummary = await prisma.userProfessionalSummary.delete({
     *   where: {
     *     // ... filter to delete one UserProfessionalSummary
     *   }
     * })
     * 
     */
    delete<T extends UserProfessionalSummaryDeleteArgs>(args: SelectSubset<T, UserProfessionalSummaryDeleteArgs<ExtArgs>>): Prisma__UserProfessionalSummaryClient<$Result.GetResult<Prisma.$UserProfessionalSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfessionalSummary.
     * @param {UserProfessionalSummaryUpdateArgs} args - Arguments to update one UserProfessionalSummary.
     * @example
     * // Update one UserProfessionalSummary
     * const userProfessionalSummary = await prisma.userProfessionalSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfessionalSummaryUpdateArgs>(args: SelectSubset<T, UserProfessionalSummaryUpdateArgs<ExtArgs>>): Prisma__UserProfessionalSummaryClient<$Result.GetResult<Prisma.$UserProfessionalSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfessionalSummaries.
     * @param {UserProfessionalSummaryDeleteManyArgs} args - Arguments to filter UserProfessionalSummaries to delete.
     * @example
     * // Delete a few UserProfessionalSummaries
     * const { count } = await prisma.userProfessionalSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfessionalSummaryDeleteManyArgs>(args?: SelectSubset<T, UserProfessionalSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfessionalSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfessionalSummaries
     * const userProfessionalSummary = await prisma.userProfessionalSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfessionalSummaryUpdateManyArgs>(args: SelectSubset<T, UserProfessionalSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfessionalSummaries and returns the data updated in the database.
     * @param {UserProfessionalSummaryUpdateManyAndReturnArgs} args - Arguments to update many UserProfessionalSummaries.
     * @example
     * // Update many UserProfessionalSummaries
     * const userProfessionalSummary = await prisma.userProfessionalSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfessionalSummaries and only return the `id`
     * const userProfessionalSummaryWithIdOnly = await prisma.userProfessionalSummary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfessionalSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfessionalSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfessionalSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfessionalSummary.
     * @param {UserProfessionalSummaryUpsertArgs} args - Arguments to update or create a UserProfessionalSummary.
     * @example
     * // Update or create a UserProfessionalSummary
     * const userProfessionalSummary = await prisma.userProfessionalSummary.upsert({
     *   create: {
     *     // ... data to create a UserProfessionalSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfessionalSummary we want to update
     *   }
     * })
     */
    upsert<T extends UserProfessionalSummaryUpsertArgs>(args: SelectSubset<T, UserProfessionalSummaryUpsertArgs<ExtArgs>>): Prisma__UserProfessionalSummaryClient<$Result.GetResult<Prisma.$UserProfessionalSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfessionalSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalSummaryCountArgs} args - Arguments to filter UserProfessionalSummaries to count.
     * @example
     * // Count the number of UserProfessionalSummaries
     * const count = await prisma.userProfessionalSummary.count({
     *   where: {
     *     // ... the filter for the UserProfessionalSummaries we want to count
     *   }
     * })
    **/
    count<T extends UserProfessionalSummaryCountArgs>(
      args?: Subset<T, UserProfessionalSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfessionalSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfessionalSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfessionalSummaryAggregateArgs>(args: Subset<T, UserProfessionalSummaryAggregateArgs>): Prisma.PrismaPromise<GetUserProfessionalSummaryAggregateType<T>>

    /**
     * Group by UserProfessionalSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfessionalSummaryGroupByArgs} args - Group by arguments.
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
      T extends UserProfessionalSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfessionalSummaryGroupByArgs['orderBy'] }
        : { orderBy?: UserProfessionalSummaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfessionalSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfessionalSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfessionalSummary model
   */
  readonly fields: UserProfessionalSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfessionalSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfessionalSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfessionalSummary model
   */
  interface UserProfessionalSummaryFieldRefs {
    readonly id: FieldRef<"UserProfessionalSummary", 'String'>
    readonly experience_years: FieldRef<"UserProfessionalSummary", 'Int'>
    readonly summary: FieldRef<"UserProfessionalSummary", 'String'>
    readonly version: FieldRef<"UserProfessionalSummary", 'Int'>
    readonly userId: FieldRef<"UserProfessionalSummary", 'String'>
    readonly createdAt: FieldRef<"UserProfessionalSummary", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfessionalSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfessionalSummary findUnique
   */
  export type UserProfessionalSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalSummary
     */
    select?: UserProfessionalSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalSummary
     */
    omit?: UserProfessionalSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalSummaryInclude<ExtArgs> | null
    /**
     * Filter, which UserProfessionalSummary to fetch.
     */
    where: UserProfessionalSummaryWhereUniqueInput
  }

  /**
   * UserProfessionalSummary findUniqueOrThrow
   */
  export type UserProfessionalSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalSummary
     */
    select?: UserProfessionalSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalSummary
     */
    omit?: UserProfessionalSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalSummaryInclude<ExtArgs> | null
    /**
     * Filter, which UserProfessionalSummary to fetch.
     */
    where: UserProfessionalSummaryWhereUniqueInput
  }

  /**
   * UserProfessionalSummary findFirst
   */
  export type UserProfessionalSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalSummary
     */
    select?: UserProfessionalSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalSummary
     */
    omit?: UserProfessionalSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalSummaryInclude<ExtArgs> | null
    /**
     * Filter, which UserProfessionalSummary to fetch.
     */
    where?: UserProfessionalSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfessionalSummaries to fetch.
     */
    orderBy?: UserProfessionalSummaryOrderByWithRelationInput | UserProfessionalSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfessionalSummaries.
     */
    cursor?: UserProfessionalSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfessionalSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfessionalSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfessionalSummaries.
     */
    distinct?: UserProfessionalSummaryScalarFieldEnum | UserProfessionalSummaryScalarFieldEnum[]
  }

  /**
   * UserProfessionalSummary findFirstOrThrow
   */
  export type UserProfessionalSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalSummary
     */
    select?: UserProfessionalSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalSummary
     */
    omit?: UserProfessionalSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalSummaryInclude<ExtArgs> | null
    /**
     * Filter, which UserProfessionalSummary to fetch.
     */
    where?: UserProfessionalSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfessionalSummaries to fetch.
     */
    orderBy?: UserProfessionalSummaryOrderByWithRelationInput | UserProfessionalSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfessionalSummaries.
     */
    cursor?: UserProfessionalSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfessionalSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfessionalSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfessionalSummaries.
     */
    distinct?: UserProfessionalSummaryScalarFieldEnum | UserProfessionalSummaryScalarFieldEnum[]
  }

  /**
   * UserProfessionalSummary findMany
   */
  export type UserProfessionalSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalSummary
     */
    select?: UserProfessionalSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalSummary
     */
    omit?: UserProfessionalSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalSummaryInclude<ExtArgs> | null
    /**
     * Filter, which UserProfessionalSummaries to fetch.
     */
    where?: UserProfessionalSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfessionalSummaries to fetch.
     */
    orderBy?: UserProfessionalSummaryOrderByWithRelationInput | UserProfessionalSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfessionalSummaries.
     */
    cursor?: UserProfessionalSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfessionalSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfessionalSummaries.
     */
    skip?: number
    distinct?: UserProfessionalSummaryScalarFieldEnum | UserProfessionalSummaryScalarFieldEnum[]
  }

  /**
   * UserProfessionalSummary create
   */
  export type UserProfessionalSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalSummary
     */
    select?: UserProfessionalSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalSummary
     */
    omit?: UserProfessionalSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfessionalSummary.
     */
    data: XOR<UserProfessionalSummaryCreateInput, UserProfessionalSummaryUncheckedCreateInput>
  }

  /**
   * UserProfessionalSummary createMany
   */
  export type UserProfessionalSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfessionalSummaries.
     */
    data: UserProfessionalSummaryCreateManyInput | UserProfessionalSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfessionalSummary createManyAndReturn
   */
  export type UserProfessionalSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalSummary
     */
    select?: UserProfessionalSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalSummary
     */
    omit?: UserProfessionalSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfessionalSummaries.
     */
    data: UserProfessionalSummaryCreateManyInput | UserProfessionalSummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalSummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfessionalSummary update
   */
  export type UserProfessionalSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalSummary
     */
    select?: UserProfessionalSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalSummary
     */
    omit?: UserProfessionalSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfessionalSummary.
     */
    data: XOR<UserProfessionalSummaryUpdateInput, UserProfessionalSummaryUncheckedUpdateInput>
    /**
     * Choose, which UserProfessionalSummary to update.
     */
    where: UserProfessionalSummaryWhereUniqueInput
  }

  /**
   * UserProfessionalSummary updateMany
   */
  export type UserProfessionalSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfessionalSummaries.
     */
    data: XOR<UserProfessionalSummaryUpdateManyMutationInput, UserProfessionalSummaryUncheckedUpdateManyInput>
    /**
     * Filter which UserProfessionalSummaries to update
     */
    where?: UserProfessionalSummaryWhereInput
    /**
     * Limit how many UserProfessionalSummaries to update.
     */
    limit?: number
  }

  /**
   * UserProfessionalSummary updateManyAndReturn
   */
  export type UserProfessionalSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalSummary
     */
    select?: UserProfessionalSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalSummary
     */
    omit?: UserProfessionalSummaryOmit<ExtArgs> | null
    /**
     * The data used to update UserProfessionalSummaries.
     */
    data: XOR<UserProfessionalSummaryUpdateManyMutationInput, UserProfessionalSummaryUncheckedUpdateManyInput>
    /**
     * Filter which UserProfessionalSummaries to update
     */
    where?: UserProfessionalSummaryWhereInput
    /**
     * Limit how many UserProfessionalSummaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalSummaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfessionalSummary upsert
   */
  export type UserProfessionalSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalSummary
     */
    select?: UserProfessionalSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalSummary
     */
    omit?: UserProfessionalSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfessionalSummary to update in case it exists.
     */
    where: UserProfessionalSummaryWhereUniqueInput
    /**
     * In case the UserProfessionalSummary found by the `where` argument doesn't exist, create a new UserProfessionalSummary with this data.
     */
    create: XOR<UserProfessionalSummaryCreateInput, UserProfessionalSummaryUncheckedCreateInput>
    /**
     * In case the UserProfessionalSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfessionalSummaryUpdateInput, UserProfessionalSummaryUncheckedUpdateInput>
  }

  /**
   * UserProfessionalSummary delete
   */
  export type UserProfessionalSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalSummary
     */
    select?: UserProfessionalSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalSummary
     */
    omit?: UserProfessionalSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalSummaryInclude<ExtArgs> | null
    /**
     * Filter which UserProfessionalSummary to delete.
     */
    where: UserProfessionalSummaryWhereUniqueInput
  }

  /**
   * UserProfessionalSummary deleteMany
   */
  export type UserProfessionalSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfessionalSummaries to delete
     */
    where?: UserProfessionalSummaryWhereInput
    /**
     * Limit how many UserProfessionalSummaries to delete.
     */
    limit?: number
  }

  /**
   * UserProfessionalSummary without action
   */
  export type UserProfessionalSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfessionalSummary
     */
    select?: UserProfessionalSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfessionalSummary
     */
    omit?: UserProfessionalSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfessionalSummaryInclude<ExtArgs> | null
  }


  /**
   * Model UserAcademicInformation
   */

  export type AggregateUserAcademicInformation = {
    _count: UserAcademicInformationCountAggregateOutputType | null
    _min: UserAcademicInformationMinAggregateOutputType | null
    _max: UserAcademicInformationMaxAggregateOutputType | null
  }

  export type UserAcademicInformationMinAggregateOutputType = {
    id: string | null
    institution: string | null
    major: string | null
    start_date: Date | null
    end_date: Date | null
    summary: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAcademicInformationMaxAggregateOutputType = {
    id: string | null
    institution: string | null
    major: string | null
    start_date: Date | null
    end_date: Date | null
    summary: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAcademicInformationCountAggregateOutputType = {
    id: number
    institution: number
    major: number
    start_date: number
    end_date: number
    summary: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAcademicInformationMinAggregateInputType = {
    id?: true
    institution?: true
    major?: true
    start_date?: true
    end_date?: true
    summary?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAcademicInformationMaxAggregateInputType = {
    id?: true
    institution?: true
    major?: true
    start_date?: true
    end_date?: true
    summary?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAcademicInformationCountAggregateInputType = {
    id?: true
    institution?: true
    major?: true
    start_date?: true
    end_date?: true
    summary?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAcademicInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAcademicInformation to aggregate.
     */
    where?: UserAcademicInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAcademicInformations to fetch.
     */
    orderBy?: UserAcademicInformationOrderByWithRelationInput | UserAcademicInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAcademicInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAcademicInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAcademicInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAcademicInformations
    **/
    _count?: true | UserAcademicInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAcademicInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAcademicInformationMaxAggregateInputType
  }

  export type GetUserAcademicInformationAggregateType<T extends UserAcademicInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAcademicInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAcademicInformation[P]>
      : GetScalarType<T[P], AggregateUserAcademicInformation[P]>
  }




  export type UserAcademicInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAcademicInformationWhereInput
    orderBy?: UserAcademicInformationOrderByWithAggregationInput | UserAcademicInformationOrderByWithAggregationInput[]
    by: UserAcademicInformationScalarFieldEnum[] | UserAcademicInformationScalarFieldEnum
    having?: UserAcademicInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAcademicInformationCountAggregateInputType | true
    _min?: UserAcademicInformationMinAggregateInputType
    _max?: UserAcademicInformationMaxAggregateInputType
  }

  export type UserAcademicInformationGroupByOutputType = {
    id: string
    institution: string
    major: string
    start_date: Date
    end_date: Date | null
    summary: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserAcademicInformationCountAggregateOutputType | null
    _min: UserAcademicInformationMinAggregateOutputType | null
    _max: UserAcademicInformationMaxAggregateOutputType | null
  }

  type GetUserAcademicInformationGroupByPayload<T extends UserAcademicInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAcademicInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAcademicInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAcademicInformationGroupByOutputType[P]>
            : GetScalarType<T[P], UserAcademicInformationGroupByOutputType[P]>
        }
      >
    >


  export type UserAcademicInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    major?: boolean
    start_date?: boolean
    end_date?: boolean
    summary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAcademicInformation"]>

  export type UserAcademicInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    major?: boolean
    start_date?: boolean
    end_date?: boolean
    summary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAcademicInformation"]>

  export type UserAcademicInformationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    major?: boolean
    start_date?: boolean
    end_date?: boolean
    summary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAcademicInformation"]>

  export type UserAcademicInformationSelectScalar = {
    id?: boolean
    institution?: boolean
    major?: boolean
    start_date?: boolean
    end_date?: boolean
    summary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserAcademicInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institution" | "major" | "start_date" | "end_date" | "summary" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["userAcademicInformation"]>
  export type UserAcademicInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAcademicInformationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAcademicInformationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAcademicInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAcademicInformation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      institution: string
      major: string
      start_date: Date
      end_date: Date | null
      summary: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userAcademicInformation"]>
    composites: {}
  }

  type UserAcademicInformationGetPayload<S extends boolean | null | undefined | UserAcademicInformationDefaultArgs> = $Result.GetResult<Prisma.$UserAcademicInformationPayload, S>

  type UserAcademicInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAcademicInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAcademicInformationCountAggregateInputType | true
    }

  export interface UserAcademicInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAcademicInformation'], meta: { name: 'UserAcademicInformation' } }
    /**
     * Find zero or one UserAcademicInformation that matches the filter.
     * @param {UserAcademicInformationFindUniqueArgs} args - Arguments to find a UserAcademicInformation
     * @example
     * // Get one UserAcademicInformation
     * const userAcademicInformation = await prisma.userAcademicInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAcademicInformationFindUniqueArgs>(args: SelectSubset<T, UserAcademicInformationFindUniqueArgs<ExtArgs>>): Prisma__UserAcademicInformationClient<$Result.GetResult<Prisma.$UserAcademicInformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAcademicInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAcademicInformationFindUniqueOrThrowArgs} args - Arguments to find a UserAcademicInformation
     * @example
     * // Get one UserAcademicInformation
     * const userAcademicInformation = await prisma.userAcademicInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAcademicInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAcademicInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAcademicInformationClient<$Result.GetResult<Prisma.$UserAcademicInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAcademicInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAcademicInformationFindFirstArgs} args - Arguments to find a UserAcademicInformation
     * @example
     * // Get one UserAcademicInformation
     * const userAcademicInformation = await prisma.userAcademicInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAcademicInformationFindFirstArgs>(args?: SelectSubset<T, UserAcademicInformationFindFirstArgs<ExtArgs>>): Prisma__UserAcademicInformationClient<$Result.GetResult<Prisma.$UserAcademicInformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAcademicInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAcademicInformationFindFirstOrThrowArgs} args - Arguments to find a UserAcademicInformation
     * @example
     * // Get one UserAcademicInformation
     * const userAcademicInformation = await prisma.userAcademicInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAcademicInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAcademicInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAcademicInformationClient<$Result.GetResult<Prisma.$UserAcademicInformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAcademicInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAcademicInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAcademicInformations
     * const userAcademicInformations = await prisma.userAcademicInformation.findMany()
     * 
     * // Get first 10 UserAcademicInformations
     * const userAcademicInformations = await prisma.userAcademicInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAcademicInformationWithIdOnly = await prisma.userAcademicInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAcademicInformationFindManyArgs>(args?: SelectSubset<T, UserAcademicInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAcademicInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAcademicInformation.
     * @param {UserAcademicInformationCreateArgs} args - Arguments to create a UserAcademicInformation.
     * @example
     * // Create one UserAcademicInformation
     * const UserAcademicInformation = await prisma.userAcademicInformation.create({
     *   data: {
     *     // ... data to create a UserAcademicInformation
     *   }
     * })
     * 
     */
    create<T extends UserAcademicInformationCreateArgs>(args: SelectSubset<T, UserAcademicInformationCreateArgs<ExtArgs>>): Prisma__UserAcademicInformationClient<$Result.GetResult<Prisma.$UserAcademicInformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAcademicInformations.
     * @param {UserAcademicInformationCreateManyArgs} args - Arguments to create many UserAcademicInformations.
     * @example
     * // Create many UserAcademicInformations
     * const userAcademicInformation = await prisma.userAcademicInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAcademicInformationCreateManyArgs>(args?: SelectSubset<T, UserAcademicInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAcademicInformations and returns the data saved in the database.
     * @param {UserAcademicInformationCreateManyAndReturnArgs} args - Arguments to create many UserAcademicInformations.
     * @example
     * // Create many UserAcademicInformations
     * const userAcademicInformation = await prisma.userAcademicInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAcademicInformations and only return the `id`
     * const userAcademicInformationWithIdOnly = await prisma.userAcademicInformation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAcademicInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAcademicInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAcademicInformationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAcademicInformation.
     * @param {UserAcademicInformationDeleteArgs} args - Arguments to delete one UserAcademicInformation.
     * @example
     * // Delete one UserAcademicInformation
     * const UserAcademicInformation = await prisma.userAcademicInformation.delete({
     *   where: {
     *     // ... filter to delete one UserAcademicInformation
     *   }
     * })
     * 
     */
    delete<T extends UserAcademicInformationDeleteArgs>(args: SelectSubset<T, UserAcademicInformationDeleteArgs<ExtArgs>>): Prisma__UserAcademicInformationClient<$Result.GetResult<Prisma.$UserAcademicInformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAcademicInformation.
     * @param {UserAcademicInformationUpdateArgs} args - Arguments to update one UserAcademicInformation.
     * @example
     * // Update one UserAcademicInformation
     * const userAcademicInformation = await prisma.userAcademicInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAcademicInformationUpdateArgs>(args: SelectSubset<T, UserAcademicInformationUpdateArgs<ExtArgs>>): Prisma__UserAcademicInformationClient<$Result.GetResult<Prisma.$UserAcademicInformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAcademicInformations.
     * @param {UserAcademicInformationDeleteManyArgs} args - Arguments to filter UserAcademicInformations to delete.
     * @example
     * // Delete a few UserAcademicInformations
     * const { count } = await prisma.userAcademicInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAcademicInformationDeleteManyArgs>(args?: SelectSubset<T, UserAcademicInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAcademicInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAcademicInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAcademicInformations
     * const userAcademicInformation = await prisma.userAcademicInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAcademicInformationUpdateManyArgs>(args: SelectSubset<T, UserAcademicInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAcademicInformations and returns the data updated in the database.
     * @param {UserAcademicInformationUpdateManyAndReturnArgs} args - Arguments to update many UserAcademicInformations.
     * @example
     * // Update many UserAcademicInformations
     * const userAcademicInformation = await prisma.userAcademicInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAcademicInformations and only return the `id`
     * const userAcademicInformationWithIdOnly = await prisma.userAcademicInformation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAcademicInformationUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAcademicInformationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAcademicInformationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAcademicInformation.
     * @param {UserAcademicInformationUpsertArgs} args - Arguments to update or create a UserAcademicInformation.
     * @example
     * // Update or create a UserAcademicInformation
     * const userAcademicInformation = await prisma.userAcademicInformation.upsert({
     *   create: {
     *     // ... data to create a UserAcademicInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAcademicInformation we want to update
     *   }
     * })
     */
    upsert<T extends UserAcademicInformationUpsertArgs>(args: SelectSubset<T, UserAcademicInformationUpsertArgs<ExtArgs>>): Prisma__UserAcademicInformationClient<$Result.GetResult<Prisma.$UserAcademicInformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAcademicInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAcademicInformationCountArgs} args - Arguments to filter UserAcademicInformations to count.
     * @example
     * // Count the number of UserAcademicInformations
     * const count = await prisma.userAcademicInformation.count({
     *   where: {
     *     // ... the filter for the UserAcademicInformations we want to count
     *   }
     * })
    **/
    count<T extends UserAcademicInformationCountArgs>(
      args?: Subset<T, UserAcademicInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAcademicInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAcademicInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAcademicInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAcademicInformationAggregateArgs>(args: Subset<T, UserAcademicInformationAggregateArgs>): Prisma.PrismaPromise<GetUserAcademicInformationAggregateType<T>>

    /**
     * Group by UserAcademicInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAcademicInformationGroupByArgs} args - Group by arguments.
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
      T extends UserAcademicInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAcademicInformationGroupByArgs['orderBy'] }
        : { orderBy?: UserAcademicInformationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAcademicInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAcademicInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAcademicInformation model
   */
  readonly fields: UserAcademicInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAcademicInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAcademicInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAcademicInformation model
   */
  interface UserAcademicInformationFieldRefs {
    readonly id: FieldRef<"UserAcademicInformation", 'String'>
    readonly institution: FieldRef<"UserAcademicInformation", 'String'>
    readonly major: FieldRef<"UserAcademicInformation", 'String'>
    readonly start_date: FieldRef<"UserAcademicInformation", 'DateTime'>
    readonly end_date: FieldRef<"UserAcademicInformation", 'DateTime'>
    readonly summary: FieldRef<"UserAcademicInformation", 'String'>
    readonly userId: FieldRef<"UserAcademicInformation", 'String'>
    readonly createdAt: FieldRef<"UserAcademicInformation", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAcademicInformation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAcademicInformation findUnique
   */
  export type UserAcademicInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAcademicInformation
     */
    select?: UserAcademicInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAcademicInformation
     */
    omit?: UserAcademicInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAcademicInformationInclude<ExtArgs> | null
    /**
     * Filter, which UserAcademicInformation to fetch.
     */
    where: UserAcademicInformationWhereUniqueInput
  }

  /**
   * UserAcademicInformation findUniqueOrThrow
   */
  export type UserAcademicInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAcademicInformation
     */
    select?: UserAcademicInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAcademicInformation
     */
    omit?: UserAcademicInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAcademicInformationInclude<ExtArgs> | null
    /**
     * Filter, which UserAcademicInformation to fetch.
     */
    where: UserAcademicInformationWhereUniqueInput
  }

  /**
   * UserAcademicInformation findFirst
   */
  export type UserAcademicInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAcademicInformation
     */
    select?: UserAcademicInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAcademicInformation
     */
    omit?: UserAcademicInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAcademicInformationInclude<ExtArgs> | null
    /**
     * Filter, which UserAcademicInformation to fetch.
     */
    where?: UserAcademicInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAcademicInformations to fetch.
     */
    orderBy?: UserAcademicInformationOrderByWithRelationInput | UserAcademicInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAcademicInformations.
     */
    cursor?: UserAcademicInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAcademicInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAcademicInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAcademicInformations.
     */
    distinct?: UserAcademicInformationScalarFieldEnum | UserAcademicInformationScalarFieldEnum[]
  }

  /**
   * UserAcademicInformation findFirstOrThrow
   */
  export type UserAcademicInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAcademicInformation
     */
    select?: UserAcademicInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAcademicInformation
     */
    omit?: UserAcademicInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAcademicInformationInclude<ExtArgs> | null
    /**
     * Filter, which UserAcademicInformation to fetch.
     */
    where?: UserAcademicInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAcademicInformations to fetch.
     */
    orderBy?: UserAcademicInformationOrderByWithRelationInput | UserAcademicInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAcademicInformations.
     */
    cursor?: UserAcademicInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAcademicInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAcademicInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAcademicInformations.
     */
    distinct?: UserAcademicInformationScalarFieldEnum | UserAcademicInformationScalarFieldEnum[]
  }

  /**
   * UserAcademicInformation findMany
   */
  export type UserAcademicInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAcademicInformation
     */
    select?: UserAcademicInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAcademicInformation
     */
    omit?: UserAcademicInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAcademicInformationInclude<ExtArgs> | null
    /**
     * Filter, which UserAcademicInformations to fetch.
     */
    where?: UserAcademicInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAcademicInformations to fetch.
     */
    orderBy?: UserAcademicInformationOrderByWithRelationInput | UserAcademicInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAcademicInformations.
     */
    cursor?: UserAcademicInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAcademicInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAcademicInformations.
     */
    skip?: number
    distinct?: UserAcademicInformationScalarFieldEnum | UserAcademicInformationScalarFieldEnum[]
  }

  /**
   * UserAcademicInformation create
   */
  export type UserAcademicInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAcademicInformation
     */
    select?: UserAcademicInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAcademicInformation
     */
    omit?: UserAcademicInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAcademicInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAcademicInformation.
     */
    data: XOR<UserAcademicInformationCreateInput, UserAcademicInformationUncheckedCreateInput>
  }

  /**
   * UserAcademicInformation createMany
   */
  export type UserAcademicInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAcademicInformations.
     */
    data: UserAcademicInformationCreateManyInput | UserAcademicInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAcademicInformation createManyAndReturn
   */
  export type UserAcademicInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAcademicInformation
     */
    select?: UserAcademicInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAcademicInformation
     */
    omit?: UserAcademicInformationOmit<ExtArgs> | null
    /**
     * The data used to create many UserAcademicInformations.
     */
    data: UserAcademicInformationCreateManyInput | UserAcademicInformationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAcademicInformationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAcademicInformation update
   */
  export type UserAcademicInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAcademicInformation
     */
    select?: UserAcademicInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAcademicInformation
     */
    omit?: UserAcademicInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAcademicInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAcademicInformation.
     */
    data: XOR<UserAcademicInformationUpdateInput, UserAcademicInformationUncheckedUpdateInput>
    /**
     * Choose, which UserAcademicInformation to update.
     */
    where: UserAcademicInformationWhereUniqueInput
  }

  /**
   * UserAcademicInformation updateMany
   */
  export type UserAcademicInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAcademicInformations.
     */
    data: XOR<UserAcademicInformationUpdateManyMutationInput, UserAcademicInformationUncheckedUpdateManyInput>
    /**
     * Filter which UserAcademicInformations to update
     */
    where?: UserAcademicInformationWhereInput
    /**
     * Limit how many UserAcademicInformations to update.
     */
    limit?: number
  }

  /**
   * UserAcademicInformation updateManyAndReturn
   */
  export type UserAcademicInformationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAcademicInformation
     */
    select?: UserAcademicInformationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAcademicInformation
     */
    omit?: UserAcademicInformationOmit<ExtArgs> | null
    /**
     * The data used to update UserAcademicInformations.
     */
    data: XOR<UserAcademicInformationUpdateManyMutationInput, UserAcademicInformationUncheckedUpdateManyInput>
    /**
     * Filter which UserAcademicInformations to update
     */
    where?: UserAcademicInformationWhereInput
    /**
     * Limit how many UserAcademicInformations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAcademicInformationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAcademicInformation upsert
   */
  export type UserAcademicInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAcademicInformation
     */
    select?: UserAcademicInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAcademicInformation
     */
    omit?: UserAcademicInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAcademicInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAcademicInformation to update in case it exists.
     */
    where: UserAcademicInformationWhereUniqueInput
    /**
     * In case the UserAcademicInformation found by the `where` argument doesn't exist, create a new UserAcademicInformation with this data.
     */
    create: XOR<UserAcademicInformationCreateInput, UserAcademicInformationUncheckedCreateInput>
    /**
     * In case the UserAcademicInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAcademicInformationUpdateInput, UserAcademicInformationUncheckedUpdateInput>
  }

  /**
   * UserAcademicInformation delete
   */
  export type UserAcademicInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAcademicInformation
     */
    select?: UserAcademicInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAcademicInformation
     */
    omit?: UserAcademicInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAcademicInformationInclude<ExtArgs> | null
    /**
     * Filter which UserAcademicInformation to delete.
     */
    where: UserAcademicInformationWhereUniqueInput
  }

  /**
   * UserAcademicInformation deleteMany
   */
  export type UserAcademicInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAcademicInformations to delete
     */
    where?: UserAcademicInformationWhereInput
    /**
     * Limit how many UserAcademicInformations to delete.
     */
    limit?: number
  }

  /**
   * UserAcademicInformation without action
   */
  export type UserAcademicInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAcademicInformation
     */
    select?: UserAcademicInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAcademicInformation
     */
    omit?: UserAcademicInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAcademicInformationInclude<ExtArgs> | null
  }


  /**
   * Model UserSkill
   */

  export type AggregateUserSkill = {
    _count: UserSkillCountAggregateOutputType | null
    _avg: UserSkillAvgAggregateOutputType | null
    _sum: UserSkillSumAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  export type UserSkillAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSkillSumAggregateOutputType = {
    id: number | null
  }

  export type UserSkillMinAggregateOutputType = {
    id: number | null
    skills: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillMaxAggregateOutputType = {
    id: number | null
    skills: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillCountAggregateOutputType = {
    id: number
    skills: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSkillAvgAggregateInputType = {
    id?: true
  }

  export type UserSkillSumAggregateInputType = {
    id?: true
  }

  export type UserSkillMinAggregateInputType = {
    id?: true
    skills?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillMaxAggregateInputType = {
    id?: true
    skills?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillCountAggregateInputType = {
    id?: true
    skills?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkill to aggregate.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSkills
    **/
    _count?: true | UserSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSkillMaxAggregateInputType
  }

  export type GetUserSkillAggregateType<T extends UserSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSkill[P]>
      : GetScalarType<T[P], AggregateUserSkill[P]>
  }




  export type UserSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithAggregationInput | UserSkillOrderByWithAggregationInput[]
    by: UserSkillScalarFieldEnum[] | UserSkillScalarFieldEnum
    having?: UserSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSkillCountAggregateInputType | true
    _avg?: UserSkillAvgAggregateInputType
    _sum?: UserSkillSumAggregateInputType
    _min?: UserSkillMinAggregateInputType
    _max?: UserSkillMaxAggregateInputType
  }

  export type UserSkillGroupByOutputType = {
    id: number
    skills: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserSkillCountAggregateOutputType | null
    _avg: UserSkillAvgAggregateOutputType | null
    _sum: UserSkillSumAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  type GetUserSkillGroupByPayload<T extends UserSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
            : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
        }
      >
    >


  export type UserSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skills?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skills?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skills?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectScalar = {
    id?: boolean
    skills?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skills" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["userSkill"]>
  export type UserSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSkill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      skills: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSkill"]>
    composites: {}
  }

  type UserSkillGetPayload<S extends boolean | null | undefined | UserSkillDefaultArgs> = $Result.GetResult<Prisma.$UserSkillPayload, S>

  type UserSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillCountAggregateInputType | true
    }

  export interface UserSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSkill'], meta: { name: 'UserSkill' } }
    /**
     * Find zero or one UserSkill that matches the filter.
     * @param {UserSkillFindUniqueArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSkillFindUniqueArgs>(args: SelectSubset<T, UserSkillFindUniqueArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSkillFindUniqueOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSkillFindFirstArgs>(args?: SelectSubset<T, UserSkillFindFirstArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSkills
     * const userSkills = await prisma.userSkill.findMany()
     * 
     * // Get first 10 UserSkills
     * const userSkills = await prisma.userSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSkillFindManyArgs>(args?: SelectSubset<T, UserSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkill.
     * @param {UserSkillCreateArgs} args - Arguments to create a UserSkill.
     * @example
     * // Create one UserSkill
     * const UserSkill = await prisma.userSkill.create({
     *   data: {
     *     // ... data to create a UserSkill
     *   }
     * })
     * 
     */
    create<T extends UserSkillCreateArgs>(args: SelectSubset<T, UserSkillCreateArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkills.
     * @param {UserSkillCreateManyArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSkillCreateManyArgs>(args?: SelectSubset<T, UserSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkills and returns the data saved in the database.
     * @param {UserSkillCreateManyAndReturnArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSkills and only return the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkill.
     * @param {UserSkillDeleteArgs} args - Arguments to delete one UserSkill.
     * @example
     * // Delete one UserSkill
     * const UserSkill = await prisma.userSkill.delete({
     *   where: {
     *     // ... filter to delete one UserSkill
     *   }
     * })
     * 
     */
    delete<T extends UserSkillDeleteArgs>(args: SelectSubset<T, UserSkillDeleteArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkill.
     * @param {UserSkillUpdateArgs} args - Arguments to update one UserSkill.
     * @example
     * // Update one UserSkill
     * const userSkill = await prisma.userSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSkillUpdateArgs>(args: SelectSubset<T, UserSkillUpdateArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkills.
     * @param {UserSkillDeleteManyArgs} args - Arguments to filter UserSkills to delete.
     * @example
     * // Delete a few UserSkills
     * const { count } = await prisma.userSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSkillDeleteManyArgs>(args?: SelectSubset<T, UserSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSkills
     * const userSkill = await prisma.userSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSkillUpdateManyArgs>(args: SelectSubset<T, UserSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills and returns the data updated in the database.
     * @param {UserSkillUpdateManyAndReturnArgs} args - Arguments to update many UserSkills.
     * @example
     * // Update many UserSkills
     * const userSkill = await prisma.userSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSkills and only return the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkill.
     * @param {UserSkillUpsertArgs} args - Arguments to update or create a UserSkill.
     * @example
     * // Update or create a UserSkill
     * const userSkill = await prisma.userSkill.upsert({
     *   create: {
     *     // ... data to create a UserSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSkill we want to update
     *   }
     * })
     */
    upsert<T extends UserSkillUpsertArgs>(args: SelectSubset<T, UserSkillUpsertArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillCountArgs} args - Arguments to filter UserSkills to count.
     * @example
     * // Count the number of UserSkills
     * const count = await prisma.userSkill.count({
     *   where: {
     *     // ... the filter for the UserSkills we want to count
     *   }
     * })
    **/
    count<T extends UserSkillCountArgs>(
      args?: Subset<T, UserSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSkillAggregateArgs>(args: Subset<T, UserSkillAggregateArgs>): Prisma.PrismaPromise<GetUserSkillAggregateType<T>>

    /**
     * Group by UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillGroupByArgs} args - Group by arguments.
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
      T extends UserSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSkillGroupByArgs['orderBy'] }
        : { orderBy?: UserSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSkill model
   */
  readonly fields: UserSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSkill model
   */
  interface UserSkillFieldRefs {
    readonly id: FieldRef<"UserSkill", 'Int'>
    readonly skills: FieldRef<"UserSkill", 'String'>
    readonly userId: FieldRef<"UserSkill", 'String'>
    readonly createdAt: FieldRef<"UserSkill", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSkill findUnique
   */
  export type UserSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findUniqueOrThrow
   */
  export type UserSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findFirst
   */
  export type UserSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findFirstOrThrow
   */
  export type UserSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findMany
   */
  export type UserSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkills to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill create
   */
  export type UserSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSkill.
     */
    data: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
  }

  /**
   * UserSkill createMany
   */
  export type UserSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSkills.
     */
    data: UserSkillCreateManyInput | UserSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSkill createManyAndReturn
   */
  export type UserSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * The data used to create many UserSkills.
     */
    data: UserSkillCreateManyInput | UserSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkill update
   */
  export type UserSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSkill.
     */
    data: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
    /**
     * Choose, which UserSkill to update.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill updateMany
   */
  export type UserSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSkills.
     */
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyInput>
    /**
     * Filter which UserSkills to update
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to update.
     */
    limit?: number
  }

  /**
   * UserSkill updateManyAndReturn
   */
  export type UserSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * The data used to update UserSkills.
     */
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyInput>
    /**
     * Filter which UserSkills to update
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkill upsert
   */
  export type UserSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSkill to update in case it exists.
     */
    where: UserSkillWhereUniqueInput
    /**
     * In case the UserSkill found by the `where` argument doesn't exist, create a new UserSkill with this data.
     */
    create: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
    /**
     * In case the UserSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
  }

  /**
   * UserSkill delete
   */
  export type UserSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter which UserSkill to delete.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill deleteMany
   */
  export type UserSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkills to delete
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to delete.
     */
    limit?: number
  }

  /**
   * UserSkill without action
   */
  export type UserSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
  }


  /**
   * Model UserApplications
   */

  export type AggregateUserApplications = {
    _count: UserApplicationsCountAggregateOutputType | null
    _min: UserApplicationsMinAggregateOutputType | null
    _max: UserApplicationsMaxAggregateOutputType | null
  }

  export type UserApplicationsMinAggregateOutputType = {
    id: string | null
    company_name: string | null
    role: string | null
    job_post: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserApplicationsMaxAggregateOutputType = {
    id: string | null
    company_name: string | null
    role: string | null
    job_post: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserApplicationsCountAggregateOutputType = {
    id: number
    company_name: number
    role: number
    job_post: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserApplicationsMinAggregateInputType = {
    id?: true
    company_name?: true
    role?: true
    job_post?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserApplicationsMaxAggregateInputType = {
    id?: true
    company_name?: true
    role?: true
    job_post?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserApplicationsCountAggregateInputType = {
    id?: true
    company_name?: true
    role?: true
    job_post?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserApplicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserApplications to aggregate.
     */
    where?: UserApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApplications to fetch.
     */
    orderBy?: UserApplicationsOrderByWithRelationInput | UserApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserApplications
    **/
    _count?: true | UserApplicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserApplicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserApplicationsMaxAggregateInputType
  }

  export type GetUserApplicationsAggregateType<T extends UserApplicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserApplications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserApplications[P]>
      : GetScalarType<T[P], AggregateUserApplications[P]>
  }




  export type UserApplicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserApplicationsWhereInput
    orderBy?: UserApplicationsOrderByWithAggregationInput | UserApplicationsOrderByWithAggregationInput[]
    by: UserApplicationsScalarFieldEnum[] | UserApplicationsScalarFieldEnum
    having?: UserApplicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserApplicationsCountAggregateInputType | true
    _min?: UserApplicationsMinAggregateInputType
    _max?: UserApplicationsMaxAggregateInputType
  }

  export type UserApplicationsGroupByOutputType = {
    id: string
    company_name: string
    role: string
    job_post: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserApplicationsCountAggregateOutputType | null
    _min: UserApplicationsMinAggregateOutputType | null
    _max: UserApplicationsMaxAggregateOutputType | null
  }

  type GetUserApplicationsGroupByPayload<T extends UserApplicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserApplicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserApplicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserApplicationsGroupByOutputType[P]>
            : GetScalarType<T[P], UserApplicationsGroupByOutputType[P]>
        }
      >
    >


  export type UserApplicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    role?: boolean
    job_post?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resumes?: boolean | UserApplications$resumesArgs<ExtArgs>
    _count?: boolean | UserApplicationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userApplications"]>

  export type UserApplicationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    role?: boolean
    job_post?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userApplications"]>

  export type UserApplicationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    role?: boolean
    job_post?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userApplications"]>

  export type UserApplicationsSelectScalar = {
    id?: boolean
    company_name?: boolean
    role?: boolean
    job_post?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserApplicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_name" | "role" | "job_post" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["userApplications"]>
  export type UserApplicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resumes?: boolean | UserApplications$resumesArgs<ExtArgs>
    _count?: boolean | UserApplicationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserApplicationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserApplicationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserApplicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserApplications"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      resumes: Prisma.$UserResumePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_name: string
      role: string
      job_post: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userApplications"]>
    composites: {}
  }

  type UserApplicationsGetPayload<S extends boolean | null | undefined | UserApplicationsDefaultArgs> = $Result.GetResult<Prisma.$UserApplicationsPayload, S>

  type UserApplicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserApplicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserApplicationsCountAggregateInputType | true
    }

  export interface UserApplicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserApplications'], meta: { name: 'UserApplications' } }
    /**
     * Find zero or one UserApplications that matches the filter.
     * @param {UserApplicationsFindUniqueArgs} args - Arguments to find a UserApplications
     * @example
     * // Get one UserApplications
     * const userApplications = await prisma.userApplications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserApplicationsFindUniqueArgs>(args: SelectSubset<T, UserApplicationsFindUniqueArgs<ExtArgs>>): Prisma__UserApplicationsClient<$Result.GetResult<Prisma.$UserApplicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserApplications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserApplicationsFindUniqueOrThrowArgs} args - Arguments to find a UserApplications
     * @example
     * // Get one UserApplications
     * const userApplications = await prisma.userApplications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserApplicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserApplicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserApplicationsClient<$Result.GetResult<Prisma.$UserApplicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApplicationsFindFirstArgs} args - Arguments to find a UserApplications
     * @example
     * // Get one UserApplications
     * const userApplications = await prisma.userApplications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserApplicationsFindFirstArgs>(args?: SelectSubset<T, UserApplicationsFindFirstArgs<ExtArgs>>): Prisma__UserApplicationsClient<$Result.GetResult<Prisma.$UserApplicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserApplications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApplicationsFindFirstOrThrowArgs} args - Arguments to find a UserApplications
     * @example
     * // Get one UserApplications
     * const userApplications = await prisma.userApplications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserApplicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserApplicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserApplicationsClient<$Result.GetResult<Prisma.$UserApplicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApplicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserApplications
     * const userApplications = await prisma.userApplications.findMany()
     * 
     * // Get first 10 UserApplications
     * const userApplications = await prisma.userApplications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userApplicationsWithIdOnly = await prisma.userApplications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserApplicationsFindManyArgs>(args?: SelectSubset<T, UserApplicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserApplications.
     * @param {UserApplicationsCreateArgs} args - Arguments to create a UserApplications.
     * @example
     * // Create one UserApplications
     * const UserApplications = await prisma.userApplications.create({
     *   data: {
     *     // ... data to create a UserApplications
     *   }
     * })
     * 
     */
    create<T extends UserApplicationsCreateArgs>(args: SelectSubset<T, UserApplicationsCreateArgs<ExtArgs>>): Prisma__UserApplicationsClient<$Result.GetResult<Prisma.$UserApplicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserApplications.
     * @param {UserApplicationsCreateManyArgs} args - Arguments to create many UserApplications.
     * @example
     * // Create many UserApplications
     * const userApplications = await prisma.userApplications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserApplicationsCreateManyArgs>(args?: SelectSubset<T, UserApplicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserApplications and returns the data saved in the database.
     * @param {UserApplicationsCreateManyAndReturnArgs} args - Arguments to create many UserApplications.
     * @example
     * // Create many UserApplications
     * const userApplications = await prisma.userApplications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserApplications and only return the `id`
     * const userApplicationsWithIdOnly = await prisma.userApplications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserApplicationsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserApplicationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApplicationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserApplications.
     * @param {UserApplicationsDeleteArgs} args - Arguments to delete one UserApplications.
     * @example
     * // Delete one UserApplications
     * const UserApplications = await prisma.userApplications.delete({
     *   where: {
     *     // ... filter to delete one UserApplications
     *   }
     * })
     * 
     */
    delete<T extends UserApplicationsDeleteArgs>(args: SelectSubset<T, UserApplicationsDeleteArgs<ExtArgs>>): Prisma__UserApplicationsClient<$Result.GetResult<Prisma.$UserApplicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserApplications.
     * @param {UserApplicationsUpdateArgs} args - Arguments to update one UserApplications.
     * @example
     * // Update one UserApplications
     * const userApplications = await prisma.userApplications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserApplicationsUpdateArgs>(args: SelectSubset<T, UserApplicationsUpdateArgs<ExtArgs>>): Prisma__UserApplicationsClient<$Result.GetResult<Prisma.$UserApplicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserApplications.
     * @param {UserApplicationsDeleteManyArgs} args - Arguments to filter UserApplications to delete.
     * @example
     * // Delete a few UserApplications
     * const { count } = await prisma.userApplications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserApplicationsDeleteManyArgs>(args?: SelectSubset<T, UserApplicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApplicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserApplications
     * const userApplications = await prisma.userApplications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserApplicationsUpdateManyArgs>(args: SelectSubset<T, UserApplicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserApplications and returns the data updated in the database.
     * @param {UserApplicationsUpdateManyAndReturnArgs} args - Arguments to update many UserApplications.
     * @example
     * // Update many UserApplications
     * const userApplications = await prisma.userApplications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserApplications and only return the `id`
     * const userApplicationsWithIdOnly = await prisma.userApplications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserApplicationsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserApplicationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApplicationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserApplications.
     * @param {UserApplicationsUpsertArgs} args - Arguments to update or create a UserApplications.
     * @example
     * // Update or create a UserApplications
     * const userApplications = await prisma.userApplications.upsert({
     *   create: {
     *     // ... data to create a UserApplications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserApplications we want to update
     *   }
     * })
     */
    upsert<T extends UserApplicationsUpsertArgs>(args: SelectSubset<T, UserApplicationsUpsertArgs<ExtArgs>>): Prisma__UserApplicationsClient<$Result.GetResult<Prisma.$UserApplicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApplicationsCountArgs} args - Arguments to filter UserApplications to count.
     * @example
     * // Count the number of UserApplications
     * const count = await prisma.userApplications.count({
     *   where: {
     *     // ... the filter for the UserApplications we want to count
     *   }
     * })
    **/
    count<T extends UserApplicationsCountArgs>(
      args?: Subset<T, UserApplicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserApplicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApplicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserApplicationsAggregateArgs>(args: Subset<T, UserApplicationsAggregateArgs>): Prisma.PrismaPromise<GetUserApplicationsAggregateType<T>>

    /**
     * Group by UserApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApplicationsGroupByArgs} args - Group by arguments.
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
      T extends UserApplicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserApplicationsGroupByArgs['orderBy'] }
        : { orderBy?: UserApplicationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserApplicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserApplicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserApplications model
   */
  readonly fields: UserApplicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserApplications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserApplicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resumes<T extends UserApplications$resumesArgs<ExtArgs> = {}>(args?: Subset<T, UserApplications$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserApplications model
   */
  interface UserApplicationsFieldRefs {
    readonly id: FieldRef<"UserApplications", 'String'>
    readonly company_name: FieldRef<"UserApplications", 'String'>
    readonly role: FieldRef<"UserApplications", 'String'>
    readonly job_post: FieldRef<"UserApplications", 'String'>
    readonly userId: FieldRef<"UserApplications", 'String'>
    readonly createdAt: FieldRef<"UserApplications", 'DateTime'>
    readonly updatedAt: FieldRef<"UserApplications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserApplications findUnique
   */
  export type UserApplicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplications
     */
    select?: UserApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApplications
     */
    omit?: UserApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which UserApplications to fetch.
     */
    where: UserApplicationsWhereUniqueInput
  }

  /**
   * UserApplications findUniqueOrThrow
   */
  export type UserApplicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplications
     */
    select?: UserApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApplications
     */
    omit?: UserApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which UserApplications to fetch.
     */
    where: UserApplicationsWhereUniqueInput
  }

  /**
   * UserApplications findFirst
   */
  export type UserApplicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplications
     */
    select?: UserApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApplications
     */
    omit?: UserApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which UserApplications to fetch.
     */
    where?: UserApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApplications to fetch.
     */
    orderBy?: UserApplicationsOrderByWithRelationInput | UserApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserApplications.
     */
    cursor?: UserApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserApplications.
     */
    distinct?: UserApplicationsScalarFieldEnum | UserApplicationsScalarFieldEnum[]
  }

  /**
   * UserApplications findFirstOrThrow
   */
  export type UserApplicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplications
     */
    select?: UserApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApplications
     */
    omit?: UserApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which UserApplications to fetch.
     */
    where?: UserApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApplications to fetch.
     */
    orderBy?: UserApplicationsOrderByWithRelationInput | UserApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserApplications.
     */
    cursor?: UserApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserApplications.
     */
    distinct?: UserApplicationsScalarFieldEnum | UserApplicationsScalarFieldEnum[]
  }

  /**
   * UserApplications findMany
   */
  export type UserApplicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplications
     */
    select?: UserApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApplications
     */
    omit?: UserApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which UserApplications to fetch.
     */
    where?: UserApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApplications to fetch.
     */
    orderBy?: UserApplicationsOrderByWithRelationInput | UserApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserApplications.
     */
    cursor?: UserApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApplications.
     */
    skip?: number
    distinct?: UserApplicationsScalarFieldEnum | UserApplicationsScalarFieldEnum[]
  }

  /**
   * UserApplications create
   */
  export type UserApplicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplications
     */
    select?: UserApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApplications
     */
    omit?: UserApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserApplications.
     */
    data: XOR<UserApplicationsCreateInput, UserApplicationsUncheckedCreateInput>
  }

  /**
   * UserApplications createMany
   */
  export type UserApplicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserApplications.
     */
    data: UserApplicationsCreateManyInput | UserApplicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserApplications createManyAndReturn
   */
  export type UserApplicationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplications
     */
    select?: UserApplicationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserApplications
     */
    omit?: UserApplicationsOmit<ExtArgs> | null
    /**
     * The data used to create many UserApplications.
     */
    data: UserApplicationsCreateManyInput | UserApplicationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApplicationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserApplications update
   */
  export type UserApplicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplications
     */
    select?: UserApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApplications
     */
    omit?: UserApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserApplications.
     */
    data: XOR<UserApplicationsUpdateInput, UserApplicationsUncheckedUpdateInput>
    /**
     * Choose, which UserApplications to update.
     */
    where: UserApplicationsWhereUniqueInput
  }

  /**
   * UserApplications updateMany
   */
  export type UserApplicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserApplications.
     */
    data: XOR<UserApplicationsUpdateManyMutationInput, UserApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which UserApplications to update
     */
    where?: UserApplicationsWhereInput
    /**
     * Limit how many UserApplications to update.
     */
    limit?: number
  }

  /**
   * UserApplications updateManyAndReturn
   */
  export type UserApplicationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplications
     */
    select?: UserApplicationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserApplications
     */
    omit?: UserApplicationsOmit<ExtArgs> | null
    /**
     * The data used to update UserApplications.
     */
    data: XOR<UserApplicationsUpdateManyMutationInput, UserApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which UserApplications to update
     */
    where?: UserApplicationsWhereInput
    /**
     * Limit how many UserApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApplicationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserApplications upsert
   */
  export type UserApplicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplications
     */
    select?: UserApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApplications
     */
    omit?: UserApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApplicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserApplications to update in case it exists.
     */
    where: UserApplicationsWhereUniqueInput
    /**
     * In case the UserApplications found by the `where` argument doesn't exist, create a new UserApplications with this data.
     */
    create: XOR<UserApplicationsCreateInput, UserApplicationsUncheckedCreateInput>
    /**
     * In case the UserApplications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserApplicationsUpdateInput, UserApplicationsUncheckedUpdateInput>
  }

  /**
   * UserApplications delete
   */
  export type UserApplicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplications
     */
    select?: UserApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApplications
     */
    omit?: UserApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApplicationsInclude<ExtArgs> | null
    /**
     * Filter which UserApplications to delete.
     */
    where: UserApplicationsWhereUniqueInput
  }

  /**
   * UserApplications deleteMany
   */
  export type UserApplicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserApplications to delete
     */
    where?: UserApplicationsWhereInput
    /**
     * Limit how many UserApplications to delete.
     */
    limit?: number
  }

  /**
   * UserApplications.resumes
   */
  export type UserApplications$resumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeInclude<ExtArgs> | null
    where?: UserResumeWhereInput
    orderBy?: UserResumeOrderByWithRelationInput | UserResumeOrderByWithRelationInput[]
    cursor?: UserResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserResumeScalarFieldEnum | UserResumeScalarFieldEnum[]
  }

  /**
   * UserApplications without action
   */
  export type UserApplicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApplications
     */
    select?: UserApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApplications
     */
    omit?: UserApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApplicationsInclude<ExtArgs> | null
  }


  /**
   * Model UserResume
   */

  export type AggregateUserResume = {
    _count: UserResumeCountAggregateOutputType | null
    _avg: UserResumeAvgAggregateOutputType | null
    _sum: UserResumeSumAggregateOutputType | null
    _min: UserResumeMinAggregateOutputType | null
    _max: UserResumeMaxAggregateOutputType | null
  }

  export type UserResumeAvgAggregateOutputType = {
    version: number | null
  }

  export type UserResumeSumAggregateOutputType = {
    version: number | null
  }

  export type UserResumeMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    userId: string | null
    version: number | null
    title: string | null
    content: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserResumeMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    userId: string | null
    version: number | null
    title: string | null
    content: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserResumeCountAggregateOutputType = {
    id: number
    applicationId: number
    userId: number
    version: number
    title: number
    content: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserResumeAvgAggregateInputType = {
    version?: true
  }

  export type UserResumeSumAggregateInputType = {
    version?: true
  }

  export type UserResumeMinAggregateInputType = {
    id?: true
    applicationId?: true
    userId?: true
    version?: true
    title?: true
    content?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserResumeMaxAggregateInputType = {
    id?: true
    applicationId?: true
    userId?: true
    version?: true
    title?: true
    content?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserResumeCountAggregateInputType = {
    id?: true
    applicationId?: true
    userId?: true
    version?: true
    title?: true
    content?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserResume to aggregate.
     */
    where?: UserResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserResumes to fetch.
     */
    orderBy?: UserResumeOrderByWithRelationInput | UserResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserResumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserResumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserResumes
    **/
    _count?: true | UserResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserResumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserResumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserResumeMaxAggregateInputType
  }

  export type GetUserResumeAggregateType<T extends UserResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserResume[P]>
      : GetScalarType<T[P], AggregateUserResume[P]>
  }




  export type UserResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserResumeWhereInput
    orderBy?: UserResumeOrderByWithAggregationInput | UserResumeOrderByWithAggregationInput[]
    by: UserResumeScalarFieldEnum[] | UserResumeScalarFieldEnum
    having?: UserResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserResumeCountAggregateInputType | true
    _avg?: UserResumeAvgAggregateInputType
    _sum?: UserResumeSumAggregateInputType
    _min?: UserResumeMinAggregateInputType
    _max?: UserResumeMaxAggregateInputType
  }

  export type UserResumeGroupByOutputType = {
    id: string
    applicationId: string
    userId: string
    version: number
    title: string
    content: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserResumeCountAggregateOutputType | null
    _avg: UserResumeAvgAggregateOutputType | null
    _sum: UserResumeSumAggregateOutputType | null
    _min: UserResumeMinAggregateOutputType | null
    _max: UserResumeMaxAggregateOutputType | null
  }

  type GetUserResumeGroupByPayload<T extends UserResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserResumeGroupByOutputType[P]>
            : GetScalarType<T[P], UserResumeGroupByOutputType[P]>
        }
      >
    >


  export type UserResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    userId?: boolean
    version?: boolean
    title?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | UserApplicationsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userResume"]>

  export type UserResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    userId?: boolean
    version?: boolean
    title?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | UserApplicationsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userResume"]>

  export type UserResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    userId?: boolean
    version?: boolean
    title?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | UserApplicationsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userResume"]>

  export type UserResumeSelectScalar = {
    id?: boolean
    applicationId?: boolean
    userId?: boolean
    version?: boolean
    title?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "userId" | "version" | "title" | "content" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["userResume"]>
  export type UserResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | UserApplicationsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | UserApplicationsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | UserApplicationsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserResume"
    objects: {
      application: Prisma.$UserApplicationsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      userId: string
      version: number
      title: string
      content: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userResume"]>
    composites: {}
  }

  type UserResumeGetPayload<S extends boolean | null | undefined | UserResumeDefaultArgs> = $Result.GetResult<Prisma.$UserResumePayload, S>

  type UserResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserResumeCountAggregateInputType | true
    }

  export interface UserResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserResume'], meta: { name: 'UserResume' } }
    /**
     * Find zero or one UserResume that matches the filter.
     * @param {UserResumeFindUniqueArgs} args - Arguments to find a UserResume
     * @example
     * // Get one UserResume
     * const userResume = await prisma.userResume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserResumeFindUniqueArgs>(args: SelectSubset<T, UserResumeFindUniqueArgs<ExtArgs>>): Prisma__UserResumeClient<$Result.GetResult<Prisma.$UserResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserResume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserResumeFindUniqueOrThrowArgs} args - Arguments to find a UserResume
     * @example
     * // Get one UserResume
     * const userResume = await prisma.userResume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserResumeClient<$Result.GetResult<Prisma.$UserResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserResume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResumeFindFirstArgs} args - Arguments to find a UserResume
     * @example
     * // Get one UserResume
     * const userResume = await prisma.userResume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserResumeFindFirstArgs>(args?: SelectSubset<T, UserResumeFindFirstArgs<ExtArgs>>): Prisma__UserResumeClient<$Result.GetResult<Prisma.$UserResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserResume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResumeFindFirstOrThrowArgs} args - Arguments to find a UserResume
     * @example
     * // Get one UserResume
     * const userResume = await prisma.userResume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserResumeClient<$Result.GetResult<Prisma.$UserResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserResumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserResumes
     * const userResumes = await prisma.userResume.findMany()
     * 
     * // Get first 10 UserResumes
     * const userResumes = await prisma.userResume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userResumeWithIdOnly = await prisma.userResume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserResumeFindManyArgs>(args?: SelectSubset<T, UserResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserResume.
     * @param {UserResumeCreateArgs} args - Arguments to create a UserResume.
     * @example
     * // Create one UserResume
     * const UserResume = await prisma.userResume.create({
     *   data: {
     *     // ... data to create a UserResume
     *   }
     * })
     * 
     */
    create<T extends UserResumeCreateArgs>(args: SelectSubset<T, UserResumeCreateArgs<ExtArgs>>): Prisma__UserResumeClient<$Result.GetResult<Prisma.$UserResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserResumes.
     * @param {UserResumeCreateManyArgs} args - Arguments to create many UserResumes.
     * @example
     * // Create many UserResumes
     * const userResume = await prisma.userResume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserResumeCreateManyArgs>(args?: SelectSubset<T, UserResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserResumes and returns the data saved in the database.
     * @param {UserResumeCreateManyAndReturnArgs} args - Arguments to create many UserResumes.
     * @example
     * // Create many UserResumes
     * const userResume = await prisma.userResume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserResumes and only return the `id`
     * const userResumeWithIdOnly = await prisma.userResume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserResume.
     * @param {UserResumeDeleteArgs} args - Arguments to delete one UserResume.
     * @example
     * // Delete one UserResume
     * const UserResume = await prisma.userResume.delete({
     *   where: {
     *     // ... filter to delete one UserResume
     *   }
     * })
     * 
     */
    delete<T extends UserResumeDeleteArgs>(args: SelectSubset<T, UserResumeDeleteArgs<ExtArgs>>): Prisma__UserResumeClient<$Result.GetResult<Prisma.$UserResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserResume.
     * @param {UserResumeUpdateArgs} args - Arguments to update one UserResume.
     * @example
     * // Update one UserResume
     * const userResume = await prisma.userResume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserResumeUpdateArgs>(args: SelectSubset<T, UserResumeUpdateArgs<ExtArgs>>): Prisma__UserResumeClient<$Result.GetResult<Prisma.$UserResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserResumes.
     * @param {UserResumeDeleteManyArgs} args - Arguments to filter UserResumes to delete.
     * @example
     * // Delete a few UserResumes
     * const { count } = await prisma.userResume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserResumeDeleteManyArgs>(args?: SelectSubset<T, UserResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserResumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserResumes
     * const userResume = await prisma.userResume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserResumeUpdateManyArgs>(args: SelectSubset<T, UserResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserResumes and returns the data updated in the database.
     * @param {UserResumeUpdateManyAndReturnArgs} args - Arguments to update many UserResumes.
     * @example
     * // Update many UserResumes
     * const userResume = await prisma.userResume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserResumes and only return the `id`
     * const userResumeWithIdOnly = await prisma.userResume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserResume.
     * @param {UserResumeUpsertArgs} args - Arguments to update or create a UserResume.
     * @example
     * // Update or create a UserResume
     * const userResume = await prisma.userResume.upsert({
     *   create: {
     *     // ... data to create a UserResume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserResume we want to update
     *   }
     * })
     */
    upsert<T extends UserResumeUpsertArgs>(args: SelectSubset<T, UserResumeUpsertArgs<ExtArgs>>): Prisma__UserResumeClient<$Result.GetResult<Prisma.$UserResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserResumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResumeCountArgs} args - Arguments to filter UserResumes to count.
     * @example
     * // Count the number of UserResumes
     * const count = await prisma.userResume.count({
     *   where: {
     *     // ... the filter for the UserResumes we want to count
     *   }
     * })
    **/
    count<T extends UserResumeCountArgs>(
      args?: Subset<T, UserResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserResume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserResumeAggregateArgs>(args: Subset<T, UserResumeAggregateArgs>): Prisma.PrismaPromise<GetUserResumeAggregateType<T>>

    /**
     * Group by UserResume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResumeGroupByArgs} args - Group by arguments.
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
      T extends UserResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserResumeGroupByArgs['orderBy'] }
        : { orderBy?: UserResumeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserResume model
   */
  readonly fields: UserResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserResume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends UserApplicationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserApplicationsDefaultArgs<ExtArgs>>): Prisma__UserApplicationsClient<$Result.GetResult<Prisma.$UserApplicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserResume model
   */
  interface UserResumeFieldRefs {
    readonly id: FieldRef<"UserResume", 'String'>
    readonly applicationId: FieldRef<"UserResume", 'String'>
    readonly userId: FieldRef<"UserResume", 'String'>
    readonly version: FieldRef<"UserResume", 'Int'>
    readonly title: FieldRef<"UserResume", 'String'>
    readonly content: FieldRef<"UserResume", 'String'>
    readonly isActive: FieldRef<"UserResume", 'Boolean'>
    readonly createdAt: FieldRef<"UserResume", 'DateTime'>
    readonly updatedAt: FieldRef<"UserResume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserResume findUnique
   */
  export type UserResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeInclude<ExtArgs> | null
    /**
     * Filter, which UserResume to fetch.
     */
    where: UserResumeWhereUniqueInput
  }

  /**
   * UserResume findUniqueOrThrow
   */
  export type UserResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeInclude<ExtArgs> | null
    /**
     * Filter, which UserResume to fetch.
     */
    where: UserResumeWhereUniqueInput
  }

  /**
   * UserResume findFirst
   */
  export type UserResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeInclude<ExtArgs> | null
    /**
     * Filter, which UserResume to fetch.
     */
    where?: UserResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserResumes to fetch.
     */
    orderBy?: UserResumeOrderByWithRelationInput | UserResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserResumes.
     */
    cursor?: UserResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserResumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserResumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserResumes.
     */
    distinct?: UserResumeScalarFieldEnum | UserResumeScalarFieldEnum[]
  }

  /**
   * UserResume findFirstOrThrow
   */
  export type UserResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeInclude<ExtArgs> | null
    /**
     * Filter, which UserResume to fetch.
     */
    where?: UserResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserResumes to fetch.
     */
    orderBy?: UserResumeOrderByWithRelationInput | UserResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserResumes.
     */
    cursor?: UserResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserResumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserResumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserResumes.
     */
    distinct?: UserResumeScalarFieldEnum | UserResumeScalarFieldEnum[]
  }

  /**
   * UserResume findMany
   */
  export type UserResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeInclude<ExtArgs> | null
    /**
     * Filter, which UserResumes to fetch.
     */
    where?: UserResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserResumes to fetch.
     */
    orderBy?: UserResumeOrderByWithRelationInput | UserResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserResumes.
     */
    cursor?: UserResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserResumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserResumes.
     */
    skip?: number
    distinct?: UserResumeScalarFieldEnum | UserResumeScalarFieldEnum[]
  }

  /**
   * UserResume create
   */
  export type UserResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserResume.
     */
    data: XOR<UserResumeCreateInput, UserResumeUncheckedCreateInput>
  }

  /**
   * UserResume createMany
   */
  export type UserResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserResumes.
     */
    data: UserResumeCreateManyInput | UserResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserResume createManyAndReturn
   */
  export type UserResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * The data used to create many UserResumes.
     */
    data: UserResumeCreateManyInput | UserResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserResume update
   */
  export type UserResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserResume.
     */
    data: XOR<UserResumeUpdateInput, UserResumeUncheckedUpdateInput>
    /**
     * Choose, which UserResume to update.
     */
    where: UserResumeWhereUniqueInput
  }

  /**
   * UserResume updateMany
   */
  export type UserResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserResumes.
     */
    data: XOR<UserResumeUpdateManyMutationInput, UserResumeUncheckedUpdateManyInput>
    /**
     * Filter which UserResumes to update
     */
    where?: UserResumeWhereInput
    /**
     * Limit how many UserResumes to update.
     */
    limit?: number
  }

  /**
   * UserResume updateManyAndReturn
   */
  export type UserResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * The data used to update UserResumes.
     */
    data: XOR<UserResumeUpdateManyMutationInput, UserResumeUncheckedUpdateManyInput>
    /**
     * Filter which UserResumes to update
     */
    where?: UserResumeWhereInput
    /**
     * Limit how many UserResumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserResume upsert
   */
  export type UserResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserResume to update in case it exists.
     */
    where: UserResumeWhereUniqueInput
    /**
     * In case the UserResume found by the `where` argument doesn't exist, create a new UserResume with this data.
     */
    create: XOR<UserResumeCreateInput, UserResumeUncheckedCreateInput>
    /**
     * In case the UserResume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserResumeUpdateInput, UserResumeUncheckedUpdateInput>
  }

  /**
   * UserResume delete
   */
  export type UserResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeInclude<ExtArgs> | null
    /**
     * Filter which UserResume to delete.
     */
    where: UserResumeWhereUniqueInput
  }

  /**
   * UserResume deleteMany
   */
  export type UserResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserResumes to delete
     */
    where?: UserResumeWhereInput
    /**
     * Limit how many UserResumes to delete.
     */
    limit?: number
  }

  /**
   * UserResume without action
   */
  export type UserResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResume
     */
    select?: UserResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResume
     */
    omit?: UserResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResumeInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    username: 'username',
    displayUsername: 'displayUsername',
    onboarded: 'onboarded'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const UserProfessionalExperienceScalarFieldEnum: {
    id: 'id',
    institution: 'institution',
    role: 'role',
    start_date: 'start_date',
    end_date: 'end_date',
    summary: 'summary',
    version: 'version',
    userId: 'userId',
    at_university: 'at_university',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfessionalExperienceScalarFieldEnum = (typeof UserProfessionalExperienceScalarFieldEnum)[keyof typeof UserProfessionalExperienceScalarFieldEnum]


  export const UserProfessionalSummaryScalarFieldEnum: {
    id: 'id',
    experience_years: 'experience_years',
    summary: 'summary',
    version: 'version',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfessionalSummaryScalarFieldEnum = (typeof UserProfessionalSummaryScalarFieldEnum)[keyof typeof UserProfessionalSummaryScalarFieldEnum]


  export const UserAcademicInformationScalarFieldEnum: {
    id: 'id',
    institution: 'institution',
    major: 'major',
    start_date: 'start_date',
    end_date: 'end_date',
    summary: 'summary',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserAcademicInformationScalarFieldEnum = (typeof UserAcademicInformationScalarFieldEnum)[keyof typeof UserAcademicInformationScalarFieldEnum]


  export const UserSkillScalarFieldEnum: {
    id: 'id',
    skills: 'skills',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSkillScalarFieldEnum = (typeof UserSkillScalarFieldEnum)[keyof typeof UserSkillScalarFieldEnum]


  export const UserApplicationsScalarFieldEnum: {
    id: 'id',
    company_name: 'company_name',
    role: 'role',
    job_post: 'job_post',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserApplicationsScalarFieldEnum = (typeof UserApplicationsScalarFieldEnum)[keyof typeof UserApplicationsScalarFieldEnum]


  export const UserResumeScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    userId: 'userId',
    version: 'version',
    title: 'title',
    content: 'content',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserResumeScalarFieldEnum = (typeof UserResumeScalarFieldEnum)[keyof typeof UserResumeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    username?: StringNullableFilter<"User"> | string | null
    displayUsername?: StringNullableFilter<"User"> | string | null
    onboarded?: BoolFilter<"User"> | boolean
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    user_professional_summary?: XOR<UserProfessionalSummaryNullableScalarRelationFilter, UserProfessionalSummaryWhereInput> | null
    user_professional_experiences?: UserProfessionalExperienceListRelationFilter
    user_academic_information?: UserAcademicInformationListRelationFilter
    user_skill?: XOR<UserSkillNullableScalarRelationFilter, UserSkillWhereInput> | null
    applications?: UserApplicationsListRelationFilter
    resumes?: UserResumeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrderInput | SortOrder
    displayUsername?: SortOrderInput | SortOrder
    onboarded?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    user_professional_summary?: UserProfessionalSummaryOrderByWithRelationInput
    user_professional_experiences?: UserProfessionalExperienceOrderByRelationAggregateInput
    user_academic_information?: UserAcademicInformationOrderByRelationAggregateInput
    user_skill?: UserSkillOrderByWithRelationInput
    applications?: UserApplicationsOrderByRelationAggregateInput
    resumes?: UserResumeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    displayUsername?: StringNullableFilter<"User"> | string | null
    onboarded?: BoolFilter<"User"> | boolean
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    user_professional_summary?: XOR<UserProfessionalSummaryNullableScalarRelationFilter, UserProfessionalSummaryWhereInput> | null
    user_professional_experiences?: UserProfessionalExperienceListRelationFilter
    user_academic_information?: UserAcademicInformationListRelationFilter
    user_skill?: XOR<UserSkillNullableScalarRelationFilter, UserSkillWhereInput> | null
    applications?: UserApplicationsListRelationFilter
    resumes?: UserResumeListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrderInput | SortOrder
    displayUsername?: SortOrderInput | SortOrder
    onboarded?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayUsername?: StringNullableWithAggregatesFilter<"User"> | string | null
    onboarded?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type UserProfessionalExperienceWhereInput = {
    AND?: UserProfessionalExperienceWhereInput | UserProfessionalExperienceWhereInput[]
    OR?: UserProfessionalExperienceWhereInput[]
    NOT?: UserProfessionalExperienceWhereInput | UserProfessionalExperienceWhereInput[]
    id?: StringFilter<"UserProfessionalExperience"> | string
    institution?: StringFilter<"UserProfessionalExperience"> | string
    role?: StringFilter<"UserProfessionalExperience"> | string
    start_date?: DateTimeNullableFilter<"UserProfessionalExperience"> | Date | string | null
    end_date?: DateTimeNullableFilter<"UserProfessionalExperience"> | Date | string | null
    summary?: StringNullableFilter<"UserProfessionalExperience"> | string | null
    version?: IntFilter<"UserProfessionalExperience"> | number
    userId?: StringFilter<"UserProfessionalExperience"> | string
    at_university?: BoolFilter<"UserProfessionalExperience"> | boolean
    createdAt?: DateTimeFilter<"UserProfessionalExperience"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfessionalExperience"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfessionalExperienceOrderByWithRelationInput = {
    id?: SortOrder
    institution?: SortOrder
    role?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    version?: SortOrder
    userId?: SortOrder
    at_university?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfessionalExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserProfessionalExperienceWhereInput | UserProfessionalExperienceWhereInput[]
    OR?: UserProfessionalExperienceWhereInput[]
    NOT?: UserProfessionalExperienceWhereInput | UserProfessionalExperienceWhereInput[]
    institution?: StringFilter<"UserProfessionalExperience"> | string
    role?: StringFilter<"UserProfessionalExperience"> | string
    start_date?: DateTimeNullableFilter<"UserProfessionalExperience"> | Date | string | null
    end_date?: DateTimeNullableFilter<"UserProfessionalExperience"> | Date | string | null
    summary?: StringNullableFilter<"UserProfessionalExperience"> | string | null
    version?: IntFilter<"UserProfessionalExperience"> | number
    userId?: StringFilter<"UserProfessionalExperience"> | string
    at_university?: BoolFilter<"UserProfessionalExperience"> | boolean
    createdAt?: DateTimeFilter<"UserProfessionalExperience"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfessionalExperience"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserProfessionalExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    institution?: SortOrder
    role?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    version?: SortOrder
    userId?: SortOrder
    at_university?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfessionalExperienceCountOrderByAggregateInput
    _avg?: UserProfessionalExperienceAvgOrderByAggregateInput
    _max?: UserProfessionalExperienceMaxOrderByAggregateInput
    _min?: UserProfessionalExperienceMinOrderByAggregateInput
    _sum?: UserProfessionalExperienceSumOrderByAggregateInput
  }

  export type UserProfessionalExperienceScalarWhereWithAggregatesInput = {
    AND?: UserProfessionalExperienceScalarWhereWithAggregatesInput | UserProfessionalExperienceScalarWhereWithAggregatesInput[]
    OR?: UserProfessionalExperienceScalarWhereWithAggregatesInput[]
    NOT?: UserProfessionalExperienceScalarWhereWithAggregatesInput | UserProfessionalExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfessionalExperience"> | string
    institution?: StringWithAggregatesFilter<"UserProfessionalExperience"> | string
    role?: StringWithAggregatesFilter<"UserProfessionalExperience"> | string
    start_date?: DateTimeNullableWithAggregatesFilter<"UserProfessionalExperience"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"UserProfessionalExperience"> | Date | string | null
    summary?: StringNullableWithAggregatesFilter<"UserProfessionalExperience"> | string | null
    version?: IntWithAggregatesFilter<"UserProfessionalExperience"> | number
    userId?: StringWithAggregatesFilter<"UserProfessionalExperience"> | string
    at_university?: BoolWithAggregatesFilter<"UserProfessionalExperience"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserProfessionalExperience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfessionalExperience"> | Date | string
  }

  export type UserProfessionalSummaryWhereInput = {
    AND?: UserProfessionalSummaryWhereInput | UserProfessionalSummaryWhereInput[]
    OR?: UserProfessionalSummaryWhereInput[]
    NOT?: UserProfessionalSummaryWhereInput | UserProfessionalSummaryWhereInput[]
    id?: StringFilter<"UserProfessionalSummary"> | string
    experience_years?: IntFilter<"UserProfessionalSummary"> | number
    summary?: StringNullableFilter<"UserProfessionalSummary"> | string | null
    version?: IntFilter<"UserProfessionalSummary"> | number
    userId?: StringFilter<"UserProfessionalSummary"> | string
    createdAt?: DateTimeFilter<"UserProfessionalSummary"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfessionalSummary"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfessionalSummaryOrderByWithRelationInput = {
    id?: SortOrder
    experience_years?: SortOrder
    summary?: SortOrderInput | SortOrder
    version?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfessionalSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfessionalSummaryWhereInput | UserProfessionalSummaryWhereInput[]
    OR?: UserProfessionalSummaryWhereInput[]
    NOT?: UserProfessionalSummaryWhereInput | UserProfessionalSummaryWhereInput[]
    experience_years?: IntFilter<"UserProfessionalSummary"> | number
    summary?: StringNullableFilter<"UserProfessionalSummary"> | string | null
    version?: IntFilter<"UserProfessionalSummary"> | number
    createdAt?: DateTimeFilter<"UserProfessionalSummary"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfessionalSummary"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfessionalSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    experience_years?: SortOrder
    summary?: SortOrderInput | SortOrder
    version?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfessionalSummaryCountOrderByAggregateInput
    _avg?: UserProfessionalSummaryAvgOrderByAggregateInput
    _max?: UserProfessionalSummaryMaxOrderByAggregateInput
    _min?: UserProfessionalSummaryMinOrderByAggregateInput
    _sum?: UserProfessionalSummarySumOrderByAggregateInput
  }

  export type UserProfessionalSummaryScalarWhereWithAggregatesInput = {
    AND?: UserProfessionalSummaryScalarWhereWithAggregatesInput | UserProfessionalSummaryScalarWhereWithAggregatesInput[]
    OR?: UserProfessionalSummaryScalarWhereWithAggregatesInput[]
    NOT?: UserProfessionalSummaryScalarWhereWithAggregatesInput | UserProfessionalSummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfessionalSummary"> | string
    experience_years?: IntWithAggregatesFilter<"UserProfessionalSummary"> | number
    summary?: StringNullableWithAggregatesFilter<"UserProfessionalSummary"> | string | null
    version?: IntWithAggregatesFilter<"UserProfessionalSummary"> | number
    userId?: StringWithAggregatesFilter<"UserProfessionalSummary"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserProfessionalSummary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfessionalSummary"> | Date | string
  }

  export type UserAcademicInformationWhereInput = {
    AND?: UserAcademicInformationWhereInput | UserAcademicInformationWhereInput[]
    OR?: UserAcademicInformationWhereInput[]
    NOT?: UserAcademicInformationWhereInput | UserAcademicInformationWhereInput[]
    id?: StringFilter<"UserAcademicInformation"> | string
    institution?: StringFilter<"UserAcademicInformation"> | string
    major?: StringFilter<"UserAcademicInformation"> | string
    start_date?: DateTimeFilter<"UserAcademicInformation"> | Date | string
    end_date?: DateTimeNullableFilter<"UserAcademicInformation"> | Date | string | null
    summary?: StringNullableFilter<"UserAcademicInformation"> | string | null
    userId?: StringFilter<"UserAcademicInformation"> | string
    createdAt?: DateTimeFilter<"UserAcademicInformation"> | Date | string
    updatedAt?: DateTimeFilter<"UserAcademicInformation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAcademicInformationOrderByWithRelationInput = {
    id?: SortOrder
    institution?: SortOrder
    major?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAcademicInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAcademicInformationWhereInput | UserAcademicInformationWhereInput[]
    OR?: UserAcademicInformationWhereInput[]
    NOT?: UserAcademicInformationWhereInput | UserAcademicInformationWhereInput[]
    institution?: StringFilter<"UserAcademicInformation"> | string
    major?: StringFilter<"UserAcademicInformation"> | string
    start_date?: DateTimeFilter<"UserAcademicInformation"> | Date | string
    end_date?: DateTimeNullableFilter<"UserAcademicInformation"> | Date | string | null
    summary?: StringNullableFilter<"UserAcademicInformation"> | string | null
    userId?: StringFilter<"UserAcademicInformation"> | string
    createdAt?: DateTimeFilter<"UserAcademicInformation"> | Date | string
    updatedAt?: DateTimeFilter<"UserAcademicInformation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserAcademicInformationOrderByWithAggregationInput = {
    id?: SortOrder
    institution?: SortOrder
    major?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserAcademicInformationCountOrderByAggregateInput
    _max?: UserAcademicInformationMaxOrderByAggregateInput
    _min?: UserAcademicInformationMinOrderByAggregateInput
  }

  export type UserAcademicInformationScalarWhereWithAggregatesInput = {
    AND?: UserAcademicInformationScalarWhereWithAggregatesInput | UserAcademicInformationScalarWhereWithAggregatesInput[]
    OR?: UserAcademicInformationScalarWhereWithAggregatesInput[]
    NOT?: UserAcademicInformationScalarWhereWithAggregatesInput | UserAcademicInformationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAcademicInformation"> | string
    institution?: StringWithAggregatesFilter<"UserAcademicInformation"> | string
    major?: StringWithAggregatesFilter<"UserAcademicInformation"> | string
    start_date?: DateTimeWithAggregatesFilter<"UserAcademicInformation"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"UserAcademicInformation"> | Date | string | null
    summary?: StringNullableWithAggregatesFilter<"UserAcademicInformation"> | string | null
    userId?: StringWithAggregatesFilter<"UserAcademicInformation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAcademicInformation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAcademicInformation"> | Date | string
  }

  export type UserSkillWhereInput = {
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    id?: IntFilter<"UserSkill"> | number
    skills?: StringFilter<"UserSkill"> | string
    userId?: StringFilter<"UserSkill"> | string
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkill"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSkillOrderByWithRelationInput = {
    id?: SortOrder
    skills?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    skills?: StringFilter<"UserSkill"> | string
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkill"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSkillOrderByWithAggregationInput = {
    id?: SortOrder
    skills?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSkillCountOrderByAggregateInput
    _avg?: UserSkillAvgOrderByAggregateInput
    _max?: UserSkillMaxOrderByAggregateInput
    _min?: UserSkillMinOrderByAggregateInput
    _sum?: UserSkillSumOrderByAggregateInput
  }

  export type UserSkillScalarWhereWithAggregatesInput = {
    AND?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    OR?: UserSkillScalarWhereWithAggregatesInput[]
    NOT?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSkill"> | number
    skills?: StringWithAggregatesFilter<"UserSkill"> | string
    userId?: StringWithAggregatesFilter<"UserSkill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSkill"> | Date | string
  }

  export type UserApplicationsWhereInput = {
    AND?: UserApplicationsWhereInput | UserApplicationsWhereInput[]
    OR?: UserApplicationsWhereInput[]
    NOT?: UserApplicationsWhereInput | UserApplicationsWhereInput[]
    id?: StringFilter<"UserApplications"> | string
    company_name?: StringFilter<"UserApplications"> | string
    role?: StringFilter<"UserApplications"> | string
    job_post?: StringFilter<"UserApplications"> | string
    userId?: StringFilter<"UserApplications"> | string
    createdAt?: DateTimeFilter<"UserApplications"> | Date | string
    updatedAt?: DateTimeFilter<"UserApplications"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resumes?: UserResumeListRelationFilter
  }

  export type UserApplicationsOrderByWithRelationInput = {
    id?: SortOrder
    company_name?: SortOrder
    role?: SortOrder
    job_post?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    resumes?: UserResumeOrderByRelationAggregateInput
  }

  export type UserApplicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserApplicationsWhereInput | UserApplicationsWhereInput[]
    OR?: UserApplicationsWhereInput[]
    NOT?: UserApplicationsWhereInput | UserApplicationsWhereInput[]
    company_name?: StringFilter<"UserApplications"> | string
    role?: StringFilter<"UserApplications"> | string
    job_post?: StringFilter<"UserApplications"> | string
    userId?: StringFilter<"UserApplications"> | string
    createdAt?: DateTimeFilter<"UserApplications"> | Date | string
    updatedAt?: DateTimeFilter<"UserApplications"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resumes?: UserResumeListRelationFilter
  }, "id">

  export type UserApplicationsOrderByWithAggregationInput = {
    id?: SortOrder
    company_name?: SortOrder
    role?: SortOrder
    job_post?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserApplicationsCountOrderByAggregateInput
    _max?: UserApplicationsMaxOrderByAggregateInput
    _min?: UserApplicationsMinOrderByAggregateInput
  }

  export type UserApplicationsScalarWhereWithAggregatesInput = {
    AND?: UserApplicationsScalarWhereWithAggregatesInput | UserApplicationsScalarWhereWithAggregatesInput[]
    OR?: UserApplicationsScalarWhereWithAggregatesInput[]
    NOT?: UserApplicationsScalarWhereWithAggregatesInput | UserApplicationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserApplications"> | string
    company_name?: StringWithAggregatesFilter<"UserApplications"> | string
    role?: StringWithAggregatesFilter<"UserApplications"> | string
    job_post?: StringWithAggregatesFilter<"UserApplications"> | string
    userId?: StringWithAggregatesFilter<"UserApplications"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserApplications"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserApplications"> | Date | string
  }

  export type UserResumeWhereInput = {
    AND?: UserResumeWhereInput | UserResumeWhereInput[]
    OR?: UserResumeWhereInput[]
    NOT?: UserResumeWhereInput | UserResumeWhereInput[]
    id?: StringFilter<"UserResume"> | string
    applicationId?: StringFilter<"UserResume"> | string
    userId?: StringFilter<"UserResume"> | string
    version?: IntFilter<"UserResume"> | number
    title?: StringFilter<"UserResume"> | string
    content?: StringFilter<"UserResume"> | string
    isActive?: BoolFilter<"UserResume"> | boolean
    createdAt?: DateTimeFilter<"UserResume"> | Date | string
    updatedAt?: DateTimeFilter<"UserResume"> | Date | string
    application?: XOR<UserApplicationsScalarRelationFilter, UserApplicationsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserResumeOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    application?: UserApplicationsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    applicationId_version?: UserResumeApplicationIdVersionCompoundUniqueInput
    AND?: UserResumeWhereInput | UserResumeWhereInput[]
    OR?: UserResumeWhereInput[]
    NOT?: UserResumeWhereInput | UserResumeWhereInput[]
    applicationId?: StringFilter<"UserResume"> | string
    userId?: StringFilter<"UserResume"> | string
    version?: IntFilter<"UserResume"> | number
    title?: StringFilter<"UserResume"> | string
    content?: StringFilter<"UserResume"> | string
    isActive?: BoolFilter<"UserResume"> | boolean
    createdAt?: DateTimeFilter<"UserResume"> | Date | string
    updatedAt?: DateTimeFilter<"UserResume"> | Date | string
    application?: XOR<UserApplicationsScalarRelationFilter, UserApplicationsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "applicationId_version">

  export type UserResumeOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserResumeCountOrderByAggregateInput
    _avg?: UserResumeAvgOrderByAggregateInput
    _max?: UserResumeMaxOrderByAggregateInput
    _min?: UserResumeMinOrderByAggregateInput
    _sum?: UserResumeSumOrderByAggregateInput
  }

  export type UserResumeScalarWhereWithAggregatesInput = {
    AND?: UserResumeScalarWhereWithAggregatesInput | UserResumeScalarWhereWithAggregatesInput[]
    OR?: UserResumeScalarWhereWithAggregatesInput[]
    NOT?: UserResumeScalarWhereWithAggregatesInput | UserResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserResume"> | string
    applicationId?: StringWithAggregatesFilter<"UserResume"> | string
    userId?: StringWithAggregatesFilter<"UserResume"> | string
    version?: IntWithAggregatesFilter<"UserResume"> | number
    title?: StringWithAggregatesFilter<"UserResume"> | string
    content?: StringWithAggregatesFilter<"UserResume"> | string
    isActive?: BoolWithAggregatesFilter<"UserResume"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserResume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserResume"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationCreateNestedManyWithoutUserInput
    user_skill?: UserSkillCreateNestedOneWithoutUserInput
    applications?: UserApplicationsCreateNestedManyWithoutUserInput
    resumes?: UserResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationUncheckedCreateNestedManyWithoutUserInput
    user_skill?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    applications?: UserApplicationsUncheckedCreateNestedManyWithoutUserInput
    resumes?: UserResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUncheckedUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUncheckedUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalExperienceCreateInput = {
    id?: string
    institution: string
    role: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    summary?: string | null
    version?: number
    at_university?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUser_professional_experiencesInput
  }

  export type UserProfessionalExperienceUncheckedCreateInput = {
    id?: string
    institution: string
    role: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    summary?: string | null
    version?: number
    userId: string
    at_university?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfessionalExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    at_university?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_professional_experiencesNestedInput
  }

  export type UserProfessionalExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    at_university?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalExperienceCreateManyInput = {
    id?: string
    institution: string
    role: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    summary?: string | null
    version?: number
    userId: string
    at_university?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfessionalExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    at_university?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    at_university?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalSummaryCreateInput = {
    id?: string
    experience_years: number
    summary?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUser_professional_summaryInput
  }

  export type UserProfessionalSummaryUncheckedCreateInput = {
    id?: string
    experience_years: number
    summary?: string | null
    version?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfessionalSummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_professional_summaryNestedInput
  }

  export type UserProfessionalSummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalSummaryCreateManyInput = {
    id?: string
    experience_years: number
    summary?: string | null
    version?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfessionalSummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalSummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAcademicInformationCreateInput = {
    id?: string
    institution: string
    major: string
    start_date: Date | string
    end_date?: Date | string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUser_academic_informationInput
  }

  export type UserAcademicInformationUncheckedCreateInput = {
    id?: string
    institution: string
    major: string
    start_date: Date | string
    end_date?: Date | string | null
    summary?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAcademicInformationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_academic_informationNestedInput
  }

  export type UserAcademicInformationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAcademicInformationCreateManyInput = {
    id?: string
    institution: string
    major: string
    start_date: Date | string
    end_date?: Date | string | null
    summary?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAcademicInformationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAcademicInformationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateInput = {
    skills: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUser_skillInput
  }

  export type UserSkillUncheckedCreateInput = {
    id?: number
    skills: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUpdateInput = {
    skills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_skillNestedInput
  }

  export type UserSkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    skills?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateManyInput = {
    id?: number
    skills: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUpdateManyMutationInput = {
    skills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    skills?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApplicationsCreateInput = {
    id?: string
    company_name: string
    role: string
    job_post: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
    resumes?: UserResumeCreateNestedManyWithoutApplicationInput
  }

  export type UserApplicationsUncheckedCreateInput = {
    id?: string
    company_name: string
    role: string
    job_post: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: UserResumeUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type UserApplicationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_post?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    resumes?: UserResumeUpdateManyWithoutApplicationNestedInput
  }

  export type UserApplicationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_post?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: UserResumeUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type UserApplicationsCreateManyInput = {
    id?: string
    company_name: string
    role: string
    job_post: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserApplicationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_post?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApplicationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_post?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResumeCreateInput = {
    id?: string
    version?: number
    title?: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    application: UserApplicationsCreateNestedOneWithoutResumesInput
    user: UserCreateNestedOneWithoutResumesInput
  }

  export type UserResumeUncheckedCreateInput = {
    id?: string
    applicationId: string
    userId: string
    version?: number
    title?: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: UserApplicationsUpdateOneRequiredWithoutResumesNestedInput
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
  }

  export type UserResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResumeCreateManyInput = {
    id?: string
    applicationId: string
    userId: string
    version?: number
    title?: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type UserProfessionalSummaryNullableScalarRelationFilter = {
    is?: UserProfessionalSummaryWhereInput | null
    isNot?: UserProfessionalSummaryWhereInput | null
  }

  export type UserProfessionalExperienceListRelationFilter = {
    every?: UserProfessionalExperienceWhereInput
    some?: UserProfessionalExperienceWhereInput
    none?: UserProfessionalExperienceWhereInput
  }

  export type UserAcademicInformationListRelationFilter = {
    every?: UserAcademicInformationWhereInput
    some?: UserAcademicInformationWhereInput
    none?: UserAcademicInformationWhereInput
  }

  export type UserSkillNullableScalarRelationFilter = {
    is?: UserSkillWhereInput | null
    isNot?: UserSkillWhereInput | null
  }

  export type UserApplicationsListRelationFilter = {
    every?: UserApplicationsWhereInput
    some?: UserApplicationsWhereInput
    none?: UserApplicationsWhereInput
  }

  export type UserResumeListRelationFilter = {
    every?: UserResumeWhereInput
    some?: UserResumeWhereInput
    none?: UserResumeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProfessionalExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAcademicInformationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserApplicationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    displayUsername?: SortOrder
    onboarded?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    displayUsername?: SortOrder
    onboarded?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    displayUsername?: SortOrder
    onboarded?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserProfessionalExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    role?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    summary?: SortOrder
    version?: SortOrder
    userId?: SortOrder
    at_university?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfessionalExperienceAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type UserProfessionalExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    role?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    summary?: SortOrder
    version?: SortOrder
    userId?: SortOrder
    at_university?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfessionalExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    role?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    summary?: SortOrder
    version?: SortOrder
    userId?: SortOrder
    at_university?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfessionalExperienceSumOrderByAggregateInput = {
    version?: SortOrder
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

  export type UserProfessionalSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    experience_years?: SortOrder
    summary?: SortOrder
    version?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfessionalSummaryAvgOrderByAggregateInput = {
    experience_years?: SortOrder
    version?: SortOrder
  }

  export type UserProfessionalSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    experience_years?: SortOrder
    summary?: SortOrder
    version?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfessionalSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    experience_years?: SortOrder
    summary?: SortOrder
    version?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfessionalSummarySumOrderByAggregateInput = {
    experience_years?: SortOrder
    version?: SortOrder
  }

  export type UserAcademicInformationCountOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    major?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    summary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAcademicInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    major?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    summary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAcademicInformationMinOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    major?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    summary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillCountOrderByAggregateInput = {
    id?: SortOrder
    skills?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    skills?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillMinOrderByAggregateInput = {
    id?: SortOrder
    skills?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserApplicationsCountOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    role?: SortOrder
    job_post?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserApplicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    role?: SortOrder
    job_post?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserApplicationsMinOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    role?: SortOrder
    job_post?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserApplicationsScalarRelationFilter = {
    is?: UserApplicationsWhereInput
    isNot?: UserApplicationsWhereInput
  }

  export type UserResumeApplicationIdVersionCompoundUniqueInput = {
    applicationId: string
    version: number
  }

  export type UserResumeCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserResumeAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type UserResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserResumeMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserResumeSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserProfessionalSummaryCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfessionalSummaryCreateWithoutUserInput, UserProfessionalSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfessionalSummaryCreateOrConnectWithoutUserInput
    connect?: UserProfessionalSummaryWhereUniqueInput
  }

  export type UserProfessionalExperienceCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProfessionalExperienceCreateWithoutUserInput, UserProfessionalExperienceUncheckedCreateWithoutUserInput> | UserProfessionalExperienceCreateWithoutUserInput[] | UserProfessionalExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfessionalExperienceCreateOrConnectWithoutUserInput | UserProfessionalExperienceCreateOrConnectWithoutUserInput[]
    createMany?: UserProfessionalExperienceCreateManyUserInputEnvelope
    connect?: UserProfessionalExperienceWhereUniqueInput | UserProfessionalExperienceWhereUniqueInput[]
  }

  export type UserAcademicInformationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAcademicInformationCreateWithoutUserInput, UserAcademicInformationUncheckedCreateWithoutUserInput> | UserAcademicInformationCreateWithoutUserInput[] | UserAcademicInformationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAcademicInformationCreateOrConnectWithoutUserInput | UserAcademicInformationCreateOrConnectWithoutUserInput[]
    createMany?: UserAcademicInformationCreateManyUserInputEnvelope
    connect?: UserAcademicInformationWhereUniqueInput | UserAcademicInformationWhereUniqueInput[]
  }

  export type UserSkillCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput
    connect?: UserSkillWhereUniqueInput
  }

  export type UserApplicationsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserApplicationsCreateWithoutUserInput, UserApplicationsUncheckedCreateWithoutUserInput> | UserApplicationsCreateWithoutUserInput[] | UserApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApplicationsCreateOrConnectWithoutUserInput | UserApplicationsCreateOrConnectWithoutUserInput[]
    createMany?: UserApplicationsCreateManyUserInputEnvelope
    connect?: UserApplicationsWhereUniqueInput | UserApplicationsWhereUniqueInput[]
  }

  export type UserResumeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserResumeCreateWithoutUserInput, UserResumeUncheckedCreateWithoutUserInput> | UserResumeCreateWithoutUserInput[] | UserResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserResumeCreateOrConnectWithoutUserInput | UserResumeCreateOrConnectWithoutUserInput[]
    createMany?: UserResumeCreateManyUserInputEnvelope
    connect?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfessionalSummaryCreateWithoutUserInput, UserProfessionalSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfessionalSummaryCreateOrConnectWithoutUserInput
    connect?: UserProfessionalSummaryWhereUniqueInput
  }

  export type UserProfessionalExperienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProfessionalExperienceCreateWithoutUserInput, UserProfessionalExperienceUncheckedCreateWithoutUserInput> | UserProfessionalExperienceCreateWithoutUserInput[] | UserProfessionalExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfessionalExperienceCreateOrConnectWithoutUserInput | UserProfessionalExperienceCreateOrConnectWithoutUserInput[]
    createMany?: UserProfessionalExperienceCreateManyUserInputEnvelope
    connect?: UserProfessionalExperienceWhereUniqueInput | UserProfessionalExperienceWhereUniqueInput[]
  }

  export type UserAcademicInformationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAcademicInformationCreateWithoutUserInput, UserAcademicInformationUncheckedCreateWithoutUserInput> | UserAcademicInformationCreateWithoutUserInput[] | UserAcademicInformationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAcademicInformationCreateOrConnectWithoutUserInput | UserAcademicInformationCreateOrConnectWithoutUserInput[]
    createMany?: UserAcademicInformationCreateManyUserInputEnvelope
    connect?: UserAcademicInformationWhereUniqueInput | UserAcademicInformationWhereUniqueInput[]
  }

  export type UserSkillUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput
    connect?: UserSkillWhereUniqueInput
  }

  export type UserApplicationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserApplicationsCreateWithoutUserInput, UserApplicationsUncheckedCreateWithoutUserInput> | UserApplicationsCreateWithoutUserInput[] | UserApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApplicationsCreateOrConnectWithoutUserInput | UserApplicationsCreateOrConnectWithoutUserInput[]
    createMany?: UserApplicationsCreateManyUserInputEnvelope
    connect?: UserApplicationsWhereUniqueInput | UserApplicationsWhereUniqueInput[]
  }

  export type UserResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserResumeCreateWithoutUserInput, UserResumeUncheckedCreateWithoutUserInput> | UserResumeCreateWithoutUserInput[] | UserResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserResumeCreateOrConnectWithoutUserInput | UserResumeCreateOrConnectWithoutUserInput[]
    createMany?: UserResumeCreateManyUserInputEnvelope
    connect?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserProfessionalSummaryUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfessionalSummaryCreateWithoutUserInput, UserProfessionalSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfessionalSummaryCreateOrConnectWithoutUserInput
    upsert?: UserProfessionalSummaryUpsertWithoutUserInput
    disconnect?: UserProfessionalSummaryWhereInput | boolean
    delete?: UserProfessionalSummaryWhereInput | boolean
    connect?: UserProfessionalSummaryWhereUniqueInput
    update?: XOR<XOR<UserProfessionalSummaryUpdateToOneWithWhereWithoutUserInput, UserProfessionalSummaryUpdateWithoutUserInput>, UserProfessionalSummaryUncheckedUpdateWithoutUserInput>
  }

  export type UserProfessionalExperienceUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProfessionalExperienceCreateWithoutUserInput, UserProfessionalExperienceUncheckedCreateWithoutUserInput> | UserProfessionalExperienceCreateWithoutUserInput[] | UserProfessionalExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfessionalExperienceCreateOrConnectWithoutUserInput | UserProfessionalExperienceCreateOrConnectWithoutUserInput[]
    upsert?: UserProfessionalExperienceUpsertWithWhereUniqueWithoutUserInput | UserProfessionalExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProfessionalExperienceCreateManyUserInputEnvelope
    set?: UserProfessionalExperienceWhereUniqueInput | UserProfessionalExperienceWhereUniqueInput[]
    disconnect?: UserProfessionalExperienceWhereUniqueInput | UserProfessionalExperienceWhereUniqueInput[]
    delete?: UserProfessionalExperienceWhereUniqueInput | UserProfessionalExperienceWhereUniqueInput[]
    connect?: UserProfessionalExperienceWhereUniqueInput | UserProfessionalExperienceWhereUniqueInput[]
    update?: UserProfessionalExperienceUpdateWithWhereUniqueWithoutUserInput | UserProfessionalExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProfessionalExperienceUpdateManyWithWhereWithoutUserInput | UserProfessionalExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProfessionalExperienceScalarWhereInput | UserProfessionalExperienceScalarWhereInput[]
  }

  export type UserAcademicInformationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAcademicInformationCreateWithoutUserInput, UserAcademicInformationUncheckedCreateWithoutUserInput> | UserAcademicInformationCreateWithoutUserInput[] | UserAcademicInformationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAcademicInformationCreateOrConnectWithoutUserInput | UserAcademicInformationCreateOrConnectWithoutUserInput[]
    upsert?: UserAcademicInformationUpsertWithWhereUniqueWithoutUserInput | UserAcademicInformationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAcademicInformationCreateManyUserInputEnvelope
    set?: UserAcademicInformationWhereUniqueInput | UserAcademicInformationWhereUniqueInput[]
    disconnect?: UserAcademicInformationWhereUniqueInput | UserAcademicInformationWhereUniqueInput[]
    delete?: UserAcademicInformationWhereUniqueInput | UserAcademicInformationWhereUniqueInput[]
    connect?: UserAcademicInformationWhereUniqueInput | UserAcademicInformationWhereUniqueInput[]
    update?: UserAcademicInformationUpdateWithWhereUniqueWithoutUserInput | UserAcademicInformationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAcademicInformationUpdateManyWithWhereWithoutUserInput | UserAcademicInformationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAcademicInformationScalarWhereInput | UserAcademicInformationScalarWhereInput[]
  }

  export type UserSkillUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput
    upsert?: UserSkillUpsertWithoutUserInput
    disconnect?: UserSkillWhereInput | boolean
    delete?: UserSkillWhereInput | boolean
    connect?: UserSkillWhereUniqueInput
    update?: XOR<XOR<UserSkillUpdateToOneWithWhereWithoutUserInput, UserSkillUpdateWithoutUserInput>, UserSkillUncheckedUpdateWithoutUserInput>
  }

  export type UserApplicationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserApplicationsCreateWithoutUserInput, UserApplicationsUncheckedCreateWithoutUserInput> | UserApplicationsCreateWithoutUserInput[] | UserApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApplicationsCreateOrConnectWithoutUserInput | UserApplicationsCreateOrConnectWithoutUserInput[]
    upsert?: UserApplicationsUpsertWithWhereUniqueWithoutUserInput | UserApplicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserApplicationsCreateManyUserInputEnvelope
    set?: UserApplicationsWhereUniqueInput | UserApplicationsWhereUniqueInput[]
    disconnect?: UserApplicationsWhereUniqueInput | UserApplicationsWhereUniqueInput[]
    delete?: UserApplicationsWhereUniqueInput | UserApplicationsWhereUniqueInput[]
    connect?: UserApplicationsWhereUniqueInput | UserApplicationsWhereUniqueInput[]
    update?: UserApplicationsUpdateWithWhereUniqueWithoutUserInput | UserApplicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserApplicationsUpdateManyWithWhereWithoutUserInput | UserApplicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserApplicationsScalarWhereInput | UserApplicationsScalarWhereInput[]
  }

  export type UserResumeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserResumeCreateWithoutUserInput, UserResumeUncheckedCreateWithoutUserInput> | UserResumeCreateWithoutUserInput[] | UserResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserResumeCreateOrConnectWithoutUserInput | UserResumeCreateOrConnectWithoutUserInput[]
    upsert?: UserResumeUpsertWithWhereUniqueWithoutUserInput | UserResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserResumeCreateManyUserInputEnvelope
    set?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    disconnect?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    delete?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    connect?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    update?: UserResumeUpdateWithWhereUniqueWithoutUserInput | UserResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserResumeUpdateManyWithWhereWithoutUserInput | UserResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserResumeScalarWhereInput | UserResumeScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfessionalSummaryCreateWithoutUserInput, UserProfessionalSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfessionalSummaryCreateOrConnectWithoutUserInput
    upsert?: UserProfessionalSummaryUpsertWithoutUserInput
    disconnect?: UserProfessionalSummaryWhereInput | boolean
    delete?: UserProfessionalSummaryWhereInput | boolean
    connect?: UserProfessionalSummaryWhereUniqueInput
    update?: XOR<XOR<UserProfessionalSummaryUpdateToOneWithWhereWithoutUserInput, UserProfessionalSummaryUpdateWithoutUserInput>, UserProfessionalSummaryUncheckedUpdateWithoutUserInput>
  }

  export type UserProfessionalExperienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProfessionalExperienceCreateWithoutUserInput, UserProfessionalExperienceUncheckedCreateWithoutUserInput> | UserProfessionalExperienceCreateWithoutUserInput[] | UserProfessionalExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfessionalExperienceCreateOrConnectWithoutUserInput | UserProfessionalExperienceCreateOrConnectWithoutUserInput[]
    upsert?: UserProfessionalExperienceUpsertWithWhereUniqueWithoutUserInput | UserProfessionalExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProfessionalExperienceCreateManyUserInputEnvelope
    set?: UserProfessionalExperienceWhereUniqueInput | UserProfessionalExperienceWhereUniqueInput[]
    disconnect?: UserProfessionalExperienceWhereUniqueInput | UserProfessionalExperienceWhereUniqueInput[]
    delete?: UserProfessionalExperienceWhereUniqueInput | UserProfessionalExperienceWhereUniqueInput[]
    connect?: UserProfessionalExperienceWhereUniqueInput | UserProfessionalExperienceWhereUniqueInput[]
    update?: UserProfessionalExperienceUpdateWithWhereUniqueWithoutUserInput | UserProfessionalExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProfessionalExperienceUpdateManyWithWhereWithoutUserInput | UserProfessionalExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProfessionalExperienceScalarWhereInput | UserProfessionalExperienceScalarWhereInput[]
  }

  export type UserAcademicInformationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAcademicInformationCreateWithoutUserInput, UserAcademicInformationUncheckedCreateWithoutUserInput> | UserAcademicInformationCreateWithoutUserInput[] | UserAcademicInformationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAcademicInformationCreateOrConnectWithoutUserInput | UserAcademicInformationCreateOrConnectWithoutUserInput[]
    upsert?: UserAcademicInformationUpsertWithWhereUniqueWithoutUserInput | UserAcademicInformationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAcademicInformationCreateManyUserInputEnvelope
    set?: UserAcademicInformationWhereUniqueInput | UserAcademicInformationWhereUniqueInput[]
    disconnect?: UserAcademicInformationWhereUniqueInput | UserAcademicInformationWhereUniqueInput[]
    delete?: UserAcademicInformationWhereUniqueInput | UserAcademicInformationWhereUniqueInput[]
    connect?: UserAcademicInformationWhereUniqueInput | UserAcademicInformationWhereUniqueInput[]
    update?: UserAcademicInformationUpdateWithWhereUniqueWithoutUserInput | UserAcademicInformationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAcademicInformationUpdateManyWithWhereWithoutUserInput | UserAcademicInformationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAcademicInformationScalarWhereInput | UserAcademicInformationScalarWhereInput[]
  }

  export type UserSkillUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput
    upsert?: UserSkillUpsertWithoutUserInput
    disconnect?: UserSkillWhereInput | boolean
    delete?: UserSkillWhereInput | boolean
    connect?: UserSkillWhereUniqueInput
    update?: XOR<XOR<UserSkillUpdateToOneWithWhereWithoutUserInput, UserSkillUpdateWithoutUserInput>, UserSkillUncheckedUpdateWithoutUserInput>
  }

  export type UserApplicationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserApplicationsCreateWithoutUserInput, UserApplicationsUncheckedCreateWithoutUserInput> | UserApplicationsCreateWithoutUserInput[] | UserApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApplicationsCreateOrConnectWithoutUserInput | UserApplicationsCreateOrConnectWithoutUserInput[]
    upsert?: UserApplicationsUpsertWithWhereUniqueWithoutUserInput | UserApplicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserApplicationsCreateManyUserInputEnvelope
    set?: UserApplicationsWhereUniqueInput | UserApplicationsWhereUniqueInput[]
    disconnect?: UserApplicationsWhereUniqueInput | UserApplicationsWhereUniqueInput[]
    delete?: UserApplicationsWhereUniqueInput | UserApplicationsWhereUniqueInput[]
    connect?: UserApplicationsWhereUniqueInput | UserApplicationsWhereUniqueInput[]
    update?: UserApplicationsUpdateWithWhereUniqueWithoutUserInput | UserApplicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserApplicationsUpdateManyWithWhereWithoutUserInput | UserApplicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserApplicationsScalarWhereInput | UserApplicationsScalarWhereInput[]
  }

  export type UserResumeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserResumeCreateWithoutUserInput, UserResumeUncheckedCreateWithoutUserInput> | UserResumeCreateWithoutUserInput[] | UserResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserResumeCreateOrConnectWithoutUserInput | UserResumeCreateOrConnectWithoutUserInput[]
    upsert?: UserResumeUpsertWithWhereUniqueWithoutUserInput | UserResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserResumeCreateManyUserInputEnvelope
    set?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    disconnect?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    delete?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    connect?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    update?: UserResumeUpdateWithWhereUniqueWithoutUserInput | UserResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserResumeUpdateManyWithWhereWithoutUserInput | UserResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserResumeScalarWhereInput | UserResumeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutUser_professional_experiencesInput = {
    create?: XOR<UserCreateWithoutUser_professional_experiencesInput, UserUncheckedCreateWithoutUser_professional_experiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_professional_experiencesInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUser_professional_experiencesNestedInput = {
    create?: XOR<UserCreateWithoutUser_professional_experiencesInput, UserUncheckedCreateWithoutUser_professional_experiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_professional_experiencesInput
    upsert?: UserUpsertWithoutUser_professional_experiencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_professional_experiencesInput, UserUpdateWithoutUser_professional_experiencesInput>, UserUncheckedUpdateWithoutUser_professional_experiencesInput>
  }

  export type UserCreateNestedOneWithoutUser_professional_summaryInput = {
    create?: XOR<UserCreateWithoutUser_professional_summaryInput, UserUncheckedCreateWithoutUser_professional_summaryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_professional_summaryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUser_professional_summaryNestedInput = {
    create?: XOR<UserCreateWithoutUser_professional_summaryInput, UserUncheckedCreateWithoutUser_professional_summaryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_professional_summaryInput
    upsert?: UserUpsertWithoutUser_professional_summaryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_professional_summaryInput, UserUpdateWithoutUser_professional_summaryInput>, UserUncheckedUpdateWithoutUser_professional_summaryInput>
  }

  export type UserCreateNestedOneWithoutUser_academic_informationInput = {
    create?: XOR<UserCreateWithoutUser_academic_informationInput, UserUncheckedCreateWithoutUser_academic_informationInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_academic_informationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUser_academic_informationNestedInput = {
    create?: XOR<UserCreateWithoutUser_academic_informationInput, UserUncheckedCreateWithoutUser_academic_informationInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_academic_informationInput
    upsert?: UserUpsertWithoutUser_academic_informationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_academic_informationInput, UserUpdateWithoutUser_academic_informationInput>, UserUncheckedUpdateWithoutUser_academic_informationInput>
  }

  export type UserCreateNestedOneWithoutUser_skillInput = {
    create?: XOR<UserCreateWithoutUser_skillInput, UserUncheckedCreateWithoutUser_skillInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_skillInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUser_skillNestedInput = {
    create?: XOR<UserCreateWithoutUser_skillInput, UserUncheckedCreateWithoutUser_skillInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_skillInput
    upsert?: UserUpsertWithoutUser_skillInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_skillInput, UserUpdateWithoutUser_skillInput>, UserUncheckedUpdateWithoutUser_skillInput>
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserResumeCreateNestedManyWithoutApplicationInput = {
    create?: XOR<UserResumeCreateWithoutApplicationInput, UserResumeUncheckedCreateWithoutApplicationInput> | UserResumeCreateWithoutApplicationInput[] | UserResumeUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: UserResumeCreateOrConnectWithoutApplicationInput | UserResumeCreateOrConnectWithoutApplicationInput[]
    createMany?: UserResumeCreateManyApplicationInputEnvelope
    connect?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
  }

  export type UserResumeUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<UserResumeCreateWithoutApplicationInput, UserResumeUncheckedCreateWithoutApplicationInput> | UserResumeCreateWithoutApplicationInput[] | UserResumeUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: UserResumeCreateOrConnectWithoutApplicationInput | UserResumeCreateOrConnectWithoutApplicationInput[]
    createMany?: UserResumeCreateManyApplicationInputEnvelope
    connect?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserResumeUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<UserResumeCreateWithoutApplicationInput, UserResumeUncheckedCreateWithoutApplicationInput> | UserResumeCreateWithoutApplicationInput[] | UserResumeUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: UserResumeCreateOrConnectWithoutApplicationInput | UserResumeCreateOrConnectWithoutApplicationInput[]
    upsert?: UserResumeUpsertWithWhereUniqueWithoutApplicationInput | UserResumeUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: UserResumeCreateManyApplicationInputEnvelope
    set?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    disconnect?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    delete?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    connect?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    update?: UserResumeUpdateWithWhereUniqueWithoutApplicationInput | UserResumeUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: UserResumeUpdateManyWithWhereWithoutApplicationInput | UserResumeUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: UserResumeScalarWhereInput | UserResumeScalarWhereInput[]
  }

  export type UserResumeUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<UserResumeCreateWithoutApplicationInput, UserResumeUncheckedCreateWithoutApplicationInput> | UserResumeCreateWithoutApplicationInput[] | UserResumeUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: UserResumeCreateOrConnectWithoutApplicationInput | UserResumeCreateOrConnectWithoutApplicationInput[]
    upsert?: UserResumeUpsertWithWhereUniqueWithoutApplicationInput | UserResumeUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: UserResumeCreateManyApplicationInputEnvelope
    set?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    disconnect?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    delete?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    connect?: UserResumeWhereUniqueInput | UserResumeWhereUniqueInput[]
    update?: UserResumeUpdateWithWhereUniqueWithoutApplicationInput | UserResumeUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: UserResumeUpdateManyWithWhereWithoutApplicationInput | UserResumeUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: UserResumeScalarWhereInput | UserResumeScalarWhereInput[]
  }

  export type UserApplicationsCreateNestedOneWithoutResumesInput = {
    create?: XOR<UserApplicationsCreateWithoutResumesInput, UserApplicationsUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserApplicationsCreateOrConnectWithoutResumesInput
    connect?: UserApplicationsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResumesInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    connect?: UserWhereUniqueInput
  }

  export type UserApplicationsUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<UserApplicationsCreateWithoutResumesInput, UserApplicationsUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserApplicationsCreateOrConnectWithoutResumesInput
    upsert?: UserApplicationsUpsertWithoutResumesInput
    connect?: UserApplicationsWhereUniqueInput
    update?: XOR<XOR<UserApplicationsUpdateToOneWithWhereWithoutResumesInput, UserApplicationsUpdateWithoutResumesInput>, UserApplicationsUncheckedUpdateWithoutResumesInput>
  }

  export type UserUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    upsert?: UserUpsertWithoutResumesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumesInput, UserUpdateWithoutResumesInput>, UserUncheckedUpdateWithoutResumesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfessionalSummaryCreateWithoutUserInput = {
    id?: string
    experience_years: number
    summary?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfessionalSummaryUncheckedCreateWithoutUserInput = {
    id?: string
    experience_years: number
    summary?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfessionalSummaryCreateOrConnectWithoutUserInput = {
    where: UserProfessionalSummaryWhereUniqueInput
    create: XOR<UserProfessionalSummaryCreateWithoutUserInput, UserProfessionalSummaryUncheckedCreateWithoutUserInput>
  }

  export type UserProfessionalExperienceCreateWithoutUserInput = {
    id?: string
    institution: string
    role: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    summary?: string | null
    version?: number
    at_university?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfessionalExperienceUncheckedCreateWithoutUserInput = {
    id?: string
    institution: string
    role: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    summary?: string | null
    version?: number
    at_university?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfessionalExperienceCreateOrConnectWithoutUserInput = {
    where: UserProfessionalExperienceWhereUniqueInput
    create: XOR<UserProfessionalExperienceCreateWithoutUserInput, UserProfessionalExperienceUncheckedCreateWithoutUserInput>
  }

  export type UserProfessionalExperienceCreateManyUserInputEnvelope = {
    data: UserProfessionalExperienceCreateManyUserInput | UserProfessionalExperienceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAcademicInformationCreateWithoutUserInput = {
    id?: string
    institution: string
    major: string
    start_date: Date | string
    end_date?: Date | string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAcademicInformationUncheckedCreateWithoutUserInput = {
    id?: string
    institution: string
    major: string
    start_date: Date | string
    end_date?: Date | string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAcademicInformationCreateOrConnectWithoutUserInput = {
    where: UserAcademicInformationWhereUniqueInput
    create: XOR<UserAcademicInformationCreateWithoutUserInput, UserAcademicInformationUncheckedCreateWithoutUserInput>
  }

  export type UserAcademicInformationCreateManyUserInputEnvelope = {
    data: UserAcademicInformationCreateManyUserInput | UserAcademicInformationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillCreateWithoutUserInput = {
    skills: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUncheckedCreateWithoutUserInput = {
    id?: number
    skills: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillCreateOrConnectWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
  }

  export type UserApplicationsCreateWithoutUserInput = {
    id?: string
    company_name: string
    role: string
    job_post: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: UserResumeCreateNestedManyWithoutApplicationInput
  }

  export type UserApplicationsUncheckedCreateWithoutUserInput = {
    id?: string
    company_name: string
    role: string
    job_post: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: UserResumeUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type UserApplicationsCreateOrConnectWithoutUserInput = {
    where: UserApplicationsWhereUniqueInput
    create: XOR<UserApplicationsCreateWithoutUserInput, UserApplicationsUncheckedCreateWithoutUserInput>
  }

  export type UserApplicationsCreateManyUserInputEnvelope = {
    data: UserApplicationsCreateManyUserInput | UserApplicationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserResumeCreateWithoutUserInput = {
    id?: string
    version?: number
    title?: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    application: UserApplicationsCreateNestedOneWithoutResumesInput
  }

  export type UserResumeUncheckedCreateWithoutUserInput = {
    id?: string
    applicationId: string
    version?: number
    title?: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserResumeCreateOrConnectWithoutUserInput = {
    where: UserResumeWhereUniqueInput
    create: XOR<UserResumeCreateWithoutUserInput, UserResumeUncheckedCreateWithoutUserInput>
  }

  export type UserResumeCreateManyUserInputEnvelope = {
    data: UserResumeCreateManyUserInput | UserResumeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type UserProfessionalSummaryUpsertWithoutUserInput = {
    update: XOR<UserProfessionalSummaryUpdateWithoutUserInput, UserProfessionalSummaryUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfessionalSummaryCreateWithoutUserInput, UserProfessionalSummaryUncheckedCreateWithoutUserInput>
    where?: UserProfessionalSummaryWhereInput
  }

  export type UserProfessionalSummaryUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfessionalSummaryWhereInput
    data: XOR<UserProfessionalSummaryUpdateWithoutUserInput, UserProfessionalSummaryUncheckedUpdateWithoutUserInput>
  }

  export type UserProfessionalSummaryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalSummaryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalExperienceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProfessionalExperienceWhereUniqueInput
    update: XOR<UserProfessionalExperienceUpdateWithoutUserInput, UserProfessionalExperienceUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfessionalExperienceCreateWithoutUserInput, UserProfessionalExperienceUncheckedCreateWithoutUserInput>
  }

  export type UserProfessionalExperienceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProfessionalExperienceWhereUniqueInput
    data: XOR<UserProfessionalExperienceUpdateWithoutUserInput, UserProfessionalExperienceUncheckedUpdateWithoutUserInput>
  }

  export type UserProfessionalExperienceUpdateManyWithWhereWithoutUserInput = {
    where: UserProfessionalExperienceScalarWhereInput
    data: XOR<UserProfessionalExperienceUpdateManyMutationInput, UserProfessionalExperienceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProfessionalExperienceScalarWhereInput = {
    AND?: UserProfessionalExperienceScalarWhereInput | UserProfessionalExperienceScalarWhereInput[]
    OR?: UserProfessionalExperienceScalarWhereInput[]
    NOT?: UserProfessionalExperienceScalarWhereInput | UserProfessionalExperienceScalarWhereInput[]
    id?: StringFilter<"UserProfessionalExperience"> | string
    institution?: StringFilter<"UserProfessionalExperience"> | string
    role?: StringFilter<"UserProfessionalExperience"> | string
    start_date?: DateTimeNullableFilter<"UserProfessionalExperience"> | Date | string | null
    end_date?: DateTimeNullableFilter<"UserProfessionalExperience"> | Date | string | null
    summary?: StringNullableFilter<"UserProfessionalExperience"> | string | null
    version?: IntFilter<"UserProfessionalExperience"> | number
    userId?: StringFilter<"UserProfessionalExperience"> | string
    at_university?: BoolFilter<"UserProfessionalExperience"> | boolean
    createdAt?: DateTimeFilter<"UserProfessionalExperience"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfessionalExperience"> | Date | string
  }

  export type UserAcademicInformationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAcademicInformationWhereUniqueInput
    update: XOR<UserAcademicInformationUpdateWithoutUserInput, UserAcademicInformationUncheckedUpdateWithoutUserInput>
    create: XOR<UserAcademicInformationCreateWithoutUserInput, UserAcademicInformationUncheckedCreateWithoutUserInput>
  }

  export type UserAcademicInformationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAcademicInformationWhereUniqueInput
    data: XOR<UserAcademicInformationUpdateWithoutUserInput, UserAcademicInformationUncheckedUpdateWithoutUserInput>
  }

  export type UserAcademicInformationUpdateManyWithWhereWithoutUserInput = {
    where: UserAcademicInformationScalarWhereInput
    data: XOR<UserAcademicInformationUpdateManyMutationInput, UserAcademicInformationUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAcademicInformationScalarWhereInput = {
    AND?: UserAcademicInformationScalarWhereInput | UserAcademicInformationScalarWhereInput[]
    OR?: UserAcademicInformationScalarWhereInput[]
    NOT?: UserAcademicInformationScalarWhereInput | UserAcademicInformationScalarWhereInput[]
    id?: StringFilter<"UserAcademicInformation"> | string
    institution?: StringFilter<"UserAcademicInformation"> | string
    major?: StringFilter<"UserAcademicInformation"> | string
    start_date?: DateTimeFilter<"UserAcademicInformation"> | Date | string
    end_date?: DateTimeNullableFilter<"UserAcademicInformation"> | Date | string | null
    summary?: StringNullableFilter<"UserAcademicInformation"> | string | null
    userId?: StringFilter<"UserAcademicInformation"> | string
    createdAt?: DateTimeFilter<"UserAcademicInformation"> | Date | string
    updatedAt?: DateTimeFilter<"UserAcademicInformation"> | Date | string
  }

  export type UserSkillUpsertWithoutUserInput = {
    update: XOR<UserSkillUpdateWithoutUserInput, UserSkillUncheckedUpdateWithoutUserInput>
    create: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
    where?: UserSkillWhereInput
  }

  export type UserSkillUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSkillWhereInput
    data: XOR<UserSkillUpdateWithoutUserInput, UserSkillUncheckedUpdateWithoutUserInput>
  }

  export type UserSkillUpdateWithoutUserInput = {
    skills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    skills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApplicationsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserApplicationsWhereUniqueInput
    update: XOR<UserApplicationsUpdateWithoutUserInput, UserApplicationsUncheckedUpdateWithoutUserInput>
    create: XOR<UserApplicationsCreateWithoutUserInput, UserApplicationsUncheckedCreateWithoutUserInput>
  }

  export type UserApplicationsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserApplicationsWhereUniqueInput
    data: XOR<UserApplicationsUpdateWithoutUserInput, UserApplicationsUncheckedUpdateWithoutUserInput>
  }

  export type UserApplicationsUpdateManyWithWhereWithoutUserInput = {
    where: UserApplicationsScalarWhereInput
    data: XOR<UserApplicationsUpdateManyMutationInput, UserApplicationsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserApplicationsScalarWhereInput = {
    AND?: UserApplicationsScalarWhereInput | UserApplicationsScalarWhereInput[]
    OR?: UserApplicationsScalarWhereInput[]
    NOT?: UserApplicationsScalarWhereInput | UserApplicationsScalarWhereInput[]
    id?: StringFilter<"UserApplications"> | string
    company_name?: StringFilter<"UserApplications"> | string
    role?: StringFilter<"UserApplications"> | string
    job_post?: StringFilter<"UserApplications"> | string
    userId?: StringFilter<"UserApplications"> | string
    createdAt?: DateTimeFilter<"UserApplications"> | Date | string
    updatedAt?: DateTimeFilter<"UserApplications"> | Date | string
  }

  export type UserResumeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserResumeWhereUniqueInput
    update: XOR<UserResumeUpdateWithoutUserInput, UserResumeUncheckedUpdateWithoutUserInput>
    create: XOR<UserResumeCreateWithoutUserInput, UserResumeUncheckedCreateWithoutUserInput>
  }

  export type UserResumeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserResumeWhereUniqueInput
    data: XOR<UserResumeUpdateWithoutUserInput, UserResumeUncheckedUpdateWithoutUserInput>
  }

  export type UserResumeUpdateManyWithWhereWithoutUserInput = {
    where: UserResumeScalarWhereInput
    data: XOR<UserResumeUpdateManyMutationInput, UserResumeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserResumeScalarWhereInput = {
    AND?: UserResumeScalarWhereInput | UserResumeScalarWhereInput[]
    OR?: UserResumeScalarWhereInput[]
    NOT?: UserResumeScalarWhereInput | UserResumeScalarWhereInput[]
    id?: StringFilter<"UserResume"> | string
    applicationId?: StringFilter<"UserResume"> | string
    userId?: StringFilter<"UserResume"> | string
    version?: IntFilter<"UserResume"> | number
    title?: StringFilter<"UserResume"> | string
    content?: StringFilter<"UserResume"> | string
    isActive?: BoolFilter<"UserResume"> | boolean
    createdAt?: DateTimeFilter<"UserResume"> | Date | string
    updatedAt?: DateTimeFilter<"UserResume"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationCreateNestedManyWithoutUserInput
    user_skill?: UserSkillCreateNestedOneWithoutUserInput
    applications?: UserApplicationsCreateNestedManyWithoutUserInput
    resumes?: UserResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationUncheckedCreateNestedManyWithoutUserInput
    user_skill?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    applications?: UserApplicationsUncheckedCreateNestedManyWithoutUserInput
    resumes?: UserResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUncheckedUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUncheckedUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationCreateNestedManyWithoutUserInput
    user_skill?: UserSkillCreateNestedOneWithoutUserInput
    applications?: UserApplicationsCreateNestedManyWithoutUserInput
    resumes?: UserResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationUncheckedCreateNestedManyWithoutUserInput
    user_skill?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    applications?: UserApplicationsUncheckedCreateNestedManyWithoutUserInput
    resumes?: UserResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUncheckedUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUncheckedUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUser_professional_experiencesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_academic_information?: UserAcademicInformationCreateNestedManyWithoutUserInput
    user_skill?: UserSkillCreateNestedOneWithoutUserInput
    applications?: UserApplicationsCreateNestedManyWithoutUserInput
    resumes?: UserResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_professional_experiencesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_academic_information?: UserAcademicInformationUncheckedCreateNestedManyWithoutUserInput
    user_skill?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    applications?: UserApplicationsUncheckedCreateNestedManyWithoutUserInput
    resumes?: UserResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_professional_experiencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_professional_experiencesInput, UserUncheckedCreateWithoutUser_professional_experiencesInput>
  }

  export type UserUpsertWithoutUser_professional_experiencesInput = {
    update: XOR<UserUpdateWithoutUser_professional_experiencesInput, UserUncheckedUpdateWithoutUser_professional_experiencesInput>
    create: XOR<UserCreateWithoutUser_professional_experiencesInput, UserUncheckedCreateWithoutUser_professional_experiencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_professional_experiencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_professional_experiencesInput, UserUncheckedUpdateWithoutUser_professional_experiencesInput>
  }

  export type UserUpdateWithoutUser_professional_experiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_professional_experiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUncheckedUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUncheckedUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUser_professional_summaryInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationCreateNestedManyWithoutUserInput
    user_skill?: UserSkillCreateNestedOneWithoutUserInput
    applications?: UserApplicationsCreateNestedManyWithoutUserInput
    resumes?: UserResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_professional_summaryInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationUncheckedCreateNestedManyWithoutUserInput
    user_skill?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    applications?: UserApplicationsUncheckedCreateNestedManyWithoutUserInput
    resumes?: UserResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_professional_summaryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_professional_summaryInput, UserUncheckedCreateWithoutUser_professional_summaryInput>
  }

  export type UserUpsertWithoutUser_professional_summaryInput = {
    update: XOR<UserUpdateWithoutUser_professional_summaryInput, UserUncheckedUpdateWithoutUser_professional_summaryInput>
    create: XOR<UserCreateWithoutUser_professional_summaryInput, UserUncheckedCreateWithoutUser_professional_summaryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_professional_summaryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_professional_summaryInput, UserUncheckedUpdateWithoutUser_professional_summaryInput>
  }

  export type UserUpdateWithoutUser_professional_summaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_professional_summaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUncheckedUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUncheckedUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUser_academic_informationInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceCreateNestedManyWithoutUserInput
    user_skill?: UserSkillCreateNestedOneWithoutUserInput
    applications?: UserApplicationsCreateNestedManyWithoutUserInput
    resumes?: UserResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_academic_informationInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedCreateNestedManyWithoutUserInput
    user_skill?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    applications?: UserApplicationsUncheckedCreateNestedManyWithoutUserInput
    resumes?: UserResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_academic_informationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_academic_informationInput, UserUncheckedCreateWithoutUser_academic_informationInput>
  }

  export type UserUpsertWithoutUser_academic_informationInput = {
    update: XOR<UserUpdateWithoutUser_academic_informationInput, UserUncheckedUpdateWithoutUser_academic_informationInput>
    create: XOR<UserCreateWithoutUser_academic_informationInput, UserUncheckedCreateWithoutUser_academic_informationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_academic_informationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_academic_informationInput, UserUncheckedUpdateWithoutUser_academic_informationInput>
  }

  export type UserUpdateWithoutUser_academic_informationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_academic_informationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUncheckedUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUser_skillInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationCreateNestedManyWithoutUserInput
    applications?: UserApplicationsCreateNestedManyWithoutUserInput
    resumes?: UserResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_skillInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationUncheckedCreateNestedManyWithoutUserInput
    applications?: UserApplicationsUncheckedCreateNestedManyWithoutUserInput
    resumes?: UserResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_skillInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_skillInput, UserUncheckedCreateWithoutUser_skillInput>
  }

  export type UserUpsertWithoutUser_skillInput = {
    update: XOR<UserUpdateWithoutUser_skillInput, UserUncheckedUpdateWithoutUser_skillInput>
    create: XOR<UserCreateWithoutUser_skillInput, UserUncheckedCreateWithoutUser_skillInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_skillInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_skillInput, UserUncheckedUpdateWithoutUser_skillInput>
  }

  export type UserUpdateWithoutUser_skillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUpdateManyWithoutUserNestedInput
    applications?: UserApplicationsUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_skillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUncheckedUpdateManyWithoutUserNestedInput
    applications?: UserApplicationsUncheckedUpdateManyWithoutUserNestedInput
    resumes?: UserResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutApplicationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationCreateNestedManyWithoutUserInput
    user_skill?: UserSkillCreateNestedOneWithoutUserInput
    resumes?: UserResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationUncheckedCreateNestedManyWithoutUserInput
    user_skill?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    resumes?: UserResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type UserResumeCreateWithoutApplicationInput = {
    id?: string
    version?: number
    title?: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
  }

  export type UserResumeUncheckedCreateWithoutApplicationInput = {
    id?: string
    userId: string
    version?: number
    title?: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserResumeCreateOrConnectWithoutApplicationInput = {
    where: UserResumeWhereUniqueInput
    create: XOR<UserResumeCreateWithoutApplicationInput, UserResumeUncheckedCreateWithoutApplicationInput>
  }

  export type UserResumeCreateManyApplicationInputEnvelope = {
    data: UserResumeCreateManyApplicationInput | UserResumeCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUpdateOneWithoutUserNestedInput
    resumes?: UserResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUncheckedUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    resumes?: UserResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserResumeUpsertWithWhereUniqueWithoutApplicationInput = {
    where: UserResumeWhereUniqueInput
    update: XOR<UserResumeUpdateWithoutApplicationInput, UserResumeUncheckedUpdateWithoutApplicationInput>
    create: XOR<UserResumeCreateWithoutApplicationInput, UserResumeUncheckedCreateWithoutApplicationInput>
  }

  export type UserResumeUpdateWithWhereUniqueWithoutApplicationInput = {
    where: UserResumeWhereUniqueInput
    data: XOR<UserResumeUpdateWithoutApplicationInput, UserResumeUncheckedUpdateWithoutApplicationInput>
  }

  export type UserResumeUpdateManyWithWhereWithoutApplicationInput = {
    where: UserResumeScalarWhereInput
    data: XOR<UserResumeUpdateManyMutationInput, UserResumeUncheckedUpdateManyWithoutApplicationInput>
  }

  export type UserApplicationsCreateWithoutResumesInput = {
    id?: string
    company_name: string
    role: string
    job_post: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
  }

  export type UserApplicationsUncheckedCreateWithoutResumesInput = {
    id?: string
    company_name: string
    role: string
    job_post: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserApplicationsCreateOrConnectWithoutResumesInput = {
    where: UserApplicationsWhereUniqueInput
    create: XOR<UserApplicationsCreateWithoutResumesInput, UserApplicationsUncheckedCreateWithoutResumesInput>
  }

  export type UserCreateWithoutResumesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationCreateNestedManyWithoutUserInput
    user_skill?: UserSkillCreateNestedOneWithoutUserInput
    applications?: UserApplicationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResumesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    onboarded?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    user_professional_summary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedCreateNestedManyWithoutUserInput
    user_academic_information?: UserAcademicInformationUncheckedCreateNestedManyWithoutUserInput
    user_skill?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    applications?: UserApplicationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResumesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
  }

  export type UserApplicationsUpsertWithoutResumesInput = {
    update: XOR<UserApplicationsUpdateWithoutResumesInput, UserApplicationsUncheckedUpdateWithoutResumesInput>
    create: XOR<UserApplicationsCreateWithoutResumesInput, UserApplicationsUncheckedCreateWithoutResumesInput>
    where?: UserApplicationsWhereInput
  }

  export type UserApplicationsUpdateToOneWithWhereWithoutResumesInput = {
    where?: UserApplicationsWhereInput
    data: XOR<UserApplicationsUpdateWithoutResumesInput, UserApplicationsUncheckedUpdateWithoutResumesInput>
  }

  export type UserApplicationsUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_post?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type UserApplicationsUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_post?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutResumesInput = {
    update: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
  }

  export type UserUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    user_professional_summary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_professional_experiences?: UserProfessionalExperienceUncheckedUpdateManyWithoutUserNestedInput
    user_academic_information?: UserAcademicInformationUncheckedUpdateManyWithoutUserNestedInput
    user_skill?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    applications?: UserApplicationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfessionalExperienceCreateManyUserInput = {
    id?: string
    institution: string
    role: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    summary?: string | null
    version?: number
    at_university?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAcademicInformationCreateManyUserInput = {
    id?: string
    institution: string
    major: string
    start_date: Date | string
    end_date?: Date | string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserApplicationsCreateManyUserInput = {
    id?: string
    company_name: string
    role: string
    job_post: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserResumeCreateManyUserInput = {
    id?: string
    applicationId: string
    version?: number
    title?: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalExperienceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    at_university?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalExperienceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    at_university?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalExperienceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    at_university?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAcademicInformationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAcademicInformationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAcademicInformationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApplicationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_post?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: UserResumeUpdateManyWithoutApplicationNestedInput
  }

  export type UserApplicationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_post?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: UserResumeUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type UserApplicationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_post?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: UserApplicationsUpdateOneRequiredWithoutResumesNestedInput
  }

  export type UserResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResumeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResumeCreateManyApplicationInput = {
    id?: string
    userId: string
    version?: number
    title?: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserResumeUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
  }

  export type UserResumeUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResumeUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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