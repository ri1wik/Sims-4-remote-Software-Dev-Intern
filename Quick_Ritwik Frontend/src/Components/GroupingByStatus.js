import React, { useState, useEffect } from 'react'
import '../constants/GroupingByPriority.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPlus, faCircle, faCircleXmark, faCircleCheck, faCircleHalfStroke, faExclamation} from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
export default function GroupingByStatus() {
  const [todoData, setTodoData] = useState([]);
  const [inProgressData, setInProgressData] = useState([]);
  const [doneData, setDoneData] = useState([]);
  const [canceledData, setCanceledData] = useState([]);
  const [backlogData, setBackLogData] = useState([]);

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
      if(data.tickets[i].status==="Backlog"){
        array1.push(data.tickets[i]);
      }
      else if(data.tickets[i].status==="Todo"){
        array2.push(data.tickets[i]);
      }
      else if(data.tickets[i].status==="In progress"){
        array3.push(data.tickets[i]);
      }
      else if(data.tickets[i].status==="Done"){
        array4.push(data.tickets[i]);
      }
      else if(data.tickets[i].status==="Canceled"){
        array5.push(data.tickets[i]);
      }
    }

    setBackLogData(array1);
    setTodoData(array2);
    setInProgressData(array3);
    setDoneData(array4);
    setCanceledData(array5);
  }

  useEffect(()=>{
    getUsers();
  },[])

  return (
    <div>
    <NavBar/>
    <div id='container'>
      <div id='backlog'>
        <div className='icons'>
            <div>
                <FontAwesomeIcon icon={faExclamation}  color='red'/>
                <span style={{marginLeft:"0.8vw"}}>Backlog <span style={{color:"grey", marginLeft:"0.5vw"}}>{backlogData.length}</span></span>
            </div>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {backlogData.map(doc =>(
          <div className='card' key={doc.id}>
            <span className='ids'>{doc.id}</span>
            <span className='titles'>{doc.title}</span>
            <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}>
                <FontAwesomeIcon icon={faEllipsis} color='#D0D3D4' style={{marginRight:"1vw"}}/>
            <FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
          </div>
        ))}
      </div>
      <div id='todos'>
        <div className='icons'>
            <div>
                <FontAwesomeIcon icon={faCircle} color='grey' />
                <span style={{marginLeft:"0.8vw"}}>Todo <span style={{color:"grey", marginLeft:"0.5vw"}}>{todoData.length}</span></span>
            </div>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {todoData.map(doc =>(
          <div className='card' key={doc.id}>
            <span className='ids'>{doc.id}</span>
            <span className='titles'>{doc.title}</span>
            <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}>
                <FontAwesomeIcon icon={faEllipsis} color='#D0D3D4' style={{marginRight:"1vw"}}/>
            <FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
          </div>
        ))}
      </div>
      <div id='inProgress'>
        <div className='icons'>
            <div>
                <FontAwesomeIcon icon={faCircleHalfStroke} color='yellow'/>
                <span style={{marginLeft:"0.8vw"}}>In Progress <span style={{color:"grey", marginLeft:"0.5vw"}}>{inProgressData.length}</span></span>
            </div>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {inProgressData.map(doc =>(
          <div className='card' key={doc.id}>
            <span className='ids'>{doc.id}</span>
            <span className='titles'>{doc.title}</span>
            <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}>
                <FontAwesomeIcon icon={faEllipsis} color='#D0D3D4' style={{marginRight:"1vw"}}/>
            <FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
          </div>
        ))}
      </div>
      <div id='done'>
        <div className='icons'>
            <div>
                <FontAwesomeIcon icon={faCircleCheck} color='blue'/>
                <span style={{marginLeft:"0.8vw"}}>Done <span style={{color:"grey", marginLeft:"0.5vw"}}>{doneData.length}</span></span>
            </div>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {doneData.map(doc =>(
          <div className='card' key={doc.id}>
            <span className='ids'>{doc.id}</span>
            <span className='titles'>{doc.title}</span>
            <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}>
                <FontAwesomeIcon icon={faEllipsis} color='#D0D3D4' style={{marginRight:"1vw"}}/>
            <FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
          </div>
        ))}
      </div>
      <div id='canceled'>
        <div className='icons'>
            <div>
                <FontAwesomeIcon icon={faCircleXmark} color='grey'/>
                <span style={{marginLeft:"0.8vw"}}>Canceled <span style={{color:"grey", marginLeft:"0.5vw"}}>{canceledData.length}</span></span>
            </div>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {canceledData.map(doc =>(
          <div className='card' key={doc.id}>
            <span className='ids'>{doc.id}</span>
            <span className='titles'>{doc.title}</span>
            <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}>
                <FontAwesomeIcon icon={faEllipsis} color='#D0D3D4' style={{marginRight:"1vw"}}/>
            <FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
