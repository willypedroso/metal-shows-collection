import bands from "../data/bands";
import genres from "../data/genres";
import { useState } from "react";
import Link from "next/link";

export default function Menu() {
    const [visibleMenu, setVisibleMenu] = useState(false);
    const [menu, setMenu] = useState("band");

    function visibleChange() {
        setVisibleMenu(!visibleMenu)
    }

    return (
        <nav className={visibleMenu ? "fixed top-0 left-0 h-[100vh] overflow-y-scroll overflow-x-clip min-w-[350px] w-1/5 bg-gray-900 text-white text-2xl" : "sticky text-center top-0 mb-[-70px] left-2 w-16"}>
            <ul>
                <li className="font-creeper
                        min-w-full mt-2 p-3
                        bg-orange-600 text-black cursor-pointer sticky top-0" onClick={visibleChange}>{!visibleMenu ? "Menu" : "Close"}</li>
                        {visibleMenu ? 
                        <select className="bg-black text-orange-600 text-[2rem] min-w-[300px] mt-3 font-creeper ml-3" onChange={e => setMenu(e.target.value)}>
                            <option value="band">Bands</option>
                            <option value="genre">Genres</option>
                        </select>
                        : false}
                {visibleMenu && menu == "band" ? bands.map((band, i) => (
                    <Link key={i} href={band.path}><li className="font-creeper bg-black
                        min-w-full mt-2 p-3 cursor-pointer
                        hover:bg-orange-600 hover:text-black
                        hover:translate-x-2" onClick={visibleChange}>{band.name}</li></Link>
                )): false}
                {visibleMenu && menu == "genre" ? genres.map((genre, i) => (
                    <Link key={i} href={genre.path}><li className="font-creeper bg-black
                        min-w-full mt-2 p-3 cursor-pointer
                        hover:bg-orange-600 hover:text-black
                        hover:translate-x-2" onClick={visibleChange}>{genre.genre}</li></Link>
                )): false}
            </ul>
        </nav>
    )
}