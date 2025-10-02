
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'

export default function Signup() {
  const nav = useNavigate()

  const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const genPw = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let out = ''
    for (let i = 0; i < 6; i++) out += chars[randInt(0, chars.length - 1)]
    return out
  }

  const [form, setForm] = useState({ id: '', pw: '', year: 2000, day: 1, month: 1, gender: '' })
  const [showPwOpts, setShowPwOpts] = useState(false)
  const [pwOpts, setPwOpts] = useState([])

  useEffect(() => {
    setForm(f => ({ ...f, year: randInt(1900, 2025), day: randInt(1, 31), month: randInt(1, 12) }))
  }, [])

  const refreshPwOptions = () => setPwOpts(Array.from({ length: 6 }, genPw))
  const handlePwFocus = () => { refreshPwOptions(); setShowPwOpts(true) }
  const pickPw = (val) => { setForm(f => ({ ...f, pw: val })); setShowPwOpts(false) }

  const randomDown = (key, min) => setForm(f => ({ ...f, [key]: randInt(min, f[key]) }))
  const randomUp   = (key, max) => setForm(f => ({ ...f, [key]: randInt(f[key], max) }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // ✅ 성별 선택 로직: 남/여/기타 선택 시 가입 불가, '선택'만 가입 허용
    if (form.gender && form.gender !== '') {
      alert('다른 사용자가 사용하고 있는 성별입니다.')
      return
    }
    alert('가입 정보를 확인했습니다. (데모)')
    nav('/captcha')
  }

  return (
    <main className="app-330 signup">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">회원가입하기</h1>

        {/* 아이디 */}
        <label className="label sr-only" htmlFor="userId">아이디</label>
        <input id="userId" className="input red" placeholder="아이디" value={form.id}
               onChange={(e)=>setForm({ ...form, id: e.target.value })} autoComplete="username" />

        {/* 비밀번호 */}
        <label className="label sr-only" htmlFor="userPw">비밀번호</label>
        <input id="userPw" type="text" className="input red" placeholder="비밀번호고르기" value={form.pw}
               onChange={(e)=>setForm({ ...form, pw: e.target.value })} onFocus={handlePwFocus} onClick={handlePwFocus} autoComplete="new-password" />
        {showPwOpts && (
          <div className="pw-options">
            {pwOpts.map((v, i) => (
              <button key={i} type="button" className="pw-chip" onClick={() => pickPw(v)}>{v}</button>
            ))}
            <button type="button" className="pw-refresh" onClick={refreshPwOptions}>새로고침</button>
          </div>
        )}

        {/* 생일 */}
        <div className="field">
          <div className="field-label">생일</div>

          <div className="row">
            <button type="button" className="circle" onClick={()=>randomDown('year', 1900)}>down</button>
            <div className="value red-box">{form.year}</div>
            <button type="button" className="circle" onClick={()=>randomUp('year', 2025)}>up</button>
          </div>

          <div className="row">
            <button type="button" className="circle" onClick={()=>randomDown('day', 1)}>down</button>
            <div className="value red-box">{form.day}</div>
            <button type="button" className="circle" onClick={()=>randomUp('day', 31)}>up</button>
          </div>

          <div className="row">
            <button type="button" className="circle" onClick={()=>randomDown('month', 1)}>down</button>
            <div className="value red-box">{form.month}</div>
            <button type="button" className="circle" onClick={()=>randomUp('month', 12)}>up</button>
          </div>
        </div>

        {/* 성별 */}
        <div className="field" style={{marginTop: 8}}>
          <div className="field-label">성별</div>
          <select className="select gray" value={form.gender} onChange={e=>setForm({ ...form, gender: e.target.value })}>
            {/* ⬇️ 이제 disabled 제거 — 사용자가 '선택'을 실제로 선택할 수 있어야 함 */}
            <option value="">선택</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
            <option value="other">기타</option>
          </select>
        </div>

        <button type="submit" className="submit">가입하기</button>
      </form>
    </main>
  )
}
