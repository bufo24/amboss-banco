/* THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY. */
/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type BroadcastLiquidTransaction = {
  __typename?: 'BroadcastLiquidTransaction';
  tx_id: Scalars['String']['output'];
};

export type CreateAccountInput = {
  liquid_descriptor: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type: WalletAccountType;
};

export type CreateLiquidTransaction = {
  __typename?: 'CreateLiquidTransaction';
  base_64: Scalars['String']['output'];
};

export type CreateLiquidTransactionInput = {
  fee_rate: Scalars['Float']['input'];
  recipients: Array<LiquidRecipient>;
  wallet_account_id: Scalars['String']['input'];
};

export type CreateWallet = {
  __typename?: 'CreateWallet';
  id: Scalars['String']['output'];
};

export type CreateWalletInput = {
  accounts: Array<CreateAccountInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GetEmailPinResult = {
  __typename?: 'GetEmailPinResult';
  email: Scalars['String']['output'];
};

export type LiquidRecipient = {
  address: Scalars['String']['input'];
  amount: Scalars['String']['input'];
  asset_id?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  publicAuth: PublicAuthMutations;
  wallets: WalletMutations;
};

export type PublicAuthMutations = {
  __typename?: 'PublicAuthMutations';
  getEmailPin: GetEmailPinResult;
  verifyPin: VerifyPinResult;
};

export type PublicAuthMutationsGetEmailPinArgs = {
  email: Scalars['String']['input'];
};

export type PublicAuthMutationsVerifyPinArgs = {
  email: Scalars['String']['input'];
  pin: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getHello: Scalars['String']['output'];
  user: User;
  wallets: WalletQueries;
};

export type SimpleWallet = {
  __typename?: 'SimpleWallet';
  accounts: Array<SimpleWalletAccount>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SimpleWalletAccount = {
  __typename?: 'SimpleWalletAccount';
  account_type: WalletAccountType;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type VerifyPinResult = {
  __typename?: 'VerifyPinResult';
  jwt: Scalars['String']['output'];
};

export type Wallet = {
  __typename?: 'Wallet';
  accounts: Array<WalletAccount>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type WalletAccount = {
  __typename?: 'WalletAccount';
  account_type: WalletAccountType;
  id: Scalars['String']['output'];
  liquid_assets: Array<WalletLiquidAsset>;
  name: Scalars['String']['output'];
};

export enum WalletAccountType {
  Liquid = 'LIQUID',
}

export type WalletLiquidAsset = {
  __typename?: 'WalletLiquidAsset';
  asset_id: Scalars['String']['output'];
  asset_info: WalletLiquidAssetInfo;
  balance: Scalars['String']['output'];
  id: Scalars['String']['output'];
  transactions: Array<WalletLiquidTransaction>;
};

export type WalletLiquidAssetInfo = {
  __typename?: 'WalletLiquidAssetInfo';
  id: Scalars['String']['output'];
  is_featured: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  precision: Scalars['Float']['output'];
  ticker: Scalars['String']['output'];
};

export type WalletLiquidTransaction = {
  __typename?: 'WalletLiquidTransaction';
  balance: Scalars['String']['output'];
  blinded_url: Scalars['String']['output'];
  block_height: Scalars['String']['output'];
  date?: Maybe<Scalars['String']['output']>;
  fee: Scalars['String']['output'];
  id: Scalars['String']['output'];
  tx_id: Scalars['String']['output'];
  unblinded_url: Scalars['String']['output'];
};

export type WalletMutations = {
  __typename?: 'WalletMutations';
  create: CreateWallet;
  createLiquidTransaction: CreateLiquidTransaction;
  signAndBroadcast: BroadcastLiquidTransaction;
};

export type WalletMutationsCreateArgs = {
  input: CreateWalletInput;
};

export type WalletMutationsCreateLiquidTransactionArgs = {
  input: CreateLiquidTransactionInput;
};

export type WalletMutationsSignAndBroadcastArgs = {
  base64: Scalars['String']['input'];
};

export type WalletQueries = {
  __typename?: 'WalletQueries';
  find_many: Array<SimpleWallet>;
  find_one: Wallet;
  id: Scalars['String']['output'];
};

export type WalletQueriesFind_OneArgs = {
  id: Scalars['String']['input'];
};