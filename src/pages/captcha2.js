import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './captcha2.css'

export default function Captcha2() {
  const nav = useNavigate()
  const [answer, setAnswer] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    // 정답이 정확히 25일 때만 통과
    if (answer.trim() === '25') {
      alert('정답입니다! 인증 성공!')
      nav('/final')
    } else {
      alert('오답입니다. 다시 시도하세요.')
      setAnswer('')
    }
  }

  return (
    <main className="app-330 captch2">
      <h2 className="caption">지시를 따라 로봇이 아님을 증명하시오</h2>

      <form className="panel" onSubmit={onSubmit}>
        {/* 상단 파란 안내 바 */}
        <div className="instruction">문제를 푸시오</div>

        {/* 문제 이미지 표시 */}
        <div className="problem">
            <img
            src={process.env.PUBLIC_URL + '/problem.png'}
            alt="문제"
            className="problem-img"
            />
        </div>

        {/* 하단 입력 + 제출 */}
        <div className="bottom">
          <input
            className="answer"
            type="text"
            placeholder="정답을 입력하세요"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            aria-label="답안 입력"
          />
          <button className="submit-math" type="submit-math">제출</button>
        </div>
      </form>
    </main>
  )
}
