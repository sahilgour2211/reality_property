import React from "react";
import Navbar from "../Navbar/Navbar";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <Box sx={{ marginTop: "60px" }}>
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
                height: "600px",
              }}
            >
              <Container sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  fontWeight={"600"}
                  color={"#fff"}
                  fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
                  mt={"32px"}
                >
                  Commercial
                </Typography>
              </Container>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: "url('/images/residential.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "600px",
              }}
            >
              <Container sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  fontWeight={"600"}
                  color={"#fff"}
                  fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
                  mt={"32px"}
                >
                  Residential
                </Typography>
              </Container>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: "url('/images/land.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "600px",
              }}
            >
              <Container sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  fontWeight={"600"}
                  color={"#fff"}
                  fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
                  mt={"32px"}
                >
                  Land
                </Typography>
              </Container>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
