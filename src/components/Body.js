import React from 'react';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar';

const Body = () => {
  return (
    <div className="grid grid-flex-col">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
