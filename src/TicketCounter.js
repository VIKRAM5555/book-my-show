import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";
import {
 
  useParams,
} from "react-router-dom";


export function TicketCounter({movieList,arr,setArr}) {
  const createArrayOFnum=(a,b)=>{
    var rr=[]
    for(var i=a;i<=b;i++){
      rr.push(i)
    }
    return rr
  }
  var d=createArrayOFnum(1,50)
  var e=createArrayOFnum(51,100)
  
 
  let { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <div className="TicketCounter">
     <img className='imgs'src={movieList[id].tittle} alt={movieList.MOVIE}/>
      <h5>NO OF TICKET</h5>
      <input type="text" />
      <h5>SHOWTIME</h5>
      <button variant="contained">9:30</button>
      <div className='theatre'>
        <div className='t1'>{d.map((a)=><ButtonList num={a} arr={arr} setArr={setArr} />)}</div>
        <div className='t2'>{e.map((a)=><ButtonList num={a} arr={arr} setArr={setArr} />)}</div>

        <Button onClick={()=>navigate(`/urticket/${id}`)}   variant="outlined" color="primary">
           SUBMIT
         </Button>
      </div>


      
      
    </div>
  )}
   function ButtonList({num,setArr,arr}) {
    const book=(arr.find(data=>data > num-1)===num)?true:false
  
   

    return (
      <div>
        
           <Button onClick={()=>{
            var arrdel=[...arr]
            arrdel.splice(arrdel.indexOf(num),1)
          
            book?setArr([...arrdel]):setArr([...arr,num])
            return
          }}   variant="outlined" color={book?"error":"primary"}>
           {num}
         </Button>
         
        
      </div>
    );
  }