import { FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar.svg"

import { Input } from "../Input"
import { ButtonText } from "../ButtonText"

import { Container, Profile } from "./styles"

export function Header({ findTitle, findTag }) {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}files/${user.avatar}`
    : avatarPlaceholder

  function searchText(text) {
    return findTitle(text)
  }

  function searchTag(tag) {
    return findTag(tag)
  }

  return (
    <Container>
      <Link to="/">RocketMovies</Link>
      <Input
        icon={FiSearch}
        placeholder="Search by title"
        onChange={(e) => searchText(e.target.value)}
      />
      <Input
        icon={FiSearch}
        placeholder="Search by tag"
        onChange={(e) => searchTag(e.target.value)}
      />
      <Profile>
        <div>
          <Link to="/profile">{user.name}</Link>

          <ButtonText title="Logout" onClick={signOut} />
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={`photo of ${user.name}`} />
        </Link>
      </Profile>
    </Container>
  )
}
