import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Card from "../components/Card";

export default function BlackSabbath() {
    return (
        <div>
            <title>MSC - Black Sabbath</title>
            <Header/>
            <div className="flex">
                <Menu/>
                <Main title="Black Sabbath">
                    <Card title="Paris - 1970" url="Xqjify__PWw"/>

                    <Card title="Hammersmith - 1978" url="L6U5-CSc_7c"/>
                    
                    <Card title="Donington - 2005" url="D9yawWUIit0"/>
                    
                    <Card title="London - 1999" url="pSsuUYDYR-k"/>

                    <Card title="Moscow - 2016" url="79yEJVk7CDE"/>
                </Main>
            </div>
        </div>
    )
}