import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

import bands from "../data/bands";

export default function Krisiun() {
    const shows = bands[2].shows;
    return (
        <div>
            <title>MSC - Krisiun</title>
            <Header/>
            <Menu/>
            <Main title="Krisiun">
                {shows.map(show => (<Card key={show.title} title={show.title} url={show.url}/>))}
            </Main>
        </div>
    )
}