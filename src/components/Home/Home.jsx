import React from "react";
import Navbar from "../Navbar/Navbar";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Navbar />
      {/* Hero - section */}
      <Box>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: "url('/images/commercial.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "680px",
                filter: "brightness(0.7)",
                position: "relative",
                zIndex: "0",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                zIndex: "1",
                top: "10px",
                left: "38%",
              }}
            >
              <Typography
                fontWeight={"600"}
                color={"#fff"}
                fontSize={"clamp(2rem, 1.5849rem + 2.0126vw, 4rem)"}
                mt={"32px"}
                sx={{ WebkitTextStroke: "0.1px black" }}
              >
                Commercial
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: "url('/images/residential.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "680px",
                filter: "brightness(0.7)",
                position: "absolute",
                zIndex: "0",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                zIndex: "1",
                top: "10px",
                left: "38%",
              }}
            >
              <Typography
                fontWeight={"600"}
                color={"#fff"}
                fontSize={"clamp(2rem, 1.5849rem + 2.0126vw, 4rem)"}
                mt={"32px"}
                sx={{ WebkitTextStroke: "0.1px black" }}
              >
                Residential
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: "url('/images/land.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "680px",
                filter: "brightness(0.7)",
                position: "absolute",
                zIndex: "0",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                zIndex: "1",
                top: "10px",
                left: "45%",
              }}
            >
              <Typography
                fontWeight={"600"}
                color={"#fff"}
                fontSize={"clamp(2rem, 1.5849rem + 2.0126vw, 4rem)"}
                mt={"32px"}
                sx={{ WebkitTextStroke: "0.1px black" }}
                textAlign={"center"}
              >
                Land
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>

      {/* body - text */}
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            margin: "64px 0px",
          }}
        >
          <Grid container columnSpacing={"32px"}>
            <Grid item md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "8px",
                  boxShadow: "rgb(167 168 46 / 24%) 0px 3px 8px",
                  padding: "24px",
                  borderRadius: "8px",
                  height: "550px",
                }}
              >
                <Typography
                  textAlign={"start"}
                  fontWeight={"600"}
                  fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
                  fontFamily={"sans-serif"}
                >
                  Do you wish to find out your dream home?
                </Typography>
                <Typography
                  textAlign={"start"}
                  fontWeight={"400"}
                  fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
                  fontFamily={"sans-serif"}
                >
                  Do you have trouble figuring out which properties are the most
                  profitable and include the best amenities? Connect with us to
                  learn more about the top homes in Delhi-NCR that are both
                  profitable and affordable. We assist real estate investors in
                  selecting the ideal property for their requirements as a real
                  estate consultant, advisor, and service provider. Thus, Realty
                  Unit is available to you if you want to purchase a home,
                  office space, retail space and land in Delhi-NCR with an
                  end-to-end property management solution.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  boxShadow: "rgb(167 168 46 / 24%) 0px 3px 8px",
                  padding: "24px",
                  borderRadius: "8px",
                  justifyContent: "center",
                  height: "550px",
                }}
              >
                <Typography
                  textAlign={"start"}
                  fontWeight={"600"}
                  fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
                  fontFamily={"sans-serif"}
                >
                  Why should I use <br />
                  Realty Unit?
                </Typography>
                <Typography
                  textAlign={"start"}
                  fontWeight={"400"}
                  fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
                  fontFamily={"sans-serif"}
                >
                  On our site, you can locate the most knowledgeable real estate
                  consultant or property advisor. Selecting us will enable you
                  to obtain the ideal house at the ideal location at a
                  reasonable cost, enabling you to reap financial benefits down
                  the road. We will keep you informed about all the important
                  aspects of real estate investing and assist you in
                  understanding the trends in the real estate industry. You will
                  also discover what recent developments are doing to alter the
                  real estate market's demand.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "rgb(167 168 46 / 24%) 0px 3px 8px",
              padding: "24px",
              borderRadius: "8px",
            }}
          >
            <Typography
              textAlign={"center"}
              fontWeight={"600"}
              fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
              fontFamily={"sans-serif"}
            >
              What Is Realty Unit?
            </Typography>
            <Typography
              textAlign={"center"}
              fontWeight={"400"}
              fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
              fontFamily={"sans-serif"}
            >
              Realty Unit is a property consulting and real estate advisory
              service firm that covers projects from different parts of
              Delhi-NCR. It helps you find your dream home, office space, retail
              space, and land according to market trends and demand to get the
              best property that gives you the best returns.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
