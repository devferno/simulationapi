import { useEffect, useState } from "react";
import {
  Box,
  Container,
  AccordionSummary,
  Accordion,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import TableAmortissment from "./TableAmortissment";

const Historique = () => {
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState([]);
  const [tabledata,setTableData] = useState([]);
  const [length,setLength]= useState();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    if(isExpanded){
        const simulation = {salaire:data[panel].salaire,duree:data[panel].duree,prix:data[panel].prix,projet:data[panel].projet.id,taux:data[panel].taux,client:data[panel].client.id}
        console.log(simulation);
        axios.post(`/simulation/`,simulation).then(res=>{setTableData(res.data);setLength(res.data.amortissement.length)});
    }
  };
  useEffect(() => {
    const id = localStorage.getItem("client");
    axios.get(`/get-client-simulations/${id}`).then((res) => {
      setData(res.data.reverse());
    });
  }, []);

  return (
    <Box sx={{ margin: "40px auto" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ margin: "20px 0 ", textAlign: "center" }}
        >
          Historique des simulations
        </Typography>
        {data.length===0?<Typography variant="h6">Vous fait aucun simulation</Typography>:
        data.map((simulation, index) => (
          <Accordion
            key={simulation.id}
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}bh-content`}
              id={`panel${index + 1}bh-header`}
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Simulation {index + 1}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                prix :{simulation.prix} duree: {simulation.duree} projet :
                {simulation.projet.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
             <TableAmortissment length={length} data={tabledata} />
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default Historique;
