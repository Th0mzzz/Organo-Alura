import './input.css'
const Input = (props) =>{
    return(
        <div className="input-container">
            <label>{props.label}</label>
            <input placeholder={`${props.placeholder}...`} />
        </div>
    )
}
export default Input