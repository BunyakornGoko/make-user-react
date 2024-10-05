import React, { useEffect, useState, useContext } from "react"
import { UserContext } from "../Context/UserContext.jsx"

export default function CreateUserModal({
  createModalOpen,
  handleCreateModalOpen
}) {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { addUser } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !password) {
      alert("All fields are required")
      return
    }

    try {
      const userData = { name, email, password }
      await addUser(userData)
      setName("")
      setEmail("")
      setPassword("")
      handleCloseModal()
    } catch (error) {
      console.log(error)
    }
  }

  const handleCloseModal = () => {
    handleCreateModalOpen(false)
  }
  return (
    <>
      {createModalOpen ? (
        <div className="fixed inset-0 grid place-items-center bg-[#0005] backdrop-blur-sm">
          <div className="bg-base-100 w-[25rem] h-[27rem] p-4 rounded-2xl">
            <h3 className="text-2xl font-bold">Create user</h3>
            <form
              onSubmit={handleSubmit}
              className="flex mt-3 flex-col justify-center gap-2"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-[20rem]">Name</div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-[20rem]">Email</div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-[20rem]">Password</div>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-end gap-3 p-4">
                <button type="submit" className="btn btn-success">
                  Confirm
                </button>
                <button onClick={() => handleCloseModal()} className="btn">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}
