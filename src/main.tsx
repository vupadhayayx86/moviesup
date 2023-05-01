import ReactDOM from "react-dom/client";
import App from "./App"
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter} from 'react-router-dom'
import "./index.css"
import { CookiesProvider } from "react-cookie";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
    
    <CookiesProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CookiesProvider>
    
    </>
)