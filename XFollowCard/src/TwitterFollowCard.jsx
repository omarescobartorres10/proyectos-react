import { useState } from "react";

export function TwitterFollowCard({children, userName = 'unknown', initialIsFollowing}) {

const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

const text = isFollowing ? 'Siguiendo' : 'Seguir';



const buttonClassName = isFollowing 
    ? 'tw-card-header-aside-button-following' 
    : 'tw-card-header-aside-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-card'>
            <header className='tw-card-header'>
                <img src={`https://unavatar.io/github/${userName}`} alt="Avatar" />
                <div className='tw-card-header-content'>
                    <strong className='tw-card-header-content-name'>
                        {children}
                    </strong>
                    <span className='tw-card-header-content-username'>
                        @{userName}
                    </span>
                </div>
            </header>
            <aside className='tw-card-header-aside'>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stop-following">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
