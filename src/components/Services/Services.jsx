import React from "react";
import Navbar from "../Navbar/Navbar";
import { Box, Container, Grid, Typography } from "@mui/material";
import Footer from "../footer/Footer";

const Services = () => {
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Navbar />
      <Container>
        <Box marginTop={"24px"} id="Residential-Property">
          <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
            <Typography
              textAlign={"center"}
              fontWeight={"600"}
              fontSize={"clamp(1.125rem, 1.0472rem + 0.3774vw, 1.5rem)"}
            >
              Residential Property
            </Typography>
            <Typography
              textAlign={"center"}
              fontWeight={"400"}
              fontSize={"16px"}
            >
              Whether you are an experienced investor or a first-time home
              buyer, we understand the importance of finding the ideal property.
              We hope to make the home buying process as easy as possible.
            </Typography>
            <video
              src="/images/Residential.mp4"
              width="100%"
              height="530px"
              autoPlay
              muted
              playsinline
              onloadedmetadata="this.volume=0.1"
              loop={true}
            ></video>
          </Box>
        </Box>
        <Box marginTop={"64px"} id="Commercial-Property">
          <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
            <Typography
              textAlign={"center"}
              fontWeight={"600"}
              fontSize={"clamp(1.125rem, 1.0472rem + 0.3774vw, 1.5rem)"}
            >
              Commercial Property
            </Typography>
            <Typography
              textAlign={"center"}
              fontWeight={"400"}
              fontSize={"16px"}
            >
              Having a through understanding of both people and space is
              essential to choosing the ideal workplace. Our market knowledge
              and expertise will help you choose the right property at the
              optimal price that meets your buisness objectives.
            </Typography>
            <video
              src="/images/commercial.mp4"
              width="100%"
              height="530px"
              autoPlay
              muted
              playsinline
              onloadedmetadata="this.volume=0.1"
              loop={true}
            ></video>
          </Box>
        </Box>

        <Box marginTop={"64px"} id="Retail">
          <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
            <Typography
              textAlign={"center"}
              fontWeight={"600"}
              fontSize={"clamp(1.125rem, 1.0472rem + 0.3774vw, 1.5rem)"}
            >
              Retail
            </Typography>
            <Typography
              textAlign={"center"}
              fontWeight={"400"}
              fontSize={"16px"}
            >
              We provide location consulting, property sourcing, affordable and
              trustworthy lease and sales services.
            </Typography>
            <video
              src="/images/retail.mp4"
              width="100%"
              height="530px"
              autoPlay
              muted
              playsinline
              onloadedmetadata="this.volume=0.1"
              loop={true}
            ></video>
          </Box>
        </Box>

        <Box margin={"64px 0px"} id="Land">
          <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
            <Typography
              textAlign={"center"}
              fontWeight={"600"}
              fontSize={"clamp(1.125rem, 1.0472rem + 0.3774vw, 1.5rem)"}
            >
              Land
            </Typography>
            <Typography
              textAlign={"center"}
              fontWeight={"400"}
              fontSize={"16px"}
            >
              Our Services include Land Mapping, Land Advisory, Assistance In
              Identification, Evaluation And Purchase Of Land, Sale of land
              using unique strategies to extract maximum value.
            </Typography>
            <video
              src="/images/land.mp4"
              width="100%"
              height="530px"
              autoPlay
              muted
              playsinline
              onloadedmetadata="this.volume=0.1"
              loop={true}
            ></video>
          </Box>
        </Box>

        <Box margin={"64px 0px"} id="NRI-&-HNI">
          <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
            <Typography
              textAlign={"center"}
              fontWeight={"600"}
              fontSize={"clamp(1.125rem, 1.0472rem + 0.3774vw, 1.5rem)"}
            >
              NRI & HNI
            </Typography>
            <Typography
              textAlign={"center"}
              fontWeight={"400"}
              fontSize={"16px"}
            >
              We open up a whole new world of investment opportunities for HNIs
              and NRIs. Through our international vertical, we offer NRI and HNI
              investors access to fast-growing real estate opportunities in the
              Delhi - NCR region. We offer solutions for residential, commercial
              and retail markets tailored to the unique needs of each location.
              Our solutions range from affordable, mid-range and premium
              options.
            </Typography>
            <img src="/images/nri.jpeg" width={"100%"} alt="" />
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Services;
