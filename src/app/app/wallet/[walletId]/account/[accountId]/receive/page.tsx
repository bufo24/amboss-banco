'use client';

import { useSearchParams } from 'next/navigation';

import { ReceiveAddress } from '@/views/wallet/ReceiveAddress';
import { ReceiveAddressNetwork } from '@/views/wallet/ReceiveAddressNetwork';

export default function Page({
  params,
}: {
  params: { walletId: string; accountId: string };
}) {
  const searchParams = useSearchParams();
  const coin = searchParams.get('coin');
  const network  = searchParams.get('network');

  const otherNetworkDeposit = !!coin && !!network;

  return (
    <div className="mt-4 flex justify-center">
      {!otherNetworkDeposit ? <ReceiveAddress accountId={params.accountId}  /> : <ReceiveAddressNetwork accountId={params.accountId} coin={coin} network={network} />}
    </div>
  );
}
