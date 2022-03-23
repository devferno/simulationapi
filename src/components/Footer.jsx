import React from "react";
import { Box ,Typography} from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        background:"white",
        padding: "30px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{fontWeight:"300"}}>Simulations des Credits</Typography>
      <Typography variant="body2" sx={{fontWieght:"300"}}>Make with ❤ by Fernouny and Azelmad</Typography>
    </Box>
  );
};

export default Footer;
