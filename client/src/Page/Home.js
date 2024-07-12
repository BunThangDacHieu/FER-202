import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'
import Slidebar from '../Components/Slidebar'
import Logo from '../Components/Logo';
import ButtonComponents from '../Components/ButtonComponents';
import ProjectCard from '../Components/ProjectCard';
const { Header, Content, Footer } = Layout;

export default function Home() {
    return (
        <div>
            <Layout className='min-h-screen'>
                <Layout style={{ display: 'flex', flex: 'row' }}>
                    <Content>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}