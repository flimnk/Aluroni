import classNames from 'classnames';
import styles from './tags.module.scss';
import { Prato } from 'types/types';

export default function Tags ({
  category,
  size,
  price,
  serving
}:Prato){
  return(
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__tipo]: true,
        [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
      })}>{category.label}</div>
      <div className={styles.tags__porcao}>{size}g</div>
      <div className={styles.tags__qtdpessoas}>{serving} 2 pessoa{serving === 1 ? '' : 's'}</div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>

  );    
}