import React from 'react'

import { PostMasonry, PostGrid, MasonryPost } from '../components/common';
import { featured } from '../assets/mocks/featured';
import { trending } from '../assets/mocks/trending';

const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3',
    }
}

const featuredConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },
    1: {
        height: '300px'
    },
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px',
    }
}

const mergeStyles = function (posts, config){
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'Takahiko Igaue'
        post.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.'
    })
}

const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(featured, featuredConfig)
mergeStyles(trending, trendingConfig)

const lastPost = featured.pop()

const Home = () => {
    return (
        <div className="home">
            <section className="container">
                <div className="row">
                    <section className="featured-post-container">
                        <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
                        <MasonryPost post={lastPost} tagsOnTop={true} />
                    </section>
                    <section className="bg-white">
                        <section className="container">
                            <div className="row">
                                <h1>Recent Posts</h1>
                                <PostGrid posts={recentPosts} />
                            </div>
                        </section>
                    </section>
                    <section className="container">
                        <div className="row">
                            <PostMasonry posts={trending} columns={3} />
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Home
