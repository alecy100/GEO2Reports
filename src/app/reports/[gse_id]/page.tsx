'use client';
import trpc from '@/lib/trpc/client';
import React from 'react';

export default function ReportPage(props: { params: Promise<{ gse_id: string }> }) {
  const params = React.use(props.params)
  const { data: html, error, isLoading } = trpc.getHTML.useQuery({ id: params.gse_id }, { retry: false });

  return (
    <div className="notebook-content">
      <main className="flex-grow p-4">
        {error && <div>Error: {error.message}</div>}
        {isLoading && <div>Loading...</div>}
        {html && <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: html }} 
        />}
      </main>
    </div>
  );
}
