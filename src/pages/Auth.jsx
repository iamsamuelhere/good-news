import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useState } from 'react'
import Typography from '@mui/material/Typography';
const Auth = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("")
    return <div
    >

        <form
            style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}

            onSubmit={(e) => {
                e.preventDefault();
                localStorage.setItem("userInfo", email)
                navigate("/home");
            }}
        >
            <Typography variant="h5" gutterBottom>
        The Good News
      </Typography>

            <TextField
                required
                id="outlined-basic"
                label="Email id"
                variant="outlined"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <Button autoFocus
                style={{ margin: "2em" }}
                variant="contained"
                type="submit">
                Next
            </Button>
        </form>

    </div>
}

export default Auth;