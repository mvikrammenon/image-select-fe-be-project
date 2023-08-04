export default function Thumbnail({id, fileName, isActive, clickHandler}) {
    return (
        <a href="#" title={id} className={isActive ? 'active': ''}>
            <img 
                src={`images/thumbnails/${fileName}`}
                alt={fileName}
                onClick={() => clickHandler(id)}
                width="145"
                height="121"
            />
            <span>{id}</span>
        </a>
    )
}