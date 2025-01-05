import ReactDOM from 'react-dom/client'
import App from './pages/App';

import { BrowserRouter, Routes, Route } from "react-router";
import Auth from './pages/Auth'
import Home from './pages/Home'
import GoodNews from './pages/GoodNews'
import More from './pages/More'
import NotFound from './pages/NotFound'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './services/firebase'
const AppComp = () => {
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)
    useEffect(() => {

        onAuthStateChanged(auth, (currentUser) => {
            console.log("onAuthchanges", currentUser)
            setUser(currentUser);
            setLoad(false)
        })
    }, [])

    if (load) {
        return <h1>Loading...</h1>
    }
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Auth user={user} setUser={setUser} />} />
            <Route element={<App user={user} setUser={setUser} />}>
                <Route path="/home" element={<Home user={user} setUser={setUser} />} />
                <Route path="/good-news" element={<GoodNews user={user} setUser={setUser} />} />
                <Route path="/more" element={<More user={user} setUser={setUser} />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
}
ReactDOM.createRoot(document.getElementById('root')).render(<AppComp />


)