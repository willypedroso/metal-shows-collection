import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

import bands from "../data/bands";

export default function Metallica() {
    const shows = bands[3].shows;
    return (
        <div>
            <title>MSC - Metallica</title>
            <Header/>
            <Menu/>
            <Main title="Metallica">
                {shows.map(show => (<Card key={show.url} title={show.title} url={show.url}/>))}
            </Main>
        </div>
    )
}