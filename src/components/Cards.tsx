import React from 'react'
import Card from './Card';
import { faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faTreeCity } from '@fortawesome/free-solid-svg-icons'

function Cards() {
  return (
	<div className="flex flex-col sm:flex-row w-1/2 justify-center items-center">
		<Card icon={faGithub} name="Github" link="https://github.com/PathonScript"/>
		<Card icon={faTwitter} name="Twitter" link="https://twitter.com/Patatotota"/>
		<Card icon={faTreeCity} name="Garden" link="https://garden.patato.live" />
		<Card icon={faEnvelope} name="Email" link="mailto:pathonscript@gmail.com" />
		  
	</div>
  )
}

export default Cards