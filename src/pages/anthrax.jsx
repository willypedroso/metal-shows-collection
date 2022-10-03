import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

export default function Anthrax() {
    return (
        <div>
            <title>MSC - Anthrax</title>
            <Header/>
            <Menu/>
            <Main title="Anthrax">
                <Card title="Hammersmith - 1987" url="h482wa1eHbE"/>
                
                <Card title="Wacken 2019" url="QcGXJ7ZgvPk"/>
            </Main>
        </div>
    )
}