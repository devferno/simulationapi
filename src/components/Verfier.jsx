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
        }).catch(err=>setMessageError("le code n'est pas valid ressayer"));
    }

    return(
        <Box sx={{margin:"10px 0",padding:"20px 0"}}>
            <Container>
                <Box onSubmit={sendCode} component="form" sx={{background:"white",padding:"20px",
                maxWidth:"700px",
                margin:"40px auto", display:"flex", flexDirection:"column",alignItems:"center"}}>
                
                <Typography variant="h5" gutterBottom sx={{fontWeight:"300",textAlign:"center"}} >Nous envoyaions  une code a votre boite email</Typography>
                <Typography variant="caption" gutterBottom sx={{fontWeight:"400"}}>verifier le code pour simuler</Typography>
                {messageError ?
                <Alert severity="error">{messageError}</Alert>:messageError==="valid"?<Alert severity="success">success verification</Alert>:null
}
                <TextField variant="outlined" name="code" placeholder="code" sx={{ my:2} } value={code} onChange={(e)=>setCode(e.target.value)}/>
                <Button size="small" type="submit" variant="contained" color="success" disableElevation >verifier</Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Verifier