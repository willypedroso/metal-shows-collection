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
                <Card title="Seattle - 1989" url="1DshNu26z4A"/>

                <Card title="Moscow - 1991" url="C0xcvOEXqrk"/>

                <Card title="Mexico City - 1993" url="cNcV30ulSXs"/>

                <Card title="Rio de Janeiro - 2011" url="_zg7OpXIwAw"/>

                <Card title="Berlin - 2019" url="s_hYeCZo2Nw"/>
            </Main>
        </div>
    )
}