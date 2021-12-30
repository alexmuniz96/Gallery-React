import { useEffect, useState } from "react"
import { Container, Content } from "./App.styles"
import { Header } from "./components/Header/index"
import { ScreenWarning } from "./components/ScreenWarning"
import { PhotoList } from "./components/PhotoList/index"
import { UploadForm } from "./components/UploadForm"

import { getAll } from "./services/photos"
import { Photo } from "./types/Photo"

function App() {
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


  return (
    <Container>
      <Content>
        <Header />

        <UploadForm photos={photos} setPhotos={setPhotos} />

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