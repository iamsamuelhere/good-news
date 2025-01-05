import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';

import { signInWithPopup, getAuth } from 'firebase/auth'
import { auth, googleProvider } from '../services/firebase'

const Auth = ({user, setUser}) => {
    console.log("in auth user", user)
    let navigate = useNavigate();
    const [email, setEmail] = useState("")
  
    const handleSignin = async () => {
        try {

            const result = await signInWithPopup(auth, googleProvider)
           console.log("handlesignin ",result)
           navigate("/home")
        } catch (error) {
            console.error("signin error", error)
        }
    }
    useEffect(()=>{
        if(user){
            navigate("/home")
        }
    },[])
    return <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}

    >

            <Typography variant="h5" gutterBottom>
                The Good Diary
            </Typography>

          

            <Button autoFocus
                style={{ margin: "2em" }}
                variant="contained"
                onClick={handleSignin}
            >
                Sign in with Google
            </Button>

    </div>
}

export default Auth;