import { TextField, Box, Container, MenuItem,Button,Typography } from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";
import TableAmortissment from "./TableAmortissment";
import { useNavigate } from "react-router-dom";
const Simuler = () => {
  
  const [simulation,setSimulation] = useState({salaire:"",duree:"",prix:"",taux:"",projet:""});
  const projet =[
    {
        "id": 1,
        "name": "J'ai besoin d'argent"
    },
    {
        "id": 2,
        "name": "Je finance mon véhicule d'occasion"
    },
    {
        "id": 3,
        "name": "Je Gère mes imprévus"
    },
    {
        "id": 4,
        "name": "Je finance mon véhicule neuf"
    },
    {
        "id": 5,
        "name": "J'équipe ma maison"
    }
  ]
  const champs = [
      {name:"prix",icon:"",placeholder:"montant"},
      {name:"duree",icon:"",placeholder:"duree"},
      {name:"taux",icon:"",placeholder:"taux"},
      {name:"salaire",icon:"",placeholder:"salaire"}
  ]
  
  const [data,setData] = useState();
  const [length,setLength] = useState();
  const handleChange=(e)=>{
      
      const {name,value} = e.target;

      setSimulation(prev=>({...prev,[name]:parseInt(value)}));
    
  }
  useEffect(()=> setSimulation(prev=>({...prev,client:localStorage.getItem("client")})),[])
  const navigate = useNavigate();
  const sendData=(e)=>{
      e.preventDefault();
      console.log(simulation);
      

      axios.post("/simulation/",simulation).then(res=>{console.log(res.data);setData(res.data);setLength(res.data.amortissement.length)}).catch(err=>navigate("/verifier"));
  }
  return (
    <Box sx={{margin:"30px 0"}}>
      <Container>

          <Box component="form" onSubmit={sendData} sx={{display:"flex",flexDirection:"column",alignItems:"center", p:2,border:"solid 2px #e3e3e3",margin:"40px auto",width:{xs:"100%",md:"600px"}}}>
          <Typography variant="h5" sx={{my:2,textAlign:"center"}}>Simuler</Typography>
              {champs.map(item=>
              <TextField  key={item.name} value={simulation[item.name]} placeholder={item.placeholder} type="number" name={item.name} sx={{my:1}} onChange={handleChange}/>
              )}
            <TextField select lable="projet" helperText="choisir votre projet" name="projet" value={simulation.projet} onChange={handleChange}>
                {projet.map(item=>
                    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
            </TextField>
            <Button sx={{my:2}} variant="outlined" type="submit">simuler</Button>
          </Box>
          <TableAmortissment data={data} length={length}/>
      </Container>
      
    </Box>
  );
};

export default Simuler;
