import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";

export default function Card(props) {
    return (
        <div className="w-[580px] min-h-[350px]
            rounded-lg bg-red-900
            flex flex-col justify-center align-middle m-2
            border-black border-2 shadow-lg shadow-black">
            <h2 className="text-center mt-2 font-creeper text-2xl">{props.title}</h2>
            <span className="self-center">{props.children}</span>
        </div>
    )
}