import { Container, Tags } from "./styles"

import { Tag } from "../Tag"
import { Rating } from "../Rating"

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>
        {data.title} <span>({data.year})</span>
      </h1>
      <Rating value={data.rating} />
      <p>{data.description}</p>
      {data.tags && (
        <Tags>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.id} />
          ))}
        </Tags>
      )}
    </Container>
  )
}
