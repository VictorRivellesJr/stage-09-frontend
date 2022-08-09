import { Container, Form, Background } from "./styles"
import { FiLock, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>App for tracking everything you watch.</p>

        <h2>Login</h2>

        <Input icon={FiMail} placeholder="E-mail" type="text" />
        <Input icon={FiLock} placeholder="Password" type="password" />
        <Button title="Login" />
        <Link to="/signup">Sign up</Link>
      </Form>
      <Background />
    </Container>
  )
}
