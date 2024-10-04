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
    const [hoveredCategory, setHoveredCategory] = useState('');;
    const timeoutRef = useRef(null);
    const menuCategories = {
        'Danh mục sản phẩm': ['Sản phẩm 1', 'Sản phẩm 2', 'Sản phẩm 3'],
        'FOREIGN BOOKS': ['Book 1', 'Book 2', 'Book 3'],
        'VPP - Dụng Cụ Học Sinh': ['Dụng cụ 1', 'Dụng cụ 2', 'Dụng cụ 3'],
        'Đồ Chơi': ['Đồ chơi 1', 'Đồ chơi 2', 'Đồ chơi 3'],
        'Làm Đẹp - Sức Khỏe': ['Sản phẩm làm đẹp 1', 'Sản phẩm làm đẹp 2'],
        'Hành Trang Đến Trường': ['Hành trang 1', 'Hành trang 2']
    };
    

    const handleMouseEnterMenu = () => {
        clearTimeout(timeoutRef.current);
        setShowDropdown(true);
        setHoveredCategory(Object.keys(menuCategories)[0]);
    };

    const handleMouseLeaveMenu = () => {
        timeoutRef.current = setTimeout(() => {
            setShowDropdown(false);
            setHoveredCategory('');
        }, 700); 
    };

    const handleMouseEnterCategory = (category) => {
        clearTimeout(timeoutRef.current); 
        setHoveredCategory(category); // Cập nhật danh mục được hover
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
                                    {/* Tạo danh sách các danh mục từ từ điển */}
                                    {Object.keys(menuCategories).map((menu, index) => (
                                        <li 
                                            key={index}
                                            onMouseEnter={() => handleMouseEnterCategory(menu)}
                                        >
                                            {menu}
                                        </li>
                                    ))}
                                </ul>
                                {/* Hiển thị danh mục đang hover */}
                                {hoveredCategory && (
                                    <div className="hovered-category">
                                        {menuCategories[hoveredCategory]}
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
