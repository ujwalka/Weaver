import React from 'react';
import StrawList from '../../src/components/StrawList/StrawList';
import DashNav from '../../src/components/DashNav/DashNav';

function NestPage() {
  return (
    <>
      <DashNav />
      <StrawList />
      <div className=''>hello from nest page</div>
    </>
  );
}

export default NestPage;
