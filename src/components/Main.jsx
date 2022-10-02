import Footer from "./Footer";

export default function Main(props) {
    return (
        <main className="w-full">
            <h1 className="text-orange-500 bg-black w-1/2 m-auto mt-3 mb-3 rounded-lg text-center font-creeper text-4xl p-4">{props.title}</h1>
            <div className="flex justify-center flex-wrap max-w-[1300px] m-auto">{props.children}</div>
            <Footer/>
        </main>
    )
}