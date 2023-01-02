import { useState} from 'react'

import React from 'react'
import Show from './Show'
import Star from 'react-rating-stars-component/dist/star'
function App() {

  const [list, setList] = useState([
    { name: "harry potter", rate:"2.5", imgsr: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaGGnLFf3A9kBUzT20RLhGhPCfzUtKhE-MrcEOj5aH5bL1vnTQBqxrsJnnbOc7puswYI&usqp=CAU" },
    { name: "Pocker face", rate: "4", imgsr: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKhCIO1thJahnwfyeHfYrvVrUlP7Ft_5vJQ&usqp=CAU" },
    { name: "Time out", rate: "4.5", imgsr: "https://fr.web.img4.acsta.net/medias/nmedia/18/85/59/68/19816803.jpg" }
  ])

  return (
    <div >
      {list.map(e => <p>
        {e.name}
        <br />
        <Star rate= {e.rate} ></Star>
        <img src={e.imgsr} /></p>)
      }
      
      <Show list={list} setList={setList}></Show>
    </div>
  )
}

export default App
