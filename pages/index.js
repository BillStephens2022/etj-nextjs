import Head from 'next/head';
import classes from "@/styles/Home.module.css";
import Header from '@/components/layout/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>ETJ</title>
        <meta name="description" content="ETJ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.main}>
        <Header>ETJ</Header>
      </main>
    </>
  )
}
