import { useState } from 'react'
import './App.css'
import phrases from "./utils/phrases.json"
import getRandomFromArray from './utils/getRandomFromArray'
import PhraseCard from './components/PhraseCard'
import BtnPhrase from './components/BtnPhrase'
import arrImage from "./utils/arrImage.json"

function App() {

  const inicialValue = getRandomFromArray(phrases)

  const [phraseRandom, setPhraseRandom] = useState(inicialValue)
const inicialimage = getRandomFromArray(arrImage)
  const [imgSelect, setimgSelect] = useState(inicialimage)
  

const objStyle = {
 backgroundImage : `url("/fondo${imgSelect}.png")`
}


  return (
    <div style={objStyle} className='app'>
<h1 className='app__title'>Galleta de la fortuna</h1>
<article className='app_card'>
<PhraseCard phraseRandom={phraseRandom}/>
<BtnPhrase setPhraseRandom={setPhraseRandom}
setimgSelect={setimgSelect}
/>
</article>
    </div>
  )
}

export default App
