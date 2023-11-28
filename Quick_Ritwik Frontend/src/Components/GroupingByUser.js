import React, { useState, useEffect } from 'react'
import '../constants/GroupingByPriority.css'
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPlus, faCircle} from '@fortawesome/free-solid-svg-icons';
export default function GroupingByUser() {
    const [users , setUsers]  = useState([]);
    const [user1Data, setUser1Data] = useState([]);
    const [user2Data, setUser2Data] = useState([]);
    const [user3Data, setUser3Data] = useState([]);
    const [user4Data, setUser4Data] = useState([]);
    const [user5Data, setUser5Data] = useState([]);
    const getUsers = async ()=>{
        const response = await fetch(`https://api.quicksell.co/v1/internal/frontend-assignment`,{
          method:'GET',
        })
        const data = await response.json();
        setUsers(data.users);
        const array1 = [];
        const array2 = [];
        const array3 = [];
        const array4 = [];
        const array5 = [];
        
        for (let i=0;i<data.tickets.length;i++){
          if(data.tickets[i].userId===data.users[0].id){
            array1.push(data.tickets[i]);
          }
          else if(data.tickets[i].userId===data.users[1].id){
            array2.push(data.tickets[i]);
          }
          else if(data.tickets[i].userId===data.users[2].id){
            array3.push(data.tickets[i]);
          }
          else if(data.tickets[i].userId===data.users[3].id){
            array4.push(data.tickets[i]);
          }
          else if(data.tickets[i].userId===data.users[4].id){
            array5.push(data.tickets[i]);
          }
        }
        setUser1Data(array1);
        setUser2Data(array2);
        setUser3Data(array3);
        setUser4Data(array4);
        setUser5Data(array5);
      }
    
      useEffect(()=>{
        getUsers();
      },[])

  return (
    <div>
      <NavBar/>
      <div id='container'>
      <div id="user1">
        <div className='icons'>
            <span style={{marginLeft:"0.8vw"}}>Anoop sharma <span style={{color:"grey", marginLeft:"0.5vw"}}>{user1Data.length}</span></span>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {user1Data.map(doc =>(
            <div className='card' key={doc.id}>
              <span className='ids'>{doc.id}</span>
              <span className='titles'>{doc.title}</span>
              <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}>
                <FontAwesomeIcon icon={faEllipsis} color='#D0D3D4' style={{marginRight:"1vw"}}/>
                <FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
            </div>
          ))}
      </div>
      <div id="user2">
        <div className='icons'>
            <span style={{marginLeft:"0.8vw"}}>Yogesh <span style={{color:"grey", marginLeft:"0.5vw"}}>{user2Data.length}</span></span>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {user2Data.map(doc =>(
            <div className='card' key={doc.id}>
              <span className='ids'>{doc.id}</span>
              <span className='titles'>{doc.title}</span>
              <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}>
                <FontAwesomeIcon icon={faEllipsis} color='#D0D3D4' style={{marginRight:"1vw"}}/>
                <FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
            </div>
          ))}
      </div>
      <div id="user3">
        <div className='icons'>
            <span style={{marginLeft:"0.8vw"}}>Shankar kumar <span style={{color:"grey", marginLeft:"0.5vw"}}>{user3Data.length}</span></span>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {user3Data.map(doc =>(
            <div className='card' key={doc.id}>
              <span className='ids'>{doc.id}</span>
              <span className='titles'>{doc.title}</span>
              <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}>
                <FontAwesomeIcon icon={faEllipsis} color='#D0D3D4' style={{marginRight:"1vw"}}/>
                <FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
            </div>
          ))}
      </div>
      <div id="user4">
        <div className='icons'>
            <span style={{marginLeft:"0.8vw"}}>Ramesh <span style={{color:"grey", marginLeft:"0.5vw"}}>{user4Data.length}</span></span>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {user4Data.map(doc =>(
            <div className='card' key={doc.id}>
              <span className='ids'>{doc.id}</span>
              <span className='titles'>{doc.title}</span>
              <span style={{color:"grey", marginTop:"0.5vw", fontSize:"0.8vw"}}>
                <FontAwesomeIcon icon={faEllipsis} color='#D0D3D4' style={{marginRight:"1vw"}}/>
                <FontAwesomeIcon icon={faCircle} size='xs' color='#D0D3D4'/> {doc.tag}</span>
            </div>
          ))}
      </div>
      <div id="user5">
        <div className='icons'>
            <span style={{marginLeft:"0.8vw"}}>Suresh <span style={{color:"grey", marginLeft:"0.5vw"}}>{user5Data.length}</span></span>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faEllipsis} style={{marginLeft:"0.8vw"}}/>
            </div>
        </div>
        {user5Data.map(doc =>(
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
