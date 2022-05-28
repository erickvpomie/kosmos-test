import '../styles/styles.scss'
const ImageComponent = ({ source, alt }) => {
    return(
        <img className='image-item' src={source} alt={alt} />
    )
}

export default ImageComponent
