import './button.css'

const Button = (props)=> {

    const classBtn = props.type == "submit" ? "btn submit" : "btn"
    return(
        <button className={classBtn}>
            {props.children}
        </button>
    )
}
export default Button