import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'


interface Card {
  icon: IconProp,
  name: string,
  link: string
}

function Card(props: Card) {
    

  return (
    <>
      
      <a href={ props.link} className="card" target="_blank" rel="noreferrer">
        <div className="flex flex-row py-2">
          <FontAwesomeIcon className="flex mx-1 text-orange-900 " width={ 30 } icon={props.icon} />
          <h1 className="flex mx-1 poppins text-orange-900 text-lg sm:text-2xl">{ props.name }</h1>
        </div> 
      </a>
    </>
  )
}

export default Card