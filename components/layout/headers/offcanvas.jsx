import Link from 'next/link';
import logo2 from "../../../public/assets/img/REPL2.svg";
import Social from '@/components/data/social';

const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
				<div className="header__area-menubar-right-sidebar-popup-logo">
				<Link href='/'>
					<img className='logo_one' src={logo2.src} alt="logo" />
				</Link>
				</div>
				<p>We deliver unparalleled Development services,
				Setting the standard for excellence in the industry.</p>
				<div className="header__area-menubar-right-sidebar-popup-contact">
					<h4 className="mb-30">Get In Touch</h4>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-phone-alt icon-animation"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Call Now</span>
							<h6><Link href="tel:9680357978">+91 9680357978</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-envelope"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Quick Email</span>
							<h6><Link href="mailto:info.help@gmail.com">info.help@gmail.com</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							{/* <i className="fal fa-map-marker-alt"></i> */}
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							{/* <span>Office Address</span>
							<h6><Link href="https://google.com/maps" target="_blank">PV3M+X68 Welshpool United Kingdom</Link></h6> */}
						</div>
					</div>
				</div>
				<div className="header__area-menubar-right-sidebar-popup-social social__icon">
					<Social />
				</div>
			</div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;