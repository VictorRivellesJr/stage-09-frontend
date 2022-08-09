import { Container, Form, Background } from "./styles"
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>App for tracking everything you watch.</p>

        <h2>Create your account</h2>

        <Input icon={FiUser} placeholder="Name" type="text" />
        <Input icon={FiMail} placeholder="E-mail" type="text" />
        <Input icon={FiLock} placeholder="Password" type="password" />
        <Button title="Sign Up" />
        <Link to="/">
          <FiArrowLeft />
          <span>Back to login</span>
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
