import { useState } from "react"
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Background } from "./styles"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      alert("Preencha todos os campos")
      return
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário criado com sucesso")
        navigate(-1)
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Erro ao criar usuário")
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>App for tracking everything you watch.</p>

        <h2>Create your account</h2>

        <Input
          icon={FiUser}
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button title="Sign Up" onClick={handleSignUp} />
        <Link to="/">
          <FiArrowLeft />
          <span>Back to login</span>
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
