import axios from "axios"

const uri = import.meta.env.VITE_API_URL

//Axios
export const getUsers = async () => {
  try {
    const res = await axios.get(`${uri}/users`)
    return res
  } catch (error) {
    throw error
  }
}

//fetch pure
export const getUsers2 = async () => {
  try {
    const res = await fetch(`${uri}/users`)
    const data = await res.json()

    return { data, httpStatus: res.status }
  } catch (error) {
    console.error(`error: ${error}`)
  }
}

//Create a user
export const createUser = async (newUser) => {
  try {
    const res = await axios.post(`${uri}/users`, newUser)
    return res
  } catch (error) {
    throw error
  }
}

//Get a user my id
export const getUserById = async (id) => {
  try {
    const res = await axios.get(`${uri}/users/${id}`)
    return res
  } catch (error) {
    throw error
  }
}

//Update a user by ID
export const updateUserById = async (id, updateUser) => {
  try {
    const res = await axios.put(`${uri}/users/${id}`, updateUser)
    return res
  } catch (error) {
    throw error
  }
}

//Delete a user by id
export const deleteUserById = async (id) => {
  try {
    await axios.delete(`${uri}/users/${id}`)
    console.log(`User ${id} deleted`)
  } catch (error) {
    throw error
  }
}
