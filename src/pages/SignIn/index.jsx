import { useState } from "react"
import { FiLock, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Background } from "./styles"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({
      email,
      password,
    })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>App for tracking everything you watch.</p>

        <h2>Login</h2>

        <Input
          icon={FiMail}
          placeholder="E-mail"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          icon={FiLock}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Login" onClick={handleSignIn} />
        <Link to="/signup">Sign up</Link>
      </Form>
      <Background />
    </Container>
  )
}
