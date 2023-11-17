export function Modal(props) {
    return (
        <div className="fixed w-full h-full flex items-center justify-center 
        p-10 -top-0 -left-0"style={{zIndex: "999", backgroundColor: 'rgba(0,0,0,0.3)'}}>
            <div className="modal-container bg-white rounded-3xl border border-black 
            relative p-8" style={{maxWidth: "500px"}}>
                <div className="bg-black text-white rounded-full w-9 h-9 flex items-center 
                justify-center absolute cursor-pointer -top-4 -right-4"
                onClick={() => props.closeClick()}>
                    <i className="bi bi-x text-xl"></i>
                </div>
                {props.children}
            </div>
        </div>
    )
}