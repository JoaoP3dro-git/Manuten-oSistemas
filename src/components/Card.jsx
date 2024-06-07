import style from './Card.module.css'
/* eslint-disable react/prop-types */
export const Card = ({name, desc, value, image, status, category}) => {
  return(
      <div className={style.productCard}>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <p>{value}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
          <h3>{category}</h3>
          {status?<div className={style.greenBall}></div>:<div className={style.redBall}></div>}
      </div>
  )
}