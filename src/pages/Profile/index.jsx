import { Container, Form, Avatar } from "./styles"
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft size={20} />
          <span>Back</span>
        </Link>
      </header>
      <Avatar>
        <img
          src="https://www.github.com/VictorRivellesJr.png"
          alt="User Avatar"
        />
        <label htmlFor="avatar">
          <FiCamera />
          <input type="file" id="avatar" />
        </label>
      </Avatar>
      <Form>
        <Input icon={FiUser} placeholder="Name" type="text" />
        <Input icon={FiMail} placeholder="E-mail" type="text" />
        <Input icon={FiLock} placeholder="Password" type="password" />
        <Input icon={FiLock} placeholder="New password" type="password" />
        <Button title="Save" />
      </Form>
    </Container>
  )
}
