import React from 'react'

import logo from '../images/logo.png'

export default function Header() {
  return (
    <header class="flex md:justify-between p-8">
      <div class="flex align-items-center mx-auto sm:mx-1">
        <h1 class="inline text-white sm:text-3xl text-2xl font-bold">
          <div style={{ maxWidth: `100px` }}>
            <a href="/">
              <img src={logo} alt="Logo Pedro Pojo" />
            </a>
          </div>
        </h1>
      </div>
    </header>
  )
}
