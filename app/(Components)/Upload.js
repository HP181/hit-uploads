'use client';
 
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';
 
export default function AvatarUploadPage() {
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);
  return (
    <>
      <h1>Upload Your Avatar</h1>
 
      <form
        onSubmit={async (event) => {
          event.preventDefault();
 
          const file = inputFileRef.current.files[0];
 
          const formData = new FormData();
          formData.append('file', file); // Attach file to formData

          const a = await fetch("/api/upload", {
            method : "POST",
            body : formData
          })

          // if (!a.ok) throw new Error('Failed to upload file.');

          
          console.log("a", a);

          const b = await a.json();
          console.log("b", b);
 
          setBlob(a);
        }}
      >
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}