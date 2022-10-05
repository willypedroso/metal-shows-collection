import { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Card from "../components/Card";

import bands from "../data/bands";

export default function BlackSabbath() {
    const band = "Black Sabbath";
    const [shows, setShows] = useState([]);

    useEffect(() => {
        for(let i=0; i<bands.length; i++) {
            if(bands[i].name == band) {
                setShows(bands[i].shows)
            }
        }
    }, [])

    return (
        <div>
            <title>MSC - Black Sabbath</title>
            <Header/>
            <div className="flex">
                <Menu/>
                <Main title="Black Sabbath">
                    {shows.map(show => (<Card key={show.url} title={show.title} url={show.url}/>))}
                </Main>
            </div>
        </div>
    )
}