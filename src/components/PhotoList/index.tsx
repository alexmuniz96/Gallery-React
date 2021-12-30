import { Container } from "./styles"
import { Photo } from "../../types/Photo"
import { PhotoItem } from "../PhotoItem/index"

type PropsPhotoList = {
  photos: Photo[]
}

export function PhotoList({ photos }: PropsPhotoList) {

  return (
    <Container>

      {photos.map((item, index) => (
        <PhotoItem key={index} url={item.url} name={item.name} />
      ))}

    </Container>
  )
}