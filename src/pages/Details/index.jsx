import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { FiArrowLeft, FiClock } from "react-icons/fi"

import { api } from "../../services/api.js"
import avatarPlaceholder from "../../assets/avatar.svg"

import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"
import { Rating } from "../../components/Rating"
import { Button } from "../../components/Button/index.jsx"

import { Container, Title, Tags, Author, Buttons } from "./styles"

export function Details() {
  const [movie, setMovie] = useState(null)

  const navigate = new useNavigate()

  const avatarUrl = movie
    ? `${api.defaults.baseURL}/files/${movie.avatar}`
    : avatarPlaceholder

  const creationData = movie && movie.created_at.split(" ", 2)
  const date = creationData && creationData[0]
  const hour = creationData && creationData[1].slice(0, 5)

  const params = useParams()

  function handleEditOrRemove() {
    navigate(`/create/${params.id}`)
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`)
      setMovie(response.data)
    }
    fetchMovie()
  }, [])

  return (
    <Container>
      <Header />
      {movie && (
        <main>
          <Buttons>
            <Link to="/">
              <FiArrowLeft />
              <span>Back</span>
            </Link>
            <Button title="Edit or remove movie" onClick={handleEditOrRemove} />
          </Buttons>
          <Title>
            <h1>{movie.title}</h1>
            <Rating value={movie.rating} />
          </Title>

          <Author>
            <img src={avatarUrl} alt={`photo of ${movie.name}`} />
            By {movie.name}
            <FiClock />
            {date} at {hour} hs
          </Author>

          {movie.tags && (
            <Tags>
              {movie.tags.map((tag) => (
                <Tag key={tag.id} title={tag.name} />
              ))}
            </Tags>
          )}

          <p>{movie.description}</p>
        </main>
      )}
    </Container>
  )
}
