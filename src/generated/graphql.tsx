export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
    __typename?: 'AffectedRowsOutput';
    count: Scalars['Int'];
  };
  
  export type AggregateUser = {
    __typename?: 'AggregateUser';
    _avg?: Maybe<UserAvgAggregate>;
    _count?: Maybe<UserCountAggregate>;
    _max?: Maybe<UserMaxAggregate>;
    _min?: Maybe<UserMinAggregate>;
    _sum?: Maybe<UserSumAggregate>;
  };
  
  export type DateTimeFieldUpdateOperationsInput = {
    set?: Maybe<Scalars['DateTime']>;
  };
  
  export type DateTimeFilter = {
    equals?: Maybe<Scalars['DateTime']>;
    gt?: Maybe<Scalars['DateTime']>;
    gte?: Maybe<Scalars['DateTime']>;
    in?: Maybe<Array<Scalars['DateTime']>>;
    lt?: Maybe<Scalars['DateTime']>;
    lte?: Maybe<Scalars['DateTime']>;
    not?: Maybe<NestedDateTimeFilter>;
    notIn?: Maybe<Array<Scalars['DateTime']>>;
  };
  
  export type DateTimeWithAggregatesFilter = {
    _count?: Maybe<NestedIntFilter>;
    _max?: Maybe<NestedDateTimeFilter>;
    _min?: Maybe<NestedDateTimeFilter>;
    equals?: Maybe<Scalars['DateTime']>;
    gt?: Maybe<Scalars['DateTime']>;
    gte?: Maybe<Scalars['DateTime']>;
    in?: Maybe<Array<Scalars['DateTime']>>;
    lt?: Maybe<Scalars['DateTime']>;
    lte?: Maybe<Scalars['DateTime']>;
    not?: Maybe<NestedDateTimeWithAggregatesFilter>;
    notIn?: Maybe<Array<Scalars['DateTime']>>;
  };
  
  export type FieldError = {
    __typename?: 'FieldError';
    field: Scalars['String'];
    message: Scalars['String'];
  };
  
  export type FloatFieldUpdateOperationsInput = {
    decrement?: Maybe<Scalars['Float']>;
    divide?: Maybe<Scalars['Float']>;
    increment?: Maybe<Scalars['Float']>;
    multiply?: Maybe<Scalars['Float']>;
    set?: Maybe<Scalars['Float']>;
  };
  
  export type FloatFilter = {
    equals?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    gte?: Maybe<Scalars['Float']>;
    in?: Maybe<Array<Scalars['Float']>>;
    lt?: Maybe<Scalars['Float']>;
    lte?: Maybe<Scalars['Float']>;
    not?: Maybe<NestedFloatFilter>;
    notIn?: Maybe<Array<Scalars['Float']>>;
  };
  
  export type FloatWithAggregatesFilter = {
    _avg?: Maybe<NestedFloatFilter>;
    _count?: Maybe<NestedIntFilter>;
    _max?: Maybe<NestedFloatFilter>;
    _min?: Maybe<NestedFloatFilter>;
    _sum?: Maybe<NestedFloatFilter>;
    equals?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    gte?: Maybe<Scalars['Float']>;
    in?: Maybe<Array<Scalars['Float']>>;
    lt?: Maybe<Scalars['Float']>;
    lte?: Maybe<Scalars['Float']>;
    not?: Maybe<NestedFloatWithAggregatesFilter>;
    notIn?: Maybe<Array<Scalars['Float']>>;
  };

  export type IntFilter = {
    equals?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Scalars['Int']>>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    not?: Maybe<NestedIntFilter>;
    notIn?: Maybe<Array<Scalars['Int']>>;
  };
  
  export type IntWithAggregatesFilter = {
    _avg?: Maybe<NestedFloatFilter>;
    _count?: Maybe<NestedIntFilter>;
    _max?: Maybe<NestedIntFilter>;
    _min?: Maybe<NestedIntFilter>;
    _sum?: Maybe<NestedIntFilter>;
    equals?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Scalars['Int']>>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    not?: Maybe<NestedIntWithAggregatesFilter>;
    notIn?: Maybe<Array<Scalars['Int']>>;
  };
  
  export type Mutation = {
    __typename?: 'Mutation';
    createUser: User;
    deleteManyUser: AffectedRowsOutput;
    deleteUser?: Maybe<User>;
    login: UserResponse;
    register: UserResponse;
    updateManyUser: AffectedRowsOutput;
    updateUser?: Maybe<User>;
    upsertUser: User;
  };
  
  export type MutationCreateUserArgs = {
    data: UserCreateInput;
  };

  export type MutationDeleteManyUserArgs = {
    where?: Maybe<UserWhereInput>;
  };
  
  
  export type MutationDeleteUserArgs = {
    where: UserWhereUniqueInput;
  };
  
  
  export type MutationLoginArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
  };
  
  
  export type MutationRegisterArgs = {
    options: UserInputType;
  };
  
  export type MutationUpdateManyUserArgs = {
    data: UserUpdateManyMutationInput;
    where?: Maybe<UserWhereInput>;
  };
  
  
  export type MutationUpdateUserArgs = {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  };
  
  
  export type MutationUpsertUserArgs = {
    create: UserCreateInput;
    update: UserUpdateInput;
    where: UserWhereUniqueInput;
  };
  
  export type NestedDateTimeFilter = {
    equals?: Maybe<Scalars['DateTime']>;
    gt?: Maybe<Scalars['DateTime']>;
    gte?: Maybe<Scalars['DateTime']>;
    in?: Maybe<Array<Scalars['DateTime']>>;
    lt?: Maybe<Scalars['DateTime']>;
    lte?: Maybe<Scalars['DateTime']>;
    not?: Maybe<NestedDateTimeFilter>;
    notIn?: Maybe<Array<Scalars['DateTime']>>;
  };
  
  export type NestedDateTimeWithAggregatesFilter = {
    _count?: Maybe<NestedIntFilter>;
    _max?: Maybe<NestedDateTimeFilter>;
    _min?: Maybe<NestedDateTimeFilter>;
    equals?: Maybe<Scalars['DateTime']>;
    gt?: Maybe<Scalars['DateTime']>;
    gte?: Maybe<Scalars['DateTime']>;
    in?: Maybe<Array<Scalars['DateTime']>>;
    lt?: Maybe<Scalars['DateTime']>;
    lte?: Maybe<Scalars['DateTime']>;
    not?: Maybe<NestedDateTimeWithAggregatesFilter>;
    notIn?: Maybe<Array<Scalars['DateTime']>>;
  };
  
  export type NestedFloatFilter = {
    equals?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    gte?: Maybe<Scalars['Float']>;
    in?: Maybe<Array<Scalars['Float']>>;
    lt?: Maybe<Scalars['Float']>;
    lte?: Maybe<Scalars['Float']>;
    not?: Maybe<NestedFloatFilter>;
    notIn?: Maybe<Array<Scalars['Float']>>;
  };
  
  export type NestedFloatWithAggregatesFilter = {
    _avg?: Maybe<NestedFloatFilter>;
    _count?: Maybe<NestedIntFilter>;
    _max?: Maybe<NestedFloatFilter>;
    _min?: Maybe<NestedFloatFilter>;
    _sum?: Maybe<NestedFloatFilter>;
    equals?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    gte?: Maybe<Scalars['Float']>;
    in?: Maybe<Array<Scalars['Float']>>;
    lt?: Maybe<Scalars['Float']>;
    lte?: Maybe<Scalars['Float']>;
    not?: Maybe<NestedFloatWithAggregatesFilter>;
    notIn?: Maybe<Array<Scalars['Float']>>;
  };
  
  export type NestedIntFilter = {
    equals?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Scalars['Int']>>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    not?: Maybe<NestedIntFilter>;
    notIn?: Maybe<Array<Scalars['Int']>>;
  };
  
  export type NestedIntNullableFilter = {
    equals?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Scalars['Int']>>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    not?: Maybe<NestedIntNullableFilter>;
    notIn?: Maybe<Array<Scalars['Int']>>;
  };
  
  export type NestedIntWithAggregatesFilter = {
    _avg?: Maybe<NestedFloatFilter>;
    _count?: Maybe<NestedIntFilter>;
    _max?: Maybe<NestedIntFilter>;
    _min?: Maybe<NestedIntFilter>;
    _sum?: Maybe<NestedIntFilter>;
    equals?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Scalars['Int']>>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    not?: Maybe<NestedIntWithAggregatesFilter>;
    notIn?: Maybe<Array<Scalars['Int']>>;
  };
  
  export type NestedStringFilter = {
    contains?: Maybe<Scalars['String']>;
    endsWith?: Maybe<Scalars['String']>;
    equals?: Maybe<Scalars['String']>;
    gt?: Maybe<Scalars['String']>;
    gte?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Scalars['String']>>;
    lt?: Maybe<Scalars['String']>;
    lte?: Maybe<Scalars['String']>;
    not?: Maybe<NestedStringFilter>;
    notIn?: Maybe<Array<Scalars['String']>>;
    startsWith?: Maybe<Scalars['String']>;
  };
  
  export type NestedStringNullableFilter = {
    contains?: Maybe<Scalars['String']>;
    endsWith?: Maybe<Scalars['String']>;
    equals?: Maybe<Scalars['String']>;
    gt?: Maybe<Scalars['String']>;
    gte?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Scalars['String']>>;
    lt?: Maybe<Scalars['String']>;
    lte?: Maybe<Scalars['String']>;
    not?: Maybe<NestedStringNullableFilter>;
    notIn?: Maybe<Array<Scalars['String']>>;
    startsWith?: Maybe<Scalars['String']>;
  };
  
  export type NestedStringNullableWithAggregatesFilter = {
    _count?: Maybe<NestedIntNullableFilter>;
    _max?: Maybe<NestedStringNullableFilter>;
    _min?: Maybe<NestedStringNullableFilter>;
    contains?: Maybe<Scalars['String']>;
    endsWith?: Maybe<Scalars['String']>;
    equals?: Maybe<Scalars['String']>;
    gt?: Maybe<Scalars['String']>;
    gte?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Scalars['String']>>;
    lt?: Maybe<Scalars['String']>;
    lte?: Maybe<Scalars['String']>;
    not?: Maybe<NestedStringNullableWithAggregatesFilter>;
    notIn?: Maybe<Array<Scalars['String']>>;
    startsWith?: Maybe<Scalars['String']>;
  };
  
  export type NestedStringWithAggregatesFilter = {
    _count?: Maybe<NestedIntFilter>;
    _max?: Maybe<NestedStringFilter>;
    _min?: Maybe<NestedStringFilter>;
    contains?: Maybe<Scalars['String']>;
    endsWith?: Maybe<Scalars['String']>;
    equals?: Maybe<Scalars['String']>;
    gt?: Maybe<Scalars['String']>;
    gte?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Scalars['String']>>;
    lt?: Maybe<Scalars['String']>;
    lte?: Maybe<Scalars['String']>;
    not?: Maybe<NestedStringWithAggregatesFilter>;
    notIn?: Maybe<Array<Scalars['String']>>;
    startsWith?: Maybe<Scalars['String']>;
  };
  
  export type NullableStringFieldUpdateOperationsInput = {
    set?: Maybe<Scalars['String']>;
  };
  
  export type Query = {
    __typename?: 'Query';
    aggregateUser: AggregateUser;
    findFirstUser?: Maybe<User>;
    groupByUser: Array<UserGroupBy>;
    user?: Maybe<User>;
    users: Array<User>;
  };
  
  export type QueryAggregateUserArgs = {
    cursor?: Maybe<UserWhereUniqueInput>;
    orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    where?: Maybe<UserWhereInput>;
  };
  
  export type QueryFindFirstUserArgs = {
    cursor?: Maybe<UserWhereUniqueInput>;
    distinct?: Maybe<Array<UserScalarFieldEnum>>;
    orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    where?: Maybe<UserWhereInput>;
  };
  
  export type QueryGroupByUserArgs = {
    by: Array<UserScalarFieldEnum>;
    having?: Maybe<UserScalarWhereWithAggregatesInput>;
    orderBy?: Maybe<Array<UserOrderByWithAggregationInput>>;
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    where?: Maybe<UserWhereInput>;
  };
  
  
  export type QueryUserArgs = {
    where: UserWhereUniqueInput;
  };
  
  
  export type QueryUsersArgs = {
    cursor?: Maybe<UserWhereUniqueInput>;
    distinct?: Maybe<Array<UserScalarFieldEnum>>;
    orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    where?: Maybe<UserWhereInput>;
  };
  
  export enum SortOrder {
    Asc = 'asc',
    Desc = 'desc'
  }
  
  export type StringFieldUpdateOperationsInput = {
    set?: Maybe<Scalars['String']>;
  };
  
  export type StringFilter = {
    contains?: Maybe<Scalars['String']>;
    endsWith?: Maybe<Scalars['String']>;
    equals?: Maybe<Scalars['String']>;
    gt?: Maybe<Scalars['String']>;
    gte?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Scalars['String']>>;
    lt?: Maybe<Scalars['String']>;
    lte?: Maybe<Scalars['String']>;
    not?: Maybe<NestedStringFilter>;
    notIn?: Maybe<Array<Scalars['String']>>;
    startsWith?: Maybe<Scalars['String']>;
  };
  
  export type StringNullableFilter = {
    contains?: Maybe<Scalars['String']>;
    endsWith?: Maybe<Scalars['String']>;
    equals?: Maybe<Scalars['String']>;
    gt?: Maybe<Scalars['String']>;
    gte?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Scalars['String']>>;
    lt?: Maybe<Scalars['String']>;
    lte?: Maybe<Scalars['String']>;
    not?: Maybe<NestedStringNullableFilter>;
    notIn?: Maybe<Array<Scalars['String']>>;
    startsWith?: Maybe<Scalars['String']>;
  };
  
  export type StringNullableWithAggregatesFilter = {
    _count?: Maybe<NestedIntNullableFilter>;
    _max?: Maybe<NestedStringNullableFilter>;
    _min?: Maybe<NestedStringNullableFilter>;
    contains?: Maybe<Scalars['String']>;
    endsWith?: Maybe<Scalars['String']>;
    equals?: Maybe<Scalars['String']>;
    gt?: Maybe<Scalars['String']>;
    gte?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Scalars['String']>>;
    lt?: Maybe<Scalars['String']>;
    lte?: Maybe<Scalars['String']>;
    not?: Maybe<NestedStringNullableWithAggregatesFilter>;
    notIn?: Maybe<Array<Scalars['String']>>;
    startsWith?: Maybe<Scalars['String']>;
  };
  
  export type StringWithAggregatesFilter = {
    _count?: Maybe<NestedIntFilter>;
    _max?: Maybe<NestedStringFilter>;
    _min?: Maybe<NestedStringFilter>;
    contains?: Maybe<Scalars['String']>;
    endsWith?: Maybe<Scalars['String']>;
    equals?: Maybe<Scalars['String']>;
    gt?: Maybe<Scalars['String']>;
    gte?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Scalars['String']>>;
    lt?: Maybe<Scalars['String']>;
    lte?: Maybe<Scalars['String']>;
    not?: Maybe<NestedStringWithAggregatesFilter>;
    notIn?: Maybe<Array<Scalars['String']>>;
    startsWith?: Maybe<Scalars['String']>;
  };
  
  export type User = {
    __typename?: 'User';
    id: Scalars['Int'];
    name: Scalars['String'];
    phone: Scalars['String'];
    email: Scalars['String'];
  };
  
  export type UserAvgAggregate = {
    __typename?: 'UserAvgAggregate';
    id?: Maybe<Scalars['Float']>;
  };
  
  export type UserAvgOrderByAggregateInput = {
    id?: Maybe<SortOrder>;
  };
  
  export type UserCountAggregate = {
    __typename?: 'UserCountAggregate';
    _all: Scalars['Int'];
    phone: Scalars['Int'];
    createdAt: Scalars['Int'];
    email: Scalars['Int'];
    id: Scalars['Int'];
    name: Scalars['Int'];
    password: Scalars['Int'];
    updatedAt: Scalars['Int'];
  };
  
  export type UserCountOrderByAggregateInput = {
    phone?: Maybe<SortOrder>;
    email?: Maybe<SortOrder>;
    id?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    password?: Maybe<SortOrder>;
  };
  
  export type UserCreateInput = {
    phone: Scalars['String'];
    email: Scalars['String'];
    name: Scalars['String'];
    password: Scalars['String'];
  };
  
  export type UserCreateNestedOneWithoutPostedGamesInput = {
    connect?: Maybe<UserWhereUniqueInput>;
    connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostedGamesInput>;
    create?: Maybe<UserCreateWithoutPostedGamesInput>;
  };
  
  export type UserCreateOrConnectWithoutPostedGamesInput = {
    create: UserCreateWithoutPostedGamesInput;
    where: UserWhereUniqueInput;
  };
  
  export type UserCreateWithoutPostedGamesInput = {
    phone: Scalars['String'];
    email: Scalars['String'];
    name: Scalars['String'];
    password: Scalars['String'];
  };
  
  export type UserGroupBy = {
    __typename?: 'UserGroupBy';
    _avg?: Maybe<UserAvgAggregate>;
    _count?: Maybe<UserCountAggregate>;
    _max?: Maybe<UserMaxAggregate>;
    _min?: Maybe<UserMinAggregate>;
    _sum?: Maybe<UserSumAggregate>;
    phone: Scalars['String'];
    createdAt: Scalars['DateTime'];
    email: Scalars['String'];
    id: Scalars['Int'];
    name: Scalars['String'];
    password: Scalars['String'];
    updatedAt: Scalars['DateTime'];
  };
  
  export type UserInputType = {
    confirmPassword: Scalars['String'];
    phone: Scalars['String'];
    email: Scalars['String'];
    name: Scalars['String'];
    password: Scalars['String'];
  };
  
  export type UserMaxAggregate = {
    __typename?: 'UserMaxAggregate';
    phone?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
  };
  
  export type UserMaxOrderByAggregateInput = {
    phone?: Maybe<SortOrder>;
    email?: Maybe<SortOrder>;
    id?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    password?: Maybe<SortOrder>;
  };
  
  export type UserMinAggregate = {
    __typename?: 'UserMinAggregate';
    phone?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
  };
  
  export type UserMinOrderByAggregateInput = {
    phone?: Maybe<SortOrder>;
    email?: Maybe<SortOrder>;
    id?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    password?: Maybe<SortOrder>;
  };
  
  export type UserOrderByWithAggregationInput = {
    _avg?: Maybe<UserAvgOrderByAggregateInput>;
    _count?: Maybe<UserCountOrderByAggregateInput>;
    _max?: Maybe<UserMaxOrderByAggregateInput>;
    _min?: Maybe<UserMinOrderByAggregateInput>;
    _sum?: Maybe<UserSumOrderByAggregateInput>;
    phone?: Maybe<SortOrder>;
    email?: Maybe<SortOrder>;
    id?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    password?: Maybe<SortOrder>;
  };
  
  export type UserOrderByWithRelationInput = {
    phone?: Maybe<SortOrder>;
    email?: Maybe<SortOrder>;
    id?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    password?: Maybe<SortOrder>;
  };
  
  export type UserRelationFilter = {
    is?: Maybe<UserWhereInput>;
    isNot?: Maybe<UserWhereInput>;
  };
  
  export type UserResponse = {
    __typename?: 'UserResponse';
    errors?: Maybe<Array<FieldError>>;
    user?: Maybe<User>;
  };
  
  export enum UserScalarFieldEnum {
    phone = 'phone',
    CreatedAt = 'createdAt',
    Email = 'email',
    Id = 'id',
    Name = 'name',
    Password = 'password',
    UpdatedAt = 'updatedAt'
  }
  
  export type UserScalarWhereWithAggregatesInput = {
    AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
    NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
    OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
    phone?: Maybe<StringWithAggregatesFilter>;
    email?: Maybe<StringWithAggregatesFilter>;
    id?: Maybe<IntWithAggregatesFilter>;
    name?: Maybe<StringWithAggregatesFilter>;
    password?: Maybe<StringWithAggregatesFilter>;
  };
  
  export type UserSumAggregate = {
    __typename?: 'UserSumAggregate';
    id?: Maybe<Scalars['Int']>;
  };
  
  export type UserSumOrderByAggregateInput = {
    id?: Maybe<SortOrder>;
  };
  
  export type UserUpdateInput = {
    phone?: Maybe<StringFieldUpdateOperationsInput>;
    email?: Maybe<StringFieldUpdateOperationsInput>;
    name?: Maybe<StringFieldUpdateOperationsInput>;
    password?: Maybe<StringFieldUpdateOperationsInput>;
  };
  
  export type UserUpdateManyMutationInput = {
    phone?: Maybe<StringFieldUpdateOperationsInput>;
    email?: Maybe<StringFieldUpdateOperationsInput>;
    name?: Maybe<StringFieldUpdateOperationsInput>;
    password?: Maybe<StringFieldUpdateOperationsInput>;
  };
  
  export type UserUpdateOneRequiredWithoutPostedGamesInput = {
    connect?: Maybe<UserWhereUniqueInput>;
    connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostedGamesInput>;
    create?: Maybe<UserCreateWithoutPostedGamesInput>;
    update?: Maybe<UserUpdateWithoutPostedGamesInput>;
    upsert?: Maybe<UserUpsertWithoutPostedGamesInput>;
  };
  
  export type UserUpdateWithoutPostedGamesInput = {
    phone?: Maybe<StringFieldUpdateOperationsInput>;
    email?: Maybe<StringFieldUpdateOperationsInput>;
    name?: Maybe<StringFieldUpdateOperationsInput>;
    password?: Maybe<StringFieldUpdateOperationsInput>;
  };
  
  export type UserUpsertWithoutPostedGamesInput = {
    create: UserCreateWithoutPostedGamesInput;
    update: UserUpdateWithoutPostedGamesInput;
  };
  
  export type UserWhereInput = {
    AND?: Maybe<Array<UserWhereInput>>;
    NOT?: Maybe<Array<UserWhereInput>>;
    OR?: Maybe<Array<UserWhereInput>>;
    phone?: Maybe<StringFilter>;
    email?: Maybe<StringFilter>;
    id?: Maybe<IntFilter>;
    name?: Maybe<StringFilter>;
    password?: Maybe<StringFilter>;
  };
  
  export type UserWhereUniqueInput = {
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
  };
  
  export type CreateGameMutation = { __typename?: 'Mutation', createGame: { __typename?: 'Game', id: number } };
  
  export type DeleteGameMutation = { __typename?: 'Mutation', deleteGame?: { __typename?: 'Game', id: number } | null | undefined };
  
  export type LoginMutationVariables = Exact<{
    password: Scalars['String'];
    email: Scalars['String'];
  }>;
  
  
  export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, name: string, email: string, phone: string, postedGames: Array<{ __typename?: 'Game', id: number, name: string }> } | null | undefined } };
  
  export type RegisterMutationVariables = Exact<{
    options: UserInputType;
  }>;
  
  
  export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', email: string } | null | undefined } };
  
  export type UpdateGameMutation = { __typename?: 'Mutation', updateGame?: { __typename?: 'Game', id: number } | null | undefined };
  
  export type GameQuery = { __typename?: 'Query', game?: { __typename?: 'Game', id: number, name: string, developer: string, category: string, description: string, price: number, releaseDate: string, OP: { __typename?: 'User', id: number, name: string } } | null | undefined };
  
  export type GameWithImageQuery = { __typename?: 'Query', game?: { __typename?: 'Game', id: number, name: string, developer: string, category: string, description: string, price: number, releaseDate: string, image?: string | null | undefined, OP: { __typename?: 'User', id: number, name: string } } | null | undefined };
  
  export type GetUserQueryVariables = Exact<{
    where: UserWhereUniqueInput;
  }>;
  
  export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, name: string, email: string, phone: string } | null | undefined };
  