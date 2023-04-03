import { useEffect, useState } from "react"


const FACT_URL = 'https://catfact.ninja/fact'
// const IMAG_CAT_URL = `https://cataas.com/cat/says/${}`

const App = () => {

  const [fact, setFact] = useState()
  const [imag, setImag] = useState()

  useEffect(() => {

    fetch(FACT_URL)
      .then(resp => resp.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )

}

export default App
