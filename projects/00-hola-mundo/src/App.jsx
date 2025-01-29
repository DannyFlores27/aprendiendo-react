import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className="App">
        <TwitterFollowCard userName="freecodecamp" name="Free Code Camp"/>
        <TwitterFollowCard userName="realmadrid" name="Real Madrid"/>
        <TwitterFollowCard userName="fcbarcelona" name="FC Barcelona"/>
    </section>
  )
}