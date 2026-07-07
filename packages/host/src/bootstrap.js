import React from 'react';
import ReactDom, { createRoot } from 'react-dom/client';
import { registerPlugins, registerRemotes, loadRemote, createInstance } from '@module-federation/enhanced/runtime'



import './index.css';
import App from './App';


const customSharedPlugin =
  function () {
    return {
      name: 'custom-shared-plugin',
      resolveShare(args) {
        console.log('here-----------')
        const { shareScopeMap, scope, pkgName, version, GlobalFederation } = args;

        if (
          pkgName !== 'react' 
        ) {
          return args;
        }

        args.resolver = function () {
          console.log('shareScopeMap[scope][pkgName][version]', shareScopeMap[scope][pkgName][version]);
          shareScopeMap[scope][pkgName][version] = React; // replace local share scope manually with desired module
          return shareScopeMap[scope][pkgName][version];
        };
        return args;
      },
    };
  };

  const mf = createInstance({
    name: 'container',
    plugins: [customSharedPlugin()]
});

 // registerPlugins([customSharedPlugin()]);


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>);
