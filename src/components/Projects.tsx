import React from 'react'
import Project from './Project'

// Image

function Projects() {
	return (
  
		<>
			<div className="fullflex bg-gradient-to-t from-orange-300 to-orange-200">
				<h1 className="text-5xl title mb-10">Notable Projects📌</h1>
				<div className="grid grid-cols-2 sm:grid-cols-4">
					<Project
						name="Patato.live"
						description="This website!"
						link="https://patato.live"
						image="https://webring.wonderful.software/webring.black.svg"
					/>
					<Project
						name="Light Touch"
						description="A website that connects long-distance relationship like a friendship lamp"
						link="https://github.com/PathonScript/LightTouch"
					/>
					<Project
						name="Windowie"
						description="A discord bot that displays an image of Pat's window (Discontinued)"
						link="https://github.com/PathonScript/Windowie"
					/>
					<Project
						name="Clippy Discord Bot"
						description="Part of the Clippy Project, this bot allows user to use discord commands to save a clip (Under Development)"
						link="https://github.com/TheClippyProject/ClippyBot"
					/>
					<Project
						name="Pat CLI"
						description="A cli program to fetch weather data from an API and more"
						link="https://github.com/PathonScript/CLI"
					/>
					<Project
						name="Digital Garden"
						description="Digital Garden to store things that my brain couldn't. Some blogs too"
						link="https://github.com/PathonScript/garden"
					/>
				</div>

			</div>
		</>
  )
}

export default Projects