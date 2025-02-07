import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const freecodecamp = { isFollowing: false }
  return (
    <section className="App">
        <TwitterFollowCard { ... freecodecamp }>
          FreeCodeCamp
        </TwitterFollowCard>
        
        <TwitterFollowCard children="Real Madrid" isFollowing userName="realmadrid">
          No usar así
        </TwitterFollowCard>
        
        <TwitterFollowCard  userName="fcbarcelona">
          FC Barcelona <strong>🔵🔴</strong>
        </TwitterFollowCard>
    </section>
  )
}