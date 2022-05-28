import '../styles/styles.scss'
const SelectComponent = ({label, fields}) => {
    let items = fields.split(',')
    return(
        <div className='d-flex direction-column'>
            <label className='fs-16 padding-bottom-10 input-label'>{label}</label>
            <select className='select-container'>
                {
                    items && items.length > 0 && items.map((x, i) => {
                        return(
                            <option value={x} key={i}>{x}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default SelectComponent
