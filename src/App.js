
import './App.css';
import { TicketCounter } from './TicketCounter';
import { ColorTabs } from './ColorTabs';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
    Route
  
} from "react-router-dom";
import { Ticket } from './Ticket';



function App() {
  const movieList=[{
    id:1,
    MOVIE:"VIKRAM",
    tittle:"https://images.cinemaexpress.com/uploads/user/imagelibrary/2020/11/7/original/vikram_28.png?w=400&dpr=2.6",
    IMG:"https://m.media-amazon.com/images/M/MV5BNGQ2YTNjOTMtMGUzNS00NTVjLWE2YzItZGNiMWUxYWQ5ZjExXkEyXkFqcGdeQXVyMTUwMDg3OTQy._V1_.jpg",
    SHOWTIME:"9 AM",
    IMDB:"9.6"
  },
  { 
    id:2,
    MOVIE:"BEAST",
    tittle:"https://i.pinimg.com/736x/71/53/d9/7153d987dfc7c62ad09bd3b548ac4813.jpg",
    IMG:"https://www.newsintv.com/wp-content/uploads/2022/01/arabic-kuthu-wallpaper.jpg",
    SHOWTIME:"9:30 AM",
    IMDB:"8.4"
  },
  { 
    id:3,
    MOVIE:"DON",
    tittle:"https://www.newsintv.com/wp-content/uploads/2021/11/don-hd-poster.jpg",
    IMG:"https://www.newsintv.com/wp-content/uploads/2021/11/don-first-look-poster.jpg",
    SHOWTIME:"9:30 AM",
    IMDB:"8.7"
  },
  { 
    id:4,
    MOVIE:"KGF 2",
    tittle:"https://i.ytimg.com/vi/ah5cUipr0NA/maxresdefault.jpg",
    IMG:"https://i.pinimg.com/originals/e9/b5/5e/e9b55e95839fd3932dfd4a0a017d9fdf.png",
    SHOWTIME:"9:30 AM",
    IMDB:"8.6"
  },
  { 
    id:5,
    MOVIE:"RRR",
    tittle:"https://static.toiimg.com/photo/msid-74806726/74806726.jpg",
    IMG:"https://w0.peakpx.com/wallpaper/830/395/HD-wallpaper-rrr-movie-rrr.jpg",
    SHOWTIME:"9:30 AM",
    IMDB:"8.1"
  }]
  const[arr,setArr]=useState([])
  return (
    <Router><div className="App">
       <ColorTabs/>

<Routes>
    <Route exact path='/' element={<img src="https://www.getonecard.app/assets/offers/bookmyshow_onecard_offer.png" alt='BOOK MY SHOW'/>}></Route>
    <Route exact path='/movies' element={<BookingPageList movieList={movieList}/>}></Route>
    <Route exact path='/movies/:id' element={<TicketCounter movieList={movieList} arr={arr} setArr={setArr}/>}></Route>
    <Route exact path='/urticket/:id' element={<Ticket movieList={movieList} arr={arr}/>}></Route>
</Routes>



     
     
    
    
    </div></Router>
    
  );
}

export default App;


function BookingPageList({ movieList }) {

 
  return (
    <div className="BookingPageList">

      

     {movieList.map((datalist,i)=> (<BookingPage datalist={datalist} i={i} />))}
    </div>
  );
}
function BookingPage({datalist,i}) {

  const navigate = useNavigate();
  
  return (
    <div  onClick={()=>navigate(`/movies/${i}`)} className="BookingPage">
       <img className='img'src={datalist.IMG} alt={datalist.MOVIE}/>
       <h5 className='movie'>MOVIE:{datalist.MOVIE} </h5>
       <h5 className='SHOWTIME'>SHOWTIME:{datalist.SHOWTIME} </h5>
       <h5 className='IMDB'>IMDB:{datalist.IMDB} </h5>
    </div>
  );
}




