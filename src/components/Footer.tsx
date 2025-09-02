import  { useState } from "react";
import ModalWindow from "./ModalWindow.tsx";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <footer className="flex justify-center
                            items-center py-4
                            bg-gray-100">
            <div
                className="inline-block py-2 px-4
                bg-[#DC3545] hover:bg-[#B02A37]
                text-white
                rounded cursor-pointer"
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
