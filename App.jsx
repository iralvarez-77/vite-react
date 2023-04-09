import { useEffect, useState } from "react";

const FACT_URL = 'https://catfact.ninja/fact';
const PREFIX_URL = 'https://cataas.com';

const App = () => {
  
  const [fact, setFact] = useState();
  const [imag, setImag] = useState();
  
  useEffect(() => {
    fetch(FACT_URL)
      .then(resp => resp.json())
      .then(data => setFact(data.fact))
  }, []);

  useEffect(() => {

    if (!fact ) return;

    const threeWrods = fact.split(' ', 3).join(' ');
    fetch(`https://cataas.com/cat/says/${threeWrods}?size=50&color=red&json=true`)
      .then( resp => resp.json())
      .then(resp => {
    const { url } = resp;
    setImag(url);
      })
  },[fact]);

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <h1>Aplicación de gatos</h1>
      <section style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap:'16px'
      }}>
        {fact && <p>{fact}</p>}
        {imag && <img style={{ maxWidth:'320px', height: 'auto'}} src={`${PREFIX_URL}${imag}`} alt="imagen de gatos con las 3 primeras palabras" />}
      </section>
    </main>
  )
}

export default App
