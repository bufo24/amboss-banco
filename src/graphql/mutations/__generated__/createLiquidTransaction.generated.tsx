/* THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY. */
/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from '../../types';

const defaultOptions = {} as const;
export type CreateLiquidTransactionMutationVariables = Types.Exact<{
  input: Types.CreateLiquidTransactionInput;
}>;

export type CreateLiquidTransactionMutation = {
  __typename?: 'Mutation';
  wallets: {
    __typename?: 'WalletMutations';
    create_liquid_transaction: {
      __typename?: 'CreateLiquidTransaction';
      base_64: string;
      wallet_account: {
        __typename?: 'WalletAccount';
        id: string;
        descriptor: string;
      };
    };
  };
};

export const CreateLiquidTransactionDocument = gql`
  mutation CreateLiquidTransaction($input: CreateLiquidTransactionInput!) {
    wallets {
      create_liquid_transaction(input: $input) {
        wallet_account {
          id
          descriptor
        }
        base_64
      }
    }
  }
`;
export type CreateLiquidTransactionMutationFn = Apollo.MutationFunction<
  CreateLiquidTransactionMutation,
  CreateLiquidTransactionMutationVariables
>;

/**
 * __useCreateLiquidTransactionMutation__
 *
 * To run a mutation, you first call `useCreateLiquidTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLiquidTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLiquidTransactionMutation, { data, loading, error }] = useCreateLiquidTransactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLiquidTransactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLiquidTransactionMutation,
    CreateLiquidTransactionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateLiquidTransactionMutation,
    CreateLiquidTransactionMutationVariables
  >(CreateLiquidTransactionDocument, options);
}
export type CreateLiquidTransactionMutationHookResult = ReturnType<
  typeof useCreateLiquidTransactionMutation
>;
export type CreateLiquidTransactionMutationResult =
  Apollo.MutationResult<CreateLiquidTransactionMutation>;
export type CreateLiquidTransactionMutationOptions = Apollo.BaseMutationOptions<
  CreateLiquidTransactionMutation,
  CreateLiquidTransactionMutationVariables
>;
