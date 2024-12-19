import './button.css'

const Button = (props)=> {

    const classBtn = props.type === "submit" ? "btn submit" : "btn"
    return(
        <button className={classBtn} onClick={props.onClick} style={props.style}>
            {props.children}
        </button>
    )
}
export default Button