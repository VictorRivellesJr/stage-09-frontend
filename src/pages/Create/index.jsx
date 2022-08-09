import { Buttons, Container, Form, Tags } from "./styles"
import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"
import { RatingInput } from "../../components/RatingInput"
import { TagItem } from "../../components/TagItem"

export function Create() {
  return (
    <Container>
      <Header />

      <main>
        <Link to="/">
          <FiArrowLeft />
          <span>Back</span>
        </Link>
        <h1>New movie</h1>
        <Form>
          <header>
            <Input placeholder="Title" type="text" />
            <Input placeholder="Year" type="number" />
            {/* <Input placeholder="Rating (0 to 5)" type="number" /> */}
            <RatingInput value={0} />
          </header>
          <TextArea placeholder="Description" type="text" />
          <h2>Tags</h2>
          <Tags>
            <TagItem isNew={false} title={"Horror"} />
            <TagItem isNew={false} title={"Sci-fi"} />
            <TagItem isNew={false} title={"Drama"} />
            <TagItem isNew={false} title={"Action"} />
            <TagItem isNew />
          </Tags>
          <Buttons>
            <Button title="Remove movie" />
            <Button title="Save" />
          </Buttons>
        </Form>
      </main>
    </Container>
  )
}
