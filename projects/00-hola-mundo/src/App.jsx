import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className="App">
        <TwitterFollowCard userName="freeCodeCamp">
          FreeCodeCamp
        </TwitterFollowCard>
        
        <TwitterFollowCard userName="realmadrid">
          Real Madrid C.F.
        </TwitterFollowCard>
        
        <TwitterFollowCard userName="fcbarcelona">
          FC Barcelona <strong>🔵🔴</strong>
        </TwitterFollowCard>
    </section>
  )
}