import { Container, Typography,Box ,Button, Divider,Grid} from '@mui/material';

import React from 'react';
import {Link} from "react-router-dom";
import {amber,blue,indigo} from "@mui/material/colors";

export const LinearCard=({children,color})=>{
    
    return(
        <Box  sx={{textAlign:"center",border:`2px solid ${color}`,padding:"20px"}}>
            {children}
        </Box>
    )
}
const Profile = (props) => {
    const verified = localStorage.getItem("verified");
    console.log(typeof verified);
  return( 
  <>
  {verified==="false"?<Box sx={{width:"100%",background:amber[600]}}>
      <Container>

          <Box sx={{display:"flex",justifyContent:"space-between",py:1}}>
          <Typography variant="body1" sx={{fontWeight:"bold"}}>Tu dois verifier votre compte pour simuler</Typography>
          <Link to="/verifier"><Button variant="contained" disableElevation sx={{background:""}} size="small">verify</Button></Link>
          </Box>
      </Container>
  </Box>:null}
  <Box>
      <Container>

          <Box>
              <Typography variant="h5" sx={{my:3,padding:"10px"}}>Bonjour</Typography>
              <Divider/>
              <Grid container sx={{my:4}} >
              
              <Grid item xs={12} md={4} sx={{padding:"10px"}} ><Link to="/simuler">
                <LinearCard color={blue[600]}>Simuler</LinearCard></Link></Grid>
              
              
              <Grid item xs={12} md={4} sx={{padding:"10px"}} ><Link to="/historique"><LinearCard color={amber[200]}>voir l'historique</LinearCard></Link></Grid>
              
             
              <Grid item xs={12} md={4} sx={{padding:"10px"}} > <Link to="/demande"><LinearCard color={indigo[500]}>envoyer une demande</LinearCard></Link></Grid>
              
              </Grid>
          </Box>
      </Container>
  </Box>
  </>
  )
};

export default Profile;
