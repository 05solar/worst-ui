// File: src/pages/start.js
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './start.css'

export default function Start() {
  const nav = useNavigate()

  const handleNextClick = () => {
    alert('“계속” 버튼을 클릭하여 진행하시오')
  }

  const handleContinueClick = () => {
    nav('/signup')
  }

  return (
    <main className="app-330">
      <section>
        <h1 className="title">
          최고의 <em>ui</em><br />사이트
        </h1>

        <p className="subtitle">
          <span
            className="continue-text"
            onClick={handleContinueClick}
          >
            계속
          </span>
          버튼을 클릭하여<br />페이지를 이동하세요
        </p>

        <button className="big-btn" onClick={handleNextClick}>
          다음
        </button>
      </section>
    </main>
  )
}
