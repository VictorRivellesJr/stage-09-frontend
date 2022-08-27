import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      })
      const { token, user } = response.data

      localStorage.setItem("@RocketMovies:token", token)
      localStorage.setItem("@RocketMovies:user", JSON.stringify(user))

      setData({ token, user })
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Something went wrong. Please, try again later.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@RocketMovies:token")
    localStorage.removeItem("@RocketMovies:user")

    setData({})
    api.defaults.headers.common["Authorization"] = undefined
  }

  async function updateProfile({
    name,
    email,
    password,
    newPassword,
    avatarFile,
  }) {
    try {
      const user = {}

      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)

        user.avatar = response.data.avatar
      }

      const response = await api.put("/users", {
        name,
        email,
        password,
        new_password: newPassword,
      })

      Object.assign(user, response.data)

      localStorage.setItem("@RocketMovies:user", JSON.stringify(user))

      setData({ token: data.token, user })
      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`
      alert("Profile updated successfully!")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Something went wrong. Please, try again later.")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@RocketMovies:token")
    const user = localStorage.getItem("@RocketMovies:user")

    if (token && user) {
      setData({ token, user: JSON.parse(user) })
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
