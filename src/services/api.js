import axios from "axios"

export const api = axios.create({
  baseURL: "https://stage-09-api.herokuapp.com/",
})
