import { useState, useEffect } from "react"

import { FiArrowLeft, FiStar } from "react-icons/fi"
import { FaStar } from "react-icons/fa"
import { Link, useNavigate, useParams } from "react-router-dom"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"
import { TagItem } from "../../components/TagItem"

import { Buttons, Container, Form, Tags, RatingInput } from "./styles"

export function Create() {
  const [movieId, setMovieId] = useState("")
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState(0)

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  const [selectedTags, setSelectedTags] = useState([])

  const navigate = new useNavigate()
  const params = new useParams()

  function handleAddTag() {
    setTags([...tags, newTag])
    setSelectedTags([...selectedTags, newTag])
    setNewTag("")
  }

  function handleTag(clickedTag) {
    selectedTags.includes(clickedTag)
      ? setSelectedTags(selectedTags.filter((tag) => tag !== clickedTag))
      : setSelectedTags([...selectedTags, clickedTag])
  }

  async function handleNewMovie() {
    await api.post("/notes", {
      id: movieId,
      title: `${title} (${year})`,
      description,
      rating,
      tags: selectedTags,
    })

    alert("Movie saved!")
    navigate("/")
  }

  async function handleRemoveMovie() {
    const confirm = window.confirm("Remove this movie?")
    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    }
  }

  function handleAddRating(value) {
    rating === value ? setRating(0) : setRating(value)
  }

  async function fetchMovie() {
    const response = await api.get(`/notes/${params.id}`)
    loadData(response.data)
  }

  function loadData(movie) {
    setMovieId(movie.id)
    const title = movie.title.substring(0, movie.title.length - 7)
    setTitle(title)
    const year = movie.title.substring(
      movie.title.length - 5,
      movie.title.length - 1
    )
    setYear(year)
    setDescription(movie.description)
    setRating(movie.rating)
    const tags = movie.tags.map((tag) => tag.name)
    setSelectedTags(tags)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      const tags = response.data.map((tag) => tag.name)
      const uniqueTags = [...new Set(tags)]
      setTags(uniqueTags)
    }
    if (Object.keys(params).length !== 0) {
      fetchMovie()
    }
    fetchTags()
  }, [])

  return (
    <Container>
      <Header />

      <main>
        <Link to="/">
          <FiArrowLeft />
          <span>Back</span>
        </Link>
        {movieId === "" ? <h1>New movie</h1> : <h1>Edit movie</h1>}
        <Form>
          <header>
            <Input
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <RatingInput>
              {[...Array(5)].map((star, index) => (
                <button
                  type="button"
                  key={index + 1}
                  value={index + 1}
                  onClick={() => handleAddRating(index + 1)}
                >
                  {rating >= index + 1 ? <FaStar /> : <FiStar />}
                </button>
              ))}
            </RatingInput>
          </header>
          <TextArea
            placeholder="Description"
            type="text"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <h2>Tags</h2>
          <Tags>
            {tags.map((tag, index) => (
              <TagItem
                key={String(index)}
                value={tag}
                selected={selectedTags.includes(tag) ? true : false}
                onClick={() => handleTag(tag)}
              />
            ))}
            <TagItem
              isNew
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </Tags>
          <Buttons>
            <Button title="Remove movie" onClick={handleRemoveMovie} />
            <Button title="Save" onClick={handleNewMovie} />
          </Buttons>
        </Form>
      </main>
    </Container>
  )
}
