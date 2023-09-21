import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
  let navi = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phonenumber: ''
  });
  const [isLogin, setIsLogin] = useState(false);
  const [isDetected, setIsDetected] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    localStorage.setItem('username', formData.username);
    localStorage.setItem('password', formData.password);
    localStorage.setItem('email', formData.email);
    localStorage.setItem('phonenumber', formData.phonenumber);
    alert(localStorage.getItem('username') + '님 회원가입이 완료되었습니다. 로그인을 진행해 주세요!');
    console.log(localStorage.getItem('username'), localStorage.getItem('password'), localStorage.getItem('email'), localStorage.getItem('phonenumber'));
  };
  const changeBtnContents=()=>{

  };
  return (
    <div id='signupWrap'>
      <div className="bg">
        <h2>회원가입</h2>
        <p>회원이 되어 다양한 문화 공연을 한눈에 경험해 보세요!</p>
        <form id='signUpForm'>
          <div>
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder='아이디를 입력하세요'
              min="1"
              required
            />
            {
              isDetected?
              <p className='isOkTxt'>사용해도 되는 아이디입니다.</p>
              :
              <button className='checkBtn' onClick={()=>{
                setIsDetected(true);
              }}>중복확인</button>
            }
          </div>
          <div>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='@를 포함하여 이메일을 입력하세요'
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='비밀번호를 입력하세요'
              required
              min={4}
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호 확인</label>
            <input
              type="password"
              id="passwordCheck"
              name="passwordCheck"
              placeholder='한번 더 입력하세요'
              required
            />
          </div>
          <div>
            <label htmlFor="phonenumber">전화번호</label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder='-를 포함해서 전화번호를 입력하세요'
            />
          </div>
          {
            isLogin ?
              <button className='toLoginBtn' type="button" onClick={() => {
                navi('/login');
                setIsLogin(!isLogin);
              }}>
                로그인하러가기
              </button>
              :
              <button className='signupBtn' type="button" onClick={() => {
                setIsLogin(!isLogin);
                handleSignup();
              }
              }>
                회원가입
              </button>
          }
        </form>
      </div>
    </div>
  );
}