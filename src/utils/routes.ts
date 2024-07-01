export const ROUTES = {
  home: '/',
  signup: '/sign-up',
  login: '/login',
  app: {
    home: '/app',
    user: '/app/user',
    wallet: {
      home: '/app/wallet',
      settings: (id: string) => `/app/wallet/${id}/settings`,
      receive: (walletId: string, accountId: string) =>
        `/app/wallet/${walletId}/account/${accountId}/receive`,
      receiveViaSwap: (
        walletId: string,
        accountId: string,
        network: string,
        coin: string
      ) =>
        `/app/wallet/${walletId}/account/${accountId}/receive?coin=${coin}&network=${network}`,
      send: {
        home: (walletId: string, accountId: string, assetId: string) =>
          `/app/wallet/${walletId}/account/${accountId}/send?assetId=${assetId}`,
        address: (walletId: string, accountId: string, assetId: string) =>
          `/app/wallet/${walletId}/account/${accountId}/send/address?assetId=${assetId}`,
        invoice: (walletId: string, accountId: string, assetId: string) =>
          `/app/wallet/${walletId}/account/${accountId}/send/invoice?assetId=${assetId}`,
        networkSwap: (walletId: string, accountId: string, network: string) =>
          `/app/wallet/${walletId}/account/${accountId}/send/address?network=${network}`,
      },
    },
    contacts: {
      home: '/app/contacts',
    },
  },
  setup: {
    wallet: {
      home: '/setup/wallet',
      new: '/setup/wallet/new',
      restore: '/setup/wallet/restore',
    },
  },
};
