import React, { useEffect, useRef } from 'react'
import '../constants/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faSlidersH} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function NavBar() {
    const navigate = useNavigate();
    const [ isOpened, setIsOpened] = useState(false);
    const [selectedOptionForGrouping, setSelectedOptionForGrouping] = useState('');
    const [selectedOptionForOrdering, setSelectedOptionForOrdering] = useState('');
    const optionsForGrouping = [
      {label: 'select', value: 'select'},
      { label: 'Status', value: 'Status' },
      { label: 'User', value: 'User' },
      { label: 'Priority', value: 'Priority' },
    ];
    const optionsForOrdering = [
      { label: 'Priority', value: 'Priority' },
      { label: 'Title', value: 'Title' },
    ];

    const handleChangeForGrouping = (event) => {
      setSelectedOptionForGrouping(event.target.value);
      if(event.target.value==="User"){
        navigate('/users');
      }
      else if(event.target.value==="Priority"){
        navigate('/priority');
      }
      else if(event.target.value==="Status"){
        navigate('/status');
      }
    };
    const handleChangeForOrdering = (event) => {
      setSelectedOptionForOrdering(event.target.value);
    };
    const popRef = useRef(null);
    const openlist = ()=>{
        setIsOpened(true);
    }

    useEffect(()=>{
      const handleClickOutside = (event) => {
        if (isOpened && !popRef.current.contains(event.target)) {
          setIsOpened(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpened]);
    
    
  return (
    <nav>
        <button id='displaybtn' onClick={openlist}><FontAwesomeIcon icon={faSlidersH} style={{fontSize:"1vw"}}/> <span style={{fontSize:"1vw"}}>Display</span> <FontAwesomeIcon icon={faChevronDown} style={{fontSize:"1vw"}}/></button>
        <div id="listBox" ref={popRef} style={{display: isOpened? "": "none"}}>
          <div>
            <span>Grouping</span>
            <select value={selectedOptionForGrouping} onChange={handleChangeForGrouping}>
              {optionsForGrouping.map((option) => (
                <option key={option.value} value={option.value}> {option.label}</option>
              ))}
            </select>
          </div>
          <div>
            <span>Ordering</span>
            <select value={selectedOptionForOrdering} onChange={handleChangeForOrdering}>
              {optionsForOrdering.map((option) => (
                <option key={option.value} value={option.value}> {option.label}</option>
              ))}
            </select>
          </div>
        </div>
    </nav>
  )
}
