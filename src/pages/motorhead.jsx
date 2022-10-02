import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

export default function Motorhead() {
    return (
        <div>
            <title>MSC - Motörhead</title>
            <Header/>
            <Menu/>
            <Main title="Motörhead">
                <Card title="Hammersmith - 1985">
                    <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/GeXGW1yXgDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Card>
            </Main>
        </div>
    )
}