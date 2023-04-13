import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Sidebar, Topbar } from '@/components/shared';
import { Container } from '@mui/material';

interface Props {
  title?: string;
  children?: ReactNode;
}

export const Layout: FC<Props> = ({ title = 'CRM', children }) => {
  return (
    <>
      <Head>
        <title title={title} />
      </Head>
      <main
        style={{
          display: 'flex',
        }}
      >
        <Sidebar />
        <Container>
          <Topbar />
          {children}
        </Container>
      </main>
    </>
  );
};
