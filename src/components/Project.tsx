import { StaticImageData } from 'next/image'
import React from 'react'
// import Image from 'next/image'

interface Project {
	name: string,
	description: string,
	link?: string,
	image?: StaticImageData | string
}

function Project(props: Project) {
  return (
	<div className="grid project-card text-center hover:scale-105">
		<div className="flex flex-2 flex-col w-full h-full items-center">
			<h1 className="text-4xl title">{props.name}</h1>
			{/* <h1 className="text-xl poppins">{props.description}</h1> */}
		  </div>
		  <div className="flex flex-1 items-center justify-center">
			<a className="poppins text-center" href={props.link} target="_blank" rel="noreferrer">View Project</a>
		  </div>
		  {/* <Image
			  className="max-w-full"
			  src={props.image}
			  alt={props.name}
			  width={50}
			  height={50}
		  /> */}
	</div>
  )
}

export default Project