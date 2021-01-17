import React from 'react'
import { useRouteMatch } from 'react-router-dom';

const generatePage = (page) => {
    try {
        const Component = require(`./pages/${page}`).default
        return <Component />
    } catch (error) {
        console.warn(error);
        return ' Under Construction'
    }
}

const PageRender = () => {
    const { params: { page } } = useRouteMatch()

    return generatePage(page)
}

export default PageRender
