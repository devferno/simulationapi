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
    console.log(userInfo);

    axios
      .post(
        "/create-client/",
        userInfo
      )
      .then((res) => {
        
        localStorage.setItem("client", res.data.id);
        localStorage.setItem("verified",res.data.verified);
      
      }).then((res)=>  navigate("/profile"))
  };

  return (
    <Box>
      <Container>
        <Box
          component="form"
          onSubmit={signup}
          sx={{
            border: "1px solid #e3e3e3",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 4,
            my: 4,
            width: { xs: "80%", md: "50%" },
            mx: "auto",
          }}
        >
          <Typography variant="h4" sx={{ my: 3 }}>
            S'inscrire
          </Typography>
          <TextField
            variant="outlined"
            sx={{ width: "300px", my: 1 }}
            fullWidth
            name="email"
            placeholder="email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <TextField
            value={userInfo.jsuis}
            select
            label="projet"
            helperText="Please select your projet"
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
            sign up
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
