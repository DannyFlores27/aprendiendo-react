export function TwitterFollowCard ({ userName, name, isFollowing }) {
    console.log(isFollowing)

    const title = userName === 'freecodecamp' ? 'Free Code Camp' : userName === 'realmadrid' ? 'Real Madrid' : 'FC Barcelona'

    return (
      <article className='tw-followCard'>
          <header className='tw-followCard-header'>
              <img
                  className='tw-followCard-avatar'
                  alt="El avatar de Mario"
                  src={`https://unavatar.io/youtube/${userName}`}></img>
              <div className="tw-followCard-info">
                  <strong>{name}</strong>
                  <span
                  className='tw-followCard-infoUserName'>@{title}</span>
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