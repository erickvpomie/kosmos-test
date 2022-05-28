import './styles.scss'
import Functions from "./Functions";

const FormPage = () => {
    const {
        form,
        setForm,
        showModal,
        setShowModal,
        formSelected,
        setFormSelected,
        itemForm,
        setItemForm,
        handleOpenModal,
        saveComponent,
        handleComponents,
        handleModalOptions
    } = Functions()
    return (
        <div className='main-container d-flex'>
            <div className="left-container d-flex direction-column align-items-center">
                <div className="componentes-title fs-24 fw-medium">Componentes</div>
                <div className='fs-16 padding-bottom-20'>Haga clic para añadir</div>
                <div className='d-flex direction-column'>
                    <div className='component-item fs-18 margin-bottom-20 text-white'
                         onClick={() => handleOpenModal(true, 'input')}>Input
                    </div>
                    <div className='component-item fs-18 margin-bottom-20 text-white'
                         onClick={() => handleOpenModal(true, 'text')}>Texto
                    </div>
                    <div className='component-item fs-18 margin-bottom-20 text-white'
                         onClick={() => handleOpenModal(true, 'select')}>Select
                    </div>
                    <div className='component-item fs-18 margin-bottom-20 text-white'
                         onClick={() => handleOpenModal(true, 'image')}>Imagen
                    </div>
                </div>
            </div>
            <div className="right-container d-flex direction-column align-items-center">
                <div className="form-title fs-24 text-dark fw-bold">Creación de Formulario</div>
                {
                    form && form.length > 0 ? (
                        <>
                            {
                                form.map((x, i) => {
                                    return (
                                        <div key={i}>
                                            {handleComponents(x)}
                                        </div>
                                    )
                                })
                            }
                        </>
                    ) : (
                        <div className='empty-form d-flex align-items-center justify-content-center'>
                            Añade Componentes para crear un formulario
                        </div>)
                }
            </div>
            {
                showModal && (
                    <div className='modal-container fadeIn'>
                        <div className="modal">
                            <div className="close-icon" onClick={() => handleOpenModal(false, '')}>x</div>
                            <div>¿Qué datos deseas en tu componente de tipo {formSelected}?</div>
                            {
                                handleModalOptions(formSelected)
                            }
                            <div className='primary-button' onClick={() => saveComponent()}>Agregar</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default FormPage
