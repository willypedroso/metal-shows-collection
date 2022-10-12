import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

import bands from "../data/bands";

export default function Megadeth() {
    const band = "Megadeth";
    const [shows, setShows] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        for(let i=0; i<bands.length; i++) {
            if(bands[i].name == band) {
                setShows(bands[i].shows);
            }
        }
        setRender(true)
    }, []);
    
    const allShowsCollect = shows.map(show => (<Card key={show.url} titleBand={show.band} titleShow={show.title} url={show.url}/>));

    const [displayAll, setDisplayAll] = useState(false);

  return (
    <div>
      <title>MSC - {render ? band : false}</title>
      <Header/>
      <Menu/>
      <Main title={band}>
        {shows ? allShowsCollect.splice(0, 6) : false}

        {!displayAll && allShowsCollect.length > 0 ? <button className="bg-black text-orange-500 font-creeper p-3 text-lg rounded-md mt-2 hover:bg-orange-500 hover:text-black" onClick={() => setDisplayAll(true)}>Display All the {allShowsCollect.length+6} shows</button> : false}

        {displayAll ? allShowsCollect : false}
      </Main>
    </div>
      )
}