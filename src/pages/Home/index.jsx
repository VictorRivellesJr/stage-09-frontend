import { Container, Title, CardBox, Button } from "./styles"
import { FiPlus } from "react-icons/fi"
import { MOVIE_DB } from "../../data/movieDB.js"

import { Header } from "../../components/Header"
import { Card } from "../../components/Card"

export function Home() {
  const movies = MOVIE_DB

  return (
    <Container>
      <Header />
      <main>
        <Title>
          <h1>My Movies</h1>
          <Button to="/create">
            <FiPlus />
            <span>New Movie</span>
          </Button>
        </Title>
        {movies && (
          <CardBox>
            {movies.map((movieData) => (
              <Card key={movieData.id} data={movieData} />
            ))}
          </CardBox>
        )}
      </main>
    </Container>
  )
}
