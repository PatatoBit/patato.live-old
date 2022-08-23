import React from 'react'
import Image from 'next/image'

function Webring() {
  return (
	  <div>
        <a className="absolute top-0 left-0 p-2 hover:scale-110" href="https://webring.wonderful.software/#/patato.live" title="วงแหวนเว็บ">
          <Image
            src="/webring.svg"
            alt="วงแหวนเว็บ"
            width={48}
            height={48}
          />
        </a>
      </div>
  )
}

export default Webring