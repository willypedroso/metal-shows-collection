import Main from "../components/Main";
import Card from "../components/Card";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div>
      <title>Metal Shows Collection</title>
      <Header/>
      <Menu/>
      <Main title="Recently added">
        <Card title="Hammersmith - 1985" url="jtwRLpYcVsA"/>

        <Card title="Donington - 1992" url="MYOnUghrV9Q"/>

        <Card title="PinkPop 1996" url="CBwgf8NRFhI"/>

        <Card title="Hammersmith - 1985" url="GeXGW1yXgDg"/>

        <Card title="Rockfun - 2020" url="PQ6UlYOxh6M"/>

        <Card title="Dynamo Open Air - 1996" url="9JtJ8GdNXLc"/>
        
        <Card title="Hammersmith - 1987" url="h482wa1eHbE"/>

        <Card title="Moscow - 1991" url="C0xcvOEXqrk"/>

        <Card title="Paris - 1970" url="Xqjify__PWw"/>

        <Card title="Mexico City - 1993" url="cNcV30ulSXs"/>

        <Card title="Hammersmith - 1978" url="L6U5-CSc_7c"/>

        <Card title="Berlin - 2019" url="s_hYeCZo2Nw"/>

        <Card title="Wacken 2019" url="QcGXJ7ZgvPk"/>
        
        <Card title="Donington - 2005" url="D9yawWUIit0"/>

        <Card title="Rio de Janeiro - 2011" url="_zg7OpXIwAw"/>
        
        <Card title="London - 1999" url="pSsuUYDYR-k"/>

        <Card title="Seattle - 1989" url="1DshNu26z4A"/>

        <Card title="Moscow - 2016" url="79yEJVk7CDE"/>
      </Main>
    </div>
      )
}
