import React from 'react';
import './App.css';
import Map from './components/Map/Map';
import ReportBtn from './components/ReportBtn/ReportBtn';
import DropdownFilter from './components/DropdownFilter/DropdownFilter';

function App() {
  return (
    <>
      <DropdownFilter />
      <ReportBtn />
      <Map />
    </>
  );
}

export default App;
