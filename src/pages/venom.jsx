import { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

import bands from "../data/bands";

export default function Venom() {
    const band = "Venom";
    const [shows, setShows] = useState([]);
    
    useEffect(() => {
        for(let i=0; i<bands.length; i++) {
            if(bands[i].name == band) {
                setShows(bands[i].shows);
            }
        }
    }, []);

    return (
        <div>
            <title>MSC - Venom</title>
            <Header/>
            <Menu/>
            <Main title="Venom">
                {shows.map(show => (<Card key={show.url} title={show.title} url={show.url}/>))}
            </Main>
        </div>
    )
}