import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import {
  Typography,
  Box,
  Input,
  FormControl,
  Button,
  InputLabel,
} from "@mui/material";

function Navbar(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  // const [query, setquery] = useState();
  const [newName, setNewName] = useState([]);
  const onSubmitForm = () => {
    setNewName(name);
  };
  useEffect(() => {}, [name]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: 350,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "wheat" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">
              {props.title}
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home {name}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/restaurants">
                  Restaurants
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/food">
                  Items
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={() => handleOpen()}>
                  SignUp
                </NavLink>
              </li>
            </ul>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                console.log("first");
                // setquery(e.target.value);
              }}
            />
            <button>Search</button>
          </div>
        </div>
      </nav>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form action="" onSubmit={() => onSubmitForm()}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Sign Up
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                Welcome to our Restaurant
              </Typography>
              <FormControl>
                <InputLabel htmlFor="my-input"></InputLabel>
                <Input
                  placeholder="Your Name"
                  name="name"
                  sx={{ mt: 3 }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <Input
                  placeholder="Your contact"
                  type="number"
                  name="number"
                  sx={{ mt: 3 }}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                ></Input>
              </FormControl>

              <Button type="submit" sx={{ mt: 4 }}>
                submit
              </Button>
            </Box>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
