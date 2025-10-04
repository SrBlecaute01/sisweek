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

import L from "leaflet";
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;

import defaultMarkerIconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import defaultMarkerIconUrl from "leaflet/dist/images/marker-icon.png";
import defaultMarkerShadowUrl from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: defaultMarkerIconUrl,
  iconRetinaUrl: defaultMarkerIconRetinaUrl,
  shadowUrl: defaultMarkerShadowUrl,
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={routes}/>
    </StrictMode>,
)