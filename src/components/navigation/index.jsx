import React, { useEffect, useState } from 'react';
import { Container } from '../../styles/grid';
import Nav, { Content, ButtonMobile, Menu } from './styles';
import brand from '../../assets/images/victor.svg';

const menu = [
    {
        name: 'Home',
        link: '#!',
    },
    {
        name: 'Sobre',
        link: '#!',
    },
    {
        name: 'Skills',
        link: '#!',
    },
    {
        name: 'Portfólios',
        link: '#!',
    },
    {
        name: 'Serviços',
        link: '#!',
    },
    {
        name: 'Contato',
        link: '#!',
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
                                <a href={item.link} className="link">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </Menu>
                </Content>
            </Container>
        </Nav>
    );
}
