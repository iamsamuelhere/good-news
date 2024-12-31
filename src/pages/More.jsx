import {useNavigate} from 'react-router'

const More = ()=>{
  const navigate = useNavigate();
  return <>
  <h1>More</h1>
  {localStorage.getItem("userInfo")}<br/>
  <button
  onClick={()=>{
    localStorage.removeItem("userInfo")
    navigate("/")
  }}
  
  >Logout</button>
  </>
}

export default More;