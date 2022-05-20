import React from 'react';
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useState } from 'react';
import TopTitleBar from "../components/TopTitleBar"
import GenericButton from '../components/GenericButton';
import {GoCloudUpload} from "react-icons/go"
import GenericInput from '../components/GenericInput';

function NewBookUpload() {

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
        <div>
            <TopTitleBar><h3>Upload a new book</h3></TopTitleBar>
            <div className='flex justify-center flex-col px-6 mt-6'>
                <GenericButton>
                    <GoCloudUpload />
                    <h4 className='ml-3'>
                        Attatchment
                    </h4>
                </GenericButton>

                <label className='mt-4'>Enter the name of the book</label>
                <GenericInput type="text" placeholder="Enter the title of the book.." />

                <label className='mt-4'>Enter the name of the author</label>
                <GenericInput type="text" placeholder="Enter the title of the author.." />

                <div className='my-4'>
                    <input type="checkbox" value="this is it" id="checkbox"/>
                    <label htmlFor='checkbox' className='mx-2'>Enter the name of the author</label>
                </div>

                <GenericButton onClick={uploadBookFile}>Upload</GenericButton>
            </div>

            <br /><br />
            <label htmlFor="bookFile">Select your book</label>
            <br />
            <input type="file" id="bookFile" onChange={(e)=>{
            setBookFileData(e.target.files[0])
            }} />
            <br />
            <button onClick={uploadBookFile}>Upload</button>
      </div>
    </div>
  )
}

export default NewBookUpload