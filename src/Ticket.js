import { useParams } from "react-router-dom";

export function Ticket({ movieList, arr }) {

  let { id } = useParams();
  return <div className='ticket'>
    <img className='img' src={movieList[id].IMG} alt={movieList.MOVIE} />
    <h1>MOVIE:{movieList[id].MOVIE}</h1>
    <h2>TOTAL SEATS BOOKED:{arr.length}</h2>
    <h2>SEAT NUMBER:{arr.toString()}</h2>

  </div>;
}
