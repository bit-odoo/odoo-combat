import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

function Layout({ children }) {
  return (
    <div>
      {/* <Header /> */}
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <main style={{ flex: 1 }}>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
