import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

import bands from "../data/bands";

export default function Death() {
    const band = "Death";
    const [shows, setShows] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        for(let i=0; i<bands.length; i++) {
            if(bands[i].name == band) {
                setShows(bands[i].shows);
            }
        }
        setRender(true)
    }, []);
    
    return (
        <div>
            <title>MSC - {render ? band : false}</title>
            <Header/>
            <Menu/>
            <Main title={render ? band : false}>
                {shows.map(show => (<Card key={show.url} titleShow={show.title} url={show.url}/>))}
            </Main>
        </div>
    )
}