import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

import bands from "../data/bands";

export default function Anthrax() {
    const shows = bands[0].shows;
    return (
        <div>
            <title>MSC - Anthrax</title>
            <Header/>
            <Menu/>
            <Main title="Anthrax">
                {shows.map(show => (<Card key={show.url} title={show.title} url={show.url}/>))}
            </Main>
        </div>
    )
}