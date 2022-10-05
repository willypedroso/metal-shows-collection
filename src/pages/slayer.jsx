import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

import bands from "../data/bands";

export default function Slayer() {
    const shows = bands[6].shows;
    return (
        <div>
            <title>MSC - Slayer</title>
            <Header/>
            <Menu/>
            <Main title="Slayer">
                {shows.map(show => (<Card key={show.url} title={show.title} url={show.url}/>))}
            </Main>
        </div>
    )
}