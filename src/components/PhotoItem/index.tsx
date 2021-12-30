import { Container } from "./styles"
import { DeletePhoto } from "../DeletePhoto"
import { deletePhoto } from "../../services/photos"

type PropsPhotoItem = {
  url: string;
  name: string;
}

export function PhotoItem({ url, name }: PropsPhotoItem) {

  async function handleDeletePhoto(name: string) {
    await deletePhoto(name)
    window.location.reload()
  }

  return (
    <Container >
      <img src={url} alt={name}></img>
      {name}

      <DeletePhoto name={name} onDelete={handleDeletePhoto} />

    </Container >
  )
}