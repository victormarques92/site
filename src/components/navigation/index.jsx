import React, { useEffect, useState } from 'react';
import brand from '../../assets/images/victor.svg';
import { Container } from '../../styles';
import Nav, { Content, ButtonMobile, Menu } from './styles';

const menu = [
    {
        name: 'Home',
        link: 'hero',
    },
    {
        name: 'Sobre',
        link: 'about',
    },
    {
        name: 'Portfólios',
        link: 'portfolios',
    },
    {
        name: 'Serviços',
        link: 'services',
    },
    {
        name: 'Contato',
        link: 'contact',
    },
];

export default function Navigation() {
    const [openMenu, setOpenMenu] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        getScrollTop();
    }, [scrollTop]);

    function getScrollTop() {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener('scroll', onScroll);
    }

    const handleAnchor = anchor => {
        let section = document.getElementById(anchor);

        section.scrollIntoView({ block: 'start', behavior: 'smooth' });
        setOpenMenu(false);
    };

    return (
        <Nav shadow={scrollTop > 50}>
            <Container>
                <Content>
                    <a href="/" className="brand">
                        <img src={brand} alt="Victor Marques" />
                    </a>

                    <ButtonMobile onClick={() => setOpenMenu(!openMenu)}>
                        {openMenu ? 'Close Menu' : 'Open Menu'}
                    </ButtonMobile>

                    <Menu open={openMenu}>
                        {menu.map((item, index) => (
                            <li key={index} className="item">
                                <button
                                    onClick={() => handleAnchor(item.link)}
                                    className="link"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </Menu>
                </Content>
            </Container>
        </Nav>
    );
}
