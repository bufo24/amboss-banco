import { WalletBreadcrumb } from '@/components/breadcrumb/wallets';
import { InternalHeader } from '@/components/header/InternalHeader';
import { WalletInfo } from '@/views/wallet/Wallet';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-2 2xl:p-24">
      <InternalHeader />
      <WalletBreadcrumb id={params.slug} />
      <WalletInfo id={params.slug} />
    </main>
  );
}
