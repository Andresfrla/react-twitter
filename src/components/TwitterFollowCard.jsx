export function TwitterFollowCard ({ children ,userName,  isFollowing}) {
    // no mutar los props, siempre crear una variable nueva

    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            alt="El avatar de midudev"
            src={`https://unavatar.io/${userName}`}/>

            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
            <aside>
                <button
                className='tw-followCard-button'
                >
                Seguir
                </button>
            </aside>
        </header>
    </article>
    )
}