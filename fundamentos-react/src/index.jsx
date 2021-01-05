import ReactDOM from 'react-dom';

import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

import './index.css';

ReactDOM.render(
  <div>
    <Primeiro/>
    <ComParametro title="Título" subtitle="Subtítulo"/>
  </div>,
  document.getElementById("root")
);