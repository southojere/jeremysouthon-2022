import * as React from 'react';

import { ScrollTop } from './ScrollTop';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      {children}
      <ScrollTop />
    </>
  );
}
