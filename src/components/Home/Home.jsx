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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              padding: "24px",
              borderRadius: "8px",
            }}
          >
            <Typography
              textAlign={"start"}
              fontWeight={"600"}
              fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
              fontFamily={"sans-serif"}
            >
              Discover the Perfect Blend of Comfort and Style
            </Typography>
            <Typography
              textAlign={"start"}
              fontWeight={"400"}
              fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
              fontFamily={"sans-serif"}
            >
              Welcome to our premier property showcase, where luxury meets
              convenience. Whether you're seeking a cozy apartment in the heart
              of the city, a spacious family home in the suburbs, or a serene
              retreat surrounded by nature, we have the perfect property for
              you.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              padding: "24px",
              borderRadius: "8px",
            }}
          >
            <Typography
              textAlign={"start"}
              fontWeight={"600"}
              fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
              fontFamily={"sans-serif"}
            >
              Explore Our Exquisite Listings
            </Typography>
            <Typography
              textAlign={"start"}
              fontWeight={"400"}
              fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
              fontFamily={"sans-serif"}
            >
              Our carefully curated listings feature a diverse range of
              properties to suit every lifestyle and budget. From modern
              apartments with stunning city views to elegant houses with
              expansive gardens, each property is meticulously selected to offer
              the best in comfort, design, and location.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              padding: "24px",
              borderRadius: "8px",
            }}
          >
            <Typography
              textAlign={"start"}
              fontWeight={"600"}
              fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
              fontFamily={"sans-serif"}
            >
              Experience Unmatched Quality
            </Typography>
            <Typography
              textAlign={"start"}
              fontWeight={"400"}
              fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
              fontFamily={"sans-serif"}
            >
              We pride ourselves on offering properties that meet the highest
              standards of quality and craftsmanship. Each home is equipped with
              top-of-the-line amenities, designed to provide you with a living
              experience that's both luxurious and convenient.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
