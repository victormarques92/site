import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import Nav from './styles';

export default function AdminNavigation() {
    const menu = [
        {
            name: 'Profile',
            link: '/profile',
        },
        {
            name: 'Skills',
            link: '/skills',
        },
        {
            name: 'Timeline',
            link: '/timeline',
        },
        {
            name: 'Portfólios',
            link: '/portfolios',
        },
        {
            name: 'Partners',
            link: '/partners',
        },
        {
            name: 'Services',
            link: '/services',
        },
    ];

    function handleLogout() {
        alert('Logout');
    }

    return (
        <Nav>
            <a href="/admin" className="brand">
                VM Digital
            </a>

            <ul className="menu">
                {menu.map((item, index) => (
                    <li key={index} className="item">
                        <a href={'/admin' + item.link} className="link">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>

            <button className="logout" onClick={() => handleLogout()}>
                <FiLogOut /> Sair
            </button>
        </Nav>
    );
}
