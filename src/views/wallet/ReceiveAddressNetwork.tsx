import { Loader2 } from 'lucide-react';
import { useQRCode } from 'next-qrcode';
import { FC, useEffect, useMemo } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { useReceiveViaSwapMutation } from '@/graphql/mutations/__generated__/receiveViaSwap.generated';


export const ReceiveAddressNetwork: FC<{ accountId: string, coin: string, network: string }> = ({ accountId, coin, network }) => {
  const { Canvas } = useQRCode();



  const [create, { data, loading, error }] = useReceiveViaSwapMutation({
    variables: { input: { deposit_coin: coin, deposit_network: network, wallet_account_id: accountId } },
  });

  useEffect(() => {
    create();
  }, [create]);

  const addressInfo = useMemo(() => {
    if (loading) return { address: '', formatted: '' };
    if (error) return { address: '', formatted: '' };
    if (!data?.wallets.create_onchain_address_swap.receive_address) {
      return { address: '', formatted: '' };
    }

    const { min, max, network, receive_address: originalAddress } = data.wallets.create_onchain_address_swap;

    const formatted = originalAddress.match(/.{1,6}/g) || [];

    return { address: originalAddress, formatted: formatted.join(' - '), min, max, network };
  }, [data, loading, error]);

  if (loading) {
    return (
      <div className="flex w-full justify-center py-4">
        <Loader2 className="size-4 animate-spin" />
      </div>
    );
  }

  if (error || !addressInfo.address) {
    return (
      <div className="flex w-full justify-center py-4">
        <p className="text-sm text-muted-foreground">
          Error getting onchain address.
        </p>
      </div>
    );
  }

  return (
    <Card className="flex max-w-96 flex-col items-center justify-center">
      <CardHeader>
        <CardTitle>New Address</CardTitle>
        <CardDescription>Please sure to only send funds over the <b>{addressInfo.network}</b> network!</CardDescription>
        <CardDescription>Min deposit <b>{addressInfo.min}</b></CardDescription>
        <CardDescription>Min deposit <b>{addressInfo.max}</b></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <Canvas
            text={addressInfo.address}
            options={{
              errorCorrectionLevel: 'M',
              margin: 3,
              scale: 4,
              width: 280,
              color: {
                dark: '#000000',
                light: '#FFFFFF',
              },
            }}
          />
          <p className="mx-10 mt-6 max-w-60 text-wrap text-center text-sm text-muted-foreground">
            {addressInfo.formatted}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => navigator.clipboard.writeText(addressInfo.address)}
        >
          Copy
        </Button>
      </CardFooter>
    </Card>
  );
};
