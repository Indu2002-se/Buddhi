import { useNavigate } from 'react-router-dom'

const Blogs = () => {
    const navigate = useNavigate()

    const blogPosts = [
        {
            image: "/blog-1.jpg",
            title: "Building Scalable Web Applications with Spring Boot",
            category: "Backend Development",
            date: "Nov 15, 2024",
            excerpt: "Learn how to build robust and scalable web applications using Spring Boot framework with best practices and modern architecture patterns.",
            readTime: "5 min read"
        }
    ]

    const handleViewAllBlogs = () => {
        navigate('/blogs')
    }

    return (
        <section id="blogs" className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title text-white">MY BLOGS</h2>
                    <p className="section-subtitle">
                        Sharing knowledge and insights on software development
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="flex justify-center mb-12">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 animate-fade-in-delay-${(index % 4) + 1} max-w-md w-full`}
                        >
                            {/* Blog Image */}
                            <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                                <div className="w-full h-full flex items-center justify-center">
                                    <svg className="w-16 h-16 text-purple-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors duration-300">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Read More & Read Time */}
                                <div className="flex items-center justify-between">
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
                        </div>
                    ))}
                </div>

                {/* View All Blogs Button */}
                <div className="text-center">
                    <button
                        onClick={handleViewAllBlogs}
                        className="btn-outline px-12 py-4 group"
                    >
                        VIEW ALL BLOGS
                        <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Blogs
