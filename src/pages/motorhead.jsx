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
                <Card title="Hammersmith - 1985" url="GeXGW1yXgDg"/>
            </Main>
        </div>
    )
}