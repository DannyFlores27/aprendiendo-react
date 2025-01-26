import './App.css'

export function App() {
  return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img
                className='tw-followCard-avatar'
                alt="El avatar de Mario"
                src="https://unavatar.io/youtube/freecodecamp"></img>
            <div className="tw-followCard-info">
                <strong>Free Code Camp</strong>
                <span
                className='tw-followCard-infoUserName'>@freecodecamp</span>
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