import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Card from "../components/Card";

export default function BlackSabbath() {
    return (
        <div>
            <title>MSC - Back Sabbath</title>
            <Header/>
            <div className="flex">
                <Menu/>
                <Main title="Black Sabbath">
                    <Card title="Paris - 1970">
                        <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/Xqjify__PWw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Card>

                    <Card title="Hammersmith - 1978">
                        <iframe className="rounded-md m-2" width="380" height="280" src="https://www.youtube.com/embed/L6U5-CSc_7c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Card>
                </Main>
            </div>
        </div>
    )
}