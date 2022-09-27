import bands from "../data/bands";
import { useState } from "react";
import Link from "next/link";

export default function Menu() {
    const [visibleMenu, setVisibleMenu] = useState(false);

    function visibleChange() {
        setVisibleMenu(!visibleMenu)
    }

    return (
        <nav className={visibleMenu ? "min-h-[90.3vh] min-w-[300px] w-1/5 bg-gray-900 text-white text-2xl" : "fixed"}>
            <ul>
                <li className="font-creeper
                        min-w-full mt-2 p-3
                        bg-orange-600 text-black cursor-pointer hover:translate-x-2" onClick={visibleChange}>Bands</li>
                {visibleMenu ? bands.map((band, i) => (
                    <Link key={i} href={band.path}><li className="font-creeper bg-black
                        min-w-full mt-2 p-3
                        hover:bg-orange-600 hover:text-black
                        hover:translate-x-2" onClick={visibleChange}>{band.name}</li></Link>
                )): false}
            </ul>
        </nav>
    )
}