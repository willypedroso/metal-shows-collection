import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

export default function Krisiun() {
    return (
        <div>
            <title>MSC - Krisiun</title>
            <Header/>
            <Menu/>
            <Main title="Krisiun">
                <Card title="Rockfun - 2020" url="PQ6UlYOxh6M"/>

                <Card title="Kiss Club - 2020" url="QjVIhbJFulw"/>
                
                <Card title="Rock in Rio - 2013" url="yYr5W7-wlBY"/>
            </Main>
        </div>
    )
}