import React, { createContext, useState, useEffect } from "react"
import {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById
} from "../services/apiUsers"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const res = await getUsers()
      setUsers(res.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const fetchUserById = async (id) => {
    setLoading(true)

    try {
      const res = await getUserById(id)
      const fetchedUser = res.data
      console.log(fetchedUser)
      setCurrentUser(fetchedUser)
      // setUsers((prevUsers) => [...prevUsers, fetchedUser])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const addUser = async (newUser) => {
    try {
      const res = await createUser(newUser)
      console.log(res.data)
      setUsers((prevUsers) => [res.data, ...prevUsers])
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser = async (id) => {
    try {
      await deleteUserById(id)
      setUsers(users.filter((user) => user._id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const updateUser = async (id, updatedData) => {
    try {
      const res = await updateUserById(id, updatedData)
      const updatedUser = res.data
      setCurrentUser(updatedUser)
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   fetchUsers()
  // }, [])

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        fetchUsers,
        deleteUser,
        fetchUserById,
        updateUser,
        currentUser,
        loading
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
