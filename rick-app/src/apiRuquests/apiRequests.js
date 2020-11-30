import { api, baseURL } from "../constants/apiConstants"

export const charactersAPI = {
  getCharacters: async (page) => {
let response = await fetch(`${baseURL}${api.CHARACTER}?page=${Math.ceil(page / 2)}`)
return response.json()
  }
}