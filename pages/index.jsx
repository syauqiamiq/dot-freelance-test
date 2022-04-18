import Head from 'next/head';
import Template from '../template/Template';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template>
        <h1>Landing Page</h1>
      </Template>
    </div>
  );
}
