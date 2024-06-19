import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../constants";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import Footer from "../footer/Footer";

const ContactUS = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const { name, email, phone, message } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!name || !email || !phone || !message) {
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/user/contact-form`, form);
      setForm({ name: "", email: "", phone: "", message: "" });
      if (res.success) {
        // alert("Form Submitted");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          background: "url(/images/contactBG.png)",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Navbar />
        {loading && (
          <Box position={"absolute"} top={"50%"} left={"48%"}>
            <CircularProgress />
          </Box>
        )}
        <Box
          p={4}
          bgcolor={"#fff"}
          mt={4}
          width={{ xs: "100%", md: "30%" }}
          sx={{ borderRadius: "12px" }}
        >
          <Typography
            // color={"#fff"}
            fontWeight={"bold"}
            textAlign={"center"}
            variant="h4"
          >
            Contact Form
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={4} p={2}>
            <TextField
              sx={{ color: "#fff" }}
              label="Name"
              variant="standard"
              value={name}
              name="name"
              onChange={handleChange}
            />
            <TextField
              label="Email"
              variant="standard"
              value={email}
              name="email"
              onChange={handleChange}
            />
            <TextField
              label="Phone"
              variant="standard"
              value={phone}
              name="phone"
              onChange={handleChange}
            />
            <TextField
              multiline
              maxRows={4}
              label="Message"
              variant="filled"
              value={message}
              name="message"
              onChange={handleChange}
            />
          </Box>
          <Button
            onClick={handleSubmit}
            sx={{
              marginTop: 2,
              width: "50%",
              bgcolor: "#000",
              color: "#fff",
              background:
                "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgb(25 132 165) 80%, rgb(54 71 124 / 98%) 100%)",
              "&:hover": {
                bgcolor: "#000",
                color: "#fff",
              },
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
      <Container>
        <Box sx={{ margin: "48px 0px" }}>
          <Typography fontWeight={"600"} fontSize={"18px"}>
            CONTACT INFO
          </Typography>
          <Typography fontWeight={"400"} marginTop={"4px"}>
            Fix the Appointment with us!
          </Typography>
          <Grid container marginTop={"32px"} columnSpacing={"24px"}>
            <Grid item md={4} xs={12}>
              <Box
                sx={{
                  padding: "48px",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  height: "265px",
                }}
              >
                <Box textAlign={"center"}>
                  <ApartmentIcon fontSize="large" />
                </Box>
                <Typography fontWeight={"600"}>Head Office</Typography>
                <Typography>
                  D-112, Sushant Shopping Arcade, Gurugram, India, Haryana
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box
                sx={{
                  padding: "48px",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  height: "265px",
                }}
              >
                <Box textAlign={"center"}>
                  <AddIcCallIcon fontSize="large" />
                </Box>
                <Typography fontWeight={"600"}>Phone</Typography>
                <Typography>+91 75 3506 5051</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box
                sx={{
                  padding: "48px",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  height: "265px",
                }}
              >
                <Box textAlign={"center"}>
                  <MarkEmailReadIcon fontSize="large" />
                </Box>
                <Typography fontWeight={"600"}>Email</Typography>
                <Typography>info@realtyunit.in</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUS;
