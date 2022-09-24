// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <Card sx={{ display: "flex", background: "#fafafa", margin: "10px 0px" }}>
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image={data.photo}
          alt={data.name}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxHeight: "10px",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto", textAlign: "left" }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              {data.name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {data.phone}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {data.email}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default Contact;
