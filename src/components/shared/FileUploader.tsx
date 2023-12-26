'use client'
import React, { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { Button } from '../ui/button';
import Image from 'next/image';


const FileUploader = () => {
   const [fileUrl, setFileUrl] = useState<File[]>([])
   const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
      setFileUrl(acceptedFiles)
   }, []);
   const clearFiles = () => {
      setFileUrl([]);
   };
   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
   return (
      <div {...getRootProps()} className={isDragActive ? 'dropzone-active' : 'dropzone'}>
         <input {...getInputProps()} />
         <div>
            {fileUrl.length > 0 ? (
               fileUrl.map((file, index) => (
                  <div className='relative' key={index}>
                     <Image
                        src={URL.createObjectURL(file)}
                        className='w-full object-cover h-96 rounded-md'
                        width={400}
                        height={400}
                        alt={`Preview ${file.name}`}
                     />

                     <Button className='absolute top-0 right-0 bg-black' onClick={clearFiles}>close</Button>
                  </div>
               ))
            ) : (
               <div className='flex flex-col items-center justify-center'>
                  <Image src='/photo-gallery.png' className='w-10 h-10' width={400} height={400} loading='lazy' alt="file-upload" />
                  <h3 className='base-medium text-light-2 mb-2 mt-6'>Arrasta a foto aqui</h3>
                  <p className='base-semibold mb-6'>SVG, PNG, JPG</p>
                  <Button className='shad-button_dark_4'>
                     Selecionar pelo computador
                  </Button>
               </div>
            )}
         </div>
      </div>
   )
}

export default FileUploader