import React from 'react'
import Card from './Card';
import { faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

function Cards() {
  return (
	<div className="flex flex-row w-1/2 max-h-14 justify-center">
		<Card icon={faGithub} name="Github" />
		<Card icon={faTwitter} name="Twitter" />
		<Card icon={faCode} name="Website" />
	</div>
  )
}

export default Cards