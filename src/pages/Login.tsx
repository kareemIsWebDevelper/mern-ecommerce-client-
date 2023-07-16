import { useState } from "react";
import useLogin from "../hooks/useLogin";
import AppNav from "../components/AppNav";
// import { useNavigate } from "react-router-dom";
// import useAuthContext from "../hooks/useAuthContext";

export default function Login() {
  // const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 

  const { login } = useLogin();

  // const {user}: {user: {
  //   username: string,
  //   password: string
  //   }} = useAuthContext();


  const handleLogin = async (e) => {
    e.preventDefault();

    // if (username === user.username && password === user.password) {
    //   navigate('/admin');  
    // } 
    // else {
    //   navigate('/');
    // }
    await login(username, password);
  }
  
  return (
    <div className="Login">
      <AppNav />
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Name" 
          onChange={(e) => setUsername(e.target.value)} 
          value={username} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
        <button 
          type="submit" 
          className="bg-black text-white p-1">
            Login
        </button>
      </form>
    </div>
  )
} 
