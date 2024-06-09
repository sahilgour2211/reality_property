import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";

const PRIMARY_COLOR = "#FFEA00";
const SECONDARY_COLOR = "#28282B";

const usefulLinks1 = ["About", "Testimonials", "Career"];
const usefulLinks2 = ["Awards and Recognition", "Contact US", "Privacy Policy"];
const usefulLinks3 = ["What we do", "Blog", "Properties", "FAQ"];
const Footer = () => {
  return (
    <Box p={2} bgcolor={SECONDARY_COLOR}>
      <Grid container spacing={4}>
        <Grid item sm={3}>
          <Box>
            <img
              src="/images/realtyUnitLogo.jpg"
              alt=""
              width={"200px"}
              height={"80px"}
            />
          </Box>
        </Grid>
        <Grid item sm={3}>
          <Box>
            <Typography color={"#fff"} variant="h6" textAlign={"start"}>
              Feel Free To Contact Us
            </Typography>
            <Divider sx={{ bgcolor: "#fff" }} />
            <Box py={2}>
              <Box
                py={1}
                sx={{
                  color: "#FFEA00",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CallIcon />
                <Typography color={"#fff"}>12345678</Typography>
              </Box>
              <Box
                py={1}
                sx={{
                  color: "#FFEA00",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <EmailOutlinedIcon />
                <Typography color={"#fff"}>RealtyUnit81@gmail.com</Typography>
              </Box>
              <Box
                py={1}
                sx={{
                  color: "#FFEA00",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <ComputerOutlinedIcon />
                <Typography color={"#fff"}>www.realtyunit.com</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box>
            <Typography color={"#fff"} variant="h6" textAlign={"start"}>
              Useful Links
            </Typography>
            <Divider sx={{ bgcolor: "#fff" }} />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={1}
            >
              <Box py={2}>
                {usefulLinks1.map((item) => (
                  <Typography py={0.5} color={"#fff"} textAlign={"start"}>
                    {item}
                  </Typography>
                ))}
              </Box>
              <Box py={2}>
                {usefulLinks2.map((item) => (
                  <Typography py={0.5} color={"#fff"} textAlign={"start"}>
                    {item}
                  </Typography>
                ))}
              </Box>
              <Box py={2}>
                {usefulLinks3.map((item) => (
                  <Typography py={0.3} color={"#fff"} textAlign={"start"}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
