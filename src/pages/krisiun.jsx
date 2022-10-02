import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

export default function Krisiun() {
    return (
        <div>
            <Header/>
            <Menu/>
            <Main title="Krisiun">
                <Card title="São Paulo - 2020">
                    <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/PQ6UlYOxh6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Card>
            </Main>
        </div>
    )
}