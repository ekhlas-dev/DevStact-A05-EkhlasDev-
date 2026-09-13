import { useState } from "react";
import type { Itechnology } from "./Type/DataType";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";

const tecnologyDataFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [tecnologyDataPromise] = useState(()=>tecnologyDataFetch())
  // console.log(tec)
  return <>
  <Nav></Nav>
  <Banner></Banner>
  </>
   
}

export default App;
