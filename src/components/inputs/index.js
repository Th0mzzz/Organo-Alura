import './input.css';

const Input = (props) => {

    const changing = (e) => {
        props.onChanged(e.target.value)
    }
    if (props.type === 'select' && props.itens) {
        return (
            <div className='input-container'>
                <label>{props.label}</label>
                <select required={props.required} onChange={changing} value={props.value}>
                    <option value="" disabled> Selecione...</option>
                    {
                        props.itens.map((item) => <option key={item.id}>{item.nome}</option>)
                    }
                </select>
            </div>
        )
    }


    return (
        <div className={`input-container input-${props.type}`}>
            <label>{props.label}</label>
            <input type={props.type} required={props.required} placeholder={`${props.placeholder}...`} onChange={changing} value={props.value} />
        </div>
    )




}
export default Input;