import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

export function App ()  {
    return (
    <section className='App '>
        <TwitterFollowCard userName="midudev"> 
            Miguel Angel Duran
        </TwitterFollowCard>  

        <TwitterFollowCard userName="pheralb"> 
            Pablo Hernandez
        </TwitterFollowCard>
    </section> 
)
}