import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'

export default function SocialIcons() {
  return (
    <div className="mx-auto flex justify-center mb-10">
      <a
        href="https://www.facebook.com/pedro.pojo.714"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className="text-3xl mr-5" />
      </a>
      <a
        href="https://www.instagram.com/pojopersonaloficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="text-3xl mr-5" />
      </a>
      <a
        href="https://t.me/joinchat/AAAAAExph9Lf4W8dNo8x-Q"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTelegram} className="text-3xl mr-5" />
      </a>
    </div>
  )
}
