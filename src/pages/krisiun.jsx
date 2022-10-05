import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

import bands from "../data/bands";

export default function Krisiun() {
    const band = "Krisiun";
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
            <title>MSC - Krisiun</title>
            <Header/>
            <Menu/>
            <Main title="Krisiun">
                {shows.map(show => (<Card key={show.url} title={show.title} url={show.url}/>))}
            </Main>
        </div>
    )
}