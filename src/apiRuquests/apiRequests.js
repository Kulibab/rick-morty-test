import { api, baseURL } from "../constants/apiConstants"

export const charactersAPI = {
  getCharacters: async (page, filters) => {
    let filterQuery = '';
    Object.entries(filters).forEach(([key, val]) => {
      if (val) {
        filterQuery += `&${key}=${val}`
      }
    })
    let response = await fetch(`${baseURL}${api.CHARACTER}?page=${Math.ceil(page / 2)}${filterQuery}`)
    return response.json()
  }
}