
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
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model Onboard
 * 
 */
export type Onboard = $Result.DefaultSelection<Prisma.$OnboardPayload>
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
 * Model UserCertification
 * 
 */
export type UserCertification = $Result.DefaultSelection<Prisma.$UserCertificationPayload>
/**
 * Model UserEducation
 * 
 */
export type UserEducation = $Result.DefaultSelection<Prisma.$UserEducationPayload>
/**
 * Model UserLocationType
 * 
 */
export type UserLocationType = $Result.DefaultSelection<Prisma.$UserLocationTypePayload>
/**
 * Model UserProfessionalSummary
 * 
 */
export type UserProfessionalSummary = $Result.DefaultSelection<Prisma.$UserProfessionalSummaryPayload>
/**
 * Model UserSkill
 * 
 */
export type UserSkill = $Result.DefaultSelection<Prisma.$UserSkillPayload>
/**
 * Model UserWorkExperience
 * 
 */
export type UserWorkExperience = $Result.DefaultSelection<Prisma.$UserWorkExperiencePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Applications
 * const applications = await prisma.application.findMany()
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
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
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
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.onboard`: Exposes CRUD operations for the **Onboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Onboards
    * const onboards = await prisma.onboard.findMany()
    * ```
    */
  get onboard(): Prisma.OnboardDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.userCertification`: Exposes CRUD operations for the **UserCertification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCertifications
    * const userCertifications = await prisma.userCertification.findMany()
    * ```
    */
  get userCertification(): Prisma.UserCertificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userEducation`: Exposes CRUD operations for the **UserEducation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserEducations
    * const userEducations = await prisma.userEducation.findMany()
    * ```
    */
  get userEducation(): Prisma.UserEducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLocationType`: Exposes CRUD operations for the **UserLocationType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLocationTypes
    * const userLocationTypes = await prisma.userLocationType.findMany()
    * ```
    */
  get userLocationType(): Prisma.UserLocationTypeDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.userSkill`: Exposes CRUD operations for the **UserSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkills
    * const userSkills = await prisma.userSkill.findMany()
    * ```
    */
  get userSkill(): Prisma.UserSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userWorkExperience`: Exposes CRUD operations for the **UserWorkExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserWorkExperiences
    * const userWorkExperiences = await prisma.userWorkExperience.findMany()
    * ```
    */
  get userWorkExperience(): Prisma.UserWorkExperienceDelegate<ExtArgs, ClientOptions>;
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
    Application: 'Application',
    Onboard: 'Onboard',
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    UserCertification: 'UserCertification',
    UserEducation: 'UserEducation',
    UserLocationType: 'UserLocationType',
    UserProfessionalSummary: 'UserProfessionalSummary',
    UserSkill: 'UserSkill',
    UserWorkExperience: 'UserWorkExperience'
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
      modelProps: "application" | "onboard" | "user" | "session" | "account" | "verification" | "userCertification" | "userEducation" | "userLocationType" | "userProfessionalSummary" | "userSkill" | "userWorkExperience"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      Onboard: {
        payload: Prisma.$OnboardPayload<ExtArgs>
        fields: Prisma.OnboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OnboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OnboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardPayload>
          }
          findFirst: {
            args: Prisma.OnboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OnboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardPayload>
          }
          findMany: {
            args: Prisma.OnboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardPayload>[]
          }
          create: {
            args: Prisma.OnboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardPayload>
          }
          createMany: {
            args: Prisma.OnboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OnboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardPayload>[]
          }
          delete: {
            args: Prisma.OnboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardPayload>
          }
          update: {
            args: Prisma.OnboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardPayload>
          }
          deleteMany: {
            args: Prisma.OnboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OnboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OnboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardPayload>[]
          }
          upsert: {
            args: Prisma.OnboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardPayload>
          }
          aggregate: {
            args: Prisma.OnboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOnboard>
          }
          groupBy: {
            args: Prisma.OnboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<OnboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.OnboardCountArgs<ExtArgs>
            result: $Utils.Optional<OnboardCountAggregateOutputType> | number
          }
        }
      }
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
      UserCertification: {
        payload: Prisma.$UserCertificationPayload<ExtArgs>
        fields: Prisma.UserCertificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCertificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCertificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCertificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCertificationPayload>
          }
          findFirst: {
            args: Prisma.UserCertificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCertificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCertificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCertificationPayload>
          }
          findMany: {
            args: Prisma.UserCertificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCertificationPayload>[]
          }
          create: {
            args: Prisma.UserCertificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCertificationPayload>
          }
          createMany: {
            args: Prisma.UserCertificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCertificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCertificationPayload>[]
          }
          delete: {
            args: Prisma.UserCertificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCertificationPayload>
          }
          update: {
            args: Prisma.UserCertificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCertificationPayload>
          }
          deleteMany: {
            args: Prisma.UserCertificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCertificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCertificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCertificationPayload>[]
          }
          upsert: {
            args: Prisma.UserCertificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCertificationPayload>
          }
          aggregate: {
            args: Prisma.UserCertificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCertification>
          }
          groupBy: {
            args: Prisma.UserCertificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCertificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCertificationCountArgs<ExtArgs>
            result: $Utils.Optional<UserCertificationCountAggregateOutputType> | number
          }
        }
      }
      UserEducation: {
        payload: Prisma.$UserEducationPayload<ExtArgs>
        fields: Prisma.UserEducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserEducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserEducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>
          }
          findFirst: {
            args: Prisma.UserEducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserEducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>
          }
          findMany: {
            args: Prisma.UserEducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>[]
          }
          create: {
            args: Prisma.UserEducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>
          }
          createMany: {
            args: Prisma.UserEducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserEducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>[]
          }
          delete: {
            args: Prisma.UserEducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>
          }
          update: {
            args: Prisma.UserEducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>
          }
          deleteMany: {
            args: Prisma.UserEducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserEducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserEducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>[]
          }
          upsert: {
            args: Prisma.UserEducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>
          }
          aggregate: {
            args: Prisma.UserEducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserEducation>
          }
          groupBy: {
            args: Prisma.UserEducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserEducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserEducationCountArgs<ExtArgs>
            result: $Utils.Optional<UserEducationCountAggregateOutputType> | number
          }
        }
      }
      UserLocationType: {
        payload: Prisma.$UserLocationTypePayload<ExtArgs>
        fields: Prisma.UserLocationTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLocationTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLocationTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationTypePayload>
          }
          findFirst: {
            args: Prisma.UserLocationTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLocationTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationTypePayload>
          }
          findMany: {
            args: Prisma.UserLocationTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationTypePayload>[]
          }
          create: {
            args: Prisma.UserLocationTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationTypePayload>
          }
          createMany: {
            args: Prisma.UserLocationTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLocationTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationTypePayload>[]
          }
          delete: {
            args: Prisma.UserLocationTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationTypePayload>
          }
          update: {
            args: Prisma.UserLocationTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationTypePayload>
          }
          deleteMany: {
            args: Prisma.UserLocationTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLocationTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLocationTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationTypePayload>[]
          }
          upsert: {
            args: Prisma.UserLocationTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationTypePayload>
          }
          aggregate: {
            args: Prisma.UserLocationTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLocationType>
          }
          groupBy: {
            args: Prisma.UserLocationTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLocationTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLocationTypeCountArgs<ExtArgs>
            result: $Utils.Optional<UserLocationTypeCountAggregateOutputType> | number
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
      UserWorkExperience: {
        payload: Prisma.$UserWorkExperiencePayload<ExtArgs>
        fields: Prisma.UserWorkExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserWorkExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserWorkExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkExperiencePayload>
          }
          findFirst: {
            args: Prisma.UserWorkExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserWorkExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkExperiencePayload>
          }
          findMany: {
            args: Prisma.UserWorkExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkExperiencePayload>[]
          }
          create: {
            args: Prisma.UserWorkExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkExperiencePayload>
          }
          createMany: {
            args: Prisma.UserWorkExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserWorkExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkExperiencePayload>[]
          }
          delete: {
            args: Prisma.UserWorkExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkExperiencePayload>
          }
          update: {
            args: Prisma.UserWorkExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkExperiencePayload>
          }
          deleteMany: {
            args: Prisma.UserWorkExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserWorkExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserWorkExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkExperiencePayload>[]
          }
          upsert: {
            args: Prisma.UserWorkExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWorkExperiencePayload>
          }
          aggregate: {
            args: Prisma.UserWorkExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserWorkExperience>
          }
          groupBy: {
            args: Prisma.UserWorkExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserWorkExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserWorkExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<UserWorkExperienceCountAggregateOutputType> | number
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
    application?: ApplicationOmit
    onboard?: OnboardOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    userCertification?: UserCertificationOmit
    userEducation?: UserEducationOmit
    userLocationType?: UserLocationTypeOmit
    userProfessionalSummary?: UserProfessionalSummaryOmit
    userSkill?: UserSkillOmit
    userWorkExperience?: UserWorkExperienceOmit
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
    accounts: number
    sessions: number
    applications: number
    UserCertification: number
    user_educations: number
    UserWorkExperience: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
    UserCertification?: boolean | UserCountOutputTypeCountUserCertificationArgs
    user_educations?: boolean | UserCountOutputTypeCountUser_educationsArgs
    UserWorkExperience?: boolean | UserCountOutputTypeCountUserWorkExperienceArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
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
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserCertificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCertificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_educationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEducationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserWorkExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWorkExperienceWhereInput
  }


  /**
   * Count Type UserLocationTypeCountOutputType
   */

  export type UserLocationTypeCountOutputType = {
    users: number
  }

  export type UserLocationTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserLocationTypeCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserLocationTypeCountOutputType without action
   */
  export type UserLocationTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationTypeCountOutputType
     */
    select?: UserLocationTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserLocationTypeCountOutputType without action
   */
  export type UserLocationTypeCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    company_name: string | null
    role: string | null
    userId: string | null
    job_description: string | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    company_name: string | null
    role: string | null
    userId: string | null
    job_description: string | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    company_name: number
    role: number
    userId: number
    job_description: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    company_name?: true
    role?: true
    userId?: true
    job_description?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    company_name?: true
    role?: true
    userId?: true
    job_description?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    company_name?: true
    role?: true
    userId?: true
    job_description?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    company_name: string
    role: string
    userId: string
    job_description: string | null
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    role?: boolean
    userId?: boolean
    job_description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    role?: boolean
    userId?: boolean
    job_description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    role?: boolean
    userId?: boolean
    job_description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    company_name?: boolean
    role?: boolean
    userId?: boolean
    job_description?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_name" | "role" | "userId" | "job_description", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_name: string
      role: string
      userId: string
      job_description: string | null
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly company_name: FieldRef<"Application", 'String'>
    readonly role: FieldRef<"Application", 'String'>
    readonly userId: FieldRef<"Application", 'String'>
    readonly job_description: FieldRef<"Application", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Onboard
   */

  export type AggregateOnboard = {
    _count: OnboardCountAggregateOutputType | null
    _min: OnboardMinAggregateOutputType | null
    _max: OnboardMaxAggregateOutputType | null
  }

  export type OnboardMinAggregateOutputType = {
    id: string | null
    onboarded: boolean | null
    userId: string | null
  }

  export type OnboardMaxAggregateOutputType = {
    id: string | null
    onboarded: boolean | null
    userId: string | null
  }

  export type OnboardCountAggregateOutputType = {
    id: number
    onboarded: number
    userId: number
    _all: number
  }


  export type OnboardMinAggregateInputType = {
    id?: true
    onboarded?: true
    userId?: true
  }

  export type OnboardMaxAggregateInputType = {
    id?: true
    onboarded?: true
    userId?: true
  }

  export type OnboardCountAggregateInputType = {
    id?: true
    onboarded?: true
    userId?: true
    _all?: true
  }

  export type OnboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Onboard to aggregate.
     */
    where?: OnboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Onboards to fetch.
     */
    orderBy?: OnboardOrderByWithRelationInput | OnboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OnboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Onboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Onboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Onboards
    **/
    _count?: true | OnboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OnboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OnboardMaxAggregateInputType
  }

  export type GetOnboardAggregateType<T extends OnboardAggregateArgs> = {
        [P in keyof T & keyof AggregateOnboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOnboard[P]>
      : GetScalarType<T[P], AggregateOnboard[P]>
  }




  export type OnboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnboardWhereInput
    orderBy?: OnboardOrderByWithAggregationInput | OnboardOrderByWithAggregationInput[]
    by: OnboardScalarFieldEnum[] | OnboardScalarFieldEnum
    having?: OnboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OnboardCountAggregateInputType | true
    _min?: OnboardMinAggregateInputType
    _max?: OnboardMaxAggregateInputType
  }

  export type OnboardGroupByOutputType = {
    id: string
    onboarded: boolean
    userId: string
    _count: OnboardCountAggregateOutputType | null
    _min: OnboardMinAggregateOutputType | null
    _max: OnboardMaxAggregateOutputType | null
  }

  type GetOnboardGroupByPayload<T extends OnboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OnboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OnboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OnboardGroupByOutputType[P]>
            : GetScalarType<T[P], OnboardGroupByOutputType[P]>
        }
      >
    >


  export type OnboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    onboarded?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onboard"]>

  export type OnboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    onboarded?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onboard"]>

  export type OnboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    onboarded?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onboard"]>

  export type OnboardSelectScalar = {
    id?: boolean
    onboarded?: boolean
    userId?: boolean
  }

  export type OnboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "onboarded" | "userId", ExtArgs["result"]["onboard"]>
  export type OnboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OnboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OnboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OnboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Onboard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      onboarded: boolean
      userId: string
    }, ExtArgs["result"]["onboard"]>
    composites: {}
  }

  type OnboardGetPayload<S extends boolean | null | undefined | OnboardDefaultArgs> = $Result.GetResult<Prisma.$OnboardPayload, S>

  type OnboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OnboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OnboardCountAggregateInputType | true
    }

  export interface OnboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Onboard'], meta: { name: 'Onboard' } }
    /**
     * Find zero or one Onboard that matches the filter.
     * @param {OnboardFindUniqueArgs} args - Arguments to find a Onboard
     * @example
     * // Get one Onboard
     * const onboard = await prisma.onboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OnboardFindUniqueArgs>(args: SelectSubset<T, OnboardFindUniqueArgs<ExtArgs>>): Prisma__OnboardClient<$Result.GetResult<Prisma.$OnboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Onboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OnboardFindUniqueOrThrowArgs} args - Arguments to find a Onboard
     * @example
     * // Get one Onboard
     * const onboard = await prisma.onboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OnboardFindUniqueOrThrowArgs>(args: SelectSubset<T, OnboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OnboardClient<$Result.GetResult<Prisma.$OnboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Onboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardFindFirstArgs} args - Arguments to find a Onboard
     * @example
     * // Get one Onboard
     * const onboard = await prisma.onboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OnboardFindFirstArgs>(args?: SelectSubset<T, OnboardFindFirstArgs<ExtArgs>>): Prisma__OnboardClient<$Result.GetResult<Prisma.$OnboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Onboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardFindFirstOrThrowArgs} args - Arguments to find a Onboard
     * @example
     * // Get one Onboard
     * const onboard = await prisma.onboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OnboardFindFirstOrThrowArgs>(args?: SelectSubset<T, OnboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__OnboardClient<$Result.GetResult<Prisma.$OnboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Onboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Onboards
     * const onboards = await prisma.onboard.findMany()
     * 
     * // Get first 10 Onboards
     * const onboards = await prisma.onboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const onboardWithIdOnly = await prisma.onboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OnboardFindManyArgs>(args?: SelectSubset<T, OnboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Onboard.
     * @param {OnboardCreateArgs} args - Arguments to create a Onboard.
     * @example
     * // Create one Onboard
     * const Onboard = await prisma.onboard.create({
     *   data: {
     *     // ... data to create a Onboard
     *   }
     * })
     * 
     */
    create<T extends OnboardCreateArgs>(args: SelectSubset<T, OnboardCreateArgs<ExtArgs>>): Prisma__OnboardClient<$Result.GetResult<Prisma.$OnboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Onboards.
     * @param {OnboardCreateManyArgs} args - Arguments to create many Onboards.
     * @example
     * // Create many Onboards
     * const onboard = await prisma.onboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OnboardCreateManyArgs>(args?: SelectSubset<T, OnboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Onboards and returns the data saved in the database.
     * @param {OnboardCreateManyAndReturnArgs} args - Arguments to create many Onboards.
     * @example
     * // Create many Onboards
     * const onboard = await prisma.onboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Onboards and only return the `id`
     * const onboardWithIdOnly = await prisma.onboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OnboardCreateManyAndReturnArgs>(args?: SelectSubset<T, OnboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Onboard.
     * @param {OnboardDeleteArgs} args - Arguments to delete one Onboard.
     * @example
     * // Delete one Onboard
     * const Onboard = await prisma.onboard.delete({
     *   where: {
     *     // ... filter to delete one Onboard
     *   }
     * })
     * 
     */
    delete<T extends OnboardDeleteArgs>(args: SelectSubset<T, OnboardDeleteArgs<ExtArgs>>): Prisma__OnboardClient<$Result.GetResult<Prisma.$OnboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Onboard.
     * @param {OnboardUpdateArgs} args - Arguments to update one Onboard.
     * @example
     * // Update one Onboard
     * const onboard = await prisma.onboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OnboardUpdateArgs>(args: SelectSubset<T, OnboardUpdateArgs<ExtArgs>>): Prisma__OnboardClient<$Result.GetResult<Prisma.$OnboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Onboards.
     * @param {OnboardDeleteManyArgs} args - Arguments to filter Onboards to delete.
     * @example
     * // Delete a few Onboards
     * const { count } = await prisma.onboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OnboardDeleteManyArgs>(args?: SelectSubset<T, OnboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Onboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Onboards
     * const onboard = await prisma.onboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OnboardUpdateManyArgs>(args: SelectSubset<T, OnboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Onboards and returns the data updated in the database.
     * @param {OnboardUpdateManyAndReturnArgs} args - Arguments to update many Onboards.
     * @example
     * // Update many Onboards
     * const onboard = await prisma.onboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Onboards and only return the `id`
     * const onboardWithIdOnly = await prisma.onboard.updateManyAndReturn({
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
    updateManyAndReturn<T extends OnboardUpdateManyAndReturnArgs>(args: SelectSubset<T, OnboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Onboard.
     * @param {OnboardUpsertArgs} args - Arguments to update or create a Onboard.
     * @example
     * // Update or create a Onboard
     * const onboard = await prisma.onboard.upsert({
     *   create: {
     *     // ... data to create a Onboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Onboard we want to update
     *   }
     * })
     */
    upsert<T extends OnboardUpsertArgs>(args: SelectSubset<T, OnboardUpsertArgs<ExtArgs>>): Prisma__OnboardClient<$Result.GetResult<Prisma.$OnboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Onboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardCountArgs} args - Arguments to filter Onboards to count.
     * @example
     * // Count the number of Onboards
     * const count = await prisma.onboard.count({
     *   where: {
     *     // ... the filter for the Onboards we want to count
     *   }
     * })
    **/
    count<T extends OnboardCountArgs>(
      args?: Subset<T, OnboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OnboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Onboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OnboardAggregateArgs>(args: Subset<T, OnboardAggregateArgs>): Prisma.PrismaPromise<GetOnboardAggregateType<T>>

    /**
     * Group by Onboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardGroupByArgs} args - Group by arguments.
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
      T extends OnboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OnboardGroupByArgs['orderBy'] }
        : { orderBy?: OnboardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OnboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Onboard model
   */
  readonly fields: OnboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Onboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OnboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Onboard model
   */
  interface OnboardFieldRefs {
    readonly id: FieldRef<"Onboard", 'String'>
    readonly onboarded: FieldRef<"Onboard", 'Boolean'>
    readonly userId: FieldRef<"Onboard", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Onboard findUnique
   */
  export type OnboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboard
     */
    select?: OnboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboard
     */
    omit?: OnboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardInclude<ExtArgs> | null
    /**
     * Filter, which Onboard to fetch.
     */
    where: OnboardWhereUniqueInput
  }

  /**
   * Onboard findUniqueOrThrow
   */
  export type OnboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboard
     */
    select?: OnboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboard
     */
    omit?: OnboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardInclude<ExtArgs> | null
    /**
     * Filter, which Onboard to fetch.
     */
    where: OnboardWhereUniqueInput
  }

  /**
   * Onboard findFirst
   */
  export type OnboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboard
     */
    select?: OnboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboard
     */
    omit?: OnboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardInclude<ExtArgs> | null
    /**
     * Filter, which Onboard to fetch.
     */
    where?: OnboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Onboards to fetch.
     */
    orderBy?: OnboardOrderByWithRelationInput | OnboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Onboards.
     */
    cursor?: OnboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Onboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Onboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Onboards.
     */
    distinct?: OnboardScalarFieldEnum | OnboardScalarFieldEnum[]
  }

  /**
   * Onboard findFirstOrThrow
   */
  export type OnboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboard
     */
    select?: OnboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboard
     */
    omit?: OnboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardInclude<ExtArgs> | null
    /**
     * Filter, which Onboard to fetch.
     */
    where?: OnboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Onboards to fetch.
     */
    orderBy?: OnboardOrderByWithRelationInput | OnboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Onboards.
     */
    cursor?: OnboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Onboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Onboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Onboards.
     */
    distinct?: OnboardScalarFieldEnum | OnboardScalarFieldEnum[]
  }

  /**
   * Onboard findMany
   */
  export type OnboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboard
     */
    select?: OnboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboard
     */
    omit?: OnboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardInclude<ExtArgs> | null
    /**
     * Filter, which Onboards to fetch.
     */
    where?: OnboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Onboards to fetch.
     */
    orderBy?: OnboardOrderByWithRelationInput | OnboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Onboards.
     */
    cursor?: OnboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Onboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Onboards.
     */
    skip?: number
    distinct?: OnboardScalarFieldEnum | OnboardScalarFieldEnum[]
  }

  /**
   * Onboard create
   */
  export type OnboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboard
     */
    select?: OnboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboard
     */
    omit?: OnboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Onboard.
     */
    data: XOR<OnboardCreateInput, OnboardUncheckedCreateInput>
  }

  /**
   * Onboard createMany
   */
  export type OnboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Onboards.
     */
    data: OnboardCreateManyInput | OnboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Onboard createManyAndReturn
   */
  export type OnboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboard
     */
    select?: OnboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Onboard
     */
    omit?: OnboardOmit<ExtArgs> | null
    /**
     * The data used to create many Onboards.
     */
    data: OnboardCreateManyInput | OnboardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Onboard update
   */
  export type OnboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboard
     */
    select?: OnboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboard
     */
    omit?: OnboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Onboard.
     */
    data: XOR<OnboardUpdateInput, OnboardUncheckedUpdateInput>
    /**
     * Choose, which Onboard to update.
     */
    where: OnboardWhereUniqueInput
  }

  /**
   * Onboard updateMany
   */
  export type OnboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Onboards.
     */
    data: XOR<OnboardUpdateManyMutationInput, OnboardUncheckedUpdateManyInput>
    /**
     * Filter which Onboards to update
     */
    where?: OnboardWhereInput
    /**
     * Limit how many Onboards to update.
     */
    limit?: number
  }

  /**
   * Onboard updateManyAndReturn
   */
  export type OnboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboard
     */
    select?: OnboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Onboard
     */
    omit?: OnboardOmit<ExtArgs> | null
    /**
     * The data used to update Onboards.
     */
    data: XOR<OnboardUpdateManyMutationInput, OnboardUncheckedUpdateManyInput>
    /**
     * Filter which Onboards to update
     */
    where?: OnboardWhereInput
    /**
     * Limit how many Onboards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Onboard upsert
   */
  export type OnboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboard
     */
    select?: OnboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboard
     */
    omit?: OnboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Onboard to update in case it exists.
     */
    where: OnboardWhereUniqueInput
    /**
     * In case the Onboard found by the `where` argument doesn't exist, create a new Onboard with this data.
     */
    create: XOR<OnboardCreateInput, OnboardUncheckedCreateInput>
    /**
     * In case the Onboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OnboardUpdateInput, OnboardUncheckedUpdateInput>
  }

  /**
   * Onboard delete
   */
  export type OnboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboard
     */
    select?: OnboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboard
     */
    omit?: OnboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardInclude<ExtArgs> | null
    /**
     * Filter which Onboard to delete.
     */
    where: OnboardWhereUniqueInput
  }

  /**
   * Onboard deleteMany
   */
  export type OnboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Onboards to delete
     */
    where?: OnboardWhereInput
    /**
     * Limit how many Onboards to delete.
     */
    limit?: number
  }

  /**
   * Onboard without action
   */
  export type OnboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboard
     */
    select?: OnboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboard
     */
    omit?: OnboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    locationTypeId: number | null
  }

  export type UserSumAggregateOutputType = {
    locationTypeId: number | null
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
    location: string | null
    professional_summary: string | null
    locationTypeId: number | null
    phone: string | null
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
    location: string | null
    professional_summary: string | null
    locationTypeId: number | null
    phone: string | null
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
    location: number
    professional_summary: number
    locationTypeId: number
    phone: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    locationTypeId?: true
  }

  export type UserSumAggregateInputType = {
    locationTypeId?: true
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
    location?: true
    professional_summary?: true
    locationTypeId?: true
    phone?: true
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
    location?: true
    professional_summary?: true
    locationTypeId?: true
    phone?: true
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
    location?: true
    professional_summary?: true
    locationTypeId?: true
    phone?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
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
    location: string | null
    professional_summary: string | null
    locationTypeId: number | null
    phone: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    location?: boolean
    professional_summary?: boolean
    locationTypeId?: boolean
    phone?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    locationType?: boolean | User$locationTypeArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    onboarded?: boolean | User$onboardedArgs<ExtArgs>
    UserCertification?: boolean | User$UserCertificationArgs<ExtArgs>
    user_educations?: boolean | User$user_educationsArgs<ExtArgs>
    UserProfessionalSummary?: boolean | User$UserProfessionalSummaryArgs<ExtArgs>
    user_skills?: boolean | User$user_skillsArgs<ExtArgs>
    UserWorkExperience?: boolean | User$UserWorkExperienceArgs<ExtArgs>
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
    location?: boolean
    professional_summary?: boolean
    locationTypeId?: boolean
    phone?: boolean
    locationType?: boolean | User$locationTypeArgs<ExtArgs>
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
    location?: boolean
    professional_summary?: boolean
    locationTypeId?: boolean
    phone?: boolean
    locationType?: boolean | User$locationTypeArgs<ExtArgs>
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
    location?: boolean
    professional_summary?: boolean
    locationTypeId?: boolean
    phone?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "username" | "displayUsername" | "location" | "professional_summary" | "locationTypeId" | "phone", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    locationType?: boolean | User$locationTypeArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    onboarded?: boolean | User$onboardedArgs<ExtArgs>
    UserCertification?: boolean | User$UserCertificationArgs<ExtArgs>
    user_educations?: boolean | User$user_educationsArgs<ExtArgs>
    UserProfessionalSummary?: boolean | User$UserProfessionalSummaryArgs<ExtArgs>
    user_skills?: boolean | User$user_skillsArgs<ExtArgs>
    UserWorkExperience?: boolean | User$UserWorkExperienceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationType?: boolean | User$locationTypeArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationType?: boolean | User$locationTypeArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      locationType: Prisma.$UserLocationTypePayload<ExtArgs> | null
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      onboarded: Prisma.$OnboardPayload<ExtArgs> | null
      UserCertification: Prisma.$UserCertificationPayload<ExtArgs>[]
      user_educations: Prisma.$UserEducationPayload<ExtArgs>[]
      UserProfessionalSummary: Prisma.$UserProfessionalSummaryPayload<ExtArgs> | null
      user_skills: Prisma.$UserSkillPayload<ExtArgs> | null
      UserWorkExperience: Prisma.$UserWorkExperiencePayload<ExtArgs>[]
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
      location: string | null
      professional_summary: string | null
      locationTypeId: number | null
      phone: string | null
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locationType<T extends User$locationTypeArgs<ExtArgs> = {}>(args?: Subset<T, User$locationTypeArgs<ExtArgs>>): Prisma__UserLocationTypeClient<$Result.GetResult<Prisma.$UserLocationTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    onboarded<T extends User$onboardedArgs<ExtArgs> = {}>(args?: Subset<T, User$onboardedArgs<ExtArgs>>): Prisma__OnboardClient<$Result.GetResult<Prisma.$OnboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    UserCertification<T extends User$UserCertificationArgs<ExtArgs> = {}>(args?: Subset<T, User$UserCertificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCertificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_educations<T extends User$user_educationsArgs<ExtArgs> = {}>(args?: Subset<T, User$user_educationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserProfessionalSummary<T extends User$UserProfessionalSummaryArgs<ExtArgs> = {}>(args?: Subset<T, User$UserProfessionalSummaryArgs<ExtArgs>>): Prisma__UserProfessionalSummaryClient<$Result.GetResult<Prisma.$UserProfessionalSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_skills<T extends User$user_skillsArgs<ExtArgs> = {}>(args?: Subset<T, User$user_skillsArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    UserWorkExperience<T extends User$UserWorkExperienceArgs<ExtArgs> = {}>(args?: Subset<T, User$UserWorkExperienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly location: FieldRef<"User", 'String'>
    readonly professional_summary: FieldRef<"User", 'String'>
    readonly locationTypeId: FieldRef<"User", 'Int'>
    readonly phone: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.locationType
   */
  export type User$locationTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationType
     */
    select?: UserLocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocationType
     */
    omit?: UserLocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationTypeInclude<ExtArgs> | null
    where?: UserLocationTypeWhereInput
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User.onboarded
   */
  export type User$onboardedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboard
     */
    select?: OnboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboard
     */
    omit?: OnboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardInclude<ExtArgs> | null
    where?: OnboardWhereInput
  }

  /**
   * User.UserCertification
   */
  export type User$UserCertificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCertification
     */
    select?: UserCertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCertification
     */
    omit?: UserCertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCertificationInclude<ExtArgs> | null
    where?: UserCertificationWhereInput
    orderBy?: UserCertificationOrderByWithRelationInput | UserCertificationOrderByWithRelationInput[]
    cursor?: UserCertificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCertificationScalarFieldEnum | UserCertificationScalarFieldEnum[]
  }

  /**
   * User.user_educations
   */
  export type User$user_educationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    where?: UserEducationWhereInput
    orderBy?: UserEducationOrderByWithRelationInput | UserEducationOrderByWithRelationInput[]
    cursor?: UserEducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserEducationScalarFieldEnum | UserEducationScalarFieldEnum[]
  }

  /**
   * User.UserProfessionalSummary
   */
  export type User$UserProfessionalSummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.user_skills
   */
  export type User$user_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.UserWorkExperience
   */
  export type User$UserWorkExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkExperience
     */
    select?: UserWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkExperience
     */
    omit?: UserWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkExperienceInclude<ExtArgs> | null
    where?: UserWorkExperienceWhereInput
    orderBy?: UserWorkExperienceOrderByWithRelationInput | UserWorkExperienceOrderByWithRelationInput[]
    cursor?: UserWorkExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWorkExperienceScalarFieldEnum | UserWorkExperienceScalarFieldEnum[]
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
   * Model UserCertification
   */

  export type AggregateUserCertification = {
    _count: UserCertificationCountAggregateOutputType | null
    _min: UserCertificationMinAggregateOutputType | null
    _max: UserCertificationMaxAggregateOutputType | null
  }

  export type UserCertificationMinAggregateOutputType = {
    id: string | null
    name: string | null
    emittedAt: Date | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCertificationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    emittedAt: Date | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCertificationCountAggregateOutputType = {
    id: number
    name: number
    emittedAt: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserCertificationMinAggregateInputType = {
    id?: true
    name?: true
    emittedAt?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCertificationMaxAggregateInputType = {
    id?: true
    name?: true
    emittedAt?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCertificationCountAggregateInputType = {
    id?: true
    name?: true
    emittedAt?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCertificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCertification to aggregate.
     */
    where?: UserCertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCertifications to fetch.
     */
    orderBy?: UserCertificationOrderByWithRelationInput | UserCertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCertifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCertifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCertifications
    **/
    _count?: true | UserCertificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCertificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCertificationMaxAggregateInputType
  }

  export type GetUserCertificationAggregateType<T extends UserCertificationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCertification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCertification[P]>
      : GetScalarType<T[P], AggregateUserCertification[P]>
  }




  export type UserCertificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCertificationWhereInput
    orderBy?: UserCertificationOrderByWithAggregationInput | UserCertificationOrderByWithAggregationInput[]
    by: UserCertificationScalarFieldEnum[] | UserCertificationScalarFieldEnum
    having?: UserCertificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCertificationCountAggregateInputType | true
    _min?: UserCertificationMinAggregateInputType
    _max?: UserCertificationMaxAggregateInputType
  }

  export type UserCertificationGroupByOutputType = {
    id: string
    name: string
    emittedAt: Date
    description: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCertificationCountAggregateOutputType | null
    _min: UserCertificationMinAggregateOutputType | null
    _max: UserCertificationMaxAggregateOutputType | null
  }

  type GetUserCertificationGroupByPayload<T extends UserCertificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCertificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCertificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCertificationGroupByOutputType[P]>
            : GetScalarType<T[P], UserCertificationGroupByOutputType[P]>
        }
      >
    >


  export type UserCertificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    emittedAt?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCertification"]>

  export type UserCertificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    emittedAt?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCertification"]>

  export type UserCertificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    emittedAt?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCertification"]>

  export type UserCertificationSelectScalar = {
    id?: boolean
    name?: boolean
    emittedAt?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserCertificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "emittedAt" | "description" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["userCertification"]>
  export type UserCertificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserCertificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserCertificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserCertificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCertification"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      emittedAt: Date
      description: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userCertification"]>
    composites: {}
  }

  type UserCertificationGetPayload<S extends boolean | null | undefined | UserCertificationDefaultArgs> = $Result.GetResult<Prisma.$UserCertificationPayload, S>

  type UserCertificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCertificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCertificationCountAggregateInputType | true
    }

  export interface UserCertificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCertification'], meta: { name: 'UserCertification' } }
    /**
     * Find zero or one UserCertification that matches the filter.
     * @param {UserCertificationFindUniqueArgs} args - Arguments to find a UserCertification
     * @example
     * // Get one UserCertification
     * const userCertification = await prisma.userCertification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCertificationFindUniqueArgs>(args: SelectSubset<T, UserCertificationFindUniqueArgs<ExtArgs>>): Prisma__UserCertificationClient<$Result.GetResult<Prisma.$UserCertificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCertification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCertificationFindUniqueOrThrowArgs} args - Arguments to find a UserCertification
     * @example
     * // Get one UserCertification
     * const userCertification = await prisma.userCertification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCertificationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCertificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCertificationClient<$Result.GetResult<Prisma.$UserCertificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCertification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCertificationFindFirstArgs} args - Arguments to find a UserCertification
     * @example
     * // Get one UserCertification
     * const userCertification = await prisma.userCertification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCertificationFindFirstArgs>(args?: SelectSubset<T, UserCertificationFindFirstArgs<ExtArgs>>): Prisma__UserCertificationClient<$Result.GetResult<Prisma.$UserCertificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCertification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCertificationFindFirstOrThrowArgs} args - Arguments to find a UserCertification
     * @example
     * // Get one UserCertification
     * const userCertification = await prisma.userCertification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCertificationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCertificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCertificationClient<$Result.GetResult<Prisma.$UserCertificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCertifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCertificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCertifications
     * const userCertifications = await prisma.userCertification.findMany()
     * 
     * // Get first 10 UserCertifications
     * const userCertifications = await prisma.userCertification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCertificationWithIdOnly = await prisma.userCertification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCertificationFindManyArgs>(args?: SelectSubset<T, UserCertificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCertificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCertification.
     * @param {UserCertificationCreateArgs} args - Arguments to create a UserCertification.
     * @example
     * // Create one UserCertification
     * const UserCertification = await prisma.userCertification.create({
     *   data: {
     *     // ... data to create a UserCertification
     *   }
     * })
     * 
     */
    create<T extends UserCertificationCreateArgs>(args: SelectSubset<T, UserCertificationCreateArgs<ExtArgs>>): Prisma__UserCertificationClient<$Result.GetResult<Prisma.$UserCertificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCertifications.
     * @param {UserCertificationCreateManyArgs} args - Arguments to create many UserCertifications.
     * @example
     * // Create many UserCertifications
     * const userCertification = await prisma.userCertification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCertificationCreateManyArgs>(args?: SelectSubset<T, UserCertificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCertifications and returns the data saved in the database.
     * @param {UserCertificationCreateManyAndReturnArgs} args - Arguments to create many UserCertifications.
     * @example
     * // Create many UserCertifications
     * const userCertification = await prisma.userCertification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCertifications and only return the `id`
     * const userCertificationWithIdOnly = await prisma.userCertification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCertificationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCertificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCertificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCertification.
     * @param {UserCertificationDeleteArgs} args - Arguments to delete one UserCertification.
     * @example
     * // Delete one UserCertification
     * const UserCertification = await prisma.userCertification.delete({
     *   where: {
     *     // ... filter to delete one UserCertification
     *   }
     * })
     * 
     */
    delete<T extends UserCertificationDeleteArgs>(args: SelectSubset<T, UserCertificationDeleteArgs<ExtArgs>>): Prisma__UserCertificationClient<$Result.GetResult<Prisma.$UserCertificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCertification.
     * @param {UserCertificationUpdateArgs} args - Arguments to update one UserCertification.
     * @example
     * // Update one UserCertification
     * const userCertification = await prisma.userCertification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCertificationUpdateArgs>(args: SelectSubset<T, UserCertificationUpdateArgs<ExtArgs>>): Prisma__UserCertificationClient<$Result.GetResult<Prisma.$UserCertificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCertifications.
     * @param {UserCertificationDeleteManyArgs} args - Arguments to filter UserCertifications to delete.
     * @example
     * // Delete a few UserCertifications
     * const { count } = await prisma.userCertification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCertificationDeleteManyArgs>(args?: SelectSubset<T, UserCertificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCertifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCertificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCertifications
     * const userCertification = await prisma.userCertification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCertificationUpdateManyArgs>(args: SelectSubset<T, UserCertificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCertifications and returns the data updated in the database.
     * @param {UserCertificationUpdateManyAndReturnArgs} args - Arguments to update many UserCertifications.
     * @example
     * // Update many UserCertifications
     * const userCertification = await prisma.userCertification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCertifications and only return the `id`
     * const userCertificationWithIdOnly = await prisma.userCertification.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserCertificationUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCertificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCertificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCertification.
     * @param {UserCertificationUpsertArgs} args - Arguments to update or create a UserCertification.
     * @example
     * // Update or create a UserCertification
     * const userCertification = await prisma.userCertification.upsert({
     *   create: {
     *     // ... data to create a UserCertification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCertification we want to update
     *   }
     * })
     */
    upsert<T extends UserCertificationUpsertArgs>(args: SelectSubset<T, UserCertificationUpsertArgs<ExtArgs>>): Prisma__UserCertificationClient<$Result.GetResult<Prisma.$UserCertificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCertifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCertificationCountArgs} args - Arguments to filter UserCertifications to count.
     * @example
     * // Count the number of UserCertifications
     * const count = await prisma.userCertification.count({
     *   where: {
     *     // ... the filter for the UserCertifications we want to count
     *   }
     * })
    **/
    count<T extends UserCertificationCountArgs>(
      args?: Subset<T, UserCertificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCertificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCertification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCertificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCertificationAggregateArgs>(args: Subset<T, UserCertificationAggregateArgs>): Prisma.PrismaPromise<GetUserCertificationAggregateType<T>>

    /**
     * Group by UserCertification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCertificationGroupByArgs} args - Group by arguments.
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
      T extends UserCertificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCertificationGroupByArgs['orderBy'] }
        : { orderBy?: UserCertificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCertificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCertificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCertification model
   */
  readonly fields: UserCertificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCertification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCertificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCertification model
   */
  interface UserCertificationFieldRefs {
    readonly id: FieldRef<"UserCertification", 'String'>
    readonly name: FieldRef<"UserCertification", 'String'>
    readonly emittedAt: FieldRef<"UserCertification", 'DateTime'>
    readonly description: FieldRef<"UserCertification", 'String'>
    readonly userId: FieldRef<"UserCertification", 'String'>
    readonly createdAt: FieldRef<"UserCertification", 'DateTime'>
    readonly updatedAt: FieldRef<"UserCertification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCertification findUnique
   */
  export type UserCertificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCertification
     */
    select?: UserCertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCertification
     */
    omit?: UserCertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCertificationInclude<ExtArgs> | null
    /**
     * Filter, which UserCertification to fetch.
     */
    where: UserCertificationWhereUniqueInput
  }

  /**
   * UserCertification findUniqueOrThrow
   */
  export type UserCertificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCertification
     */
    select?: UserCertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCertification
     */
    omit?: UserCertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCertificationInclude<ExtArgs> | null
    /**
     * Filter, which UserCertification to fetch.
     */
    where: UserCertificationWhereUniqueInput
  }

  /**
   * UserCertification findFirst
   */
  export type UserCertificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCertification
     */
    select?: UserCertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCertification
     */
    omit?: UserCertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCertificationInclude<ExtArgs> | null
    /**
     * Filter, which UserCertification to fetch.
     */
    where?: UserCertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCertifications to fetch.
     */
    orderBy?: UserCertificationOrderByWithRelationInput | UserCertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCertifications.
     */
    cursor?: UserCertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCertifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCertifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCertifications.
     */
    distinct?: UserCertificationScalarFieldEnum | UserCertificationScalarFieldEnum[]
  }

  /**
   * UserCertification findFirstOrThrow
   */
  export type UserCertificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCertification
     */
    select?: UserCertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCertification
     */
    omit?: UserCertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCertificationInclude<ExtArgs> | null
    /**
     * Filter, which UserCertification to fetch.
     */
    where?: UserCertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCertifications to fetch.
     */
    orderBy?: UserCertificationOrderByWithRelationInput | UserCertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCertifications.
     */
    cursor?: UserCertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCertifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCertifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCertifications.
     */
    distinct?: UserCertificationScalarFieldEnum | UserCertificationScalarFieldEnum[]
  }

  /**
   * UserCertification findMany
   */
  export type UserCertificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCertification
     */
    select?: UserCertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCertification
     */
    omit?: UserCertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCertificationInclude<ExtArgs> | null
    /**
     * Filter, which UserCertifications to fetch.
     */
    where?: UserCertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCertifications to fetch.
     */
    orderBy?: UserCertificationOrderByWithRelationInput | UserCertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCertifications.
     */
    cursor?: UserCertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCertifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCertifications.
     */
    skip?: number
    distinct?: UserCertificationScalarFieldEnum | UserCertificationScalarFieldEnum[]
  }

  /**
   * UserCertification create
   */
  export type UserCertificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCertification
     */
    select?: UserCertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCertification
     */
    omit?: UserCertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCertificationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCertification.
     */
    data: XOR<UserCertificationCreateInput, UserCertificationUncheckedCreateInput>
  }

  /**
   * UserCertification createMany
   */
  export type UserCertificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCertifications.
     */
    data: UserCertificationCreateManyInput | UserCertificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCertification createManyAndReturn
   */
  export type UserCertificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCertification
     */
    select?: UserCertificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCertification
     */
    omit?: UserCertificationOmit<ExtArgs> | null
    /**
     * The data used to create many UserCertifications.
     */
    data: UserCertificationCreateManyInput | UserCertificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCertificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCertification update
   */
  export type UserCertificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCertification
     */
    select?: UserCertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCertification
     */
    omit?: UserCertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCertificationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCertification.
     */
    data: XOR<UserCertificationUpdateInput, UserCertificationUncheckedUpdateInput>
    /**
     * Choose, which UserCertification to update.
     */
    where: UserCertificationWhereUniqueInput
  }

  /**
   * UserCertification updateMany
   */
  export type UserCertificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCertifications.
     */
    data: XOR<UserCertificationUpdateManyMutationInput, UserCertificationUncheckedUpdateManyInput>
    /**
     * Filter which UserCertifications to update
     */
    where?: UserCertificationWhereInput
    /**
     * Limit how many UserCertifications to update.
     */
    limit?: number
  }

  /**
   * UserCertification updateManyAndReturn
   */
  export type UserCertificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCertification
     */
    select?: UserCertificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCertification
     */
    omit?: UserCertificationOmit<ExtArgs> | null
    /**
     * The data used to update UserCertifications.
     */
    data: XOR<UserCertificationUpdateManyMutationInput, UserCertificationUncheckedUpdateManyInput>
    /**
     * Filter which UserCertifications to update
     */
    where?: UserCertificationWhereInput
    /**
     * Limit how many UserCertifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCertificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCertification upsert
   */
  export type UserCertificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCertification
     */
    select?: UserCertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCertification
     */
    omit?: UserCertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCertificationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCertification to update in case it exists.
     */
    where: UserCertificationWhereUniqueInput
    /**
     * In case the UserCertification found by the `where` argument doesn't exist, create a new UserCertification with this data.
     */
    create: XOR<UserCertificationCreateInput, UserCertificationUncheckedCreateInput>
    /**
     * In case the UserCertification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCertificationUpdateInput, UserCertificationUncheckedUpdateInput>
  }

  /**
   * UserCertification delete
   */
  export type UserCertificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCertification
     */
    select?: UserCertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCertification
     */
    omit?: UserCertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCertificationInclude<ExtArgs> | null
    /**
     * Filter which UserCertification to delete.
     */
    where: UserCertificationWhereUniqueInput
  }

  /**
   * UserCertification deleteMany
   */
  export type UserCertificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCertifications to delete
     */
    where?: UserCertificationWhereInput
    /**
     * Limit how many UserCertifications to delete.
     */
    limit?: number
  }

  /**
   * UserCertification without action
   */
  export type UserCertificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCertification
     */
    select?: UserCertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCertification
     */
    omit?: UserCertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCertificationInclude<ExtArgs> | null
  }


  /**
   * Model UserEducation
   */

  export type AggregateUserEducation = {
    _count: UserEducationCountAggregateOutputType | null
    _min: UserEducationMinAggregateOutputType | null
    _max: UserEducationMaxAggregateOutputType | null
  }

  export type UserEducationMinAggregateOutputType = {
    id: string | null
    university_name: string | null
    enrollment: Date | null
    completion: Date | null
    finished: boolean | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserEducationMaxAggregateOutputType = {
    id: string | null
    university_name: string | null
    enrollment: Date | null
    completion: Date | null
    finished: boolean | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserEducationCountAggregateOutputType = {
    id: number
    university_name: number
    enrollment: number
    completion: number
    finished: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserEducationMinAggregateInputType = {
    id?: true
    university_name?: true
    enrollment?: true
    completion?: true
    finished?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserEducationMaxAggregateInputType = {
    id?: true
    university_name?: true
    enrollment?: true
    completion?: true
    finished?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserEducationCountAggregateInputType = {
    id?: true
    university_name?: true
    enrollment?: true
    completion?: true
    finished?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserEducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEducation to aggregate.
     */
    where?: UserEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEducations to fetch.
     */
    orderBy?: UserEducationOrderByWithRelationInput | UserEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserEducations
    **/
    _count?: true | UserEducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserEducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserEducationMaxAggregateInputType
  }

  export type GetUserEducationAggregateType<T extends UserEducationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserEducation[P]>
      : GetScalarType<T[P], AggregateUserEducation[P]>
  }




  export type UserEducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEducationWhereInput
    orderBy?: UserEducationOrderByWithAggregationInput | UserEducationOrderByWithAggregationInput[]
    by: UserEducationScalarFieldEnum[] | UserEducationScalarFieldEnum
    having?: UserEducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserEducationCountAggregateInputType | true
    _min?: UserEducationMinAggregateInputType
    _max?: UserEducationMaxAggregateInputType
  }

  export type UserEducationGroupByOutputType = {
    id: string
    university_name: string
    enrollment: Date
    completion: Date | null
    finished: boolean
    description: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserEducationCountAggregateOutputType | null
    _min: UserEducationMinAggregateOutputType | null
    _max: UserEducationMaxAggregateOutputType | null
  }

  type GetUserEducationGroupByPayload<T extends UserEducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserEducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserEducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserEducationGroupByOutputType[P]>
            : GetScalarType<T[P], UserEducationGroupByOutputType[P]>
        }
      >
    >


  export type UserEducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    university_name?: boolean
    enrollment?: boolean
    completion?: boolean
    finished?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEducation"]>

  export type UserEducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    university_name?: boolean
    enrollment?: boolean
    completion?: boolean
    finished?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEducation"]>

  export type UserEducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    university_name?: boolean
    enrollment?: boolean
    completion?: boolean
    finished?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEducation"]>

  export type UserEducationSelectScalar = {
    id?: boolean
    university_name?: boolean
    enrollment?: boolean
    completion?: boolean
    finished?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserEducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "university_name" | "enrollment" | "completion" | "finished" | "description" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["userEducation"]>
  export type UserEducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserEducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserEducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserEducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserEducation"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      university_name: string
      enrollment: Date
      completion: Date | null
      finished: boolean
      description: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userEducation"]>
    composites: {}
  }

  type UserEducationGetPayload<S extends boolean | null | undefined | UserEducationDefaultArgs> = $Result.GetResult<Prisma.$UserEducationPayload, S>

  type UserEducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserEducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserEducationCountAggregateInputType | true
    }

  export interface UserEducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserEducation'], meta: { name: 'UserEducation' } }
    /**
     * Find zero or one UserEducation that matches the filter.
     * @param {UserEducationFindUniqueArgs} args - Arguments to find a UserEducation
     * @example
     * // Get one UserEducation
     * const userEducation = await prisma.userEducation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserEducationFindUniqueArgs>(args: SelectSubset<T, UserEducationFindUniqueArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserEducation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserEducationFindUniqueOrThrowArgs} args - Arguments to find a UserEducation
     * @example
     * // Get one UserEducation
     * const userEducation = await prisma.userEducation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserEducationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserEducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEducation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationFindFirstArgs} args - Arguments to find a UserEducation
     * @example
     * // Get one UserEducation
     * const userEducation = await prisma.userEducation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserEducationFindFirstArgs>(args?: SelectSubset<T, UserEducationFindFirstArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEducation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationFindFirstOrThrowArgs} args - Arguments to find a UserEducation
     * @example
     * // Get one UserEducation
     * const userEducation = await prisma.userEducation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserEducationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserEducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserEducations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserEducations
     * const userEducations = await prisma.userEducation.findMany()
     * 
     * // Get first 10 UserEducations
     * const userEducations = await prisma.userEducation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userEducationWithIdOnly = await prisma.userEducation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserEducationFindManyArgs>(args?: SelectSubset<T, UserEducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserEducation.
     * @param {UserEducationCreateArgs} args - Arguments to create a UserEducation.
     * @example
     * // Create one UserEducation
     * const UserEducation = await prisma.userEducation.create({
     *   data: {
     *     // ... data to create a UserEducation
     *   }
     * })
     * 
     */
    create<T extends UserEducationCreateArgs>(args: SelectSubset<T, UserEducationCreateArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserEducations.
     * @param {UserEducationCreateManyArgs} args - Arguments to create many UserEducations.
     * @example
     * // Create many UserEducations
     * const userEducation = await prisma.userEducation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserEducationCreateManyArgs>(args?: SelectSubset<T, UserEducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserEducations and returns the data saved in the database.
     * @param {UserEducationCreateManyAndReturnArgs} args - Arguments to create many UserEducations.
     * @example
     * // Create many UserEducations
     * const userEducation = await prisma.userEducation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserEducations and only return the `id`
     * const userEducationWithIdOnly = await prisma.userEducation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserEducationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserEducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserEducation.
     * @param {UserEducationDeleteArgs} args - Arguments to delete one UserEducation.
     * @example
     * // Delete one UserEducation
     * const UserEducation = await prisma.userEducation.delete({
     *   where: {
     *     // ... filter to delete one UserEducation
     *   }
     * })
     * 
     */
    delete<T extends UserEducationDeleteArgs>(args: SelectSubset<T, UserEducationDeleteArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserEducation.
     * @param {UserEducationUpdateArgs} args - Arguments to update one UserEducation.
     * @example
     * // Update one UserEducation
     * const userEducation = await prisma.userEducation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserEducationUpdateArgs>(args: SelectSubset<T, UserEducationUpdateArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserEducations.
     * @param {UserEducationDeleteManyArgs} args - Arguments to filter UserEducations to delete.
     * @example
     * // Delete a few UserEducations
     * const { count } = await prisma.userEducation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserEducationDeleteManyArgs>(args?: SelectSubset<T, UserEducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserEducations
     * const userEducation = await prisma.userEducation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserEducationUpdateManyArgs>(args: SelectSubset<T, UserEducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserEducations and returns the data updated in the database.
     * @param {UserEducationUpdateManyAndReturnArgs} args - Arguments to update many UserEducations.
     * @example
     * // Update many UserEducations
     * const userEducation = await prisma.userEducation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserEducations and only return the `id`
     * const userEducationWithIdOnly = await prisma.userEducation.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserEducationUpdateManyAndReturnArgs>(args: SelectSubset<T, UserEducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserEducation.
     * @param {UserEducationUpsertArgs} args - Arguments to update or create a UserEducation.
     * @example
     * // Update or create a UserEducation
     * const userEducation = await prisma.userEducation.upsert({
     *   create: {
     *     // ... data to create a UserEducation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserEducation we want to update
     *   }
     * })
     */
    upsert<T extends UserEducationUpsertArgs>(args: SelectSubset<T, UserEducationUpsertArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationCountArgs} args - Arguments to filter UserEducations to count.
     * @example
     * // Count the number of UserEducations
     * const count = await prisma.userEducation.count({
     *   where: {
     *     // ... the filter for the UserEducations we want to count
     *   }
     * })
    **/
    count<T extends UserEducationCountArgs>(
      args?: Subset<T, UserEducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserEducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserEducationAggregateArgs>(args: Subset<T, UserEducationAggregateArgs>): Prisma.PrismaPromise<GetUserEducationAggregateType<T>>

    /**
     * Group by UserEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationGroupByArgs} args - Group by arguments.
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
      T extends UserEducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserEducationGroupByArgs['orderBy'] }
        : { orderBy?: UserEducationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserEducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserEducation model
   */
  readonly fields: UserEducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserEducation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserEducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserEducation model
   */
  interface UserEducationFieldRefs {
    readonly id: FieldRef<"UserEducation", 'String'>
    readonly university_name: FieldRef<"UserEducation", 'String'>
    readonly enrollment: FieldRef<"UserEducation", 'DateTime'>
    readonly completion: FieldRef<"UserEducation", 'DateTime'>
    readonly finished: FieldRef<"UserEducation", 'Boolean'>
    readonly description: FieldRef<"UserEducation", 'String'>
    readonly userId: FieldRef<"UserEducation", 'String'>
    readonly createdAt: FieldRef<"UserEducation", 'DateTime'>
    readonly updatedAt: FieldRef<"UserEducation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserEducation findUnique
   */
  export type UserEducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * Filter, which UserEducation to fetch.
     */
    where: UserEducationWhereUniqueInput
  }

  /**
   * UserEducation findUniqueOrThrow
   */
  export type UserEducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * Filter, which UserEducation to fetch.
     */
    where: UserEducationWhereUniqueInput
  }

  /**
   * UserEducation findFirst
   */
  export type UserEducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * Filter, which UserEducation to fetch.
     */
    where?: UserEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEducations to fetch.
     */
    orderBy?: UserEducationOrderByWithRelationInput | UserEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEducations.
     */
    cursor?: UserEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEducations.
     */
    distinct?: UserEducationScalarFieldEnum | UserEducationScalarFieldEnum[]
  }

  /**
   * UserEducation findFirstOrThrow
   */
  export type UserEducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * Filter, which UserEducation to fetch.
     */
    where?: UserEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEducations to fetch.
     */
    orderBy?: UserEducationOrderByWithRelationInput | UserEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEducations.
     */
    cursor?: UserEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEducations.
     */
    distinct?: UserEducationScalarFieldEnum | UserEducationScalarFieldEnum[]
  }

  /**
   * UserEducation findMany
   */
  export type UserEducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * Filter, which UserEducations to fetch.
     */
    where?: UserEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEducations to fetch.
     */
    orderBy?: UserEducationOrderByWithRelationInput | UserEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserEducations.
     */
    cursor?: UserEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEducations.
     */
    skip?: number
    distinct?: UserEducationScalarFieldEnum | UserEducationScalarFieldEnum[]
  }

  /**
   * UserEducation create
   */
  export type UserEducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserEducation.
     */
    data: XOR<UserEducationCreateInput, UserEducationUncheckedCreateInput>
  }

  /**
   * UserEducation createMany
   */
  export type UserEducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserEducations.
     */
    data: UserEducationCreateManyInput | UserEducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserEducation createManyAndReturn
   */
  export type UserEducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * The data used to create many UserEducations.
     */
    data: UserEducationCreateManyInput | UserEducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserEducation update
   */
  export type UserEducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserEducation.
     */
    data: XOR<UserEducationUpdateInput, UserEducationUncheckedUpdateInput>
    /**
     * Choose, which UserEducation to update.
     */
    where: UserEducationWhereUniqueInput
  }

  /**
   * UserEducation updateMany
   */
  export type UserEducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserEducations.
     */
    data: XOR<UserEducationUpdateManyMutationInput, UserEducationUncheckedUpdateManyInput>
    /**
     * Filter which UserEducations to update
     */
    where?: UserEducationWhereInput
    /**
     * Limit how many UserEducations to update.
     */
    limit?: number
  }

  /**
   * UserEducation updateManyAndReturn
   */
  export type UserEducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * The data used to update UserEducations.
     */
    data: XOR<UserEducationUpdateManyMutationInput, UserEducationUncheckedUpdateManyInput>
    /**
     * Filter which UserEducations to update
     */
    where?: UserEducationWhereInput
    /**
     * Limit how many UserEducations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserEducation upsert
   */
  export type UserEducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserEducation to update in case it exists.
     */
    where: UserEducationWhereUniqueInput
    /**
     * In case the UserEducation found by the `where` argument doesn't exist, create a new UserEducation with this data.
     */
    create: XOR<UserEducationCreateInput, UserEducationUncheckedCreateInput>
    /**
     * In case the UserEducation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserEducationUpdateInput, UserEducationUncheckedUpdateInput>
  }

  /**
   * UserEducation delete
   */
  export type UserEducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * Filter which UserEducation to delete.
     */
    where: UserEducationWhereUniqueInput
  }

  /**
   * UserEducation deleteMany
   */
  export type UserEducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEducations to delete
     */
    where?: UserEducationWhereInput
    /**
     * Limit how many UserEducations to delete.
     */
    limit?: number
  }

  /**
   * UserEducation without action
   */
  export type UserEducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
  }


  /**
   * Model UserLocationType
   */

  export type AggregateUserLocationType = {
    _count: UserLocationTypeCountAggregateOutputType | null
    _avg: UserLocationTypeAvgAggregateOutputType | null
    _sum: UserLocationTypeSumAggregateOutputType | null
    _min: UserLocationTypeMinAggregateOutputType | null
    _max: UserLocationTypeMaxAggregateOutputType | null
  }

  export type UserLocationTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type UserLocationTypeSumAggregateOutputType = {
    id: number | null
  }

  export type UserLocationTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type UserLocationTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type UserLocationTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type UserLocationTypeAvgAggregateInputType = {
    id?: true
  }

  export type UserLocationTypeSumAggregateInputType = {
    id?: true
  }

  export type UserLocationTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserLocationTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserLocationTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type UserLocationTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocationType to aggregate.
     */
    where?: UserLocationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocationTypes to fetch.
     */
    orderBy?: UserLocationTypeOrderByWithRelationInput | UserLocationTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLocationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocationTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLocationTypes
    **/
    _count?: true | UserLocationTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLocationTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLocationTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLocationTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLocationTypeMaxAggregateInputType
  }

  export type GetUserLocationTypeAggregateType<T extends UserLocationTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLocationType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLocationType[P]>
      : GetScalarType<T[P], AggregateUserLocationType[P]>
  }




  export type UserLocationTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLocationTypeWhereInput
    orderBy?: UserLocationTypeOrderByWithAggregationInput | UserLocationTypeOrderByWithAggregationInput[]
    by: UserLocationTypeScalarFieldEnum[] | UserLocationTypeScalarFieldEnum
    having?: UserLocationTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLocationTypeCountAggregateInputType | true
    _avg?: UserLocationTypeAvgAggregateInputType
    _sum?: UserLocationTypeSumAggregateInputType
    _min?: UserLocationTypeMinAggregateInputType
    _max?: UserLocationTypeMaxAggregateInputType
  }

  export type UserLocationTypeGroupByOutputType = {
    id: number
    name: string
    _count: UserLocationTypeCountAggregateOutputType | null
    _avg: UserLocationTypeAvgAggregateOutputType | null
    _sum: UserLocationTypeSumAggregateOutputType | null
    _min: UserLocationTypeMinAggregateOutputType | null
    _max: UserLocationTypeMaxAggregateOutputType | null
  }

  type GetUserLocationTypeGroupByPayload<T extends UserLocationTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLocationTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLocationTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLocationTypeGroupByOutputType[P]>
            : GetScalarType<T[P], UserLocationTypeGroupByOutputType[P]>
        }
      >
    >


  export type UserLocationTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | UserLocationType$usersArgs<ExtArgs>
    _count?: boolean | UserLocationTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLocationType"]>

  export type UserLocationTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["userLocationType"]>

  export type UserLocationTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["userLocationType"]>

  export type UserLocationTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type UserLocationTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["userLocationType"]>
  export type UserLocationTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserLocationType$usersArgs<ExtArgs>
    _count?: boolean | UserLocationTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserLocationTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserLocationTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserLocationTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLocationType"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["userLocationType"]>
    composites: {}
  }

  type UserLocationTypeGetPayload<S extends boolean | null | undefined | UserLocationTypeDefaultArgs> = $Result.GetResult<Prisma.$UserLocationTypePayload, S>

  type UserLocationTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLocationTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLocationTypeCountAggregateInputType | true
    }

  export interface UserLocationTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLocationType'], meta: { name: 'UserLocationType' } }
    /**
     * Find zero or one UserLocationType that matches the filter.
     * @param {UserLocationTypeFindUniqueArgs} args - Arguments to find a UserLocationType
     * @example
     * // Get one UserLocationType
     * const userLocationType = await prisma.userLocationType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLocationTypeFindUniqueArgs>(args: SelectSubset<T, UserLocationTypeFindUniqueArgs<ExtArgs>>): Prisma__UserLocationTypeClient<$Result.GetResult<Prisma.$UserLocationTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLocationType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLocationTypeFindUniqueOrThrowArgs} args - Arguments to find a UserLocationType
     * @example
     * // Get one UserLocationType
     * const userLocationType = await prisma.userLocationType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLocationTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLocationTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLocationTypeClient<$Result.GetResult<Prisma.$UserLocationTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLocationType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationTypeFindFirstArgs} args - Arguments to find a UserLocationType
     * @example
     * // Get one UserLocationType
     * const userLocationType = await prisma.userLocationType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLocationTypeFindFirstArgs>(args?: SelectSubset<T, UserLocationTypeFindFirstArgs<ExtArgs>>): Prisma__UserLocationTypeClient<$Result.GetResult<Prisma.$UserLocationTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLocationType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationTypeFindFirstOrThrowArgs} args - Arguments to find a UserLocationType
     * @example
     * // Get one UserLocationType
     * const userLocationType = await prisma.userLocationType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLocationTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLocationTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLocationTypeClient<$Result.GetResult<Prisma.$UserLocationTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLocationTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLocationTypes
     * const userLocationTypes = await prisma.userLocationType.findMany()
     * 
     * // Get first 10 UserLocationTypes
     * const userLocationTypes = await prisma.userLocationType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLocationTypeWithIdOnly = await prisma.userLocationType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLocationTypeFindManyArgs>(args?: SelectSubset<T, UserLocationTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLocationType.
     * @param {UserLocationTypeCreateArgs} args - Arguments to create a UserLocationType.
     * @example
     * // Create one UserLocationType
     * const UserLocationType = await prisma.userLocationType.create({
     *   data: {
     *     // ... data to create a UserLocationType
     *   }
     * })
     * 
     */
    create<T extends UserLocationTypeCreateArgs>(args: SelectSubset<T, UserLocationTypeCreateArgs<ExtArgs>>): Prisma__UserLocationTypeClient<$Result.GetResult<Prisma.$UserLocationTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLocationTypes.
     * @param {UserLocationTypeCreateManyArgs} args - Arguments to create many UserLocationTypes.
     * @example
     * // Create many UserLocationTypes
     * const userLocationType = await prisma.userLocationType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLocationTypeCreateManyArgs>(args?: SelectSubset<T, UserLocationTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLocationTypes and returns the data saved in the database.
     * @param {UserLocationTypeCreateManyAndReturnArgs} args - Arguments to create many UserLocationTypes.
     * @example
     * // Create many UserLocationTypes
     * const userLocationType = await prisma.userLocationType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLocationTypes and only return the `id`
     * const userLocationTypeWithIdOnly = await prisma.userLocationType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLocationTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLocationTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLocationType.
     * @param {UserLocationTypeDeleteArgs} args - Arguments to delete one UserLocationType.
     * @example
     * // Delete one UserLocationType
     * const UserLocationType = await prisma.userLocationType.delete({
     *   where: {
     *     // ... filter to delete one UserLocationType
     *   }
     * })
     * 
     */
    delete<T extends UserLocationTypeDeleteArgs>(args: SelectSubset<T, UserLocationTypeDeleteArgs<ExtArgs>>): Prisma__UserLocationTypeClient<$Result.GetResult<Prisma.$UserLocationTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLocationType.
     * @param {UserLocationTypeUpdateArgs} args - Arguments to update one UserLocationType.
     * @example
     * // Update one UserLocationType
     * const userLocationType = await prisma.userLocationType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLocationTypeUpdateArgs>(args: SelectSubset<T, UserLocationTypeUpdateArgs<ExtArgs>>): Prisma__UserLocationTypeClient<$Result.GetResult<Prisma.$UserLocationTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLocationTypes.
     * @param {UserLocationTypeDeleteManyArgs} args - Arguments to filter UserLocationTypes to delete.
     * @example
     * // Delete a few UserLocationTypes
     * const { count } = await prisma.userLocationType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLocationTypeDeleteManyArgs>(args?: SelectSubset<T, UserLocationTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLocationTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLocationTypes
     * const userLocationType = await prisma.userLocationType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLocationTypeUpdateManyArgs>(args: SelectSubset<T, UserLocationTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLocationTypes and returns the data updated in the database.
     * @param {UserLocationTypeUpdateManyAndReturnArgs} args - Arguments to update many UserLocationTypes.
     * @example
     * // Update many UserLocationTypes
     * const userLocationType = await prisma.userLocationType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLocationTypes and only return the `id`
     * const userLocationTypeWithIdOnly = await prisma.userLocationType.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserLocationTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLocationTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLocationType.
     * @param {UserLocationTypeUpsertArgs} args - Arguments to update or create a UserLocationType.
     * @example
     * // Update or create a UserLocationType
     * const userLocationType = await prisma.userLocationType.upsert({
     *   create: {
     *     // ... data to create a UserLocationType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLocationType we want to update
     *   }
     * })
     */
    upsert<T extends UserLocationTypeUpsertArgs>(args: SelectSubset<T, UserLocationTypeUpsertArgs<ExtArgs>>): Prisma__UserLocationTypeClient<$Result.GetResult<Prisma.$UserLocationTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLocationTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationTypeCountArgs} args - Arguments to filter UserLocationTypes to count.
     * @example
     * // Count the number of UserLocationTypes
     * const count = await prisma.userLocationType.count({
     *   where: {
     *     // ... the filter for the UserLocationTypes we want to count
     *   }
     * })
    **/
    count<T extends UserLocationTypeCountArgs>(
      args?: Subset<T, UserLocationTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLocationTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLocationType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLocationTypeAggregateArgs>(args: Subset<T, UserLocationTypeAggregateArgs>): Prisma.PrismaPromise<GetUserLocationTypeAggregateType<T>>

    /**
     * Group by UserLocationType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationTypeGroupByArgs} args - Group by arguments.
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
      T extends UserLocationTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLocationTypeGroupByArgs['orderBy'] }
        : { orderBy?: UserLocationTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLocationTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLocationTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLocationType model
   */
  readonly fields: UserLocationTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLocationType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLocationTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserLocationType$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserLocationType$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserLocationType model
   */
  interface UserLocationTypeFieldRefs {
    readonly id: FieldRef<"UserLocationType", 'Int'>
    readonly name: FieldRef<"UserLocationType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserLocationType findUnique
   */
  export type UserLocationTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationType
     */
    select?: UserLocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocationType
     */
    omit?: UserLocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserLocationType to fetch.
     */
    where: UserLocationTypeWhereUniqueInput
  }

  /**
   * UserLocationType findUniqueOrThrow
   */
  export type UserLocationTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationType
     */
    select?: UserLocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocationType
     */
    omit?: UserLocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserLocationType to fetch.
     */
    where: UserLocationTypeWhereUniqueInput
  }

  /**
   * UserLocationType findFirst
   */
  export type UserLocationTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationType
     */
    select?: UserLocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocationType
     */
    omit?: UserLocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserLocationType to fetch.
     */
    where?: UserLocationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocationTypes to fetch.
     */
    orderBy?: UserLocationTypeOrderByWithRelationInput | UserLocationTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocationTypes.
     */
    cursor?: UserLocationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocationTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocationTypes.
     */
    distinct?: UserLocationTypeScalarFieldEnum | UserLocationTypeScalarFieldEnum[]
  }

  /**
   * UserLocationType findFirstOrThrow
   */
  export type UserLocationTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationType
     */
    select?: UserLocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocationType
     */
    omit?: UserLocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserLocationType to fetch.
     */
    where?: UserLocationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocationTypes to fetch.
     */
    orderBy?: UserLocationTypeOrderByWithRelationInput | UserLocationTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocationTypes.
     */
    cursor?: UserLocationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocationTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocationTypes.
     */
    distinct?: UserLocationTypeScalarFieldEnum | UserLocationTypeScalarFieldEnum[]
  }

  /**
   * UserLocationType findMany
   */
  export type UserLocationTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationType
     */
    select?: UserLocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocationType
     */
    omit?: UserLocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserLocationTypes to fetch.
     */
    where?: UserLocationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocationTypes to fetch.
     */
    orderBy?: UserLocationTypeOrderByWithRelationInput | UserLocationTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLocationTypes.
     */
    cursor?: UserLocationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocationTypes.
     */
    skip?: number
    distinct?: UserLocationTypeScalarFieldEnum | UserLocationTypeScalarFieldEnum[]
  }

  /**
   * UserLocationType create
   */
  export type UserLocationTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationType
     */
    select?: UserLocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocationType
     */
    omit?: UserLocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLocationType.
     */
    data: XOR<UserLocationTypeCreateInput, UserLocationTypeUncheckedCreateInput>
  }

  /**
   * UserLocationType createMany
   */
  export type UserLocationTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLocationTypes.
     */
    data: UserLocationTypeCreateManyInput | UserLocationTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLocationType createManyAndReturn
   */
  export type UserLocationTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationType
     */
    select?: UserLocationTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocationType
     */
    omit?: UserLocationTypeOmit<ExtArgs> | null
    /**
     * The data used to create many UserLocationTypes.
     */
    data: UserLocationTypeCreateManyInput | UserLocationTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLocationType update
   */
  export type UserLocationTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationType
     */
    select?: UserLocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocationType
     */
    omit?: UserLocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLocationType.
     */
    data: XOR<UserLocationTypeUpdateInput, UserLocationTypeUncheckedUpdateInput>
    /**
     * Choose, which UserLocationType to update.
     */
    where: UserLocationTypeWhereUniqueInput
  }

  /**
   * UserLocationType updateMany
   */
  export type UserLocationTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLocationTypes.
     */
    data: XOR<UserLocationTypeUpdateManyMutationInput, UserLocationTypeUncheckedUpdateManyInput>
    /**
     * Filter which UserLocationTypes to update
     */
    where?: UserLocationTypeWhereInput
    /**
     * Limit how many UserLocationTypes to update.
     */
    limit?: number
  }

  /**
   * UserLocationType updateManyAndReturn
   */
  export type UserLocationTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationType
     */
    select?: UserLocationTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocationType
     */
    omit?: UserLocationTypeOmit<ExtArgs> | null
    /**
     * The data used to update UserLocationTypes.
     */
    data: XOR<UserLocationTypeUpdateManyMutationInput, UserLocationTypeUncheckedUpdateManyInput>
    /**
     * Filter which UserLocationTypes to update
     */
    where?: UserLocationTypeWhereInput
    /**
     * Limit how many UserLocationTypes to update.
     */
    limit?: number
  }

  /**
   * UserLocationType upsert
   */
  export type UserLocationTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationType
     */
    select?: UserLocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocationType
     */
    omit?: UserLocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLocationType to update in case it exists.
     */
    where: UserLocationTypeWhereUniqueInput
    /**
     * In case the UserLocationType found by the `where` argument doesn't exist, create a new UserLocationType with this data.
     */
    create: XOR<UserLocationTypeCreateInput, UserLocationTypeUncheckedCreateInput>
    /**
     * In case the UserLocationType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLocationTypeUpdateInput, UserLocationTypeUncheckedUpdateInput>
  }

  /**
   * UserLocationType delete
   */
  export type UserLocationTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationType
     */
    select?: UserLocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocationType
     */
    omit?: UserLocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationTypeInclude<ExtArgs> | null
    /**
     * Filter which UserLocationType to delete.
     */
    where: UserLocationTypeWhereUniqueInput
  }

  /**
   * UserLocationType deleteMany
   */
  export type UserLocationTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocationTypes to delete
     */
    where?: UserLocationTypeWhereInput
    /**
     * Limit how many UserLocationTypes to delete.
     */
    limit?: number
  }

  /**
   * UserLocationType.users
   */
  export type UserLocationType$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * UserLocationType without action
   */
  export type UserLocationTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocationType
     */
    select?: UserLocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocationType
     */
    omit?: UserLocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationTypeInclude<ExtArgs> | null
  }


  /**
   * Model UserProfessionalSummary
   */

  export type AggregateUserProfessionalSummary = {
    _count: UserProfessionalSummaryCountAggregateOutputType | null
    _min: UserProfessionalSummaryMinAggregateOutputType | null
    _max: UserProfessionalSummaryMaxAggregateOutputType | null
  }

  export type UserProfessionalSummaryMinAggregateOutputType = {
    id: string | null
    summary: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfessionalSummaryMaxAggregateOutputType = {
    id: string | null
    summary: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfessionalSummaryCountAggregateOutputType = {
    id: number
    summary: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfessionalSummaryMinAggregateInputType = {
    id?: true
    summary?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfessionalSummaryMaxAggregateInputType = {
    id?: true
    summary?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfessionalSummaryCountAggregateInputType = {
    id?: true
    summary?: true
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
    _min?: UserProfessionalSummaryMinAggregateInputType
    _max?: UserProfessionalSummaryMaxAggregateInputType
  }

  export type UserProfessionalSummaryGroupByOutputType = {
    id: string
    summary: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserProfessionalSummaryCountAggregateOutputType | null
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
    summary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfessionalSummary"]>

  export type UserProfessionalSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    summary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfessionalSummary"]>

  export type UserProfessionalSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    summary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfessionalSummary"]>

  export type UserProfessionalSummarySelectScalar = {
    id?: boolean
    summary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfessionalSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "summary" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfessionalSummary"]>
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
      summary: string
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
    readonly summary: FieldRef<"UserProfessionalSummary", 'String'>
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
   * Model UserSkill
   */

  export type AggregateUserSkill = {
    _count: UserSkillCountAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  export type UserSkillMinAggregateOutputType = {
    id: string | null
    skills: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillMaxAggregateOutputType = {
    id: string | null
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
    _min?: UserSkillMinAggregateInputType
    _max?: UserSkillMaxAggregateInputType
  }

  export type UserSkillGroupByOutputType = {
    id: string
    skills: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserSkillCountAggregateOutputType | null
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
      id: string
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
    readonly id: FieldRef<"UserSkill", 'String'>
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
   * Model UserWorkExperience
   */

  export type AggregateUserWorkExperience = {
    _count: UserWorkExperienceCountAggregateOutputType | null
    _min: UserWorkExperienceMinAggregateOutputType | null
    _max: UserWorkExperienceMaxAggregateOutputType | null
  }

  export type UserWorkExperienceMinAggregateOutputType = {
    id: string | null
    company_name: string | null
    enrollment: Date | null
    completion: Date | null
    description: string | null
    currentWorkPlace: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserWorkExperienceMaxAggregateOutputType = {
    id: string | null
    company_name: string | null
    enrollment: Date | null
    completion: Date | null
    description: string | null
    currentWorkPlace: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserWorkExperienceCountAggregateOutputType = {
    id: number
    company_name: number
    enrollment: number
    completion: number
    description: number
    currentWorkPlace: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserWorkExperienceMinAggregateInputType = {
    id?: true
    company_name?: true
    enrollment?: true
    completion?: true
    description?: true
    currentWorkPlace?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserWorkExperienceMaxAggregateInputType = {
    id?: true
    company_name?: true
    enrollment?: true
    completion?: true
    description?: true
    currentWorkPlace?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserWorkExperienceCountAggregateInputType = {
    id?: true
    company_name?: true
    enrollment?: true
    completion?: true
    description?: true
    currentWorkPlace?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserWorkExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWorkExperience to aggregate.
     */
    where?: UserWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWorkExperiences to fetch.
     */
    orderBy?: UserWorkExperienceOrderByWithRelationInput | UserWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserWorkExperiences
    **/
    _count?: true | UserWorkExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserWorkExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserWorkExperienceMaxAggregateInputType
  }

  export type GetUserWorkExperienceAggregateType<T extends UserWorkExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserWorkExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWorkExperience[P]>
      : GetScalarType<T[P], AggregateUserWorkExperience[P]>
  }




  export type UserWorkExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWorkExperienceWhereInput
    orderBy?: UserWorkExperienceOrderByWithAggregationInput | UserWorkExperienceOrderByWithAggregationInput[]
    by: UserWorkExperienceScalarFieldEnum[] | UserWorkExperienceScalarFieldEnum
    having?: UserWorkExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWorkExperienceCountAggregateInputType | true
    _min?: UserWorkExperienceMinAggregateInputType
    _max?: UserWorkExperienceMaxAggregateInputType
  }

  export type UserWorkExperienceGroupByOutputType = {
    id: string
    company_name: string
    enrollment: Date
    completion: Date | null
    description: string
    currentWorkPlace: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserWorkExperienceCountAggregateOutputType | null
    _min: UserWorkExperienceMinAggregateOutputType | null
    _max: UserWorkExperienceMaxAggregateOutputType | null
  }

  type GetUserWorkExperienceGroupByPayload<T extends UserWorkExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWorkExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserWorkExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserWorkExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], UserWorkExperienceGroupByOutputType[P]>
        }
      >
    >


  export type UserWorkExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    enrollment?: boolean
    completion?: boolean
    description?: boolean
    currentWorkPlace?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWorkExperience"]>

  export type UserWorkExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    enrollment?: boolean
    completion?: boolean
    description?: boolean
    currentWorkPlace?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWorkExperience"]>

  export type UserWorkExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    enrollment?: boolean
    completion?: boolean
    description?: boolean
    currentWorkPlace?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWorkExperience"]>

  export type UserWorkExperienceSelectScalar = {
    id?: boolean
    company_name?: boolean
    enrollment?: boolean
    completion?: boolean
    description?: boolean
    currentWorkPlace?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserWorkExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_name" | "enrollment" | "completion" | "description" | "currentWorkPlace" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["userWorkExperience"]>
  export type UserWorkExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserWorkExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserWorkExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserWorkExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserWorkExperience"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_name: string
      enrollment: Date
      completion: Date | null
      description: string
      currentWorkPlace: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userWorkExperience"]>
    composites: {}
  }

  type UserWorkExperienceGetPayload<S extends boolean | null | undefined | UserWorkExperienceDefaultArgs> = $Result.GetResult<Prisma.$UserWorkExperiencePayload, S>

  type UserWorkExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserWorkExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserWorkExperienceCountAggregateInputType | true
    }

  export interface UserWorkExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserWorkExperience'], meta: { name: 'UserWorkExperience' } }
    /**
     * Find zero or one UserWorkExperience that matches the filter.
     * @param {UserWorkExperienceFindUniqueArgs} args - Arguments to find a UserWorkExperience
     * @example
     * // Get one UserWorkExperience
     * const userWorkExperience = await prisma.userWorkExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserWorkExperienceFindUniqueArgs>(args: SelectSubset<T, UserWorkExperienceFindUniqueArgs<ExtArgs>>): Prisma__UserWorkExperienceClient<$Result.GetResult<Prisma.$UserWorkExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserWorkExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserWorkExperienceFindUniqueOrThrowArgs} args - Arguments to find a UserWorkExperience
     * @example
     * // Get one UserWorkExperience
     * const userWorkExperience = await prisma.userWorkExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserWorkExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserWorkExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserWorkExperienceClient<$Result.GetResult<Prisma.$UserWorkExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWorkExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkExperienceFindFirstArgs} args - Arguments to find a UserWorkExperience
     * @example
     * // Get one UserWorkExperience
     * const userWorkExperience = await prisma.userWorkExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserWorkExperienceFindFirstArgs>(args?: SelectSubset<T, UserWorkExperienceFindFirstArgs<ExtArgs>>): Prisma__UserWorkExperienceClient<$Result.GetResult<Prisma.$UserWorkExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWorkExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkExperienceFindFirstOrThrowArgs} args - Arguments to find a UserWorkExperience
     * @example
     * // Get one UserWorkExperience
     * const userWorkExperience = await prisma.userWorkExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserWorkExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserWorkExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserWorkExperienceClient<$Result.GetResult<Prisma.$UserWorkExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserWorkExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWorkExperiences
     * const userWorkExperiences = await prisma.userWorkExperience.findMany()
     * 
     * // Get first 10 UserWorkExperiences
     * const userWorkExperiences = await prisma.userWorkExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWorkExperienceWithIdOnly = await prisma.userWorkExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserWorkExperienceFindManyArgs>(args?: SelectSubset<T, UserWorkExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserWorkExperience.
     * @param {UserWorkExperienceCreateArgs} args - Arguments to create a UserWorkExperience.
     * @example
     * // Create one UserWorkExperience
     * const UserWorkExperience = await prisma.userWorkExperience.create({
     *   data: {
     *     // ... data to create a UserWorkExperience
     *   }
     * })
     * 
     */
    create<T extends UserWorkExperienceCreateArgs>(args: SelectSubset<T, UserWorkExperienceCreateArgs<ExtArgs>>): Prisma__UserWorkExperienceClient<$Result.GetResult<Prisma.$UserWorkExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserWorkExperiences.
     * @param {UserWorkExperienceCreateManyArgs} args - Arguments to create many UserWorkExperiences.
     * @example
     * // Create many UserWorkExperiences
     * const userWorkExperience = await prisma.userWorkExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserWorkExperienceCreateManyArgs>(args?: SelectSubset<T, UserWorkExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserWorkExperiences and returns the data saved in the database.
     * @param {UserWorkExperienceCreateManyAndReturnArgs} args - Arguments to create many UserWorkExperiences.
     * @example
     * // Create many UserWorkExperiences
     * const userWorkExperience = await prisma.userWorkExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserWorkExperiences and only return the `id`
     * const userWorkExperienceWithIdOnly = await prisma.userWorkExperience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserWorkExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserWorkExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserWorkExperience.
     * @param {UserWorkExperienceDeleteArgs} args - Arguments to delete one UserWorkExperience.
     * @example
     * // Delete one UserWorkExperience
     * const UserWorkExperience = await prisma.userWorkExperience.delete({
     *   where: {
     *     // ... filter to delete one UserWorkExperience
     *   }
     * })
     * 
     */
    delete<T extends UserWorkExperienceDeleteArgs>(args: SelectSubset<T, UserWorkExperienceDeleteArgs<ExtArgs>>): Prisma__UserWorkExperienceClient<$Result.GetResult<Prisma.$UserWorkExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserWorkExperience.
     * @param {UserWorkExperienceUpdateArgs} args - Arguments to update one UserWorkExperience.
     * @example
     * // Update one UserWorkExperience
     * const userWorkExperience = await prisma.userWorkExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserWorkExperienceUpdateArgs>(args: SelectSubset<T, UserWorkExperienceUpdateArgs<ExtArgs>>): Prisma__UserWorkExperienceClient<$Result.GetResult<Prisma.$UserWorkExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserWorkExperiences.
     * @param {UserWorkExperienceDeleteManyArgs} args - Arguments to filter UserWorkExperiences to delete.
     * @example
     * // Delete a few UserWorkExperiences
     * const { count } = await prisma.userWorkExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserWorkExperienceDeleteManyArgs>(args?: SelectSubset<T, UserWorkExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWorkExperiences
     * const userWorkExperience = await prisma.userWorkExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserWorkExperienceUpdateManyArgs>(args: SelectSubset<T, UserWorkExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWorkExperiences and returns the data updated in the database.
     * @param {UserWorkExperienceUpdateManyAndReturnArgs} args - Arguments to update many UserWorkExperiences.
     * @example
     * // Update many UserWorkExperiences
     * const userWorkExperience = await prisma.userWorkExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserWorkExperiences and only return the `id`
     * const userWorkExperienceWithIdOnly = await prisma.userWorkExperience.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserWorkExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserWorkExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWorkExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserWorkExperience.
     * @param {UserWorkExperienceUpsertArgs} args - Arguments to update or create a UserWorkExperience.
     * @example
     * // Update or create a UserWorkExperience
     * const userWorkExperience = await prisma.userWorkExperience.upsert({
     *   create: {
     *     // ... data to create a UserWorkExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWorkExperience we want to update
     *   }
     * })
     */
    upsert<T extends UserWorkExperienceUpsertArgs>(args: SelectSubset<T, UserWorkExperienceUpsertArgs<ExtArgs>>): Prisma__UserWorkExperienceClient<$Result.GetResult<Prisma.$UserWorkExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserWorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkExperienceCountArgs} args - Arguments to filter UserWorkExperiences to count.
     * @example
     * // Count the number of UserWorkExperiences
     * const count = await prisma.userWorkExperience.count({
     *   where: {
     *     // ... the filter for the UserWorkExperiences we want to count
     *   }
     * })
    **/
    count<T extends UserWorkExperienceCountArgs>(
      args?: Subset<T, UserWorkExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWorkExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserWorkExperienceAggregateArgs>(args: Subset<T, UserWorkExperienceAggregateArgs>): Prisma.PrismaPromise<GetUserWorkExperienceAggregateType<T>>

    /**
     * Group by UserWorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWorkExperienceGroupByArgs} args - Group by arguments.
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
      T extends UserWorkExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserWorkExperienceGroupByArgs['orderBy'] }
        : { orderBy?: UserWorkExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserWorkExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWorkExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserWorkExperience model
   */
  readonly fields: UserWorkExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserWorkExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserWorkExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserWorkExperience model
   */
  interface UserWorkExperienceFieldRefs {
    readonly id: FieldRef<"UserWorkExperience", 'String'>
    readonly company_name: FieldRef<"UserWorkExperience", 'String'>
    readonly enrollment: FieldRef<"UserWorkExperience", 'DateTime'>
    readonly completion: FieldRef<"UserWorkExperience", 'DateTime'>
    readonly description: FieldRef<"UserWorkExperience", 'String'>
    readonly currentWorkPlace: FieldRef<"UserWorkExperience", 'Boolean'>
    readonly userId: FieldRef<"UserWorkExperience", 'String'>
    readonly createdAt: FieldRef<"UserWorkExperience", 'DateTime'>
    readonly updatedAt: FieldRef<"UserWorkExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserWorkExperience findUnique
   */
  export type UserWorkExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkExperience
     */
    select?: UserWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkExperience
     */
    omit?: UserWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkExperience to fetch.
     */
    where: UserWorkExperienceWhereUniqueInput
  }

  /**
   * UserWorkExperience findUniqueOrThrow
   */
  export type UserWorkExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkExperience
     */
    select?: UserWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkExperience
     */
    omit?: UserWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkExperience to fetch.
     */
    where: UserWorkExperienceWhereUniqueInput
  }

  /**
   * UserWorkExperience findFirst
   */
  export type UserWorkExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkExperience
     */
    select?: UserWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkExperience
     */
    omit?: UserWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkExperience to fetch.
     */
    where?: UserWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWorkExperiences to fetch.
     */
    orderBy?: UserWorkExperienceOrderByWithRelationInput | UserWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWorkExperiences.
     */
    cursor?: UserWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWorkExperiences.
     */
    distinct?: UserWorkExperienceScalarFieldEnum | UserWorkExperienceScalarFieldEnum[]
  }

  /**
   * UserWorkExperience findFirstOrThrow
   */
  export type UserWorkExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkExperience
     */
    select?: UserWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkExperience
     */
    omit?: UserWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkExperience to fetch.
     */
    where?: UserWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWorkExperiences to fetch.
     */
    orderBy?: UserWorkExperienceOrderByWithRelationInput | UserWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWorkExperiences.
     */
    cursor?: UserWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWorkExperiences.
     */
    distinct?: UserWorkExperienceScalarFieldEnum | UserWorkExperienceScalarFieldEnum[]
  }

  /**
   * UserWorkExperience findMany
   */
  export type UserWorkExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkExperience
     */
    select?: UserWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkExperience
     */
    omit?: UserWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserWorkExperiences to fetch.
     */
    where?: UserWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWorkExperiences to fetch.
     */
    orderBy?: UserWorkExperienceOrderByWithRelationInput | UserWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserWorkExperiences.
     */
    cursor?: UserWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWorkExperiences.
     */
    skip?: number
    distinct?: UserWorkExperienceScalarFieldEnum | UserWorkExperienceScalarFieldEnum[]
  }

  /**
   * UserWorkExperience create
   */
  export type UserWorkExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkExperience
     */
    select?: UserWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkExperience
     */
    omit?: UserWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserWorkExperience.
     */
    data: XOR<UserWorkExperienceCreateInput, UserWorkExperienceUncheckedCreateInput>
  }

  /**
   * UserWorkExperience createMany
   */
  export type UserWorkExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserWorkExperiences.
     */
    data: UserWorkExperienceCreateManyInput | UserWorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserWorkExperience createManyAndReturn
   */
  export type UserWorkExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkExperience
     */
    select?: UserWorkExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkExperience
     */
    omit?: UserWorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many UserWorkExperiences.
     */
    data: UserWorkExperienceCreateManyInput | UserWorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWorkExperience update
   */
  export type UserWorkExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkExperience
     */
    select?: UserWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkExperience
     */
    omit?: UserWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserWorkExperience.
     */
    data: XOR<UserWorkExperienceUpdateInput, UserWorkExperienceUncheckedUpdateInput>
    /**
     * Choose, which UserWorkExperience to update.
     */
    where: UserWorkExperienceWhereUniqueInput
  }

  /**
   * UserWorkExperience updateMany
   */
  export type UserWorkExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserWorkExperiences.
     */
    data: XOR<UserWorkExperienceUpdateManyMutationInput, UserWorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which UserWorkExperiences to update
     */
    where?: UserWorkExperienceWhereInput
    /**
     * Limit how many UserWorkExperiences to update.
     */
    limit?: number
  }

  /**
   * UserWorkExperience updateManyAndReturn
   */
  export type UserWorkExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkExperience
     */
    select?: UserWorkExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkExperience
     */
    omit?: UserWorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to update UserWorkExperiences.
     */
    data: XOR<UserWorkExperienceUpdateManyMutationInput, UserWorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which UserWorkExperiences to update
     */
    where?: UserWorkExperienceWhereInput
    /**
     * Limit how many UserWorkExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWorkExperience upsert
   */
  export type UserWorkExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkExperience
     */
    select?: UserWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkExperience
     */
    omit?: UserWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserWorkExperience to update in case it exists.
     */
    where: UserWorkExperienceWhereUniqueInput
    /**
     * In case the UserWorkExperience found by the `where` argument doesn't exist, create a new UserWorkExperience with this data.
     */
    create: XOR<UserWorkExperienceCreateInput, UserWorkExperienceUncheckedCreateInput>
    /**
     * In case the UserWorkExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserWorkExperienceUpdateInput, UserWorkExperienceUncheckedUpdateInput>
  }

  /**
   * UserWorkExperience delete
   */
  export type UserWorkExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkExperience
     */
    select?: UserWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkExperience
     */
    omit?: UserWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter which UserWorkExperience to delete.
     */
    where: UserWorkExperienceWhereUniqueInput
  }

  /**
   * UserWorkExperience deleteMany
   */
  export type UserWorkExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWorkExperiences to delete
     */
    where?: UserWorkExperienceWhereInput
    /**
     * Limit how many UserWorkExperiences to delete.
     */
    limit?: number
  }

  /**
   * UserWorkExperience without action
   */
  export type UserWorkExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWorkExperience
     */
    select?: UserWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWorkExperience
     */
    omit?: UserWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWorkExperienceInclude<ExtArgs> | null
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


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    company_name: 'company_name',
    role: 'role',
    userId: 'userId',
    job_description: 'job_description'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const OnboardScalarFieldEnum: {
    id: 'id',
    onboarded: 'onboarded',
    userId: 'userId'
  };

  export type OnboardScalarFieldEnum = (typeof OnboardScalarFieldEnum)[keyof typeof OnboardScalarFieldEnum]


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
    location: 'location',
    professional_summary: 'professional_summary',
    locationTypeId: 'locationTypeId',
    phone: 'phone'
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


  export const UserCertificationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    emittedAt: 'emittedAt',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserCertificationScalarFieldEnum = (typeof UserCertificationScalarFieldEnum)[keyof typeof UserCertificationScalarFieldEnum]


  export const UserEducationScalarFieldEnum: {
    id: 'id',
    university_name: 'university_name',
    enrollment: 'enrollment',
    completion: 'completion',
    finished: 'finished',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserEducationScalarFieldEnum = (typeof UserEducationScalarFieldEnum)[keyof typeof UserEducationScalarFieldEnum]


  export const UserLocationTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type UserLocationTypeScalarFieldEnum = (typeof UserLocationTypeScalarFieldEnum)[keyof typeof UserLocationTypeScalarFieldEnum]


  export const UserProfessionalSummaryScalarFieldEnum: {
    id: 'id',
    summary: 'summary',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfessionalSummaryScalarFieldEnum = (typeof UserProfessionalSummaryScalarFieldEnum)[keyof typeof UserProfessionalSummaryScalarFieldEnum]


  export const UserSkillScalarFieldEnum: {
    id: 'id',
    skills: 'skills',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSkillScalarFieldEnum = (typeof UserSkillScalarFieldEnum)[keyof typeof UserSkillScalarFieldEnum]


  export const UserWorkExperienceScalarFieldEnum: {
    id: 'id',
    company_name: 'company_name',
    enrollment: 'enrollment',
    completion: 'completion',
    description: 'description',
    currentWorkPlace: 'currentWorkPlace',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserWorkExperienceScalarFieldEnum = (typeof UserWorkExperienceScalarFieldEnum)[keyof typeof UserWorkExperienceScalarFieldEnum]


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


  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    company_name?: StringFilter<"Application"> | string
    role?: StringFilter<"Application"> | string
    userId?: StringFilter<"Application"> | string
    job_description?: StringNullableFilter<"Application"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    company_name?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    job_description?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    company_name?: StringFilter<"Application"> | string
    role?: StringFilter<"Application"> | string
    userId?: StringFilter<"Application"> | string
    job_description?: StringNullableFilter<"Application"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    company_name?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    job_description?: SortOrderInput | SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    company_name?: StringWithAggregatesFilter<"Application"> | string
    role?: StringWithAggregatesFilter<"Application"> | string
    userId?: StringWithAggregatesFilter<"Application"> | string
    job_description?: StringNullableWithAggregatesFilter<"Application"> | string | null
  }

  export type OnboardWhereInput = {
    AND?: OnboardWhereInput | OnboardWhereInput[]
    OR?: OnboardWhereInput[]
    NOT?: OnboardWhereInput | OnboardWhereInput[]
    id?: StringFilter<"Onboard"> | string
    onboarded?: BoolFilter<"Onboard"> | boolean
    userId?: StringFilter<"Onboard"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OnboardOrderByWithRelationInput = {
    id?: SortOrder
    onboarded?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OnboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: OnboardWhereInput | OnboardWhereInput[]
    OR?: OnboardWhereInput[]
    NOT?: OnboardWhereInput | OnboardWhereInput[]
    onboarded?: BoolFilter<"Onboard"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type OnboardOrderByWithAggregationInput = {
    id?: SortOrder
    onboarded?: SortOrder
    userId?: SortOrder
    _count?: OnboardCountOrderByAggregateInput
    _max?: OnboardMaxOrderByAggregateInput
    _min?: OnboardMinOrderByAggregateInput
  }

  export type OnboardScalarWhereWithAggregatesInput = {
    AND?: OnboardScalarWhereWithAggregatesInput | OnboardScalarWhereWithAggregatesInput[]
    OR?: OnboardScalarWhereWithAggregatesInput[]
    NOT?: OnboardScalarWhereWithAggregatesInput | OnboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Onboard"> | string
    onboarded?: BoolWithAggregatesFilter<"Onboard"> | boolean
    userId?: StringWithAggregatesFilter<"Onboard"> | string
  }

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
    location?: StringNullableFilter<"User"> | string | null
    professional_summary?: StringNullableFilter<"User"> | string | null
    locationTypeId?: IntNullableFilter<"User"> | number | null
    phone?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    locationType?: XOR<UserLocationTypeNullableScalarRelationFilter, UserLocationTypeWhereInput> | null
    applications?: ApplicationListRelationFilter
    onboarded?: XOR<OnboardNullableScalarRelationFilter, OnboardWhereInput> | null
    UserCertification?: UserCertificationListRelationFilter
    user_educations?: UserEducationListRelationFilter
    UserProfessionalSummary?: XOR<UserProfessionalSummaryNullableScalarRelationFilter, UserProfessionalSummaryWhereInput> | null
    user_skills?: XOR<UserSkillNullableScalarRelationFilter, UserSkillWhereInput> | null
    UserWorkExperience?: UserWorkExperienceListRelationFilter
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
    location?: SortOrderInput | SortOrder
    professional_summary?: SortOrderInput | SortOrder
    locationTypeId?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    locationType?: UserLocationTypeOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
    onboarded?: OnboardOrderByWithRelationInput
    UserCertification?: UserCertificationOrderByRelationAggregateInput
    user_educations?: UserEducationOrderByRelationAggregateInput
    UserProfessionalSummary?: UserProfessionalSummaryOrderByWithRelationInput
    user_skills?: UserSkillOrderByWithRelationInput
    UserWorkExperience?: UserWorkExperienceOrderByRelationAggregateInput
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
    location?: StringNullableFilter<"User"> | string | null
    professional_summary?: StringNullableFilter<"User"> | string | null
    locationTypeId?: IntNullableFilter<"User"> | number | null
    phone?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    locationType?: XOR<UserLocationTypeNullableScalarRelationFilter, UserLocationTypeWhereInput> | null
    applications?: ApplicationListRelationFilter
    onboarded?: XOR<OnboardNullableScalarRelationFilter, OnboardWhereInput> | null
    UserCertification?: UserCertificationListRelationFilter
    user_educations?: UserEducationListRelationFilter
    UserProfessionalSummary?: XOR<UserProfessionalSummaryNullableScalarRelationFilter, UserProfessionalSummaryWhereInput> | null
    user_skills?: XOR<UserSkillNullableScalarRelationFilter, UserSkillWhereInput> | null
    UserWorkExperience?: UserWorkExperienceListRelationFilter
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
    location?: SortOrderInput | SortOrder
    professional_summary?: SortOrderInput | SortOrder
    locationTypeId?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
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
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    professional_summary?: StringNullableWithAggregatesFilter<"User"> | string | null
    locationTypeId?: IntNullableWithAggregatesFilter<"User"> | number | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
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

  export type UserCertificationWhereInput = {
    AND?: UserCertificationWhereInput | UserCertificationWhereInput[]
    OR?: UserCertificationWhereInput[]
    NOT?: UserCertificationWhereInput | UserCertificationWhereInput[]
    id?: StringFilter<"UserCertification"> | string
    name?: StringFilter<"UserCertification"> | string
    emittedAt?: DateTimeFilter<"UserCertification"> | Date | string
    description?: StringNullableFilter<"UserCertification"> | string | null
    userId?: StringFilter<"UserCertification"> | string
    createdAt?: DateTimeFilter<"UserCertification"> | Date | string
    updatedAt?: DateTimeFilter<"UserCertification"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserCertificationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    emittedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type UserCertificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserCertificationWhereInput | UserCertificationWhereInput[]
    OR?: UserCertificationWhereInput[]
    NOT?: UserCertificationWhereInput | UserCertificationWhereInput[]
    name?: StringFilter<"UserCertification"> | string
    emittedAt?: DateTimeFilter<"UserCertification"> | Date | string
    description?: StringNullableFilter<"UserCertification"> | string | null
    userId?: StringFilter<"UserCertification"> | string
    createdAt?: DateTimeFilter<"UserCertification"> | Date | string
    updatedAt?: DateTimeFilter<"UserCertification"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserCertificationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    emittedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCertificationCountOrderByAggregateInput
    _max?: UserCertificationMaxOrderByAggregateInput
    _min?: UserCertificationMinOrderByAggregateInput
  }

  export type UserCertificationScalarWhereWithAggregatesInput = {
    AND?: UserCertificationScalarWhereWithAggregatesInput | UserCertificationScalarWhereWithAggregatesInput[]
    OR?: UserCertificationScalarWhereWithAggregatesInput[]
    NOT?: UserCertificationScalarWhereWithAggregatesInput | UserCertificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCertification"> | string
    name?: StringWithAggregatesFilter<"UserCertification"> | string
    emittedAt?: DateTimeWithAggregatesFilter<"UserCertification"> | Date | string
    description?: StringNullableWithAggregatesFilter<"UserCertification"> | string | null
    userId?: StringWithAggregatesFilter<"UserCertification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCertification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCertification"> | Date | string
  }

  export type UserEducationWhereInput = {
    AND?: UserEducationWhereInput | UserEducationWhereInput[]
    OR?: UserEducationWhereInput[]
    NOT?: UserEducationWhereInput | UserEducationWhereInput[]
    id?: StringFilter<"UserEducation"> | string
    university_name?: StringFilter<"UserEducation"> | string
    enrollment?: DateTimeFilter<"UserEducation"> | Date | string
    completion?: DateTimeNullableFilter<"UserEducation"> | Date | string | null
    finished?: BoolFilter<"UserEducation"> | boolean
    description?: StringNullableFilter<"UserEducation"> | string | null
    userId?: StringFilter<"UserEducation"> | string
    createdAt?: DateTimeFilter<"UserEducation"> | Date | string
    updatedAt?: DateTimeFilter<"UserEducation"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserEducationOrderByWithRelationInput = {
    id?: SortOrder
    university_name?: SortOrder
    enrollment?: SortOrder
    completion?: SortOrderInput | SortOrder
    finished?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type UserEducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserEducationWhereInput | UserEducationWhereInput[]
    OR?: UserEducationWhereInput[]
    NOT?: UserEducationWhereInput | UserEducationWhereInput[]
    university_name?: StringFilter<"UserEducation"> | string
    enrollment?: DateTimeFilter<"UserEducation"> | Date | string
    completion?: DateTimeNullableFilter<"UserEducation"> | Date | string | null
    finished?: BoolFilter<"UserEducation"> | boolean
    description?: StringNullableFilter<"UserEducation"> | string | null
    userId?: StringFilter<"UserEducation"> | string
    createdAt?: DateTimeFilter<"UserEducation"> | Date | string
    updatedAt?: DateTimeFilter<"UserEducation"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserEducationOrderByWithAggregationInput = {
    id?: SortOrder
    university_name?: SortOrder
    enrollment?: SortOrder
    completion?: SortOrderInput | SortOrder
    finished?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserEducationCountOrderByAggregateInput
    _max?: UserEducationMaxOrderByAggregateInput
    _min?: UserEducationMinOrderByAggregateInput
  }

  export type UserEducationScalarWhereWithAggregatesInput = {
    AND?: UserEducationScalarWhereWithAggregatesInput | UserEducationScalarWhereWithAggregatesInput[]
    OR?: UserEducationScalarWhereWithAggregatesInput[]
    NOT?: UserEducationScalarWhereWithAggregatesInput | UserEducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserEducation"> | string
    university_name?: StringWithAggregatesFilter<"UserEducation"> | string
    enrollment?: DateTimeWithAggregatesFilter<"UserEducation"> | Date | string
    completion?: DateTimeNullableWithAggregatesFilter<"UserEducation"> | Date | string | null
    finished?: BoolWithAggregatesFilter<"UserEducation"> | boolean
    description?: StringNullableWithAggregatesFilter<"UserEducation"> | string | null
    userId?: StringWithAggregatesFilter<"UserEducation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserEducation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserEducation"> | Date | string
  }

  export type UserLocationTypeWhereInput = {
    AND?: UserLocationTypeWhereInput | UserLocationTypeWhereInput[]
    OR?: UserLocationTypeWhereInput[]
    NOT?: UserLocationTypeWhereInput | UserLocationTypeWhereInput[]
    id?: IntFilter<"UserLocationType"> | number
    name?: StringFilter<"UserLocationType"> | string
    users?: UserListRelationFilter
  }

  export type UserLocationTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserLocationTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: UserLocationTypeWhereInput | UserLocationTypeWhereInput[]
    OR?: UserLocationTypeWhereInput[]
    NOT?: UserLocationTypeWhereInput | UserLocationTypeWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type UserLocationTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: UserLocationTypeCountOrderByAggregateInput
    _avg?: UserLocationTypeAvgOrderByAggregateInput
    _max?: UserLocationTypeMaxOrderByAggregateInput
    _min?: UserLocationTypeMinOrderByAggregateInput
    _sum?: UserLocationTypeSumOrderByAggregateInput
  }

  export type UserLocationTypeScalarWhereWithAggregatesInput = {
    AND?: UserLocationTypeScalarWhereWithAggregatesInput | UserLocationTypeScalarWhereWithAggregatesInput[]
    OR?: UserLocationTypeScalarWhereWithAggregatesInput[]
    NOT?: UserLocationTypeScalarWhereWithAggregatesInput | UserLocationTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserLocationType"> | number
    name?: StringWithAggregatesFilter<"UserLocationType"> | string
  }

  export type UserProfessionalSummaryWhereInput = {
    AND?: UserProfessionalSummaryWhereInput | UserProfessionalSummaryWhereInput[]
    OR?: UserProfessionalSummaryWhereInput[]
    NOT?: UserProfessionalSummaryWhereInput | UserProfessionalSummaryWhereInput[]
    id?: StringFilter<"UserProfessionalSummary"> | string
    summary?: StringFilter<"UserProfessionalSummary"> | string
    userId?: StringFilter<"UserProfessionalSummary"> | string
    createdAt?: DateTimeFilter<"UserProfessionalSummary"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfessionalSummary"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfessionalSummaryOrderByWithRelationInput = {
    id?: SortOrder
    summary?: SortOrder
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
    summary?: StringFilter<"UserProfessionalSummary"> | string
    createdAt?: DateTimeFilter<"UserProfessionalSummary"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfessionalSummary"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfessionalSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    summary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfessionalSummaryCountOrderByAggregateInput
    _max?: UserProfessionalSummaryMaxOrderByAggregateInput
    _min?: UserProfessionalSummaryMinOrderByAggregateInput
  }

  export type UserProfessionalSummaryScalarWhereWithAggregatesInput = {
    AND?: UserProfessionalSummaryScalarWhereWithAggregatesInput | UserProfessionalSummaryScalarWhereWithAggregatesInput[]
    OR?: UserProfessionalSummaryScalarWhereWithAggregatesInput[]
    NOT?: UserProfessionalSummaryScalarWhereWithAggregatesInput | UserProfessionalSummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfessionalSummary"> | string
    summary?: StringWithAggregatesFilter<"UserProfessionalSummary"> | string
    userId?: StringWithAggregatesFilter<"UserProfessionalSummary"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserProfessionalSummary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfessionalSummary"> | Date | string
  }

  export type UserSkillWhereInput = {
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    id?: StringFilter<"UserSkill"> | string
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
    id?: string
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
    _max?: UserSkillMaxOrderByAggregateInput
    _min?: UserSkillMinOrderByAggregateInput
  }

  export type UserSkillScalarWhereWithAggregatesInput = {
    AND?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    OR?: UserSkillScalarWhereWithAggregatesInput[]
    NOT?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSkill"> | string
    skills?: StringWithAggregatesFilter<"UserSkill"> | string
    userId?: StringWithAggregatesFilter<"UserSkill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSkill"> | Date | string
  }

  export type UserWorkExperienceWhereInput = {
    AND?: UserWorkExperienceWhereInput | UserWorkExperienceWhereInput[]
    OR?: UserWorkExperienceWhereInput[]
    NOT?: UserWorkExperienceWhereInput | UserWorkExperienceWhereInput[]
    id?: StringFilter<"UserWorkExperience"> | string
    company_name?: StringFilter<"UserWorkExperience"> | string
    enrollment?: DateTimeFilter<"UserWorkExperience"> | Date | string
    completion?: DateTimeNullableFilter<"UserWorkExperience"> | Date | string | null
    description?: StringFilter<"UserWorkExperience"> | string
    currentWorkPlace?: BoolFilter<"UserWorkExperience"> | boolean
    userId?: StringFilter<"UserWorkExperience"> | string
    createdAt?: DateTimeFilter<"UserWorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"UserWorkExperience"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserWorkExperienceOrderByWithRelationInput = {
    id?: SortOrder
    company_name?: SortOrder
    enrollment?: SortOrder
    completion?: SortOrderInput | SortOrder
    description?: SortOrder
    currentWorkPlace?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserWorkExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWorkExperienceWhereInput | UserWorkExperienceWhereInput[]
    OR?: UserWorkExperienceWhereInput[]
    NOT?: UserWorkExperienceWhereInput | UserWorkExperienceWhereInput[]
    company_name?: StringFilter<"UserWorkExperience"> | string
    enrollment?: DateTimeFilter<"UserWorkExperience"> | Date | string
    completion?: DateTimeNullableFilter<"UserWorkExperience"> | Date | string | null
    description?: StringFilter<"UserWorkExperience"> | string
    currentWorkPlace?: BoolFilter<"UserWorkExperience"> | boolean
    userId?: StringFilter<"UserWorkExperience"> | string
    createdAt?: DateTimeFilter<"UserWorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"UserWorkExperience"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserWorkExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    company_name?: SortOrder
    enrollment?: SortOrder
    completion?: SortOrderInput | SortOrder
    description?: SortOrder
    currentWorkPlace?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserWorkExperienceCountOrderByAggregateInput
    _max?: UserWorkExperienceMaxOrderByAggregateInput
    _min?: UserWorkExperienceMinOrderByAggregateInput
  }

  export type UserWorkExperienceScalarWhereWithAggregatesInput = {
    AND?: UserWorkExperienceScalarWhereWithAggregatesInput | UserWorkExperienceScalarWhereWithAggregatesInput[]
    OR?: UserWorkExperienceScalarWhereWithAggregatesInput[]
    NOT?: UserWorkExperienceScalarWhereWithAggregatesInput | UserWorkExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserWorkExperience"> | string
    company_name?: StringWithAggregatesFilter<"UserWorkExperience"> | string
    enrollment?: DateTimeWithAggregatesFilter<"UserWorkExperience"> | Date | string
    completion?: DateTimeNullableWithAggregatesFilter<"UserWorkExperience"> | Date | string | null
    description?: StringWithAggregatesFilter<"UserWorkExperience"> | string
    currentWorkPlace?: BoolWithAggregatesFilter<"UserWorkExperience"> | boolean
    userId?: StringWithAggregatesFilter<"UserWorkExperience"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserWorkExperience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserWorkExperience"> | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    company_name: string
    role: string
    job_description?: string | null
    user: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    company_name: string
    role: string
    userId: string
    job_description?: string | null
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationCreateManyInput = {
    id?: string
    company_name: string
    role: string
    userId: string
    job_description?: string | null
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OnboardCreateInput = {
    id?: string
    onboarded?: boolean
    user: UserCreateNestedOneWithoutOnboardedInput
  }

  export type OnboardUncheckedCreateInput = {
    id?: string
    onboarded?: boolean
    userId: string
  }

  export type OnboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutOnboardedNestedInput
  }

  export type OnboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OnboardCreateManyInput = {
    id?: string
    onboarded?: boolean
    userId: string
  }

  export type OnboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OnboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
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
    location?: string | null
    professional_summary?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    locationType?: UserLocationTypeCreateNestedOneWithoutUsersInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    onboarded?: OnboardCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationCreateNestedManyWithoutUserInput
    user_educations?: UserEducationCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_skills?: UserSkillCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceCreateNestedManyWithoutUserInput
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
    location?: string | null
    professional_summary?: string | null
    locationTypeId?: number | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    onboarded?: OnboardUncheckedCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationUncheckedCreateNestedManyWithoutUserInput
    user_educations?: UserEducationUncheckedCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_skills?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceUncheckedCreateNestedManyWithoutUserInput
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
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    locationType?: UserLocationTypeUpdateOneWithoutUsersNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUpdateManyWithoutUserNestedInput
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
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    locationTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUncheckedUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUncheckedUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUncheckedUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUncheckedUpdateManyWithoutUserNestedInput
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
    location?: string | null
    professional_summary?: string | null
    locationTypeId?: number | null
    phone?: string | null
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
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
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
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    locationTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UserCertificationCreateInput = {
    id?: string
    name: string
    emittedAt?: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutUserCertificationInput
  }

  export type UserCertificationUncheckedCreateInput = {
    id?: string
    name: string
    emittedAt?: Date | string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCertificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserCertificationNestedInput
  }

  export type UserCertificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCertificationCreateManyInput = {
    id?: string
    name: string
    emittedAt?: Date | string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCertificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCertificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEducationCreateInput = {
    id?: string
    university_name: string
    enrollment?: Date | string
    completion?: Date | string | null
    finished: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutUser_educationsInput
  }

  export type UserEducationUncheckedCreateInput = {
    id?: string
    university_name: string
    enrollment?: Date | string
    completion?: Date | string | null
    finished: boolean
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserEducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    university_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUser_educationsNestedInput
  }

  export type UserEducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    university_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEducationCreateManyInput = {
    id?: string
    university_name: string
    enrollment?: Date | string
    completion?: Date | string | null
    finished: boolean
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserEducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    university_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    university_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationTypeCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutLocationTypeInput
  }

  export type UserLocationTypeUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutLocationTypeInput
  }

  export type UserLocationTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutLocationTypeNestedInput
  }

  export type UserLocationTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutLocationTypeNestedInput
  }

  export type UserLocationTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type UserLocationTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserLocationTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserProfessionalSummaryCreateInput = {
    id?: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserProfessionalSummaryInput
  }

  export type UserProfessionalSummaryUncheckedCreateInput = {
    id?: string
    summary: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfessionalSummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserProfessionalSummaryNestedInput
  }

  export type UserProfessionalSummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalSummaryCreateManyInput = {
    id?: string
    summary: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfessionalSummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalSummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateInput = {
    id?: string
    skills: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUser_skillsInput
  }

  export type UserSkillUncheckedCreateInput = {
    id?: string
    skills: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_skillsNestedInput
  }

  export type UserSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateManyInput = {
    id?: string
    skills: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkExperienceCreateInput = {
    id?: string
    company_name: string
    enrollment?: Date | string
    completion?: Date | string | null
    description: string
    currentWorkPlace: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserWorkExperienceInput
  }

  export type UserWorkExperienceUncheckedCreateInput = {
    id?: string
    company_name: string
    enrollment?: Date | string
    completion?: Date | string | null
    description: string
    currentWorkPlace: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserWorkExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserWorkExperienceNestedInput
  }

  export type UserWorkExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkExperienceCreateManyInput = {
    id?: string
    company_name: string
    enrollment?: Date | string
    completion?: Date | string | null
    description: string
    currentWorkPlace: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserWorkExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    job_description?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    job_description?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    job_description?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OnboardCountOrderByAggregateInput = {
    id?: SortOrder
    onboarded?: SortOrder
    userId?: SortOrder
  }

  export type OnboardMaxOrderByAggregateInput = {
    id?: SortOrder
    onboarded?: SortOrder
    userId?: SortOrder
  }

  export type OnboardMinOrderByAggregateInput = {
    id?: SortOrder
    onboarded?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserLocationTypeNullableScalarRelationFilter = {
    is?: UserLocationTypeWhereInput | null
    isNot?: UserLocationTypeWhereInput | null
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type OnboardNullableScalarRelationFilter = {
    is?: OnboardWhereInput | null
    isNot?: OnboardWhereInput | null
  }

  export type UserCertificationListRelationFilter = {
    every?: UserCertificationWhereInput
    some?: UserCertificationWhereInput
    none?: UserCertificationWhereInput
  }

  export type UserEducationListRelationFilter = {
    every?: UserEducationWhereInput
    some?: UserEducationWhereInput
    none?: UserEducationWhereInput
  }

  export type UserProfessionalSummaryNullableScalarRelationFilter = {
    is?: UserProfessionalSummaryWhereInput | null
    isNot?: UserProfessionalSummaryWhereInput | null
  }

  export type UserSkillNullableScalarRelationFilter = {
    is?: UserSkillWhereInput | null
    isNot?: UserSkillWhereInput | null
  }

  export type UserWorkExperienceListRelationFilter = {
    every?: UserWorkExperienceWhereInput
    some?: UserWorkExperienceWhereInput
    none?: UserWorkExperienceWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCertificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserEducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserWorkExperienceOrderByRelationAggregateInput = {
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
    location?: SortOrder
    professional_summary?: SortOrder
    locationTypeId?: SortOrder
    phone?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    locationTypeId?: SortOrder
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
    location?: SortOrder
    professional_summary?: SortOrder
    locationTypeId?: SortOrder
    phone?: SortOrder
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
    location?: SortOrder
    professional_summary?: SortOrder
    locationTypeId?: SortOrder
    phone?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    locationTypeId?: SortOrder
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

  export type UserCertificationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    emittedAt?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCertificationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    emittedAt?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCertificationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    emittedAt?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserEducationCountOrderByAggregateInput = {
    id?: SortOrder
    university_name?: SortOrder
    enrollment?: SortOrder
    completion?: SortOrder
    finished?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserEducationMaxOrderByAggregateInput = {
    id?: SortOrder
    university_name?: SortOrder
    enrollment?: SortOrder
    completion?: SortOrder
    finished?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserEducationMinOrderByAggregateInput = {
    id?: SortOrder
    university_name?: SortOrder
    enrollment?: SortOrder
    completion?: SortOrder
    finished?: SortOrder
    description?: SortOrder
    userId?: SortOrder
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLocationTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserLocationTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserLocationTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserLocationTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserLocationTypeSumOrderByAggregateInput = {
    id?: SortOrder
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
    summary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfessionalSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    summary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfessionalSummaryMinOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserWorkExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    enrollment?: SortOrder
    completion?: SortOrder
    description?: SortOrder
    currentWorkPlace?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWorkExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    enrollment?: SortOrder
    completion?: SortOrder
    description?: SortOrder
    currentWorkPlace?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWorkExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    enrollment?: SortOrder
    completion?: SortOrder
    description?: SortOrder
    currentWorkPlace?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserCreateNestedOneWithoutOnboardedInput = {
    create?: XOR<UserCreateWithoutOnboardedInput, UserUncheckedCreateWithoutOnboardedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnboardedInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutOnboardedNestedInput = {
    create?: XOR<UserCreateWithoutOnboardedInput, UserUncheckedCreateWithoutOnboardedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnboardedInput
    upsert?: UserUpsertWithoutOnboardedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOnboardedInput, UserUpdateWithoutOnboardedInput>, UserUncheckedUpdateWithoutOnboardedInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserLocationTypeCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserLocationTypeCreateWithoutUsersInput, UserLocationTypeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserLocationTypeCreateOrConnectWithoutUsersInput
    connect?: UserLocationTypeWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type OnboardCreateNestedOneWithoutUserInput = {
    create?: XOR<OnboardCreateWithoutUserInput, OnboardUncheckedCreateWithoutUserInput>
    connectOrCreate?: OnboardCreateOrConnectWithoutUserInput
    connect?: OnboardWhereUniqueInput
  }

  export type UserCertificationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCertificationCreateWithoutUserInput, UserCertificationUncheckedCreateWithoutUserInput> | UserCertificationCreateWithoutUserInput[] | UserCertificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCertificationCreateOrConnectWithoutUserInput | UserCertificationCreateOrConnectWithoutUserInput[]
    createMany?: UserCertificationCreateManyUserInputEnvelope
    connect?: UserCertificationWhereUniqueInput | UserCertificationWhereUniqueInput[]
  }

  export type UserEducationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEducationCreateWithoutUserInput, UserEducationUncheckedCreateWithoutUserInput> | UserEducationCreateWithoutUserInput[] | UserEducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEducationCreateOrConnectWithoutUserInput | UserEducationCreateOrConnectWithoutUserInput[]
    createMany?: UserEducationCreateManyUserInputEnvelope
    connect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
  }

  export type UserProfessionalSummaryCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfessionalSummaryCreateWithoutUserInput, UserProfessionalSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfessionalSummaryCreateOrConnectWithoutUserInput
    connect?: UserProfessionalSummaryWhereUniqueInput
  }

  export type UserSkillCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput
    connect?: UserSkillWhereUniqueInput
  }

  export type UserWorkExperienceCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWorkExperienceCreateWithoutUserInput, UserWorkExperienceUncheckedCreateWithoutUserInput> | UserWorkExperienceCreateWithoutUserInput[] | UserWorkExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWorkExperienceCreateOrConnectWithoutUserInput | UserWorkExperienceCreateOrConnectWithoutUserInput[]
    createMany?: UserWorkExperienceCreateManyUserInputEnvelope
    connect?: UserWorkExperienceWhereUniqueInput | UserWorkExperienceWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type OnboardUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OnboardCreateWithoutUserInput, OnboardUncheckedCreateWithoutUserInput>
    connectOrCreate?: OnboardCreateOrConnectWithoutUserInput
    connect?: OnboardWhereUniqueInput
  }

  export type UserCertificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCertificationCreateWithoutUserInput, UserCertificationUncheckedCreateWithoutUserInput> | UserCertificationCreateWithoutUserInput[] | UserCertificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCertificationCreateOrConnectWithoutUserInput | UserCertificationCreateOrConnectWithoutUserInput[]
    createMany?: UserCertificationCreateManyUserInputEnvelope
    connect?: UserCertificationWhereUniqueInput | UserCertificationWhereUniqueInput[]
  }

  export type UserEducationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEducationCreateWithoutUserInput, UserEducationUncheckedCreateWithoutUserInput> | UserEducationCreateWithoutUserInput[] | UserEducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEducationCreateOrConnectWithoutUserInput | UserEducationCreateOrConnectWithoutUserInput[]
    createMany?: UserEducationCreateManyUserInputEnvelope
    connect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
  }

  export type UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfessionalSummaryCreateWithoutUserInput, UserProfessionalSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfessionalSummaryCreateOrConnectWithoutUserInput
    connect?: UserProfessionalSummaryWhereUniqueInput
  }

  export type UserSkillUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput
    connect?: UserSkillWhereUniqueInput
  }

  export type UserWorkExperienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWorkExperienceCreateWithoutUserInput, UserWorkExperienceUncheckedCreateWithoutUserInput> | UserWorkExperienceCreateWithoutUserInput[] | UserWorkExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWorkExperienceCreateOrConnectWithoutUserInput | UserWorkExperienceCreateOrConnectWithoutUserInput[]
    createMany?: UserWorkExperienceCreateManyUserInputEnvelope
    connect?: UserWorkExperienceWhereUniqueInput | UserWorkExperienceWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type UserLocationTypeUpdateOneWithoutUsersNestedInput = {
    create?: XOR<UserLocationTypeCreateWithoutUsersInput, UserLocationTypeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserLocationTypeCreateOrConnectWithoutUsersInput
    upsert?: UserLocationTypeUpsertWithoutUsersInput
    disconnect?: UserLocationTypeWhereInput | boolean
    delete?: UserLocationTypeWhereInput | boolean
    connect?: UserLocationTypeWhereUniqueInput
    update?: XOR<XOR<UserLocationTypeUpdateToOneWithWhereWithoutUsersInput, UserLocationTypeUpdateWithoutUsersInput>, UserLocationTypeUncheckedUpdateWithoutUsersInput>
  }

  export type ApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutUserInput | ApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutUserInput | ApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutUserInput | ApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type OnboardUpdateOneWithoutUserNestedInput = {
    create?: XOR<OnboardCreateWithoutUserInput, OnboardUncheckedCreateWithoutUserInput>
    connectOrCreate?: OnboardCreateOrConnectWithoutUserInput
    upsert?: OnboardUpsertWithoutUserInput
    disconnect?: OnboardWhereInput | boolean
    delete?: OnboardWhereInput | boolean
    connect?: OnboardWhereUniqueInput
    update?: XOR<XOR<OnboardUpdateToOneWithWhereWithoutUserInput, OnboardUpdateWithoutUserInput>, OnboardUncheckedUpdateWithoutUserInput>
  }

  export type UserCertificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCertificationCreateWithoutUserInput, UserCertificationUncheckedCreateWithoutUserInput> | UserCertificationCreateWithoutUserInput[] | UserCertificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCertificationCreateOrConnectWithoutUserInput | UserCertificationCreateOrConnectWithoutUserInput[]
    upsert?: UserCertificationUpsertWithWhereUniqueWithoutUserInput | UserCertificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCertificationCreateManyUserInputEnvelope
    set?: UserCertificationWhereUniqueInput | UserCertificationWhereUniqueInput[]
    disconnect?: UserCertificationWhereUniqueInput | UserCertificationWhereUniqueInput[]
    delete?: UserCertificationWhereUniqueInput | UserCertificationWhereUniqueInput[]
    connect?: UserCertificationWhereUniqueInput | UserCertificationWhereUniqueInput[]
    update?: UserCertificationUpdateWithWhereUniqueWithoutUserInput | UserCertificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCertificationUpdateManyWithWhereWithoutUserInput | UserCertificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCertificationScalarWhereInput | UserCertificationScalarWhereInput[]
  }

  export type UserEducationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEducationCreateWithoutUserInput, UserEducationUncheckedCreateWithoutUserInput> | UserEducationCreateWithoutUserInput[] | UserEducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEducationCreateOrConnectWithoutUserInput | UserEducationCreateOrConnectWithoutUserInput[]
    upsert?: UserEducationUpsertWithWhereUniqueWithoutUserInput | UserEducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEducationCreateManyUserInputEnvelope
    set?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    disconnect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    delete?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    connect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    update?: UserEducationUpdateWithWhereUniqueWithoutUserInput | UserEducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEducationUpdateManyWithWhereWithoutUserInput | UserEducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEducationScalarWhereInput | UserEducationScalarWhereInput[]
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

  export type UserSkillUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput
    upsert?: UserSkillUpsertWithoutUserInput
    disconnect?: UserSkillWhereInput | boolean
    delete?: UserSkillWhereInput | boolean
    connect?: UserSkillWhereUniqueInput
    update?: XOR<XOR<UserSkillUpdateToOneWithWhereWithoutUserInput, UserSkillUpdateWithoutUserInput>, UserSkillUncheckedUpdateWithoutUserInput>
  }

  export type UserWorkExperienceUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWorkExperienceCreateWithoutUserInput, UserWorkExperienceUncheckedCreateWithoutUserInput> | UserWorkExperienceCreateWithoutUserInput[] | UserWorkExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWorkExperienceCreateOrConnectWithoutUserInput | UserWorkExperienceCreateOrConnectWithoutUserInput[]
    upsert?: UserWorkExperienceUpsertWithWhereUniqueWithoutUserInput | UserWorkExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWorkExperienceCreateManyUserInputEnvelope
    set?: UserWorkExperienceWhereUniqueInput | UserWorkExperienceWhereUniqueInput[]
    disconnect?: UserWorkExperienceWhereUniqueInput | UserWorkExperienceWhereUniqueInput[]
    delete?: UserWorkExperienceWhereUniqueInput | UserWorkExperienceWhereUniqueInput[]
    connect?: UserWorkExperienceWhereUniqueInput | UserWorkExperienceWhereUniqueInput[]
    update?: UserWorkExperienceUpdateWithWhereUniqueWithoutUserInput | UserWorkExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWorkExperienceUpdateManyWithWhereWithoutUserInput | UserWorkExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWorkExperienceScalarWhereInput | UserWorkExperienceScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type ApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutUserInput | ApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutUserInput | ApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutUserInput | ApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type OnboardUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OnboardCreateWithoutUserInput, OnboardUncheckedCreateWithoutUserInput>
    connectOrCreate?: OnboardCreateOrConnectWithoutUserInput
    upsert?: OnboardUpsertWithoutUserInput
    disconnect?: OnboardWhereInput | boolean
    delete?: OnboardWhereInput | boolean
    connect?: OnboardWhereUniqueInput
    update?: XOR<XOR<OnboardUpdateToOneWithWhereWithoutUserInput, OnboardUpdateWithoutUserInput>, OnboardUncheckedUpdateWithoutUserInput>
  }

  export type UserCertificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCertificationCreateWithoutUserInput, UserCertificationUncheckedCreateWithoutUserInput> | UserCertificationCreateWithoutUserInput[] | UserCertificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCertificationCreateOrConnectWithoutUserInput | UserCertificationCreateOrConnectWithoutUserInput[]
    upsert?: UserCertificationUpsertWithWhereUniqueWithoutUserInput | UserCertificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCertificationCreateManyUserInputEnvelope
    set?: UserCertificationWhereUniqueInput | UserCertificationWhereUniqueInput[]
    disconnect?: UserCertificationWhereUniqueInput | UserCertificationWhereUniqueInput[]
    delete?: UserCertificationWhereUniqueInput | UserCertificationWhereUniqueInput[]
    connect?: UserCertificationWhereUniqueInput | UserCertificationWhereUniqueInput[]
    update?: UserCertificationUpdateWithWhereUniqueWithoutUserInput | UserCertificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCertificationUpdateManyWithWhereWithoutUserInput | UserCertificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCertificationScalarWhereInput | UserCertificationScalarWhereInput[]
  }

  export type UserEducationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEducationCreateWithoutUserInput, UserEducationUncheckedCreateWithoutUserInput> | UserEducationCreateWithoutUserInput[] | UserEducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEducationCreateOrConnectWithoutUserInput | UserEducationCreateOrConnectWithoutUserInput[]
    upsert?: UserEducationUpsertWithWhereUniqueWithoutUserInput | UserEducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEducationCreateManyUserInputEnvelope
    set?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    disconnect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    delete?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    connect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    update?: UserEducationUpdateWithWhereUniqueWithoutUserInput | UserEducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEducationUpdateManyWithWhereWithoutUserInput | UserEducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEducationScalarWhereInput | UserEducationScalarWhereInput[]
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

  export type UserSkillUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput
    upsert?: UserSkillUpsertWithoutUserInput
    disconnect?: UserSkillWhereInput | boolean
    delete?: UserSkillWhereInput | boolean
    connect?: UserSkillWhereUniqueInput
    update?: XOR<XOR<UserSkillUpdateToOneWithWhereWithoutUserInput, UserSkillUpdateWithoutUserInput>, UserSkillUncheckedUpdateWithoutUserInput>
  }

  export type UserWorkExperienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWorkExperienceCreateWithoutUserInput, UserWorkExperienceUncheckedCreateWithoutUserInput> | UserWorkExperienceCreateWithoutUserInput[] | UserWorkExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWorkExperienceCreateOrConnectWithoutUserInput | UserWorkExperienceCreateOrConnectWithoutUserInput[]
    upsert?: UserWorkExperienceUpsertWithWhereUniqueWithoutUserInput | UserWorkExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWorkExperienceCreateManyUserInputEnvelope
    set?: UserWorkExperienceWhereUniqueInput | UserWorkExperienceWhereUniqueInput[]
    disconnect?: UserWorkExperienceWhereUniqueInput | UserWorkExperienceWhereUniqueInput[]
    delete?: UserWorkExperienceWhereUniqueInput | UserWorkExperienceWhereUniqueInput[]
    connect?: UserWorkExperienceWhereUniqueInput | UserWorkExperienceWhereUniqueInput[]
    update?: UserWorkExperienceUpdateWithWhereUniqueWithoutUserInput | UserWorkExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWorkExperienceUpdateManyWithWhereWithoutUserInput | UserWorkExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWorkExperienceScalarWhereInput | UserWorkExperienceScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutUserCertificationInput = {
    create?: XOR<UserCreateWithoutUserCertificationInput, UserUncheckedCreateWithoutUserCertificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCertificationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserCertificationNestedInput = {
    create?: XOR<UserCreateWithoutUserCertificationInput, UserUncheckedCreateWithoutUserCertificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCertificationInput
    upsert?: UserUpsertWithoutUserCertificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserCertificationInput, UserUpdateWithoutUserCertificationInput>, UserUncheckedUpdateWithoutUserCertificationInput>
  }

  export type UserCreateNestedOneWithoutUser_educationsInput = {
    create?: XOR<UserCreateWithoutUser_educationsInput, UserUncheckedCreateWithoutUser_educationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_educationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUser_educationsNestedInput = {
    create?: XOR<UserCreateWithoutUser_educationsInput, UserUncheckedCreateWithoutUser_educationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_educationsInput
    upsert?: UserUpsertWithoutUser_educationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_educationsInput, UserUpdateWithoutUser_educationsInput>, UserUncheckedUpdateWithoutUser_educationsInput>
  }

  export type UserCreateNestedManyWithoutLocationTypeInput = {
    create?: XOR<UserCreateWithoutLocationTypeInput, UserUncheckedCreateWithoutLocationTypeInput> | UserCreateWithoutLocationTypeInput[] | UserUncheckedCreateWithoutLocationTypeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLocationTypeInput | UserCreateOrConnectWithoutLocationTypeInput[]
    createMany?: UserCreateManyLocationTypeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutLocationTypeInput = {
    create?: XOR<UserCreateWithoutLocationTypeInput, UserUncheckedCreateWithoutLocationTypeInput> | UserCreateWithoutLocationTypeInput[] | UserUncheckedCreateWithoutLocationTypeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLocationTypeInput | UserCreateOrConnectWithoutLocationTypeInput[]
    createMany?: UserCreateManyLocationTypeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutLocationTypeNestedInput = {
    create?: XOR<UserCreateWithoutLocationTypeInput, UserUncheckedCreateWithoutLocationTypeInput> | UserCreateWithoutLocationTypeInput[] | UserUncheckedCreateWithoutLocationTypeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLocationTypeInput | UserCreateOrConnectWithoutLocationTypeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLocationTypeInput | UserUpsertWithWhereUniqueWithoutLocationTypeInput[]
    createMany?: UserCreateManyLocationTypeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLocationTypeInput | UserUpdateWithWhereUniqueWithoutLocationTypeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLocationTypeInput | UserUpdateManyWithWhereWithoutLocationTypeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutLocationTypeNestedInput = {
    create?: XOR<UserCreateWithoutLocationTypeInput, UserUncheckedCreateWithoutLocationTypeInput> | UserCreateWithoutLocationTypeInput[] | UserUncheckedCreateWithoutLocationTypeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLocationTypeInput | UserCreateOrConnectWithoutLocationTypeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLocationTypeInput | UserUpsertWithWhereUniqueWithoutLocationTypeInput[]
    createMany?: UserCreateManyLocationTypeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLocationTypeInput | UserUpdateWithWhereUniqueWithoutLocationTypeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLocationTypeInput | UserUpdateManyWithWhereWithoutLocationTypeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserProfessionalSummaryInput = {
    create?: XOR<UserCreateWithoutUserProfessionalSummaryInput, UserUncheckedCreateWithoutUserProfessionalSummaryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProfessionalSummaryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserProfessionalSummaryNestedInput = {
    create?: XOR<UserCreateWithoutUserProfessionalSummaryInput, UserUncheckedCreateWithoutUserProfessionalSummaryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProfessionalSummaryInput
    upsert?: UserUpsertWithoutUserProfessionalSummaryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserProfessionalSummaryInput, UserUpdateWithoutUserProfessionalSummaryInput>, UserUncheckedUpdateWithoutUserProfessionalSummaryInput>
  }

  export type UserCreateNestedOneWithoutUser_skillsInput = {
    create?: XOR<UserCreateWithoutUser_skillsInput, UserUncheckedCreateWithoutUser_skillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_skillsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUser_skillsNestedInput = {
    create?: XOR<UserCreateWithoutUser_skillsInput, UserUncheckedCreateWithoutUser_skillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_skillsInput
    upsert?: UserUpsertWithoutUser_skillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_skillsInput, UserUpdateWithoutUser_skillsInput>, UserUncheckedUpdateWithoutUser_skillsInput>
  }

  export type UserCreateNestedOneWithoutUserWorkExperienceInput = {
    create?: XOR<UserCreateWithoutUserWorkExperienceInput, UserUncheckedCreateWithoutUserWorkExperienceInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserWorkExperienceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserWorkExperienceNestedInput = {
    create?: XOR<UserCreateWithoutUserWorkExperienceInput, UserUncheckedCreateWithoutUserWorkExperienceInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserWorkExperienceInput
    upsert?: UserUpsertWithoutUserWorkExperienceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserWorkExperienceInput, UserUpdateWithoutUserWorkExperienceInput>, UserUncheckedUpdateWithoutUserWorkExperienceInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    location?: string | null
    professional_summary?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    locationType?: UserLocationTypeCreateNestedOneWithoutUsersInput
    onboarded?: OnboardCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationCreateNestedManyWithoutUserInput
    user_educations?: UserEducationCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_skills?: UserSkillCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceCreateNestedManyWithoutUserInput
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
    location?: string | null
    professional_summary?: string | null
    locationTypeId?: number | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    onboarded?: OnboardUncheckedCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationUncheckedCreateNestedManyWithoutUserInput
    user_educations?: UserEducationUncheckedCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_skills?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
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
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    locationType?: UserLocationTypeUpdateOneWithoutUsersNestedInput
    onboarded?: OnboardUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUpdateManyWithoutUserNestedInput
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
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    locationTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUncheckedUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUncheckedUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUncheckedUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOnboardedInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    locationType?: UserLocationTypeCreateNestedOneWithoutUsersInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    UserCertification?: UserCertificationCreateNestedManyWithoutUserInput
    user_educations?: UserEducationCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_skills?: UserSkillCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOnboardedInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    locationTypeId?: number | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    UserCertification?: UserCertificationUncheckedCreateNestedManyWithoutUserInput
    user_educations?: UserEducationUncheckedCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_skills?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOnboardedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOnboardedInput, UserUncheckedCreateWithoutOnboardedInput>
  }

  export type UserUpsertWithoutOnboardedInput = {
    update: XOR<UserUpdateWithoutOnboardedInput, UserUncheckedUpdateWithoutOnboardedInput>
    create: XOR<UserCreateWithoutOnboardedInput, UserUncheckedCreateWithoutOnboardedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOnboardedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOnboardedInput, UserUncheckedUpdateWithoutOnboardedInput>
  }

  export type UserUpdateWithoutOnboardedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    locationType?: UserLocationTypeUpdateOneWithoutUsersNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    UserCertification?: UserCertificationUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOnboardedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    locationTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    UserCertification?: UserCertificationUncheckedUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUncheckedUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUncheckedUpdateManyWithoutUserNestedInput
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

  export type UserLocationTypeCreateWithoutUsersInput = {
    name: string
  }

  export type UserLocationTypeUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type UserLocationTypeCreateOrConnectWithoutUsersInput = {
    where: UserLocationTypeWhereUniqueInput
    create: XOR<UserLocationTypeCreateWithoutUsersInput, UserLocationTypeUncheckedCreateWithoutUsersInput>
  }

  export type ApplicationCreateWithoutUserInput = {
    id?: string
    company_name: string
    role: string
    job_description?: string | null
  }

  export type ApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    company_name: string
    role: string
    job_description?: string | null
  }

  export type ApplicationCreateOrConnectWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ApplicationCreateManyUserInputEnvelope = {
    data: ApplicationCreateManyUserInput | ApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OnboardCreateWithoutUserInput = {
    id?: string
    onboarded?: boolean
  }

  export type OnboardUncheckedCreateWithoutUserInput = {
    id?: string
    onboarded?: boolean
  }

  export type OnboardCreateOrConnectWithoutUserInput = {
    where: OnboardWhereUniqueInput
    create: XOR<OnboardCreateWithoutUserInput, OnboardUncheckedCreateWithoutUserInput>
  }

  export type UserCertificationCreateWithoutUserInput = {
    id?: string
    name: string
    emittedAt?: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCertificationUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    emittedAt?: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCertificationCreateOrConnectWithoutUserInput = {
    where: UserCertificationWhereUniqueInput
    create: XOR<UserCertificationCreateWithoutUserInput, UserCertificationUncheckedCreateWithoutUserInput>
  }

  export type UserCertificationCreateManyUserInputEnvelope = {
    data: UserCertificationCreateManyUserInput | UserCertificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserEducationCreateWithoutUserInput = {
    id?: string
    university_name: string
    enrollment?: Date | string
    completion?: Date | string | null
    finished: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserEducationUncheckedCreateWithoutUserInput = {
    id?: string
    university_name: string
    enrollment?: Date | string
    completion?: Date | string | null
    finished: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserEducationCreateOrConnectWithoutUserInput = {
    where: UserEducationWhereUniqueInput
    create: XOR<UserEducationCreateWithoutUserInput, UserEducationUncheckedCreateWithoutUserInput>
  }

  export type UserEducationCreateManyUserInputEnvelope = {
    data: UserEducationCreateManyUserInput | UserEducationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfessionalSummaryCreateWithoutUserInput = {
    id?: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfessionalSummaryUncheckedCreateWithoutUserInput = {
    id?: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfessionalSummaryCreateOrConnectWithoutUserInput = {
    where: UserProfessionalSummaryWhereUniqueInput
    create: XOR<UserProfessionalSummaryCreateWithoutUserInput, UserProfessionalSummaryUncheckedCreateWithoutUserInput>
  }

  export type UserSkillCreateWithoutUserInput = {
    id?: string
    skills: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUncheckedCreateWithoutUserInput = {
    id?: string
    skills: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillCreateOrConnectWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
  }

  export type UserWorkExperienceCreateWithoutUserInput = {
    id?: string
    company_name: string
    enrollment?: Date | string
    completion?: Date | string | null
    description: string
    currentWorkPlace: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserWorkExperienceUncheckedCreateWithoutUserInput = {
    id?: string
    company_name: string
    enrollment?: Date | string
    completion?: Date | string | null
    description: string
    currentWorkPlace: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserWorkExperienceCreateOrConnectWithoutUserInput = {
    where: UserWorkExperienceWhereUniqueInput
    create: XOR<UserWorkExperienceCreateWithoutUserInput, UserWorkExperienceUncheckedCreateWithoutUserInput>
  }

  export type UserWorkExperienceCreateManyUserInputEnvelope = {
    data: UserWorkExperienceCreateManyUserInput | UserWorkExperienceCreateManyUserInput[]
    skipDuplicates?: boolean
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

  export type UserLocationTypeUpsertWithoutUsersInput = {
    update: XOR<UserLocationTypeUpdateWithoutUsersInput, UserLocationTypeUncheckedUpdateWithoutUsersInput>
    create: XOR<UserLocationTypeCreateWithoutUsersInput, UserLocationTypeUncheckedCreateWithoutUsersInput>
    where?: UserLocationTypeWhereInput
  }

  export type UserLocationTypeUpdateToOneWithWhereWithoutUsersInput = {
    where?: UserLocationTypeWhereInput
    data: XOR<UserLocationTypeUpdateWithoutUsersInput, UserLocationTypeUncheckedUpdateWithoutUsersInput>
  }

  export type UserLocationTypeUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserLocationTypeUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutUserInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: StringFilter<"Application"> | string
    company_name?: StringFilter<"Application"> | string
    role?: StringFilter<"Application"> | string
    userId?: StringFilter<"Application"> | string
    job_description?: StringNullableFilter<"Application"> | string | null
  }

  export type OnboardUpsertWithoutUserInput = {
    update: XOR<OnboardUpdateWithoutUserInput, OnboardUncheckedUpdateWithoutUserInput>
    create: XOR<OnboardCreateWithoutUserInput, OnboardUncheckedCreateWithoutUserInput>
    where?: OnboardWhereInput
  }

  export type OnboardUpdateToOneWithWhereWithoutUserInput = {
    where?: OnboardWhereInput
    data: XOR<OnboardUpdateWithoutUserInput, OnboardUncheckedUpdateWithoutUserInput>
  }

  export type OnboardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OnboardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCertificationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCertificationWhereUniqueInput
    update: XOR<UserCertificationUpdateWithoutUserInput, UserCertificationUncheckedUpdateWithoutUserInput>
    create: XOR<UserCertificationCreateWithoutUserInput, UserCertificationUncheckedCreateWithoutUserInput>
  }

  export type UserCertificationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCertificationWhereUniqueInput
    data: XOR<UserCertificationUpdateWithoutUserInput, UserCertificationUncheckedUpdateWithoutUserInput>
  }

  export type UserCertificationUpdateManyWithWhereWithoutUserInput = {
    where: UserCertificationScalarWhereInput
    data: XOR<UserCertificationUpdateManyMutationInput, UserCertificationUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCertificationScalarWhereInput = {
    AND?: UserCertificationScalarWhereInput | UserCertificationScalarWhereInput[]
    OR?: UserCertificationScalarWhereInput[]
    NOT?: UserCertificationScalarWhereInput | UserCertificationScalarWhereInput[]
    id?: StringFilter<"UserCertification"> | string
    name?: StringFilter<"UserCertification"> | string
    emittedAt?: DateTimeFilter<"UserCertification"> | Date | string
    description?: StringNullableFilter<"UserCertification"> | string | null
    userId?: StringFilter<"UserCertification"> | string
    createdAt?: DateTimeFilter<"UserCertification"> | Date | string
    updatedAt?: DateTimeFilter<"UserCertification"> | Date | string
  }

  export type UserEducationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserEducationWhereUniqueInput
    update: XOR<UserEducationUpdateWithoutUserInput, UserEducationUncheckedUpdateWithoutUserInput>
    create: XOR<UserEducationCreateWithoutUserInput, UserEducationUncheckedCreateWithoutUserInput>
  }

  export type UserEducationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserEducationWhereUniqueInput
    data: XOR<UserEducationUpdateWithoutUserInput, UserEducationUncheckedUpdateWithoutUserInput>
  }

  export type UserEducationUpdateManyWithWhereWithoutUserInput = {
    where: UserEducationScalarWhereInput
    data: XOR<UserEducationUpdateManyMutationInput, UserEducationUncheckedUpdateManyWithoutUserInput>
  }

  export type UserEducationScalarWhereInput = {
    AND?: UserEducationScalarWhereInput | UserEducationScalarWhereInput[]
    OR?: UserEducationScalarWhereInput[]
    NOT?: UserEducationScalarWhereInput | UserEducationScalarWhereInput[]
    id?: StringFilter<"UserEducation"> | string
    university_name?: StringFilter<"UserEducation"> | string
    enrollment?: DateTimeFilter<"UserEducation"> | Date | string
    completion?: DateTimeNullableFilter<"UserEducation"> | Date | string | null
    finished?: BoolFilter<"UserEducation"> | boolean
    description?: StringNullableFilter<"UserEducation"> | string | null
    userId?: StringFilter<"UserEducation"> | string
    createdAt?: DateTimeFilter<"UserEducation"> | Date | string
    updatedAt?: DateTimeFilter<"UserEducation"> | Date | string
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
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfessionalSummaryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkExperienceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserWorkExperienceWhereUniqueInput
    update: XOR<UserWorkExperienceUpdateWithoutUserInput, UserWorkExperienceUncheckedUpdateWithoutUserInput>
    create: XOR<UserWorkExperienceCreateWithoutUserInput, UserWorkExperienceUncheckedCreateWithoutUserInput>
  }

  export type UserWorkExperienceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserWorkExperienceWhereUniqueInput
    data: XOR<UserWorkExperienceUpdateWithoutUserInput, UserWorkExperienceUncheckedUpdateWithoutUserInput>
  }

  export type UserWorkExperienceUpdateManyWithWhereWithoutUserInput = {
    where: UserWorkExperienceScalarWhereInput
    data: XOR<UserWorkExperienceUpdateManyMutationInput, UserWorkExperienceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserWorkExperienceScalarWhereInput = {
    AND?: UserWorkExperienceScalarWhereInput | UserWorkExperienceScalarWhereInput[]
    OR?: UserWorkExperienceScalarWhereInput[]
    NOT?: UserWorkExperienceScalarWhereInput | UserWorkExperienceScalarWhereInput[]
    id?: StringFilter<"UserWorkExperience"> | string
    company_name?: StringFilter<"UserWorkExperience"> | string
    enrollment?: DateTimeFilter<"UserWorkExperience"> | Date | string
    completion?: DateTimeNullableFilter<"UserWorkExperience"> | Date | string | null
    description?: StringFilter<"UserWorkExperience"> | string
    currentWorkPlace?: BoolFilter<"UserWorkExperience"> | boolean
    userId?: StringFilter<"UserWorkExperience"> | string
    createdAt?: DateTimeFilter<"UserWorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"UserWorkExperience"> | Date | string
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
    location?: string | null
    professional_summary?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    locationType?: UserLocationTypeCreateNestedOneWithoutUsersInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    onboarded?: OnboardCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationCreateNestedManyWithoutUserInput
    user_educations?: UserEducationCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_skills?: UserSkillCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceCreateNestedManyWithoutUserInput
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
    location?: string | null
    professional_summary?: string | null
    locationTypeId?: number | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    onboarded?: OnboardUncheckedCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationUncheckedCreateNestedManyWithoutUserInput
    user_educations?: UserEducationUncheckedCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_skills?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceUncheckedCreateNestedManyWithoutUserInput
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
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    locationType?: UserLocationTypeUpdateOneWithoutUsersNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUpdateManyWithoutUserNestedInput
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
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    locationTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUncheckedUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUncheckedUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUncheckedUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUncheckedUpdateManyWithoutUserNestedInput
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
    location?: string | null
    professional_summary?: string | null
    phone?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    locationType?: UserLocationTypeCreateNestedOneWithoutUsersInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    onboarded?: OnboardCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationCreateNestedManyWithoutUserInput
    user_educations?: UserEducationCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_skills?: UserSkillCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceCreateNestedManyWithoutUserInput
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
    location?: string | null
    professional_summary?: string | null
    locationTypeId?: number | null
    phone?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    onboarded?: OnboardUncheckedCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationUncheckedCreateNestedManyWithoutUserInput
    user_educations?: UserEducationUncheckedCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_skills?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceUncheckedCreateNestedManyWithoutUserInput
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
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    locationType?: UserLocationTypeUpdateOneWithoutUsersNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUpdateManyWithoutUserNestedInput
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
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    locationTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUncheckedUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUncheckedUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUncheckedUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserCertificationInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    locationType?: UserLocationTypeCreateNestedOneWithoutUsersInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    onboarded?: OnboardCreateNestedOneWithoutUserInput
    user_educations?: UserEducationCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_skills?: UserSkillCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserCertificationInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    locationTypeId?: number | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    onboarded?: OnboardUncheckedCreateNestedOneWithoutUserInput
    user_educations?: UserEducationUncheckedCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_skills?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserCertificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCertificationInput, UserUncheckedCreateWithoutUserCertificationInput>
  }

  export type UserUpsertWithoutUserCertificationInput = {
    update: XOR<UserUpdateWithoutUserCertificationInput, UserUncheckedUpdateWithoutUserCertificationInput>
    create: XOR<UserCreateWithoutUserCertificationInput, UserUncheckedCreateWithoutUserCertificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserCertificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserCertificationInput, UserUncheckedUpdateWithoutUserCertificationInput>
  }

  export type UserUpdateWithoutUserCertificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    locationType?: UserLocationTypeUpdateOneWithoutUsersNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUpdateOneWithoutUserNestedInput
    user_educations?: UserEducationUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCertificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    locationTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUncheckedUpdateOneWithoutUserNestedInput
    user_educations?: UserEducationUncheckedUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUser_educationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    locationType?: UserLocationTypeCreateNestedOneWithoutUsersInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    onboarded?: OnboardCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_skills?: UserSkillCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_educationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    locationTypeId?: number | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    onboarded?: OnboardUncheckedCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationUncheckedCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_skills?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_educationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_educationsInput, UserUncheckedCreateWithoutUser_educationsInput>
  }

  export type UserUpsertWithoutUser_educationsInput = {
    update: XOR<UserUpdateWithoutUser_educationsInput, UserUncheckedUpdateWithoutUser_educationsInput>
    create: XOR<UserCreateWithoutUser_educationsInput, UserUncheckedCreateWithoutUser_educationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_educationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_educationsInput, UserUncheckedUpdateWithoutUser_educationsInput>
  }

  export type UserUpdateWithoutUser_educationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    locationType?: UserLocationTypeUpdateOneWithoutUsersNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_educationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    locationTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUncheckedUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUncheckedUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLocationTypeInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    onboarded?: OnboardCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationCreateNestedManyWithoutUserInput
    user_educations?: UserEducationCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_skills?: UserSkillCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLocationTypeInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    onboarded?: OnboardUncheckedCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationUncheckedCreateNestedManyWithoutUserInput
    user_educations?: UserEducationUncheckedCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_skills?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLocationTypeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationTypeInput, UserUncheckedCreateWithoutLocationTypeInput>
  }

  export type UserCreateManyLocationTypeInputEnvelope = {
    data: UserCreateManyLocationTypeInput | UserCreateManyLocationTypeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutLocationTypeInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLocationTypeInput, UserUncheckedUpdateWithoutLocationTypeInput>
    create: XOR<UserCreateWithoutLocationTypeInput, UserUncheckedCreateWithoutLocationTypeInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLocationTypeInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLocationTypeInput, UserUncheckedUpdateWithoutLocationTypeInput>
  }

  export type UserUpdateManyWithWhereWithoutLocationTypeInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLocationTypeInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    username?: StringNullableFilter<"User"> | string | null
    displayUsername?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    professional_summary?: StringNullableFilter<"User"> | string | null
    locationTypeId?: IntNullableFilter<"User"> | number | null
    phone?: StringNullableFilter<"User"> | string | null
  }

  export type UserCreateWithoutUserProfessionalSummaryInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    locationType?: UserLocationTypeCreateNestedOneWithoutUsersInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    onboarded?: OnboardCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationCreateNestedManyWithoutUserInput
    user_educations?: UserEducationCreateNestedManyWithoutUserInput
    user_skills?: UserSkillCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserProfessionalSummaryInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    locationTypeId?: number | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    onboarded?: OnboardUncheckedCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationUncheckedCreateNestedManyWithoutUserInput
    user_educations?: UserEducationUncheckedCreateNestedManyWithoutUserInput
    user_skills?: UserSkillUncheckedCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserProfessionalSummaryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserProfessionalSummaryInput, UserUncheckedCreateWithoutUserProfessionalSummaryInput>
  }

  export type UserUpsertWithoutUserProfessionalSummaryInput = {
    update: XOR<UserUpdateWithoutUserProfessionalSummaryInput, UserUncheckedUpdateWithoutUserProfessionalSummaryInput>
    create: XOR<UserCreateWithoutUserProfessionalSummaryInput, UserUncheckedCreateWithoutUserProfessionalSummaryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserProfessionalSummaryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserProfessionalSummaryInput, UserUncheckedUpdateWithoutUserProfessionalSummaryInput>
  }

  export type UserUpdateWithoutUserProfessionalSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    locationType?: UserLocationTypeUpdateOneWithoutUsersNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUpdateManyWithoutUserNestedInput
    user_skills?: UserSkillUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserProfessionalSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    locationTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUncheckedUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUncheckedUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUncheckedUpdateManyWithoutUserNestedInput
    user_skills?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUser_skillsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    locationType?: UserLocationTypeCreateNestedOneWithoutUsersInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    onboarded?: OnboardCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationCreateNestedManyWithoutUserInput
    user_educations?: UserEducationCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_skillsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    locationTypeId?: number | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    onboarded?: OnboardUncheckedCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationUncheckedCreateNestedManyWithoutUserInput
    user_educations?: UserEducationUncheckedCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    UserWorkExperience?: UserWorkExperienceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_skillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_skillsInput, UserUncheckedCreateWithoutUser_skillsInput>
  }

  export type UserUpsertWithoutUser_skillsInput = {
    update: XOR<UserUpdateWithoutUser_skillsInput, UserUncheckedUpdateWithoutUser_skillsInput>
    create: XOR<UserCreateWithoutUser_skillsInput, UserUncheckedCreateWithoutUser_skillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_skillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_skillsInput, UserUncheckedUpdateWithoutUser_skillsInput>
  }

  export type UserUpdateWithoutUser_skillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    locationType?: UserLocationTypeUpdateOneWithoutUsersNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_skillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    locationTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUncheckedUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUncheckedUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUncheckedUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserWorkExperienceInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    locationType?: UserLocationTypeCreateNestedOneWithoutUsersInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    onboarded?: OnboardCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationCreateNestedManyWithoutUserInput
    user_educations?: UserEducationCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryCreateNestedOneWithoutUserInput
    user_skills?: UserSkillCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserWorkExperienceInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    locationTypeId?: number | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    onboarded?: OnboardUncheckedCreateNestedOneWithoutUserInput
    UserCertification?: UserCertificationUncheckedCreateNestedManyWithoutUserInput
    user_educations?: UserEducationUncheckedCreateNestedManyWithoutUserInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedCreateNestedOneWithoutUserInput
    user_skills?: UserSkillUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserWorkExperienceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserWorkExperienceInput, UserUncheckedCreateWithoutUserWorkExperienceInput>
  }

  export type UserUpsertWithoutUserWorkExperienceInput = {
    update: XOR<UserUpdateWithoutUserWorkExperienceInput, UserUncheckedUpdateWithoutUserWorkExperienceInput>
    create: XOR<UserCreateWithoutUserWorkExperienceInput, UserUncheckedCreateWithoutUserWorkExperienceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserWorkExperienceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserWorkExperienceInput, UserUncheckedUpdateWithoutUserWorkExperienceInput>
  }

  export type UserUpdateWithoutUserWorkExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    locationType?: UserLocationTypeUpdateOneWithoutUsersNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserWorkExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    locationTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUncheckedUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUncheckedUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUncheckedUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
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

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type ApplicationCreateManyUserInput = {
    id?: string
    company_name: string
    role: string
    job_description?: string | null
  }

  export type UserCertificationCreateManyUserInput = {
    id?: string
    name: string
    emittedAt?: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserEducationCreateManyUserInput = {
    id?: string
    university_name: string
    enrollment?: Date | string
    completion?: Date | string | null
    finished: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserWorkExperienceCreateManyUserInput = {
    id?: string
    company_name: string
    enrollment?: Date | string
    completion?: Date | string | null
    description: string
    currentWorkPlace: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type ApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCertificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCertificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCertificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEducationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    university_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEducationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    university_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEducationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    university_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkExperienceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkExperienceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWorkExperienceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    enrollment?: DateTimeFieldUpdateOperationsInput | Date | string
    completion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyLocationTypeInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username?: string | null
    displayUsername?: string | null
    location?: string | null
    professional_summary?: string | null
    phone?: string | null
  }

  export type UserUpdateWithoutLocationTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLocationTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    onboarded?: OnboardUncheckedUpdateOneWithoutUserNestedInput
    UserCertification?: UserCertificationUncheckedUpdateManyWithoutUserNestedInput
    user_educations?: UserEducationUncheckedUpdateManyWithoutUserNestedInput
    UserProfessionalSummary?: UserProfessionalSummaryUncheckedUpdateOneWithoutUserNestedInput
    user_skills?: UserSkillUncheckedUpdateOneWithoutUserNestedInput
    UserWorkExperience?: UserWorkExperienceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLocationTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    professional_summary?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
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