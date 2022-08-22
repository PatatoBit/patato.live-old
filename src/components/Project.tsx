import { StaticImageData } from 'next/image'
import React from 'react'
// import Image from 'next/image'

interface Project {
	name: string,
	description: string,
	link?: string,
	image: StaticImageData | string
}

function Project(props: Project) {
  return (
	  <div className="grid project-card text-center">
		  <div className="flex flex-col w-full h-full items-center">
			<h1 className="text-4xl title">{props.name}</h1>
			<h1 className="text-xl poppins">{props.description}</h1>
			<a className="poppins text-center" href={props.link}>Click here to view</a>
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