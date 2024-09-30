import banner_header from 'assets/AlphaBooks_Silver_Header_1263x60.webp';

import logo from 'assets/fahasa-logo.webp';
import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { IoIosSearch } from 'react-icons/io';
import { FaCartPlus } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const timeoutRef = useRef(null);

    const handleMouseEnterMenu = () => {
        clearTimeout(timeoutRef.current); // Huỷ timeout nếu có
        setShowDropdown(true);
    };

    const handleMouseLeaveMenu = () => {
        timeoutRef.current = setTimeout(() => {
            setShowDropdown(false);
            setHoveredCategory(null); 
        }, 700); 
    };

    const handleMouseEnterCategory = (category) => {
        clearTimeout(timeoutRef.current); 
        setHoveredCategory(category);
    };

    const handleMouseLeaveCategory = () => {
        timeoutRef.current = setTimeout(() => {
            setHoveredCategory(null); 
            setShowDropdown(false);
        }, 700); 
    };

    return (
        <header className="header">
            <div className="container-fluid p-0">
                {/* Banner */}
                <div className="row m-0">
                    <div className="col-12 p-0 banner_header">
                        <img src={banner_header} alt="Banner Header" className="img-fluid" />
                    </div>
                </div>

                {/* Main Header */}
                <div className="row align-items-center justify-content-between m-0 main-header">
                    {/* Logo */}
                    <div className="col-auto">
                        <a href='/'>
                            <img src={logo} alt="Fahasa Logo" className="logo-img img-fluid" />
                        </a>
                    </div>

                    {/* Icon Menu - Danh Mục Sản Phẩm */}
                    <div 
                        className="col-auto icon-wrapper position-relative" 
                        onMouseEnter={handleMouseEnterMenu} 
                        onMouseLeave={handleMouseLeaveMenu}
                    >
                        <TfiLayoutGrid2 className="menu-icon fs-3" />
                        <FaChevronDown className='menu-icon fs-5' />

                        {/* Dropdown Menu */}
                        {showDropdown && (
                            <div className="dropdown-menu-custom">
                                <ul>
                                    <li 
                                        onMouseEnter={() => handleMouseEnterCategory('category1')} 
                                        onMouseLeave={handleMouseLeaveCategory}
                                    >
                                        Danh mục sản phẩm
                                    </li>
                                    <li 
                                        onMouseEnter={() => handleMouseEnterCategory('category2')} 
                                        onMouseLeave={handleMouseLeaveCategory}
                                    >
                                        FOREIGN BOOKS
                                    </li>
                                    <li 
                                        onMouseEnter={() => handleMouseEnterCategory('category3')} 
                                        onMouseLeave={handleMouseLeaveCategory}
                                    >
                                        VPP - Dụng Cụ Học Sinh
                                    </li>
                                    <li 
                                        onMouseEnter={() => handleMouseEnterCategory('category4')} 
                                        onMouseLeave={handleMouseLeaveCategory}
                                    >
                                        Đồ Chơi
                                    </li>
                                    <li 
                                        onMouseEnter={() => handleMouseEnterCategory('category5')} 
                                        onMouseLeave={handleMouseLeaveCategory}
                                    >
                                        Làm Đẹp - Sức Khỏe
                                    </li>
                                    <li 
                                        onMouseEnter={() => handleMouseEnterCategory('category6')} 
                                        onMouseLeave={handleMouseLeaveCategory}
                                    >
                                        Hành Trang Đến Trường
                                    </li>
                                </ul>
                                {hoveredCategory && (
                <div 
                    className="hovered-category"
                    onMouseEnter={handleMouseEnterMenu} 
                    onMouseLeave={handleMouseLeaveCategory} 
                >
                    {hoveredCategory}
                </div>
            )}
                            </div>
                            
                        )}
                        
                    </div>

                    {/* Search Box */}
                    <div className="col search-box">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Trading Card Game"
                                className="form-control"
                            />
                            <button className="btn btn-danger search-button">
                                <IoIosSearch />
                            </button>
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="col-auto d-flex align-items-center icon-group">
                        <div className="icon-wrapper">
                            <a href="/cart">
                                <FaCartPlus /> Giỏ Hàng
                            </a>
                        </div>
                        <div className="icon-wrapper">
                            <a href="/profile">
                                <FaCircleUser /> Tài Khoản
                            </a>
                        </div>
                    </div>
                </div>
            </div>

     
            
        </header>
    );
};

export default Header;

