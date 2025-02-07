import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className="App">
        <TwitterFollowCard isFollowing={false} userName="freecodecamp">
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