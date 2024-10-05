import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { UserContext } from "../Context/UserContext.jsx"
import { useNavigate } from "react-router-dom"
import EditUserModal from "../components/EditUserModal.jsx"

export default function UserDetail() {
  const { id } = useParams()
  const { fetchUserById, loading, currentUser } = useContext(UserContext)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      await fetchUserById(id)
    }
    fetchUser()
  }, [id])

  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
      <button
        className="btn absolute top-20 left-36"
        onClick={() => navigate("/")}
      >
        Back to home
      </button>
      <button
        className="btn absolute top-20 left-[18rem]"
        onClick={() => setEditModalOpen(true)}
      >
        Edit
      </button>
      <div className="bg-[#555555] w-auto h-auto p-3 rounded-xl">
        <div className="text-2xl">UserDetail</div>
        <div className="divider"></div>
        <div className="text-xl">
          {!loading ? (
            <div className="flex flex-col">
              <div>{currentUser?.name}</div>
              <div>{currentUser?.email}</div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <EditUserModal
        editModalOpen={editModalOpen}
        setEditModalOpen={setEditModalOpen}
      />
    </div>
  )
}
