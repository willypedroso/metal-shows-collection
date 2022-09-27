import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-black w-full relative text-center align-middle h-1/4 font-creeper">
            <Link href="/">
                <h1 className="text-6xl text-white self-center p-2">Metal Shows Collection</h1>
            </Link>
        </header>
    )
}