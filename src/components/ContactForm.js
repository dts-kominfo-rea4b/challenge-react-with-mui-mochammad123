import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({ handleClick }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const handleChange = (event) => {
    setNewContact({
      ...newContact,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{ padding: "20px 40px", borderRadius: "25px" }}
      >
        <TextField
          fullWidth
          label="Name *"
          id="fullWidth"
          sx={{ margin: "10px 0px" }}
          name="name"
          value={newContact.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Phone *"
          id="fullWidth"
          sx={{ margin: "10px 0px" }}
          name="phone"
          value={newContact.phone}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Email *"
          id="fullWidth"
          sx={{ margin: "10px 0px" }}
          name="email"
          value={newContact.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Photo URL *"
          id="fullWidth"
          sx={{ margin: "10px 0px" }}
          name="photo"
          value={newContact.photo}
          onChange={handleChange}
          defaultValue=""
        />
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ margin: "30px 0px" }}
          onClick={() => handleClick(newContact)}
        >
          ADD NEW
        </Button>
      </Card>
    </>
  );
};

export default ContactForm;
