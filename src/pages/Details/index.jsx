import { Container, Title, Tags, Author } from "./styles"
import { FiArrowLeft, FiClock } from "react-icons/fi"
import { Link } from "react-router-dom"

import { MOVIE_DB } from "../../data/movieDB.js"

import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"
import { Rating } from "../../components/Rating"

export function Details() {
  const movie = MOVIE_DB[0]

  return (
    <Container>
      <Header />
      <main>
        <Link to="/">
          <FiArrowLeft />
          <span>Back</span>
        </Link>
        <Title>
          <h1>{movie.title}</h1>
          <Rating value={movie.rating} />
        </Title>

        <Author>
          <img
            src="https://github.com/VictorRivellesJr.png"
            alt="user-profile"
          />
          By Victor Rivelles Jr
          <FiClock />
          23/05/22 às 10:00
        </Author>

        {movie.tags && (
          <Tags>
            {movie.tags.map((tag) => (
              <Tag key={tag.id} title={tag.id} />
            ))}
          </Tags>
        )}

        <p>{movie.description}</p>
      </main>
    </Container>
  )
}
