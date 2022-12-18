import React from 'react'
import KeyboardKey from '../KeyboardKey'

const Keyboard = ({ sounds, play, power, deactivateAudio }) => {
  return (
    <div className='keyboard'>
      {power
        ? sounds.map((sound, id) => (
            <KeyboardKey
              key={id}
              sound={sound}
              play={play}
              deactivateAudio={deactivateAudio}
            />
          ))
        : sounds.map((sound, id) => (
            <KeyboardKey
              key={id}
              sound={{ ...sound, url: '#' }}
              play={play}
              deactivateAudio={deactivateAudio}
            />
          ))}
    </div>
  )
}

export default Keyboard
