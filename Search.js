import React from 'react'
import './Search.css'
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import { Button } from '@material-ui/core'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const Search = ({hideButtons=false}) => {
  
  const [{}, dispatch]=useStateValue();

  const [input,setInput]=useState('');

  //useHistory is replaced by useNavigate()
  const history=useNavigate();

  const search=(e)=>{
    e.preventDefault();
    console.log("you hit search ",input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    //do something with input.... (pushing user to search page )
    history('./search');


  }
  return (
    <form className='search'>
      <div className='search_input'>
        <SearchIcon className='search_inputIcon'/>
        <input value={input} onChange={e=>setInput(e.target.value)}/>
        <MicIcon/>
      </div>

      {/* if hideButtons is false then display buttons otherwise not */}
      {!hideButtons ?(
          <div className='search_buttons'>
          {/* this is the button we want to call whenever enter key gets pressed, we are doing here by using onclick function */}
          <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      ):
          <div className='search_buttons'>
          {/* this is the button we want to call whenever enter key gets pressed, we are doing here by using onclick function */}
          <Button className='search_buttonsHidden' type='submit' onClick={search} variant='outlined'>Google Search</Button>
          {/* <Button variant='outlined'>I'm Feeling Lucky</Button> */}
        </div>
      }
      
    </form>
  )
}

export default Search
