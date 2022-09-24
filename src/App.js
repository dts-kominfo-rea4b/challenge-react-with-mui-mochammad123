import "./App.css";
import Grid from "@mui/material/Grid";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Card from "@mui/material/Card";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
import { useState } from "react";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);
  const handleClick = (event) => {
    setContacts([...contacts, event]);
  };

  return (
    <div className="App">
      <Header />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <ContactForm handleClick={handleClick} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{ padding: "20px 70px", borderRadius: "25px" }}
          >
            {contacts.map((contact, index) => (
              <Contact key={index} data={contact} />
            ))}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
