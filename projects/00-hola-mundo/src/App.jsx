import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const formattedUserName = <span>@freecodecamp</span>
  
  return (
    <section className="App">
        <TwitterFollowCard 
          formattedUserName={formattedUserName}
          isFollowing={false} 
          userName="freecodecamp" 
          name="Free Code Camp"/>

        <TwitterFollowCard 
          formattedUserName={formattedUserName}
          isFollowing 
          userName="realmadrid" 
          name="Real Madrid"/>

        <TwitterFollowCard  
          formattedUserName={formattedUserName}
          userName="fcbarcelona" 
          name="FC Barcelona"/>
    </section>
  )
}