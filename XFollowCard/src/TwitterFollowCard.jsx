import { useState } from 'react'; //es un hook. 

export function TwitterFollowCard({userName, name, children, initialIsFollowing }) { //la base de la reutilización son las propiedades, es decir, la data que le pasamos. 

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing ); //es un estado.La primera posición sirve para obtener  el estdo actual y la segunda para modificarlo.  Es un get y un set.   

    const text = isFollowing ? "Siguiendo" : "Seguir"; // renderizado condicional en el texto
    const buttonClassName = isFollowing  //renderizado condicional en el botón
    ? "tw-followCard-button is-following" 
    : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    
    return (
        <>
        <article className="tw-followCard">
                <header className="tw-followCard-header">
                    <img
                        src={`https://i.pravatar.cc/150?u=${userName}`}
                        alt="John Doe"
                        className="tw-followCard-avatar"
                    />
                    <div className="tw-followCard-info">
                        <strong className="tw-followCard-title">{children}</strong>
                        <span className="tw-followCard-username">@{userName}</span>
                    </div>
                </header>

                <div className="tw-followCard-actions">
                    <button className={buttonClassName} onClick={handleClick}>
                        {text} {/*Esto es el children*/}
                    </button>
                </div>
            </article>
    
        </>
    )
}