import Menu from 'components/menu';
import styles from './Inicio.module.scss';
import cardapio from 'date/cardapio.json';
import stylesTema  from 'styles/Tema.module.scss';
import imgNossaCasa  from 'assets/sobre/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/types';

export default function Inicio() {
  const navigate = useNavigate();
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
 
  function rediriecionaParaDetalhesDoPrato(prato: Prato){
    navigate(`/prato/${prato.id}`);
  }

  return (
   
    <section> 
      <h3 className={stylesTema.titulo}>
            Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button onClick={() => rediriecionaParaDetalhesDoPrato(item)} className={styles.recomendado__botao}>
                        Ver mais
            </button>
          </div>
        ))} 
      </div>
      <h3 className={stylesTema.titulo}>Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={imgNossaCasa} alt="casa do aluruni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vargueiro, 3185 <br/> <br/> Vila Mariana -Sp
        </div>  
      </div>
    </section> 

  );
}