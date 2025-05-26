import React from 'react';
import logo from "./logo.svg";
import "./App.css";

const MFE = React.lazy(() => import("mfe1/app"));

function App() {
  return (
    <div className="App">
       <header className="App-header">
       Host App
      </header>
      <div className='remote'>
      <React.Suspense fallback="Loading Remote MFE">
        <MFE />
      </React.Suspense>
      </div>
    </div>
  );
}

export default App;
