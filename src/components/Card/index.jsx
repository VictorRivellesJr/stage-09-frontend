import { Tag } from "../Tag"
import { Rating } from "../Rating"

import { Container, Tags } from "./styles"

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating value={data.rating} />
      <p>{data.description}</p>
      {data.tags && (
        <Tags>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </Tags>
      )}
    </Container>
  )
}
