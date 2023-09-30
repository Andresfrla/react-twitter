import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

export function App ()  {

    return (
    <section className='App '>
        <TwitterFollowCard isFollowing userName="midudev"> 
            Miguel Angel Duran
        </TwitterFollowCard>

        <TwitterFollowCard isFollowing userName="pheralb"> 
            Pablo Hernandez
        </TwitterFollowCard>
    </section> 
)
}