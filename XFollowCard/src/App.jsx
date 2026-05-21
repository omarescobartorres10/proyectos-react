import './App.css'
import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    { userName: 'midudev', name: 'Miguel Angel durán', initialIsFollowing: true },
    { userName: 'pheralb', name: 'Pedro Herrera', initialIsFollowing: false },
    { userName: 'mouredev', name: 'Brais Moure', initialIsFollowing: true }
]

export function App() {
    // const [name, setName] = useState('Cámbiame el nombre')

    // const handleNameChange = () => {
    //     setName('soydalto')
    // }

    return (
        <section className='app'>
            {users.map(({userName, name, initialIsFollowing}) => {
                return (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={initialIsFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                );
            })}
            {/* <button onClick={handleNameChange}>Cambiar de nombre</button> */}
        </section>
    )
}

