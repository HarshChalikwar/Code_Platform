import React from 'react';
import Navbar from './Components/Navbar';
import DataTable from './Components/DataTable';
const App = () => {
  return (
      <>
      <div className='nav'><Navbar/></div>
        
        <DataTable className = "data"/>
        <DataTable/>
        <DataTable/>
        <DataTable/>
        <DataTable/>

      </>
    );
}

export default App