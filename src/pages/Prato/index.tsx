import styles from './Prato.module.scss';
import {  Route, Routes, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import cardapio from 'date/cardapio.json';
import NotFound from 'pages/NotFound';
import Tags from 'components/tags';
import PaginaPadrao from 'components/PaginaPadrao';
export default function Prato() {
  const navigate = useNavigate();
  const {id} = useParams();
  const  prato  = cardapio.find( item=> item.id === Number(id));
  if(!prato){
    return(
      <>
        <h1 className={styles.titulo}>Prato Nao Encontrado</h1>
        <NotFound/>;
      </>
    );
  }
  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao/>}>
        <Route index element={
          <>
            <button className={styles.voltar} onClick={()=>{navigate(-1);}}>
              {'< Voltar'}
            </button>
            <section className={styles.container}>
              <h1 className={styles.titulo}>  
                {prato.title}
              </h1>
              <div className={styles.imagem}>
                <img src={prato.photo} alt={prato.title} />
              </div>
              <div className={styles.conteudo}>
                <p className={styles.conteudo__descricao}>
                  {prato.description}
                </p>
                <Tags {...prato}/>
              </div>
            </section>
          </>
        }/>

      </Route>
    </Routes>
  );
}
