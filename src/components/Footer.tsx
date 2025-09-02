import  { useState } from "react";
import ModalWindow from "./ModalWindow.tsx";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <footer className="row align-items-center">
            <div
                className="offset-2 col-1 btn btn-danger"
                onClick={() => setIsOpen(true)}
                role="button"
                aria-label="Open Email Modal"
            >
                <p className="text-center pt-2">Email me</p>
            </div>

            {isOpen && (
                <ModalWindow setIsOpen={setIsOpen}/>
            )}
        </footer>
    );
};

export default Footer;
