import { gql } from '@apollo/client';

export const ReceiveViaSwap = gql`
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
