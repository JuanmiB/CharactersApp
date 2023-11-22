import { useEffect, useState } from "react"
import HeroCard from "./components/HeroCard";
import Layout from "./components/Layout";
import './App.css'
import Header from "./components/Header";
import Search from "./components/Search";

export default function App() {
    const [heroes, setHeroes] = useState([])
    const [filterHeroes, setFilterHeroes] = useState("")

    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHeroes(data)
            })
    }, [])
    const filteredHeroes = (heroes) => {
        return heroes.filter(hero => {
            return hero.name.toLowerCase().includes(filterHeroes.toLocaleLowerCase())
         })
    }
    return (
        <>
            <Header />
            <Layout>
                <Search
                filterHeroes={filterHeroes}
                changeFilter={setFilterHeroes}
                />
                 <section className='grid'>
                    {filteredHeroes(heroes).map(({ id, name, images, connections }) => (
                        <section key={id} className="card_heroes">
                            <img src={images.sm} alt="" />
                            <article>
                                <h3>{name}</h3>
                                <article>
                                 <p>{connections.groupAffiliation}</p>
                                </article>
                            </article>
                            <br />
                        </section>
                    ))}
                </section>
       
            </Layout>
        </>


    )
}