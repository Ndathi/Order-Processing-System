import axios from "axios";
import {Link} from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "./user.styles.css";
export default function User(customa) {
  const name = customa.item.name;
  const id = customa.item._id;

  return (
    <List dense sx={{ width: "100%", bgcolor: "black" }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar src="https://i.ibb.co/HxYtqNN/illama.jpg" />
          </ListItemAvatar>
          <ListItemText id="listItem_name">{name}</ListItemText>
          <Link to="/customers/edit" state={customa}>
            <ListItemButton className="list_btn">Update Profile</ListItemButton>
          </Link>
          <ListItemButton
            className="list_btn"
            onClick={() => {
              axios.delete(`http://127.0.0.1:4000/customers/${id}`);
            }}
          >
            Delete
          </ListItemButton>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
