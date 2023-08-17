import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
const UpdatesPage = () => {
  const location = useLocation();
  const itemData = location.state;
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required1"
          label="Name"
          defaultValue={itemData.item.name}
        />
        <TextField
          required
          id="outlined-required2"
          label="email address"
          defaultValue={itemData.item.email}
        />
        <TextField
          required
          id="outlined-required3"
          label="phone number"
          defaultValue={itemData.item.phone}
        />

        <br />

        <Button
          variant="contained"
          onClick={async () => {
            try {
               const newName = document.getElementById("outlined-required1").value;
            const newEmail =
              document.getElementById("outlined-required2").value;
            const newPhone =
              document.getElementById("outlined-required3").value;
            await axios.put(
              `http://127.0.0.1:4000/customers/${itemData.item._id}`,
              {
                name: newName,
                email: newEmail,
                phone: newPhone,
              }
            );
            alert("Your details have been updated successfully")
            } catch (error) {
              alert("error updating your detaiils try later")
            }
           
          }}
        >
          Update Profile
        </Button>
      </div>
    </Box>
  );
};

export default UpdatesPage;
