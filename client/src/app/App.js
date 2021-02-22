import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import Loading from '../components/loading'
import CreateGroup from '../components/createGroup'
import GroupsList from '../components/groupsList'

const App = () => {
  const [showGroups, setShowGroups] = useState(false)

  useEffect(() => {
    getCoords()
  })

  const geolocationDisponible = () => {
    let hasGeolocation = false
    if ('geolocation' in navigator) {
      hasGeolocation = true
    }

    return hasGeolocation
  }

  const obterGeolocation = () => {
    if (geolocationDisponible) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 30000,
          maximumAge: 1000000
        })
      })
    } else {
      console.error('[GEOLOCATION] Deu ruim aqui parça')
    }
  }

  const getCoords = () => {
    try {
      obterGeolocation().then(async ({ coords: {latitude, longitude} }) => {
        console.log('latitude', latitude)
        console.log('longitude', longitude)
      }).then(() => {
        console.info('[COORDINATES] Deu tudo certo')
        setShowGroups(true)
      })
    } catch (error) {
      console.error(`[COORDINATES] Deu esse erro aqui, ó --> ${error}`)
    }
  }

  const groupsMock = [
    {
      name: 'Só vilão 2.0',
      descricao: 'Grupo de amigões da Rural',
      link: 'www.pedro.com'
    },
    {
      name: 'Dona carochinha',
      descricao: 'Melhor grupo da vizinhança',
      link: 'www.plalalal.br'
    },
    {
      name: 'Familia linda',
      descricao: 'o q se diz aqui',
      link: 'www.nao.sei.com'
    },
    {
      name: 'Só vilão 2.0',
      descricao: 'Grupo de amigões da Rural',
      link: 'www.pedro.com'
    },
    {
      name: 'Dona carochinha',
      descricao: 'Melhor grupo da vizinhança',
      link: 'www.plalalal.br'
    },
    {
      name: 'Familia linda',
      descricao: 'o q se diz aqui',
      link: 'www.nao.sei.com'
    },
  ]

  return (
    <>
      <Header />
      {!showGroups && <Loading />}
      {showGroups && <GroupsList groups={groupsMock} />}
      {<CreateGroup /> }
    </>
  )
}

export default App
