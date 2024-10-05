import React from "react"
import { useNavigate } from "react-router-dom"

export default function About() {
  const navigate = useNavigate()
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
      <button
        className="btn absolute top-10 left-10"
        onClick={() => navigate("/")}
      >
        Go homepage
      </button>
      <div>
        <span className="text-[#e4af45]">Make by </span>Bunyakorn
        Pornsombatpaibool
      </div>
      <div>
        I was studying in King Mongkut's University of Technology Thonburi (Year
        3)
      </div>
      <div>Faculty of School Of Information Technology</div>
    </div>
  )
}
