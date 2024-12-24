import * as React from "react";

//pages
import Home from "./Home";
import GoodNews from "./GoodNews";
import More from "./More";

import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
export default function App() {
  const [value, setValue] = React.useState(0);
  window.addEventListener('beforeinstallprompt', (event) => { console.log(event); });
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ flex: 1 }}>
        <Header />
        {value == 0 ? <Home /> : value == 1 ? <GoodNews /> : <More />}
      </div>
      <BottomNav value={value} setValue={setValue} />
    </div>
  );
}
