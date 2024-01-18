'use client'
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudinaryResult {
    public_id: string
}
const UploadPage = () => {

    const [publicId, setPublicId] = useState('')

    return (
        <>
            {publicId && <CldImage src={publicId} width={270} height={180} alt='baba' />}
            <CldUploadWidget uploadPreset='zidvajwf'
                onUpload={(result, wid) => {
                    console.log('result', result)
                    if (result.event !== 'success') return
                    const info = result.info as CloudinaryResult
                    setPublicId(info.public_id)

                }}
            >
                {({ open }) => <button className='btn btn-primary'
                    onClick={() => open()}
                >Upload</button>}
            </CldUploadWidget >
        </>
    )
}
export default UploadPage