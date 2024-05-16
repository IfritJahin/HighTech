import React from 'react'
import Link from 'next/link';
const NavBar = () => {
    const links = [
        { name: 'Home', href: '/' },
        {
            name: 'About',
            href: '/dashboard/about',
        },
        { name: 'Services', href: '/dashboard/service' },
        { name: 'Projects', href: '/dashboard/project' },

    ];

    return (
        <div>
            <>
                {links.map((link) => {

                    return (
                        <a className='navbar navbar-dark navbar-expand-lg py-0'
                            key={link.name}
                            href={link.href}

                            style={{ height: '60px' }}
                        >

                            <p >{link.name}</p>
                        </a>
                    );
                })}
            </>


        </div>
    )
}

export default NavBar

