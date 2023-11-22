import { useState } from 'react'
import './HeroCard.css'
import Search from './Search'



export default function HeroCard({ heroes, filterHeroes }) {
   let limitedHeroes = heroes.slice(0,20)
heroes.forEach(heroe => {
    if (
        heroe.name.toLowerCase().indexOf(
            filterHeroes.toLowerCase()
        ) === -1
    ) {
        return;
    }
});
    return (

            <section className='grid'>
                {
                    heroes && limitedHeroes.map(hero => {
                        return (
                            <section key={hero.id} className="card_heroes">
                                <img src={hero.images.sm} alt="" />
                                <article>
                                    <h3>{hero.name}</h3>
                                    <p>Marvel</p>
                                    <p>Otro</p>
                                    <p>Demas</p>
                                </article>
                                <br />
                            </section>
                        )
                    })
                }
            </section>
    
    )
}