import Main from "../components/Main";
import Card from "../components/Card";
import Header from "../components/Header";
import Menu from "../components/Menu";

import bands from "../data/bands";

export default function Home() {

  let allShows = [];

  for(let i=0;i<bands.length;i++) {
    allShows.push(bands[i].shows);
  }

  let shows = allShows.reduce((a,b) => a.concat(b));

  return (
    <div>
      <title>Metal Shows Collection</title>
      <Header/>
      <Menu/>
      <Main title="All collection">
        {shows.map(show => (<Card key={show.url} title={show.title} url={show.url}/>))}
      </Main>
    </div>
      )
}
