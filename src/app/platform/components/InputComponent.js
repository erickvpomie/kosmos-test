import '../styles/styles.scss'
const InputComponent = ({type, label}) => {
    return(
        type !== 'radio' ? (
            <div className='d-flex direction-column'>
                <label className='fs-16 input-label padding-bottom-10'>{label}</label>
                <input className='input-container' type={type} placeholder={label}/>
            </div>
        ) : (
            <div className='d-flex align-items-center'>
                <input className='input-radio' type={type} placeholder={label}/>
                <label className='fs-16 padding-left-10 input-label padding-bottom-10'>{label}</label>
            </div>
        )
    )
}

export default InputComponent
