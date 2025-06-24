
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
 * Model Cours
 * 
 */
export type Cours = $Result.DefaultSelection<Prisma.$CoursPayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model SuivreCours
 * 
 */
export type SuivreCours = $Result.DefaultSelection<Prisma.$SuivreCoursPayload>
/**
 * Model UserLesson
 * 
 */
export type UserLesson = $Result.DefaultSelection<Prisma.$UserLessonPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model QuizQuestion
 * 
 */
export type QuizQuestion = $Result.DefaultSelection<Prisma.$QuizQuestionPayload>
/**
 * Model QuizOption
 * 
 */
export type QuizOption = $Result.DefaultSelection<Prisma.$QuizOptionPayload>
/**
 * Model QuizResult
 * 
 */
export type QuizResult = $Result.DefaultSelection<Prisma.$QuizResultPayload>
/**
 * Model VisioSession
 * 
 */
export type VisioSession = $Result.DefaultSelection<Prisma.$VisioSessionPayload>
/**
 * Model ParticipationVisio
 * 
 */
export type ParticipationVisio = $Result.DefaultSelection<Prisma.$ParticipationVisioPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  formateur: 'formateur',
  etudiant: 'etudiant'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * `prisma.cours`: Exposes CRUD operations for the **Cours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cours
    * const cours = await prisma.cours.findMany()
    * ```
    */
  get cours(): Prisma.CoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suivreCours`: Exposes CRUD operations for the **SuivreCours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuivreCours
    * const suivreCours = await prisma.suivreCours.findMany()
    * ```
    */
  get suivreCours(): Prisma.SuivreCoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLesson`: Exposes CRUD operations for the **UserLesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLessons
    * const userLessons = await prisma.userLesson.findMany()
    * ```
    */
  get userLesson(): Prisma.UserLessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizQuestion`: Exposes CRUD operations for the **QuizQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizQuestions
    * const quizQuestions = await prisma.quizQuestion.findMany()
    * ```
    */
  get quizQuestion(): Prisma.QuizQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizOption`: Exposes CRUD operations for the **QuizOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizOptions
    * const quizOptions = await prisma.quizOption.findMany()
    * ```
    */
  get quizOption(): Prisma.QuizOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizResult`: Exposes CRUD operations for the **QuizResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizResults
    * const quizResults = await prisma.quizResult.findMany()
    * ```
    */
  get quizResult(): Prisma.QuizResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visioSession`: Exposes CRUD operations for the **VisioSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisioSessions
    * const visioSessions = await prisma.visioSession.findMany()
    * ```
    */
  get visioSession(): Prisma.VisioSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participationVisio`: Exposes CRUD operations for the **ParticipationVisio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipationVisios
    * const participationVisios = await prisma.participationVisio.findMany()
    * ```
    */
  get participationVisio(): Prisma.ParticipationVisioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Cours: 'Cours',
    Lesson: 'Lesson',
    SuivreCours: 'SuivreCours',
    UserLesson: 'UserLesson',
    Quiz: 'Quiz',
    QuizQuestion: 'QuizQuestion',
    QuizOption: 'QuizOption',
    QuizResult: 'QuizResult',
    VisioSession: 'VisioSession',
    ParticipationVisio: 'ParticipationVisio',
    Category: 'Category'
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
      modelProps: "user" | "cours" | "lesson" | "suivreCours" | "userLesson" | "quiz" | "quizQuestion" | "quizOption" | "quizResult" | "visioSession" | "participationVisio" | "category"
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
      Cours: {
        payload: Prisma.$CoursPayload<ExtArgs>
        fields: Prisma.CoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          findFirst: {
            args: Prisma.CoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          findMany: {
            args: Prisma.CoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>[]
          }
          create: {
            args: Prisma.CoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          createMany: {
            args: Prisma.CoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          update: {
            args: Prisma.CoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          deleteMany: {
            args: Prisma.CoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          aggregate: {
            args: Prisma.CoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCours>
          }
          groupBy: {
            args: Prisma.CoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursCountArgs<ExtArgs>
            result: $Utils.Optional<CoursCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      SuivreCours: {
        payload: Prisma.$SuivreCoursPayload<ExtArgs>
        fields: Prisma.SuivreCoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuivreCoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuivreCoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuivreCoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuivreCoursPayload>
          }
          findFirst: {
            args: Prisma.SuivreCoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuivreCoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuivreCoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuivreCoursPayload>
          }
          findMany: {
            args: Prisma.SuivreCoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuivreCoursPayload>[]
          }
          create: {
            args: Prisma.SuivreCoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuivreCoursPayload>
          }
          createMany: {
            args: Prisma.SuivreCoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SuivreCoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuivreCoursPayload>
          }
          update: {
            args: Prisma.SuivreCoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuivreCoursPayload>
          }
          deleteMany: {
            args: Prisma.SuivreCoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuivreCoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuivreCoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuivreCoursPayload>
          }
          aggregate: {
            args: Prisma.SuivreCoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuivreCours>
          }
          groupBy: {
            args: Prisma.SuivreCoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuivreCoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuivreCoursCountArgs<ExtArgs>
            result: $Utils.Optional<SuivreCoursCountAggregateOutputType> | number
          }
        }
      }
      UserLesson: {
        payload: Prisma.$UserLessonPayload<ExtArgs>
        fields: Prisma.UserLessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonPayload>
          }
          findFirst: {
            args: Prisma.UserLessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonPayload>
          }
          findMany: {
            args: Prisma.UserLessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonPayload>[]
          }
          create: {
            args: Prisma.UserLessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonPayload>
          }
          createMany: {
            args: Prisma.UserLessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserLessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonPayload>
          }
          update: {
            args: Prisma.UserLessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonPayload>
          }
          deleteMany: {
            args: Prisma.UserLessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonPayload>
          }
          aggregate: {
            args: Prisma.UserLessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLesson>
          }
          groupBy: {
            args: Prisma.UserLessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLessonCountArgs<ExtArgs>
            result: $Utils.Optional<UserLessonCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      QuizQuestion: {
        payload: Prisma.$QuizQuestionPayload<ExtArgs>
        fields: Prisma.QuizQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          findFirst: {
            args: Prisma.QuizQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          findMany: {
            args: Prisma.QuizQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[]
          }
          create: {
            args: Prisma.QuizQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          createMany: {
            args: Prisma.QuizQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          update: {
            args: Prisma.QuizQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuizQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          aggregate: {
            args: Prisma.QuizQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizQuestion>
          }
          groupBy: {
            args: Prisma.QuizQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionCountAggregateOutputType> | number
          }
        }
      }
      QuizOption: {
        payload: Prisma.$QuizOptionPayload<ExtArgs>
        fields: Prisma.QuizOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          findFirst: {
            args: Prisma.QuizOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          findMany: {
            args: Prisma.QuizOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>[]
          }
          create: {
            args: Prisma.QuizOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          createMany: {
            args: Prisma.QuizOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          update: {
            args: Prisma.QuizOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          deleteMany: {
            args: Prisma.QuizOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          aggregate: {
            args: Prisma.QuizOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizOption>
          }
          groupBy: {
            args: Prisma.QuizOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizOptionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizOptionCountAggregateOutputType> | number
          }
        }
      }
      QuizResult: {
        payload: Prisma.$QuizResultPayload<ExtArgs>
        fields: Prisma.QuizResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>
          }
          findFirst: {
            args: Prisma.QuizResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>
          }
          findMany: {
            args: Prisma.QuizResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>[]
          }
          create: {
            args: Prisma.QuizResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>
          }
          createMany: {
            args: Prisma.QuizResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>
          }
          update: {
            args: Prisma.QuizResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>
          }
          deleteMany: {
            args: Prisma.QuizResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>
          }
          aggregate: {
            args: Prisma.QuizResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizResult>
          }
          groupBy: {
            args: Prisma.QuizResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizResultCountArgs<ExtArgs>
            result: $Utils.Optional<QuizResultCountAggregateOutputType> | number
          }
        }
      }
      VisioSession: {
        payload: Prisma.$VisioSessionPayload<ExtArgs>
        fields: Prisma.VisioSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisioSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisioSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisioSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisioSessionPayload>
          }
          findFirst: {
            args: Prisma.VisioSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisioSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisioSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisioSessionPayload>
          }
          findMany: {
            args: Prisma.VisioSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisioSessionPayload>[]
          }
          create: {
            args: Prisma.VisioSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisioSessionPayload>
          }
          createMany: {
            args: Prisma.VisioSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VisioSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisioSessionPayload>
          }
          update: {
            args: Prisma.VisioSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisioSessionPayload>
          }
          deleteMany: {
            args: Prisma.VisioSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisioSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VisioSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisioSessionPayload>
          }
          aggregate: {
            args: Prisma.VisioSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisioSession>
          }
          groupBy: {
            args: Prisma.VisioSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisioSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisioSessionCountArgs<ExtArgs>
            result: $Utils.Optional<VisioSessionCountAggregateOutputType> | number
          }
        }
      }
      ParticipationVisio: {
        payload: Prisma.$ParticipationVisioPayload<ExtArgs>
        fields: Prisma.ParticipationVisioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipationVisioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationVisioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipationVisioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationVisioPayload>
          }
          findFirst: {
            args: Prisma.ParticipationVisioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationVisioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipationVisioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationVisioPayload>
          }
          findMany: {
            args: Prisma.ParticipationVisioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationVisioPayload>[]
          }
          create: {
            args: Prisma.ParticipationVisioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationVisioPayload>
          }
          createMany: {
            args: Prisma.ParticipationVisioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ParticipationVisioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationVisioPayload>
          }
          update: {
            args: Prisma.ParticipationVisioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationVisioPayload>
          }
          deleteMany: {
            args: Prisma.ParticipationVisioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipationVisioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParticipationVisioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationVisioPayload>
          }
          aggregate: {
            args: Prisma.ParticipationVisioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipationVisio>
          }
          groupBy: {
            args: Prisma.ParticipationVisioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipationVisioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipationVisioCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipationVisioCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
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
    cours?: CoursOmit
    lesson?: LessonOmit
    suivreCours?: SuivreCoursOmit
    userLesson?: UserLessonOmit
    quiz?: QuizOmit
    quizQuestion?: QuizQuestionOmit
    quizOption?: QuizOptionOmit
    quizResult?: QuizResultOmit
    visioSession?: VisioSessionOmit
    participationVisio?: ParticipationVisioOmit
    category?: CategoryOmit
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
    cours: number
    userLessons: number
    quizResults: number
    suivis: number
    participations: number
    visiosEnTantQueFormateur: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | UserCountOutputTypeCountCoursArgs
    userLessons?: boolean | UserCountOutputTypeCountUserLessonsArgs
    quizResults?: boolean | UserCountOutputTypeCountQuizResultsArgs
    suivis?: boolean | UserCountOutputTypeCountSuivisArgs
    participations?: boolean | UserCountOutputTypeCountParticipationsArgs
    visiosEnTantQueFormateur?: boolean | UserCountOutputTypeCountVisiosEnTantQueFormateurArgs
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
  export type UserCountOutputTypeCountCoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLessonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizResultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSuivisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuivreCoursWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationVisioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVisiosEnTantQueFormateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisioSessionWhereInput
  }


  /**
   * Count Type CoursCountOutputType
   */

  export type CoursCountOutputType = {
    lessons: number
    quiz: number
    visios: number
    suivis: number
  }

  export type CoursCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | CoursCountOutputTypeCountLessonsArgs
    quiz?: boolean | CoursCountOutputTypeCountQuizArgs
    visios?: boolean | CoursCountOutputTypeCountVisiosArgs
    suivis?: boolean | CoursCountOutputTypeCountSuivisArgs
  }

  // Custom InputTypes
  /**
   * CoursCountOutputType without action
   */
  export type CoursCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursCountOutputType
     */
    select?: CoursCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoursCountOutputType without action
   */
  export type CoursCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }

  /**
   * CoursCountOutputType without action
   */
  export type CoursCountOutputTypeCountQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * CoursCountOutputType without action
   */
  export type CoursCountOutputTypeCountVisiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisioSessionWhereInput
  }

  /**
   * CoursCountOutputType without action
   */
  export type CoursCountOutputTypeCountSuivisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuivreCoursWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    userLessons: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLessons?: boolean | LessonCountOutputTypeCountUserLessonsArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountUserLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLessonWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    questions: number
    results: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizCountOutputTypeCountQuestionsArgs
    results?: boolean | QuizCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizQuestionWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizResultWhereInput
  }


  /**
   * Count Type QuizQuestionCountOutputType
   */

  export type QuizQuestionCountOutputType = {
    options: number
  }

  export type QuizQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | QuizQuestionCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * QuizQuestionCountOutputType without action
   */
  export type QuizQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionCountOutputType
     */
    select?: QuizQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizQuestionCountOutputType without action
   */
  export type QuizQuestionCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizOptionWhereInput
  }


  /**
   * Count Type VisioSessionCountOutputType
   */

  export type VisioSessionCountOutputType = {
    participations: number
  }

  export type VisioSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participations?: boolean | VisioSessionCountOutputTypeCountParticipationsArgs
  }

  // Custom InputTypes
  /**
   * VisioSessionCountOutputType without action
   */
  export type VisioSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisioSessionCountOutputType
     */
    select?: VisioSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisioSessionCountOutputType without action
   */
  export type VisioSessionCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationVisioWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    cours: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | CategoryCountOutputTypeCountCoursArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursWhereInput
  }


  /**
   * Models
   */

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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
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
    id: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cours?: boolean | User$coursArgs<ExtArgs>
    userLessons?: boolean | User$userLessonsArgs<ExtArgs>
    quizResults?: boolean | User$quizResultsArgs<ExtArgs>
    suivis?: boolean | User$suivisArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    visiosEnTantQueFormateur?: boolean | User$visiosEnTantQueFormateurArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | User$coursArgs<ExtArgs>
    userLessons?: boolean | User$userLessonsArgs<ExtArgs>
    quizResults?: boolean | User$quizResultsArgs<ExtArgs>
    suivis?: boolean | User$suivisArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    visiosEnTantQueFormateur?: boolean | User$visiosEnTantQueFormateurArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cours: Prisma.$CoursPayload<ExtArgs>[]
      userLessons: Prisma.$UserLessonPayload<ExtArgs>[]
      quizResults: Prisma.$QuizResultPayload<ExtArgs>[]
      suivis: Prisma.$SuivreCoursPayload<ExtArgs>[]
      participations: Prisma.$ParticipationVisioPayload<ExtArgs>[]
      visiosEnTantQueFormateur: Prisma.$VisioSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
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
    cours<T extends User$coursArgs<ExtArgs> = {}>(args?: Subset<T, User$coursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userLessons<T extends User$userLessonsArgs<ExtArgs> = {}>(args?: Subset<T, User$userLessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizResults<T extends User$quizResultsArgs<ExtArgs> = {}>(args?: Subset<T, User$quizResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suivis<T extends User$suivisArgs<ExtArgs> = {}>(args?: Subset<T, User$suivisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuivreCoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participations<T extends User$participationsArgs<ExtArgs> = {}>(args?: Subset<T, User$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationVisioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visiosEnTantQueFormateur<T extends User$visiosEnTantQueFormateurArgs<ExtArgs> = {}>(args?: Subset<T, User$visiosEnTantQueFormateurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisioSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
   * User.cours
   */
  export type User$coursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    where?: CoursWhereInput
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    cursor?: CoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * User.userLessons
   */
  export type User$userLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLesson
     */
    select?: UserLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLesson
     */
    omit?: UserLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonInclude<ExtArgs> | null
    where?: UserLessonWhereInput
    orderBy?: UserLessonOrderByWithRelationInput | UserLessonOrderByWithRelationInput[]
    cursor?: UserLessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLessonScalarFieldEnum | UserLessonScalarFieldEnum[]
  }

  /**
   * User.quizResults
   */
  export type User$quizResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    where?: QuizResultWhereInput
    orderBy?: QuizResultOrderByWithRelationInput | QuizResultOrderByWithRelationInput[]
    cursor?: QuizResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizResultScalarFieldEnum | QuizResultScalarFieldEnum[]
  }

  /**
   * User.suivis
   */
  export type User$suivisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuivreCours
     */
    select?: SuivreCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuivreCours
     */
    omit?: SuivreCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuivreCoursInclude<ExtArgs> | null
    where?: SuivreCoursWhereInput
    orderBy?: SuivreCoursOrderByWithRelationInput | SuivreCoursOrderByWithRelationInput[]
    cursor?: SuivreCoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuivreCoursScalarFieldEnum | SuivreCoursScalarFieldEnum[]
  }

  /**
   * User.participations
   */
  export type User$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationVisio
     */
    select?: ParticipationVisioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationVisio
     */
    omit?: ParticipationVisioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationVisioInclude<ExtArgs> | null
    where?: ParticipationVisioWhereInput
    orderBy?: ParticipationVisioOrderByWithRelationInput | ParticipationVisioOrderByWithRelationInput[]
    cursor?: ParticipationVisioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipationVisioScalarFieldEnum | ParticipationVisioScalarFieldEnum[]
  }

  /**
   * User.visiosEnTantQueFormateur
   */
  export type User$visiosEnTantQueFormateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisioSession
     */
    select?: VisioSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisioSession
     */
    omit?: VisioSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisioSessionInclude<ExtArgs> | null
    where?: VisioSessionWhereInput
    orderBy?: VisioSessionOrderByWithRelationInput | VisioSessionOrderByWithRelationInput[]
    cursor?: VisioSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisioSessionScalarFieldEnum | VisioSessionScalarFieldEnum[]
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
   * Model Cours
   */

  export type AggregateCours = {
    _count: CoursCountAggregateOutputType | null
    _avg: CoursAvgAggregateOutputType | null
    _sum: CoursSumAggregateOutputType | null
    _min: CoursMinAggregateOutputType | null
    _max: CoursMaxAggregateOutputType | null
  }

  export type CoursAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type CoursSumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type CoursMinAggregateOutputType = {
    id: number | null
    nom: string | null
    sousTitre: string | null
    description: string | null
    level: string | null
    content: string | null
    image: string | null
    video: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    categoryId: number | null
  }

  export type CoursMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    sousTitre: string | null
    description: string | null
    level: string | null
    content: string | null
    image: string | null
    video: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    categoryId: number | null
  }

  export type CoursCountAggregateOutputType = {
    id: number
    nom: number
    sousTitre: number
    description: number
    level: number
    content: number
    image: number
    video: number
    createdAt: number
    updatedAt: number
    userId: number
    categoryId: number
    _all: number
  }


  export type CoursAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type CoursSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type CoursMinAggregateInputType = {
    id?: true
    nom?: true
    sousTitre?: true
    description?: true
    level?: true
    content?: true
    image?: true
    video?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type CoursMaxAggregateInputType = {
    id?: true
    nom?: true
    sousTitre?: true
    description?: true
    level?: true
    content?: true
    image?: true
    video?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type CoursCountAggregateInputType = {
    id?: true
    nom?: true
    sousTitre?: true
    description?: true
    level?: true
    content?: true
    image?: true
    video?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type CoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cours to aggregate.
     */
    where?: CoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cours to fetch.
     */
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cours
    **/
    _count?: true | CoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursMaxAggregateInputType
  }

  export type GetCoursAggregateType<T extends CoursAggregateArgs> = {
        [P in keyof T & keyof AggregateCours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCours[P]>
      : GetScalarType<T[P], AggregateCours[P]>
  }




  export type CoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursWhereInput
    orderBy?: CoursOrderByWithAggregationInput | CoursOrderByWithAggregationInput[]
    by: CoursScalarFieldEnum[] | CoursScalarFieldEnum
    having?: CoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursCountAggregateInputType | true
    _avg?: CoursAvgAggregateInputType
    _sum?: CoursSumAggregateInputType
    _min?: CoursMinAggregateInputType
    _max?: CoursMaxAggregateInputType
  }

  export type CoursGroupByOutputType = {
    id: number
    nom: string
    sousTitre: string
    description: string | null
    level: string | null
    content: string | null
    image: string | null
    video: string | null
    createdAt: Date
    updatedAt: Date
    userId: number
    categoryId: number | null
    _count: CoursCountAggregateOutputType | null
    _avg: CoursAvgAggregateOutputType | null
    _sum: CoursSumAggregateOutputType | null
    _min: CoursMinAggregateOutputType | null
    _max: CoursMaxAggregateOutputType | null
  }

  type GetCoursGroupByPayload<T extends CoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursGroupByOutputType[P]>
            : GetScalarType<T[P], CoursGroupByOutputType[P]>
        }
      >
    >


  export type CoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    sousTitre?: boolean
    description?: boolean
    level?: boolean
    content?: boolean
    image?: boolean
    video?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lessons?: boolean | Cours$lessonsArgs<ExtArgs>
    quiz?: boolean | Cours$quizArgs<ExtArgs>
    visios?: boolean | Cours$visiosArgs<ExtArgs>
    suivis?: boolean | Cours$suivisArgs<ExtArgs>
    category?: boolean | Cours$categoryArgs<ExtArgs>
    _count?: boolean | CoursCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cours"]>



  export type CoursSelectScalar = {
    id?: boolean
    nom?: boolean
    sousTitre?: boolean
    description?: boolean
    level?: boolean
    content?: boolean
    image?: boolean
    video?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
  }

  export type CoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "sousTitre" | "description" | "level" | "content" | "image" | "video" | "createdAt" | "updatedAt" | "userId" | "categoryId", ExtArgs["result"]["cours"]>
  export type CoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lessons?: boolean | Cours$lessonsArgs<ExtArgs>
    quiz?: boolean | Cours$quizArgs<ExtArgs>
    visios?: boolean | Cours$visiosArgs<ExtArgs>
    suivis?: boolean | Cours$suivisArgs<ExtArgs>
    category?: boolean | Cours$categoryArgs<ExtArgs>
    _count?: boolean | CoursCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cours"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lessons: Prisma.$LessonPayload<ExtArgs>[]
      quiz: Prisma.$QuizPayload<ExtArgs>[]
      visios: Prisma.$VisioSessionPayload<ExtArgs>[]
      suivis: Prisma.$SuivreCoursPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      sousTitre: string
      description: string | null
      level: string | null
      content: string | null
      image: string | null
      video: string | null
      createdAt: Date
      updatedAt: Date
      userId: number
      categoryId: number | null
    }, ExtArgs["result"]["cours"]>
    composites: {}
  }

  type CoursGetPayload<S extends boolean | null | undefined | CoursDefaultArgs> = $Result.GetResult<Prisma.$CoursPayload, S>

  type CoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursCountAggregateInputType | true
    }

  export interface CoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cours'], meta: { name: 'Cours' } }
    /**
     * Find zero or one Cours that matches the filter.
     * @param {CoursFindUniqueArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursFindUniqueArgs>(args: SelectSubset<T, CoursFindUniqueArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursFindUniqueOrThrowArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursFindFirstArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursFindFirstArgs>(args?: SelectSubset<T, CoursFindFirstArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursFindFirstOrThrowArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cours
     * const cours = await prisma.cours.findMany()
     * 
     * // Get first 10 Cours
     * const cours = await prisma.cours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursWithIdOnly = await prisma.cours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursFindManyArgs>(args?: SelectSubset<T, CoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cours.
     * @param {CoursCreateArgs} args - Arguments to create a Cours.
     * @example
     * // Create one Cours
     * const Cours = await prisma.cours.create({
     *   data: {
     *     // ... data to create a Cours
     *   }
     * })
     * 
     */
    create<T extends CoursCreateArgs>(args: SelectSubset<T, CoursCreateArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cours.
     * @param {CoursCreateManyArgs} args - Arguments to create many Cours.
     * @example
     * // Create many Cours
     * const cours = await prisma.cours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursCreateManyArgs>(args?: SelectSubset<T, CoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cours.
     * @param {CoursDeleteArgs} args - Arguments to delete one Cours.
     * @example
     * // Delete one Cours
     * const Cours = await prisma.cours.delete({
     *   where: {
     *     // ... filter to delete one Cours
     *   }
     * })
     * 
     */
    delete<T extends CoursDeleteArgs>(args: SelectSubset<T, CoursDeleteArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cours.
     * @param {CoursUpdateArgs} args - Arguments to update one Cours.
     * @example
     * // Update one Cours
     * const cours = await prisma.cours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursUpdateArgs>(args: SelectSubset<T, CoursUpdateArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cours.
     * @param {CoursDeleteManyArgs} args - Arguments to filter Cours to delete.
     * @example
     * // Delete a few Cours
     * const { count } = await prisma.cours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursDeleteManyArgs>(args?: SelectSubset<T, CoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cours
     * const cours = await prisma.cours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursUpdateManyArgs>(args: SelectSubset<T, CoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cours.
     * @param {CoursUpsertArgs} args - Arguments to update or create a Cours.
     * @example
     * // Update or create a Cours
     * const cours = await prisma.cours.upsert({
     *   create: {
     *     // ... data to create a Cours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cours we want to update
     *   }
     * })
     */
    upsert<T extends CoursUpsertArgs>(args: SelectSubset<T, CoursUpsertArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursCountArgs} args - Arguments to filter Cours to count.
     * @example
     * // Count the number of Cours
     * const count = await prisma.cours.count({
     *   where: {
     *     // ... the filter for the Cours we want to count
     *   }
     * })
    **/
    count<T extends CoursCountArgs>(
      args?: Subset<T, CoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoursAggregateArgs>(args: Subset<T, CoursAggregateArgs>): Prisma.PrismaPromise<GetCoursAggregateType<T>>

    /**
     * Group by Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursGroupByArgs} args - Group by arguments.
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
      T extends CoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursGroupByArgs['orderBy'] }
        : { orderBy?: CoursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cours model
   */
  readonly fields: CoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lessons<T extends Cours$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Cours$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quiz<T extends Cours$quizArgs<ExtArgs> = {}>(args?: Subset<T, Cours$quizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visios<T extends Cours$visiosArgs<ExtArgs> = {}>(args?: Subset<T, Cours$visiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisioSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suivis<T extends Cours$suivisArgs<ExtArgs> = {}>(args?: Subset<T, Cours$suivisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuivreCoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends Cours$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Cours$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Cours model
   */
  interface CoursFieldRefs {
    readonly id: FieldRef<"Cours", 'Int'>
    readonly nom: FieldRef<"Cours", 'String'>
    readonly sousTitre: FieldRef<"Cours", 'String'>
    readonly description: FieldRef<"Cours", 'String'>
    readonly level: FieldRef<"Cours", 'String'>
    readonly content: FieldRef<"Cours", 'String'>
    readonly image: FieldRef<"Cours", 'String'>
    readonly video: FieldRef<"Cours", 'String'>
    readonly createdAt: FieldRef<"Cours", 'DateTime'>
    readonly updatedAt: FieldRef<"Cours", 'DateTime'>
    readonly userId: FieldRef<"Cours", 'Int'>
    readonly categoryId: FieldRef<"Cours", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cours findUnique
   */
  export type CoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where: CoursWhereUniqueInput
  }

  /**
   * Cours findUniqueOrThrow
   */
  export type CoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where: CoursWhereUniqueInput
  }

  /**
   * Cours findFirst
   */
  export type CoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where?: CoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cours to fetch.
     */
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cours.
     */
    cursor?: CoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cours.
     */
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * Cours findFirstOrThrow
   */
  export type CoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where?: CoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cours to fetch.
     */
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cours.
     */
    cursor?: CoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cours.
     */
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * Cours findMany
   */
  export type CoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where?: CoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cours to fetch.
     */
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cours.
     */
    cursor?: CoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cours.
     */
    skip?: number
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * Cours create
   */
  export type CoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * The data needed to create a Cours.
     */
    data: XOR<CoursCreateInput, CoursUncheckedCreateInput>
  }

  /**
   * Cours createMany
   */
  export type CoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cours.
     */
    data: CoursCreateManyInput | CoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cours update
   */
  export type CoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * The data needed to update a Cours.
     */
    data: XOR<CoursUpdateInput, CoursUncheckedUpdateInput>
    /**
     * Choose, which Cours to update.
     */
    where: CoursWhereUniqueInput
  }

  /**
   * Cours updateMany
   */
  export type CoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cours.
     */
    data: XOR<CoursUpdateManyMutationInput, CoursUncheckedUpdateManyInput>
    /**
     * Filter which Cours to update
     */
    where?: CoursWhereInput
    /**
     * Limit how many Cours to update.
     */
    limit?: number
  }

  /**
   * Cours upsert
   */
  export type CoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * The filter to search for the Cours to update in case it exists.
     */
    where: CoursWhereUniqueInput
    /**
     * In case the Cours found by the `where` argument doesn't exist, create a new Cours with this data.
     */
    create: XOR<CoursCreateInput, CoursUncheckedCreateInput>
    /**
     * In case the Cours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursUpdateInput, CoursUncheckedUpdateInput>
  }

  /**
   * Cours delete
   */
  export type CoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter which Cours to delete.
     */
    where: CoursWhereUniqueInput
  }

  /**
   * Cours deleteMany
   */
  export type CoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cours to delete
     */
    where?: CoursWhereInput
    /**
     * Limit how many Cours to delete.
     */
    limit?: number
  }

  /**
   * Cours.lessons
   */
  export type Cours$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Cours.quiz
   */
  export type Cours$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Cours.visios
   */
  export type Cours$visiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisioSession
     */
    select?: VisioSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisioSession
     */
    omit?: VisioSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisioSessionInclude<ExtArgs> | null
    where?: VisioSessionWhereInput
    orderBy?: VisioSessionOrderByWithRelationInput | VisioSessionOrderByWithRelationInput[]
    cursor?: VisioSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisioSessionScalarFieldEnum | VisioSessionScalarFieldEnum[]
  }

  /**
   * Cours.suivis
   */
  export type Cours$suivisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuivreCours
     */
    select?: SuivreCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuivreCours
     */
    omit?: SuivreCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuivreCoursInclude<ExtArgs> | null
    where?: SuivreCoursWhereInput
    orderBy?: SuivreCoursOrderByWithRelationInput | SuivreCoursOrderByWithRelationInput[]
    cursor?: SuivreCoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuivreCoursScalarFieldEnum | SuivreCoursScalarFieldEnum[]
  }

  /**
   * Cours.category
   */
  export type Cours$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Cours without action
   */
  export type CoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    id: number | null
    coursId: number | null
  }

  export type LessonSumAggregateOutputType = {
    id: number | null
    coursId: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: number | null
    title: string | null
    videoUrl: string | null
    document: string | null
    contenu: string | null
    coursId: number | null
  }

  export type LessonMaxAggregateOutputType = {
    id: number | null
    title: string | null
    videoUrl: string | null
    document: string | null
    contenu: string | null
    coursId: number | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    title: number
    videoUrl: number
    document: number
    contenu: number
    coursId: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    id?: true
    coursId?: true
  }

  export type LessonSumAggregateInputType = {
    id?: true
    coursId?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    title?: true
    videoUrl?: true
    document?: true
    contenu?: true
    coursId?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    title?: true
    videoUrl?: true
    document?: true
    contenu?: true
    coursId?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    title?: true
    videoUrl?: true
    document?: true
    contenu?: true
    coursId?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: number
    title: string
    videoUrl: string | null
    document: string | null
    contenu: string | null
    coursId: number
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    videoUrl?: boolean
    document?: boolean
    contenu?: boolean
    coursId?: boolean
    cours?: boolean | CoursDefaultArgs<ExtArgs>
    userLessons?: boolean | Lesson$userLessonsArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>



  export type LessonSelectScalar = {
    id?: boolean
    title?: boolean
    videoUrl?: boolean
    document?: boolean
    contenu?: boolean
    coursId?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "videoUrl" | "document" | "contenu" | "coursId", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | CoursDefaultArgs<ExtArgs>
    userLessons?: boolean | Lesson$userLessonsArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      cours: Prisma.$CoursPayload<ExtArgs>
      userLessons: Prisma.$UserLessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      videoUrl: string | null
      document: string | null
      contenu: string | null
      coursId: number
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
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
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cours<T extends CoursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoursDefaultArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userLessons<T extends Lesson$userLessonsArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$userLessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'Int'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly videoUrl: FieldRef<"Lesson", 'String'>
    readonly document: FieldRef<"Lesson", 'String'>
    readonly contenu: FieldRef<"Lesson", 'String'>
    readonly coursId: FieldRef<"Lesson", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.userLessons
   */
  export type Lesson$userLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLesson
     */
    select?: UserLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLesson
     */
    omit?: UserLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonInclude<ExtArgs> | null
    where?: UserLessonWhereInput
    orderBy?: UserLessonOrderByWithRelationInput | UserLessonOrderByWithRelationInput[]
    cursor?: UserLessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLessonScalarFieldEnum | UserLessonScalarFieldEnum[]
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model SuivreCours
   */

  export type AggregateSuivreCours = {
    _count: SuivreCoursCountAggregateOutputType | null
    _avg: SuivreCoursAvgAggregateOutputType | null
    _sum: SuivreCoursSumAggregateOutputType | null
    _min: SuivreCoursMinAggregateOutputType | null
    _max: SuivreCoursMaxAggregateOutputType | null
  }

  export type SuivreCoursAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    coursId: number | null
  }

  export type SuivreCoursSumAggregateOutputType = {
    id: number | null
    userId: number | null
    coursId: number | null
  }

  export type SuivreCoursMinAggregateOutputType = {
    id: number | null
    userId: number | null
    coursId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuivreCoursMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    coursId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuivreCoursCountAggregateOutputType = {
    id: number
    userId: number
    coursId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SuivreCoursAvgAggregateInputType = {
    id?: true
    userId?: true
    coursId?: true
  }

  export type SuivreCoursSumAggregateInputType = {
    id?: true
    userId?: true
    coursId?: true
  }

  export type SuivreCoursMinAggregateInputType = {
    id?: true
    userId?: true
    coursId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuivreCoursMaxAggregateInputType = {
    id?: true
    userId?: true
    coursId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuivreCoursCountAggregateInputType = {
    id?: true
    userId?: true
    coursId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SuivreCoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuivreCours to aggregate.
     */
    where?: SuivreCoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuivreCours to fetch.
     */
    orderBy?: SuivreCoursOrderByWithRelationInput | SuivreCoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuivreCoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuivreCours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuivreCours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuivreCours
    **/
    _count?: true | SuivreCoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuivreCoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuivreCoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuivreCoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuivreCoursMaxAggregateInputType
  }

  export type GetSuivreCoursAggregateType<T extends SuivreCoursAggregateArgs> = {
        [P in keyof T & keyof AggregateSuivreCours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuivreCours[P]>
      : GetScalarType<T[P], AggregateSuivreCours[P]>
  }




  export type SuivreCoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuivreCoursWhereInput
    orderBy?: SuivreCoursOrderByWithAggregationInput | SuivreCoursOrderByWithAggregationInput[]
    by: SuivreCoursScalarFieldEnum[] | SuivreCoursScalarFieldEnum
    having?: SuivreCoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuivreCoursCountAggregateInputType | true
    _avg?: SuivreCoursAvgAggregateInputType
    _sum?: SuivreCoursSumAggregateInputType
    _min?: SuivreCoursMinAggregateInputType
    _max?: SuivreCoursMaxAggregateInputType
  }

  export type SuivreCoursGroupByOutputType = {
    id: number
    userId: number
    coursId: number
    createdAt: Date
    updatedAt: Date
    _count: SuivreCoursCountAggregateOutputType | null
    _avg: SuivreCoursAvgAggregateOutputType | null
    _sum: SuivreCoursSumAggregateOutputType | null
    _min: SuivreCoursMinAggregateOutputType | null
    _max: SuivreCoursMaxAggregateOutputType | null
  }

  type GetSuivreCoursGroupByPayload<T extends SuivreCoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuivreCoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuivreCoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuivreCoursGroupByOutputType[P]>
            : GetScalarType<T[P], SuivreCoursGroupByOutputType[P]>
        }
      >
    >


  export type SuivreCoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coursId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suivreCours"]>



  export type SuivreCoursSelectScalar = {
    id?: boolean
    userId?: boolean
    coursId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SuivreCoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "coursId" | "createdAt" | "updatedAt", ExtArgs["result"]["suivreCours"]>
  export type SuivreCoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }

  export type $SuivreCoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuivreCours"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cours: Prisma.$CoursPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      coursId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["suivreCours"]>
    composites: {}
  }

  type SuivreCoursGetPayload<S extends boolean | null | undefined | SuivreCoursDefaultArgs> = $Result.GetResult<Prisma.$SuivreCoursPayload, S>

  type SuivreCoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuivreCoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuivreCoursCountAggregateInputType | true
    }

  export interface SuivreCoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuivreCours'], meta: { name: 'SuivreCours' } }
    /**
     * Find zero or one SuivreCours that matches the filter.
     * @param {SuivreCoursFindUniqueArgs} args - Arguments to find a SuivreCours
     * @example
     * // Get one SuivreCours
     * const suivreCours = await prisma.suivreCours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuivreCoursFindUniqueArgs>(args: SelectSubset<T, SuivreCoursFindUniqueArgs<ExtArgs>>): Prisma__SuivreCoursClient<$Result.GetResult<Prisma.$SuivreCoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuivreCours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuivreCoursFindUniqueOrThrowArgs} args - Arguments to find a SuivreCours
     * @example
     * // Get one SuivreCours
     * const suivreCours = await prisma.suivreCours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuivreCoursFindUniqueOrThrowArgs>(args: SelectSubset<T, SuivreCoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuivreCoursClient<$Result.GetResult<Prisma.$SuivreCoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuivreCours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuivreCoursFindFirstArgs} args - Arguments to find a SuivreCours
     * @example
     * // Get one SuivreCours
     * const suivreCours = await prisma.suivreCours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuivreCoursFindFirstArgs>(args?: SelectSubset<T, SuivreCoursFindFirstArgs<ExtArgs>>): Prisma__SuivreCoursClient<$Result.GetResult<Prisma.$SuivreCoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuivreCours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuivreCoursFindFirstOrThrowArgs} args - Arguments to find a SuivreCours
     * @example
     * // Get one SuivreCours
     * const suivreCours = await prisma.suivreCours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuivreCoursFindFirstOrThrowArgs>(args?: SelectSubset<T, SuivreCoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuivreCoursClient<$Result.GetResult<Prisma.$SuivreCoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuivreCours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuivreCoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuivreCours
     * const suivreCours = await prisma.suivreCours.findMany()
     * 
     * // Get first 10 SuivreCours
     * const suivreCours = await prisma.suivreCours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suivreCoursWithIdOnly = await prisma.suivreCours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuivreCoursFindManyArgs>(args?: SelectSubset<T, SuivreCoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuivreCoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuivreCours.
     * @param {SuivreCoursCreateArgs} args - Arguments to create a SuivreCours.
     * @example
     * // Create one SuivreCours
     * const SuivreCours = await prisma.suivreCours.create({
     *   data: {
     *     // ... data to create a SuivreCours
     *   }
     * })
     * 
     */
    create<T extends SuivreCoursCreateArgs>(args: SelectSubset<T, SuivreCoursCreateArgs<ExtArgs>>): Prisma__SuivreCoursClient<$Result.GetResult<Prisma.$SuivreCoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuivreCours.
     * @param {SuivreCoursCreateManyArgs} args - Arguments to create many SuivreCours.
     * @example
     * // Create many SuivreCours
     * const suivreCours = await prisma.suivreCours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuivreCoursCreateManyArgs>(args?: SelectSubset<T, SuivreCoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SuivreCours.
     * @param {SuivreCoursDeleteArgs} args - Arguments to delete one SuivreCours.
     * @example
     * // Delete one SuivreCours
     * const SuivreCours = await prisma.suivreCours.delete({
     *   where: {
     *     // ... filter to delete one SuivreCours
     *   }
     * })
     * 
     */
    delete<T extends SuivreCoursDeleteArgs>(args: SelectSubset<T, SuivreCoursDeleteArgs<ExtArgs>>): Prisma__SuivreCoursClient<$Result.GetResult<Prisma.$SuivreCoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuivreCours.
     * @param {SuivreCoursUpdateArgs} args - Arguments to update one SuivreCours.
     * @example
     * // Update one SuivreCours
     * const suivreCours = await prisma.suivreCours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuivreCoursUpdateArgs>(args: SelectSubset<T, SuivreCoursUpdateArgs<ExtArgs>>): Prisma__SuivreCoursClient<$Result.GetResult<Prisma.$SuivreCoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuivreCours.
     * @param {SuivreCoursDeleteManyArgs} args - Arguments to filter SuivreCours to delete.
     * @example
     * // Delete a few SuivreCours
     * const { count } = await prisma.suivreCours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuivreCoursDeleteManyArgs>(args?: SelectSubset<T, SuivreCoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuivreCours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuivreCoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuivreCours
     * const suivreCours = await prisma.suivreCours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuivreCoursUpdateManyArgs>(args: SelectSubset<T, SuivreCoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SuivreCours.
     * @param {SuivreCoursUpsertArgs} args - Arguments to update or create a SuivreCours.
     * @example
     * // Update or create a SuivreCours
     * const suivreCours = await prisma.suivreCours.upsert({
     *   create: {
     *     // ... data to create a SuivreCours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuivreCours we want to update
     *   }
     * })
     */
    upsert<T extends SuivreCoursUpsertArgs>(args: SelectSubset<T, SuivreCoursUpsertArgs<ExtArgs>>): Prisma__SuivreCoursClient<$Result.GetResult<Prisma.$SuivreCoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuivreCours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuivreCoursCountArgs} args - Arguments to filter SuivreCours to count.
     * @example
     * // Count the number of SuivreCours
     * const count = await prisma.suivreCours.count({
     *   where: {
     *     // ... the filter for the SuivreCours we want to count
     *   }
     * })
    **/
    count<T extends SuivreCoursCountArgs>(
      args?: Subset<T, SuivreCoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuivreCoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuivreCours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuivreCoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuivreCoursAggregateArgs>(args: Subset<T, SuivreCoursAggregateArgs>): Prisma.PrismaPromise<GetSuivreCoursAggregateType<T>>

    /**
     * Group by SuivreCours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuivreCoursGroupByArgs} args - Group by arguments.
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
      T extends SuivreCoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuivreCoursGroupByArgs['orderBy'] }
        : { orderBy?: SuivreCoursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuivreCoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuivreCoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuivreCours model
   */
  readonly fields: SuivreCoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuivreCours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuivreCoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cours<T extends CoursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoursDefaultArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SuivreCours model
   */
  interface SuivreCoursFieldRefs {
    readonly id: FieldRef<"SuivreCours", 'Int'>
    readonly userId: FieldRef<"SuivreCours", 'Int'>
    readonly coursId: FieldRef<"SuivreCours", 'Int'>
    readonly createdAt: FieldRef<"SuivreCours", 'DateTime'>
    readonly updatedAt: FieldRef<"SuivreCours", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuivreCours findUnique
   */
  export type SuivreCoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuivreCours
     */
    select?: SuivreCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuivreCours
     */
    omit?: SuivreCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuivreCoursInclude<ExtArgs> | null
    /**
     * Filter, which SuivreCours to fetch.
     */
    where: SuivreCoursWhereUniqueInput
  }

  /**
   * SuivreCours findUniqueOrThrow
   */
  export type SuivreCoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuivreCours
     */
    select?: SuivreCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuivreCours
     */
    omit?: SuivreCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuivreCoursInclude<ExtArgs> | null
    /**
     * Filter, which SuivreCours to fetch.
     */
    where: SuivreCoursWhereUniqueInput
  }

  /**
   * SuivreCours findFirst
   */
  export type SuivreCoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuivreCours
     */
    select?: SuivreCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuivreCours
     */
    omit?: SuivreCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuivreCoursInclude<ExtArgs> | null
    /**
     * Filter, which SuivreCours to fetch.
     */
    where?: SuivreCoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuivreCours to fetch.
     */
    orderBy?: SuivreCoursOrderByWithRelationInput | SuivreCoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuivreCours.
     */
    cursor?: SuivreCoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuivreCours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuivreCours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuivreCours.
     */
    distinct?: SuivreCoursScalarFieldEnum | SuivreCoursScalarFieldEnum[]
  }

  /**
   * SuivreCours findFirstOrThrow
   */
  export type SuivreCoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuivreCours
     */
    select?: SuivreCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuivreCours
     */
    omit?: SuivreCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuivreCoursInclude<ExtArgs> | null
    /**
     * Filter, which SuivreCours to fetch.
     */
    where?: SuivreCoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuivreCours to fetch.
     */
    orderBy?: SuivreCoursOrderByWithRelationInput | SuivreCoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuivreCours.
     */
    cursor?: SuivreCoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuivreCours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuivreCours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuivreCours.
     */
    distinct?: SuivreCoursScalarFieldEnum | SuivreCoursScalarFieldEnum[]
  }

  /**
   * SuivreCours findMany
   */
  export type SuivreCoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuivreCours
     */
    select?: SuivreCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuivreCours
     */
    omit?: SuivreCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuivreCoursInclude<ExtArgs> | null
    /**
     * Filter, which SuivreCours to fetch.
     */
    where?: SuivreCoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuivreCours to fetch.
     */
    orderBy?: SuivreCoursOrderByWithRelationInput | SuivreCoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuivreCours.
     */
    cursor?: SuivreCoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuivreCours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuivreCours.
     */
    skip?: number
    distinct?: SuivreCoursScalarFieldEnum | SuivreCoursScalarFieldEnum[]
  }

  /**
   * SuivreCours create
   */
  export type SuivreCoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuivreCours
     */
    select?: SuivreCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuivreCours
     */
    omit?: SuivreCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuivreCoursInclude<ExtArgs> | null
    /**
     * The data needed to create a SuivreCours.
     */
    data: XOR<SuivreCoursCreateInput, SuivreCoursUncheckedCreateInput>
  }

  /**
   * SuivreCours createMany
   */
  export type SuivreCoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuivreCours.
     */
    data: SuivreCoursCreateManyInput | SuivreCoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuivreCours update
   */
  export type SuivreCoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuivreCours
     */
    select?: SuivreCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuivreCours
     */
    omit?: SuivreCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuivreCoursInclude<ExtArgs> | null
    /**
     * The data needed to update a SuivreCours.
     */
    data: XOR<SuivreCoursUpdateInput, SuivreCoursUncheckedUpdateInput>
    /**
     * Choose, which SuivreCours to update.
     */
    where: SuivreCoursWhereUniqueInput
  }

  /**
   * SuivreCours updateMany
   */
  export type SuivreCoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuivreCours.
     */
    data: XOR<SuivreCoursUpdateManyMutationInput, SuivreCoursUncheckedUpdateManyInput>
    /**
     * Filter which SuivreCours to update
     */
    where?: SuivreCoursWhereInput
    /**
     * Limit how many SuivreCours to update.
     */
    limit?: number
  }

  /**
   * SuivreCours upsert
   */
  export type SuivreCoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuivreCours
     */
    select?: SuivreCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuivreCours
     */
    omit?: SuivreCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuivreCoursInclude<ExtArgs> | null
    /**
     * The filter to search for the SuivreCours to update in case it exists.
     */
    where: SuivreCoursWhereUniqueInput
    /**
     * In case the SuivreCours found by the `where` argument doesn't exist, create a new SuivreCours with this data.
     */
    create: XOR<SuivreCoursCreateInput, SuivreCoursUncheckedCreateInput>
    /**
     * In case the SuivreCours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuivreCoursUpdateInput, SuivreCoursUncheckedUpdateInput>
  }

  /**
   * SuivreCours delete
   */
  export type SuivreCoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuivreCours
     */
    select?: SuivreCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuivreCours
     */
    omit?: SuivreCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuivreCoursInclude<ExtArgs> | null
    /**
     * Filter which SuivreCours to delete.
     */
    where: SuivreCoursWhereUniqueInput
  }

  /**
   * SuivreCours deleteMany
   */
  export type SuivreCoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuivreCours to delete
     */
    where?: SuivreCoursWhereInput
    /**
     * Limit how many SuivreCours to delete.
     */
    limit?: number
  }

  /**
   * SuivreCours without action
   */
  export type SuivreCoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuivreCours
     */
    select?: SuivreCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuivreCours
     */
    omit?: SuivreCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuivreCoursInclude<ExtArgs> | null
  }


  /**
   * Model UserLesson
   */

  export type AggregateUserLesson = {
    _count: UserLessonCountAggregateOutputType | null
    _avg: UserLessonAvgAggregateOutputType | null
    _sum: UserLessonSumAggregateOutputType | null
    _min: UserLessonMinAggregateOutputType | null
    _max: UserLessonMaxAggregateOutputType | null
  }

  export type UserLessonAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    lessonId: number | null
  }

  export type UserLessonSumAggregateOutputType = {
    id: number | null
    userId: number | null
    lessonId: number | null
  }

  export type UserLessonMinAggregateOutputType = {
    id: number | null
    userId: number | null
    lessonId: number | null
    isFinished: boolean | null
  }

  export type UserLessonMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    lessonId: number | null
    isFinished: boolean | null
  }

  export type UserLessonCountAggregateOutputType = {
    id: number
    userId: number
    lessonId: number
    isFinished: number
    _all: number
  }


  export type UserLessonAvgAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
  }

  export type UserLessonSumAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
  }

  export type UserLessonMinAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    isFinished?: true
  }

  export type UserLessonMaxAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    isFinished?: true
  }

  export type UserLessonCountAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    isFinished?: true
    _all?: true
  }

  export type UserLessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLesson to aggregate.
     */
    where?: UserLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLessons to fetch.
     */
    orderBy?: UserLessonOrderByWithRelationInput | UserLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLessons
    **/
    _count?: true | UserLessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLessonMaxAggregateInputType
  }

  export type GetUserLessonAggregateType<T extends UserLessonAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLesson[P]>
      : GetScalarType<T[P], AggregateUserLesson[P]>
  }




  export type UserLessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLessonWhereInput
    orderBy?: UserLessonOrderByWithAggregationInput | UserLessonOrderByWithAggregationInput[]
    by: UserLessonScalarFieldEnum[] | UserLessonScalarFieldEnum
    having?: UserLessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLessonCountAggregateInputType | true
    _avg?: UserLessonAvgAggregateInputType
    _sum?: UserLessonSumAggregateInputType
    _min?: UserLessonMinAggregateInputType
    _max?: UserLessonMaxAggregateInputType
  }

  export type UserLessonGroupByOutputType = {
    id: number
    userId: number
    lessonId: number
    isFinished: boolean
    _count: UserLessonCountAggregateOutputType | null
    _avg: UserLessonAvgAggregateOutputType | null
    _sum: UserLessonSumAggregateOutputType | null
    _min: UserLessonMinAggregateOutputType | null
    _max: UserLessonMaxAggregateOutputType | null
  }

  type GetUserLessonGroupByPayload<T extends UserLessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLessonGroupByOutputType[P]>
            : GetScalarType<T[P], UserLessonGroupByOutputType[P]>
        }
      >
    >


  export type UserLessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    isFinished?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLesson"]>



  export type UserLessonSelectScalar = {
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    isFinished?: boolean
  }

  export type UserLessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lessonId" | "isFinished", ExtArgs["result"]["userLesson"]>
  export type UserLessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $UserLessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLesson"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      lessonId: number
      isFinished: boolean
    }, ExtArgs["result"]["userLesson"]>
    composites: {}
  }

  type UserLessonGetPayload<S extends boolean | null | undefined | UserLessonDefaultArgs> = $Result.GetResult<Prisma.$UserLessonPayload, S>

  type UserLessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLessonCountAggregateInputType | true
    }

  export interface UserLessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLesson'], meta: { name: 'UserLesson' } }
    /**
     * Find zero or one UserLesson that matches the filter.
     * @param {UserLessonFindUniqueArgs} args - Arguments to find a UserLesson
     * @example
     * // Get one UserLesson
     * const userLesson = await prisma.userLesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLessonFindUniqueArgs>(args: SelectSubset<T, UserLessonFindUniqueArgs<ExtArgs>>): Prisma__UserLessonClient<$Result.GetResult<Prisma.$UserLessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLessonFindUniqueOrThrowArgs} args - Arguments to find a UserLesson
     * @example
     * // Get one UserLesson
     * const userLesson = await prisma.userLesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLessonFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLessonClient<$Result.GetResult<Prisma.$UserLessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonFindFirstArgs} args - Arguments to find a UserLesson
     * @example
     * // Get one UserLesson
     * const userLesson = await prisma.userLesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLessonFindFirstArgs>(args?: SelectSubset<T, UserLessonFindFirstArgs<ExtArgs>>): Prisma__UserLessonClient<$Result.GetResult<Prisma.$UserLessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonFindFirstOrThrowArgs} args - Arguments to find a UserLesson
     * @example
     * // Get one UserLesson
     * const userLesson = await prisma.userLesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLessonFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLessonClient<$Result.GetResult<Prisma.$UserLessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLessons
     * const userLessons = await prisma.userLesson.findMany()
     * 
     * // Get first 10 UserLessons
     * const userLessons = await prisma.userLesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLessonWithIdOnly = await prisma.userLesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLessonFindManyArgs>(args?: SelectSubset<T, UserLessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLesson.
     * @param {UserLessonCreateArgs} args - Arguments to create a UserLesson.
     * @example
     * // Create one UserLesson
     * const UserLesson = await prisma.userLesson.create({
     *   data: {
     *     // ... data to create a UserLesson
     *   }
     * })
     * 
     */
    create<T extends UserLessonCreateArgs>(args: SelectSubset<T, UserLessonCreateArgs<ExtArgs>>): Prisma__UserLessonClient<$Result.GetResult<Prisma.$UserLessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLessons.
     * @param {UserLessonCreateManyArgs} args - Arguments to create many UserLessons.
     * @example
     * // Create many UserLessons
     * const userLesson = await prisma.userLesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLessonCreateManyArgs>(args?: SelectSubset<T, UserLessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserLesson.
     * @param {UserLessonDeleteArgs} args - Arguments to delete one UserLesson.
     * @example
     * // Delete one UserLesson
     * const UserLesson = await prisma.userLesson.delete({
     *   where: {
     *     // ... filter to delete one UserLesson
     *   }
     * })
     * 
     */
    delete<T extends UserLessonDeleteArgs>(args: SelectSubset<T, UserLessonDeleteArgs<ExtArgs>>): Prisma__UserLessonClient<$Result.GetResult<Prisma.$UserLessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLesson.
     * @param {UserLessonUpdateArgs} args - Arguments to update one UserLesson.
     * @example
     * // Update one UserLesson
     * const userLesson = await prisma.userLesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLessonUpdateArgs>(args: SelectSubset<T, UserLessonUpdateArgs<ExtArgs>>): Prisma__UserLessonClient<$Result.GetResult<Prisma.$UserLessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLessons.
     * @param {UserLessonDeleteManyArgs} args - Arguments to filter UserLessons to delete.
     * @example
     * // Delete a few UserLessons
     * const { count } = await prisma.userLesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLessonDeleteManyArgs>(args?: SelectSubset<T, UserLessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLessons
     * const userLesson = await prisma.userLesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLessonUpdateManyArgs>(args: SelectSubset<T, UserLessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLesson.
     * @param {UserLessonUpsertArgs} args - Arguments to update or create a UserLesson.
     * @example
     * // Update or create a UserLesson
     * const userLesson = await prisma.userLesson.upsert({
     *   create: {
     *     // ... data to create a UserLesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLesson we want to update
     *   }
     * })
     */
    upsert<T extends UserLessonUpsertArgs>(args: SelectSubset<T, UserLessonUpsertArgs<ExtArgs>>): Prisma__UserLessonClient<$Result.GetResult<Prisma.$UserLessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonCountArgs} args - Arguments to filter UserLessons to count.
     * @example
     * // Count the number of UserLessons
     * const count = await prisma.userLesson.count({
     *   where: {
     *     // ... the filter for the UserLessons we want to count
     *   }
     * })
    **/
    count<T extends UserLessonCountArgs>(
      args?: Subset<T, UserLessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLessonAggregateArgs>(args: Subset<T, UserLessonAggregateArgs>): Prisma.PrismaPromise<GetUserLessonAggregateType<T>>

    /**
     * Group by UserLesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonGroupByArgs} args - Group by arguments.
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
      T extends UserLessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLessonGroupByArgs['orderBy'] }
        : { orderBy?: UserLessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLesson model
   */
  readonly fields: UserLessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserLesson model
   */
  interface UserLessonFieldRefs {
    readonly id: FieldRef<"UserLesson", 'Int'>
    readonly userId: FieldRef<"UserLesson", 'Int'>
    readonly lessonId: FieldRef<"UserLesson", 'Int'>
    readonly isFinished: FieldRef<"UserLesson", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserLesson findUnique
   */
  export type UserLessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLesson
     */
    select?: UserLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLesson
     */
    omit?: UserLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonInclude<ExtArgs> | null
    /**
     * Filter, which UserLesson to fetch.
     */
    where: UserLessonWhereUniqueInput
  }

  /**
   * UserLesson findUniqueOrThrow
   */
  export type UserLessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLesson
     */
    select?: UserLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLesson
     */
    omit?: UserLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonInclude<ExtArgs> | null
    /**
     * Filter, which UserLesson to fetch.
     */
    where: UserLessonWhereUniqueInput
  }

  /**
   * UserLesson findFirst
   */
  export type UserLessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLesson
     */
    select?: UserLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLesson
     */
    omit?: UserLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonInclude<ExtArgs> | null
    /**
     * Filter, which UserLesson to fetch.
     */
    where?: UserLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLessons to fetch.
     */
    orderBy?: UserLessonOrderByWithRelationInput | UserLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLessons.
     */
    cursor?: UserLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLessons.
     */
    distinct?: UserLessonScalarFieldEnum | UserLessonScalarFieldEnum[]
  }

  /**
   * UserLesson findFirstOrThrow
   */
  export type UserLessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLesson
     */
    select?: UserLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLesson
     */
    omit?: UserLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonInclude<ExtArgs> | null
    /**
     * Filter, which UserLesson to fetch.
     */
    where?: UserLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLessons to fetch.
     */
    orderBy?: UserLessonOrderByWithRelationInput | UserLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLessons.
     */
    cursor?: UserLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLessons.
     */
    distinct?: UserLessonScalarFieldEnum | UserLessonScalarFieldEnum[]
  }

  /**
   * UserLesson findMany
   */
  export type UserLessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLesson
     */
    select?: UserLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLesson
     */
    omit?: UserLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonInclude<ExtArgs> | null
    /**
     * Filter, which UserLessons to fetch.
     */
    where?: UserLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLessons to fetch.
     */
    orderBy?: UserLessonOrderByWithRelationInput | UserLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLessons.
     */
    cursor?: UserLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLessons.
     */
    skip?: number
    distinct?: UserLessonScalarFieldEnum | UserLessonScalarFieldEnum[]
  }

  /**
   * UserLesson create
   */
  export type UserLessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLesson
     */
    select?: UserLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLesson
     */
    omit?: UserLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLesson.
     */
    data: XOR<UserLessonCreateInput, UserLessonUncheckedCreateInput>
  }

  /**
   * UserLesson createMany
   */
  export type UserLessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLessons.
     */
    data: UserLessonCreateManyInput | UserLessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLesson update
   */
  export type UserLessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLesson
     */
    select?: UserLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLesson
     */
    omit?: UserLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLesson.
     */
    data: XOR<UserLessonUpdateInput, UserLessonUncheckedUpdateInput>
    /**
     * Choose, which UserLesson to update.
     */
    where: UserLessonWhereUniqueInput
  }

  /**
   * UserLesson updateMany
   */
  export type UserLessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLessons.
     */
    data: XOR<UserLessonUpdateManyMutationInput, UserLessonUncheckedUpdateManyInput>
    /**
     * Filter which UserLessons to update
     */
    where?: UserLessonWhereInput
    /**
     * Limit how many UserLessons to update.
     */
    limit?: number
  }

  /**
   * UserLesson upsert
   */
  export type UserLessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLesson
     */
    select?: UserLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLesson
     */
    omit?: UserLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLesson to update in case it exists.
     */
    where: UserLessonWhereUniqueInput
    /**
     * In case the UserLesson found by the `where` argument doesn't exist, create a new UserLesson with this data.
     */
    create: XOR<UserLessonCreateInput, UserLessonUncheckedCreateInput>
    /**
     * In case the UserLesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLessonUpdateInput, UserLessonUncheckedUpdateInput>
  }

  /**
   * UserLesson delete
   */
  export type UserLessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLesson
     */
    select?: UserLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLesson
     */
    omit?: UserLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonInclude<ExtArgs> | null
    /**
     * Filter which UserLesson to delete.
     */
    where: UserLessonWhereUniqueInput
  }

  /**
   * UserLesson deleteMany
   */
  export type UserLessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLessons to delete
     */
    where?: UserLessonWhereInput
    /**
     * Limit how many UserLessons to delete.
     */
    limit?: number
  }

  /**
   * UserLesson without action
   */
  export type UserLessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLesson
     */
    select?: UserLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLesson
     */
    omit?: UserLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    id: number | null
    coursId: number | null
  }

  export type QuizSumAggregateOutputType = {
    id: number | null
    coursId: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: number | null
    title: string | null
    coursId: number | null
  }

  export type QuizMaxAggregateOutputType = {
    id: number | null
    title: string | null
    coursId: number | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    title: number
    coursId: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    id?: true
    coursId?: true
  }

  export type QuizSumAggregateInputType = {
    id?: true
    coursId?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    title?: true
    coursId?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    title?: true
    coursId?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    title?: true
    coursId?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: number
    title: string
    coursId: number
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    coursId?: boolean
    cours?: boolean | CoursDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    results?: boolean | Quiz$resultsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>



  export type QuizSelectScalar = {
    id?: boolean
    title?: boolean
    coursId?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "coursId", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | CoursDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    results?: boolean | Quiz$resultsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      cours: Prisma.$CoursPayload<ExtArgs>
      questions: Prisma.$QuizQuestionPayload<ExtArgs>[]
      results: Prisma.$QuizResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      coursId: number
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cours<T extends CoursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoursDefaultArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Quiz$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    results<T extends Quiz$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'Int'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly coursId: FieldRef<"Quiz", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.questions
   */
  export type Quiz$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    where?: QuizQuestionWhereInput
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    cursor?: QuizQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * Quiz.results
   */
  export type Quiz$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    where?: QuizResultWhereInput
    orderBy?: QuizResultOrderByWithRelationInput | QuizResultOrderByWithRelationInput[]
    cursor?: QuizResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizResultScalarFieldEnum | QuizResultScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model QuizQuestion
   */

  export type AggregateQuizQuestion = {
    _count: QuizQuestionCountAggregateOutputType | null
    _avg: QuizQuestionAvgAggregateOutputType | null
    _sum: QuizQuestionSumAggregateOutputType | null
    _min: QuizQuestionMinAggregateOutputType | null
    _max: QuizQuestionMaxAggregateOutputType | null
  }

  export type QuizQuestionAvgAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type QuizQuestionSumAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type QuizQuestionMinAggregateOutputType = {
    id: number | null
    type: string | null
    content: string | null
    answer: string | null
    quizId: number | null
  }

  export type QuizQuestionMaxAggregateOutputType = {
    id: number | null
    type: string | null
    content: string | null
    answer: string | null
    quizId: number | null
  }

  export type QuizQuestionCountAggregateOutputType = {
    id: number
    type: number
    content: number
    answer: number
    quizId: number
    _all: number
  }


  export type QuizQuestionAvgAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type QuizQuestionSumAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type QuizQuestionMinAggregateInputType = {
    id?: true
    type?: true
    content?: true
    answer?: true
    quizId?: true
  }

  export type QuizQuestionMaxAggregateInputType = {
    id?: true
    type?: true
    content?: true
    answer?: true
    quizId?: true
  }

  export type QuizQuestionCountAggregateInputType = {
    id?: true
    type?: true
    content?: true
    answer?: true
    quizId?: true
    _all?: true
  }

  export type QuizQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestion to aggregate.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizQuestions
    **/
    _count?: true | QuizQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizQuestionMaxAggregateInputType
  }

  export type GetQuizQuestionAggregateType<T extends QuizQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizQuestion[P]>
      : GetScalarType<T[P], AggregateQuizQuestion[P]>
  }




  export type QuizQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizQuestionWhereInput
    orderBy?: QuizQuestionOrderByWithAggregationInput | QuizQuestionOrderByWithAggregationInput[]
    by: QuizQuestionScalarFieldEnum[] | QuizQuestionScalarFieldEnum
    having?: QuizQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizQuestionCountAggregateInputType | true
    _avg?: QuizQuestionAvgAggregateInputType
    _sum?: QuizQuestionSumAggregateInputType
    _min?: QuizQuestionMinAggregateInputType
    _max?: QuizQuestionMaxAggregateInputType
  }

  export type QuizQuestionGroupByOutputType = {
    id: number
    type: string
    content: string
    answer: string
    quizId: number
    _count: QuizQuestionCountAggregateOutputType | null
    _avg: QuizQuestionAvgAggregateOutputType | null
    _sum: QuizQuestionSumAggregateOutputType | null
    _min: QuizQuestionMinAggregateOutputType | null
    _max: QuizQuestionMaxAggregateOutputType | null
  }

  type GetQuizQuestionGroupByPayload<T extends QuizQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizQuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuizQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    answer?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    options?: boolean | QuizQuestion$optionsArgs<ExtArgs>
    _count?: boolean | QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestion"]>



  export type QuizQuestionSelectScalar = {
    id?: boolean
    type?: boolean
    content?: boolean
    answer?: boolean
    quizId?: boolean
  }

  export type QuizQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "content" | "answer" | "quizId", ExtArgs["result"]["quizQuestion"]>
  export type QuizQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    options?: boolean | QuizQuestion$optionsArgs<ExtArgs>
    _count?: boolean | QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuizQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizQuestion"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      options: Prisma.$QuizOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      content: string
      answer: string
      quizId: number
    }, ExtArgs["result"]["quizQuestion"]>
    composites: {}
  }

  type QuizQuestionGetPayload<S extends boolean | null | undefined | QuizQuestionDefaultArgs> = $Result.GetResult<Prisma.$QuizQuestionPayload, S>

  type QuizQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizQuestionCountAggregateInputType | true
    }

  export interface QuizQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizQuestion'], meta: { name: 'QuizQuestion' } }
    /**
     * Find zero or one QuizQuestion that matches the filter.
     * @param {QuizQuestionFindUniqueArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizQuestionFindUniqueArgs>(args: SelectSubset<T, QuizQuestionFindUniqueArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizQuestionFindUniqueOrThrowArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindFirstArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizQuestionFindFirstArgs>(args?: SelectSubset<T, QuizQuestionFindFirstArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindFirstOrThrowArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizQuestions
     * const quizQuestions = await prisma.quizQuestion.findMany()
     * 
     * // Get first 10 QuizQuestions
     * const quizQuestions = await prisma.quizQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizQuestionWithIdOnly = await prisma.quizQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizQuestionFindManyArgs>(args?: SelectSubset<T, QuizQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizQuestion.
     * @param {QuizQuestionCreateArgs} args - Arguments to create a QuizQuestion.
     * @example
     * // Create one QuizQuestion
     * const QuizQuestion = await prisma.quizQuestion.create({
     *   data: {
     *     // ... data to create a QuizQuestion
     *   }
     * })
     * 
     */
    create<T extends QuizQuestionCreateArgs>(args: SelectSubset<T, QuizQuestionCreateArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizQuestions.
     * @param {QuizQuestionCreateManyArgs} args - Arguments to create many QuizQuestions.
     * @example
     * // Create many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizQuestionCreateManyArgs>(args?: SelectSubset<T, QuizQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuizQuestion.
     * @param {QuizQuestionDeleteArgs} args - Arguments to delete one QuizQuestion.
     * @example
     * // Delete one QuizQuestion
     * const QuizQuestion = await prisma.quizQuestion.delete({
     *   where: {
     *     // ... filter to delete one QuizQuestion
     *   }
     * })
     * 
     */
    delete<T extends QuizQuestionDeleteArgs>(args: SelectSubset<T, QuizQuestionDeleteArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizQuestion.
     * @param {QuizQuestionUpdateArgs} args - Arguments to update one QuizQuestion.
     * @example
     * // Update one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizQuestionUpdateArgs>(args: SelectSubset<T, QuizQuestionUpdateArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizQuestions.
     * @param {QuizQuestionDeleteManyArgs} args - Arguments to filter QuizQuestions to delete.
     * @example
     * // Delete a few QuizQuestions
     * const { count } = await prisma.quizQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizQuestionDeleteManyArgs>(args?: SelectSubset<T, QuizQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizQuestionUpdateManyArgs>(args: SelectSubset<T, QuizQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuizQuestion.
     * @param {QuizQuestionUpsertArgs} args - Arguments to update or create a QuizQuestion.
     * @example
     * // Update or create a QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.upsert({
     *   create: {
     *     // ... data to create a QuizQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizQuestion we want to update
     *   }
     * })
     */
    upsert<T extends QuizQuestionUpsertArgs>(args: SelectSubset<T, QuizQuestionUpsertArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionCountArgs} args - Arguments to filter QuizQuestions to count.
     * @example
     * // Count the number of QuizQuestions
     * const count = await prisma.quizQuestion.count({
     *   where: {
     *     // ... the filter for the QuizQuestions we want to count
     *   }
     * })
    **/
    count<T extends QuizQuestionCountArgs>(
      args?: Subset<T, QuizQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizQuestionAggregateArgs>(args: Subset<T, QuizQuestionAggregateArgs>): Prisma.PrismaPromise<GetQuizQuestionAggregateType<T>>

    /**
     * Group by QuizQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionGroupByArgs} args - Group by arguments.
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
      T extends QuizQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizQuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuizQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizQuestion model
   */
  readonly fields: QuizQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends QuizQuestion$optionsArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestion$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuizQuestion model
   */
  interface QuizQuestionFieldRefs {
    readonly id: FieldRef<"QuizQuestion", 'Int'>
    readonly type: FieldRef<"QuizQuestion", 'String'>
    readonly content: FieldRef<"QuizQuestion", 'String'>
    readonly answer: FieldRef<"QuizQuestion", 'String'>
    readonly quizId: FieldRef<"QuizQuestion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * QuizQuestion findUnique
   */
  export type QuizQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion findUniqueOrThrow
   */
  export type QuizQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion findFirst
   */
  export type QuizQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestions.
     */
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion findFirstOrThrow
   */
  export type QuizQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestions.
     */
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion findMany
   */
  export type QuizQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestions to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion create
   */
  export type QuizQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizQuestion.
     */
    data: XOR<QuizQuestionCreateInput, QuizQuestionUncheckedCreateInput>
  }

  /**
   * QuizQuestion createMany
   */
  export type QuizQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizQuestions.
     */
    data: QuizQuestionCreateManyInput | QuizQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizQuestion update
   */
  export type QuizQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizQuestion.
     */
    data: XOR<QuizQuestionUpdateInput, QuizQuestionUncheckedUpdateInput>
    /**
     * Choose, which QuizQuestion to update.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion updateMany
   */
  export type QuizQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizQuestions.
     */
    data: XOR<QuizQuestionUpdateManyMutationInput, QuizQuestionUncheckedUpdateManyInput>
    /**
     * Filter which QuizQuestions to update
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to update.
     */
    limit?: number
  }

  /**
   * QuizQuestion upsert
   */
  export type QuizQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizQuestion to update in case it exists.
     */
    where: QuizQuestionWhereUniqueInput
    /**
     * In case the QuizQuestion found by the `where` argument doesn't exist, create a new QuizQuestion with this data.
     */
    create: XOR<QuizQuestionCreateInput, QuizQuestionUncheckedCreateInput>
    /**
     * In case the QuizQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizQuestionUpdateInput, QuizQuestionUncheckedUpdateInput>
  }

  /**
   * QuizQuestion delete
   */
  export type QuizQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter which QuizQuestion to delete.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion deleteMany
   */
  export type QuizQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestions to delete
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to delete.
     */
    limit?: number
  }

  /**
   * QuizQuestion.options
   */
  export type QuizQuestion$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    where?: QuizOptionWhereInput
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    cursor?: QuizOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizOptionScalarFieldEnum | QuizOptionScalarFieldEnum[]
  }

  /**
   * QuizQuestion without action
   */
  export type QuizQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuizOption
   */

  export type AggregateQuizOption = {
    _count: QuizOptionCountAggregateOutputType | null
    _avg: QuizOptionAvgAggregateOutputType | null
    _sum: QuizOptionSumAggregateOutputType | null
    _min: QuizOptionMinAggregateOutputType | null
    _max: QuizOptionMaxAggregateOutputType | null
  }

  export type QuizOptionAvgAggregateOutputType = {
    id: number | null
    quizQuestionId: number | null
  }

  export type QuizOptionSumAggregateOutputType = {
    id: number | null
    quizQuestionId: number | null
  }

  export type QuizOptionMinAggregateOutputType = {
    id: number | null
    quizQuestionId: number | null
    nom: string | null
  }

  export type QuizOptionMaxAggregateOutputType = {
    id: number | null
    quizQuestionId: number | null
    nom: string | null
  }

  export type QuizOptionCountAggregateOutputType = {
    id: number
    quizQuestionId: number
    nom: number
    _all: number
  }


  export type QuizOptionAvgAggregateInputType = {
    id?: true
    quizQuestionId?: true
  }

  export type QuizOptionSumAggregateInputType = {
    id?: true
    quizQuestionId?: true
  }

  export type QuizOptionMinAggregateInputType = {
    id?: true
    quizQuestionId?: true
    nom?: true
  }

  export type QuizOptionMaxAggregateInputType = {
    id?: true
    quizQuestionId?: true
    nom?: true
  }

  export type QuizOptionCountAggregateInputType = {
    id?: true
    quizQuestionId?: true
    nom?: true
    _all?: true
  }

  export type QuizOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizOption to aggregate.
     */
    where?: QuizOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizOptions to fetch.
     */
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizOptions
    **/
    _count?: true | QuizOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizOptionMaxAggregateInputType
  }

  export type GetQuizOptionAggregateType<T extends QuizOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizOption[P]>
      : GetScalarType<T[P], AggregateQuizOption[P]>
  }




  export type QuizOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizOptionWhereInput
    orderBy?: QuizOptionOrderByWithAggregationInput | QuizOptionOrderByWithAggregationInput[]
    by: QuizOptionScalarFieldEnum[] | QuizOptionScalarFieldEnum
    having?: QuizOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizOptionCountAggregateInputType | true
    _avg?: QuizOptionAvgAggregateInputType
    _sum?: QuizOptionSumAggregateInputType
    _min?: QuizOptionMinAggregateInputType
    _max?: QuizOptionMaxAggregateInputType
  }

  export type QuizOptionGroupByOutputType = {
    id: number
    quizQuestionId: number
    nom: string
    _count: QuizOptionCountAggregateOutputType | null
    _avg: QuizOptionAvgAggregateOutputType | null
    _sum: QuizOptionSumAggregateOutputType | null
    _min: QuizOptionMinAggregateOutputType | null
    _max: QuizOptionMaxAggregateOutputType | null
  }

  type GetQuizOptionGroupByPayload<T extends QuizOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizOptionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizOptionGroupByOutputType[P]>
        }
      >
    >


  export type QuizOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizQuestionId?: boolean
    nom?: boolean
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizOption"]>



  export type QuizOptionSelectScalar = {
    id?: boolean
    quizQuestionId?: boolean
    nom?: boolean
  }

  export type QuizOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizQuestionId" | "nom", ExtArgs["result"]["quizOption"]>
  export type QuizOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }

  export type $QuizOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizOption"
    objects: {
      question: Prisma.$QuizQuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quizQuestionId: number
      nom: string
    }, ExtArgs["result"]["quizOption"]>
    composites: {}
  }

  type QuizOptionGetPayload<S extends boolean | null | undefined | QuizOptionDefaultArgs> = $Result.GetResult<Prisma.$QuizOptionPayload, S>

  type QuizOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizOptionCountAggregateInputType | true
    }

  export interface QuizOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizOption'], meta: { name: 'QuizOption' } }
    /**
     * Find zero or one QuizOption that matches the filter.
     * @param {QuizOptionFindUniqueArgs} args - Arguments to find a QuizOption
     * @example
     * // Get one QuizOption
     * const quizOption = await prisma.quizOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizOptionFindUniqueArgs>(args: SelectSubset<T, QuizOptionFindUniqueArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizOptionFindUniqueOrThrowArgs} args - Arguments to find a QuizOption
     * @example
     * // Get one QuizOption
     * const quizOption = await prisma.quizOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionFindFirstArgs} args - Arguments to find a QuizOption
     * @example
     * // Get one QuizOption
     * const quizOption = await prisma.quizOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizOptionFindFirstArgs>(args?: SelectSubset<T, QuizOptionFindFirstArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionFindFirstOrThrowArgs} args - Arguments to find a QuizOption
     * @example
     * // Get one QuizOption
     * const quizOption = await prisma.quizOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizOptions
     * const quizOptions = await prisma.quizOption.findMany()
     * 
     * // Get first 10 QuizOptions
     * const quizOptions = await prisma.quizOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizOptionWithIdOnly = await prisma.quizOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizOptionFindManyArgs>(args?: SelectSubset<T, QuizOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizOption.
     * @param {QuizOptionCreateArgs} args - Arguments to create a QuizOption.
     * @example
     * // Create one QuizOption
     * const QuizOption = await prisma.quizOption.create({
     *   data: {
     *     // ... data to create a QuizOption
     *   }
     * })
     * 
     */
    create<T extends QuizOptionCreateArgs>(args: SelectSubset<T, QuizOptionCreateArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizOptions.
     * @param {QuizOptionCreateManyArgs} args - Arguments to create many QuizOptions.
     * @example
     * // Create many QuizOptions
     * const quizOption = await prisma.quizOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizOptionCreateManyArgs>(args?: SelectSubset<T, QuizOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuizOption.
     * @param {QuizOptionDeleteArgs} args - Arguments to delete one QuizOption.
     * @example
     * // Delete one QuizOption
     * const QuizOption = await prisma.quizOption.delete({
     *   where: {
     *     // ... filter to delete one QuizOption
     *   }
     * })
     * 
     */
    delete<T extends QuizOptionDeleteArgs>(args: SelectSubset<T, QuizOptionDeleteArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizOption.
     * @param {QuizOptionUpdateArgs} args - Arguments to update one QuizOption.
     * @example
     * // Update one QuizOption
     * const quizOption = await prisma.quizOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizOptionUpdateArgs>(args: SelectSubset<T, QuizOptionUpdateArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizOptions.
     * @param {QuizOptionDeleteManyArgs} args - Arguments to filter QuizOptions to delete.
     * @example
     * // Delete a few QuizOptions
     * const { count } = await prisma.quizOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizOptionDeleteManyArgs>(args?: SelectSubset<T, QuizOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizOptions
     * const quizOption = await prisma.quizOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizOptionUpdateManyArgs>(args: SelectSubset<T, QuizOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuizOption.
     * @param {QuizOptionUpsertArgs} args - Arguments to update or create a QuizOption.
     * @example
     * // Update or create a QuizOption
     * const quizOption = await prisma.quizOption.upsert({
     *   create: {
     *     // ... data to create a QuizOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizOption we want to update
     *   }
     * })
     */
    upsert<T extends QuizOptionUpsertArgs>(args: SelectSubset<T, QuizOptionUpsertArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionCountArgs} args - Arguments to filter QuizOptions to count.
     * @example
     * // Count the number of QuizOptions
     * const count = await prisma.quizOption.count({
     *   where: {
     *     // ... the filter for the QuizOptions we want to count
     *   }
     * })
    **/
    count<T extends QuizOptionCountArgs>(
      args?: Subset<T, QuizOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizOptionAggregateArgs>(args: Subset<T, QuizOptionAggregateArgs>): Prisma.PrismaPromise<GetQuizOptionAggregateType<T>>

    /**
     * Group by QuizOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionGroupByArgs} args - Group by arguments.
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
      T extends QuizOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizOptionGroupByArgs['orderBy'] }
        : { orderBy?: QuizOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizOption model
   */
  readonly fields: QuizOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuizQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestionDefaultArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuizOption model
   */
  interface QuizOptionFieldRefs {
    readonly id: FieldRef<"QuizOption", 'Int'>
    readonly quizQuestionId: FieldRef<"QuizOption", 'Int'>
    readonly nom: FieldRef<"QuizOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizOption findUnique
   */
  export type QuizOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOption to fetch.
     */
    where: QuizOptionWhereUniqueInput
  }

  /**
   * QuizOption findUniqueOrThrow
   */
  export type QuizOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOption to fetch.
     */
    where: QuizOptionWhereUniqueInput
  }

  /**
   * QuizOption findFirst
   */
  export type QuizOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOption to fetch.
     */
    where?: QuizOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizOptions to fetch.
     */
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizOptions.
     */
    cursor?: QuizOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizOptions.
     */
    distinct?: QuizOptionScalarFieldEnum | QuizOptionScalarFieldEnum[]
  }

  /**
   * QuizOption findFirstOrThrow
   */
  export type QuizOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOption to fetch.
     */
    where?: QuizOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizOptions to fetch.
     */
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizOptions.
     */
    cursor?: QuizOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizOptions.
     */
    distinct?: QuizOptionScalarFieldEnum | QuizOptionScalarFieldEnum[]
  }

  /**
   * QuizOption findMany
   */
  export type QuizOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOptions to fetch.
     */
    where?: QuizOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizOptions to fetch.
     */
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizOptions.
     */
    cursor?: QuizOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizOptions.
     */
    skip?: number
    distinct?: QuizOptionScalarFieldEnum | QuizOptionScalarFieldEnum[]
  }

  /**
   * QuizOption create
   */
  export type QuizOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizOption.
     */
    data: XOR<QuizOptionCreateInput, QuizOptionUncheckedCreateInput>
  }

  /**
   * QuizOption createMany
   */
  export type QuizOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizOptions.
     */
    data: QuizOptionCreateManyInput | QuizOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizOption update
   */
  export type QuizOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizOption.
     */
    data: XOR<QuizOptionUpdateInput, QuizOptionUncheckedUpdateInput>
    /**
     * Choose, which QuizOption to update.
     */
    where: QuizOptionWhereUniqueInput
  }

  /**
   * QuizOption updateMany
   */
  export type QuizOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizOptions.
     */
    data: XOR<QuizOptionUpdateManyMutationInput, QuizOptionUncheckedUpdateManyInput>
    /**
     * Filter which QuizOptions to update
     */
    where?: QuizOptionWhereInput
    /**
     * Limit how many QuizOptions to update.
     */
    limit?: number
  }

  /**
   * QuizOption upsert
   */
  export type QuizOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizOption to update in case it exists.
     */
    where: QuizOptionWhereUniqueInput
    /**
     * In case the QuizOption found by the `where` argument doesn't exist, create a new QuizOption with this data.
     */
    create: XOR<QuizOptionCreateInput, QuizOptionUncheckedCreateInput>
    /**
     * In case the QuizOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizOptionUpdateInput, QuizOptionUncheckedUpdateInput>
  }

  /**
   * QuizOption delete
   */
  export type QuizOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter which QuizOption to delete.
     */
    where: QuizOptionWhereUniqueInput
  }

  /**
   * QuizOption deleteMany
   */
  export type QuizOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizOptions to delete
     */
    where?: QuizOptionWhereInput
    /**
     * Limit how many QuizOptions to delete.
     */
    limit?: number
  }

  /**
   * QuizOption without action
   */
  export type QuizOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
  }


  /**
   * Model QuizResult
   */

  export type AggregateQuizResult = {
    _count: QuizResultCountAggregateOutputType | null
    _avg: QuizResultAvgAggregateOutputType | null
    _sum: QuizResultSumAggregateOutputType | null
    _min: QuizResultMinAggregateOutputType | null
    _max: QuizResultMaxAggregateOutputType | null
  }

  export type QuizResultAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    quizId: number | null
    score: number | null
  }

  export type QuizResultSumAggregateOutputType = {
    id: number | null
    userId: number | null
    quizId: number | null
    score: number | null
  }

  export type QuizResultMinAggregateOutputType = {
    id: number | null
    userId: number | null
    quizId: number | null
    score: number | null
    attemptAt: Date | null
  }

  export type QuizResultMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    quizId: number | null
    score: number | null
    attemptAt: Date | null
  }

  export type QuizResultCountAggregateOutputType = {
    id: number
    userId: number
    quizId: number
    score: number
    attemptAt: number
    _all: number
  }


  export type QuizResultAvgAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
  }

  export type QuizResultSumAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
  }

  export type QuizResultMinAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    attemptAt?: true
  }

  export type QuizResultMaxAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    attemptAt?: true
  }

  export type QuizResultCountAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    attemptAt?: true
    _all?: true
  }

  export type QuizResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizResult to aggregate.
     */
    where?: QuizResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResults to fetch.
     */
    orderBy?: QuizResultOrderByWithRelationInput | QuizResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizResults
    **/
    _count?: true | QuizResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizResultMaxAggregateInputType
  }

  export type GetQuizResultAggregateType<T extends QuizResultAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizResult[P]>
      : GetScalarType<T[P], AggregateQuizResult[P]>
  }




  export type QuizResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizResultWhereInput
    orderBy?: QuizResultOrderByWithAggregationInput | QuizResultOrderByWithAggregationInput[]
    by: QuizResultScalarFieldEnum[] | QuizResultScalarFieldEnum
    having?: QuizResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizResultCountAggregateInputType | true
    _avg?: QuizResultAvgAggregateInputType
    _sum?: QuizResultSumAggregateInputType
    _min?: QuizResultMinAggregateInputType
    _max?: QuizResultMaxAggregateInputType
  }

  export type QuizResultGroupByOutputType = {
    id: number
    userId: number
    quizId: number
    score: number
    attemptAt: Date
    _count: QuizResultCountAggregateOutputType | null
    _avg: QuizResultAvgAggregateOutputType | null
    _sum: QuizResultSumAggregateOutputType | null
    _min: QuizResultMinAggregateOutputType | null
    _max: QuizResultMaxAggregateOutputType | null
  }

  type GetQuizResultGroupByPayload<T extends QuizResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizResultGroupByOutputType[P]>
            : GetScalarType<T[P], QuizResultGroupByOutputType[P]>
        }
      >
    >


  export type QuizResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    score?: boolean
    attemptAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizResult"]>



  export type QuizResultSelectScalar = {
    id?: boolean
    userId?: boolean
    quizId?: boolean
    score?: boolean
    attemptAt?: boolean
  }

  export type QuizResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "quizId" | "score" | "attemptAt", ExtArgs["result"]["quizResult"]>
  export type QuizResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuizResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizResult"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      quizId: number
      score: number
      attemptAt: Date
    }, ExtArgs["result"]["quizResult"]>
    composites: {}
  }

  type QuizResultGetPayload<S extends boolean | null | undefined | QuizResultDefaultArgs> = $Result.GetResult<Prisma.$QuizResultPayload, S>

  type QuizResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizResultCountAggregateInputType | true
    }

  export interface QuizResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizResult'], meta: { name: 'QuizResult' } }
    /**
     * Find zero or one QuizResult that matches the filter.
     * @param {QuizResultFindUniqueArgs} args - Arguments to find a QuizResult
     * @example
     * // Get one QuizResult
     * const quizResult = await prisma.quizResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizResultFindUniqueArgs>(args: SelectSubset<T, QuizResultFindUniqueArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizResultFindUniqueOrThrowArgs} args - Arguments to find a QuizResult
     * @example
     * // Get one QuizResult
     * const quizResult = await prisma.quizResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizResultFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultFindFirstArgs} args - Arguments to find a QuizResult
     * @example
     * // Get one QuizResult
     * const quizResult = await prisma.quizResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizResultFindFirstArgs>(args?: SelectSubset<T, QuizResultFindFirstArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultFindFirstOrThrowArgs} args - Arguments to find a QuizResult
     * @example
     * // Get one QuizResult
     * const quizResult = await prisma.quizResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizResultFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizResults
     * const quizResults = await prisma.quizResult.findMany()
     * 
     * // Get first 10 QuizResults
     * const quizResults = await prisma.quizResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizResultWithIdOnly = await prisma.quizResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizResultFindManyArgs>(args?: SelectSubset<T, QuizResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizResult.
     * @param {QuizResultCreateArgs} args - Arguments to create a QuizResult.
     * @example
     * // Create one QuizResult
     * const QuizResult = await prisma.quizResult.create({
     *   data: {
     *     // ... data to create a QuizResult
     *   }
     * })
     * 
     */
    create<T extends QuizResultCreateArgs>(args: SelectSubset<T, QuizResultCreateArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizResults.
     * @param {QuizResultCreateManyArgs} args - Arguments to create many QuizResults.
     * @example
     * // Create many QuizResults
     * const quizResult = await prisma.quizResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizResultCreateManyArgs>(args?: SelectSubset<T, QuizResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuizResult.
     * @param {QuizResultDeleteArgs} args - Arguments to delete one QuizResult.
     * @example
     * // Delete one QuizResult
     * const QuizResult = await prisma.quizResult.delete({
     *   where: {
     *     // ... filter to delete one QuizResult
     *   }
     * })
     * 
     */
    delete<T extends QuizResultDeleteArgs>(args: SelectSubset<T, QuizResultDeleteArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizResult.
     * @param {QuizResultUpdateArgs} args - Arguments to update one QuizResult.
     * @example
     * // Update one QuizResult
     * const quizResult = await prisma.quizResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizResultUpdateArgs>(args: SelectSubset<T, QuizResultUpdateArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizResults.
     * @param {QuizResultDeleteManyArgs} args - Arguments to filter QuizResults to delete.
     * @example
     * // Delete a few QuizResults
     * const { count } = await prisma.quizResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizResultDeleteManyArgs>(args?: SelectSubset<T, QuizResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizResults
     * const quizResult = await prisma.quizResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizResultUpdateManyArgs>(args: SelectSubset<T, QuizResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuizResult.
     * @param {QuizResultUpsertArgs} args - Arguments to update or create a QuizResult.
     * @example
     * // Update or create a QuizResult
     * const quizResult = await prisma.quizResult.upsert({
     *   create: {
     *     // ... data to create a QuizResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizResult we want to update
     *   }
     * })
     */
    upsert<T extends QuizResultUpsertArgs>(args: SelectSubset<T, QuizResultUpsertArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultCountArgs} args - Arguments to filter QuizResults to count.
     * @example
     * // Count the number of QuizResults
     * const count = await prisma.quizResult.count({
     *   where: {
     *     // ... the filter for the QuizResults we want to count
     *   }
     * })
    **/
    count<T extends QuizResultCountArgs>(
      args?: Subset<T, QuizResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizResultAggregateArgs>(args: Subset<T, QuizResultAggregateArgs>): Prisma.PrismaPromise<GetQuizResultAggregateType<T>>

    /**
     * Group by QuizResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultGroupByArgs} args - Group by arguments.
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
      T extends QuizResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizResultGroupByArgs['orderBy'] }
        : { orderBy?: QuizResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizResult model
   */
  readonly fields: QuizResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuizResult model
   */
  interface QuizResultFieldRefs {
    readonly id: FieldRef<"QuizResult", 'Int'>
    readonly userId: FieldRef<"QuizResult", 'Int'>
    readonly quizId: FieldRef<"QuizResult", 'Int'>
    readonly score: FieldRef<"QuizResult", 'Int'>
    readonly attemptAt: FieldRef<"QuizResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizResult findUnique
   */
  export type QuizResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizResult to fetch.
     */
    where: QuizResultWhereUniqueInput
  }

  /**
   * QuizResult findUniqueOrThrow
   */
  export type QuizResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizResult to fetch.
     */
    where: QuizResultWhereUniqueInput
  }

  /**
   * QuizResult findFirst
   */
  export type QuizResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizResult to fetch.
     */
    where?: QuizResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResults to fetch.
     */
    orderBy?: QuizResultOrderByWithRelationInput | QuizResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizResults.
     */
    cursor?: QuizResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizResults.
     */
    distinct?: QuizResultScalarFieldEnum | QuizResultScalarFieldEnum[]
  }

  /**
   * QuizResult findFirstOrThrow
   */
  export type QuizResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizResult to fetch.
     */
    where?: QuizResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResults to fetch.
     */
    orderBy?: QuizResultOrderByWithRelationInput | QuizResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizResults.
     */
    cursor?: QuizResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizResults.
     */
    distinct?: QuizResultScalarFieldEnum | QuizResultScalarFieldEnum[]
  }

  /**
   * QuizResult findMany
   */
  export type QuizResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizResults to fetch.
     */
    where?: QuizResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResults to fetch.
     */
    orderBy?: QuizResultOrderByWithRelationInput | QuizResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizResults.
     */
    cursor?: QuizResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResults.
     */
    skip?: number
    distinct?: QuizResultScalarFieldEnum | QuizResultScalarFieldEnum[]
  }

  /**
   * QuizResult create
   */
  export type QuizResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizResult.
     */
    data: XOR<QuizResultCreateInput, QuizResultUncheckedCreateInput>
  }

  /**
   * QuizResult createMany
   */
  export type QuizResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizResults.
     */
    data: QuizResultCreateManyInput | QuizResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizResult update
   */
  export type QuizResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizResult.
     */
    data: XOR<QuizResultUpdateInput, QuizResultUncheckedUpdateInput>
    /**
     * Choose, which QuizResult to update.
     */
    where: QuizResultWhereUniqueInput
  }

  /**
   * QuizResult updateMany
   */
  export type QuizResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizResults.
     */
    data: XOR<QuizResultUpdateManyMutationInput, QuizResultUncheckedUpdateManyInput>
    /**
     * Filter which QuizResults to update
     */
    where?: QuizResultWhereInput
    /**
     * Limit how many QuizResults to update.
     */
    limit?: number
  }

  /**
   * QuizResult upsert
   */
  export type QuizResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizResult to update in case it exists.
     */
    where: QuizResultWhereUniqueInput
    /**
     * In case the QuizResult found by the `where` argument doesn't exist, create a new QuizResult with this data.
     */
    create: XOR<QuizResultCreateInput, QuizResultUncheckedCreateInput>
    /**
     * In case the QuizResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizResultUpdateInput, QuizResultUncheckedUpdateInput>
  }

  /**
   * QuizResult delete
   */
  export type QuizResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * Filter which QuizResult to delete.
     */
    where: QuizResultWhereUniqueInput
  }

  /**
   * QuizResult deleteMany
   */
  export type QuizResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizResults to delete
     */
    where?: QuizResultWhereInput
    /**
     * Limit how many QuizResults to delete.
     */
    limit?: number
  }

  /**
   * QuizResult without action
   */
  export type QuizResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
  }


  /**
   * Model VisioSession
   */

  export type AggregateVisioSession = {
    _count: VisioSessionCountAggregateOutputType | null
    _avg: VisioSessionAvgAggregateOutputType | null
    _sum: VisioSessionSumAggregateOutputType | null
    _min: VisioSessionMinAggregateOutputType | null
    _max: VisioSessionMaxAggregateOutputType | null
  }

  export type VisioSessionAvgAggregateOutputType = {
    id: number | null
    coursId: number | null
    formateurId: number | null
  }

  export type VisioSessionSumAggregateOutputType = {
    id: number | null
    coursId: number | null
    formateurId: number | null
  }

  export type VisioSessionMinAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    coursId: number | null
    formateurId: number | null
    lienVisio: string | null
    dateDebut: Date | null
    dateFin: Date | null
    estEnregistre: boolean | null
    lienEnregistrement: string | null
  }

  export type VisioSessionMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    coursId: number | null
    formateurId: number | null
    lienVisio: string | null
    dateDebut: Date | null
    dateFin: Date | null
    estEnregistre: boolean | null
    lienEnregistrement: string | null
  }

  export type VisioSessionCountAggregateOutputType = {
    id: number
    titre: number
    description: number
    coursId: number
    formateurId: number
    lienVisio: number
    dateDebut: number
    dateFin: number
    estEnregistre: number
    lienEnregistrement: number
    _all: number
  }


  export type VisioSessionAvgAggregateInputType = {
    id?: true
    coursId?: true
    formateurId?: true
  }

  export type VisioSessionSumAggregateInputType = {
    id?: true
    coursId?: true
    formateurId?: true
  }

  export type VisioSessionMinAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    coursId?: true
    formateurId?: true
    lienVisio?: true
    dateDebut?: true
    dateFin?: true
    estEnregistre?: true
    lienEnregistrement?: true
  }

  export type VisioSessionMaxAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    coursId?: true
    formateurId?: true
    lienVisio?: true
    dateDebut?: true
    dateFin?: true
    estEnregistre?: true
    lienEnregistrement?: true
  }

  export type VisioSessionCountAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    coursId?: true
    formateurId?: true
    lienVisio?: true
    dateDebut?: true
    dateFin?: true
    estEnregistre?: true
    lienEnregistrement?: true
    _all?: true
  }

  export type VisioSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisioSession to aggregate.
     */
    where?: VisioSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisioSessions to fetch.
     */
    orderBy?: VisioSessionOrderByWithRelationInput | VisioSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisioSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisioSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisioSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisioSessions
    **/
    _count?: true | VisioSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisioSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisioSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisioSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisioSessionMaxAggregateInputType
  }

  export type GetVisioSessionAggregateType<T extends VisioSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateVisioSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisioSession[P]>
      : GetScalarType<T[P], AggregateVisioSession[P]>
  }




  export type VisioSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisioSessionWhereInput
    orderBy?: VisioSessionOrderByWithAggregationInput | VisioSessionOrderByWithAggregationInput[]
    by: VisioSessionScalarFieldEnum[] | VisioSessionScalarFieldEnum
    having?: VisioSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisioSessionCountAggregateInputType | true
    _avg?: VisioSessionAvgAggregateInputType
    _sum?: VisioSessionSumAggregateInputType
    _min?: VisioSessionMinAggregateInputType
    _max?: VisioSessionMaxAggregateInputType
  }

  export type VisioSessionGroupByOutputType = {
    id: number
    titre: string
    description: string | null
    coursId: number
    formateurId: number
    lienVisio: string | null
    dateDebut: Date
    dateFin: Date
    estEnregistre: boolean
    lienEnregistrement: string | null
    _count: VisioSessionCountAggregateOutputType | null
    _avg: VisioSessionAvgAggregateOutputType | null
    _sum: VisioSessionSumAggregateOutputType | null
    _min: VisioSessionMinAggregateOutputType | null
    _max: VisioSessionMaxAggregateOutputType | null
  }

  type GetVisioSessionGroupByPayload<T extends VisioSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisioSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisioSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisioSessionGroupByOutputType[P]>
            : GetScalarType<T[P], VisioSessionGroupByOutputType[P]>
        }
      >
    >


  export type VisioSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    coursId?: boolean
    formateurId?: boolean
    lienVisio?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    estEnregistre?: boolean
    lienEnregistrement?: boolean
    cours?: boolean | CoursDefaultArgs<ExtArgs>
    formateur?: boolean | UserDefaultArgs<ExtArgs>
    participations?: boolean | VisioSession$participationsArgs<ExtArgs>
    _count?: boolean | VisioSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visioSession"]>



  export type VisioSessionSelectScalar = {
    id?: boolean
    titre?: boolean
    description?: boolean
    coursId?: boolean
    formateurId?: boolean
    lienVisio?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    estEnregistre?: boolean
    lienEnregistrement?: boolean
  }

  export type VisioSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "description" | "coursId" | "formateurId" | "lienVisio" | "dateDebut" | "dateFin" | "estEnregistre" | "lienEnregistrement", ExtArgs["result"]["visioSession"]>
  export type VisioSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | CoursDefaultArgs<ExtArgs>
    formateur?: boolean | UserDefaultArgs<ExtArgs>
    participations?: boolean | VisioSession$participationsArgs<ExtArgs>
    _count?: boolean | VisioSessionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VisioSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisioSession"
    objects: {
      cours: Prisma.$CoursPayload<ExtArgs>
      formateur: Prisma.$UserPayload<ExtArgs>
      participations: Prisma.$ParticipationVisioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      description: string | null
      coursId: number
      formateurId: number
      lienVisio: string | null
      dateDebut: Date
      dateFin: Date
      estEnregistre: boolean
      lienEnregistrement: string | null
    }, ExtArgs["result"]["visioSession"]>
    composites: {}
  }

  type VisioSessionGetPayload<S extends boolean | null | undefined | VisioSessionDefaultArgs> = $Result.GetResult<Prisma.$VisioSessionPayload, S>

  type VisioSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisioSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisioSessionCountAggregateInputType | true
    }

  export interface VisioSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisioSession'], meta: { name: 'VisioSession' } }
    /**
     * Find zero or one VisioSession that matches the filter.
     * @param {VisioSessionFindUniqueArgs} args - Arguments to find a VisioSession
     * @example
     * // Get one VisioSession
     * const visioSession = await prisma.visioSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisioSessionFindUniqueArgs>(args: SelectSubset<T, VisioSessionFindUniqueArgs<ExtArgs>>): Prisma__VisioSessionClient<$Result.GetResult<Prisma.$VisioSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisioSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisioSessionFindUniqueOrThrowArgs} args - Arguments to find a VisioSession
     * @example
     * // Get one VisioSession
     * const visioSession = await prisma.visioSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisioSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, VisioSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisioSessionClient<$Result.GetResult<Prisma.$VisioSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisioSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisioSessionFindFirstArgs} args - Arguments to find a VisioSession
     * @example
     * // Get one VisioSession
     * const visioSession = await prisma.visioSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisioSessionFindFirstArgs>(args?: SelectSubset<T, VisioSessionFindFirstArgs<ExtArgs>>): Prisma__VisioSessionClient<$Result.GetResult<Prisma.$VisioSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisioSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisioSessionFindFirstOrThrowArgs} args - Arguments to find a VisioSession
     * @example
     * // Get one VisioSession
     * const visioSession = await prisma.visioSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisioSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, VisioSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisioSessionClient<$Result.GetResult<Prisma.$VisioSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisioSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisioSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisioSessions
     * const visioSessions = await prisma.visioSession.findMany()
     * 
     * // Get first 10 VisioSessions
     * const visioSessions = await prisma.visioSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visioSessionWithIdOnly = await prisma.visioSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisioSessionFindManyArgs>(args?: SelectSubset<T, VisioSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisioSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisioSession.
     * @param {VisioSessionCreateArgs} args - Arguments to create a VisioSession.
     * @example
     * // Create one VisioSession
     * const VisioSession = await prisma.visioSession.create({
     *   data: {
     *     // ... data to create a VisioSession
     *   }
     * })
     * 
     */
    create<T extends VisioSessionCreateArgs>(args: SelectSubset<T, VisioSessionCreateArgs<ExtArgs>>): Prisma__VisioSessionClient<$Result.GetResult<Prisma.$VisioSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisioSessions.
     * @param {VisioSessionCreateManyArgs} args - Arguments to create many VisioSessions.
     * @example
     * // Create many VisioSessions
     * const visioSession = await prisma.visioSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisioSessionCreateManyArgs>(args?: SelectSubset<T, VisioSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VisioSession.
     * @param {VisioSessionDeleteArgs} args - Arguments to delete one VisioSession.
     * @example
     * // Delete one VisioSession
     * const VisioSession = await prisma.visioSession.delete({
     *   where: {
     *     // ... filter to delete one VisioSession
     *   }
     * })
     * 
     */
    delete<T extends VisioSessionDeleteArgs>(args: SelectSubset<T, VisioSessionDeleteArgs<ExtArgs>>): Prisma__VisioSessionClient<$Result.GetResult<Prisma.$VisioSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisioSession.
     * @param {VisioSessionUpdateArgs} args - Arguments to update one VisioSession.
     * @example
     * // Update one VisioSession
     * const visioSession = await prisma.visioSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisioSessionUpdateArgs>(args: SelectSubset<T, VisioSessionUpdateArgs<ExtArgs>>): Prisma__VisioSessionClient<$Result.GetResult<Prisma.$VisioSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisioSessions.
     * @param {VisioSessionDeleteManyArgs} args - Arguments to filter VisioSessions to delete.
     * @example
     * // Delete a few VisioSessions
     * const { count } = await prisma.visioSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisioSessionDeleteManyArgs>(args?: SelectSubset<T, VisioSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisioSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisioSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisioSessions
     * const visioSession = await prisma.visioSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisioSessionUpdateManyArgs>(args: SelectSubset<T, VisioSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VisioSession.
     * @param {VisioSessionUpsertArgs} args - Arguments to update or create a VisioSession.
     * @example
     * // Update or create a VisioSession
     * const visioSession = await prisma.visioSession.upsert({
     *   create: {
     *     // ... data to create a VisioSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisioSession we want to update
     *   }
     * })
     */
    upsert<T extends VisioSessionUpsertArgs>(args: SelectSubset<T, VisioSessionUpsertArgs<ExtArgs>>): Prisma__VisioSessionClient<$Result.GetResult<Prisma.$VisioSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisioSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisioSessionCountArgs} args - Arguments to filter VisioSessions to count.
     * @example
     * // Count the number of VisioSessions
     * const count = await prisma.visioSession.count({
     *   where: {
     *     // ... the filter for the VisioSessions we want to count
     *   }
     * })
    **/
    count<T extends VisioSessionCountArgs>(
      args?: Subset<T, VisioSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisioSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisioSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisioSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisioSessionAggregateArgs>(args: Subset<T, VisioSessionAggregateArgs>): Prisma.PrismaPromise<GetVisioSessionAggregateType<T>>

    /**
     * Group by VisioSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisioSessionGroupByArgs} args - Group by arguments.
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
      T extends VisioSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisioSessionGroupByArgs['orderBy'] }
        : { orderBy?: VisioSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisioSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisioSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisioSession model
   */
  readonly fields: VisioSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisioSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisioSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cours<T extends CoursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoursDefaultArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formateur<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participations<T extends VisioSession$participationsArgs<ExtArgs> = {}>(args?: Subset<T, VisioSession$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationVisioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VisioSession model
   */
  interface VisioSessionFieldRefs {
    readonly id: FieldRef<"VisioSession", 'Int'>
    readonly titre: FieldRef<"VisioSession", 'String'>
    readonly description: FieldRef<"VisioSession", 'String'>
    readonly coursId: FieldRef<"VisioSession", 'Int'>
    readonly formateurId: FieldRef<"VisioSession", 'Int'>
    readonly lienVisio: FieldRef<"VisioSession", 'String'>
    readonly dateDebut: FieldRef<"VisioSession", 'DateTime'>
    readonly dateFin: FieldRef<"VisioSession", 'DateTime'>
    readonly estEnregistre: FieldRef<"VisioSession", 'Boolean'>
    readonly lienEnregistrement: FieldRef<"VisioSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VisioSession findUnique
   */
  export type VisioSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisioSession
     */
    select?: VisioSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisioSession
     */
    omit?: VisioSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisioSessionInclude<ExtArgs> | null
    /**
     * Filter, which VisioSession to fetch.
     */
    where: VisioSessionWhereUniqueInput
  }

  /**
   * VisioSession findUniqueOrThrow
   */
  export type VisioSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisioSession
     */
    select?: VisioSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisioSession
     */
    omit?: VisioSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisioSessionInclude<ExtArgs> | null
    /**
     * Filter, which VisioSession to fetch.
     */
    where: VisioSessionWhereUniqueInput
  }

  /**
   * VisioSession findFirst
   */
  export type VisioSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisioSession
     */
    select?: VisioSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisioSession
     */
    omit?: VisioSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisioSessionInclude<ExtArgs> | null
    /**
     * Filter, which VisioSession to fetch.
     */
    where?: VisioSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisioSessions to fetch.
     */
    orderBy?: VisioSessionOrderByWithRelationInput | VisioSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisioSessions.
     */
    cursor?: VisioSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisioSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisioSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisioSessions.
     */
    distinct?: VisioSessionScalarFieldEnum | VisioSessionScalarFieldEnum[]
  }

  /**
   * VisioSession findFirstOrThrow
   */
  export type VisioSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisioSession
     */
    select?: VisioSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisioSession
     */
    omit?: VisioSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisioSessionInclude<ExtArgs> | null
    /**
     * Filter, which VisioSession to fetch.
     */
    where?: VisioSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisioSessions to fetch.
     */
    orderBy?: VisioSessionOrderByWithRelationInput | VisioSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisioSessions.
     */
    cursor?: VisioSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisioSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisioSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisioSessions.
     */
    distinct?: VisioSessionScalarFieldEnum | VisioSessionScalarFieldEnum[]
  }

  /**
   * VisioSession findMany
   */
  export type VisioSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisioSession
     */
    select?: VisioSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisioSession
     */
    omit?: VisioSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisioSessionInclude<ExtArgs> | null
    /**
     * Filter, which VisioSessions to fetch.
     */
    where?: VisioSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisioSessions to fetch.
     */
    orderBy?: VisioSessionOrderByWithRelationInput | VisioSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisioSessions.
     */
    cursor?: VisioSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisioSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisioSessions.
     */
    skip?: number
    distinct?: VisioSessionScalarFieldEnum | VisioSessionScalarFieldEnum[]
  }

  /**
   * VisioSession create
   */
  export type VisioSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisioSession
     */
    select?: VisioSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisioSession
     */
    omit?: VisioSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisioSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a VisioSession.
     */
    data: XOR<VisioSessionCreateInput, VisioSessionUncheckedCreateInput>
  }

  /**
   * VisioSession createMany
   */
  export type VisioSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisioSessions.
     */
    data: VisioSessionCreateManyInput | VisioSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisioSession update
   */
  export type VisioSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisioSession
     */
    select?: VisioSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisioSession
     */
    omit?: VisioSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisioSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a VisioSession.
     */
    data: XOR<VisioSessionUpdateInput, VisioSessionUncheckedUpdateInput>
    /**
     * Choose, which VisioSession to update.
     */
    where: VisioSessionWhereUniqueInput
  }

  /**
   * VisioSession updateMany
   */
  export type VisioSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisioSessions.
     */
    data: XOR<VisioSessionUpdateManyMutationInput, VisioSessionUncheckedUpdateManyInput>
    /**
     * Filter which VisioSessions to update
     */
    where?: VisioSessionWhereInput
    /**
     * Limit how many VisioSessions to update.
     */
    limit?: number
  }

  /**
   * VisioSession upsert
   */
  export type VisioSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisioSession
     */
    select?: VisioSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisioSession
     */
    omit?: VisioSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisioSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the VisioSession to update in case it exists.
     */
    where: VisioSessionWhereUniqueInput
    /**
     * In case the VisioSession found by the `where` argument doesn't exist, create a new VisioSession with this data.
     */
    create: XOR<VisioSessionCreateInput, VisioSessionUncheckedCreateInput>
    /**
     * In case the VisioSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisioSessionUpdateInput, VisioSessionUncheckedUpdateInput>
  }

  /**
   * VisioSession delete
   */
  export type VisioSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisioSession
     */
    select?: VisioSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisioSession
     */
    omit?: VisioSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisioSessionInclude<ExtArgs> | null
    /**
     * Filter which VisioSession to delete.
     */
    where: VisioSessionWhereUniqueInput
  }

  /**
   * VisioSession deleteMany
   */
  export type VisioSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisioSessions to delete
     */
    where?: VisioSessionWhereInput
    /**
     * Limit how many VisioSessions to delete.
     */
    limit?: number
  }

  /**
   * VisioSession.participations
   */
  export type VisioSession$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationVisio
     */
    select?: ParticipationVisioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationVisio
     */
    omit?: ParticipationVisioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationVisioInclude<ExtArgs> | null
    where?: ParticipationVisioWhereInput
    orderBy?: ParticipationVisioOrderByWithRelationInput | ParticipationVisioOrderByWithRelationInput[]
    cursor?: ParticipationVisioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipationVisioScalarFieldEnum | ParticipationVisioScalarFieldEnum[]
  }

  /**
   * VisioSession without action
   */
  export type VisioSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisioSession
     */
    select?: VisioSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisioSession
     */
    omit?: VisioSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisioSessionInclude<ExtArgs> | null
  }


  /**
   * Model ParticipationVisio
   */

  export type AggregateParticipationVisio = {
    _count: ParticipationVisioCountAggregateOutputType | null
    _avg: ParticipationVisioAvgAggregateOutputType | null
    _sum: ParticipationVisioSumAggregateOutputType | null
    _min: ParticipationVisioMinAggregateOutputType | null
    _max: ParticipationVisioMaxAggregateOutputType | null
  }

  export type ParticipationVisioAvgAggregateOutputType = {
    id: number | null
    visioId: number | null
    utilisateurId: number | null
    tempsDeConnexion: number | null
  }

  export type ParticipationVisioSumAggregateOutputType = {
    id: number | null
    visioId: number | null
    utilisateurId: number | null
    tempsDeConnexion: number | null
  }

  export type ParticipationVisioMinAggregateOutputType = {
    id: number | null
    visioId: number | null
    utilisateurId: number | null
    estPresent: boolean | null
    tempsDeConnexion: number | null
    feedback: string | null
  }

  export type ParticipationVisioMaxAggregateOutputType = {
    id: number | null
    visioId: number | null
    utilisateurId: number | null
    estPresent: boolean | null
    tempsDeConnexion: number | null
    feedback: string | null
  }

  export type ParticipationVisioCountAggregateOutputType = {
    id: number
    visioId: number
    utilisateurId: number
    estPresent: number
    tempsDeConnexion: number
    feedback: number
    _all: number
  }


  export type ParticipationVisioAvgAggregateInputType = {
    id?: true
    visioId?: true
    utilisateurId?: true
    tempsDeConnexion?: true
  }

  export type ParticipationVisioSumAggregateInputType = {
    id?: true
    visioId?: true
    utilisateurId?: true
    tempsDeConnexion?: true
  }

  export type ParticipationVisioMinAggregateInputType = {
    id?: true
    visioId?: true
    utilisateurId?: true
    estPresent?: true
    tempsDeConnexion?: true
    feedback?: true
  }

  export type ParticipationVisioMaxAggregateInputType = {
    id?: true
    visioId?: true
    utilisateurId?: true
    estPresent?: true
    tempsDeConnexion?: true
    feedback?: true
  }

  export type ParticipationVisioCountAggregateInputType = {
    id?: true
    visioId?: true
    utilisateurId?: true
    estPresent?: true
    tempsDeConnexion?: true
    feedback?: true
    _all?: true
  }

  export type ParticipationVisioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipationVisio to aggregate.
     */
    where?: ParticipationVisioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipationVisios to fetch.
     */
    orderBy?: ParticipationVisioOrderByWithRelationInput | ParticipationVisioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipationVisioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipationVisios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipationVisios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipationVisios
    **/
    _count?: true | ParticipationVisioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipationVisioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipationVisioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipationVisioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipationVisioMaxAggregateInputType
  }

  export type GetParticipationVisioAggregateType<T extends ParticipationVisioAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipationVisio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipationVisio[P]>
      : GetScalarType<T[P], AggregateParticipationVisio[P]>
  }




  export type ParticipationVisioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationVisioWhereInput
    orderBy?: ParticipationVisioOrderByWithAggregationInput | ParticipationVisioOrderByWithAggregationInput[]
    by: ParticipationVisioScalarFieldEnum[] | ParticipationVisioScalarFieldEnum
    having?: ParticipationVisioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipationVisioCountAggregateInputType | true
    _avg?: ParticipationVisioAvgAggregateInputType
    _sum?: ParticipationVisioSumAggregateInputType
    _min?: ParticipationVisioMinAggregateInputType
    _max?: ParticipationVisioMaxAggregateInputType
  }

  export type ParticipationVisioGroupByOutputType = {
    id: number
    visioId: number
    utilisateurId: number
    estPresent: boolean
    tempsDeConnexion: number | null
    feedback: string | null
    _count: ParticipationVisioCountAggregateOutputType | null
    _avg: ParticipationVisioAvgAggregateOutputType | null
    _sum: ParticipationVisioSumAggregateOutputType | null
    _min: ParticipationVisioMinAggregateOutputType | null
    _max: ParticipationVisioMaxAggregateOutputType | null
  }

  type GetParticipationVisioGroupByPayload<T extends ParticipationVisioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipationVisioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipationVisioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipationVisioGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipationVisioGroupByOutputType[P]>
        }
      >
    >


  export type ParticipationVisioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visioId?: boolean
    utilisateurId?: boolean
    estPresent?: boolean
    tempsDeConnexion?: boolean
    feedback?: boolean
    visio?: boolean | VisioSessionDefaultArgs<ExtArgs>
    utilisateur?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participationVisio"]>



  export type ParticipationVisioSelectScalar = {
    id?: boolean
    visioId?: boolean
    utilisateurId?: boolean
    estPresent?: boolean
    tempsDeConnexion?: boolean
    feedback?: boolean
  }

  export type ParticipationVisioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visioId" | "utilisateurId" | "estPresent" | "tempsDeConnexion" | "feedback", ExtArgs["result"]["participationVisio"]>
  export type ParticipationVisioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visio?: boolean | VisioSessionDefaultArgs<ExtArgs>
    utilisateur?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParticipationVisioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipationVisio"
    objects: {
      visio: Prisma.$VisioSessionPayload<ExtArgs>
      utilisateur: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      visioId: number
      utilisateurId: number
      estPresent: boolean
      tempsDeConnexion: number | null
      feedback: string | null
    }, ExtArgs["result"]["participationVisio"]>
    composites: {}
  }

  type ParticipationVisioGetPayload<S extends boolean | null | undefined | ParticipationVisioDefaultArgs> = $Result.GetResult<Prisma.$ParticipationVisioPayload, S>

  type ParticipationVisioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipationVisioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipationVisioCountAggregateInputType | true
    }

  export interface ParticipationVisioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipationVisio'], meta: { name: 'ParticipationVisio' } }
    /**
     * Find zero or one ParticipationVisio that matches the filter.
     * @param {ParticipationVisioFindUniqueArgs} args - Arguments to find a ParticipationVisio
     * @example
     * // Get one ParticipationVisio
     * const participationVisio = await prisma.participationVisio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipationVisioFindUniqueArgs>(args: SelectSubset<T, ParticipationVisioFindUniqueArgs<ExtArgs>>): Prisma__ParticipationVisioClient<$Result.GetResult<Prisma.$ParticipationVisioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipationVisio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipationVisioFindUniqueOrThrowArgs} args - Arguments to find a ParticipationVisio
     * @example
     * // Get one ParticipationVisio
     * const participationVisio = await prisma.participationVisio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipationVisioFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipationVisioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipationVisioClient<$Result.GetResult<Prisma.$ParticipationVisioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipationVisio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationVisioFindFirstArgs} args - Arguments to find a ParticipationVisio
     * @example
     * // Get one ParticipationVisio
     * const participationVisio = await prisma.participationVisio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipationVisioFindFirstArgs>(args?: SelectSubset<T, ParticipationVisioFindFirstArgs<ExtArgs>>): Prisma__ParticipationVisioClient<$Result.GetResult<Prisma.$ParticipationVisioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipationVisio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationVisioFindFirstOrThrowArgs} args - Arguments to find a ParticipationVisio
     * @example
     * // Get one ParticipationVisio
     * const participationVisio = await prisma.participationVisio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipationVisioFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipationVisioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipationVisioClient<$Result.GetResult<Prisma.$ParticipationVisioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipationVisios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationVisioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipationVisios
     * const participationVisios = await prisma.participationVisio.findMany()
     * 
     * // Get first 10 ParticipationVisios
     * const participationVisios = await prisma.participationVisio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participationVisioWithIdOnly = await prisma.participationVisio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipationVisioFindManyArgs>(args?: SelectSubset<T, ParticipationVisioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationVisioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipationVisio.
     * @param {ParticipationVisioCreateArgs} args - Arguments to create a ParticipationVisio.
     * @example
     * // Create one ParticipationVisio
     * const ParticipationVisio = await prisma.participationVisio.create({
     *   data: {
     *     // ... data to create a ParticipationVisio
     *   }
     * })
     * 
     */
    create<T extends ParticipationVisioCreateArgs>(args: SelectSubset<T, ParticipationVisioCreateArgs<ExtArgs>>): Prisma__ParticipationVisioClient<$Result.GetResult<Prisma.$ParticipationVisioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipationVisios.
     * @param {ParticipationVisioCreateManyArgs} args - Arguments to create many ParticipationVisios.
     * @example
     * // Create many ParticipationVisios
     * const participationVisio = await prisma.participationVisio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipationVisioCreateManyArgs>(args?: SelectSubset<T, ParticipationVisioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ParticipationVisio.
     * @param {ParticipationVisioDeleteArgs} args - Arguments to delete one ParticipationVisio.
     * @example
     * // Delete one ParticipationVisio
     * const ParticipationVisio = await prisma.participationVisio.delete({
     *   where: {
     *     // ... filter to delete one ParticipationVisio
     *   }
     * })
     * 
     */
    delete<T extends ParticipationVisioDeleteArgs>(args: SelectSubset<T, ParticipationVisioDeleteArgs<ExtArgs>>): Prisma__ParticipationVisioClient<$Result.GetResult<Prisma.$ParticipationVisioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipationVisio.
     * @param {ParticipationVisioUpdateArgs} args - Arguments to update one ParticipationVisio.
     * @example
     * // Update one ParticipationVisio
     * const participationVisio = await prisma.participationVisio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipationVisioUpdateArgs>(args: SelectSubset<T, ParticipationVisioUpdateArgs<ExtArgs>>): Prisma__ParticipationVisioClient<$Result.GetResult<Prisma.$ParticipationVisioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipationVisios.
     * @param {ParticipationVisioDeleteManyArgs} args - Arguments to filter ParticipationVisios to delete.
     * @example
     * // Delete a few ParticipationVisios
     * const { count } = await prisma.participationVisio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipationVisioDeleteManyArgs>(args?: SelectSubset<T, ParticipationVisioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipationVisios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationVisioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipationVisios
     * const participationVisio = await prisma.participationVisio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipationVisioUpdateManyArgs>(args: SelectSubset<T, ParticipationVisioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ParticipationVisio.
     * @param {ParticipationVisioUpsertArgs} args - Arguments to update or create a ParticipationVisio.
     * @example
     * // Update or create a ParticipationVisio
     * const participationVisio = await prisma.participationVisio.upsert({
     *   create: {
     *     // ... data to create a ParticipationVisio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipationVisio we want to update
     *   }
     * })
     */
    upsert<T extends ParticipationVisioUpsertArgs>(args: SelectSubset<T, ParticipationVisioUpsertArgs<ExtArgs>>): Prisma__ParticipationVisioClient<$Result.GetResult<Prisma.$ParticipationVisioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipationVisios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationVisioCountArgs} args - Arguments to filter ParticipationVisios to count.
     * @example
     * // Count the number of ParticipationVisios
     * const count = await prisma.participationVisio.count({
     *   where: {
     *     // ... the filter for the ParticipationVisios we want to count
     *   }
     * })
    **/
    count<T extends ParticipationVisioCountArgs>(
      args?: Subset<T, ParticipationVisioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipationVisioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipationVisio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationVisioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipationVisioAggregateArgs>(args: Subset<T, ParticipationVisioAggregateArgs>): Prisma.PrismaPromise<GetParticipationVisioAggregateType<T>>

    /**
     * Group by ParticipationVisio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationVisioGroupByArgs} args - Group by arguments.
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
      T extends ParticipationVisioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipationVisioGroupByArgs['orderBy'] }
        : { orderBy?: ParticipationVisioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipationVisioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipationVisioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipationVisio model
   */
  readonly fields: ParticipationVisioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipationVisio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipationVisioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visio<T extends VisioSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisioSessionDefaultArgs<ExtArgs>>): Prisma__VisioSessionClient<$Result.GetResult<Prisma.$VisioSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ParticipationVisio model
   */
  interface ParticipationVisioFieldRefs {
    readonly id: FieldRef<"ParticipationVisio", 'Int'>
    readonly visioId: FieldRef<"ParticipationVisio", 'Int'>
    readonly utilisateurId: FieldRef<"ParticipationVisio", 'Int'>
    readonly estPresent: FieldRef<"ParticipationVisio", 'Boolean'>
    readonly tempsDeConnexion: FieldRef<"ParticipationVisio", 'Int'>
    readonly feedback: FieldRef<"ParticipationVisio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ParticipationVisio findUnique
   */
  export type ParticipationVisioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationVisio
     */
    select?: ParticipationVisioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationVisio
     */
    omit?: ParticipationVisioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationVisioInclude<ExtArgs> | null
    /**
     * Filter, which ParticipationVisio to fetch.
     */
    where: ParticipationVisioWhereUniqueInput
  }

  /**
   * ParticipationVisio findUniqueOrThrow
   */
  export type ParticipationVisioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationVisio
     */
    select?: ParticipationVisioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationVisio
     */
    omit?: ParticipationVisioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationVisioInclude<ExtArgs> | null
    /**
     * Filter, which ParticipationVisio to fetch.
     */
    where: ParticipationVisioWhereUniqueInput
  }

  /**
   * ParticipationVisio findFirst
   */
  export type ParticipationVisioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationVisio
     */
    select?: ParticipationVisioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationVisio
     */
    omit?: ParticipationVisioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationVisioInclude<ExtArgs> | null
    /**
     * Filter, which ParticipationVisio to fetch.
     */
    where?: ParticipationVisioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipationVisios to fetch.
     */
    orderBy?: ParticipationVisioOrderByWithRelationInput | ParticipationVisioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipationVisios.
     */
    cursor?: ParticipationVisioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipationVisios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipationVisios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipationVisios.
     */
    distinct?: ParticipationVisioScalarFieldEnum | ParticipationVisioScalarFieldEnum[]
  }

  /**
   * ParticipationVisio findFirstOrThrow
   */
  export type ParticipationVisioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationVisio
     */
    select?: ParticipationVisioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationVisio
     */
    omit?: ParticipationVisioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationVisioInclude<ExtArgs> | null
    /**
     * Filter, which ParticipationVisio to fetch.
     */
    where?: ParticipationVisioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipationVisios to fetch.
     */
    orderBy?: ParticipationVisioOrderByWithRelationInput | ParticipationVisioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipationVisios.
     */
    cursor?: ParticipationVisioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipationVisios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipationVisios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipationVisios.
     */
    distinct?: ParticipationVisioScalarFieldEnum | ParticipationVisioScalarFieldEnum[]
  }

  /**
   * ParticipationVisio findMany
   */
  export type ParticipationVisioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationVisio
     */
    select?: ParticipationVisioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationVisio
     */
    omit?: ParticipationVisioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationVisioInclude<ExtArgs> | null
    /**
     * Filter, which ParticipationVisios to fetch.
     */
    where?: ParticipationVisioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipationVisios to fetch.
     */
    orderBy?: ParticipationVisioOrderByWithRelationInput | ParticipationVisioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipationVisios.
     */
    cursor?: ParticipationVisioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipationVisios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipationVisios.
     */
    skip?: number
    distinct?: ParticipationVisioScalarFieldEnum | ParticipationVisioScalarFieldEnum[]
  }

  /**
   * ParticipationVisio create
   */
  export type ParticipationVisioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationVisio
     */
    select?: ParticipationVisioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationVisio
     */
    omit?: ParticipationVisioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationVisioInclude<ExtArgs> | null
    /**
     * The data needed to create a ParticipationVisio.
     */
    data: XOR<ParticipationVisioCreateInput, ParticipationVisioUncheckedCreateInput>
  }

  /**
   * ParticipationVisio createMany
   */
  export type ParticipationVisioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipationVisios.
     */
    data: ParticipationVisioCreateManyInput | ParticipationVisioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipationVisio update
   */
  export type ParticipationVisioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationVisio
     */
    select?: ParticipationVisioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationVisio
     */
    omit?: ParticipationVisioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationVisioInclude<ExtArgs> | null
    /**
     * The data needed to update a ParticipationVisio.
     */
    data: XOR<ParticipationVisioUpdateInput, ParticipationVisioUncheckedUpdateInput>
    /**
     * Choose, which ParticipationVisio to update.
     */
    where: ParticipationVisioWhereUniqueInput
  }

  /**
   * ParticipationVisio updateMany
   */
  export type ParticipationVisioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipationVisios.
     */
    data: XOR<ParticipationVisioUpdateManyMutationInput, ParticipationVisioUncheckedUpdateManyInput>
    /**
     * Filter which ParticipationVisios to update
     */
    where?: ParticipationVisioWhereInput
    /**
     * Limit how many ParticipationVisios to update.
     */
    limit?: number
  }

  /**
   * ParticipationVisio upsert
   */
  export type ParticipationVisioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationVisio
     */
    select?: ParticipationVisioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationVisio
     */
    omit?: ParticipationVisioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationVisioInclude<ExtArgs> | null
    /**
     * The filter to search for the ParticipationVisio to update in case it exists.
     */
    where: ParticipationVisioWhereUniqueInput
    /**
     * In case the ParticipationVisio found by the `where` argument doesn't exist, create a new ParticipationVisio with this data.
     */
    create: XOR<ParticipationVisioCreateInput, ParticipationVisioUncheckedCreateInput>
    /**
     * In case the ParticipationVisio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipationVisioUpdateInput, ParticipationVisioUncheckedUpdateInput>
  }

  /**
   * ParticipationVisio delete
   */
  export type ParticipationVisioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationVisio
     */
    select?: ParticipationVisioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationVisio
     */
    omit?: ParticipationVisioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationVisioInclude<ExtArgs> | null
    /**
     * Filter which ParticipationVisio to delete.
     */
    where: ParticipationVisioWhereUniqueInput
  }

  /**
   * ParticipationVisio deleteMany
   */
  export type ParticipationVisioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipationVisios to delete
     */
    where?: ParticipationVisioWhereInput
    /**
     * Limit how many ParticipationVisios to delete.
     */
    limit?: number
  }

  /**
   * ParticipationVisio without action
   */
  export type ParticipationVisioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipationVisio
     */
    select?: ParticipationVisioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipationVisio
     */
    omit?: ParticipationVisioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationVisioInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cours?: boolean | Category$coursArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | Category$coursArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      cours: Prisma.$CoursPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cours<T extends Category$coursArgs<ExtArgs> = {}>(args?: Subset<T, Category$coursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.cours
   */
  export type Category$coursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    where?: CoursWhereInput
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    cursor?: CoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CoursScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    sousTitre: 'sousTitre',
    description: 'description',
    level: 'level',
    content: 'content',
    image: 'image',
    video: 'video',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type CoursScalarFieldEnum = (typeof CoursScalarFieldEnum)[keyof typeof CoursScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    videoUrl: 'videoUrl',
    document: 'document',
    contenu: 'contenu',
    coursId: 'coursId'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const SuivreCoursScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    coursId: 'coursId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SuivreCoursScalarFieldEnum = (typeof SuivreCoursScalarFieldEnum)[keyof typeof SuivreCoursScalarFieldEnum]


  export const UserLessonScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lessonId: 'lessonId',
    isFinished: 'isFinished'
  };

  export type UserLessonScalarFieldEnum = (typeof UserLessonScalarFieldEnum)[keyof typeof UserLessonScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    title: 'title',
    coursId: 'coursId'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuizQuestionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    content: 'content',
    answer: 'answer',
    quizId: 'quizId'
  };

  export type QuizQuestionScalarFieldEnum = (typeof QuizQuestionScalarFieldEnum)[keyof typeof QuizQuestionScalarFieldEnum]


  export const QuizOptionScalarFieldEnum: {
    id: 'id',
    quizQuestionId: 'quizQuestionId',
    nom: 'nom'
  };

  export type QuizOptionScalarFieldEnum = (typeof QuizOptionScalarFieldEnum)[keyof typeof QuizOptionScalarFieldEnum]


  export const QuizResultScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    quizId: 'quizId',
    score: 'score',
    attemptAt: 'attemptAt'
  };

  export type QuizResultScalarFieldEnum = (typeof QuizResultScalarFieldEnum)[keyof typeof QuizResultScalarFieldEnum]


  export const VisioSessionScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    description: 'description',
    coursId: 'coursId',
    formateurId: 'formateurId',
    lienVisio: 'lienVisio',
    dateDebut: 'dateDebut',
    dateFin: 'dateFin',
    estEnregistre: 'estEnregistre',
    lienEnregistrement: 'lienEnregistrement'
  };

  export type VisioSessionScalarFieldEnum = (typeof VisioSessionScalarFieldEnum)[keyof typeof VisioSessionScalarFieldEnum]


  export const ParticipationVisioScalarFieldEnum: {
    id: 'id',
    visioId: 'visioId',
    utilisateurId: 'utilisateurId',
    estPresent: 'estPresent',
    tempsDeConnexion: 'tempsDeConnexion',
    feedback: 'feedback'
  };

  export type ParticipationVisioScalarFieldEnum = (typeof ParticipationVisioScalarFieldEnum)[keyof typeof ParticipationVisioScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CoursOrderByRelevanceFieldEnum: {
    nom: 'nom',
    sousTitre: 'sousTitre',
    description: 'description',
    level: 'level',
    content: 'content',
    image: 'image',
    video: 'video'
  };

  export type CoursOrderByRelevanceFieldEnum = (typeof CoursOrderByRelevanceFieldEnum)[keyof typeof CoursOrderByRelevanceFieldEnum]


  export const LessonOrderByRelevanceFieldEnum: {
    title: 'title',
    videoUrl: 'videoUrl',
    document: 'document',
    contenu: 'contenu'
  };

  export type LessonOrderByRelevanceFieldEnum = (typeof LessonOrderByRelevanceFieldEnum)[keyof typeof LessonOrderByRelevanceFieldEnum]


  export const QuizOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type QuizOrderByRelevanceFieldEnum = (typeof QuizOrderByRelevanceFieldEnum)[keyof typeof QuizOrderByRelevanceFieldEnum]


  export const QuizQuestionOrderByRelevanceFieldEnum: {
    type: 'type',
    content: 'content',
    answer: 'answer'
  };

  export type QuizQuestionOrderByRelevanceFieldEnum = (typeof QuizQuestionOrderByRelevanceFieldEnum)[keyof typeof QuizQuestionOrderByRelevanceFieldEnum]


  export const QuizOptionOrderByRelevanceFieldEnum: {
    nom: 'nom'
  };

  export type QuizOptionOrderByRelevanceFieldEnum = (typeof QuizOptionOrderByRelevanceFieldEnum)[keyof typeof QuizOptionOrderByRelevanceFieldEnum]


  export const VisioSessionOrderByRelevanceFieldEnum: {
    titre: 'titre',
    description: 'description',
    lienVisio: 'lienVisio',
    lienEnregistrement: 'lienEnregistrement'
  };

  export type VisioSessionOrderByRelevanceFieldEnum = (typeof VisioSessionOrderByRelevanceFieldEnum)[keyof typeof VisioSessionOrderByRelevanceFieldEnum]


  export const ParticipationVisioOrderByRelevanceFieldEnum: {
    feedback: 'feedback'
  };

  export type ParticipationVisioOrderByRelevanceFieldEnum = (typeof ParticipationVisioOrderByRelevanceFieldEnum)[keyof typeof ParticipationVisioOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cours?: CoursListRelationFilter
    userLessons?: UserLessonListRelationFilter
    quizResults?: QuizResultListRelationFilter
    suivis?: SuivreCoursListRelationFilter
    participations?: ParticipationVisioListRelationFilter
    visiosEnTantQueFormateur?: VisioSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cours?: CoursOrderByRelationAggregateInput
    userLessons?: UserLessonOrderByRelationAggregateInput
    quizResults?: QuizResultOrderByRelationAggregateInput
    suivis?: SuivreCoursOrderByRelationAggregateInput
    participations?: ParticipationVisioOrderByRelationAggregateInput
    visiosEnTantQueFormateur?: VisioSessionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cours?: CoursListRelationFilter
    userLessons?: UserLessonListRelationFilter
    quizResults?: QuizResultListRelationFilter
    suivis?: SuivreCoursListRelationFilter
    participations?: ParticipationVisioListRelationFilter
    visiosEnTantQueFormateur?: VisioSessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CoursWhereInput = {
    AND?: CoursWhereInput | CoursWhereInput[]
    OR?: CoursWhereInput[]
    NOT?: CoursWhereInput | CoursWhereInput[]
    id?: IntFilter<"Cours"> | number
    nom?: StringFilter<"Cours"> | string
    sousTitre?: StringFilter<"Cours"> | string
    description?: StringNullableFilter<"Cours"> | string | null
    level?: StringNullableFilter<"Cours"> | string | null
    content?: StringNullableFilter<"Cours"> | string | null
    image?: StringNullableFilter<"Cours"> | string | null
    video?: StringNullableFilter<"Cours"> | string | null
    createdAt?: DateTimeFilter<"Cours"> | Date | string
    updatedAt?: DateTimeFilter<"Cours"> | Date | string
    userId?: IntFilter<"Cours"> | number
    categoryId?: IntNullableFilter<"Cours"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lessons?: LessonListRelationFilter
    quiz?: QuizListRelationFilter
    visios?: VisioSessionListRelationFilter
    suivis?: SuivreCoursListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }

  export type CoursOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    sousTitre?: SortOrder
    description?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    video?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    lessons?: LessonOrderByRelationAggregateInput
    quiz?: QuizOrderByRelationAggregateInput
    visios?: VisioSessionOrderByRelationAggregateInput
    suivis?: SuivreCoursOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
    _relevance?: CoursOrderByRelevanceInput
  }

  export type CoursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoursWhereInput | CoursWhereInput[]
    OR?: CoursWhereInput[]
    NOT?: CoursWhereInput | CoursWhereInput[]
    nom?: StringFilter<"Cours"> | string
    sousTitre?: StringFilter<"Cours"> | string
    description?: StringNullableFilter<"Cours"> | string | null
    level?: StringNullableFilter<"Cours"> | string | null
    content?: StringNullableFilter<"Cours"> | string | null
    image?: StringNullableFilter<"Cours"> | string | null
    video?: StringNullableFilter<"Cours"> | string | null
    createdAt?: DateTimeFilter<"Cours"> | Date | string
    updatedAt?: DateTimeFilter<"Cours"> | Date | string
    userId?: IntFilter<"Cours"> | number
    categoryId?: IntNullableFilter<"Cours"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lessons?: LessonListRelationFilter
    quiz?: QuizListRelationFilter
    visios?: VisioSessionListRelationFilter
    suivis?: SuivreCoursListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type CoursOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    sousTitre?: SortOrder
    description?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    video?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: CoursCountOrderByAggregateInput
    _avg?: CoursAvgOrderByAggregateInput
    _max?: CoursMaxOrderByAggregateInput
    _min?: CoursMinOrderByAggregateInput
    _sum?: CoursSumOrderByAggregateInput
  }

  export type CoursScalarWhereWithAggregatesInput = {
    AND?: CoursScalarWhereWithAggregatesInput | CoursScalarWhereWithAggregatesInput[]
    OR?: CoursScalarWhereWithAggregatesInput[]
    NOT?: CoursScalarWhereWithAggregatesInput | CoursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cours"> | number
    nom?: StringWithAggregatesFilter<"Cours"> | string
    sousTitre?: StringWithAggregatesFilter<"Cours"> | string
    description?: StringNullableWithAggregatesFilter<"Cours"> | string | null
    level?: StringNullableWithAggregatesFilter<"Cours"> | string | null
    content?: StringNullableWithAggregatesFilter<"Cours"> | string | null
    image?: StringNullableWithAggregatesFilter<"Cours"> | string | null
    video?: StringNullableWithAggregatesFilter<"Cours"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cours"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cours"> | Date | string
    userId?: IntWithAggregatesFilter<"Cours"> | number
    categoryId?: IntNullableWithAggregatesFilter<"Cours"> | number | null
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: IntFilter<"Lesson"> | number
    title?: StringFilter<"Lesson"> | string
    videoUrl?: StringNullableFilter<"Lesson"> | string | null
    document?: StringNullableFilter<"Lesson"> | string | null
    contenu?: StringNullableFilter<"Lesson"> | string | null
    coursId?: IntFilter<"Lesson"> | number
    cours?: XOR<CoursScalarRelationFilter, CoursWhereInput>
    userLessons?: UserLessonListRelationFilter
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    document?: SortOrderInput | SortOrder
    contenu?: SortOrderInput | SortOrder
    coursId?: SortOrder
    cours?: CoursOrderByWithRelationInput
    userLessons?: UserLessonOrderByRelationAggregateInput
    _relevance?: LessonOrderByRelevanceInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    title?: StringFilter<"Lesson"> | string
    videoUrl?: StringNullableFilter<"Lesson"> | string | null
    document?: StringNullableFilter<"Lesson"> | string | null
    contenu?: StringNullableFilter<"Lesson"> | string | null
    coursId?: IntFilter<"Lesson"> | number
    cours?: XOR<CoursScalarRelationFilter, CoursWhereInput>
    userLessons?: UserLessonListRelationFilter
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    document?: SortOrderInput | SortOrder
    contenu?: SortOrderInput | SortOrder
    coursId?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lesson"> | number
    title?: StringWithAggregatesFilter<"Lesson"> | string
    videoUrl?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    document?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    contenu?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    coursId?: IntWithAggregatesFilter<"Lesson"> | number
  }

  export type SuivreCoursWhereInput = {
    AND?: SuivreCoursWhereInput | SuivreCoursWhereInput[]
    OR?: SuivreCoursWhereInput[]
    NOT?: SuivreCoursWhereInput | SuivreCoursWhereInput[]
    id?: IntFilter<"SuivreCours"> | number
    userId?: IntFilter<"SuivreCours"> | number
    coursId?: IntFilter<"SuivreCours"> | number
    createdAt?: DateTimeFilter<"SuivreCours"> | Date | string
    updatedAt?: DateTimeFilter<"SuivreCours"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cours?: XOR<CoursScalarRelationFilter, CoursWhereInput>
  }

  export type SuivreCoursOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    coursId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    cours?: CoursOrderByWithRelationInput
  }

  export type SuivreCoursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SuivreCoursWhereInput | SuivreCoursWhereInput[]
    OR?: SuivreCoursWhereInput[]
    NOT?: SuivreCoursWhereInput | SuivreCoursWhereInput[]
    userId?: IntFilter<"SuivreCours"> | number
    coursId?: IntFilter<"SuivreCours"> | number
    createdAt?: DateTimeFilter<"SuivreCours"> | Date | string
    updatedAt?: DateTimeFilter<"SuivreCours"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cours?: XOR<CoursScalarRelationFilter, CoursWhereInput>
  }, "id">

  export type SuivreCoursOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    coursId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SuivreCoursCountOrderByAggregateInput
    _avg?: SuivreCoursAvgOrderByAggregateInput
    _max?: SuivreCoursMaxOrderByAggregateInput
    _min?: SuivreCoursMinOrderByAggregateInput
    _sum?: SuivreCoursSumOrderByAggregateInput
  }

  export type SuivreCoursScalarWhereWithAggregatesInput = {
    AND?: SuivreCoursScalarWhereWithAggregatesInput | SuivreCoursScalarWhereWithAggregatesInput[]
    OR?: SuivreCoursScalarWhereWithAggregatesInput[]
    NOT?: SuivreCoursScalarWhereWithAggregatesInput | SuivreCoursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SuivreCours"> | number
    userId?: IntWithAggregatesFilter<"SuivreCours"> | number
    coursId?: IntWithAggregatesFilter<"SuivreCours"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SuivreCours"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SuivreCours"> | Date | string
  }

  export type UserLessonWhereInput = {
    AND?: UserLessonWhereInput | UserLessonWhereInput[]
    OR?: UserLessonWhereInput[]
    NOT?: UserLessonWhereInput | UserLessonWhereInput[]
    id?: IntFilter<"UserLesson"> | number
    userId?: IntFilter<"UserLesson"> | number
    lessonId?: IntFilter<"UserLesson"> | number
    isFinished?: BoolFilter<"UserLesson"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type UserLessonOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    isFinished?: SortOrder
    user?: UserOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type UserLessonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_lessonId?: UserLessonUserIdLessonIdCompoundUniqueInput
    AND?: UserLessonWhereInput | UserLessonWhereInput[]
    OR?: UserLessonWhereInput[]
    NOT?: UserLessonWhereInput | UserLessonWhereInput[]
    userId?: IntFilter<"UserLesson"> | number
    lessonId?: IntFilter<"UserLesson"> | number
    isFinished?: BoolFilter<"UserLesson"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "id" | "userId_lessonId">

  export type UserLessonOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    isFinished?: SortOrder
    _count?: UserLessonCountOrderByAggregateInput
    _avg?: UserLessonAvgOrderByAggregateInput
    _max?: UserLessonMaxOrderByAggregateInput
    _min?: UserLessonMinOrderByAggregateInput
    _sum?: UserLessonSumOrderByAggregateInput
  }

  export type UserLessonScalarWhereWithAggregatesInput = {
    AND?: UserLessonScalarWhereWithAggregatesInput | UserLessonScalarWhereWithAggregatesInput[]
    OR?: UserLessonScalarWhereWithAggregatesInput[]
    NOT?: UserLessonScalarWhereWithAggregatesInput | UserLessonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserLesson"> | number
    userId?: IntWithAggregatesFilter<"UserLesson"> | number
    lessonId?: IntWithAggregatesFilter<"UserLesson"> | number
    isFinished?: BoolWithAggregatesFilter<"UserLesson"> | boolean
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: IntFilter<"Quiz"> | number
    title?: StringFilter<"Quiz"> | string
    coursId?: IntFilter<"Quiz"> | number
    cours?: XOR<CoursScalarRelationFilter, CoursWhereInput>
    questions?: QuizQuestionListRelationFilter
    results?: QuizResultListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    coursId?: SortOrder
    cours?: CoursOrderByWithRelationInput
    questions?: QuizQuestionOrderByRelationAggregateInput
    results?: QuizResultOrderByRelationAggregateInput
    _relevance?: QuizOrderByRelevanceInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    title?: StringFilter<"Quiz"> | string
    coursId?: IntFilter<"Quiz"> | number
    cours?: XOR<CoursScalarRelationFilter, CoursWhereInput>
    questions?: QuizQuestionListRelationFilter
    results?: QuizResultListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    coursId?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quiz"> | number
    title?: StringWithAggregatesFilter<"Quiz"> | string
    coursId?: IntWithAggregatesFilter<"Quiz"> | number
  }

  export type QuizQuestionWhereInput = {
    AND?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    OR?: QuizQuestionWhereInput[]
    NOT?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    id?: IntFilter<"QuizQuestion"> | number
    type?: StringFilter<"QuizQuestion"> | string
    content?: StringFilter<"QuizQuestion"> | string
    answer?: StringFilter<"QuizQuestion"> | string
    quizId?: IntFilter<"QuizQuestion"> | number
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    options?: QuizOptionListRelationFilter
  }

  export type QuizQuestionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    quizId?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    options?: QuizOptionOrderByRelationAggregateInput
    _relevance?: QuizQuestionOrderByRelevanceInput
  }

  export type QuizQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    OR?: QuizQuestionWhereInput[]
    NOT?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    type?: StringFilter<"QuizQuestion"> | string
    content?: StringFilter<"QuizQuestion"> | string
    answer?: StringFilter<"QuizQuestion"> | string
    quizId?: IntFilter<"QuizQuestion"> | number
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    options?: QuizOptionListRelationFilter
  }, "id">

  export type QuizQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    quizId?: SortOrder
    _count?: QuizQuestionCountOrderByAggregateInput
    _avg?: QuizQuestionAvgOrderByAggregateInput
    _max?: QuizQuestionMaxOrderByAggregateInput
    _min?: QuizQuestionMinOrderByAggregateInput
    _sum?: QuizQuestionSumOrderByAggregateInput
  }

  export type QuizQuestionScalarWhereWithAggregatesInput = {
    AND?: QuizQuestionScalarWhereWithAggregatesInput | QuizQuestionScalarWhereWithAggregatesInput[]
    OR?: QuizQuestionScalarWhereWithAggregatesInput[]
    NOT?: QuizQuestionScalarWhereWithAggregatesInput | QuizQuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuizQuestion"> | number
    type?: StringWithAggregatesFilter<"QuizQuestion"> | string
    content?: StringWithAggregatesFilter<"QuizQuestion"> | string
    answer?: StringWithAggregatesFilter<"QuizQuestion"> | string
    quizId?: IntWithAggregatesFilter<"QuizQuestion"> | number
  }

  export type QuizOptionWhereInput = {
    AND?: QuizOptionWhereInput | QuizOptionWhereInput[]
    OR?: QuizOptionWhereInput[]
    NOT?: QuizOptionWhereInput | QuizOptionWhereInput[]
    id?: IntFilter<"QuizOption"> | number
    quizQuestionId?: IntFilter<"QuizOption"> | number
    nom?: StringFilter<"QuizOption"> | string
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
  }

  export type QuizOptionOrderByWithRelationInput = {
    id?: SortOrder
    quizQuestionId?: SortOrder
    nom?: SortOrder
    question?: QuizQuestionOrderByWithRelationInput
    _relevance?: QuizOptionOrderByRelevanceInput
  }

  export type QuizOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizOptionWhereInput | QuizOptionWhereInput[]
    OR?: QuizOptionWhereInput[]
    NOT?: QuizOptionWhereInput | QuizOptionWhereInput[]
    quizQuestionId?: IntFilter<"QuizOption"> | number
    nom?: StringFilter<"QuizOption"> | string
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
  }, "id">

  export type QuizOptionOrderByWithAggregationInput = {
    id?: SortOrder
    quizQuestionId?: SortOrder
    nom?: SortOrder
    _count?: QuizOptionCountOrderByAggregateInput
    _avg?: QuizOptionAvgOrderByAggregateInput
    _max?: QuizOptionMaxOrderByAggregateInput
    _min?: QuizOptionMinOrderByAggregateInput
    _sum?: QuizOptionSumOrderByAggregateInput
  }

  export type QuizOptionScalarWhereWithAggregatesInput = {
    AND?: QuizOptionScalarWhereWithAggregatesInput | QuizOptionScalarWhereWithAggregatesInput[]
    OR?: QuizOptionScalarWhereWithAggregatesInput[]
    NOT?: QuizOptionScalarWhereWithAggregatesInput | QuizOptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuizOption"> | number
    quizQuestionId?: IntWithAggregatesFilter<"QuizOption"> | number
    nom?: StringWithAggregatesFilter<"QuizOption"> | string
  }

  export type QuizResultWhereInput = {
    AND?: QuizResultWhereInput | QuizResultWhereInput[]
    OR?: QuizResultWhereInput[]
    NOT?: QuizResultWhereInput | QuizResultWhereInput[]
    id?: IntFilter<"QuizResult"> | number
    userId?: IntFilter<"QuizResult"> | number
    quizId?: IntFilter<"QuizResult"> | number
    score?: IntFilter<"QuizResult"> | number
    attemptAt?: DateTimeFilter<"QuizResult"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type QuizResultOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    attemptAt?: SortOrder
    user?: UserOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
  }

  export type QuizResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizResultWhereInput | QuizResultWhereInput[]
    OR?: QuizResultWhereInput[]
    NOT?: QuizResultWhereInput | QuizResultWhereInput[]
    userId?: IntFilter<"QuizResult"> | number
    quizId?: IntFilter<"QuizResult"> | number
    score?: IntFilter<"QuizResult"> | number
    attemptAt?: DateTimeFilter<"QuizResult"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id">

  export type QuizResultOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    attemptAt?: SortOrder
    _count?: QuizResultCountOrderByAggregateInput
    _avg?: QuizResultAvgOrderByAggregateInput
    _max?: QuizResultMaxOrderByAggregateInput
    _min?: QuizResultMinOrderByAggregateInput
    _sum?: QuizResultSumOrderByAggregateInput
  }

  export type QuizResultScalarWhereWithAggregatesInput = {
    AND?: QuizResultScalarWhereWithAggregatesInput | QuizResultScalarWhereWithAggregatesInput[]
    OR?: QuizResultScalarWhereWithAggregatesInput[]
    NOT?: QuizResultScalarWhereWithAggregatesInput | QuizResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuizResult"> | number
    userId?: IntWithAggregatesFilter<"QuizResult"> | number
    quizId?: IntWithAggregatesFilter<"QuizResult"> | number
    score?: IntWithAggregatesFilter<"QuizResult"> | number
    attemptAt?: DateTimeWithAggregatesFilter<"QuizResult"> | Date | string
  }

  export type VisioSessionWhereInput = {
    AND?: VisioSessionWhereInput | VisioSessionWhereInput[]
    OR?: VisioSessionWhereInput[]
    NOT?: VisioSessionWhereInput | VisioSessionWhereInput[]
    id?: IntFilter<"VisioSession"> | number
    titre?: StringFilter<"VisioSession"> | string
    description?: StringNullableFilter<"VisioSession"> | string | null
    coursId?: IntFilter<"VisioSession"> | number
    formateurId?: IntFilter<"VisioSession"> | number
    lienVisio?: StringNullableFilter<"VisioSession"> | string | null
    dateDebut?: DateTimeFilter<"VisioSession"> | Date | string
    dateFin?: DateTimeFilter<"VisioSession"> | Date | string
    estEnregistre?: BoolFilter<"VisioSession"> | boolean
    lienEnregistrement?: StringNullableFilter<"VisioSession"> | string | null
    cours?: XOR<CoursScalarRelationFilter, CoursWhereInput>
    formateur?: XOR<UserScalarRelationFilter, UserWhereInput>
    participations?: ParticipationVisioListRelationFilter
  }

  export type VisioSessionOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    coursId?: SortOrder
    formateurId?: SortOrder
    lienVisio?: SortOrderInput | SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    estEnregistre?: SortOrder
    lienEnregistrement?: SortOrderInput | SortOrder
    cours?: CoursOrderByWithRelationInput
    formateur?: UserOrderByWithRelationInput
    participations?: ParticipationVisioOrderByRelationAggregateInput
    _relevance?: VisioSessionOrderByRelevanceInput
  }

  export type VisioSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisioSessionWhereInput | VisioSessionWhereInput[]
    OR?: VisioSessionWhereInput[]
    NOT?: VisioSessionWhereInput | VisioSessionWhereInput[]
    titre?: StringFilter<"VisioSession"> | string
    description?: StringNullableFilter<"VisioSession"> | string | null
    coursId?: IntFilter<"VisioSession"> | number
    formateurId?: IntFilter<"VisioSession"> | number
    lienVisio?: StringNullableFilter<"VisioSession"> | string | null
    dateDebut?: DateTimeFilter<"VisioSession"> | Date | string
    dateFin?: DateTimeFilter<"VisioSession"> | Date | string
    estEnregistre?: BoolFilter<"VisioSession"> | boolean
    lienEnregistrement?: StringNullableFilter<"VisioSession"> | string | null
    cours?: XOR<CoursScalarRelationFilter, CoursWhereInput>
    formateur?: XOR<UserScalarRelationFilter, UserWhereInput>
    participations?: ParticipationVisioListRelationFilter
  }, "id">

  export type VisioSessionOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    coursId?: SortOrder
    formateurId?: SortOrder
    lienVisio?: SortOrderInput | SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    estEnregistre?: SortOrder
    lienEnregistrement?: SortOrderInput | SortOrder
    _count?: VisioSessionCountOrderByAggregateInput
    _avg?: VisioSessionAvgOrderByAggregateInput
    _max?: VisioSessionMaxOrderByAggregateInput
    _min?: VisioSessionMinOrderByAggregateInput
    _sum?: VisioSessionSumOrderByAggregateInput
  }

  export type VisioSessionScalarWhereWithAggregatesInput = {
    AND?: VisioSessionScalarWhereWithAggregatesInput | VisioSessionScalarWhereWithAggregatesInput[]
    OR?: VisioSessionScalarWhereWithAggregatesInput[]
    NOT?: VisioSessionScalarWhereWithAggregatesInput | VisioSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VisioSession"> | number
    titre?: StringWithAggregatesFilter<"VisioSession"> | string
    description?: StringNullableWithAggregatesFilter<"VisioSession"> | string | null
    coursId?: IntWithAggregatesFilter<"VisioSession"> | number
    formateurId?: IntWithAggregatesFilter<"VisioSession"> | number
    lienVisio?: StringNullableWithAggregatesFilter<"VisioSession"> | string | null
    dateDebut?: DateTimeWithAggregatesFilter<"VisioSession"> | Date | string
    dateFin?: DateTimeWithAggregatesFilter<"VisioSession"> | Date | string
    estEnregistre?: BoolWithAggregatesFilter<"VisioSession"> | boolean
    lienEnregistrement?: StringNullableWithAggregatesFilter<"VisioSession"> | string | null
  }

  export type ParticipationVisioWhereInput = {
    AND?: ParticipationVisioWhereInput | ParticipationVisioWhereInput[]
    OR?: ParticipationVisioWhereInput[]
    NOT?: ParticipationVisioWhereInput | ParticipationVisioWhereInput[]
    id?: IntFilter<"ParticipationVisio"> | number
    visioId?: IntFilter<"ParticipationVisio"> | number
    utilisateurId?: IntFilter<"ParticipationVisio"> | number
    estPresent?: BoolFilter<"ParticipationVisio"> | boolean
    tempsDeConnexion?: IntNullableFilter<"ParticipationVisio"> | number | null
    feedback?: StringNullableFilter<"ParticipationVisio"> | string | null
    visio?: XOR<VisioSessionScalarRelationFilter, VisioSessionWhereInput>
    utilisateur?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ParticipationVisioOrderByWithRelationInput = {
    id?: SortOrder
    visioId?: SortOrder
    utilisateurId?: SortOrder
    estPresent?: SortOrder
    tempsDeConnexion?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    visio?: VisioSessionOrderByWithRelationInput
    utilisateur?: UserOrderByWithRelationInput
    _relevance?: ParticipationVisioOrderByRelevanceInput
  }

  export type ParticipationVisioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParticipationVisioWhereInput | ParticipationVisioWhereInput[]
    OR?: ParticipationVisioWhereInput[]
    NOT?: ParticipationVisioWhereInput | ParticipationVisioWhereInput[]
    visioId?: IntFilter<"ParticipationVisio"> | number
    utilisateurId?: IntFilter<"ParticipationVisio"> | number
    estPresent?: BoolFilter<"ParticipationVisio"> | boolean
    tempsDeConnexion?: IntNullableFilter<"ParticipationVisio"> | number | null
    feedback?: StringNullableFilter<"ParticipationVisio"> | string | null
    visio?: XOR<VisioSessionScalarRelationFilter, VisioSessionWhereInput>
    utilisateur?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ParticipationVisioOrderByWithAggregationInput = {
    id?: SortOrder
    visioId?: SortOrder
    utilisateurId?: SortOrder
    estPresent?: SortOrder
    tempsDeConnexion?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    _count?: ParticipationVisioCountOrderByAggregateInput
    _avg?: ParticipationVisioAvgOrderByAggregateInput
    _max?: ParticipationVisioMaxOrderByAggregateInput
    _min?: ParticipationVisioMinOrderByAggregateInput
    _sum?: ParticipationVisioSumOrderByAggregateInput
  }

  export type ParticipationVisioScalarWhereWithAggregatesInput = {
    AND?: ParticipationVisioScalarWhereWithAggregatesInput | ParticipationVisioScalarWhereWithAggregatesInput[]
    OR?: ParticipationVisioScalarWhereWithAggregatesInput[]
    NOT?: ParticipationVisioScalarWhereWithAggregatesInput | ParticipationVisioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParticipationVisio"> | number
    visioId?: IntWithAggregatesFilter<"ParticipationVisio"> | number
    utilisateurId?: IntWithAggregatesFilter<"ParticipationVisio"> | number
    estPresent?: BoolWithAggregatesFilter<"ParticipationVisio"> | boolean
    tempsDeConnexion?: IntNullableWithAggregatesFilter<"ParticipationVisio"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"ParticipationVisio"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    cours?: CoursListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cours?: CoursOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    cours?: CoursListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringWithAggregatesFilter<"Category"> | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursCreateNestedManyWithoutUserInput
    userLessons?: UserLessonCreateNestedManyWithoutUserInput
    quizResults?: QuizResultCreateNestedManyWithoutUserInput
    suivis?: SuivreCoursCreateNestedManyWithoutUserInput
    participations?: ParticipationVisioCreateNestedManyWithoutUtilisateurInput
    visiosEnTantQueFormateur?: VisioSessionCreateNestedManyWithoutFormateurInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursUncheckedCreateNestedManyWithoutUserInput
    userLessons?: UserLessonUncheckedCreateNestedManyWithoutUserInput
    quizResults?: QuizResultUncheckedCreateNestedManyWithoutUserInput
    suivis?: SuivreCoursUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationVisioUncheckedCreateNestedManyWithoutUtilisateurInput
    visiosEnTantQueFormateur?: VisioSessionUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUpdateManyWithoutUserNestedInput
    userLessons?: UserLessonUpdateManyWithoutUserNestedInput
    quizResults?: QuizResultUpdateManyWithoutUserNestedInput
    suivis?: SuivreCoursUpdateManyWithoutUserNestedInput
    participations?: ParticipationVisioUpdateManyWithoutUtilisateurNestedInput
    visiosEnTantQueFormateur?: VisioSessionUpdateManyWithoutFormateurNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUncheckedUpdateManyWithoutUserNestedInput
    userLessons?: UserLessonUncheckedUpdateManyWithoutUserNestedInput
    quizResults?: QuizResultUncheckedUpdateManyWithoutUserNestedInput
    suivis?: SuivreCoursUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationVisioUncheckedUpdateManyWithoutUtilisateurNestedInput
    visiosEnTantQueFormateur?: VisioSessionUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursCreateInput = {
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursInput
    lessons?: LessonCreateNestedManyWithoutCoursInput
    quiz?: QuizCreateNestedManyWithoutCoursInput
    visios?: VisioSessionCreateNestedManyWithoutCoursInput
    suivis?: SuivreCoursCreateNestedManyWithoutCoursInput
    category?: CategoryCreateNestedOneWithoutCoursInput
  }

  export type CoursUncheckedCreateInput = {
    id?: number
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    categoryId?: number | null
    lessons?: LessonUncheckedCreateNestedManyWithoutCoursInput
    quiz?: QuizUncheckedCreateNestedManyWithoutCoursInput
    visios?: VisioSessionUncheckedCreateNestedManyWithoutCoursInput
    suivis?: SuivreCoursUncheckedCreateNestedManyWithoutCoursInput
  }

  export type CoursUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursNestedInput
    lessons?: LessonUpdateManyWithoutCoursNestedInput
    quiz?: QuizUpdateManyWithoutCoursNestedInput
    visios?: VisioSessionUpdateManyWithoutCoursNestedInput
    suivis?: SuivreCoursUpdateManyWithoutCoursNestedInput
    category?: CategoryUpdateOneWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    lessons?: LessonUncheckedUpdateManyWithoutCoursNestedInput
    quiz?: QuizUncheckedUpdateManyWithoutCoursNestedInput
    visios?: VisioSessionUncheckedUpdateManyWithoutCoursNestedInput
    suivis?: SuivreCoursUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type CoursCreateManyInput = {
    id?: number
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    categoryId?: number | null
  }

  export type CoursUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LessonCreateInput = {
    title: string
    videoUrl?: string | null
    document?: string | null
    contenu?: string | null
    cours: CoursCreateNestedOneWithoutLessonsInput
    userLessons?: UserLessonCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    id?: number
    title: string
    videoUrl?: string | null
    document?: string | null
    contenu?: string | null
    coursId: number
    userLessons?: UserLessonUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    cours?: CoursUpdateOneRequiredWithoutLessonsNestedInput
    userLessons?: UserLessonUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    coursId?: IntFieldUpdateOperationsInput | number
    userLessons?: UserLessonUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: number
    title: string
    videoUrl?: string | null
    document?: string | null
    contenu?: string | null
    coursId: number
  }

  export type LessonUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    coursId?: IntFieldUpdateOperationsInput | number
  }

  export type SuivreCoursCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSuivisInput
    cours: CoursCreateNestedOneWithoutSuivisInput
  }

  export type SuivreCoursUncheckedCreateInput = {
    id?: number
    userId: number
    coursId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuivreCoursUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSuivisNestedInput
    cours?: CoursUpdateOneRequiredWithoutSuivisNestedInput
  }

  export type SuivreCoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    coursId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuivreCoursCreateManyInput = {
    id?: number
    userId: number
    coursId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuivreCoursUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuivreCoursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    coursId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLessonCreateInput = {
    isFinished?: boolean
    user: UserCreateNestedOneWithoutUserLessonsInput
    lesson: LessonCreateNestedOneWithoutUserLessonsInput
  }

  export type UserLessonUncheckedCreateInput = {
    id?: number
    userId: number
    lessonId: number
    isFinished?: boolean
  }

  export type UserLessonUpdateInput = {
    isFinished?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserLessonsNestedInput
    lesson?: LessonUpdateOneRequiredWithoutUserLessonsNestedInput
  }

  export type UserLessonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    isFinished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserLessonCreateManyInput = {
    id?: number
    userId: number
    lessonId: number
    isFinished?: boolean
  }

  export type UserLessonUpdateManyMutationInput = {
    isFinished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserLessonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    isFinished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuizCreateInput = {
    title: string
    cours: CoursCreateNestedOneWithoutQuizInput
    questions?: QuizQuestionCreateNestedManyWithoutQuizInput
    results?: QuizResultCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: number
    title: string
    coursId: number
    questions?: QuizQuestionUncheckedCreateNestedManyWithoutQuizInput
    results?: QuizResultUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    cours?: CoursUpdateOneRequiredWithoutQuizNestedInput
    questions?: QuizQuestionUpdateManyWithoutQuizNestedInput
    results?: QuizResultUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    coursId?: IntFieldUpdateOperationsInput | number
    questions?: QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput
    results?: QuizResultUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: number
    title: string
    coursId: number
  }

  export type QuizUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    coursId?: IntFieldUpdateOperationsInput | number
  }

  export type QuizQuestionCreateInput = {
    type: string
    content: string
    answer: string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    options?: QuizOptionCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUncheckedCreateInput = {
    id?: number
    type: string
    content: string
    answer: string
    quizId: number
    options?: QuizOptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    options?: QuizOptionUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    quizId?: IntFieldUpdateOperationsInput | number
    options?: QuizOptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionCreateManyInput = {
    id?: number
    type: string
    content: string
    answer: string
    quizId: number
  }

  export type QuizQuestionUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type QuizQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    quizId?: IntFieldUpdateOperationsInput | number
  }

  export type QuizOptionCreateInput = {
    nom: string
    question: QuizQuestionCreateNestedOneWithoutOptionsInput
  }

  export type QuizOptionUncheckedCreateInput = {
    id?: number
    quizQuestionId: number
    nom: string
  }

  export type QuizOptionUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    question?: QuizQuestionUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type QuizOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizQuestionId?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type QuizOptionCreateManyInput = {
    id?: number
    quizQuestionId: number
    nom: string
  }

  export type QuizOptionUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type QuizOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizQuestionId?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type QuizResultCreateInput = {
    score: number
    attemptAt: Date | string
    user: UserCreateNestedOneWithoutQuizResultsInput
    quiz: QuizCreateNestedOneWithoutResultsInput
  }

  export type QuizResultUncheckedCreateInput = {
    id?: number
    userId: number
    quizId: number
    score: number
    attemptAt: Date | string
  }

  export type QuizResultUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    attemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuizResultsNestedInput
    quiz?: QuizUpdateOneRequiredWithoutResultsNestedInput
  }

  export type QuizResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    attemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizResultCreateManyInput = {
    id?: number
    userId: number
    quizId: number
    score: number
    attemptAt: Date | string
  }

  export type QuizResultUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    attemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    attemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisioSessionCreateInput = {
    titre: string
    description?: string | null
    lienVisio?: string | null
    dateDebut: Date | string
    dateFin: Date | string
    estEnregistre?: boolean
    lienEnregistrement?: string | null
    cours: CoursCreateNestedOneWithoutVisiosInput
    formateur: UserCreateNestedOneWithoutVisiosEnTantQueFormateurInput
    participations?: ParticipationVisioCreateNestedManyWithoutVisioInput
  }

  export type VisioSessionUncheckedCreateInput = {
    id?: number
    titre: string
    description?: string | null
    coursId: number
    formateurId: number
    lienVisio?: string | null
    dateDebut: Date | string
    dateFin: Date | string
    estEnregistre?: boolean
    lienEnregistrement?: string | null
    participations?: ParticipationVisioUncheckedCreateNestedManyWithoutVisioInput
  }

  export type VisioSessionUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lienVisio?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estEnregistre?: BoolFieldUpdateOperationsInput | boolean
    lienEnregistrement?: NullableStringFieldUpdateOperationsInput | string | null
    cours?: CoursUpdateOneRequiredWithoutVisiosNestedInput
    formateur?: UserUpdateOneRequiredWithoutVisiosEnTantQueFormateurNestedInput
    participations?: ParticipationVisioUpdateManyWithoutVisioNestedInput
  }

  export type VisioSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coursId?: IntFieldUpdateOperationsInput | number
    formateurId?: IntFieldUpdateOperationsInput | number
    lienVisio?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estEnregistre?: BoolFieldUpdateOperationsInput | boolean
    lienEnregistrement?: NullableStringFieldUpdateOperationsInput | string | null
    participations?: ParticipationVisioUncheckedUpdateManyWithoutVisioNestedInput
  }

  export type VisioSessionCreateManyInput = {
    id?: number
    titre: string
    description?: string | null
    coursId: number
    formateurId: number
    lienVisio?: string | null
    dateDebut: Date | string
    dateFin: Date | string
    estEnregistre?: boolean
    lienEnregistrement?: string | null
  }

  export type VisioSessionUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lienVisio?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estEnregistre?: BoolFieldUpdateOperationsInput | boolean
    lienEnregistrement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisioSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coursId?: IntFieldUpdateOperationsInput | number
    formateurId?: IntFieldUpdateOperationsInput | number
    lienVisio?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estEnregistre?: BoolFieldUpdateOperationsInput | boolean
    lienEnregistrement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipationVisioCreateInput = {
    estPresent?: boolean
    tempsDeConnexion?: number | null
    feedback?: string | null
    visio: VisioSessionCreateNestedOneWithoutParticipationsInput
    utilisateur: UserCreateNestedOneWithoutParticipationsInput
  }

  export type ParticipationVisioUncheckedCreateInput = {
    id?: number
    visioId: number
    utilisateurId: number
    estPresent?: boolean
    tempsDeConnexion?: number | null
    feedback?: string | null
  }

  export type ParticipationVisioUpdateInput = {
    estPresent?: BoolFieldUpdateOperationsInput | boolean
    tempsDeConnexion?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    visio?: VisioSessionUpdateOneRequiredWithoutParticipationsNestedInput
    utilisateur?: UserUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type ParticipationVisioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    visioId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    estPresent?: BoolFieldUpdateOperationsInput | boolean
    tempsDeConnexion?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipationVisioCreateManyInput = {
    id?: number
    visioId: number
    utilisateurId: number
    estPresent?: boolean
    tempsDeConnexion?: number | null
    feedback?: string | null
  }

  export type ParticipationVisioUpdateManyMutationInput = {
    estPresent?: BoolFieldUpdateOperationsInput | boolean
    tempsDeConnexion?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipationVisioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    visioId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    estPresent?: BoolFieldUpdateOperationsInput | boolean
    tempsDeConnexion?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    name: string
    description: string
    cours?: CoursCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    cours?: CoursUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cours?: CoursUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cours?: CoursUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CoursListRelationFilter = {
    every?: CoursWhereInput
    some?: CoursWhereInput
    none?: CoursWhereInput
  }

  export type UserLessonListRelationFilter = {
    every?: UserLessonWhereInput
    some?: UserLessonWhereInput
    none?: UserLessonWhereInput
  }

  export type QuizResultListRelationFilter = {
    every?: QuizResultWhereInput
    some?: QuizResultWhereInput
    none?: QuizResultWhereInput
  }

  export type SuivreCoursListRelationFilter = {
    every?: SuivreCoursWhereInput
    some?: SuivreCoursWhereInput
    none?: SuivreCoursWhereInput
  }

  export type ParticipationVisioListRelationFilter = {
    every?: ParticipationVisioWhereInput
    some?: ParticipationVisioWhereInput
    none?: ParticipationVisioWhereInput
  }

  export type VisioSessionListRelationFilter = {
    every?: VisioSessionWhereInput
    some?: VisioSessionWhereInput
    none?: VisioSessionWhereInput
  }

  export type CoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuivreCoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipationVisioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisioSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoursOrderByRelevanceInput = {
    fields: CoursOrderByRelevanceFieldEnum | CoursOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CoursCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    sousTitre?: SortOrder
    description?: SortOrder
    level?: SortOrder
    content?: SortOrder
    image?: SortOrder
    video?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type CoursAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type CoursMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    sousTitre?: SortOrder
    description?: SortOrder
    level?: SortOrder
    content?: SortOrder
    image?: SortOrder
    video?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type CoursMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    sousTitre?: SortOrder
    description?: SortOrder
    level?: SortOrder
    content?: SortOrder
    image?: SortOrder
    video?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type CoursSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type CoursScalarRelationFilter = {
    is?: CoursWhereInput
    isNot?: CoursWhereInput
  }

  export type LessonOrderByRelevanceInput = {
    fields: LessonOrderByRelevanceFieldEnum | LessonOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    document?: SortOrder
    contenu?: SortOrder
    coursId?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    id?: SortOrder
    coursId?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    document?: SortOrder
    contenu?: SortOrder
    coursId?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    document?: SortOrder
    contenu?: SortOrder
    coursId?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    id?: SortOrder
    coursId?: SortOrder
  }

  export type SuivreCoursCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coursId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuivreCoursAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coursId?: SortOrder
  }

  export type SuivreCoursMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coursId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuivreCoursMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coursId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuivreCoursSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coursId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type UserLessonUserIdLessonIdCompoundUniqueInput = {
    userId: number
    lessonId: number
  }

  export type UserLessonCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    isFinished?: SortOrder
  }

  export type UserLessonAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
  }

  export type UserLessonMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    isFinished?: SortOrder
  }

  export type UserLessonMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    isFinished?: SortOrder
  }

  export type UserLessonSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type QuizQuestionListRelationFilter = {
    every?: QuizQuestionWhereInput
    some?: QuizQuestionWhereInput
    none?: QuizQuestionWhereInput
  }

  export type QuizQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelevanceInput = {
    fields: QuizOrderByRelevanceFieldEnum | QuizOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    coursId?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    id?: SortOrder
    coursId?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    coursId?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    coursId?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    id?: SortOrder
    coursId?: SortOrder
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type QuizOptionListRelationFilter = {
    every?: QuizOptionWhereInput
    some?: QuizOptionWhereInput
    none?: QuizOptionWhereInput
  }

  export type QuizOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizQuestionOrderByRelevanceInput = {
    fields: QuizQuestionOrderByRelevanceFieldEnum | QuizQuestionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuizQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    quizId?: SortOrder
  }

  export type QuizQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type QuizQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    quizId?: SortOrder
  }

  export type QuizQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    quizId?: SortOrder
  }

  export type QuizQuestionSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type QuizQuestionScalarRelationFilter = {
    is?: QuizQuestionWhereInput
    isNot?: QuizQuestionWhereInput
  }

  export type QuizOptionOrderByRelevanceInput = {
    fields: QuizOptionOrderByRelevanceFieldEnum | QuizOptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuizOptionCountOrderByAggregateInput = {
    id?: SortOrder
    quizQuestionId?: SortOrder
    nom?: SortOrder
  }

  export type QuizOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    quizQuestionId?: SortOrder
  }

  export type QuizOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    quizQuestionId?: SortOrder
    nom?: SortOrder
  }

  export type QuizOptionMinOrderByAggregateInput = {
    id?: SortOrder
    quizQuestionId?: SortOrder
    nom?: SortOrder
  }

  export type QuizOptionSumOrderByAggregateInput = {
    id?: SortOrder
    quizQuestionId?: SortOrder
  }

  export type QuizResultCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    attemptAt?: SortOrder
  }

  export type QuizResultAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
  }

  export type QuizResultMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    attemptAt?: SortOrder
  }

  export type QuizResultMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    attemptAt?: SortOrder
  }

  export type QuizResultSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
  }

  export type VisioSessionOrderByRelevanceInput = {
    fields: VisioSessionOrderByRelevanceFieldEnum | VisioSessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VisioSessionCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    coursId?: SortOrder
    formateurId?: SortOrder
    lienVisio?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    estEnregistre?: SortOrder
    lienEnregistrement?: SortOrder
  }

  export type VisioSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    coursId?: SortOrder
    formateurId?: SortOrder
  }

  export type VisioSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    coursId?: SortOrder
    formateurId?: SortOrder
    lienVisio?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    estEnregistre?: SortOrder
    lienEnregistrement?: SortOrder
  }

  export type VisioSessionMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    coursId?: SortOrder
    formateurId?: SortOrder
    lienVisio?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    estEnregistre?: SortOrder
    lienEnregistrement?: SortOrder
  }

  export type VisioSessionSumOrderByAggregateInput = {
    id?: SortOrder
    coursId?: SortOrder
    formateurId?: SortOrder
  }

  export type VisioSessionScalarRelationFilter = {
    is?: VisioSessionWhereInput
    isNot?: VisioSessionWhereInput
  }

  export type ParticipationVisioOrderByRelevanceInput = {
    fields: ParticipationVisioOrderByRelevanceFieldEnum | ParticipationVisioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ParticipationVisioCountOrderByAggregateInput = {
    id?: SortOrder
    visioId?: SortOrder
    utilisateurId?: SortOrder
    estPresent?: SortOrder
    tempsDeConnexion?: SortOrder
    feedback?: SortOrder
  }

  export type ParticipationVisioAvgOrderByAggregateInput = {
    id?: SortOrder
    visioId?: SortOrder
    utilisateurId?: SortOrder
    tempsDeConnexion?: SortOrder
  }

  export type ParticipationVisioMaxOrderByAggregateInput = {
    id?: SortOrder
    visioId?: SortOrder
    utilisateurId?: SortOrder
    estPresent?: SortOrder
    tempsDeConnexion?: SortOrder
    feedback?: SortOrder
  }

  export type ParticipationVisioMinOrderByAggregateInput = {
    id?: SortOrder
    visioId?: SortOrder
    utilisateurId?: SortOrder
    estPresent?: SortOrder
    tempsDeConnexion?: SortOrder
    feedback?: SortOrder
  }

  export type ParticipationVisioSumOrderByAggregateInput = {
    id?: SortOrder
    visioId?: SortOrder
    utilisateurId?: SortOrder
    tempsDeConnexion?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CoursCreateNestedManyWithoutUserInput = {
    create?: XOR<CoursCreateWithoutUserInput, CoursUncheckedCreateWithoutUserInput> | CoursCreateWithoutUserInput[] | CoursUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutUserInput | CoursCreateOrConnectWithoutUserInput[]
    createMany?: CoursCreateManyUserInputEnvelope
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
  }

  export type UserLessonCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLessonCreateWithoutUserInput, UserLessonUncheckedCreateWithoutUserInput> | UserLessonCreateWithoutUserInput[] | UserLessonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLessonCreateOrConnectWithoutUserInput | UserLessonCreateOrConnectWithoutUserInput[]
    createMany?: UserLessonCreateManyUserInputEnvelope
    connect?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
  }

  export type QuizResultCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizResultCreateWithoutUserInput, QuizResultUncheckedCreateWithoutUserInput> | QuizResultCreateWithoutUserInput[] | QuizResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizResultCreateOrConnectWithoutUserInput | QuizResultCreateOrConnectWithoutUserInput[]
    createMany?: QuizResultCreateManyUserInputEnvelope
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
  }

  export type SuivreCoursCreateNestedManyWithoutUserInput = {
    create?: XOR<SuivreCoursCreateWithoutUserInput, SuivreCoursUncheckedCreateWithoutUserInput> | SuivreCoursCreateWithoutUserInput[] | SuivreCoursUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuivreCoursCreateOrConnectWithoutUserInput | SuivreCoursCreateOrConnectWithoutUserInput[]
    createMany?: SuivreCoursCreateManyUserInputEnvelope
    connect?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
  }

  export type ParticipationVisioCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<ParticipationVisioCreateWithoutUtilisateurInput, ParticipationVisioUncheckedCreateWithoutUtilisateurInput> | ParticipationVisioCreateWithoutUtilisateurInput[] | ParticipationVisioUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ParticipationVisioCreateOrConnectWithoutUtilisateurInput | ParticipationVisioCreateOrConnectWithoutUtilisateurInput[]
    createMany?: ParticipationVisioCreateManyUtilisateurInputEnvelope
    connect?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
  }

  export type VisioSessionCreateNestedManyWithoutFormateurInput = {
    create?: XOR<VisioSessionCreateWithoutFormateurInput, VisioSessionUncheckedCreateWithoutFormateurInput> | VisioSessionCreateWithoutFormateurInput[] | VisioSessionUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: VisioSessionCreateOrConnectWithoutFormateurInput | VisioSessionCreateOrConnectWithoutFormateurInput[]
    createMany?: VisioSessionCreateManyFormateurInputEnvelope
    connect?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
  }

  export type CoursUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoursCreateWithoutUserInput, CoursUncheckedCreateWithoutUserInput> | CoursCreateWithoutUserInput[] | CoursUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutUserInput | CoursCreateOrConnectWithoutUserInput[]
    createMany?: CoursCreateManyUserInputEnvelope
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
  }

  export type UserLessonUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLessonCreateWithoutUserInput, UserLessonUncheckedCreateWithoutUserInput> | UserLessonCreateWithoutUserInput[] | UserLessonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLessonCreateOrConnectWithoutUserInput | UserLessonCreateOrConnectWithoutUserInput[]
    createMany?: UserLessonCreateManyUserInputEnvelope
    connect?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
  }

  export type QuizResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizResultCreateWithoutUserInput, QuizResultUncheckedCreateWithoutUserInput> | QuizResultCreateWithoutUserInput[] | QuizResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizResultCreateOrConnectWithoutUserInput | QuizResultCreateOrConnectWithoutUserInput[]
    createMany?: QuizResultCreateManyUserInputEnvelope
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
  }

  export type SuivreCoursUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SuivreCoursCreateWithoutUserInput, SuivreCoursUncheckedCreateWithoutUserInput> | SuivreCoursCreateWithoutUserInput[] | SuivreCoursUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuivreCoursCreateOrConnectWithoutUserInput | SuivreCoursCreateOrConnectWithoutUserInput[]
    createMany?: SuivreCoursCreateManyUserInputEnvelope
    connect?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
  }

  export type ParticipationVisioUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<ParticipationVisioCreateWithoutUtilisateurInput, ParticipationVisioUncheckedCreateWithoutUtilisateurInput> | ParticipationVisioCreateWithoutUtilisateurInput[] | ParticipationVisioUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ParticipationVisioCreateOrConnectWithoutUtilisateurInput | ParticipationVisioCreateOrConnectWithoutUtilisateurInput[]
    createMany?: ParticipationVisioCreateManyUtilisateurInputEnvelope
    connect?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
  }

  export type VisioSessionUncheckedCreateNestedManyWithoutFormateurInput = {
    create?: XOR<VisioSessionCreateWithoutFormateurInput, VisioSessionUncheckedCreateWithoutFormateurInput> | VisioSessionCreateWithoutFormateurInput[] | VisioSessionUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: VisioSessionCreateOrConnectWithoutFormateurInput | VisioSessionCreateOrConnectWithoutFormateurInput[]
    createMany?: VisioSessionCreateManyFormateurInputEnvelope
    connect?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CoursUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoursCreateWithoutUserInput, CoursUncheckedCreateWithoutUserInput> | CoursCreateWithoutUserInput[] | CoursUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutUserInput | CoursCreateOrConnectWithoutUserInput[]
    upsert?: CoursUpsertWithWhereUniqueWithoutUserInput | CoursUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoursCreateManyUserInputEnvelope
    set?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    disconnect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    delete?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    update?: CoursUpdateWithWhereUniqueWithoutUserInput | CoursUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoursUpdateManyWithWhereWithoutUserInput | CoursUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoursScalarWhereInput | CoursScalarWhereInput[]
  }

  export type UserLessonUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLessonCreateWithoutUserInput, UserLessonUncheckedCreateWithoutUserInput> | UserLessonCreateWithoutUserInput[] | UserLessonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLessonCreateOrConnectWithoutUserInput | UserLessonCreateOrConnectWithoutUserInput[]
    upsert?: UserLessonUpsertWithWhereUniqueWithoutUserInput | UserLessonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLessonCreateManyUserInputEnvelope
    set?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    disconnect?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    delete?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    connect?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    update?: UserLessonUpdateWithWhereUniqueWithoutUserInput | UserLessonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLessonUpdateManyWithWhereWithoutUserInput | UserLessonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLessonScalarWhereInput | UserLessonScalarWhereInput[]
  }

  export type QuizResultUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizResultCreateWithoutUserInput, QuizResultUncheckedCreateWithoutUserInput> | QuizResultCreateWithoutUserInput[] | QuizResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizResultCreateOrConnectWithoutUserInput | QuizResultCreateOrConnectWithoutUserInput[]
    upsert?: QuizResultUpsertWithWhereUniqueWithoutUserInput | QuizResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizResultCreateManyUserInputEnvelope
    set?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    disconnect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    delete?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    update?: QuizResultUpdateWithWhereUniqueWithoutUserInput | QuizResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizResultUpdateManyWithWhereWithoutUserInput | QuizResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[]
  }

  export type SuivreCoursUpdateManyWithoutUserNestedInput = {
    create?: XOR<SuivreCoursCreateWithoutUserInput, SuivreCoursUncheckedCreateWithoutUserInput> | SuivreCoursCreateWithoutUserInput[] | SuivreCoursUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuivreCoursCreateOrConnectWithoutUserInput | SuivreCoursCreateOrConnectWithoutUserInput[]
    upsert?: SuivreCoursUpsertWithWhereUniqueWithoutUserInput | SuivreCoursUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SuivreCoursCreateManyUserInputEnvelope
    set?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    disconnect?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    delete?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    connect?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    update?: SuivreCoursUpdateWithWhereUniqueWithoutUserInput | SuivreCoursUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SuivreCoursUpdateManyWithWhereWithoutUserInput | SuivreCoursUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SuivreCoursScalarWhereInput | SuivreCoursScalarWhereInput[]
  }

  export type ParticipationVisioUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<ParticipationVisioCreateWithoutUtilisateurInput, ParticipationVisioUncheckedCreateWithoutUtilisateurInput> | ParticipationVisioCreateWithoutUtilisateurInput[] | ParticipationVisioUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ParticipationVisioCreateOrConnectWithoutUtilisateurInput | ParticipationVisioCreateOrConnectWithoutUtilisateurInput[]
    upsert?: ParticipationVisioUpsertWithWhereUniqueWithoutUtilisateurInput | ParticipationVisioUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: ParticipationVisioCreateManyUtilisateurInputEnvelope
    set?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    disconnect?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    delete?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    connect?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    update?: ParticipationVisioUpdateWithWhereUniqueWithoutUtilisateurInput | ParticipationVisioUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: ParticipationVisioUpdateManyWithWhereWithoutUtilisateurInput | ParticipationVisioUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: ParticipationVisioScalarWhereInput | ParticipationVisioScalarWhereInput[]
  }

  export type VisioSessionUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<VisioSessionCreateWithoutFormateurInput, VisioSessionUncheckedCreateWithoutFormateurInput> | VisioSessionCreateWithoutFormateurInput[] | VisioSessionUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: VisioSessionCreateOrConnectWithoutFormateurInput | VisioSessionCreateOrConnectWithoutFormateurInput[]
    upsert?: VisioSessionUpsertWithWhereUniqueWithoutFormateurInput | VisioSessionUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: VisioSessionCreateManyFormateurInputEnvelope
    set?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    disconnect?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    delete?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    connect?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    update?: VisioSessionUpdateWithWhereUniqueWithoutFormateurInput | VisioSessionUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: VisioSessionUpdateManyWithWhereWithoutFormateurInput | VisioSessionUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: VisioSessionScalarWhereInput | VisioSessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CoursUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoursCreateWithoutUserInput, CoursUncheckedCreateWithoutUserInput> | CoursCreateWithoutUserInput[] | CoursUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutUserInput | CoursCreateOrConnectWithoutUserInput[]
    upsert?: CoursUpsertWithWhereUniqueWithoutUserInput | CoursUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoursCreateManyUserInputEnvelope
    set?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    disconnect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    delete?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    update?: CoursUpdateWithWhereUniqueWithoutUserInput | CoursUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoursUpdateManyWithWhereWithoutUserInput | CoursUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoursScalarWhereInput | CoursScalarWhereInput[]
  }

  export type UserLessonUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLessonCreateWithoutUserInput, UserLessonUncheckedCreateWithoutUserInput> | UserLessonCreateWithoutUserInput[] | UserLessonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLessonCreateOrConnectWithoutUserInput | UserLessonCreateOrConnectWithoutUserInput[]
    upsert?: UserLessonUpsertWithWhereUniqueWithoutUserInput | UserLessonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLessonCreateManyUserInputEnvelope
    set?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    disconnect?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    delete?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    connect?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    update?: UserLessonUpdateWithWhereUniqueWithoutUserInput | UserLessonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLessonUpdateManyWithWhereWithoutUserInput | UserLessonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLessonScalarWhereInput | UserLessonScalarWhereInput[]
  }

  export type QuizResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizResultCreateWithoutUserInput, QuizResultUncheckedCreateWithoutUserInput> | QuizResultCreateWithoutUserInput[] | QuizResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizResultCreateOrConnectWithoutUserInput | QuizResultCreateOrConnectWithoutUserInput[]
    upsert?: QuizResultUpsertWithWhereUniqueWithoutUserInput | QuizResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizResultCreateManyUserInputEnvelope
    set?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    disconnect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    delete?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    update?: QuizResultUpdateWithWhereUniqueWithoutUserInput | QuizResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizResultUpdateManyWithWhereWithoutUserInput | QuizResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[]
  }

  export type SuivreCoursUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SuivreCoursCreateWithoutUserInput, SuivreCoursUncheckedCreateWithoutUserInput> | SuivreCoursCreateWithoutUserInput[] | SuivreCoursUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuivreCoursCreateOrConnectWithoutUserInput | SuivreCoursCreateOrConnectWithoutUserInput[]
    upsert?: SuivreCoursUpsertWithWhereUniqueWithoutUserInput | SuivreCoursUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SuivreCoursCreateManyUserInputEnvelope
    set?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    disconnect?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    delete?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    connect?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    update?: SuivreCoursUpdateWithWhereUniqueWithoutUserInput | SuivreCoursUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SuivreCoursUpdateManyWithWhereWithoutUserInput | SuivreCoursUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SuivreCoursScalarWhereInput | SuivreCoursScalarWhereInput[]
  }

  export type ParticipationVisioUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<ParticipationVisioCreateWithoutUtilisateurInput, ParticipationVisioUncheckedCreateWithoutUtilisateurInput> | ParticipationVisioCreateWithoutUtilisateurInput[] | ParticipationVisioUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ParticipationVisioCreateOrConnectWithoutUtilisateurInput | ParticipationVisioCreateOrConnectWithoutUtilisateurInput[]
    upsert?: ParticipationVisioUpsertWithWhereUniqueWithoutUtilisateurInput | ParticipationVisioUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: ParticipationVisioCreateManyUtilisateurInputEnvelope
    set?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    disconnect?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    delete?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    connect?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    update?: ParticipationVisioUpdateWithWhereUniqueWithoutUtilisateurInput | ParticipationVisioUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: ParticipationVisioUpdateManyWithWhereWithoutUtilisateurInput | ParticipationVisioUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: ParticipationVisioScalarWhereInput | ParticipationVisioScalarWhereInput[]
  }

  export type VisioSessionUncheckedUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<VisioSessionCreateWithoutFormateurInput, VisioSessionUncheckedCreateWithoutFormateurInput> | VisioSessionCreateWithoutFormateurInput[] | VisioSessionUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: VisioSessionCreateOrConnectWithoutFormateurInput | VisioSessionCreateOrConnectWithoutFormateurInput[]
    upsert?: VisioSessionUpsertWithWhereUniqueWithoutFormateurInput | VisioSessionUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: VisioSessionCreateManyFormateurInputEnvelope
    set?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    disconnect?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    delete?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    connect?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    update?: VisioSessionUpdateWithWhereUniqueWithoutFormateurInput | VisioSessionUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: VisioSessionUpdateManyWithWhereWithoutFormateurInput | VisioSessionUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: VisioSessionScalarWhereInput | VisioSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCoursInput = {
    create?: XOR<UserCreateWithoutCoursInput, UserUncheckedCreateWithoutCoursInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedManyWithoutCoursInput = {
    create?: XOR<LessonCreateWithoutCoursInput, LessonUncheckedCreateWithoutCoursInput> | LessonCreateWithoutCoursInput[] | LessonUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCoursInput | LessonCreateOrConnectWithoutCoursInput[]
    createMany?: LessonCreateManyCoursInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutCoursInput = {
    create?: XOR<QuizCreateWithoutCoursInput, QuizUncheckedCreateWithoutCoursInput> | QuizCreateWithoutCoursInput[] | QuizUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCoursInput | QuizCreateOrConnectWithoutCoursInput[]
    createMany?: QuizCreateManyCoursInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type VisioSessionCreateNestedManyWithoutCoursInput = {
    create?: XOR<VisioSessionCreateWithoutCoursInput, VisioSessionUncheckedCreateWithoutCoursInput> | VisioSessionCreateWithoutCoursInput[] | VisioSessionUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: VisioSessionCreateOrConnectWithoutCoursInput | VisioSessionCreateOrConnectWithoutCoursInput[]
    createMany?: VisioSessionCreateManyCoursInputEnvelope
    connect?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
  }

  export type SuivreCoursCreateNestedManyWithoutCoursInput = {
    create?: XOR<SuivreCoursCreateWithoutCoursInput, SuivreCoursUncheckedCreateWithoutCoursInput> | SuivreCoursCreateWithoutCoursInput[] | SuivreCoursUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: SuivreCoursCreateOrConnectWithoutCoursInput | SuivreCoursCreateOrConnectWithoutCoursInput[]
    createMany?: SuivreCoursCreateManyCoursInputEnvelope
    connect?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutCoursInput = {
    create?: XOR<CategoryCreateWithoutCoursInput, CategoryUncheckedCreateWithoutCoursInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCoursInput
    connect?: CategoryWhereUniqueInput
  }

  export type LessonUncheckedCreateNestedManyWithoutCoursInput = {
    create?: XOR<LessonCreateWithoutCoursInput, LessonUncheckedCreateWithoutCoursInput> | LessonCreateWithoutCoursInput[] | LessonUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCoursInput | LessonCreateOrConnectWithoutCoursInput[]
    createMany?: LessonCreateManyCoursInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutCoursInput = {
    create?: XOR<QuizCreateWithoutCoursInput, QuizUncheckedCreateWithoutCoursInput> | QuizCreateWithoutCoursInput[] | QuizUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCoursInput | QuizCreateOrConnectWithoutCoursInput[]
    createMany?: QuizCreateManyCoursInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type VisioSessionUncheckedCreateNestedManyWithoutCoursInput = {
    create?: XOR<VisioSessionCreateWithoutCoursInput, VisioSessionUncheckedCreateWithoutCoursInput> | VisioSessionCreateWithoutCoursInput[] | VisioSessionUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: VisioSessionCreateOrConnectWithoutCoursInput | VisioSessionCreateOrConnectWithoutCoursInput[]
    createMany?: VisioSessionCreateManyCoursInputEnvelope
    connect?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
  }

  export type SuivreCoursUncheckedCreateNestedManyWithoutCoursInput = {
    create?: XOR<SuivreCoursCreateWithoutCoursInput, SuivreCoursUncheckedCreateWithoutCoursInput> | SuivreCoursCreateWithoutCoursInput[] | SuivreCoursUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: SuivreCoursCreateOrConnectWithoutCoursInput | SuivreCoursCreateOrConnectWithoutCoursInput[]
    createMany?: SuivreCoursCreateManyCoursInputEnvelope
    connect?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutCoursNestedInput = {
    create?: XOR<UserCreateWithoutCoursInput, UserUncheckedCreateWithoutCoursInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursInput
    upsert?: UserUpsertWithoutCoursInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursInput, UserUpdateWithoutCoursInput>, UserUncheckedUpdateWithoutCoursInput>
  }

  export type LessonUpdateManyWithoutCoursNestedInput = {
    create?: XOR<LessonCreateWithoutCoursInput, LessonUncheckedCreateWithoutCoursInput> | LessonCreateWithoutCoursInput[] | LessonUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCoursInput | LessonCreateOrConnectWithoutCoursInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCoursInput | LessonUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: LessonCreateManyCoursInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCoursInput | LessonUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCoursInput | LessonUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutCoursNestedInput = {
    create?: XOR<QuizCreateWithoutCoursInput, QuizUncheckedCreateWithoutCoursInput> | QuizCreateWithoutCoursInput[] | QuizUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCoursInput | QuizCreateOrConnectWithoutCoursInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCoursInput | QuizUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: QuizCreateManyCoursInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCoursInput | QuizUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCoursInput | QuizUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type VisioSessionUpdateManyWithoutCoursNestedInput = {
    create?: XOR<VisioSessionCreateWithoutCoursInput, VisioSessionUncheckedCreateWithoutCoursInput> | VisioSessionCreateWithoutCoursInput[] | VisioSessionUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: VisioSessionCreateOrConnectWithoutCoursInput | VisioSessionCreateOrConnectWithoutCoursInput[]
    upsert?: VisioSessionUpsertWithWhereUniqueWithoutCoursInput | VisioSessionUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: VisioSessionCreateManyCoursInputEnvelope
    set?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    disconnect?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    delete?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    connect?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    update?: VisioSessionUpdateWithWhereUniqueWithoutCoursInput | VisioSessionUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: VisioSessionUpdateManyWithWhereWithoutCoursInput | VisioSessionUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: VisioSessionScalarWhereInput | VisioSessionScalarWhereInput[]
  }

  export type SuivreCoursUpdateManyWithoutCoursNestedInput = {
    create?: XOR<SuivreCoursCreateWithoutCoursInput, SuivreCoursUncheckedCreateWithoutCoursInput> | SuivreCoursCreateWithoutCoursInput[] | SuivreCoursUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: SuivreCoursCreateOrConnectWithoutCoursInput | SuivreCoursCreateOrConnectWithoutCoursInput[]
    upsert?: SuivreCoursUpsertWithWhereUniqueWithoutCoursInput | SuivreCoursUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: SuivreCoursCreateManyCoursInputEnvelope
    set?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    disconnect?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    delete?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    connect?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    update?: SuivreCoursUpdateWithWhereUniqueWithoutCoursInput | SuivreCoursUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: SuivreCoursUpdateManyWithWhereWithoutCoursInput | SuivreCoursUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: SuivreCoursScalarWhereInput | SuivreCoursScalarWhereInput[]
  }

  export type CategoryUpdateOneWithoutCoursNestedInput = {
    create?: XOR<CategoryCreateWithoutCoursInput, CategoryUncheckedCreateWithoutCoursInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCoursInput
    upsert?: CategoryUpsertWithoutCoursInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCoursInput, CategoryUpdateWithoutCoursInput>, CategoryUncheckedUpdateWithoutCoursInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LessonUncheckedUpdateManyWithoutCoursNestedInput = {
    create?: XOR<LessonCreateWithoutCoursInput, LessonUncheckedCreateWithoutCoursInput> | LessonCreateWithoutCoursInput[] | LessonUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCoursInput | LessonCreateOrConnectWithoutCoursInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCoursInput | LessonUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: LessonCreateManyCoursInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCoursInput | LessonUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCoursInput | LessonUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutCoursNestedInput = {
    create?: XOR<QuizCreateWithoutCoursInput, QuizUncheckedCreateWithoutCoursInput> | QuizCreateWithoutCoursInput[] | QuizUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCoursInput | QuizCreateOrConnectWithoutCoursInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCoursInput | QuizUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: QuizCreateManyCoursInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCoursInput | QuizUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCoursInput | QuizUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type VisioSessionUncheckedUpdateManyWithoutCoursNestedInput = {
    create?: XOR<VisioSessionCreateWithoutCoursInput, VisioSessionUncheckedCreateWithoutCoursInput> | VisioSessionCreateWithoutCoursInput[] | VisioSessionUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: VisioSessionCreateOrConnectWithoutCoursInput | VisioSessionCreateOrConnectWithoutCoursInput[]
    upsert?: VisioSessionUpsertWithWhereUniqueWithoutCoursInput | VisioSessionUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: VisioSessionCreateManyCoursInputEnvelope
    set?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    disconnect?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    delete?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    connect?: VisioSessionWhereUniqueInput | VisioSessionWhereUniqueInput[]
    update?: VisioSessionUpdateWithWhereUniqueWithoutCoursInput | VisioSessionUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: VisioSessionUpdateManyWithWhereWithoutCoursInput | VisioSessionUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: VisioSessionScalarWhereInput | VisioSessionScalarWhereInput[]
  }

  export type SuivreCoursUncheckedUpdateManyWithoutCoursNestedInput = {
    create?: XOR<SuivreCoursCreateWithoutCoursInput, SuivreCoursUncheckedCreateWithoutCoursInput> | SuivreCoursCreateWithoutCoursInput[] | SuivreCoursUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: SuivreCoursCreateOrConnectWithoutCoursInput | SuivreCoursCreateOrConnectWithoutCoursInput[]
    upsert?: SuivreCoursUpsertWithWhereUniqueWithoutCoursInput | SuivreCoursUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: SuivreCoursCreateManyCoursInputEnvelope
    set?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    disconnect?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    delete?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    connect?: SuivreCoursWhereUniqueInput | SuivreCoursWhereUniqueInput[]
    update?: SuivreCoursUpdateWithWhereUniqueWithoutCoursInput | SuivreCoursUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: SuivreCoursUpdateManyWithWhereWithoutCoursInput | SuivreCoursUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: SuivreCoursScalarWhereInput | SuivreCoursScalarWhereInput[]
  }

  export type CoursCreateNestedOneWithoutLessonsInput = {
    create?: XOR<CoursCreateWithoutLessonsInput, CoursUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CoursCreateOrConnectWithoutLessonsInput
    connect?: CoursWhereUniqueInput
  }

  export type UserLessonCreateNestedManyWithoutLessonInput = {
    create?: XOR<UserLessonCreateWithoutLessonInput, UserLessonUncheckedCreateWithoutLessonInput> | UserLessonCreateWithoutLessonInput[] | UserLessonUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: UserLessonCreateOrConnectWithoutLessonInput | UserLessonCreateOrConnectWithoutLessonInput[]
    createMany?: UserLessonCreateManyLessonInputEnvelope
    connect?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
  }

  export type UserLessonUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<UserLessonCreateWithoutLessonInput, UserLessonUncheckedCreateWithoutLessonInput> | UserLessonCreateWithoutLessonInput[] | UserLessonUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: UserLessonCreateOrConnectWithoutLessonInput | UserLessonCreateOrConnectWithoutLessonInput[]
    createMany?: UserLessonCreateManyLessonInputEnvelope
    connect?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
  }

  export type CoursUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<CoursCreateWithoutLessonsInput, CoursUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CoursCreateOrConnectWithoutLessonsInput
    upsert?: CoursUpsertWithoutLessonsInput
    connect?: CoursWhereUniqueInput
    update?: XOR<XOR<CoursUpdateToOneWithWhereWithoutLessonsInput, CoursUpdateWithoutLessonsInput>, CoursUncheckedUpdateWithoutLessonsInput>
  }

  export type UserLessonUpdateManyWithoutLessonNestedInput = {
    create?: XOR<UserLessonCreateWithoutLessonInput, UserLessonUncheckedCreateWithoutLessonInput> | UserLessonCreateWithoutLessonInput[] | UserLessonUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: UserLessonCreateOrConnectWithoutLessonInput | UserLessonCreateOrConnectWithoutLessonInput[]
    upsert?: UserLessonUpsertWithWhereUniqueWithoutLessonInput | UserLessonUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: UserLessonCreateManyLessonInputEnvelope
    set?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    disconnect?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    delete?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    connect?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    update?: UserLessonUpdateWithWhereUniqueWithoutLessonInput | UserLessonUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: UserLessonUpdateManyWithWhereWithoutLessonInput | UserLessonUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: UserLessonScalarWhereInput | UserLessonScalarWhereInput[]
  }

  export type UserLessonUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<UserLessonCreateWithoutLessonInput, UserLessonUncheckedCreateWithoutLessonInput> | UserLessonCreateWithoutLessonInput[] | UserLessonUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: UserLessonCreateOrConnectWithoutLessonInput | UserLessonCreateOrConnectWithoutLessonInput[]
    upsert?: UserLessonUpsertWithWhereUniqueWithoutLessonInput | UserLessonUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: UserLessonCreateManyLessonInputEnvelope
    set?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    disconnect?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    delete?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    connect?: UserLessonWhereUniqueInput | UserLessonWhereUniqueInput[]
    update?: UserLessonUpdateWithWhereUniqueWithoutLessonInput | UserLessonUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: UserLessonUpdateManyWithWhereWithoutLessonInput | UserLessonUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: UserLessonScalarWhereInput | UserLessonScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSuivisInput = {
    create?: XOR<UserCreateWithoutSuivisInput, UserUncheckedCreateWithoutSuivisInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuivisInput
    connect?: UserWhereUniqueInput
  }

  export type CoursCreateNestedOneWithoutSuivisInput = {
    create?: XOR<CoursCreateWithoutSuivisInput, CoursUncheckedCreateWithoutSuivisInput>
    connectOrCreate?: CoursCreateOrConnectWithoutSuivisInput
    connect?: CoursWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSuivisNestedInput = {
    create?: XOR<UserCreateWithoutSuivisInput, UserUncheckedCreateWithoutSuivisInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuivisInput
    upsert?: UserUpsertWithoutSuivisInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSuivisInput, UserUpdateWithoutSuivisInput>, UserUncheckedUpdateWithoutSuivisInput>
  }

  export type CoursUpdateOneRequiredWithoutSuivisNestedInput = {
    create?: XOR<CoursCreateWithoutSuivisInput, CoursUncheckedCreateWithoutSuivisInput>
    connectOrCreate?: CoursCreateOrConnectWithoutSuivisInput
    upsert?: CoursUpsertWithoutSuivisInput
    connect?: CoursWhereUniqueInput
    update?: XOR<XOR<CoursUpdateToOneWithWhereWithoutSuivisInput, CoursUpdateWithoutSuivisInput>, CoursUncheckedUpdateWithoutSuivisInput>
  }

  export type UserCreateNestedOneWithoutUserLessonsInput = {
    create?: XOR<UserCreateWithoutUserLessonsInput, UserUncheckedCreateWithoutUserLessonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserLessonsInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutUserLessonsInput = {
    create?: XOR<LessonCreateWithoutUserLessonsInput, LessonUncheckedCreateWithoutUserLessonsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutUserLessonsInput
    connect?: LessonWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserLessonsNestedInput = {
    create?: XOR<UserCreateWithoutUserLessonsInput, UserUncheckedCreateWithoutUserLessonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserLessonsInput
    upsert?: UserUpsertWithoutUserLessonsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserLessonsInput, UserUpdateWithoutUserLessonsInput>, UserUncheckedUpdateWithoutUserLessonsInput>
  }

  export type LessonUpdateOneRequiredWithoutUserLessonsNestedInput = {
    create?: XOR<LessonCreateWithoutUserLessonsInput, LessonUncheckedCreateWithoutUserLessonsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutUserLessonsInput
    upsert?: LessonUpsertWithoutUserLessonsInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutUserLessonsInput, LessonUpdateWithoutUserLessonsInput>, LessonUncheckedUpdateWithoutUserLessonsInput>
  }

  export type CoursCreateNestedOneWithoutQuizInput = {
    create?: XOR<CoursCreateWithoutQuizInput, CoursUncheckedCreateWithoutQuizInput>
    connectOrCreate?: CoursCreateOrConnectWithoutQuizInput
    connect?: CoursWhereUniqueInput
  }

  export type QuizQuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizQuestionCreateWithoutQuizInput, QuizQuestionUncheckedCreateWithoutQuizInput> | QuizQuestionCreateWithoutQuizInput[] | QuizQuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutQuizInput | QuizQuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuizQuestionCreateManyQuizInputEnvelope
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
  }

  export type QuizResultCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizResultCreateWithoutQuizInput, QuizResultUncheckedCreateWithoutQuizInput> | QuizResultCreateWithoutQuizInput[] | QuizResultUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizResultCreateOrConnectWithoutQuizInput | QuizResultCreateOrConnectWithoutQuizInput[]
    createMany?: QuizResultCreateManyQuizInputEnvelope
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
  }

  export type QuizQuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizQuestionCreateWithoutQuizInput, QuizQuestionUncheckedCreateWithoutQuizInput> | QuizQuestionCreateWithoutQuizInput[] | QuizQuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutQuizInput | QuizQuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuizQuestionCreateManyQuizInputEnvelope
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
  }

  export type QuizResultUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizResultCreateWithoutQuizInput, QuizResultUncheckedCreateWithoutQuizInput> | QuizResultCreateWithoutQuizInput[] | QuizResultUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizResultCreateOrConnectWithoutQuizInput | QuizResultCreateOrConnectWithoutQuizInput[]
    createMany?: QuizResultCreateManyQuizInputEnvelope
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
  }

  export type CoursUpdateOneRequiredWithoutQuizNestedInput = {
    create?: XOR<CoursCreateWithoutQuizInput, CoursUncheckedCreateWithoutQuizInput>
    connectOrCreate?: CoursCreateOrConnectWithoutQuizInput
    upsert?: CoursUpsertWithoutQuizInput
    connect?: CoursWhereUniqueInput
    update?: XOR<XOR<CoursUpdateToOneWithWhereWithoutQuizInput, CoursUpdateWithoutQuizInput>, CoursUncheckedUpdateWithoutQuizInput>
  }

  export type QuizQuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutQuizInput, QuizQuestionUncheckedCreateWithoutQuizInput> | QuizQuestionCreateWithoutQuizInput[] | QuizQuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutQuizInput | QuizQuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuizQuestionUpsertWithWhereUniqueWithoutQuizInput | QuizQuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizQuestionCreateManyQuizInputEnvelope
    set?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    disconnect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    delete?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    update?: QuizQuestionUpdateWithWhereUniqueWithoutQuizInput | QuizQuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizQuestionUpdateManyWithWhereWithoutQuizInput | QuizQuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
  }

  export type QuizResultUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizResultCreateWithoutQuizInput, QuizResultUncheckedCreateWithoutQuizInput> | QuizResultCreateWithoutQuizInput[] | QuizResultUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizResultCreateOrConnectWithoutQuizInput | QuizResultCreateOrConnectWithoutQuizInput[]
    upsert?: QuizResultUpsertWithWhereUniqueWithoutQuizInput | QuizResultUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizResultCreateManyQuizInputEnvelope
    set?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    disconnect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    delete?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    update?: QuizResultUpdateWithWhereUniqueWithoutQuizInput | QuizResultUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizResultUpdateManyWithWhereWithoutQuizInput | QuizResultUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[]
  }

  export type QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutQuizInput, QuizQuestionUncheckedCreateWithoutQuizInput> | QuizQuestionCreateWithoutQuizInput[] | QuizQuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutQuizInput | QuizQuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuizQuestionUpsertWithWhereUniqueWithoutQuizInput | QuizQuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizQuestionCreateManyQuizInputEnvelope
    set?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    disconnect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    delete?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    update?: QuizQuestionUpdateWithWhereUniqueWithoutQuizInput | QuizQuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizQuestionUpdateManyWithWhereWithoutQuizInput | QuizQuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
  }

  export type QuizResultUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizResultCreateWithoutQuizInput, QuizResultUncheckedCreateWithoutQuizInput> | QuizResultCreateWithoutQuizInput[] | QuizResultUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizResultCreateOrConnectWithoutQuizInput | QuizResultCreateOrConnectWithoutQuizInput[]
    upsert?: QuizResultUpsertWithWhereUniqueWithoutQuizInput | QuizResultUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizResultCreateManyQuizInputEnvelope
    set?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    disconnect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    delete?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    update?: QuizResultUpdateWithWhereUniqueWithoutQuizInput | QuizResultUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizResultUpdateManyWithWhereWithoutQuizInput | QuizResultUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
  }

  export type QuizOptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput> | QuizOptionCreateWithoutQuestionInput[] | QuizOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizOptionCreateOrConnectWithoutQuestionInput | QuizOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuizOptionCreateManyQuestionInputEnvelope
    connect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
  }

  export type QuizOptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput> | QuizOptionCreateWithoutQuestionInput[] | QuizOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizOptionCreateOrConnectWithoutQuestionInput | QuizOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuizOptionCreateManyQuestionInputEnvelope
    connect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
  }

  export type QuizUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    upsert?: QuizUpsertWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionsInput, QuizUpdateWithoutQuestionsInput>, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizOptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput> | QuizOptionCreateWithoutQuestionInput[] | QuizOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizOptionCreateOrConnectWithoutQuestionInput | QuizOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuizOptionUpsertWithWhereUniqueWithoutQuestionInput | QuizOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuizOptionCreateManyQuestionInputEnvelope
    set?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    disconnect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    delete?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    connect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    update?: QuizOptionUpdateWithWhereUniqueWithoutQuestionInput | QuizOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuizOptionUpdateManyWithWhereWithoutQuestionInput | QuizOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuizOptionScalarWhereInput | QuizOptionScalarWhereInput[]
  }

  export type QuizOptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput> | QuizOptionCreateWithoutQuestionInput[] | QuizOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizOptionCreateOrConnectWithoutQuestionInput | QuizOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuizOptionUpsertWithWhereUniqueWithoutQuestionInput | QuizOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuizOptionCreateManyQuestionInputEnvelope
    set?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    disconnect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    delete?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    connect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    update?: QuizOptionUpdateWithWhereUniqueWithoutQuestionInput | QuizOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuizOptionUpdateManyWithWhereWithoutQuestionInput | QuizOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuizOptionScalarWhereInput | QuizOptionScalarWhereInput[]
  }

  export type QuizQuestionCreateNestedOneWithoutOptionsInput = {
    create?: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutOptionsInput
    connect?: QuizQuestionWhereUniqueInput
  }

  export type QuizQuestionUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutOptionsInput
    upsert?: QuizQuestionUpsertWithoutOptionsInput
    connect?: QuizQuestionWhereUniqueInput
    update?: XOR<XOR<QuizQuestionUpdateToOneWithWhereWithoutOptionsInput, QuizQuestionUpdateWithoutOptionsInput>, QuizQuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type UserCreateNestedOneWithoutQuizResultsInput = {
    create?: XOR<UserCreateWithoutQuizResultsInput, UserUncheckedCreateWithoutQuizResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizResultsInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutResultsInput = {
    create?: XOR<QuizCreateWithoutResultsInput, QuizUncheckedCreateWithoutResultsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutResultsInput
    connect?: QuizWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutQuizResultsNestedInput = {
    create?: XOR<UserCreateWithoutQuizResultsInput, UserUncheckedCreateWithoutQuizResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizResultsInput
    upsert?: UserUpsertWithoutQuizResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizResultsInput, UserUpdateWithoutQuizResultsInput>, UserUncheckedUpdateWithoutQuizResultsInput>
  }

  export type QuizUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<QuizCreateWithoutResultsInput, QuizUncheckedCreateWithoutResultsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutResultsInput
    upsert?: QuizUpsertWithoutResultsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutResultsInput, QuizUpdateWithoutResultsInput>, QuizUncheckedUpdateWithoutResultsInput>
  }

  export type CoursCreateNestedOneWithoutVisiosInput = {
    create?: XOR<CoursCreateWithoutVisiosInput, CoursUncheckedCreateWithoutVisiosInput>
    connectOrCreate?: CoursCreateOrConnectWithoutVisiosInput
    connect?: CoursWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVisiosEnTantQueFormateurInput = {
    create?: XOR<UserCreateWithoutVisiosEnTantQueFormateurInput, UserUncheckedCreateWithoutVisiosEnTantQueFormateurInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisiosEnTantQueFormateurInput
    connect?: UserWhereUniqueInput
  }

  export type ParticipationVisioCreateNestedManyWithoutVisioInput = {
    create?: XOR<ParticipationVisioCreateWithoutVisioInput, ParticipationVisioUncheckedCreateWithoutVisioInput> | ParticipationVisioCreateWithoutVisioInput[] | ParticipationVisioUncheckedCreateWithoutVisioInput[]
    connectOrCreate?: ParticipationVisioCreateOrConnectWithoutVisioInput | ParticipationVisioCreateOrConnectWithoutVisioInput[]
    createMany?: ParticipationVisioCreateManyVisioInputEnvelope
    connect?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
  }

  export type ParticipationVisioUncheckedCreateNestedManyWithoutVisioInput = {
    create?: XOR<ParticipationVisioCreateWithoutVisioInput, ParticipationVisioUncheckedCreateWithoutVisioInput> | ParticipationVisioCreateWithoutVisioInput[] | ParticipationVisioUncheckedCreateWithoutVisioInput[]
    connectOrCreate?: ParticipationVisioCreateOrConnectWithoutVisioInput | ParticipationVisioCreateOrConnectWithoutVisioInput[]
    createMany?: ParticipationVisioCreateManyVisioInputEnvelope
    connect?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
  }

  export type CoursUpdateOneRequiredWithoutVisiosNestedInput = {
    create?: XOR<CoursCreateWithoutVisiosInput, CoursUncheckedCreateWithoutVisiosInput>
    connectOrCreate?: CoursCreateOrConnectWithoutVisiosInput
    upsert?: CoursUpsertWithoutVisiosInput
    connect?: CoursWhereUniqueInput
    update?: XOR<XOR<CoursUpdateToOneWithWhereWithoutVisiosInput, CoursUpdateWithoutVisiosInput>, CoursUncheckedUpdateWithoutVisiosInput>
  }

  export type UserUpdateOneRequiredWithoutVisiosEnTantQueFormateurNestedInput = {
    create?: XOR<UserCreateWithoutVisiosEnTantQueFormateurInput, UserUncheckedCreateWithoutVisiosEnTantQueFormateurInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisiosEnTantQueFormateurInput
    upsert?: UserUpsertWithoutVisiosEnTantQueFormateurInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVisiosEnTantQueFormateurInput, UserUpdateWithoutVisiosEnTantQueFormateurInput>, UserUncheckedUpdateWithoutVisiosEnTantQueFormateurInput>
  }

  export type ParticipationVisioUpdateManyWithoutVisioNestedInput = {
    create?: XOR<ParticipationVisioCreateWithoutVisioInput, ParticipationVisioUncheckedCreateWithoutVisioInput> | ParticipationVisioCreateWithoutVisioInput[] | ParticipationVisioUncheckedCreateWithoutVisioInput[]
    connectOrCreate?: ParticipationVisioCreateOrConnectWithoutVisioInput | ParticipationVisioCreateOrConnectWithoutVisioInput[]
    upsert?: ParticipationVisioUpsertWithWhereUniqueWithoutVisioInput | ParticipationVisioUpsertWithWhereUniqueWithoutVisioInput[]
    createMany?: ParticipationVisioCreateManyVisioInputEnvelope
    set?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    disconnect?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    delete?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    connect?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    update?: ParticipationVisioUpdateWithWhereUniqueWithoutVisioInput | ParticipationVisioUpdateWithWhereUniqueWithoutVisioInput[]
    updateMany?: ParticipationVisioUpdateManyWithWhereWithoutVisioInput | ParticipationVisioUpdateManyWithWhereWithoutVisioInput[]
    deleteMany?: ParticipationVisioScalarWhereInput | ParticipationVisioScalarWhereInput[]
  }

  export type ParticipationVisioUncheckedUpdateManyWithoutVisioNestedInput = {
    create?: XOR<ParticipationVisioCreateWithoutVisioInput, ParticipationVisioUncheckedCreateWithoutVisioInput> | ParticipationVisioCreateWithoutVisioInput[] | ParticipationVisioUncheckedCreateWithoutVisioInput[]
    connectOrCreate?: ParticipationVisioCreateOrConnectWithoutVisioInput | ParticipationVisioCreateOrConnectWithoutVisioInput[]
    upsert?: ParticipationVisioUpsertWithWhereUniqueWithoutVisioInput | ParticipationVisioUpsertWithWhereUniqueWithoutVisioInput[]
    createMany?: ParticipationVisioCreateManyVisioInputEnvelope
    set?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    disconnect?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    delete?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    connect?: ParticipationVisioWhereUniqueInput | ParticipationVisioWhereUniqueInput[]
    update?: ParticipationVisioUpdateWithWhereUniqueWithoutVisioInput | ParticipationVisioUpdateWithWhereUniqueWithoutVisioInput[]
    updateMany?: ParticipationVisioUpdateManyWithWhereWithoutVisioInput | ParticipationVisioUpdateManyWithWhereWithoutVisioInput[]
    deleteMany?: ParticipationVisioScalarWhereInput | ParticipationVisioScalarWhereInput[]
  }

  export type VisioSessionCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<VisioSessionCreateWithoutParticipationsInput, VisioSessionUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: VisioSessionCreateOrConnectWithoutParticipationsInput
    connect?: VisioSessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    connect?: UserWhereUniqueInput
  }

  export type VisioSessionUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: XOR<VisioSessionCreateWithoutParticipationsInput, VisioSessionUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: VisioSessionCreateOrConnectWithoutParticipationsInput
    upsert?: VisioSessionUpsertWithoutParticipationsInput
    connect?: VisioSessionWhereUniqueInput
    update?: XOR<XOR<VisioSessionUpdateToOneWithWhereWithoutParticipationsInput, VisioSessionUpdateWithoutParticipationsInput>, VisioSessionUncheckedUpdateWithoutParticipationsInput>
  }

  export type UserUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    upsert?: UserUpsertWithoutParticipationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipationsInput, UserUpdateWithoutParticipationsInput>, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type CoursCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CoursCreateWithoutCategoryInput, CoursUncheckedCreateWithoutCategoryInput> | CoursCreateWithoutCategoryInput[] | CoursUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutCategoryInput | CoursCreateOrConnectWithoutCategoryInput[]
    createMany?: CoursCreateManyCategoryInputEnvelope
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
  }

  export type CoursUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CoursCreateWithoutCategoryInput, CoursUncheckedCreateWithoutCategoryInput> | CoursCreateWithoutCategoryInput[] | CoursUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutCategoryInput | CoursCreateOrConnectWithoutCategoryInput[]
    createMany?: CoursCreateManyCategoryInputEnvelope
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
  }

  export type CoursUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CoursCreateWithoutCategoryInput, CoursUncheckedCreateWithoutCategoryInput> | CoursCreateWithoutCategoryInput[] | CoursUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutCategoryInput | CoursCreateOrConnectWithoutCategoryInput[]
    upsert?: CoursUpsertWithWhereUniqueWithoutCategoryInput | CoursUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CoursCreateManyCategoryInputEnvelope
    set?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    disconnect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    delete?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    update?: CoursUpdateWithWhereUniqueWithoutCategoryInput | CoursUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CoursUpdateManyWithWhereWithoutCategoryInput | CoursUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CoursScalarWhereInput | CoursScalarWhereInput[]
  }

  export type CoursUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CoursCreateWithoutCategoryInput, CoursUncheckedCreateWithoutCategoryInput> | CoursCreateWithoutCategoryInput[] | CoursUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutCategoryInput | CoursCreateOrConnectWithoutCategoryInput[]
    upsert?: CoursUpsertWithWhereUniqueWithoutCategoryInput | CoursUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CoursCreateManyCategoryInputEnvelope
    set?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    disconnect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    delete?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    update?: CoursUpdateWithWhereUniqueWithoutCategoryInput | CoursUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CoursUpdateManyWithWhereWithoutCategoryInput | CoursUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CoursScalarWhereInput | CoursScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type CoursCreateWithoutUserInput = {
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCoursInput
    quiz?: QuizCreateNestedManyWithoutCoursInput
    visios?: VisioSessionCreateNestedManyWithoutCoursInput
    suivis?: SuivreCoursCreateNestedManyWithoutCoursInput
    category?: CategoryCreateNestedOneWithoutCoursInput
  }

  export type CoursUncheckedCreateWithoutUserInput = {
    id?: number
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: number | null
    lessons?: LessonUncheckedCreateNestedManyWithoutCoursInput
    quiz?: QuizUncheckedCreateNestedManyWithoutCoursInput
    visios?: VisioSessionUncheckedCreateNestedManyWithoutCoursInput
    suivis?: SuivreCoursUncheckedCreateNestedManyWithoutCoursInput
  }

  export type CoursCreateOrConnectWithoutUserInput = {
    where: CoursWhereUniqueInput
    create: XOR<CoursCreateWithoutUserInput, CoursUncheckedCreateWithoutUserInput>
  }

  export type CoursCreateManyUserInputEnvelope = {
    data: CoursCreateManyUserInput | CoursCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserLessonCreateWithoutUserInput = {
    isFinished?: boolean
    lesson: LessonCreateNestedOneWithoutUserLessonsInput
  }

  export type UserLessonUncheckedCreateWithoutUserInput = {
    id?: number
    lessonId: number
    isFinished?: boolean
  }

  export type UserLessonCreateOrConnectWithoutUserInput = {
    where: UserLessonWhereUniqueInput
    create: XOR<UserLessonCreateWithoutUserInput, UserLessonUncheckedCreateWithoutUserInput>
  }

  export type UserLessonCreateManyUserInputEnvelope = {
    data: UserLessonCreateManyUserInput | UserLessonCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuizResultCreateWithoutUserInput = {
    score: number
    attemptAt: Date | string
    quiz: QuizCreateNestedOneWithoutResultsInput
  }

  export type QuizResultUncheckedCreateWithoutUserInput = {
    id?: number
    quizId: number
    score: number
    attemptAt: Date | string
  }

  export type QuizResultCreateOrConnectWithoutUserInput = {
    where: QuizResultWhereUniqueInput
    create: XOR<QuizResultCreateWithoutUserInput, QuizResultUncheckedCreateWithoutUserInput>
  }

  export type QuizResultCreateManyUserInputEnvelope = {
    data: QuizResultCreateManyUserInput | QuizResultCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SuivreCoursCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cours: CoursCreateNestedOneWithoutSuivisInput
  }

  export type SuivreCoursUncheckedCreateWithoutUserInput = {
    id?: number
    coursId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuivreCoursCreateOrConnectWithoutUserInput = {
    where: SuivreCoursWhereUniqueInput
    create: XOR<SuivreCoursCreateWithoutUserInput, SuivreCoursUncheckedCreateWithoutUserInput>
  }

  export type SuivreCoursCreateManyUserInputEnvelope = {
    data: SuivreCoursCreateManyUserInput | SuivreCoursCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParticipationVisioCreateWithoutUtilisateurInput = {
    estPresent?: boolean
    tempsDeConnexion?: number | null
    feedback?: string | null
    visio: VisioSessionCreateNestedOneWithoutParticipationsInput
  }

  export type ParticipationVisioUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    visioId: number
    estPresent?: boolean
    tempsDeConnexion?: number | null
    feedback?: string | null
  }

  export type ParticipationVisioCreateOrConnectWithoutUtilisateurInput = {
    where: ParticipationVisioWhereUniqueInput
    create: XOR<ParticipationVisioCreateWithoutUtilisateurInput, ParticipationVisioUncheckedCreateWithoutUtilisateurInput>
  }

  export type ParticipationVisioCreateManyUtilisateurInputEnvelope = {
    data: ParticipationVisioCreateManyUtilisateurInput | ParticipationVisioCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type VisioSessionCreateWithoutFormateurInput = {
    titre: string
    description?: string | null
    lienVisio?: string | null
    dateDebut: Date | string
    dateFin: Date | string
    estEnregistre?: boolean
    lienEnregistrement?: string | null
    cours: CoursCreateNestedOneWithoutVisiosInput
    participations?: ParticipationVisioCreateNestedManyWithoutVisioInput
  }

  export type VisioSessionUncheckedCreateWithoutFormateurInput = {
    id?: number
    titre: string
    description?: string | null
    coursId: number
    lienVisio?: string | null
    dateDebut: Date | string
    dateFin: Date | string
    estEnregistre?: boolean
    lienEnregistrement?: string | null
    participations?: ParticipationVisioUncheckedCreateNestedManyWithoutVisioInput
  }

  export type VisioSessionCreateOrConnectWithoutFormateurInput = {
    where: VisioSessionWhereUniqueInput
    create: XOR<VisioSessionCreateWithoutFormateurInput, VisioSessionUncheckedCreateWithoutFormateurInput>
  }

  export type VisioSessionCreateManyFormateurInputEnvelope = {
    data: VisioSessionCreateManyFormateurInput | VisioSessionCreateManyFormateurInput[]
    skipDuplicates?: boolean
  }

  export type CoursUpsertWithWhereUniqueWithoutUserInput = {
    where: CoursWhereUniqueInput
    update: XOR<CoursUpdateWithoutUserInput, CoursUncheckedUpdateWithoutUserInput>
    create: XOR<CoursCreateWithoutUserInput, CoursUncheckedCreateWithoutUserInput>
  }

  export type CoursUpdateWithWhereUniqueWithoutUserInput = {
    where: CoursWhereUniqueInput
    data: XOR<CoursUpdateWithoutUserInput, CoursUncheckedUpdateWithoutUserInput>
  }

  export type CoursUpdateManyWithWhereWithoutUserInput = {
    where: CoursScalarWhereInput
    data: XOR<CoursUpdateManyMutationInput, CoursUncheckedUpdateManyWithoutUserInput>
  }

  export type CoursScalarWhereInput = {
    AND?: CoursScalarWhereInput | CoursScalarWhereInput[]
    OR?: CoursScalarWhereInput[]
    NOT?: CoursScalarWhereInput | CoursScalarWhereInput[]
    id?: IntFilter<"Cours"> | number
    nom?: StringFilter<"Cours"> | string
    sousTitre?: StringFilter<"Cours"> | string
    description?: StringNullableFilter<"Cours"> | string | null
    level?: StringNullableFilter<"Cours"> | string | null
    content?: StringNullableFilter<"Cours"> | string | null
    image?: StringNullableFilter<"Cours"> | string | null
    video?: StringNullableFilter<"Cours"> | string | null
    createdAt?: DateTimeFilter<"Cours"> | Date | string
    updatedAt?: DateTimeFilter<"Cours"> | Date | string
    userId?: IntFilter<"Cours"> | number
    categoryId?: IntNullableFilter<"Cours"> | number | null
  }

  export type UserLessonUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLessonWhereUniqueInput
    update: XOR<UserLessonUpdateWithoutUserInput, UserLessonUncheckedUpdateWithoutUserInput>
    create: XOR<UserLessonCreateWithoutUserInput, UserLessonUncheckedCreateWithoutUserInput>
  }

  export type UserLessonUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLessonWhereUniqueInput
    data: XOR<UserLessonUpdateWithoutUserInput, UserLessonUncheckedUpdateWithoutUserInput>
  }

  export type UserLessonUpdateManyWithWhereWithoutUserInput = {
    where: UserLessonScalarWhereInput
    data: XOR<UserLessonUpdateManyMutationInput, UserLessonUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLessonScalarWhereInput = {
    AND?: UserLessonScalarWhereInput | UserLessonScalarWhereInput[]
    OR?: UserLessonScalarWhereInput[]
    NOT?: UserLessonScalarWhereInput | UserLessonScalarWhereInput[]
    id?: IntFilter<"UserLesson"> | number
    userId?: IntFilter<"UserLesson"> | number
    lessonId?: IntFilter<"UserLesson"> | number
    isFinished?: BoolFilter<"UserLesson"> | boolean
  }

  export type QuizResultUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizResultWhereUniqueInput
    update: XOR<QuizResultUpdateWithoutUserInput, QuizResultUncheckedUpdateWithoutUserInput>
    create: XOR<QuizResultCreateWithoutUserInput, QuizResultUncheckedCreateWithoutUserInput>
  }

  export type QuizResultUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizResultWhereUniqueInput
    data: XOR<QuizResultUpdateWithoutUserInput, QuizResultUncheckedUpdateWithoutUserInput>
  }

  export type QuizResultUpdateManyWithWhereWithoutUserInput = {
    where: QuizResultScalarWhereInput
    data: XOR<QuizResultUpdateManyMutationInput, QuizResultUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizResultScalarWhereInput = {
    AND?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[]
    OR?: QuizResultScalarWhereInput[]
    NOT?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[]
    id?: IntFilter<"QuizResult"> | number
    userId?: IntFilter<"QuizResult"> | number
    quizId?: IntFilter<"QuizResult"> | number
    score?: IntFilter<"QuizResult"> | number
    attemptAt?: DateTimeFilter<"QuizResult"> | Date | string
  }

  export type SuivreCoursUpsertWithWhereUniqueWithoutUserInput = {
    where: SuivreCoursWhereUniqueInput
    update: XOR<SuivreCoursUpdateWithoutUserInput, SuivreCoursUncheckedUpdateWithoutUserInput>
    create: XOR<SuivreCoursCreateWithoutUserInput, SuivreCoursUncheckedCreateWithoutUserInput>
  }

  export type SuivreCoursUpdateWithWhereUniqueWithoutUserInput = {
    where: SuivreCoursWhereUniqueInput
    data: XOR<SuivreCoursUpdateWithoutUserInput, SuivreCoursUncheckedUpdateWithoutUserInput>
  }

  export type SuivreCoursUpdateManyWithWhereWithoutUserInput = {
    where: SuivreCoursScalarWhereInput
    data: XOR<SuivreCoursUpdateManyMutationInput, SuivreCoursUncheckedUpdateManyWithoutUserInput>
  }

  export type SuivreCoursScalarWhereInput = {
    AND?: SuivreCoursScalarWhereInput | SuivreCoursScalarWhereInput[]
    OR?: SuivreCoursScalarWhereInput[]
    NOT?: SuivreCoursScalarWhereInput | SuivreCoursScalarWhereInput[]
    id?: IntFilter<"SuivreCours"> | number
    userId?: IntFilter<"SuivreCours"> | number
    coursId?: IntFilter<"SuivreCours"> | number
    createdAt?: DateTimeFilter<"SuivreCours"> | Date | string
    updatedAt?: DateTimeFilter<"SuivreCours"> | Date | string
  }

  export type ParticipationVisioUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: ParticipationVisioWhereUniqueInput
    update: XOR<ParticipationVisioUpdateWithoutUtilisateurInput, ParticipationVisioUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<ParticipationVisioCreateWithoutUtilisateurInput, ParticipationVisioUncheckedCreateWithoutUtilisateurInput>
  }

  export type ParticipationVisioUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: ParticipationVisioWhereUniqueInput
    data: XOR<ParticipationVisioUpdateWithoutUtilisateurInput, ParticipationVisioUncheckedUpdateWithoutUtilisateurInput>
  }

  export type ParticipationVisioUpdateManyWithWhereWithoutUtilisateurInput = {
    where: ParticipationVisioScalarWhereInput
    data: XOR<ParticipationVisioUpdateManyMutationInput, ParticipationVisioUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type ParticipationVisioScalarWhereInput = {
    AND?: ParticipationVisioScalarWhereInput | ParticipationVisioScalarWhereInput[]
    OR?: ParticipationVisioScalarWhereInput[]
    NOT?: ParticipationVisioScalarWhereInput | ParticipationVisioScalarWhereInput[]
    id?: IntFilter<"ParticipationVisio"> | number
    visioId?: IntFilter<"ParticipationVisio"> | number
    utilisateurId?: IntFilter<"ParticipationVisio"> | number
    estPresent?: BoolFilter<"ParticipationVisio"> | boolean
    tempsDeConnexion?: IntNullableFilter<"ParticipationVisio"> | number | null
    feedback?: StringNullableFilter<"ParticipationVisio"> | string | null
  }

  export type VisioSessionUpsertWithWhereUniqueWithoutFormateurInput = {
    where: VisioSessionWhereUniqueInput
    update: XOR<VisioSessionUpdateWithoutFormateurInput, VisioSessionUncheckedUpdateWithoutFormateurInput>
    create: XOR<VisioSessionCreateWithoutFormateurInput, VisioSessionUncheckedCreateWithoutFormateurInput>
  }

  export type VisioSessionUpdateWithWhereUniqueWithoutFormateurInput = {
    where: VisioSessionWhereUniqueInput
    data: XOR<VisioSessionUpdateWithoutFormateurInput, VisioSessionUncheckedUpdateWithoutFormateurInput>
  }

  export type VisioSessionUpdateManyWithWhereWithoutFormateurInput = {
    where: VisioSessionScalarWhereInput
    data: XOR<VisioSessionUpdateManyMutationInput, VisioSessionUncheckedUpdateManyWithoutFormateurInput>
  }

  export type VisioSessionScalarWhereInput = {
    AND?: VisioSessionScalarWhereInput | VisioSessionScalarWhereInput[]
    OR?: VisioSessionScalarWhereInput[]
    NOT?: VisioSessionScalarWhereInput | VisioSessionScalarWhereInput[]
    id?: IntFilter<"VisioSession"> | number
    titre?: StringFilter<"VisioSession"> | string
    description?: StringNullableFilter<"VisioSession"> | string | null
    coursId?: IntFilter<"VisioSession"> | number
    formateurId?: IntFilter<"VisioSession"> | number
    lienVisio?: StringNullableFilter<"VisioSession"> | string | null
    dateDebut?: DateTimeFilter<"VisioSession"> | Date | string
    dateFin?: DateTimeFilter<"VisioSession"> | Date | string
    estEnregistre?: BoolFilter<"VisioSession"> | boolean
    lienEnregistrement?: StringNullableFilter<"VisioSession"> | string | null
  }

  export type UserCreateWithoutCoursInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    userLessons?: UserLessonCreateNestedManyWithoutUserInput
    quizResults?: QuizResultCreateNestedManyWithoutUserInput
    suivis?: SuivreCoursCreateNestedManyWithoutUserInput
    participations?: ParticipationVisioCreateNestedManyWithoutUtilisateurInput
    visiosEnTantQueFormateur?: VisioSessionCreateNestedManyWithoutFormateurInput
  }

  export type UserUncheckedCreateWithoutCoursInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    userLessons?: UserLessonUncheckedCreateNestedManyWithoutUserInput
    quizResults?: QuizResultUncheckedCreateNestedManyWithoutUserInput
    suivis?: SuivreCoursUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationVisioUncheckedCreateNestedManyWithoutUtilisateurInput
    visiosEnTantQueFormateur?: VisioSessionUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type UserCreateOrConnectWithoutCoursInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursInput, UserUncheckedCreateWithoutCoursInput>
  }

  export type LessonCreateWithoutCoursInput = {
    title: string
    videoUrl?: string | null
    document?: string | null
    contenu?: string | null
    userLessons?: UserLessonCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutCoursInput = {
    id?: number
    title: string
    videoUrl?: string | null
    document?: string | null
    contenu?: string | null
    userLessons?: UserLessonUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutCoursInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutCoursInput, LessonUncheckedCreateWithoutCoursInput>
  }

  export type LessonCreateManyCoursInputEnvelope = {
    data: LessonCreateManyCoursInput | LessonCreateManyCoursInput[]
    skipDuplicates?: boolean
  }

  export type QuizCreateWithoutCoursInput = {
    title: string
    questions?: QuizQuestionCreateNestedManyWithoutQuizInput
    results?: QuizResultCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutCoursInput = {
    id?: number
    title: string
    questions?: QuizQuestionUncheckedCreateNestedManyWithoutQuizInput
    results?: QuizResultUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutCoursInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCoursInput, QuizUncheckedCreateWithoutCoursInput>
  }

  export type QuizCreateManyCoursInputEnvelope = {
    data: QuizCreateManyCoursInput | QuizCreateManyCoursInput[]
    skipDuplicates?: boolean
  }

  export type VisioSessionCreateWithoutCoursInput = {
    titre: string
    description?: string | null
    lienVisio?: string | null
    dateDebut: Date | string
    dateFin: Date | string
    estEnregistre?: boolean
    lienEnregistrement?: string | null
    formateur: UserCreateNestedOneWithoutVisiosEnTantQueFormateurInput
    participations?: ParticipationVisioCreateNestedManyWithoutVisioInput
  }

  export type VisioSessionUncheckedCreateWithoutCoursInput = {
    id?: number
    titre: string
    description?: string | null
    formateurId: number
    lienVisio?: string | null
    dateDebut: Date | string
    dateFin: Date | string
    estEnregistre?: boolean
    lienEnregistrement?: string | null
    participations?: ParticipationVisioUncheckedCreateNestedManyWithoutVisioInput
  }

  export type VisioSessionCreateOrConnectWithoutCoursInput = {
    where: VisioSessionWhereUniqueInput
    create: XOR<VisioSessionCreateWithoutCoursInput, VisioSessionUncheckedCreateWithoutCoursInput>
  }

  export type VisioSessionCreateManyCoursInputEnvelope = {
    data: VisioSessionCreateManyCoursInput | VisioSessionCreateManyCoursInput[]
    skipDuplicates?: boolean
  }

  export type SuivreCoursCreateWithoutCoursInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSuivisInput
  }

  export type SuivreCoursUncheckedCreateWithoutCoursInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuivreCoursCreateOrConnectWithoutCoursInput = {
    where: SuivreCoursWhereUniqueInput
    create: XOR<SuivreCoursCreateWithoutCoursInput, SuivreCoursUncheckedCreateWithoutCoursInput>
  }

  export type SuivreCoursCreateManyCoursInputEnvelope = {
    data: SuivreCoursCreateManyCoursInput | SuivreCoursCreateManyCoursInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutCoursInput = {
    name: string
    description: string
  }

  export type CategoryUncheckedCreateWithoutCoursInput = {
    id?: number
    name: string
    description: string
  }

  export type CategoryCreateOrConnectWithoutCoursInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCoursInput, CategoryUncheckedCreateWithoutCoursInput>
  }

  export type UserUpsertWithoutCoursInput = {
    update: XOR<UserUpdateWithoutCoursInput, UserUncheckedUpdateWithoutCoursInput>
    create: XOR<UserCreateWithoutCoursInput, UserUncheckedCreateWithoutCoursInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursInput, UserUncheckedUpdateWithoutCoursInput>
  }

  export type UserUpdateWithoutCoursInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLessons?: UserLessonUpdateManyWithoutUserNestedInput
    quizResults?: QuizResultUpdateManyWithoutUserNestedInput
    suivis?: SuivreCoursUpdateManyWithoutUserNestedInput
    participations?: ParticipationVisioUpdateManyWithoutUtilisateurNestedInput
    visiosEnTantQueFormateur?: VisioSessionUpdateManyWithoutFormateurNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLessons?: UserLessonUncheckedUpdateManyWithoutUserNestedInput
    quizResults?: QuizResultUncheckedUpdateManyWithoutUserNestedInput
    suivis?: SuivreCoursUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationVisioUncheckedUpdateManyWithoutUtilisateurNestedInput
    visiosEnTantQueFormateur?: VisioSessionUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type LessonUpsertWithWhereUniqueWithoutCoursInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutCoursInput, LessonUncheckedUpdateWithoutCoursInput>
    create: XOR<LessonCreateWithoutCoursInput, LessonUncheckedCreateWithoutCoursInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutCoursInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutCoursInput, LessonUncheckedUpdateWithoutCoursInput>
  }

  export type LessonUpdateManyWithWhereWithoutCoursInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutCoursInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: IntFilter<"Lesson"> | number
    title?: StringFilter<"Lesson"> | string
    videoUrl?: StringNullableFilter<"Lesson"> | string | null
    document?: StringNullableFilter<"Lesson"> | string | null
    contenu?: StringNullableFilter<"Lesson"> | string | null
    coursId?: IntFilter<"Lesson"> | number
  }

  export type QuizUpsertWithWhereUniqueWithoutCoursInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutCoursInput, QuizUncheckedUpdateWithoutCoursInput>
    create: XOR<QuizCreateWithoutCoursInput, QuizUncheckedCreateWithoutCoursInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutCoursInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutCoursInput, QuizUncheckedUpdateWithoutCoursInput>
  }

  export type QuizUpdateManyWithWhereWithoutCoursInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutCoursInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: IntFilter<"Quiz"> | number
    title?: StringFilter<"Quiz"> | string
    coursId?: IntFilter<"Quiz"> | number
  }

  export type VisioSessionUpsertWithWhereUniqueWithoutCoursInput = {
    where: VisioSessionWhereUniqueInput
    update: XOR<VisioSessionUpdateWithoutCoursInput, VisioSessionUncheckedUpdateWithoutCoursInput>
    create: XOR<VisioSessionCreateWithoutCoursInput, VisioSessionUncheckedCreateWithoutCoursInput>
  }

  export type VisioSessionUpdateWithWhereUniqueWithoutCoursInput = {
    where: VisioSessionWhereUniqueInput
    data: XOR<VisioSessionUpdateWithoutCoursInput, VisioSessionUncheckedUpdateWithoutCoursInput>
  }

  export type VisioSessionUpdateManyWithWhereWithoutCoursInput = {
    where: VisioSessionScalarWhereInput
    data: XOR<VisioSessionUpdateManyMutationInput, VisioSessionUncheckedUpdateManyWithoutCoursInput>
  }

  export type SuivreCoursUpsertWithWhereUniqueWithoutCoursInput = {
    where: SuivreCoursWhereUniqueInput
    update: XOR<SuivreCoursUpdateWithoutCoursInput, SuivreCoursUncheckedUpdateWithoutCoursInput>
    create: XOR<SuivreCoursCreateWithoutCoursInput, SuivreCoursUncheckedCreateWithoutCoursInput>
  }

  export type SuivreCoursUpdateWithWhereUniqueWithoutCoursInput = {
    where: SuivreCoursWhereUniqueInput
    data: XOR<SuivreCoursUpdateWithoutCoursInput, SuivreCoursUncheckedUpdateWithoutCoursInput>
  }

  export type SuivreCoursUpdateManyWithWhereWithoutCoursInput = {
    where: SuivreCoursScalarWhereInput
    data: XOR<SuivreCoursUpdateManyMutationInput, SuivreCoursUncheckedUpdateManyWithoutCoursInput>
  }

  export type CategoryUpsertWithoutCoursInput = {
    update: XOR<CategoryUpdateWithoutCoursInput, CategoryUncheckedUpdateWithoutCoursInput>
    create: XOR<CategoryCreateWithoutCoursInput, CategoryUncheckedCreateWithoutCoursInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCoursInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCoursInput, CategoryUncheckedUpdateWithoutCoursInput>
  }

  export type CategoryUpdateWithoutCoursInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CoursCreateWithoutLessonsInput = {
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursInput
    quiz?: QuizCreateNestedManyWithoutCoursInput
    visios?: VisioSessionCreateNestedManyWithoutCoursInput
    suivis?: SuivreCoursCreateNestedManyWithoutCoursInput
    category?: CategoryCreateNestedOneWithoutCoursInput
  }

  export type CoursUncheckedCreateWithoutLessonsInput = {
    id?: number
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    categoryId?: number | null
    quiz?: QuizUncheckedCreateNestedManyWithoutCoursInput
    visios?: VisioSessionUncheckedCreateNestedManyWithoutCoursInput
    suivis?: SuivreCoursUncheckedCreateNestedManyWithoutCoursInput
  }

  export type CoursCreateOrConnectWithoutLessonsInput = {
    where: CoursWhereUniqueInput
    create: XOR<CoursCreateWithoutLessonsInput, CoursUncheckedCreateWithoutLessonsInput>
  }

  export type UserLessonCreateWithoutLessonInput = {
    isFinished?: boolean
    user: UserCreateNestedOneWithoutUserLessonsInput
  }

  export type UserLessonUncheckedCreateWithoutLessonInput = {
    id?: number
    userId: number
    isFinished?: boolean
  }

  export type UserLessonCreateOrConnectWithoutLessonInput = {
    where: UserLessonWhereUniqueInput
    create: XOR<UserLessonCreateWithoutLessonInput, UserLessonUncheckedCreateWithoutLessonInput>
  }

  export type UserLessonCreateManyLessonInputEnvelope = {
    data: UserLessonCreateManyLessonInput | UserLessonCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type CoursUpsertWithoutLessonsInput = {
    update: XOR<CoursUpdateWithoutLessonsInput, CoursUncheckedUpdateWithoutLessonsInput>
    create: XOR<CoursCreateWithoutLessonsInput, CoursUncheckedCreateWithoutLessonsInput>
    where?: CoursWhereInput
  }

  export type CoursUpdateToOneWithWhereWithoutLessonsInput = {
    where?: CoursWhereInput
    data: XOR<CoursUpdateWithoutLessonsInput, CoursUncheckedUpdateWithoutLessonsInput>
  }

  export type CoursUpdateWithoutLessonsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursNestedInput
    quiz?: QuizUpdateManyWithoutCoursNestedInput
    visios?: VisioSessionUpdateManyWithoutCoursNestedInput
    suivis?: SuivreCoursUpdateManyWithoutCoursNestedInput
    category?: CategoryUpdateOneWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateWithoutLessonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    quiz?: QuizUncheckedUpdateManyWithoutCoursNestedInput
    visios?: VisioSessionUncheckedUpdateManyWithoutCoursNestedInput
    suivis?: SuivreCoursUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type UserLessonUpsertWithWhereUniqueWithoutLessonInput = {
    where: UserLessonWhereUniqueInput
    update: XOR<UserLessonUpdateWithoutLessonInput, UserLessonUncheckedUpdateWithoutLessonInput>
    create: XOR<UserLessonCreateWithoutLessonInput, UserLessonUncheckedCreateWithoutLessonInput>
  }

  export type UserLessonUpdateWithWhereUniqueWithoutLessonInput = {
    where: UserLessonWhereUniqueInput
    data: XOR<UserLessonUpdateWithoutLessonInput, UserLessonUncheckedUpdateWithoutLessonInput>
  }

  export type UserLessonUpdateManyWithWhereWithoutLessonInput = {
    where: UserLessonScalarWhereInput
    data: XOR<UserLessonUpdateManyMutationInput, UserLessonUncheckedUpdateManyWithoutLessonInput>
  }

  export type UserCreateWithoutSuivisInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursCreateNestedManyWithoutUserInput
    userLessons?: UserLessonCreateNestedManyWithoutUserInput
    quizResults?: QuizResultCreateNestedManyWithoutUserInput
    participations?: ParticipationVisioCreateNestedManyWithoutUtilisateurInput
    visiosEnTantQueFormateur?: VisioSessionCreateNestedManyWithoutFormateurInput
  }

  export type UserUncheckedCreateWithoutSuivisInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursUncheckedCreateNestedManyWithoutUserInput
    userLessons?: UserLessonUncheckedCreateNestedManyWithoutUserInput
    quizResults?: QuizResultUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationVisioUncheckedCreateNestedManyWithoutUtilisateurInput
    visiosEnTantQueFormateur?: VisioSessionUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type UserCreateOrConnectWithoutSuivisInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSuivisInput, UserUncheckedCreateWithoutSuivisInput>
  }

  export type CoursCreateWithoutSuivisInput = {
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursInput
    lessons?: LessonCreateNestedManyWithoutCoursInput
    quiz?: QuizCreateNestedManyWithoutCoursInput
    visios?: VisioSessionCreateNestedManyWithoutCoursInput
    category?: CategoryCreateNestedOneWithoutCoursInput
  }

  export type CoursUncheckedCreateWithoutSuivisInput = {
    id?: number
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    categoryId?: number | null
    lessons?: LessonUncheckedCreateNestedManyWithoutCoursInput
    quiz?: QuizUncheckedCreateNestedManyWithoutCoursInput
    visios?: VisioSessionUncheckedCreateNestedManyWithoutCoursInput
  }

  export type CoursCreateOrConnectWithoutSuivisInput = {
    where: CoursWhereUniqueInput
    create: XOR<CoursCreateWithoutSuivisInput, CoursUncheckedCreateWithoutSuivisInput>
  }

  export type UserUpsertWithoutSuivisInput = {
    update: XOR<UserUpdateWithoutSuivisInput, UserUncheckedUpdateWithoutSuivisInput>
    create: XOR<UserCreateWithoutSuivisInput, UserUncheckedCreateWithoutSuivisInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSuivisInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSuivisInput, UserUncheckedUpdateWithoutSuivisInput>
  }

  export type UserUpdateWithoutSuivisInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUpdateManyWithoutUserNestedInput
    userLessons?: UserLessonUpdateManyWithoutUserNestedInput
    quizResults?: QuizResultUpdateManyWithoutUserNestedInput
    participations?: ParticipationVisioUpdateManyWithoutUtilisateurNestedInput
    visiosEnTantQueFormateur?: VisioSessionUpdateManyWithoutFormateurNestedInput
  }

  export type UserUncheckedUpdateWithoutSuivisInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUncheckedUpdateManyWithoutUserNestedInput
    userLessons?: UserLessonUncheckedUpdateManyWithoutUserNestedInput
    quizResults?: QuizResultUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationVisioUncheckedUpdateManyWithoutUtilisateurNestedInput
    visiosEnTantQueFormateur?: VisioSessionUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type CoursUpsertWithoutSuivisInput = {
    update: XOR<CoursUpdateWithoutSuivisInput, CoursUncheckedUpdateWithoutSuivisInput>
    create: XOR<CoursCreateWithoutSuivisInput, CoursUncheckedCreateWithoutSuivisInput>
    where?: CoursWhereInput
  }

  export type CoursUpdateToOneWithWhereWithoutSuivisInput = {
    where?: CoursWhereInput
    data: XOR<CoursUpdateWithoutSuivisInput, CoursUncheckedUpdateWithoutSuivisInput>
  }

  export type CoursUpdateWithoutSuivisInput = {
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursNestedInput
    lessons?: LessonUpdateManyWithoutCoursNestedInput
    quiz?: QuizUpdateManyWithoutCoursNestedInput
    visios?: VisioSessionUpdateManyWithoutCoursNestedInput
    category?: CategoryUpdateOneWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateWithoutSuivisInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    lessons?: LessonUncheckedUpdateManyWithoutCoursNestedInput
    quiz?: QuizUncheckedUpdateManyWithoutCoursNestedInput
    visios?: VisioSessionUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type UserCreateWithoutUserLessonsInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursCreateNestedManyWithoutUserInput
    quizResults?: QuizResultCreateNestedManyWithoutUserInput
    suivis?: SuivreCoursCreateNestedManyWithoutUserInput
    participations?: ParticipationVisioCreateNestedManyWithoutUtilisateurInput
    visiosEnTantQueFormateur?: VisioSessionCreateNestedManyWithoutFormateurInput
  }

  export type UserUncheckedCreateWithoutUserLessonsInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursUncheckedCreateNestedManyWithoutUserInput
    quizResults?: QuizResultUncheckedCreateNestedManyWithoutUserInput
    suivis?: SuivreCoursUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationVisioUncheckedCreateNestedManyWithoutUtilisateurInput
    visiosEnTantQueFormateur?: VisioSessionUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type UserCreateOrConnectWithoutUserLessonsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserLessonsInput, UserUncheckedCreateWithoutUserLessonsInput>
  }

  export type LessonCreateWithoutUserLessonsInput = {
    title: string
    videoUrl?: string | null
    document?: string | null
    contenu?: string | null
    cours: CoursCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateWithoutUserLessonsInput = {
    id?: number
    title: string
    videoUrl?: string | null
    document?: string | null
    contenu?: string | null
    coursId: number
  }

  export type LessonCreateOrConnectWithoutUserLessonsInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutUserLessonsInput, LessonUncheckedCreateWithoutUserLessonsInput>
  }

  export type UserUpsertWithoutUserLessonsInput = {
    update: XOR<UserUpdateWithoutUserLessonsInput, UserUncheckedUpdateWithoutUserLessonsInput>
    create: XOR<UserCreateWithoutUserLessonsInput, UserUncheckedCreateWithoutUserLessonsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserLessonsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserLessonsInput, UserUncheckedUpdateWithoutUserLessonsInput>
  }

  export type UserUpdateWithoutUserLessonsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUpdateManyWithoutUserNestedInput
    quizResults?: QuizResultUpdateManyWithoutUserNestedInput
    suivis?: SuivreCoursUpdateManyWithoutUserNestedInput
    participations?: ParticipationVisioUpdateManyWithoutUtilisateurNestedInput
    visiosEnTantQueFormateur?: VisioSessionUpdateManyWithoutFormateurNestedInput
  }

  export type UserUncheckedUpdateWithoutUserLessonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUncheckedUpdateManyWithoutUserNestedInput
    quizResults?: QuizResultUncheckedUpdateManyWithoutUserNestedInput
    suivis?: SuivreCoursUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationVisioUncheckedUpdateManyWithoutUtilisateurNestedInput
    visiosEnTantQueFormateur?: VisioSessionUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type LessonUpsertWithoutUserLessonsInput = {
    update: XOR<LessonUpdateWithoutUserLessonsInput, LessonUncheckedUpdateWithoutUserLessonsInput>
    create: XOR<LessonCreateWithoutUserLessonsInput, LessonUncheckedCreateWithoutUserLessonsInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutUserLessonsInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutUserLessonsInput, LessonUncheckedUpdateWithoutUserLessonsInput>
  }

  export type LessonUpdateWithoutUserLessonsInput = {
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    cours?: CoursUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateWithoutUserLessonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    coursId?: IntFieldUpdateOperationsInput | number
  }

  export type CoursCreateWithoutQuizInput = {
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursInput
    lessons?: LessonCreateNestedManyWithoutCoursInput
    visios?: VisioSessionCreateNestedManyWithoutCoursInput
    suivis?: SuivreCoursCreateNestedManyWithoutCoursInput
    category?: CategoryCreateNestedOneWithoutCoursInput
  }

  export type CoursUncheckedCreateWithoutQuizInput = {
    id?: number
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    categoryId?: number | null
    lessons?: LessonUncheckedCreateNestedManyWithoutCoursInput
    visios?: VisioSessionUncheckedCreateNestedManyWithoutCoursInput
    suivis?: SuivreCoursUncheckedCreateNestedManyWithoutCoursInput
  }

  export type CoursCreateOrConnectWithoutQuizInput = {
    where: CoursWhereUniqueInput
    create: XOR<CoursCreateWithoutQuizInput, CoursUncheckedCreateWithoutQuizInput>
  }

  export type QuizQuestionCreateWithoutQuizInput = {
    type: string
    content: string
    answer: string
    options?: QuizOptionCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUncheckedCreateWithoutQuizInput = {
    id?: number
    type: string
    content: string
    answer: string
    options?: QuizOptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionCreateOrConnectWithoutQuizInput = {
    where: QuizQuestionWhereUniqueInput
    create: XOR<QuizQuestionCreateWithoutQuizInput, QuizQuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuizQuestionCreateManyQuizInputEnvelope = {
    data: QuizQuestionCreateManyQuizInput | QuizQuestionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type QuizResultCreateWithoutQuizInput = {
    score: number
    attemptAt: Date | string
    user: UserCreateNestedOneWithoutQuizResultsInput
  }

  export type QuizResultUncheckedCreateWithoutQuizInput = {
    id?: number
    userId: number
    score: number
    attemptAt: Date | string
  }

  export type QuizResultCreateOrConnectWithoutQuizInput = {
    where: QuizResultWhereUniqueInput
    create: XOR<QuizResultCreateWithoutQuizInput, QuizResultUncheckedCreateWithoutQuizInput>
  }

  export type QuizResultCreateManyQuizInputEnvelope = {
    data: QuizResultCreateManyQuizInput | QuizResultCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type CoursUpsertWithoutQuizInput = {
    update: XOR<CoursUpdateWithoutQuizInput, CoursUncheckedUpdateWithoutQuizInput>
    create: XOR<CoursCreateWithoutQuizInput, CoursUncheckedCreateWithoutQuizInput>
    where?: CoursWhereInput
  }

  export type CoursUpdateToOneWithWhereWithoutQuizInput = {
    where?: CoursWhereInput
    data: XOR<CoursUpdateWithoutQuizInput, CoursUncheckedUpdateWithoutQuizInput>
  }

  export type CoursUpdateWithoutQuizInput = {
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursNestedInput
    lessons?: LessonUpdateManyWithoutCoursNestedInput
    visios?: VisioSessionUpdateManyWithoutCoursNestedInput
    suivis?: SuivreCoursUpdateManyWithoutCoursNestedInput
    category?: CategoryUpdateOneWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    lessons?: LessonUncheckedUpdateManyWithoutCoursNestedInput
    visios?: VisioSessionUncheckedUpdateManyWithoutCoursNestedInput
    suivis?: SuivreCoursUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type QuizQuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizQuestionWhereUniqueInput
    update: XOR<QuizQuestionUpdateWithoutQuizInput, QuizQuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizQuestionCreateWithoutQuizInput, QuizQuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuizQuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizQuestionWhereUniqueInput
    data: XOR<QuizQuestionUpdateWithoutQuizInput, QuizQuestionUncheckedUpdateWithoutQuizInput>
  }

  export type QuizQuestionUpdateManyWithWhereWithoutQuizInput = {
    where: QuizQuestionScalarWhereInput
    data: XOR<QuizQuestionUpdateManyMutationInput, QuizQuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizQuestionScalarWhereInput = {
    AND?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
    OR?: QuizQuestionScalarWhereInput[]
    NOT?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
    id?: IntFilter<"QuizQuestion"> | number
    type?: StringFilter<"QuizQuestion"> | string
    content?: StringFilter<"QuizQuestion"> | string
    answer?: StringFilter<"QuizQuestion"> | string
    quizId?: IntFilter<"QuizQuestion"> | number
  }

  export type QuizResultUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizResultWhereUniqueInput
    update: XOR<QuizResultUpdateWithoutQuizInput, QuizResultUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizResultCreateWithoutQuizInput, QuizResultUncheckedCreateWithoutQuizInput>
  }

  export type QuizResultUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizResultWhereUniqueInput
    data: XOR<QuizResultUpdateWithoutQuizInput, QuizResultUncheckedUpdateWithoutQuizInput>
  }

  export type QuizResultUpdateManyWithWhereWithoutQuizInput = {
    where: QuizResultScalarWhereInput
    data: XOR<QuizResultUpdateManyMutationInput, QuizResultUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizCreateWithoutQuestionsInput = {
    title: string
    cours: CoursCreateNestedOneWithoutQuizInput
    results?: QuizResultCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuestionsInput = {
    id?: number
    title: string
    coursId: number
    results?: QuizResultUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuestionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
  }

  export type QuizOptionCreateWithoutQuestionInput = {
    nom: string
  }

  export type QuizOptionUncheckedCreateWithoutQuestionInput = {
    id?: number
    nom: string
  }

  export type QuizOptionCreateOrConnectWithoutQuestionInput = {
    where: QuizOptionWhereUniqueInput
    create: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuizOptionCreateManyQuestionInputEnvelope = {
    data: QuizOptionCreateManyQuestionInput | QuizOptionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithoutQuestionsInput = {
    update: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizUpdateWithoutQuestionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    cours?: CoursUpdateOneRequiredWithoutQuizNestedInput
    results?: QuizResultUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    coursId?: IntFieldUpdateOperationsInput | number
    results?: QuizResultUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizOptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuizOptionWhereUniqueInput
    update: XOR<QuizOptionUpdateWithoutQuestionInput, QuizOptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuizOptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuizOptionWhereUniqueInput
    data: XOR<QuizOptionUpdateWithoutQuestionInput, QuizOptionUncheckedUpdateWithoutQuestionInput>
  }

  export type QuizOptionUpdateManyWithWhereWithoutQuestionInput = {
    where: QuizOptionScalarWhereInput
    data: XOR<QuizOptionUpdateManyMutationInput, QuizOptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuizOptionScalarWhereInput = {
    AND?: QuizOptionScalarWhereInput | QuizOptionScalarWhereInput[]
    OR?: QuizOptionScalarWhereInput[]
    NOT?: QuizOptionScalarWhereInput | QuizOptionScalarWhereInput[]
    id?: IntFilter<"QuizOption"> | number
    quizQuestionId?: IntFilter<"QuizOption"> | number
    nom?: StringFilter<"QuizOption"> | string
  }

  export type QuizQuestionCreateWithoutOptionsInput = {
    type: string
    content: string
    answer: string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
  }

  export type QuizQuestionUncheckedCreateWithoutOptionsInput = {
    id?: number
    type: string
    content: string
    answer: string
    quizId: number
  }

  export type QuizQuestionCreateOrConnectWithoutOptionsInput = {
    where: QuizQuestionWhereUniqueInput
    create: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
  }

  export type QuizQuestionUpsertWithoutOptionsInput = {
    update: XOR<QuizQuestionUpdateWithoutOptionsInput, QuizQuestionUncheckedUpdateWithoutOptionsInput>
    create: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
    where?: QuizQuestionWhereInput
  }

  export type QuizQuestionUpdateToOneWithWhereWithoutOptionsInput = {
    where?: QuizQuestionWhereInput
    data: XOR<QuizQuestionUpdateWithoutOptionsInput, QuizQuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuizQuestionUpdateWithoutOptionsInput = {
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuizQuestionUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    quizId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutQuizResultsInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursCreateNestedManyWithoutUserInput
    userLessons?: UserLessonCreateNestedManyWithoutUserInput
    suivis?: SuivreCoursCreateNestedManyWithoutUserInput
    participations?: ParticipationVisioCreateNestedManyWithoutUtilisateurInput
    visiosEnTantQueFormateur?: VisioSessionCreateNestedManyWithoutFormateurInput
  }

  export type UserUncheckedCreateWithoutQuizResultsInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursUncheckedCreateNestedManyWithoutUserInput
    userLessons?: UserLessonUncheckedCreateNestedManyWithoutUserInput
    suivis?: SuivreCoursUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationVisioUncheckedCreateNestedManyWithoutUtilisateurInput
    visiosEnTantQueFormateur?: VisioSessionUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type UserCreateOrConnectWithoutQuizResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizResultsInput, UserUncheckedCreateWithoutQuizResultsInput>
  }

  export type QuizCreateWithoutResultsInput = {
    title: string
    cours: CoursCreateNestedOneWithoutQuizInput
    questions?: QuizQuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutResultsInput = {
    id?: number
    title: string
    coursId: number
    questions?: QuizQuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutResultsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutResultsInput, QuizUncheckedCreateWithoutResultsInput>
  }

  export type UserUpsertWithoutQuizResultsInput = {
    update: XOR<UserUpdateWithoutQuizResultsInput, UserUncheckedUpdateWithoutQuizResultsInput>
    create: XOR<UserCreateWithoutQuizResultsInput, UserUncheckedCreateWithoutQuizResultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizResultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizResultsInput, UserUncheckedUpdateWithoutQuizResultsInput>
  }

  export type UserUpdateWithoutQuizResultsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUpdateManyWithoutUserNestedInput
    userLessons?: UserLessonUpdateManyWithoutUserNestedInput
    suivis?: SuivreCoursUpdateManyWithoutUserNestedInput
    participations?: ParticipationVisioUpdateManyWithoutUtilisateurNestedInput
    visiosEnTantQueFormateur?: VisioSessionUpdateManyWithoutFormateurNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUncheckedUpdateManyWithoutUserNestedInput
    userLessons?: UserLessonUncheckedUpdateManyWithoutUserNestedInput
    suivis?: SuivreCoursUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationVisioUncheckedUpdateManyWithoutUtilisateurNestedInput
    visiosEnTantQueFormateur?: VisioSessionUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type QuizUpsertWithoutResultsInput = {
    update: XOR<QuizUpdateWithoutResultsInput, QuizUncheckedUpdateWithoutResultsInput>
    create: XOR<QuizCreateWithoutResultsInput, QuizUncheckedCreateWithoutResultsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutResultsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutResultsInput, QuizUncheckedUpdateWithoutResultsInput>
  }

  export type QuizUpdateWithoutResultsInput = {
    title?: StringFieldUpdateOperationsInput | string
    cours?: CoursUpdateOneRequiredWithoutQuizNestedInput
    questions?: QuizQuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    coursId?: IntFieldUpdateOperationsInput | number
    questions?: QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type CoursCreateWithoutVisiosInput = {
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursInput
    lessons?: LessonCreateNestedManyWithoutCoursInput
    quiz?: QuizCreateNestedManyWithoutCoursInput
    suivis?: SuivreCoursCreateNestedManyWithoutCoursInput
    category?: CategoryCreateNestedOneWithoutCoursInput
  }

  export type CoursUncheckedCreateWithoutVisiosInput = {
    id?: number
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    categoryId?: number | null
    lessons?: LessonUncheckedCreateNestedManyWithoutCoursInput
    quiz?: QuizUncheckedCreateNestedManyWithoutCoursInput
    suivis?: SuivreCoursUncheckedCreateNestedManyWithoutCoursInput
  }

  export type CoursCreateOrConnectWithoutVisiosInput = {
    where: CoursWhereUniqueInput
    create: XOR<CoursCreateWithoutVisiosInput, CoursUncheckedCreateWithoutVisiosInput>
  }

  export type UserCreateWithoutVisiosEnTantQueFormateurInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursCreateNestedManyWithoutUserInput
    userLessons?: UserLessonCreateNestedManyWithoutUserInput
    quizResults?: QuizResultCreateNestedManyWithoutUserInput
    suivis?: SuivreCoursCreateNestedManyWithoutUserInput
    participations?: ParticipationVisioCreateNestedManyWithoutUtilisateurInput
  }

  export type UserUncheckedCreateWithoutVisiosEnTantQueFormateurInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursUncheckedCreateNestedManyWithoutUserInput
    userLessons?: UserLessonUncheckedCreateNestedManyWithoutUserInput
    quizResults?: QuizResultUncheckedCreateNestedManyWithoutUserInput
    suivis?: SuivreCoursUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationVisioUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UserCreateOrConnectWithoutVisiosEnTantQueFormateurInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVisiosEnTantQueFormateurInput, UserUncheckedCreateWithoutVisiosEnTantQueFormateurInput>
  }

  export type ParticipationVisioCreateWithoutVisioInput = {
    estPresent?: boolean
    tempsDeConnexion?: number | null
    feedback?: string | null
    utilisateur: UserCreateNestedOneWithoutParticipationsInput
  }

  export type ParticipationVisioUncheckedCreateWithoutVisioInput = {
    id?: number
    utilisateurId: number
    estPresent?: boolean
    tempsDeConnexion?: number | null
    feedback?: string | null
  }

  export type ParticipationVisioCreateOrConnectWithoutVisioInput = {
    where: ParticipationVisioWhereUniqueInput
    create: XOR<ParticipationVisioCreateWithoutVisioInput, ParticipationVisioUncheckedCreateWithoutVisioInput>
  }

  export type ParticipationVisioCreateManyVisioInputEnvelope = {
    data: ParticipationVisioCreateManyVisioInput | ParticipationVisioCreateManyVisioInput[]
    skipDuplicates?: boolean
  }

  export type CoursUpsertWithoutVisiosInput = {
    update: XOR<CoursUpdateWithoutVisiosInput, CoursUncheckedUpdateWithoutVisiosInput>
    create: XOR<CoursCreateWithoutVisiosInput, CoursUncheckedCreateWithoutVisiosInput>
    where?: CoursWhereInput
  }

  export type CoursUpdateToOneWithWhereWithoutVisiosInput = {
    where?: CoursWhereInput
    data: XOR<CoursUpdateWithoutVisiosInput, CoursUncheckedUpdateWithoutVisiosInput>
  }

  export type CoursUpdateWithoutVisiosInput = {
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursNestedInput
    lessons?: LessonUpdateManyWithoutCoursNestedInput
    quiz?: QuizUpdateManyWithoutCoursNestedInput
    suivis?: SuivreCoursUpdateManyWithoutCoursNestedInput
    category?: CategoryUpdateOneWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateWithoutVisiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    lessons?: LessonUncheckedUpdateManyWithoutCoursNestedInput
    quiz?: QuizUncheckedUpdateManyWithoutCoursNestedInput
    suivis?: SuivreCoursUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type UserUpsertWithoutVisiosEnTantQueFormateurInput = {
    update: XOR<UserUpdateWithoutVisiosEnTantQueFormateurInput, UserUncheckedUpdateWithoutVisiosEnTantQueFormateurInput>
    create: XOR<UserCreateWithoutVisiosEnTantQueFormateurInput, UserUncheckedCreateWithoutVisiosEnTantQueFormateurInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVisiosEnTantQueFormateurInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVisiosEnTantQueFormateurInput, UserUncheckedUpdateWithoutVisiosEnTantQueFormateurInput>
  }

  export type UserUpdateWithoutVisiosEnTantQueFormateurInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUpdateManyWithoutUserNestedInput
    userLessons?: UserLessonUpdateManyWithoutUserNestedInput
    quizResults?: QuizResultUpdateManyWithoutUserNestedInput
    suivis?: SuivreCoursUpdateManyWithoutUserNestedInput
    participations?: ParticipationVisioUpdateManyWithoutUtilisateurNestedInput
  }

  export type UserUncheckedUpdateWithoutVisiosEnTantQueFormateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUncheckedUpdateManyWithoutUserNestedInput
    userLessons?: UserLessonUncheckedUpdateManyWithoutUserNestedInput
    quizResults?: QuizResultUncheckedUpdateManyWithoutUserNestedInput
    suivis?: SuivreCoursUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationVisioUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type ParticipationVisioUpsertWithWhereUniqueWithoutVisioInput = {
    where: ParticipationVisioWhereUniqueInput
    update: XOR<ParticipationVisioUpdateWithoutVisioInput, ParticipationVisioUncheckedUpdateWithoutVisioInput>
    create: XOR<ParticipationVisioCreateWithoutVisioInput, ParticipationVisioUncheckedCreateWithoutVisioInput>
  }

  export type ParticipationVisioUpdateWithWhereUniqueWithoutVisioInput = {
    where: ParticipationVisioWhereUniqueInput
    data: XOR<ParticipationVisioUpdateWithoutVisioInput, ParticipationVisioUncheckedUpdateWithoutVisioInput>
  }

  export type ParticipationVisioUpdateManyWithWhereWithoutVisioInput = {
    where: ParticipationVisioScalarWhereInput
    data: XOR<ParticipationVisioUpdateManyMutationInput, ParticipationVisioUncheckedUpdateManyWithoutVisioInput>
  }

  export type VisioSessionCreateWithoutParticipationsInput = {
    titre: string
    description?: string | null
    lienVisio?: string | null
    dateDebut: Date | string
    dateFin: Date | string
    estEnregistre?: boolean
    lienEnregistrement?: string | null
    cours: CoursCreateNestedOneWithoutVisiosInput
    formateur: UserCreateNestedOneWithoutVisiosEnTantQueFormateurInput
  }

  export type VisioSessionUncheckedCreateWithoutParticipationsInput = {
    id?: number
    titre: string
    description?: string | null
    coursId: number
    formateurId: number
    lienVisio?: string | null
    dateDebut: Date | string
    dateFin: Date | string
    estEnregistre?: boolean
    lienEnregistrement?: string | null
  }

  export type VisioSessionCreateOrConnectWithoutParticipationsInput = {
    where: VisioSessionWhereUniqueInput
    create: XOR<VisioSessionCreateWithoutParticipationsInput, VisioSessionUncheckedCreateWithoutParticipationsInput>
  }

  export type UserCreateWithoutParticipationsInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursCreateNestedManyWithoutUserInput
    userLessons?: UserLessonCreateNestedManyWithoutUserInput
    quizResults?: QuizResultCreateNestedManyWithoutUserInput
    suivis?: SuivreCoursCreateNestedManyWithoutUserInput
    visiosEnTantQueFormateur?: VisioSessionCreateNestedManyWithoutFormateurInput
  }

  export type UserUncheckedCreateWithoutParticipationsInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursUncheckedCreateNestedManyWithoutUserInput
    userLessons?: UserLessonUncheckedCreateNestedManyWithoutUserInput
    quizResults?: QuizResultUncheckedCreateNestedManyWithoutUserInput
    suivis?: SuivreCoursUncheckedCreateNestedManyWithoutUserInput
    visiosEnTantQueFormateur?: VisioSessionUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type UserCreateOrConnectWithoutParticipationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
  }

  export type VisioSessionUpsertWithoutParticipationsInput = {
    update: XOR<VisioSessionUpdateWithoutParticipationsInput, VisioSessionUncheckedUpdateWithoutParticipationsInput>
    create: XOR<VisioSessionCreateWithoutParticipationsInput, VisioSessionUncheckedCreateWithoutParticipationsInput>
    where?: VisioSessionWhereInput
  }

  export type VisioSessionUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: VisioSessionWhereInput
    data: XOR<VisioSessionUpdateWithoutParticipationsInput, VisioSessionUncheckedUpdateWithoutParticipationsInput>
  }

  export type VisioSessionUpdateWithoutParticipationsInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lienVisio?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estEnregistre?: BoolFieldUpdateOperationsInput | boolean
    lienEnregistrement?: NullableStringFieldUpdateOperationsInput | string | null
    cours?: CoursUpdateOneRequiredWithoutVisiosNestedInput
    formateur?: UserUpdateOneRequiredWithoutVisiosEnTantQueFormateurNestedInput
  }

  export type VisioSessionUncheckedUpdateWithoutParticipationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coursId?: IntFieldUpdateOperationsInput | number
    formateurId?: IntFieldUpdateOperationsInput | number
    lienVisio?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estEnregistre?: BoolFieldUpdateOperationsInput | boolean
    lienEnregistrement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutParticipationsInput = {
    update: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type UserUpdateWithoutParticipationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUpdateManyWithoutUserNestedInput
    userLessons?: UserLessonUpdateManyWithoutUserNestedInput
    quizResults?: QuizResultUpdateManyWithoutUserNestedInput
    suivis?: SuivreCoursUpdateManyWithoutUserNestedInput
    visiosEnTantQueFormateur?: VisioSessionUpdateManyWithoutFormateurNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUncheckedUpdateManyWithoutUserNestedInput
    userLessons?: UserLessonUncheckedUpdateManyWithoutUserNestedInput
    quizResults?: QuizResultUncheckedUpdateManyWithoutUserNestedInput
    suivis?: SuivreCoursUncheckedUpdateManyWithoutUserNestedInput
    visiosEnTantQueFormateur?: VisioSessionUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type CoursCreateWithoutCategoryInput = {
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursInput
    lessons?: LessonCreateNestedManyWithoutCoursInput
    quiz?: QuizCreateNestedManyWithoutCoursInput
    visios?: VisioSessionCreateNestedManyWithoutCoursInput
    suivis?: SuivreCoursCreateNestedManyWithoutCoursInput
  }

  export type CoursUncheckedCreateWithoutCategoryInput = {
    id?: number
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    lessons?: LessonUncheckedCreateNestedManyWithoutCoursInput
    quiz?: QuizUncheckedCreateNestedManyWithoutCoursInput
    visios?: VisioSessionUncheckedCreateNestedManyWithoutCoursInput
    suivis?: SuivreCoursUncheckedCreateNestedManyWithoutCoursInput
  }

  export type CoursCreateOrConnectWithoutCategoryInput = {
    where: CoursWhereUniqueInput
    create: XOR<CoursCreateWithoutCategoryInput, CoursUncheckedCreateWithoutCategoryInput>
  }

  export type CoursCreateManyCategoryInputEnvelope = {
    data: CoursCreateManyCategoryInput | CoursCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CoursUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CoursWhereUniqueInput
    update: XOR<CoursUpdateWithoutCategoryInput, CoursUncheckedUpdateWithoutCategoryInput>
    create: XOR<CoursCreateWithoutCategoryInput, CoursUncheckedCreateWithoutCategoryInput>
  }

  export type CoursUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CoursWhereUniqueInput
    data: XOR<CoursUpdateWithoutCategoryInput, CoursUncheckedUpdateWithoutCategoryInput>
  }

  export type CoursUpdateManyWithWhereWithoutCategoryInput = {
    where: CoursScalarWhereInput
    data: XOR<CoursUpdateManyMutationInput, CoursUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CoursCreateManyUserInput = {
    id?: number
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: number | null
  }

  export type UserLessonCreateManyUserInput = {
    id?: number
    lessonId: number
    isFinished?: boolean
  }

  export type QuizResultCreateManyUserInput = {
    id?: number
    quizId: number
    score: number
    attemptAt: Date | string
  }

  export type SuivreCoursCreateManyUserInput = {
    id?: number
    coursId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipationVisioCreateManyUtilisateurInput = {
    id?: number
    visioId: number
    estPresent?: boolean
    tempsDeConnexion?: number | null
    feedback?: string | null
  }

  export type VisioSessionCreateManyFormateurInput = {
    id?: number
    titre: string
    description?: string | null
    coursId: number
    lienVisio?: string | null
    dateDebut: Date | string
    dateFin: Date | string
    estEnregistre?: boolean
    lienEnregistrement?: string | null
  }

  export type CoursUpdateWithoutUserInput = {
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCoursNestedInput
    quiz?: QuizUpdateManyWithoutCoursNestedInput
    visios?: VisioSessionUpdateManyWithoutCoursNestedInput
    suivis?: SuivreCoursUpdateManyWithoutCoursNestedInput
    category?: CategoryUpdateOneWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    lessons?: LessonUncheckedUpdateManyWithoutCoursNestedInput
    quiz?: QuizUncheckedUpdateManyWithoutCoursNestedInput
    visios?: VisioSessionUncheckedUpdateManyWithoutCoursNestedInput
    suivis?: SuivreCoursUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserLessonUpdateWithoutUserInput = {
    isFinished?: BoolFieldUpdateOperationsInput | boolean
    lesson?: LessonUpdateOneRequiredWithoutUserLessonsNestedInput
  }

  export type UserLessonUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    isFinished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserLessonUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    isFinished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuizResultUpdateWithoutUserInput = {
    score?: IntFieldUpdateOperationsInput | number
    attemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutResultsNestedInput
  }

  export type QuizResultUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    attemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizResultUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    attemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuivreCoursUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUpdateOneRequiredWithoutSuivisNestedInput
  }

  export type SuivreCoursUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    coursId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuivreCoursUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    coursId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationVisioUpdateWithoutUtilisateurInput = {
    estPresent?: BoolFieldUpdateOperationsInput | boolean
    tempsDeConnexion?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    visio?: VisioSessionUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type ParticipationVisioUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    visioId?: IntFieldUpdateOperationsInput | number
    estPresent?: BoolFieldUpdateOperationsInput | boolean
    tempsDeConnexion?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipationVisioUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    visioId?: IntFieldUpdateOperationsInput | number
    estPresent?: BoolFieldUpdateOperationsInput | boolean
    tempsDeConnexion?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisioSessionUpdateWithoutFormateurInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lienVisio?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estEnregistre?: BoolFieldUpdateOperationsInput | boolean
    lienEnregistrement?: NullableStringFieldUpdateOperationsInput | string | null
    cours?: CoursUpdateOneRequiredWithoutVisiosNestedInput
    participations?: ParticipationVisioUpdateManyWithoutVisioNestedInput
  }

  export type VisioSessionUncheckedUpdateWithoutFormateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coursId?: IntFieldUpdateOperationsInput | number
    lienVisio?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estEnregistre?: BoolFieldUpdateOperationsInput | boolean
    lienEnregistrement?: NullableStringFieldUpdateOperationsInput | string | null
    participations?: ParticipationVisioUncheckedUpdateManyWithoutVisioNestedInput
  }

  export type VisioSessionUncheckedUpdateManyWithoutFormateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coursId?: IntFieldUpdateOperationsInput | number
    lienVisio?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estEnregistre?: BoolFieldUpdateOperationsInput | boolean
    lienEnregistrement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LessonCreateManyCoursInput = {
    id?: number
    title: string
    videoUrl?: string | null
    document?: string | null
    contenu?: string | null
  }

  export type QuizCreateManyCoursInput = {
    id?: number
    title: string
  }

  export type VisioSessionCreateManyCoursInput = {
    id?: number
    titre: string
    description?: string | null
    formateurId: number
    lienVisio?: string | null
    dateDebut: Date | string
    dateFin: Date | string
    estEnregistre?: boolean
    lienEnregistrement?: string | null
  }

  export type SuivreCoursCreateManyCoursInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUpdateWithoutCoursInput = {
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    userLessons?: UserLessonUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    userLessons?: UserLessonUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuizUpdateWithoutCoursInput = {
    title?: StringFieldUpdateOperationsInput | string
    questions?: QuizQuestionUpdateManyWithoutQuizNestedInput
    results?: QuizResultUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    questions?: QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput
    results?: QuizResultUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type VisioSessionUpdateWithoutCoursInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lienVisio?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estEnregistre?: BoolFieldUpdateOperationsInput | boolean
    lienEnregistrement?: NullableStringFieldUpdateOperationsInput | string | null
    formateur?: UserUpdateOneRequiredWithoutVisiosEnTantQueFormateurNestedInput
    participations?: ParticipationVisioUpdateManyWithoutVisioNestedInput
  }

  export type VisioSessionUncheckedUpdateWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formateurId?: IntFieldUpdateOperationsInput | number
    lienVisio?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estEnregistre?: BoolFieldUpdateOperationsInput | boolean
    lienEnregistrement?: NullableStringFieldUpdateOperationsInput | string | null
    participations?: ParticipationVisioUncheckedUpdateManyWithoutVisioNestedInput
  }

  export type VisioSessionUncheckedUpdateManyWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formateurId?: IntFieldUpdateOperationsInput | number
    lienVisio?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estEnregistre?: BoolFieldUpdateOperationsInput | boolean
    lienEnregistrement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SuivreCoursUpdateWithoutCoursInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSuivisNestedInput
  }

  export type SuivreCoursUncheckedUpdateWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuivreCoursUncheckedUpdateManyWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLessonCreateManyLessonInput = {
    id?: number
    userId: number
    isFinished?: boolean
  }

  export type UserLessonUpdateWithoutLessonInput = {
    isFinished?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserLessonsNestedInput
  }

  export type UserLessonUncheckedUpdateWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isFinished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserLessonUncheckedUpdateManyWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isFinished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuizQuestionCreateManyQuizInput = {
    id?: number
    type: string
    content: string
    answer: string
  }

  export type QuizResultCreateManyQuizInput = {
    id?: number
    userId: number
    score: number
    attemptAt: Date | string
  }

  export type QuizQuestionUpdateWithoutQuizInput = {
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    options?: QuizOptionUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    options?: QuizOptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type QuizResultUpdateWithoutQuizInput = {
    score?: IntFieldUpdateOperationsInput | number
    attemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuizResultsNestedInput
  }

  export type QuizResultUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    attemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizResultUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    attemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizOptionCreateManyQuestionInput = {
    id?: number
    nom: string
  }

  export type QuizOptionUpdateWithoutQuestionInput = {
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type QuizOptionUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type QuizOptionUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipationVisioCreateManyVisioInput = {
    id?: number
    utilisateurId: number
    estPresent?: boolean
    tempsDeConnexion?: number | null
    feedback?: string | null
  }

  export type ParticipationVisioUpdateWithoutVisioInput = {
    estPresent?: BoolFieldUpdateOperationsInput | boolean
    tempsDeConnexion?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    utilisateur?: UserUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type ParticipationVisioUncheckedUpdateWithoutVisioInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    estPresent?: BoolFieldUpdateOperationsInput | boolean
    tempsDeConnexion?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipationVisioUncheckedUpdateManyWithoutVisioInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    estPresent?: BoolFieldUpdateOperationsInput | boolean
    tempsDeConnexion?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoursCreateManyCategoryInput = {
    id?: number
    nom: string
    sousTitre: string
    description?: string | null
    level?: string | null
    content?: string | null
    image?: string | null
    video?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type CoursUpdateWithoutCategoryInput = {
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursNestedInput
    lessons?: LessonUpdateManyWithoutCoursNestedInput
    quiz?: QuizUpdateManyWithoutCoursNestedInput
    visios?: VisioSessionUpdateManyWithoutCoursNestedInput
    suivis?: SuivreCoursUpdateManyWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    lessons?: LessonUncheckedUpdateManyWithoutCoursNestedInput
    quiz?: QuizUncheckedUpdateManyWithoutCoursNestedInput
    visios?: VisioSessionUncheckedUpdateManyWithoutCoursNestedInput
    suivis?: SuivreCoursUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    sousTitre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
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