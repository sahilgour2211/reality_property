import React from "react";
import Navbar from "../Navbar/Navbar";
import { Box, Container, Grid, Typography } from "@mui/material";

const Services = () => {
  return (
    <Box sx={{ marginTop: "60px" }}>
      <Navbar />
      <Container>
        <Box marginTop={"32px"}>
          <Box sx={{ marginTop: "48px" }}>
            <Grid
              container
              columnSpacing={"64px"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item md={6}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <Typography
                    textAlign={"start"}
                    fontWeight={"600"}
                    fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
                    fontFamily={"sans-serif"}
                  >
                    Residential Property
                  </Typography>
                  <Typography
                    textAlign={"start"}
                    fontWeight={"400"}
                    fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
                    fontFamily={"sans-serif"}
                  >
                    Whether you are an experienced investor or a first - time
                    home buyer, we understand time importance of finding the
                    ideal property. We hope to make the home buying process as
                    easy as possible.
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={6}>
                <video
                  src="/images/vid1.mp4"
                  width="100%"
                  height="400px"
                  autoplay
                  muted
                  playsinline
                  onloadedmetadata="this.volume=0.1"
                ></video>
              </Grid>
            </Grid>
          </Box>

          {/* grid - 2 */}
          <Box sx={{ marginTop: "48px" }}>
            <Grid
              container
              columnSpacing={"64px"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item md={6}>
                <video
                  src="/images/vid1.mp4"
                  width="100%"
                  height="400px"
                  autoplay
                  muted
                  playsinline
                  onloadedmetadata="this.volume=0.1"
                ></video>
              </Grid>
              <Grid item md={6}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <Typography
                    textAlign={"start"}
                    fontWeight={"600"}
                    fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
                    fontFamily={"sans-serif"}
                  >
                    Residential Property
                  </Typography>
                  <Typography
                    textAlign={"start"}
                    fontWeight={"400"}
                    fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
                    fontFamily={"sans-serif"}
                  >
                    Whether you are an experienced investor or a first - time
                    home buyer, we understand time importance of finding the
                    ideal property. We hope to make the home buying process as
                    easy as possible.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* grid - 2 */}
          <Box sx={{ marginTop: "48px" }}>
            <Grid
              container
              columnSpacing={"64px"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item md={6}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <Typography
                    textAlign={"start"}
                    fontWeight={"600"}
                    fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
                    fontFamily={"sans-serif"}
                  >
                    Residential Property
                  </Typography>
                  <Typography
                    textAlign={"start"}
                    fontWeight={"400"}
                    fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
                    fontFamily={"sans-serif"}
                  >
                    Whether you are an experienced investor or a first - time
                    home buyer, we understand time importance of finding the
                    ideal property. We hope to make the home buying process as
                    easy as possible.
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={6}>
                <video
                  src="/images/vid1.mp4"
                  width="100%"
                  height="400px"
                  autoplay
                  muted
                  playsinline
                  onloadedmetadata="this.volume=0.1"
                ></video>
              </Grid>
            </Grid>
          </Box>

          {/* grid - 2 */}
          <Box sx={{ marginTop: "48px" }}>
            <Grid
              container
              columnSpacing={"64px"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item md={6}>
                <video
                  src="/images/vid1.mp4"
                  width="100%"
                  height="400px"
                  autoplay
                  muted
                  playsinline
                  onloadedmetadata="this.volume=0.1"
                ></video>
              </Grid>
              <Grid item md={6}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <Typography
                    textAlign={"start"}
                    fontWeight={"600"}
                    fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
                    fontFamily={"sans-serif"}
                  >
                    Residential Property
                  </Typography>
                  <Typography
                    textAlign={"start"}
                    fontWeight={"400"}
                    fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
                    fontFamily={"sans-serif"}
                  >
                    Whether you are an experienced investor or a first - time
                    home buyer, we understand time importance of finding the
                    ideal property. We hope to make the home buying process as
                    easy as possible.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
