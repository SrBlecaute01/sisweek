import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import routes from "./routes";

import './index.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "leaflet/dist/leaflet.css";
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={routes}/>
    </StrictMode>,
)