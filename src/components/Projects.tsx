import React from 'react'
import Project from './Project'

// Image

function Projects() {
	return (
  
		<>
			<div className="fullflex bg-gradient-to-t from-orange-300 to-orange-200">
				<h1 className="text-5xl title mb-10">Notable Projects📌</h1>
				<div className="grid grid-cols-2 sm:grid-cols-4 w-full">
					<Project name="Patato.live" description="A personal portfolio website" link="https://patato.live" image="https://webring.wonderful.software/webring.black.svg"/>
					<Project
						name="Light Touch"
						description="Lorem ipasdh aksjdh askjdh aksjdh aksjdh jkhagf jasdg fqoweg feyw qfejhq woef wy"
						link="https://patato.live"
						image="https://webring.wonderful.software/webring.black.svg"
					/>
				</div>

			</div>
		</>
  )
}

export default Projects