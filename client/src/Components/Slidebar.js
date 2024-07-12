import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaBook } from 'react-icons/fa';
import { Sidebar } from 'flowbite-react';
import { MdOutlinePictureAsPdf } from 'react-icons/md';
import { FaBookOpen } from 'react-icons/fa6';
import { MdSupportAgent } from 'react-icons/md';
import '../css/Slidebar.css';
import Logo from './Logo';

export default function Slidebar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <motion.div
            className="sidebar"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
        >
            <button className="sidebar-toggle-button" onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? 'Expand' : 'Collapse'}
            </button>

            <Sidebar aria-label="Sidebar" collapsed={collapsed} className="sidebar">
                <Logo />
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Link to="/">
                            <Sidebar.Item icon={FaHome}>
                                <span className="sidebar-icon"></span>
                                Home
                            </Sidebar.Item>
                        </Link>
                        <Link to="/assignments">
                            <Sidebar.Item icon={FaBook}>
                                <span className="sidebar-icon"></span>
                                Assignments
                            </Sidebar.Item>
                        </Link>
                        <Link to="/upcoming-slots">
                            <Sidebar.Item icon={FaBookOpen}>
                                <span className="sidebar-icon"></span>
                                Upcoming Slots
                            </Sidebar.Item>
                        </Link>
                        <Link to="/user-guide">
                            <Sidebar.Item icon={MdOutlinePictureAsPdf}>
                                <span className="sidebar-icon"></span>
                                Read User Guide
                            </Sidebar.Item>
                        </Link>
                        <Link to="/contact-support">
                            <Sidebar.Item icon={MdSupportAgent}>
                                <span className="sidebar-icon"></span>
                                Contact Support
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </motion.div>
    );
}
