import { useState } from 'react'
import { Link } from 'react-router-dom'

const BlogsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const categories = ['All', 'Backend Development', 'Frontend Development', 'Security', 'Artificial Intelligence', 'DevOps']

    const blogPosts = [
        {
            image: "/blog-1.jpg",
            title: "Building Scalable Web Applications with Spring Boot",
            category: "Backend Development",
            date: "Nov 15, 2024",
            author: "Buddhi Withanage",
            excerpt: "Learn how to build robust and scalable web applications using Spring Boot framework with best practices and modern architecture patterns. This comprehensive guide covers everything from project setup to deployment.",
            readTime: "5 min read",
            tags: ["Spring Boot", "Java", "Backend"]
        },
        {
            image: "/blog-2.jpg",
            title: "Modern Frontend Development with React",
            category: "Frontend Development",
            date: "Nov 10, 2024",
            author: "Buddhi Withanage",
            excerpt: "Explore the latest trends and techniques in React development, including hooks, context API, and performance optimization strategies. Master the art of building beautiful and performant user interfaces.",
            readTime: "7 min read",
            tags: ["React", "JavaScript", "Frontend"]
        },
        {
            image: "/blog-3.jpg",
            title: "Securing Your Applications: Best Practices",
            category: "Security",
            date: "Nov 5, 2024",
            author: "Buddhi Withanage",
            excerpt: "Comprehensive guide to application security covering authentication, authorization, data encryption, and common vulnerability prevention. Learn how to protect your applications from modern threats.",
            readTime: "6 min read",
            tags: ["Security", "Authentication", "Best Practices"]
        },
        {
            image: "/blog-4.jpg",
            title: "AI and Machine Learning in Modern Apps",
            category: "Artificial Intelligence",
            date: "Oct 28, 2024",
            author: "Buddhi Withanage",
            excerpt: "Discover how to integrate AI and machine learning capabilities into your applications using Spring AI and modern ML frameworks. Build intelligent applications that learn and adapt.",
            readTime: "8 min read",
            tags: ["AI", "Machine Learning", "Spring AI"]
        },
        {
            image: "/blog-5.jpg",
            title: "Microservices Architecture Patterns",
            category: "Backend Development",
            date: "Oct 20, 2024",
            author: "Buddhi Withanage",
            excerpt: "Deep dive into microservices architecture patterns, service discovery, API gateways, and distributed system design. Learn how to build scalable and maintainable microservices.",
            readTime: "10 min read",
            tags: ["Microservices", "Architecture", "Distributed Systems"]
        },
        {
            image: "/blog-6.jpg",
            title: "DevOps Best Practices for Modern Teams",
            category: "DevOps",
            date: "Oct 15, 2024",
            author: "Buddhi Withanage",
            excerpt: "Essential DevOps practices including CI/CD pipelines, containerization with Docker, orchestration with Kubernetes, and infrastructure as code. Streamline your development workflow.",
            readTime: "9 min read",
            tags: ["DevOps", "CI/CD", "Docker", "Kubernetes"]
        }
    ]

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory)

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            {/* Header */}
            <header className="py-20 px-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        My Blog
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Insights, tutorials, and thoughts on software development, technology, and innovation
                    </p>
                </div>
            </header>

            {/* Category Filter */}
            <div className="container mx-auto px-6 mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === category
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <article
                            key={index}
                            className="group relative overflow-hidden rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2"
                        >
                            {/* Blog Image */}
                            <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                                <div className="w-full h-full flex items-center justify-center">
                                    <svg className="w-20 h-20 text-purple-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Blog Content */}
                            <div className="p-6">
                                {/* Category & Date */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-purple-400 text-xs font-semibold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-500 text-xs">
                                        {post.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors duration-300">
                                    {post.title}
                                </h2>

                                {/* Author */}
                                <p className="text-gray-500 text-sm mb-3">
                                    By {post.author}
                                </p>

                                {/* Excerpt */}
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Read More & Read Time */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                                    <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors duration-300 flex items-center gap-2">
                                        Read More
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                    <span className="text-gray-500 text-xs">
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* No Results */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No blog posts found in this category.</p>
                    </div>
                )}
            </div>

            {/* Back to Home Button */}
            <div className="container mx-auto px-6 pb-20 text-center">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>
            </div>
        </div>
    )
}

export default BlogsPage
