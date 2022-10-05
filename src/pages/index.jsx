import Main from "../components/Main";
import Card from "../components/Card";
import Header from "../components/Header";
import Menu from "../components/Menu";

import bands from "../data/bands";
import { useEffect, useState } from "react";

export default function Home() {

  let allShows = [];

  for(let i=0;i<bands.length;i++) {
    allShows.push(bands[i].shows);
  }

  let showsConcat = allShows.reduce((a,b) => a.concat(b));

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const [shows, setShows] = useState([])

  useEffect(() => {
    setShows(shuffleArray(showsConcat));
  }, [])

  return (
    <div>
      <title>Metal Shows Collection</title>
      <Header/>
      <Menu/>
      <Main title="All collection">
        {shows ? shows.map(show => (<Card key={show.url} title={show.title} url={show.url}/>)) : false}
      </Main>
    </div>
      )
}
