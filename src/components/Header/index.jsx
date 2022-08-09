import { Container, Profile } from "./styles"
import { FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Input } from "../Input"
import { ButtonText } from "../ButtonText"

export function Header() {
  return (
    <Container>
      <Link to="/">RocketMovies</Link>
      {/* <h1>RocketMovies</h1> */}
      <Input icon={FiSearch} placeholder="Search by title" />
      <Profile>
        <div>
          <Link to="/profile">Victor Rivelles Jr</Link>

          <ButtonText title="Logout" />
        </div>
        <Link to="/profile">
          <img
            src="https://github.com/VictorRivellesJr.png"
            alt="user-profile"
          />
        </Link>
      </Profile>
    </Container>
  )
}
