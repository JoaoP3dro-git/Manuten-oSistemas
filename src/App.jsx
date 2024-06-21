import { Link } from 'react-router-dom'
import style from './App.module.css'
import 'leaflet/dist/leaflet.css'

function App({children}) {

  return (
    <>
      <div className={style.wrapBtns}>
        <a className={style.button} href='/'>Produtos</a>
        <a className={style.button} href='/api'>API</a>
        <a className={style.button} href='/map'>Map</a>
        <a className={style.button} href='/graph'>Graph</a>
      </div>
      <div className={style.wrapPage}>
        <h1>Exercícios de manutenção</h1>
        {children} 
      </div>
    </>
  )
}

export default App
