import Link from "next/link";

export default function Card(props) {

    /* Bands with special characters must be declared individually on bandPath */
    const bandPath = props.titleBand ?
                    props.titleBand == "Motörhead" ? "/motorhead" : 
                    props.titleBand == "Sarcófago" ? "/sarcofago" :
                    "/"+((props.titleBand).toLowerCase()).replace(/ /g,"") :
                    "";

    return (
        <div className="w-[400px] min-h-[300px]
            rounded-lg bg-red-900
            flex flex-col justify-center align-middle m-2
            border-black border-2 shadow-lg shadow-black">
            
            {/* Band title with link */}
            {bandPath != "" ? <Link href={bandPath}>
                <h2 className="text-center bg-black text-white block w-auto p-2 mt-[7px] rounded-md self-center
                 font-creeper text-2xl cursor-pointer hover:text-orange-500">{props.titleBand}</h2>
            </Link> : false}
            
            {/* Show title */}
            <h2 className="text-center mt-1 mb-[-5px] font-creeper text-2xl">{props.titleShow}</h2>
            
            {/* Youtube video */}
            <span className="self-center">
            <iframe className="rounded-md m-2" width="380" height="280" src={`https://www.youtube.com/embed/${props.url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </span>
        </div>
    )
}