import React from 'react';
import {  loadRemote , registerRemotes} from '@module-federation/enhanced/runtime'

import "./App.css";

  registerRemotes([{
    name: 'mfe',
    entry: 'http://localhost:3001/remoteEntry.js'
  }])

const MFE = React.lazy(() => loadRemote('mfe/app'));

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
