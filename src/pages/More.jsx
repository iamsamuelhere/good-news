import {useNavigate} from 'react-router'
import {auth} from "../services/firebase"
import Button from "@mui/material/Button";
const More = ({user, setUser})=>{
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
  <img src={user?.photoURL} alt="Profile pic"
  style={{borderRadius:"50%"}}
  /><br/>
  {user?.email}<br/>


<Button autoFocus
                style={{ margin: "2em" }}
                variant="contained"
                onClick={()=>{
                  auth.signOut().then((res)=>{
                    console.log("signout", res)
                    navigate("/")
                  })
              
                }}
            >
                Logout
            </Button>
  </div>
}

export default More;