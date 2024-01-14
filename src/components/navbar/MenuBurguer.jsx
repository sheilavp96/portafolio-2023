import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

export default function MenuBurguer(listAppBar) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: "#ff335f" }} />
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {listAppBar?.listAppBar.map((list) => (
          <MenuItem onClick={handleClose} key={list.id}>
            {list.id === "04" ? (
              <a
                style={{ color: "#000000", textDecoration: "none" }}
                href="https://www.linkedin.com/in/sheilavp96/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <b>{list.id} </b>
                {list.name}
              </a>
            ) : (
              <Link to={`section--${list.id}`} smooth={true} duration={1000}>
                <b>{list.id} </b>

                {list.name}
              </Link>
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
