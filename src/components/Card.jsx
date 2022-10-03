import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";

export default function Card(props) {
    return (
        <div className="w-[400px] min-h-[300px]
            rounded-lg bg-red-900
            flex flex-col justify-center align-middle m-2
            border-black border-2 shadow-lg shadow-black">
            <h2 className="text-center mt-2 font-creeper text-2xl">{props.title}</h2>
            <span className="self-center">
            <iframe className="rounded-md m-2" width="380" height="280" src={`https://www.youtube.com/embed/${props.url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </span>
        </div>
    )
}