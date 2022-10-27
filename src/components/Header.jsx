import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-black w-full relative text-center align-middle h-1/4 font-creeper text-white">
            <Link href="/">
                <h1 className="text-6xl  self-center p-2 cursor-pointer hover:text-orange-500">Metal Shows Collection</h1>
            </Link>
            <h3 className="text-[1.1rem] text-purple-600 pb-2">The biggest Heavy Metal concerts collection of all times</h3>
        </header>
    )
}