import s from './main.module.scss';


function Main() {
  return (
    <div className={s.container}>
       <div className={s.subtitle}>
        <h2>Seus Produtos</h2>
        <button className='btn-blue'>Adicionar produto</button>
       </div>
    </div>
  );
}

export default Main;
