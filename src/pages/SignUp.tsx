import { useState } from "react";
import useSignUp from "../hooks/useSignUp";
import AppNav from "../components/AppNav";

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useSignUp();

  const handleSignUp = async (e) => {
    e.preventDefault();

    await signUp(username, email, password)
  }

  return (
    <div className="Signup">
      <AppNav />
      <form onSubmit={handleSignUp}>
        <input 
          type="text" 
          placeholder="Name" 
          onChange={(e) => setUsername(e.target.value)} 
          value={username} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
        <input type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
        <button 
          type="submit" 
          className="bg-black text-white p-1">
            Sign Up
        </button>
      </form>
    </div>
  )
}
