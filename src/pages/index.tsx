import Header from 'components/layout/Header';
import Layout from 'components/layout/Layout';
import Seo from 'components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <Header />
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>
              Next.js + Tailwind CSS + TypeScript Starter
            </h1>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <a href='#'>Build Something In Tech</a>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
