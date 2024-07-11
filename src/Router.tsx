import Cardapio from 'pages/Cardapio';
import Menu from 'components/menu';
import Inicio from 'pages/Inicio';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import PaginaPadrao from 'components/PaginaPadrao';
import Sobre from 'pages/sobre';
import Footer from 'components/footer/footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
export default function AppRouter (){
  return(
    <main className='container'>
      <Router>
        <Menu/>
        <Routes>
          <Route path='/'element={<PaginaPadrao/>}>
            <Route index element={<Inicio/>}/>
            <Route path='cardapio' element={<Cardapio/>}/>
            <Route path='sobre' element= {<Sobre/>} />
          </Route>
          <Route path='*' element= {<NotFound/>} />
          <Route path='prato/:id' element={<Prato/>}/>
        </Routes>
        <Footer/>
      </Router>
    </main>     


  );
}