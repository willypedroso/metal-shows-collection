import bands from "../data/bands";
import genres from "../data/genres";
import { useState } from "react";
import Link from "next/link";

export default function Menu() {
    const [visibleMenu, setVisibleMenu] = useState(false);
    const [menu, setMenu] = useState("band");
    const [search, setSearch] = useState("");

    function visibleChange() {
        setVisibleMenu(!visibleMenu);
    }

    const lowerSearch = search.toLowerCase();

    const filteredBands = bands.filter((band) => band.name.toLowerCase().startsWith(lowerSearch));

    return (
        <nav className={visibleMenu ? "fixed top-0 left-0 h-[100vh] overflow-y-scroll overflow-x-clip min-w-[350px] w-1/5 bg-gray-900 text-white text-2xl" : "sticky text-center top-0 mb-[-70px] left-2 w-16"}>
            <ul>
                <li className="font-creeper
                        min-w-full mt-2 p-3
                        bg-orange-600 text-black cursor-pointer sticky top-0" onClick={visibleChange}>{!visibleMenu ? "Menu" : "Close Menu"}</li>

            {/* Selector Bands or Genres */}           
                {visibleMenu ? 
                    <select className="bg-black text-orange-600 text-[2rem] min-w-[300px] mt-3 font-creeper ml-3" onChange={e => setMenu(e.target.value)} defaultValue="">
                        <option value="" disabled>Bands or genres</option>
                        <option value="band">Bands</option>
                        <option value="genre">Genres</option>
                    </select>
                    : false}


             {/* Search Field */}   
                {visibleMenu && menu == "band" ?
                <input className="w-[250px] align-middle ml-[40px] mt-3 mb-1 text-black" placeholder="Search" type="text" value={search} onChange={e => setSearch(e.target.value)}/>
                : false}


            {/* All Collection Option */}
                {visibleMenu && filteredBands.length == bands.length ? 
                    <Link href="/"><li className="font-creeper bg-black text-orange-600
                    min-w-full mt-2 p-3 cursor-pointer
                    hover:bg-orange-600 hover:text-black" onClick={visibleChange}>All Collection</li></Link>
                : false}

            {/* Bands Menu */}
                {visibleMenu && menu == "band" ? filteredBands == "" ? <li className="font-creeper bg-black text-orange-500
                        min-w-full mt-2 p-3">Sorry! No bands match this search in our collection yet...</li> : filteredBands.map((band, i) => (
                    <Link key={i} href={band.path}><li className="font-creeper bg-black
                        min-w-full mt-2 p-3 cursor-pointer
                        hover:bg-orange-600 hover:text-black" onClick={visibleChange}>{band.name}</li></Link>
                )): false}

            {/* Genres Menu */}
                {visibleMenu && menu == "genre" ? genres.map((genre, i) => (
                    <Link key={i} href={genre.path}><li className="font-creeper bg-black
                        min-w-full mt-2 p-3 cursor-pointer
                        hover:bg-orange-600 hover:text-black" onClick={visibleChange}>{genre.genre}</li></Link>
                )): false}

                {/* Empty li to fix mobile last item hide bug */}
                {visibleMenu ? <li className="font-creeper bg-gray-900 min-w-full mt-2 p-5"></li> : false}
            </ul>
        </nav>
    )
}