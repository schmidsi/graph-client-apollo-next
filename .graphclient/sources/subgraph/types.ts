// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SubgraphTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Contract = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  totalSupply: Scalars['BigInt'];
  mintedTokens: Array<Token>;
  currentStartBlock?: Maybe<Scalars['BigInt']>;
  currentSet?: Maybe<Scalars['BigInt']>;
  mintStatus: MintStatus;
};


export type ContractmintedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};

export type Contract_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokens_?: InputMaybe<Token_filter>;
  currentStartBlock?: InputMaybe<Scalars['BigInt']>;
  currentStartBlock_not?: InputMaybe<Scalars['BigInt']>;
  currentStartBlock_gt?: InputMaybe<Scalars['BigInt']>;
  currentStartBlock_lt?: InputMaybe<Scalars['BigInt']>;
  currentStartBlock_gte?: InputMaybe<Scalars['BigInt']>;
  currentStartBlock_lte?: InputMaybe<Scalars['BigInt']>;
  currentStartBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentStartBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentSet?: InputMaybe<Scalars['BigInt']>;
  currentSet_not?: InputMaybe<Scalars['BigInt']>;
  currentSet_gt?: InputMaybe<Scalars['BigInt']>;
  currentSet_lt?: InputMaybe<Scalars['BigInt']>;
  currentSet_gte?: InputMaybe<Scalars['BigInt']>;
  currentSet_lte?: InputMaybe<Scalars['BigInt']>;
  currentSet_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentSet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mintStatus?: InputMaybe<MintStatus>;
  mintStatus_not?: InputMaybe<MintStatus>;
  mintStatus_in?: InputMaybe<Array<MintStatus>>;
  mintStatus_not_in?: InputMaybe<Array<MintStatus>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Contract_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'totalSupply'
  | 'mintedTokens'
  | 'currentStartBlock'
  | 'currentSet'
  | 'mintStatus';

export type MintStatus =
  | 'NOT_STARTED'
  | 'SET_ANNOUNCED'
  | 'SET_SOLD_OUT'
  | 'SOLD_OUT';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Owner = {
  id: Scalars['ID'];
  ownedTokens: Array<Token>;
  balance: Scalars['BigInt'];
};


export type OwnerownedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};

export type Owner_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ownedTokens_?: InputMaybe<Token_filter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Owner_orderBy =
  | 'id'
  | 'ownedTokens'
  | 'balance';

export type Query = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  owner?: Maybe<Owner>;
  owners: Array<Owner>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  trait?: Maybe<Trait>;
  traits: Array<Trait>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Owner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Owner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Contract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytraitArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytraitsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trait_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Trait_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  owner?: Maybe<Owner>;
  owners: Array<Owner>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  trait?: Maybe<Trait>;
  traits: Array<Trait>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Owner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Owner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Contract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontraitArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontraitsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trait_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Trait_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  id: Scalars['ID'];
  tokenId: Scalars['BigInt'];
  owner: Owner;
  uri?: Maybe<Scalars['String']>;
  audioBase64?: Maybe<Scalars['String']>;
  svgAnimatedBase64?: Maybe<Scalars['String']>;
  svgStaticBase64?: Maybe<Scalars['String']>;
  svgAnimatedWithAudioBase64?: Maybe<Scalars['String']>;
  transfers: Array<Transfer>;
  contract?: Maybe<Contract>;
  traits: Array<Trait>;
};


export type TokentransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
};


export type TokentraitsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trait_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Trait_filter>;
};

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Owner_filter>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  audioBase64?: InputMaybe<Scalars['String']>;
  audioBase64_not?: InputMaybe<Scalars['String']>;
  audioBase64_gt?: InputMaybe<Scalars['String']>;
  audioBase64_lt?: InputMaybe<Scalars['String']>;
  audioBase64_gte?: InputMaybe<Scalars['String']>;
  audioBase64_lte?: InputMaybe<Scalars['String']>;
  audioBase64_in?: InputMaybe<Array<Scalars['String']>>;
  audioBase64_not_in?: InputMaybe<Array<Scalars['String']>>;
  audioBase64_contains?: InputMaybe<Scalars['String']>;
  audioBase64_contains_nocase?: InputMaybe<Scalars['String']>;
  audioBase64_not_contains?: InputMaybe<Scalars['String']>;
  audioBase64_not_contains_nocase?: InputMaybe<Scalars['String']>;
  audioBase64_starts_with?: InputMaybe<Scalars['String']>;
  audioBase64_starts_with_nocase?: InputMaybe<Scalars['String']>;
  audioBase64_not_starts_with?: InputMaybe<Scalars['String']>;
  audioBase64_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  audioBase64_ends_with?: InputMaybe<Scalars['String']>;
  audioBase64_ends_with_nocase?: InputMaybe<Scalars['String']>;
  audioBase64_not_ends_with?: InputMaybe<Scalars['String']>;
  audioBase64_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_not?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_gt?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_lt?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_gte?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_lte?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_in?: InputMaybe<Array<Scalars['String']>>;
  svgAnimatedBase64_not_in?: InputMaybe<Array<Scalars['String']>>;
  svgAnimatedBase64_contains?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_contains_nocase?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_not_contains?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_not_contains_nocase?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_starts_with?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_starts_with_nocase?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_not_starts_with?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_ends_with?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_ends_with_nocase?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_not_ends_with?: InputMaybe<Scalars['String']>;
  svgAnimatedBase64_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  svgStaticBase64?: InputMaybe<Scalars['String']>;
  svgStaticBase64_not?: InputMaybe<Scalars['String']>;
  svgStaticBase64_gt?: InputMaybe<Scalars['String']>;
  svgStaticBase64_lt?: InputMaybe<Scalars['String']>;
  svgStaticBase64_gte?: InputMaybe<Scalars['String']>;
  svgStaticBase64_lte?: InputMaybe<Scalars['String']>;
  svgStaticBase64_in?: InputMaybe<Array<Scalars['String']>>;
  svgStaticBase64_not_in?: InputMaybe<Array<Scalars['String']>>;
  svgStaticBase64_contains?: InputMaybe<Scalars['String']>;
  svgStaticBase64_contains_nocase?: InputMaybe<Scalars['String']>;
  svgStaticBase64_not_contains?: InputMaybe<Scalars['String']>;
  svgStaticBase64_not_contains_nocase?: InputMaybe<Scalars['String']>;
  svgStaticBase64_starts_with?: InputMaybe<Scalars['String']>;
  svgStaticBase64_starts_with_nocase?: InputMaybe<Scalars['String']>;
  svgStaticBase64_not_starts_with?: InputMaybe<Scalars['String']>;
  svgStaticBase64_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  svgStaticBase64_ends_with?: InputMaybe<Scalars['String']>;
  svgStaticBase64_ends_with_nocase?: InputMaybe<Scalars['String']>;
  svgStaticBase64_not_ends_with?: InputMaybe<Scalars['String']>;
  svgStaticBase64_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_not?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_gt?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_lt?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_gte?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_lte?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_in?: InputMaybe<Array<Scalars['String']>>;
  svgAnimatedWithAudioBase64_not_in?: InputMaybe<Array<Scalars['String']>>;
  svgAnimatedWithAudioBase64_contains?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_contains_nocase?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_not_contains?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_not_contains_nocase?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_starts_with?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_starts_with_nocase?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_not_starts_with?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_ends_with?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_ends_with_nocase?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_not_ends_with?: InputMaybe<Scalars['String']>;
  svgAnimatedWithAudioBase64_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfers_?: InputMaybe<Transfer_filter>;
  contract?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_filter>;
  traits?: InputMaybe<Array<Scalars['String']>>;
  traits_not?: InputMaybe<Array<Scalars['String']>>;
  traits_contains?: InputMaybe<Array<Scalars['String']>>;
  traits_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  traits_not_contains?: InputMaybe<Array<Scalars['String']>>;
  traits_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  traits_?: InputMaybe<Trait_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Token_orderBy =
  | 'id'
  | 'tokenId'
  | 'owner'
  | 'uri'
  | 'audioBase64'
  | 'svgAnimatedBase64'
  | 'svgStaticBase64'
  | 'svgAnimatedWithAudioBase64'
  | 'transfers'
  | 'contract'
  | 'traits';

export type Trait = {
  id: Scalars['ID'];
  name: Scalars['String'];
  type: TraitType;
  tokens: Array<Token>;
  numberOfNfts: Scalars['BigInt'];
};


export type TraittokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};

export type TraitType =
  | 'BASE'
  | 'INSTRUMENT'
  | 'CHILL'
  | 'BPM'
  | 'SCALE'
  | 'SET';

export type Trait_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TraitType>;
  type_not?: InputMaybe<TraitType>;
  type_in?: InputMaybe<Array<TraitType>>;
  type_not_in?: InputMaybe<Array<TraitType>>;
  tokens_?: InputMaybe<Token_filter>;
  numberOfNfts?: InputMaybe<Scalars['BigInt']>;
  numberOfNfts_not?: InputMaybe<Scalars['BigInt']>;
  numberOfNfts_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfNfts_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfNfts_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfNfts_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfNfts_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfNfts_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Trait_orderBy =
  | 'id'
  | 'name'
  | 'type'
  | 'tokens'
  | 'numberOfNfts';

export type Transfer = {
  id: Scalars['ID'];
  token: Token;
  from?: Maybe<Owner>;
  to?: Maybe<Owner>;
  timestamp: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  transactionHash: Scalars['String'];
};

export type Transfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Owner_filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Owner_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['String']>;
  transactionHash_not?: InputMaybe<Scalars['String']>;
  transactionHash_gt?: InputMaybe<Scalars['String']>;
  transactionHash_lt?: InputMaybe<Scalars['String']>;
  transactionHash_gte?: InputMaybe<Scalars['String']>;
  transactionHash_lte?: InputMaybe<Scalars['String']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_contains?: InputMaybe<Scalars['String']>;
  transactionHash_contains_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_starts_with?: InputMaybe<Scalars['String']>;
  transactionHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_starts_with?: InputMaybe<Scalars['String']>;
  transactionHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_ends_with?: InputMaybe<Scalars['String']>;
  transactionHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_ends_with?: InputMaybe<Scalars['String']>;
  transactionHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Transfer_orderBy =
  | 'id'
  | 'token'
  | 'from'
  | 'to'
  | 'timestamp'
  | 'blockNumber'
  | 'transactionHash';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  owner: InContextSdkMethod<Query['owner'], QueryownerArgs, MeshContext>,
  /** null **/
  owners: InContextSdkMethod<Query['owners'], QueryownersArgs, MeshContext>,
  /** null **/
  contract: InContextSdkMethod<Query['contract'], QuerycontractArgs, MeshContext>,
  /** null **/
  contracts: InContextSdkMethod<Query['contracts'], QuerycontractsArgs, MeshContext>,
  /** null **/
  transfer: InContextSdkMethod<Query['transfer'], QuerytransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Query['transfers'], QuerytransfersArgs, MeshContext>,
  /** null **/
  trait: InContextSdkMethod<Query['trait'], QuerytraitArgs, MeshContext>,
  /** null **/
  traits: InContextSdkMethod<Query['traits'], QuerytraitsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  owner: InContextSdkMethod<Subscription['owner'], SubscriptionownerArgs, MeshContext>,
  /** null **/
  owners: InContextSdkMethod<Subscription['owners'], SubscriptionownersArgs, MeshContext>,
  /** null **/
  contract: InContextSdkMethod<Subscription['contract'], SubscriptioncontractArgs, MeshContext>,
  /** null **/
  contracts: InContextSdkMethod<Subscription['contracts'], SubscriptioncontractsArgs, MeshContext>,
  /** null **/
  transfer: InContextSdkMethod<Subscription['transfer'], SubscriptiontransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Subscription['transfers'], SubscriptiontransfersArgs, MeshContext>,
  /** null **/
  trait: InContextSdkMethod<Subscription['trait'], SubscriptiontraitArgs, MeshContext>,
  /** null **/
  traits: InContextSdkMethod<Subscription['traits'], SubscriptiontraitsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["subgraph"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
