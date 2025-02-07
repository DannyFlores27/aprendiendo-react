import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const format = (userName) => `@${userName}`
  
  return (
    <section className="App">
        <TwitterFollowCard 
          formatUserName={format}
          isFollowing={false} 
          userName="freecodecamp" 
          name="Free Code Camp"/>

        <TwitterFollowCard 
          formatUserName={format}
          isFollowing 
          userName="realmadrid" 
          name="Real Madrid"/>

        <TwitterFollowCard  
          formatUserName={format}
          userName="fcbarcelona" 
          name="FC Barcelona"/>
    </section>
  )
}