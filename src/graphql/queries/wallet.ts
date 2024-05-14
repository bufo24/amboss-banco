import { gql } from '@apollo/client';

export const GetAllWallets = gql`
  query getAllWallets {
    wallets {
      id
      find_many {
        id
        name
        accounts {
          id
          name
          account_type
        }
      }
    }
  }
`;

export const GetWallet = gql`
  query getWallet($id: String!) {
    wallets {
      id
      find_one(id: $id) {
        id
        name
        details {
          id
          type
          protected_mnemonic
        }
        accounts {
          id
          name
          descriptor
          account_type
          liquid {
            id
            assets {
              id
              balance
              asset_id
              asset_info {
                id
                is_featured
                name
                precision
                ticker
              }
            }
            transactions {
              id
              unblinded_url
              tx_id
              fee
              date
              block_height
              blinded_url
              balance
              asset_id
              asset_info {
                id
                is_featured
                name
                precision
                ticker
              }
            }
          }
        }
      }
    }
  }
`;
