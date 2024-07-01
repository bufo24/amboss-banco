/* THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY. */
/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from '../../types';

const defaultOptions = {} as const;
export type ReceiveViaSwapMutationVariables = Types.Exact<{
  input: Types.ReceiveSwapInput;
}>;

export type ReceiveViaSwapMutation = {
  __typename?: 'Mutation';
  wallets: {
    __typename?: 'WalletMutations';
    create_onchain_address_swap: {
      __typename?: 'ReceiveSwap';
      id: string;
      coin: string;
      min: string;
      max: string;
      network: string;
      receive_address: string;
    };
  };
};

export const ReceiveViaSwapDocument = gql`
  mutation ReceiveViaSwap($input: ReceiveSwapInput!) {
    wallets {
      create_onchain_address_swap(input: $input) {
        id
        coin
        min
        max
        network
        receive_address
      }
    }
  }
`;
export type ReceiveViaSwapMutationFn = Apollo.MutationFunction<
  ReceiveViaSwapMutation,
  ReceiveViaSwapMutationVariables
>;

/**
 * __useReceiveViaSwapMutation__
 *
 * To run a mutation, you first call `useReceiveViaSwapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReceiveViaSwapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [receiveViaSwapMutation, { data, loading, error }] = useReceiveViaSwapMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReceiveViaSwapMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ReceiveViaSwapMutation,
    ReceiveViaSwapMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ReceiveViaSwapMutation,
    ReceiveViaSwapMutationVariables
  >(ReceiveViaSwapDocument, options);
}
export type ReceiveViaSwapMutationHookResult = ReturnType<
  typeof useReceiveViaSwapMutation
>;
export type ReceiveViaSwapMutationResult =
  Apollo.MutationResult<ReceiveViaSwapMutation>;
export type ReceiveViaSwapMutationOptions = Apollo.BaseMutationOptions<
  ReceiveViaSwapMutation,
  ReceiveViaSwapMutationVariables
>;
