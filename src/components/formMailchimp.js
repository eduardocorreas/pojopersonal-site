import React from 'react'

// import { Container } from './styles';

export default function FormMailchimp() {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://pojopersonal.us19.list-manage.com/subscribe/post?u=31636fa43c0248e85123e0d93&amp;id=51f8f5b8c7"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <input
            type="email"
            name="EMAIL"
            className=" w-full sm:mx-auto bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-2/4 sm:w-2/4   appearance-none leading-normal placeholder-gray-600 text-gray-800"
            id="mce-EMAIL"
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
              value="FAZER DOWNLOAD DO E-BOOK GRÁTIS"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
