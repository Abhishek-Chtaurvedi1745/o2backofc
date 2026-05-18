import React, { useState, useEffect } from 'react';
import { NavDropdown, Button, Container, Nav, Navbar, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import outSourcelogo from '../../../public/Image/outsource2backoffice.png';
import Phone from '../../../public/Image/phone.png';
import dropDownData from './Header.json';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Header.css';
import ButtonComponent from '../whatsappbutton/Button';

export default function Header() {
    const [isDropDown, setDropDown] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [filteredServices, setFilteredServices] = useState([]);

    const toggleDropDown = () => {
        setDropDown(prev => !prev);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setMobileMenuOpen(false);
        setDropDown(false);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        setShowResults(true);

        const filtered = dropDownData.filter(service =>
            service.text.toLowerCase().includes(query)
        );
        setFilteredServices(filtered);
    };

    const handleServiceClick = (link) => {
        navigate(link);
        setSearchQuery('');
        setShowResults(false);
    };

    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.search-container')) {
                setShowResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Reset search when location changes
    useEffect(() => {
        setSearchQuery('');
        setShowResults(false);
    }, [location]);

    return (
        <Navbar expand="lg" className="flex-column p-0 fixed-top">
            {/* Top header */}
            <Container fluid className="bg-light">
    <div className="container-fluid py-2 py-md-3">
        <div className="d-flex align-items-center justify-content-between gap-2">
            {/* Logo */}
            <div className="text-center text-sm-start">
                <Navbar.Brand as={Link} to="/">
                    <img 
                        src={outSourcelogo} 
                        alt="Outsource Logo" 
                        className="img-fluid navbar-brand-logo"// Contain logo size
                    />
                </Navbar.Brand>
            </div>

            {/* Search Container */}
            <div className="d-none d-md-flex col-md-5 position-relative search-container">
                <Form className="w-100">
                    <Form.Control
                        type="search"
                        placeholder="Search services..."
                        className="search-input-filed form-control"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onClick={() => setShowResults(true)}
                    />
                    
                    {/* Search Results Dropdown */}
                    {showResults && searchQuery && (
                        <div className="position-absolute w-100 mt-2 bg-white rounded shadow-sm search-results">
                            {filteredServices.length > 0 ? (
                                <ul className="list-unstyled mb-0">
                                    {filteredServices.map((service, index) => (
                                        <li 
                                            key={index}
                                            className="px-3 py-2 search-result-item"
                                            onClick={() => handleServiceClick(service.link)}
                                        >
                                            {service.text}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="px-3 py-2 text-muted">
                                    No services found
                                </div>
                            )}
                        </div>
                    )}
                </Form>
            </div>

            {/* Button */}
            <div className="text-center text-sm-end d-md-block">
                <ButtonComponent 
                    btnName="Free Consultation" 
                    btnClassName="for-header-button"
                />
            </div>

            {/* Mobile Menu Button */}
            <div className="d-md-none">
                <Button 
                    onClick={toggleMobileMenu} 
                    aria-controls="mobile-nav-items"
                    aria-expanded={isMobileMenuOpen}
                    className="navbar-toggler"
                >
                    <span className="navbar-toggler-icon"></span>
                </Button>
            </div>
        </div>
    </div>
</Container>

           

            {/* Main Navbar for large screens */}
            <Container fluid className='header d-sm-flex d-none justify-content-center align-items-center p-0'>
                <Navbar.Brand as={Link} to="/" className="d-sm-none">
                    <img src={outSourcelogo} alt="" style={{ height: "50px", width: "100%", objectFit: "contain" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className='navbar-toggle d-sm-none' />
                <Navbar.Collapse id="navbarScroll" className='navbar-scroll'>
                    <Nav className="mx-auto p-0 d-flex align-items-center gap-1 gap-lg-4 gap-xl-4 ga-md-4 navbar-header justify-content-center">
                        <Nav.Link as={Link} to="/" onClick={toggleMobileMenu}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={toggleMobileMenu}>About Company</Nav.Link>
                        <NavDropdown title={<span style={{ color: "#FE5A0E" }}>Our Services</span>} id="nav-dropdown" className='d-block'>
                            {dropDownData.map((item, index) => (
                                <NavDropdown.Item key={index} as={Link} to={item.link} className='drop-down-item' onClick={toggleMobileMenu}>{item.text}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link as={Link} to="/how-it-works" onClick={toggleMobileMenu}>How it Works</Nav.Link>
                        <Nav.Link as={Link} to="/blog" onClick={toggleMobileMenu}>Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/contact-us" onClick={toggleMobileMenu}>Reach Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            {/* Mobile Navbar */}
           
            
            {/* Mobile menu items */}
            <div 
                id="mobile-nav-items" 
                className={`d-sm-none ${isMobileMenuOpen ? 'd-block' : 'd-none'}`}
                style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    zIndex: 1000,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
            >
                <Nav className="flex-column py-2 px-3 mobile-nav-link">
                    <Nav.Link onClick={() => handleNavigation('/')}>Home</Nav.Link>
                    <Nav.Link onClick={() => handleNavigation('/about')}>About Company</Nav.Link>
                    <div onClick={toggleDropDown} style={{ cursor: 'pointer' }} >
                        <span className='ourserv-span'>
                            Our Services {isDropDown ? <FaChevronUp  /> : <FaChevronDown />}
                        </span>
                    </div>
                    {isDropDown && (
                        <div className='ps-3 dropdown'>
                            {dropDownData.map((item, index) => (
                                <NavDropdown.Item key={index} onClick={() =>
                                     handleNavigation(item.link)} className='dropdown-item'>{item.text}</NavDropdown.Item>
                            ))}
                        </div>
                    )}
                    <Nav.Link onClick={() => handleNavigation('/how-it-works')}>How it Works</Nav.Link>
                    <Nav.Link onClick={() => handleNavigation('/blog')}>Blogs</Nav.Link>
                    <Nav.Link onClick={() => handleNavigation('/contact-us')}>Reach Us</Nav.Link>
                </Nav>
            </div>
        </Navbar>
    );
}