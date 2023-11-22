import { useEffect, useState } from "react"
import HeroCard from "./components/HeroCard";
import Layout from "./components/Layout";
import './App.css'
import Header from "./components/Header";
import Search from "./components/Search";

export default function App() {
    const [heroes, setHeroes] = useState([])
    const [filterHeroes, setFilterHeroes] = useState("")
    console.log(filterHeroes);
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
                    {
                        filteredHeroes(heroes).map(hero => {
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
       
            </Layout>
        </>


    )
}