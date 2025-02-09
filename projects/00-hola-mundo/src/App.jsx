import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
const [isFollowing, setIsFollowing] = useState(false)
console.log('[TwitterFollowCard] rendes with userName: ', isFollowing)
  return (
    <section className="App">
        <TwitterFollowCard userName="freeCodeCamp" initialIsFollowing={isFollowing}>
          FreeCodeCamp
        </TwitterFollowCard>
        


        <button onClick={() => setIsFollowing(!isFollowing)}>
          Cambiar estado
        </button>
    </section>
  )
}