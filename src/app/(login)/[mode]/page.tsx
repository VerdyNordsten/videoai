'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { Login } from '@/app/(login)/login';

export default function LoginModePage({ params }: { params: { mode: string } }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (params.mode !== 'sign-in' && params.mode !== 'signup') {
    return notFound();
  }

  const mode = params.mode === 'sign-in' ? 'signin' : 'signup';

  if (!isClient) {
    return null;
  }

  return (
    <Suspense>
      <Login mode={mode} />
    </Suspense>
  );
}