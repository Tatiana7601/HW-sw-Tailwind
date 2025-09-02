

interface Props{
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const ModalWindow = ({setIsOpen}:Props) => {

    return (
        <div
            className="modal fade show d-block"
            tabIndex={-1}
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
            <div className="modal-dialog">
                <div className="modal-content p-3">
                    <div className="modal-header">
                        <h5 className="modal-title">Send me an Email</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>
                            You can email me at:{" "}
                            <a href="mailto:luke@starwars.com">luke@starwars.com</a>
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-secondary"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </button>
                        <a
                            className="btn btn-primary"
                            href="mailto:luke@starwars.com"
                            onClick={() => setIsOpen(false)}
                        >
                            Write Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;