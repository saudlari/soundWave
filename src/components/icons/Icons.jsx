import './Icons.css'

const Icons = ({ src, alt}) => {
    return (
        <div className="icons">
            <img className="icon-button" src={src} alt={alt} />
        </div> 
    )
}

export default Icons