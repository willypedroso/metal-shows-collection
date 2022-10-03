import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

export default function Slayer() {
    return (
        <div>
            <title>MSC - Slayer</title>
            <Header/>
            <Menu/>
            <Main title="Slayer">
                <Card title="Donington - 1992" url="MYOnUghrV9Q"/>
            </Main>
        </div>
    )
}