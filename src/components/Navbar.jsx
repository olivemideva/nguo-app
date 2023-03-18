import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar } from "./";
import '../App.css';

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: 'transparent', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center", outline: "none" }}>
      <p className="logo">Nguo</p>
    </Link>
    <SearchBar />
    <Link to="../loginandregister">
    <button className="login"> Login </button>
    </Link>
  </Stack>
);

export default Navbar;