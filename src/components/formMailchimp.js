import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import SocialIcons from './socialIcons'

export default function FormMailchimp() {
  const [email, setEmail] = useState('')
  const [fname, setFname] = useState('')
  const [displayIcons, setDisplayIcons] = useState('none')
  const [displayForm, setDisplayForm] = useState('block')

  async function handleSubmit(e) {
    e.preventDefault()
    const result = await addToMailchimp(email, { FNAME: fname })
    if (result.result === 'success') {
      setFname('')
      setEmail('')
      setDisplayIcons('block')
      setDisplayForm('none')
    }
  }

  return (
    <>
      <div id="mc_embed_signup" style={{ display: displayForm }}>
        <form onSubmit={e => handleSubmit(e)}>
          <div id="mc_embed_signup_scroll">
            <input
              type="text"
              name="fname"
              value={fname}
              onChange={e => setFname(e.target.value)}
              className=" w-full mb-2 sm:mx-auto bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-2/4 sm:w-2/4   appearance-none leading-normal placeholder-gray-600 text-gray-800"
              id="email"
              placeholder="Qual é o seu nome?"
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className=" w-full sm:mx-auto bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-2/4 sm:w-2/4   appearance-none leading-normal placeholder-gray-600 text-gray-800"
              id="email"
              placeholder="Digite o seu melhor e-mail"
              required
            />

            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_31636fa43c0248e85123e0d93_51f8f5b8c7"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="clear mt-5">
              <input
                type="submit"
                value="EU QUERO O E-BOOK GRÁTIS"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="pt-5" style={{ display: displayIcons }}>
        <h1 className="text-xl pb-5">
          <span className="text-green-500 text-2xl">Parabéns, {fname}!</span>{' '}
          <br />O seu e-mail foi cadastrado e logo mais você receberá o e-book
          totalmente gratuito no seu e-mail!
        </h1>
        <p className="pb-5">
          Quer mais conteúdos como esse? Siga-me nas redes sociais e fique por
          dentro de todas as novidades ou faça parte da nossa Comunidade
          Exclusiva no Telegram!
        </p>
        <SocialIcons />
      </div>
    </>
  )
}
