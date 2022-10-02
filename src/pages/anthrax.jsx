import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

export default function Anthrax() {
    return (
        <div>
            <Header/>
            <Menu/>
            <Main title="Anthrax">
                <Card title="Hammersmith - 1987">
                    <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/h482wa1eHbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Card>

                <Card title="Wacken 2019">
                    <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/QcGXJ7ZgvPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Card>
            </Main>
        </div>
    )
}