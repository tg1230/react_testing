import './App.css';
import React, { useEffect } from 'react';
import Search from './Search.js';
import UploadDoc from './UploadDoc.js';
import Doc from './Doc.js';
import axios from 'axios';

function App() {
  const [docs, updateDocs] = React.useState([]);
  const DOC_URL = "http://localhost:3000/documents/"

  useEffect(() => {
      axios.get(DOC_URL)
      .then(res => {
          console.log(res);
          updateDocs(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
  },  []);

  const imageUploaded = (doc) => {
    updateDocs(docs => [...docs, doc]);
  }

  const setupDoc = (doc) => {
    if (typeof doc.size !== 'undefined') {
      return (
        <div className="docs_col">
          <Doc source={doc} key={doc}/>
        </div>
        )
    }
    else {
      return (
        <div className="docs_col docs_border">
          <p className="docs_col" >{doc.name}</p>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <Search />
      <UploadDoc imageUploaded={imageUploaded}/>
      <p className="docs_header">{docs.length} documents</p><p className="docs_header"></p>
        {
          docs.map(doc => setupDoc(doc))
        }
    </div>
  );
}

export default App;
