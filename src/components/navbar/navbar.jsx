import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/logo-original.jpg';

export default function navbar() {
	return (
		<>
			<div className="navbar">
				<div className="navbar-main">
					<div className="navbar-main-left">
						<img className="navbar-logo" src={Logo} alt="LOGO" />
						<ul className="navbar-main-left-list">
							<li>
								<a href="#home">Home</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#update">Update</a>
							</li>
							<li>
								<a href="#support">Support</a>
							</li>
							<li>
								<a href="#testimonial">Testimonial</a>
							</li>
						</ul>
					</div>
					<div className="navbar-main-right">
						<p className="alumni-btn">
							<a href="#form">Explore More</a>
						</p>
					</div>
					<div className="bars">
						<MenuIcon />
					</div>
				</div>
			</div>
		</>
	);
}
