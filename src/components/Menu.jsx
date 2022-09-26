import bands from "../data/bands";
import Footer from "./Footer";

export default function Menu() {
    return (
        <nav className="min-h-[90.3vh] min-w-[200px] w-1/5 bg-gray-900 text-white text-2xl">
            <ul>
                {bands.map((band, i) => (
                    <a key={i} href={band.path}><li className="font-creeper bg-black
                        min-w-full mt-2 p-3
                        hover:bg-orange-600 hover:text-black
                        hover:translate-x-2">{band.name}</li></a>
                ))}
            </ul>
        </nav>
    )
}