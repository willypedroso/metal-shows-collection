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
        <Card title="PinkPop 1996">
            <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/CBwgf8NRFhI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>

        <Card title="Hammersmith - 1985">
          <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/GeXGW1yXgDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>

        <Card title="São Paulo - 2020">
            <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/PQ6UlYOxh6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>

        <Card title="Hammersmith - 1987">
            <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/h482wa1eHbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>

        <Card title="Moscow - 1991">
          <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/C0xcvOEXqrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>

        <Card title="Paris - 1970">
            <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/Xqjify__PWw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>

        <Card title="Mexico City - 1993">
            <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/cNcV30ulSXs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>

        <Card title="Hammersmith - 1978">
            <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/L6U5-CSc_7c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>

        <Card title="Berlin - 2019">
            <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/s_hYeCZo2Nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>

        <Card title="Wacken 2019">
            <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/QcGXJ7ZgvPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>
        
        <Card title="Donington - 2005">
            <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/D9yawWUIit0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>

        <Card title="Rio de Janeiro - 2011">
            <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/_zg7OpXIwAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>
        
        <Card title="London - 1999">
            <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/pSsuUYDYR-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>

        <Card title="Seattle - 1989">
            <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/1DshNu26z4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>

        <Card title="Moscow - 2016">
            <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/79yEJVk7CDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card>
      </Main>
    </div>
      )
}
