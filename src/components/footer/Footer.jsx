import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const PRIMARY_COLOR = "#FFEA00";
const SECONDARY_COLOR = "#28282B";

const usefulLinks1 = ["About", "Testimonials", "Career"];
const usefulLinks2 = ["Awards and Recognition", "Contact US", "Privacy Policy"];
const usefulLinks3 = ["What we do", "Blog", "Properties", "FAQ"];
const Footer = () => {
  return (
    <Box p={2} bgcolor={SECONDARY_COLOR} paddingTop={"48px"}>
      <Grid container spacing={4}>
        <Grid item sm={3}>
          <Box>
            <img
              src="/images/mainLogo.png"
              alt=""
              width={"250px"}
              height={"100px"}
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid item sm={5}>
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
                <Typography color={"#fff"}>+91 75 3506 5051</Typography>
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
                <Typography color={"#fff"}>info@realtyunit.in</Typography>
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
                <Typography color={"#fff"}>www.realtyunit.in</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={4}>
          <Box>
            <Typography color={"#fff"} variant="h6" textAlign={"start"}>
              Useful Links
            </Typography>
            <Divider sx={{ bgcolor: "#fff" }} />
            {/* <Box
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
            </Box> */}
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=61561006010574&sk=about_contact_and_basic_info"
                style={{ color: "#FFEA00" }}
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/realtyunit/"
                style={{ color: "#FFEA00" }}
              >
                <InstagramIcon />
              </a>
              <a href="https://x.com/RealtyUnit5" style={{ color: "#FFEA00" }}>
                <XIcon />
              </a>
              <a
                href="https://www.youtube.com/channel/UCHSEN1QJCwz1P23fHv37VSQ"
                style={{ color: "#FFEA00" }}
              >
                <YouTubeIcon />
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
