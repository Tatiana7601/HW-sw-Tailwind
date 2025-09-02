import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {BrowserRouter} from "react-router";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    // <StrictMode> //TODO
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    // </StrictMode>,
)
