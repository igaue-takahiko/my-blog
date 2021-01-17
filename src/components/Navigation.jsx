import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import MyImage from '../assets/images/my-Image.jpeg';

const navLinks = [
    {
        title: 'Blog',
        path: '/'
    },{
        title: 'Web Dev',
        path: '/web-dev'
    },
    {
        title: 'Cloud',
        path: '/cloud'
    },
    {
        title: 'Algorithms',
        path: '/algorithms'
    },
    {
        title: 'Brain Hacking',
        path: '/health'
    },
    {
        title: 'Login',
        path: '/login'
    },
    {
        title: 'Post Viewer',
        path: '/post'
    },
]

const Navigation = () => {
    const [ menuAction, setMenuAction ] = useState(false)

    return (
        <nav className={`site-navigation ${menuAction && "active"}`} role="navigation">
            <Link className="menu-title"to="/" >T.i Blog</Link>
            <div className="menu-content-container">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className="menu-avatar-container">
                    <Avatar size={50} src={MyImage} />
                    <span className="menu-avatar-name">Takahiko Igaue</span>
                </div>
            </div>
            <i
                className="icon ion-icons ion-ios-menu"
                onClick={e => setMenuAction(!menuAction)}
            />
        </nav>
    )
}

export default Navigation
