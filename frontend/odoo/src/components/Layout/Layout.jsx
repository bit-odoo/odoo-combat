import React from 'react';
import Sidebar from '../common/Sidebar';

function Layout({ children }) {
  return (
    <div>
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <main style={{ flex: 1 }}>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
