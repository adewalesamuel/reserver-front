export function PrimaryButton(props) {
    return (
        <button className={`rounded-2xl bg-gradient-to-t from-tertiaire to-secondary 
        uppercase px-4 text-white mt-3 text-left ${props.classNames ?? ''}`} 
        onClick={props.handleClick ?? null}>
              {props.children}
        </button>
    )
}