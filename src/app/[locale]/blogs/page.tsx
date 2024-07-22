import { BlogPage } from '@/components/blog/blog-page';

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/post`, {
    method: 'GET',
    cache: 'no-store',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <BlogPage data={data} />
    </main>
  );
}
