import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Card from "../components/Card";

import bands from "../data/bands";

export default function BlackSabbath() {
    const shows = bands[1].shows;
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