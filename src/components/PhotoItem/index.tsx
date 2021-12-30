import { Container } from "./styles"

type PropsPhotoItem = {
  url: string;
  name: string;
}

export function PhotoItem({ url, name }: PropsPhotoItem) {
  return (
    <Container>
      <img src={url} alt={name}></img>
      {name}
    </Container>
  )
}