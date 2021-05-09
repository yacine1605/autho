import './App.css';
//import bg_boost_desktop from './images/bg-boost-desktop.svg';
//import bg_shorten_desktop from './images/bg-shorten-desktop.svg';
import icon_brand from './images/icon-brand-recognition.svg';
import icon_detailed from './images/icon-detailed-records.svg';
import icon_fully from './images/icon-fully-customizable.svg';
import icon_facebook from './images/icon-facebook.svg';
import icon_printest from './images/icon-pinterest.svg';
import icon_twitter from './images/icon-twitter.svg';
import illustration_working from './images/illustration-working.svg';
import logo from './images/logo.svg';
import { useState } from 'react';
import List from './List';
import axios from 'axios';
const App = () => {
	const [array, setArray] = useState([]);
	const [input, setInput] = useState('');
	const [data, setdata] = useState();

	const deleteIthem = (id) => {
		const newState = array.filter((elem) => elem.id !== id);
		setArray(newState);
	};
	const postData = async () => {
		let { data } = await axios.post('http://localhost:5000/url', { url: input });
		setdata(data);
	};
	return (
		<>
			<div className="header">
				<div className="navbar">
					<img src={logo} alt="logo"></img>
					<button>Features </button>
					<button> Pricing </button>
					<button> Resourcers</button>
					<button> Login</button>
					<button> Sign up</button>
				</div>
				<div className="para-img">
					<p>
						<h1> More than just shorter links</h1>
						<h6>
							{' '}
							build your brand's recognition and get detailed insights on how your link are preforming
						</h6>
						<button className="btn_start"> Get Started</button>
					</p>

					<img src={illustration_working} alt="img" width="100px" height="200px"></img>
				</div>
			</div>
			<div className="body">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						if (input) {
							setArray([...array, { task: input }]);
							setInput();
						}
					}}
				>
					<div className="input">
						<input
							name="input"
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
						/>
					</div>

					<button
						onClick={() => {
							postData();
						}}
					>
						Shorten it{' '}
					</button>
				</form>
				<List data={array} delete={deleteIthem} ladata={data?.data} />
			</div>
			<div className="info">
				<p>
					<h1> Advanced Statistics</h1>
					<h6> track how your links are preforming across the web with our Advanced Statistics dashboard</h6>
				</p>
				<div className="imgs">
					<div className="img1">
						<img src={icon_brand} alt="img1"></img>
						<p>
							<h5>Brand recognition</h5>
							kzgkdakdjdlajdmzhkjzb zajkbdozlzzzjdhzdjzdbd,zdb,znbd
							zhgzjzgjdhbzdnbzjbdkuzdbkjzbdjkzbkdjbzkdzjkdbzkdb
							zhgzjzgjdhbzdnbzjbdkuzdbkjzbdjkzbkdjbzkdzjkdbzkdb
						</p>
					</div>
					<div className="img2">
						<img src={icon_detailed} alt="img2"></img>{' '}
						<p>
							<h5>Data Reconr</h5>
							kzgkdakdjdlajdmzhkjzb zajkbdozlzzzjdhzdjzdbd,zdb,znbd
							zhgzjzgjdhbzdnbzjbdkuzdbkjzbdjkzbkdjbzkdzjkdbzkdb
							zhgzjzgjdhbzdnbzjbdkuzdbkjzbdjkzbkdjbzkdzjkdbzkdb
						</p>
					</div>
					<div className="img3">
						<img src={icon_fully} alt="img3"></img>
						<p>
							<h5> fully customizable </h5>
							zhgzjzgjdhbzdnbzjbdkuzdbkjzbdjkzbkdjbzkdzjkdbzkdb
							zhgzjzgjdhbzdnbzjbdkuzdbkjzbdjkzbkdjbzkdzjkdbzkdb z z,bdkzbdkzbdkzjdzvkzvdk
						</p>
					</div>
				</div>
			</div>
			<div className="footer-one">
				<p>
					<h1> Boost your links today</h1>
					<button className="btn_start"> Get Started</button>
				</p>
			</div>
			<div className="footer">
				<img src={logo} alt="logo"></img>
				<h5> Features</h5>
				<ul>
					<li>
						<a href="/">link</a>
					</li>
					<li>
						<a href="/">link</a>
					</li>
					<li>
						<a href="/">link</a>
					</li>
				</ul>
				<h5> Resourcers</h5>
				<ul>
					<li>
						<a href="/">link</a>
					</li>
					<li>
						<a href="/">link</a>
					</li>
					<li>
						<a href="/">link</a>
					</li>
				</ul>
				<h5> Company</h5>
				<ul>
					<li>
						<a href="/">link</a>
					</li>
					<li>
						<a href="/">link</a>
					</li>
					<li>
						<a href="/">link</a>
					</li>
				</ul>
				<a href="/">
					<img src={icon_facebook} alt="" />
				</a>
				<a href="/">
					<img src={icon_printest} alt="" />
				</a>
				<a href="/">
					<img src={icon_twitter} alt="" />
				</a>
			</div>
		</>
	);
};
export default App;
