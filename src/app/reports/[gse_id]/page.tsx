'use client';
import trpc from '@/lib/trpc/client';
import React from 'react';

export default function ReportPage(props: { params: Promise<{ gse_id: string }> }) {
  const params = React.use(props.params)
  //const [html, setHtml] = useState('');

  // useEffect(() => {
  //   fetch(`/${gse_id}/${gse_id}.html`)
  //     .then(res => res.text())
  //     .then(data => setHtml(data))
  //     .catch(err => console.error(err));
  // }, [gse_id]); 

  const { data: html = '<span>No results</span>' } = trpc.getHTML.useQuery({ id: params.gse_id });
  // const fetch_html = async (id: string) => {
  //   const html = trpc.getHTML.useQuery({ id });
  //   if (html) return (html)
  //     else return ('<span>No results</span>')
  // }


  return (
    <div className="notebook-content">
      <main className="flex-grow p-4">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: html }} 
        />
      </main>
    </div>
  );
}
