import { Container } from "./styles"
import { FaStar } from "react-icons/fa"
import { FiStar } from "react-icons/fi"

export function Rating({ value }) {
  const stars = []
  for (let i = 0; i < value; i++) {
    stars.push(<FaStar key={i} />)
  }
  for (let i = value; i < 5; i++) {
    stars.push(<FiStar key={i} />)
  }
  return <Container>{stars}</Container>
}
