import {useNavigate} from 'react-router'

const More = ()=>{
  const navigate = useNavigate();
  return <div
  style={{
    height: "70vh",
    padding: "1em",
    margin: "1em",
    overflowY: "scroll",
  }}
  
  >
  <h1>More</h1>
  {localStorage.getItem("userInfo")}<br/>
  <button
  onClick={()=>{
    localStorage.removeItem("userInfo")
    navigate("/")
  }}
  
  >Logout</button>
  </div>
}

export default More;