import { ExternalHeader } from '@/components/header/ExternalHeader';
import { SignUpForm } from '@/components/SignUpForm';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-2">
      <ExternalHeader />
      <div className="flex w-full max-w-5xl items-center justify-center py-10">
        <SignUpForm />
      </div>
    </main>
  );
}
