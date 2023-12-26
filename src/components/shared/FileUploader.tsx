'use client'
import React, { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { Button } from '../ui/button';
import Image from 'next/image';


const FileUploader = () => {
   const [fileUrl, setFileUrl] = useState<File[]>([])
   const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
      setFileUrl(acceptedFiles)
      console.log('Accepted Files:', acceptedFiles);
   }, []);
   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
   return (
      <div {...getRootProps()} className={isDragActive ? 'dropzone-active' : 'dropzone'}>
         <input {...getInputProps()} />

         <div className='flex flex-col items-center justify-center'>
            <Image src='/photo-gallery.png' className='w-10 h-10' width={400} height={400} loading='lazy' alt="file-upload" />
            <h3 className='base-medium text-light-2 mb-2 mt-6'>Arrasta a foto aqui</h3>
            <p className='text-light-4 small-regular mb-6'>SVG, PNG, JPG</p>
            <Button className='shad-button_dark_4'>
               Selecionar pelo computador
            </Button>
         </div>
      </div>
   )
}

export default FileUploader