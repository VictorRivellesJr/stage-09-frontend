import { useState } from "react"
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar.svg"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Container, Form, Avatar } from "./styles"

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    await updateProfile({
      name,
      email,
      password,
      newPassword,
      avatarFile,
    })
  }

  function handleAvatarChange(e) {
    const file = e.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft size={20} />
          <span>Back</span>
        </Link>
      </header>
      <Avatar>
        <img src={avatar} alt="User Avatar" />
        <label htmlFor="avatar">
          <FiCamera />
          <input type="file" id="avatar" onChange={handleAvatarChange} />
        </label>
      </Avatar>
      <Form>
        <Input
          icon={FiUser}
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          icon={FiMail}
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          icon={FiLock}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          icon={FiLock}
          placeholder="New password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title="Save" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
