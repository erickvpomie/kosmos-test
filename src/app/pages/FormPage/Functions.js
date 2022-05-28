import {useState} from "react";
import InputComponent from "../../platform/components/InputComponent";
import TextComponent from "../../platform/components/TextComponent";
import SelectComponent from "../../platform/components/SelectComponent";
import ImageComponent from "../../platform/components/ImageComponent";

export default function Functions () {
    const [form, setForm] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formSelected, setFormSelected] = useState(null);
    const [itemForm, setItemForm] = useState({component: '', label: '', type: '', fields: '', src : ''});

    const handleOpenModal = (value, component) => {
        setItemForm({...itemForm, component: component})
        setFormSelected(component)
        setShowModal(value)
    }

    const saveComponent = () => {
        setForm([...form, itemForm])
        setShowModal(false)
    }

    const handleComponents = (data) => {
        switch (data.component) {
            case 'input':
                return (
                    <InputComponent type={data.type} label={data.label}/>
                )
            case 'text':
                return (
                    <TextComponent text={data.label}/>
                )
            case 'select':
                return (
                    <SelectComponent label={data.label} fields={data.fields}/>
                )

            case 'image':
                return (
                    <ImageComponent alt={data.label} source={data.src}/>
                )
        }
    }

    const handleModalOptions = (formSelected) => {
        switch (formSelected) {
            case 'input':
                return (
                    <>
                        <input className='input-item' type='text' placeholder={'Label'}
                               onChange={(x) => setItemForm({...itemForm, label: x.target.value})}/>
                        <input className='input-item' type='text' placeholder={'Tipo'}
                               onChange={(x) => setItemForm({...itemForm, type: x.target.value})}/>
                    </>
                )
            case 'text':
                return (
                    <>
                        <input className='input-item' type='text' placeholder={'Texto'}
                               onChange={(x) => setItemForm({...itemForm, label: x.target.value})}/>
                    </>
                )
            case 'select':
                return (
                    <>
                        <input className='input-item' type='text' placeholder={'Label'}
                               onChange={(x) => setItemForm({...itemForm, label: x.target.value})}/>
                        <input className={'input-item'} type={'text'}
                               placeholder={'Ingresa las opciones separadas por comas'}
                               onChange={(x) => setItemForm({...itemForm, fields: x.target.value})}/>
                    </>
                )
            case 'image':
                return(
                    <>
                        <input className='input-item' type='text' placeholder={'Título de accesibilidad'}
                               onChange={(x) => setItemForm({...itemForm, label: x.target.value})}/>
                        <input className={'input-item'} type={'text'}
                               placeholder={'source (URL)'}
                               onChange={(x) => setItemForm({...itemForm, src: x.target.value})}/>
                    </>
                )
        }
    }
    return (
        { form,
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
            handleModalOptions }
    )
}

