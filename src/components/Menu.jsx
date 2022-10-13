import bands from "../data/bands";
import genders from "../data/genders";
import { useState } from "react";
import Link from "next/link";

export default function Menu() {
    const [visibleMenu, setVisibleMenu] = useState(false);
    const [menu, setMenu] = useState("band");

    function visibleChange() {
        setVisibleMenu(!visibleMenu)
    }

    return (
        <nav className={visibleMenu ? "absolute min-w-[300px] w-1/5 bg-gray-900 text-white text-2xl" : "absolute left-1"}>
            <ul>
                <li className="font-creeper
                        min-w-full mt-2 p-3
                        bg-orange-600 text-black cursor-pointer hover:translate-x-2" onClick={visibleChange}>Menu</li>
                        {visibleMenu ? 
                        <select className="bg-black text-orange-600 mt-3 font-creeper ml-3" onClick={e => setMenu(e.target.value)}>
                            <option value="band">Bands</option>
                            <option value="gender">Genders</option>
                        </select>
                        : false}
                {visibleMenu && menu == "band" ? bands.map((band, i) => (
                    <Link key={i} href={band.path}><li className="font-creeper bg-black
                        min-w-full mt-2 p-3 cursor-pointer
                        hover:bg-orange-600 hover:text-black
                        hover:translate-x-2" onClick={visibleChange}>{band.name}</li></Link>
                )): false}
                {visibleMenu && menu == "gender" ? genders.map((gender, i) => (
                    <Link key={i} href={gender.path}><li className="font-creeper bg-black
                        min-w-full mt-2 p-3 cursor-pointer
                        hover:bg-orange-600 hover:text-black
                        hover:translate-x-2" onClick={visibleChange}>{gender.gender}</li></Link>
                )): false}
            </ul>
        </nav>
    )
}