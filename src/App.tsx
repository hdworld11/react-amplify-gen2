import sample from "/images/sample1.png";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { uploadData } from 'aws-amplify/storage';
import './App.css'
import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json';

Amplify.configure(config);




function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={uploadFile}>
          Upload file
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

async function uploadFile(){
  try {
    const result = await uploadData({
      path: "first-folder/sample1.png", 
      // Alternatively, path: ({identityId}) => `album/{identityId}/1.jpg`
      data: sample,
    }).result;
    console.log('Succeeded: ', result);
  } catch (error) {
    console.log('Error : ', error);
  }
}

export default App
