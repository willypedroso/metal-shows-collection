import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

export default function BlackSabbath() {
    return (
        <div>
            <title>MSC - Back Sabbath</title>
            <Header/>
            <div className="flex">
                <Menu/>
                <Main title="Black Sabbath">
                    <iframe className="rounded-md m-2" width="560" height="315" src="https://www.youtube.com/embed/Xqjify__PWw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                    <iframe className="rounded-md m-2" width="560" height="315" src="https://www.youtube.com/embed/L6U5-CSc_7c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Main>
            </div>
        </div>
    )
}