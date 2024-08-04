import React from 'react'
import { Link } from 'react-router-dom'


export const Home = () => {
  var data = [
    {
      id: 5,
      name:"Home 5"
    },
    {
      id: 6,
      name:"Home 6"
    },
    {
      id: 7,
      name:"Home 7"
    }
  ]
  return (
    <div>
        <h1>HOME COMPONENT</h1>
        {
          data.map((d)=>{
            return(
              <div>
                <Link to={`/home/detail/${d.id}`}>{d.name}</Link>
              </div>
            )
          })
        }
    </div>
  )
}