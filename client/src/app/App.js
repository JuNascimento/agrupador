import React, { useEffect } from 'react'
import Header from '../components/header'
import Loading from '../components/loading'

const App = () => {

  useEffect(() => {
    getCoords()
  }, [])

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
        console.error('[COORDINATES] Deu tudo certo')
      })
    } catch (error) {
      console.error(`[COORDINATES] Deu esse erro aqui, ó --> ${error}`)
    }
  }

  return (
    <>
      <Header />
      <Loading />
    </>
  )
}

export default App
