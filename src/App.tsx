import { FormEvent, useEffect, useState } from "react"
import { Container, Content, UploadForm } from "./App.styles"
import { Header } from "./components/Header/index"
import { ScreenWarning } from "./components/ScreenWarning"
import { PhotoList } from "./components/PhotoList/index"

import { getAll, insert } from "./services/photos"
import { Photo } from "./types/Photo"

function App() {
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {

    async function getPhotos() {
      setLoading(true);

      setPhotos(await getAll());

      setLoading(false);
    }
    getPhotos();
  }, [])

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

    console.log(formData)

  }

  return (
    <Container>
      <Content>
        <Header />

        <UploadForm method="POST" onSubmit={handleFormSubmit}  >
          <input type="file" name="image"></input>
          <input type="submit" value="Enviar" />
          {uploading && "Enviando ..."}
        </UploadForm>


        {loading &&
          <ScreenWarning loading={loading} />
        }

        {!loading && photos.length > 0 &&
          <PhotoList photos={photos} />
        }

        {!loading && photos.length === 0 &&

          <ScreenWarning loading={loading} />
        }

      </Content>
    </Container>

  )
}

export default App