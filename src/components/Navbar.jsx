
import {Box, Button, Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
  <Box sx={{width:"100%",borderBottom:"1px #e3e3e3 solid"}}>
      <Container>
      <Box sx={{py:2 ,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <Box>
              <Typography variant="h6">Bank</Typography>
          </Box>
          <Box sx={{display:"flex",alignItems:"center"}}>
              <Link to="/">
                  <Typography variant="body1" sx={{mx:2}}>credits</Typography>
              </Link>
              <Link to="/simuler">
                  <Typography variant="body1" sx={{mx:2}}>simuler</Typography>
              </Link>
              <Link to="/historique">
                  <Typography variant="body1" sx={{mx:2}}>historique</Typography>
              </Link>
              <Link to="/signup">
                  <Button variant="contained" sx={{ml:2}} disableElevation>signup</Button>
              </Link>
          </Box>
      </Box>
      </Container>
  </Box>
  )
};

export default Navbar;
