import React, { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../Context/UserContext.jsx"

export default function Container() {
  const { users, deleteUser, loading, fetchUsers } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    async function loadUsers() {
      await fetchUsers()
    }
    loadUsers()
  }, [])

  const handleUserClick = (userId, event) => {
    if (event.target?.classList.contains("delete-btn")) {
      return
    }
    navigate(`/users/${userId}`)
  }

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId)
  }

  return (
    <div className="w-full flex justify-center">
      {!loading ? (
        <div className="flex justify-center gap-3 flex-wrap">
          {users.map((user) => (
            <div
              key={user._id}
              onClick={(event) => handleUserClick(user._id, event)}
              className="user-card flex flex-col hover:bg-[#333333] bg-[#444444] w-auto h-auto p-4 rounded-xl border-2 border-[#333333]"
            >
              <div className="flex justify-end">
                <button
                  className="delete-btn text-[0.6rem]"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  ❌
                </button>
              </div>
              <div className="w-auto">{user.name}</div>
              <div className="w-auto">{user.email}</div>
            </div>
          ))}
        </div>
      ) : (
        <span className="loading loading-spinner loading-lg"></span>
      )}
    </div>
  )
}
