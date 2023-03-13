import s from './productCard.module.scss';


function ProductCard() {
  return (
    <div className={s.container} >
      <img
      src='https://a-static.mlcdn.com.br/1500x1500/iphone-11-apple-128gb-verde-61-12mp-ios/magazineluiza/155611600/42775e22b8444ee135f45f997211bf03.jpg' 
      alt='product'/>

      <div className={s['content-infos']}>
        <h1>Nome do Produto</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique aperiam, 
          ab laudantium facilis dignissimos, molestias ducimus enim suscipit reprehenderit 
        </p>
        <div className={s['content-price']}>
          <span>3 unidades</span>
          <strong>R$ 99.99</strong>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;