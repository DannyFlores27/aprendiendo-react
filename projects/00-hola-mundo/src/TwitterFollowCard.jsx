export function TwitterFollowCard ({ children, userName = 'unknow', isFollowing }) {
    console.log(isFollowing)

    return (
      <article className='tw-followCard'>
          <header className='tw-followCard-header'>
              <img
                  className='tw-followCard-avatar'
                  alt="El avatar de Mario"
                  src={`https://unavatar.io/youtube/${userName}`}></img>
              <div className="tw-followCard-info">
                  <strong>{children}</strong>
                  <span
                  className='tw-followCard-infoUserName'>@{userName}</span>
              </div>
          </header>
  
          <aside>
              <button className='tw-followCard-button'>
                  Seguir
              </button>
          </aside>
      </article>
    )
  }