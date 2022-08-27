import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Card } from "../../components/Card"

import { Container, Title, CardBox, Button } from "./styles"
import { api } from "../../services/api.js"

export function Home() {
  const [movies, setMovies] = useState([])
  const [searchMovieByTitle, setSearchMovieByTitle] = useState("")
  const [searchMovieByTag, setSearchMovieByTag] = useState("")

  const navigate = new useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  const searchTitle = (data) => {
    setSearchMovieByTitle(data)
  }

  const searchTag = (data) => {
    setSearchMovieByTag(data)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${searchMovieByTitle}`)
      setMovies(response.data)
    }
    fetchMovies()
  }, [searchMovieByTitle])

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?tag=${searchMovieByTag}`)
      setMovies(response.data)
    }
    fetchMovies()
  }, [searchMovieByTag])

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes`)
      setMovies(response.data)
    }
    fetchMovies()
  }, [])

  return (
    <Container>
      <Header findTitle={searchTitle} findTag={searchTag} />
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
              <Card
                key={movieData.id}
                data={movieData}
                onClick={() => handleDetails(movieData.id)}
              />
            ))}
          </CardBox>
        )}
      </main>
    </Container>
  )
}
