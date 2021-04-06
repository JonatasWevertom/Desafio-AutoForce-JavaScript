/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

import { BiMenu } from 'react-icons/bi';
import { BiPhone } from 'react-icons/bi';

function App() {
	return (
		<div className="App">
			<header className="header">
				<>
					<a href="#" className="menu">
						<BiMenu size={40} />
					</a>
					<h1>DEALER</h1>
					<a href="#" className="phone">
						<BiPhone size={35} />
					</a>
					<a href="#" className="whattsapp">
						<img src="https://image.flaticon.com/icons/png/512/124/124034.png" />
					</a>
					<a href="#" className="Fiat">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Fiat_logo.svg/1200px-Fiat_logo.svg.png"
							alt="Fiat"
						/>
					</a>
				</>
			</header>
			<modal>
				<div className="select">
					<a href="#">Institucional</a>
				</div>
				<div className="institucional">
					<a href="#">Quem somos</a>
					<a href="#">Fale conosco</a>
					<a href="#">Endereços</a>
				</div>
				<a href="#">Novos</a>
				<a href="#">Ofertas</a>
				<a href="#">Seminovos</a>
				<a href="#">Consorcio</a>
				<a href="#">Vendas direta</a>
				<a href="#">Lifestyle</a>
				<a href="#">Pós-vendas</a>
			</modal>
			<footer>
				<div className="barra">
					<div className="progresso" />
				</div>
				<div className="button">
					<a href="#">VER TODOS OS MODELOS</a>
				</div>
				<a href="#" className="whattsapp">
					<img src="https://image.flaticon.com/icons/png/512/124/124034.png" />
				</a>
			</footer>
		</div>
	);
}

export default App;
