import React from 'react'
import './final.css'

export default function Final() {
  return (
    <main className="app-330 final">
      <div className="final-container">
        <h2 className="final-title">회원가입에 성공하신걸<br />축하합니다</h2>
        <p className="final-text">그냥 테스트 용도로 한번 올려봤습니다</p>

        <div className="image-box">
          <img 
            src="/koala.png" 
            alt="축하 이미지" 
            className="final-image" 
          />
        </div>
      </div>
    </main>
  )
}
