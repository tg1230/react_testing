import React from 'react';
import axios from 'axios';

function UploadDoc(props) {

    const URL = "http://localhost:3000/documents";
    const IMG_URL = "http://example.com/";

    const uploadDoc = (doc) => {
        axios.post(URL, {
            name: doc.name,
            URL: IMG_URL + doc.name
        })
        .then(res => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        });
        props.imageUploaded(doc);;
    }

    return (
        <div>
            <input type="file" accept="image/jpg, image/png" className="docs_header" onChange={(event) => uploadDoc(event.target.files[0])}/>
        </div>
    );
}

export default UploadDoc;