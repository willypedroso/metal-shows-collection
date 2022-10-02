import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

export default function Metallica() {
    return (
        <div>
            <title>MSC - Metallica</title>
            <Header/>
            <Menu/>
            <Main title="Metallica">
                <Card title="Moscow - 1991">
                    <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/C0xcvOEXqrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Card>
            </Main>
        </div>
    )
}