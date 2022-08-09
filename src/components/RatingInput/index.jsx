import { Container } from "./styles"
import { FaStar } from "react-icons/fa"
import { FiStar } from "react-icons/fi"
import { Button } from "../Button"

export function RatingInput({ value }) {
  const stars = []
  for (let i = 0; i < value; i++) {
    stars.push(<Button icon={FaStar} key={i} value={i + 1} />)
  }
  for (let i = value; i < 5; i++) {
    stars.push(<Button icon={FiStar} key={i} value={i + 1} />)
  }
  return <Container>{stars}</Container>
}
