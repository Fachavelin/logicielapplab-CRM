import { Header } from '@/components/shared';
import { Layout } from '@/layouts/Layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <Header title={'Panel administrativo'} subtitle={'Bienvenido al tu panel administrativo'} />
    </Layout>
  );
}
