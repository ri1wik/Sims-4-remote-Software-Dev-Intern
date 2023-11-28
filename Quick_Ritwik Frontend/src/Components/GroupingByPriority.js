import {React, useEffect, useState} from 'react'
import '../constants/GroupingByPriority.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPlus, faCircle} from '@fortawesome/free-solid-svg-icons';
import urgent from '../constants/images/urgent.png'
import weekSignal from '../constants/images/week-signal.png'
import goodSignal from '../constants/images/good-signal.png'
import signal from '../constants/images/signal.png'
import NavBar from './NavBar';

export default function GroupingByPriority() {
  
  const [noPriorityData, setNoPriorityData] = useState([]);
  const [lowPriorityData, setLowPriorityData] = useState([]);
  const [mediumPriorityData, setMediumPriorityData] = useState([]);
  const [highPriorityData, setHighPriorityData] = useState([]);
  const [urgentPriorityData, setUrgentPriorityData] = useState([]);

  const getUsers = async ()=>{
    const response = await fetch(`https://api.quicksell.co/v1/internal/frontend-assignment`,{
      method:'GET',
    })
    const data = await response.json();
    const array1 = [];
    const array2 = [];
    const array3 = [];
    const array4 = [];
    const array5 = [];
    for (let i=0;i<data.tickets.length;i++){
      if(data.tickets[i].priority===0){
        array1.push(data.tickets[i]);
      }
      else if(data.tickets[i].priority===1){
        array2.push(data.tickets[i]);
      }
      else if(data.tickets[i].priority===2){
        array3.push(data.tickets[i]);
      }
      else if(data.tickets[i].priority===3){
        array4.push(data.tickets[i]);
      }
      else if(data.tickets[i].priority===4){
        array5.push(data.tickets[i]);
      }
    }

    setNoPriorityData(array1);
    setLowPriorityData(array2);
    setMediumPriorityData(array3);
    setHighPriorityData(array4);
    setUrgentPriorityData(array5);
  }

  useEffect(()=>{
    getUsers();
  },[])
  return (
    <div>
    <NavBar/>
    <div id='container'>
      <div id='No-priority'>
        <div className='icons'>
            <div>
                <FontAwesomeIcon icon={faEllipsis} />
                <span style={{marginLeft:"0.8vw"}}>No Priority <span style={{color:"grey", marginLeft:"0.5vw"}}>{noPriorityData.length}</span></span>
            </div>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {noPriorityData.map(doc =>(
          <div className='card' key={doc.id}>
            <span className='ids'>{doc.id}</span>
            <span className='titles'>{doc.title}</span>
            <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}><FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
          </div>
        ))}
      </div>
      <div id='urgent'>
        <div className='icons'>
            <div>
                <img className='imageIcon' src={urgent} alt="urgent.png" />
                <span style={{marginLeft:"0.8vw"}}>Urgent <span style={{color:"grey", marginLeft:"0.5vw"}}>{urgentPriorityData.length}</span></span>
            </div>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {urgentPriorityData.map(doc =>(
          <div className='card' key={doc.id}>
            <span className='ids'>{doc.id}</span>
            <span className='titles'>{doc.title}</span>
            <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}><FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
          </div>
        ))}
      </div>
      <div id='high'>
        <div className='icons'>
            <div>
                <img className='imageIcon' src={signal} alt="signal.png" />
                <span style={{marginLeft:"0.8vw"}}>High <span style={{color:"grey", marginLeft:"0.5vw"}}>{highPriorityData.length}</span></span>
            </div>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {highPriorityData.map(doc =>(
          <div className='card' key={doc.id}>
            <span className='ids'>{doc.id}</span>
            <span className='titles'>{doc.title}</span>
            <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}><FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
          </div>
        ))}
      </div>
      <div id='medium'>
        <div className='icons'>
            <div>
                <img className='imageIcon' src={goodSignal} alt="goodSignal.png" />
                <span style={{marginLeft:"0.8vw"}}>Medium <span style={{color:"grey", marginLeft:"0.5vw"}}>{mediumPriorityData.length}</span></span>
            </div>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {mediumPriorityData.map(doc =>(
          <div className='card' key={doc.id}>
            <span className='ids'>{doc.id}</span>
            <span className='titles'>{doc.title}</span>
            <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}><FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
          </div>
        ))}
      </div>
      <div id='low'>
        <div className='icons'>
            <div>
                <img className='imageIcon' src={weekSignal} alt="weekSignal.png" />
                <span style={{marginLeft:"0.8vw"}}>Low <span style={{color:"grey", marginLeft:"0.5vw"}}>{lowPriorityData.length}</span></span>
            </div>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {lowPriorityData.map(doc =>(
          <div className='card' key={doc.id}>
            <span className='ids'>{doc.id}</span>
            <span className='titles'>{doc.title}</span>
            <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}><FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
