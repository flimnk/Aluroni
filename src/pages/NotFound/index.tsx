import classNames from 'classnames';
import {ReactComponent as ImgNotFound} from 'assets/notFound/not_found.svg';
import styles from './NotFound.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import {useNavigate} from 'react-router-dom';
export default function NotFound(){
  const navigate = useNavigate();
  return(
   
    <div className={classNames({[styles.container]:true,[stylesTema.container]:true})}>
      <div className= {styles.voltar} >
        <button onClick={()=>{navigate(-1);}}>
          {'< Voltar'}
        </button>
      </div>    
      <ImgNotFound/> 
    </div>
    
  );
}