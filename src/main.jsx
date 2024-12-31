import ReactDOM from 'react-dom/client'
import App from './pages/App';

import { BrowserRouter, Routes, Route } from "react-router";
import Auth from './pages/Auth'
import Home from './pages/Home'
import GoodNews from './pages/GoodNews'
import More from './pages/More'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route element={<App />}>
                <Route path="/home" element={<Home />} />
                <Route path="/good-news" element={<GoodNews />} />
                <Route path="/more" element={<More />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>

    </BrowserRouter>
)