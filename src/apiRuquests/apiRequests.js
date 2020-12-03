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
  },
  getCharacter: async (id) => {
    let response = await fetch(`${baseURL}${api.CHARACTER}${id}`)
    return response.json()
  }
}

export const episodesAPI = {
  getEpisodes: async (page, filters) => {
    let filterQuery = '';
    Object.entries(filters).forEach(([key, val]) => {
      if (val) {
        filterQuery += `&${key}=${val}`
      }
    })
    let response = await fetch(`${baseURL}${api.EPISODE}?page=${page}${filterQuery}`)
    return response.json()
  }
}

export const locationsAPI = {
  getLocations: async (page, filters) => {
    let filterQuery = '';
    Object.entries(filters).forEach(([key, val]) => {
      if (val) {
        filterQuery += `&${key}=${val}`
      }
    })
    let response = await fetch(`${baseURL}${api.LOCATION}?page=${page}${filterQuery}`)
    return response.json()
  }
}
