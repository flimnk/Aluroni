import styles from './Item.module.scss'; 
import cardapio from 'date/cardapio.json';
import classNames from 'classnames';
import { Prato } from 'types/types';
import Tags from 'components/tags';
import { useNavigate } from 'react-router-dom';


export default function Item(props: Prato) {
  const navigate = useNavigate();
  const { id, title, description, category, size, serving, price, photo } = props;
  return (
    <div className={styles.item} onClick={()=>{navigate(`/prato/${id}`);}}>
      <div className={styles.item__imagem} >
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <Tags {...props}/>
      </div>
    </div>
  );
}