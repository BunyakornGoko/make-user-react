import React, { useState } from "react"
import Container from "../components/Container"
import CreateUserModal from "../components/CreateUserModal"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()
  const [createModalOpen, setCreateModalOpen] = useState(false)
  return (
    <div className="flex gap-3 justify-center items-center w-full h-screen">
      <div className="flex justify-end w-[55rem] gap-2 fixed top-3 right-3">
        <button className="btn" onClick={() => navigate("/about")}>
          About me
        </button>
        <button className="btn w-fit" onClick={() => setCreateModalOpen(true)}>
          +Create user
        </button>
      </div>
      <Container />
      <CreateUserModal
        createModalOpen={createModalOpen}
        handleCreateModalOpen={setCreateModalOpen}
      />
    </div>
  )
}
