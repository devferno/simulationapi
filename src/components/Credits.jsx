import React from "react";
import { Box, Container, Paper, Typography,Grid } from "@mui/material";
import { Link } from "react-router-dom";
import {BiMoney} from "react-icons/bi";
import {AiOutlineCar,AiFillHome,AiFillCar,AiOutlineCreditCard} from "react-icons/ai";

const CreditCard = ({ icon, title, link }) => {
  return (
    <Link to={link}>
      <Paper elevation={0} sx={{textAlign:"center",border:`2px solid #e3e3e3`,padding:"20px"}}>
        <Typography variant="h6">{title}</Typography>
        {icon}
      </Paper>
    </Link>
  );
};

const projets = [
  {
    id: 1,
    name: "J'ai besoin d'argent",
    icon:<BiMoney fontSize="80px" color="grey"/>
  },
  {
    id: 2,
    name: "Je finance mon véhicule d'occasion",
    icon:<AiOutlineCar fontSize="80px" color="grey"/>
  },
  {
    id: 3,
    name: "Je Gère mes imprévus",
    icon:<AiOutlineCreditCard fontSize="80px" color="grey"/>
  },
  {
    id: 4,
    name: "Je finance mon véhicule neuf",
    icon:<AiFillCar fontSize="80px" color="grey"/>
  },

  {
    id: 5,
    name: "J'équipe ma maison",
    icon:<AiFillHome fontSize="80px" color="grey"/>
  },
];

// const slug=(str)=>{
//     return str.split(" ").join('');
// }

const Credits = () => {
  return (
    <Box>
      <Container>
        <Box>
          <Typography variant="h5" textAlign="center" sx={{my:3}}>Choisir votre credit</Typography>
          <Grid container sx={{py:3}}>
          {projets.map(projet=><Grid item xs={12} sx={{p:1}} md={4}><CreditCard title={projet.name} key={projet.id} link={"/simuler"} icon={projet.icon}/></Grid>)}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Credits;
