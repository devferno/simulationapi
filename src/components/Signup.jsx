import {
  Container,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {blueGrey} from "@mui/material/colors";
import Back from "./back3.jpg";
//page where user will enter his info to signup
//i get : info about the projet existed
//user post : his email and projet then i redirect him to /profile page

const Signup = () => {
  const projets = [
    {
      id: 1,
      name: "Artisan",
    },
    {
      id: 2,
      name: "Autres professions",
    },
    {
      id: 3,
      name: "Commerçant",
    },
    {
      id: 4,
      name: "Fonctionnaire",
    },
    {
      id: 5,
      name: "Profession libérale",
    },
    {
      id: 6,
      name: "Retraité",
    },
    {
      id: 7,
      name: "Salarié du secteur privé",
    },
  ];
  const [userInfo, setUserInfo] = useState({ email: "", jsuis: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();
  const signup = (e) => {
    e.preventDefault();
    setUserInfo(prev=>({...prev,age:parseInt(userInfo.age)}));

    axios
      .post(
        "/create-client/",
        userInfo
      )
      .then((res) => {
        
        localStorage.setItem("client", res.data.id);
        localStorage.setItem("verified",res.data.verified);
      
      }).then((res)=>  navigate("/simuler"))
  };

  return (
    <Box sx={{ margin: "30px 0", padding: "30px 0",borderRadius:"4px",overflow:"hidden" }}>
      <Container>
        <Box     sx={{
            background: "white",
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
          }}>
        <Box sx={{background:`url(${Back})`,flexShrink:1,width:"100%",minHeight:"100%",backgroundSize:"cover"}}>

        </Box>
        <Box
          component="form"
          onSubmit={signup}
          sx={{
            flexShrink: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              p: 2,
              border: "solid 2px #e3e3e3",
              // margin: "40px auto",
              width: { xs: "100%", md: "100%" },
          }}
        >
          <Typography variant="h4" sx={{ my: 3,color:blueGrey[800],fontWeight:"300" }}>
            Une étape avant la simulation
          </Typography>
          <TextField
            variant="outlined"
            sx={{ width: "300px", my: 1 }}
           
              fullWidth label="Email"
              type="email"
              required
            name="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth label="Nom Complet"
            variant="outlined"
            sx={{ width: "300px", my: 1 }}
            required
            name="name"
            placeholder="Nom complet"
            value={userInfo.name}
            onChange={handleChange}/>
          <TextField
            fullWidth label="Age"
            variant="outlined"
            sx={{ width: "300px", my: 1 }}
            name="age"
            required
            placeholder="Age"
            type="number"
            value={userInfo.age}
            onChange={handleChange}/>
          <TextField
          required
            fullWidth label="Sexe"
            variant="outlined"
            sx={{ width: "300px", my: 1 }}
            name="gender"
            placeholder="Sexe"
            value={userInfo.gender}
            onChange={handleChange}/>
          <TextField
          required
            value={userInfo.jsuis}
            select
            label="Profession"
            helperText="selectionner votre profession"
            sx={{ width: "300px", my: 1 }}
            onChange={handleChange}
            name="jsuis"
          >
            {projets.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="outlined" sx={{ my: 2 }}>
            Next
          </Button>
        </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
