import React, { useState } from 'react'
import { first, second } from './soundSrc'
import DrumController from './components/DrumController'
import Keyboard from './components/Keyboards'

const App = () => {
  const soundsName = {
    heaterKit: 'Heater Kit',
    smoothPianoKit: 'Smooth Piano Kit'
  }

  const soundsGroup = {
    heaterKit: first,
    smoothPianoKit: second
  }

  const [power, setPower] = React.useState(true)
  const [volume, setVolume] = React.useState(1)
  const [soundName, setSoundName] = React.useState('')
  const [soundType, setSoundType] = React.useState('heaterKit')
  const [sounds, setSounds] = React.useState(soundsGroup[soundType])

  const styleActiveKey = (key) => {
    key.parentElement.style.backgroundColor = '#000000'
    key.parentElement.style.color = '#ffffff'
  }

  const deactivateAudio = (audio) => {
    setTimeout(() => {
      audio.parentElement.style.backgroundColor = '#ffffff'
      audio.parentElement.style.color = '#000000'
    }, 300)
  }

  const play = (key, sound) => {
    setSoundName(sound)
    const audio = document.getElementById(key)
    styleActiveKey(audio)
    audio.currentTime = 0
    audio.play()
    deactivateAudio(audio)
  }

  const stop = () => {
    setPower(!power)
  }

  const changeSoundGroup = () => {
    setSoundName('')
    if (soundType === 'heaterKit') {
      setSoundType('smoothPianoKit')
      setSounds(soundsGroup.smoothPianoKit)
    } else {
      setSoundType('heaterKit')
      setSounds(soundsGroup.heaterKit)
    }
  }

  const handleVolumeChange = (e) => {
    setVolume(e.target.value)
  }

  const setKeyVolume = () => {
    const audioes = sounds.map((sound) => document.getElementById(sound.key))
    audioes.forEach((audio) => {
      if (audio) {
        audio.volume = volume
      }
    })
  }

  return (
    <div id='drum-machine'>
      {setKeyVolume()}
      <div className='wrapper'>
        <Keyboard
          sounds={sounds}
          play={play}
          power={power}
          deactivateAudio={deactivateAudio}
        />
        <DrumController
          stop={stop}
          power={power}
          volume={volume}
          name={soundName || soundsName[soundType]}
          changeSoundGroup={changeSoundGroup}
          handleVolumeChange={handleVolumeChange}
        />
      </div>
    </div>
  )
}

export default App
