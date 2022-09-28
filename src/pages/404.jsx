import Link from "next/link";
import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

export default function custom404() {
    return (
        <div>
            <title>Oops... page not found</title>
            <Header/>
            <Menu/>
            <Main title="Oops... This band is not in our collection yet.">
                <Card title="We working on that...">
                    <Link href="/">
                        <button className="bg-black text-orange-400 font-creeper text-[2rem] p-4 mt-4 rounded-xl hover:bg-orange-500 hover:text-black">Home</button>
                    </Link>
                </Card>
            </Main>

        </div>
    )
}