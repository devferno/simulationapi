import React from "react";
import { Box ,Typography} from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
      
        padding: "10px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{fontWeight:"300"}}>@Simulation des Api</Typography>
      <Typography variant="body2" sx={{fontWieght:"300"}}>Make with ❤ by Fernouny and Azelmad</Typography>
    </Box>
  );
};

export default Footer;
