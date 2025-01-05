import { useState, useEffect } from "react"
import { useNavigate, Outlet } from 'react-router'

import BottomNav from "../components/BottomNav";
import Header from "../components/Header";


export default function App({ user }) {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate();
  window.addEventListener('beforeinstallprompt', (event) => { console.log(event); });
  console.log("outlet", Outlet)
  useEffect(() => {
    if (!user) {
      navigate("/")
    } else {
      setIsLoading(false)
    }
  }, [])
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <BottomNav value={value} setValue={setValue} />
    </div>
  );
}
