import { Container } from "./styles"
import deleteIcon from "../../assets/delete-icon.svg"

type PropsDeletePhoto = {
  name: string;
  onDelete: (name: string) => void;
}

export function DeletePhoto({ name, onDelete }: PropsDeletePhoto) {


  return (
    <Container >
      <span onClick={() => onDelete(name)} >
        <img src={deleteIcon} alt="delete icon" />
      </span>
    </Container>
  )
}