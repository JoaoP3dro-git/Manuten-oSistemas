import { Card } from '../components/Card'
import produtos from '../constants/produtos.json'
import style from '../App.module.css'

export function ProductsPage() {
    return(
        <>
            <h2>Showroom de produtos</h2>
            <div className={style.wrapCards}>
              {produtos.map((item) => {
                return (
                  <Card {...item} />
                )
              })}
            </div>
        </>
    )
}