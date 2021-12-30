import React, { FormEvent, useState } from 'react'
import { Container } from './styles'
import { insert } from '../../services/photos'

import { Photo } from '../../types/Photo'

type PropsUploadForm = {
  photos: Photo[];
  setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>

}

export function UploadForm({ photos, setPhotos }: PropsUploadForm) {

  const [uploading, setUploading] = useState(false)

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if (file && file.size > 0) {
      setUploading(true)

      let result = await insert(file)

      setUploading(false)

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList)
      }
    }

  }

  return (
    <Container onSubmit={handleFormSubmit}>
      <input type="file" name="image"></input>
      <input type="submit" value="Enviar" />
      {uploading && "Enviando ..."}
    </Container>
  )
}