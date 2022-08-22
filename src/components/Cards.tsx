import React from 'react'
import Card from './Card';
import { faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

function Cards() {
  return (
	<div className="flex flex-row w-1/2 max-h-14 justify-center">
		<Card icon={faGithub} name="Github" link="https://github.com/PathonScript"/>
		<Card icon={faTwitter} name="Twitter" link="https://twitter.com/Patatotota"/>
		<Card icon={faCode} name="Website" link="https://patato.live" />
	</div>
  )
}

export default Cards