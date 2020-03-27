import React from 'react'

import Depoimentos from '../components/depoimentos'
import FormMailchimp from '../components/formMailchimp'

export default function EbookMudancaDeHabito() {
  return (
    <div className="h-screen bg-gray-900">
      <div className=" pt-20 pb-20 sm:p-20 bg-gray-800 flex flex-col text-center text-white">
        <div>
          <h1 className="text-xl sm:text-2xl px-5">
            Descubra Agora os 4 Pilares que levaram <br />
            <span className="text-green-500">
              Mais de 30 Pessoas a uma Transformação na Saúde
            </span>{' '}
            <br />
            Apenas com a Mudança de Hábito!{' '}
          </h1>
          <div className="p-10">
            <FormMailchimp />
          </div>
        </div>
      </div>
      <div>
        <Depoimentos />
      </div>
    </div>
  )
}
