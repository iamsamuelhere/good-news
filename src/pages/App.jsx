import * as React from "react";



import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import { useLocation, useNavigate, Outlet } from 'react-router'

export default function App() {
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true)
  let location = useLocation();
  console.log("Location", location)
  const path = location?.pathname
  const navigate = useNavigate();
  window.addEventListener('beforeinstallprompt', (event) => { console.log(event); });
  console.log("outlet", Outlet)
  React.useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/")
    } else {
      setIsLoading(false)
    }
  }, [])
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ flex: 1 }}>
        <Header />
        {/* {path=="/home"?<Home/>:path=="/good-news"?<GoodNews/>:<More/>} */}
        <Outlet />
      </div>
      <BottomNav value={value} setValue={setValue} />
    </div>
  );
}
