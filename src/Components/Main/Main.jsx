import HOC from "../../HOC/hoc";
import { useFetch } from "../../Hooks/useFetch";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Carousel } from "react-responsive-carousel";

import "./Styles/Main.css";
import { memo, useState } from "react";

const Greeting = memo(function Greeting({ name }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return (
    <h3>
      Hello{name && ", "}
      {name}!
    </h3>
  );
});

function Main() {
  const products = useFetch("https://fakestoreapi.com/products");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className="main__container">
      <label>
        Name{": "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{": "}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </div>
  );
}
export default HOC(Main);
