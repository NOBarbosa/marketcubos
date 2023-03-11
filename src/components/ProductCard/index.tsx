import s from './productCard.module.scss';


function ProductCard() {
  return (
    <div className={s.container} >
      <img
      src='https://a-static.mlcdn.com.br/1500x1500/iphone-11-apple-128gb-verde-61-12mp-ios/magazineluiza/155611600/42775e22b8444ee135f45f997211bf03.jpg' 
      alt='product'/>
    </div>
  )
}

export default ProductCard;