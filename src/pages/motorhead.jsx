import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

import bands from "../data/bands";

export default function Motorhead() {
    const shows = bands[4].shows;
    return (
        <div>
            <title>MSC - Motörhead</title>
            <Header/>
            <Menu/>
            <Main title="Motörhead">
                {shows.map(show => (<Card key={show.url} title={show.title} url={show.url}/>))}
            </Main>
        </div>
    )
}