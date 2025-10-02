import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './captcha.css'

export default function Captcha() {
  const nav = useNavigate()

  const [target] = useState(47) // 목표 클릭 수
  const [count, setCount] = useState(0)

  const onCircleClick = () => setCount(c => Math.min(c + 1, 999))

  const onSubmit = (e) => {
    e.preventDefault()
    if (count === target) {
      alert('인증 성공! 로봇이 아님을 증명했습니다.')
      nav('/captcha2') 
    } else {
      alert(`실패! ${target}번이 아닌 ${count}번 클릭했습니다.`)
      setCount(0)
    }
  }

  return (
    <main className="app-330 captcha">
      <h2 className="caption">지시를 따라 로봇이 아님을 증명하시오</h2>

      <section className="panel">
        {/* 단순 안내 박스 */}
        <div className="instruction-box">
          버튼을 정확히 {target}번 클릭
        </div>

        {/* 실제 클릭 버튼 (회색 원형) */}
        <button
          type="button"
          className="circle-button"
          onClick={onCircleClick}
          aria-label="클릭 버튼"
        ></button>

        <div className="footer">
          <button className="submit-click" onClick={onSubmit}>제출</button>
        </div>
      </section>
    </main>
  )
}
