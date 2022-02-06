import { Typography,Box,Container,TextField,Button,Alert} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Verifier =()=>{
    const [code,setCode] = useState("");
    const [messageError,setMessageError] = useState("");
    const userInfo = {id:localStorage.getItem("client"),code}
    const navigate = useNavigate();
    const sendCode =(e)=>{
        e.preventDefault();
        
        axios.post("/verify-client-email/",userInfo).then(res=>{
            setMessageError("valid");
            navigate("/profile");
            localStorage.removeItem("verified");
        }).catch(err=>setMessageError("le code est pas valide ressayer"));
    }

    return(
        <Box>
            <Container>
                <Box onSubmit={sendCode} component="form" sx={{margin:"40px auto", display:"flex", flexDirection:"column",alignItems:"center"}}>
                <Typography variant="h4">Tu Dois verifier votre compte pour completer</Typography>
                {messageError ?
                <Alert severity="error">{messageError}</Alert>:messageError==="valid"?<Alert severity="success">success verification</Alert>:null
}
                <TextField variant="outlined" name="code" placeholder="code" sx={{ my:2} } value={code} onChange={(e)=>setCode(e.target.value)}/>
                <Button size="small" type="submit" variant="contained" color="success" >verifier</Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Verifier