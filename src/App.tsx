import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

export default function App() {
  const [RegisterView, ToggleFn] = useState(true);

  const ToggleClick = function (){
    ToggleFn((PrevValue)=>{return !PrevValue})
  }

  return (
    <>
      <div className="form-container">
        {RegisterView ? <RegisterForm /> : <LoginForm />}
        <div id="Go-To" onClick={ToggleClick}>
          <b>Go To {RegisterView ? 'Login' : 'Sign Up'} Page </b>{' '}
        </div>
      </div>
    </>
  );
}
