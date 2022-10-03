import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

export default function Venom() {
    return (
        <div>
            <title>MSC - Venom</title>
            <Header/>
            <Menu/>
            <Main title="Venom">
                <Card title="Hammersmith - 1985" url="jtwRLpYcVsA"/>

                <Card title="Dynamo Open Air - 1996" url="9JtJ8GdNXLc"/>
            </Main>
        </div>
    )
}