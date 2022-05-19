import './App.css';
import { storage } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useState } from 'react';

function App() {

  const [bookFileData, setBookFileData] = useState(null)
  const [bookFileUrl, setBookFileUrl] = useState(null)

  const uploadBookFile = async () =>{
    
    if (bookFileData == null) return;

    const bookFileRef = ref(storage, `bookFiles/${bookFileData.name + v4()}`);
    uploadBytes(bookFileRef, bookFileData)
      .then(
        (snapshot)=>{
          getDownloadURL(snapshot.ref)
          .then((url)=>{
            setBookFileUrl((prev)=> [...prev, url])
          })
        }
      ).catch(err => console.log(err.message))

  }

  console.log(bookFileUrl);

  return (
    <div>
      <div >
        <label htmlFor="bookFile">Select your book</label>
        <br />
        <input type="file" id="bookFile" onChange={(e)=>{
          setBookFileData(e.target.files[0])
        }} />
        <br />
        <button onClick={uploadBookFile}>Upload</button>
      </div>
    </div>
  );
}

export default App;
