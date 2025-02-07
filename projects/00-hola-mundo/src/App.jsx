import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className="App">
        <TwitterFollowCard isFollowing={false} userName="freecodecamp" name="Free Code Camp"/>
        <TwitterFollowCard isFollowing userName="realmadrid" name="Real Madrid"/>
        <TwitterFollowCard  userName="fcbarcelona" name="FC Barcelona"/>
    </section>
  )
}