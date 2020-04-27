import React, { useState } from "react";
import signup from "../styles/signup.scss";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";



const Profile = () => {
  const [form] = useState(
    {
      email: "homer.simpson@wildcodeschool.fr",
      name: "Homer",
      lastname: "Simpson"
    }
  );

  const { email, name, lastname } = form;


  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/signin">SignOut</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <form className="form">
          <div className="input">
            <List>
              <ListItem>
                <ListItemText primary={email} secondary={name} />
              </ListItem>
            </List>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Profile;

