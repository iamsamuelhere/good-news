import { useNavigate } from 'react-router'
import { auth } from "../services/firebase"
import Button from "@mui/material/Button";
const More = ({ user, setUser }) => {
  const navigate = useNavigate();


  return <div
    style={{
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     height:"100vh"
    }}

  >
    <div>

    <img src={user?.photoURL} alt="Profile pic"
      style={{ borderRadius: "50%" }}
    /><br />
    {user?.email}<br />
    <Button
      style={{ marginTop:"2em"}}
      variant="contained"
      onClick={() => {
        auth.signOut().then((res) => {
          console.log("signout", res)
          navigate("/")
        })

      }}
    >
      Logout
    </Button>
    </div>
  </div>
}

export default More;