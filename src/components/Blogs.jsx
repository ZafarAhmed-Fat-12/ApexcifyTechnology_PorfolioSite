import React, { useState } from 'react';
import blogImage1 from '../assets/images/blog1.png';
import blogImage2 from '../assets/images/blog2.png';
import blogImage3 from '../assets/images/blog3.png';
import blogImage4 from '../assets/images/blog4.png';
const Blogs = () => {
  const [activeTab, setActiveTab] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable REST APIs with Node.js & Express",
      excerpt: "Learn how to create production-ready RESTful APIs using Node.js, Express, JWT authentication, MongoDB, and deployment strategies.",
      date: "2026-04-15",
      readTime: "10 min",
      category: "backend",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      slug: "scalable-rest-apis-node-express"
    },
    {
      id: 2,
      title: "React 18 + Tailwind CSS: Modern Frontend Architecture",
      excerpt: "Step-by-step guide to building a responsive, performant frontend with React 18 features, Tailwind CSS, and best practices for state management and component design.",
      date: "2026-04-10",
      readTime: "12 min",
      category: "frontend",
      image: blogImage1,
      slug: "react-tailwind-architecture"
    },
    {
      id: 3,
      title: "Pushing MERN Stack Apps in to GitHub repositories ",
      excerpt: "Learn how to push your MERN stack application to GitHub repositories and manage your code effectively.",
      date: "2026-03-05",
      readTime: "15 min",
      category: "devops",
      image: blogImage3,
      slug: "github-mern-stack"
    },
    {
      id: 4,
      title: "MongoDB Aggregation Pipeline Masterclass",
      excerpt: "Advanced MongoDB aggregation techniques for complex data processing, analytics, and reporting with real-world examples.",
      date: "2026-04-20",
      readTime: "10 min",
      category: "backend",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      slug: "mongodb-aggregation"
    },
    {
      id: 5,
      title: "Tailwind CSS + React: Building Responsive UI Components",
      excerpt: "Create pixel-perfect, responsive components using Tailwind CSS utility classes with React hooks and component patterns.",
      date: "2026-04-05",
      readTime: "12 min",
      category: "frontend",
      image: blogImage2,
      slug: "tailwind-react-components"
    },
    {
      id: 6,
      title: "Vercel Deployment: Full Stack App from Zero to Production",
      excerpt: "Deploy your full stack application on Vercel with seamless integration and automated deployments.",
      date: "2026-04-22",
      readTime: "18 min",
      category: "devops",
      image: blogImage4,
      slug: "vercel-fullstack-deployment"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: 6 },
    { id: 'frontend', name: 'Frontend', count: 2 },
    { id: 'backend', name: 'Backend', count: 2 },
    { id: 'devops', name: 'DevOps', count: 2 }
  ];

  const filteredPosts = activeTab === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeTab);

  return (
    <section className="py-20 bg-slate-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
            📝 Blog & Articles
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white bg-slate-700 bg-clip-text text-transparent mb-6">
            Latest Tech Insights
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Sharing my journey building scalable full stack applications, 
            modern frontend architectures, and DevOps best practices.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 lg:mb-20">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === category.id
                  ? 'bg-slate-700 text-white shadow-lg shadow-blue-500/25 transform scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-100 border border-gray-200 hover:shadow-md'
              }`}
            >
              <span>{category.name}</span>
              <span className="text-xs bg-white/30 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-100 hover:border-gray-200"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-slate-700">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Category Badge */}
              <div className="px-6 pt-6 pb-3">
                <span className={`inline-block px-4 py-2 rounded-full text-xs font-semibold ${
                  post.category === 'frontend' 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : post.category === 'backend' 
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {post.category.toUpperCase()}
                </span>
              </div>

              {/* Content */}
              <div className="px-6 pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta & CTA */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>

                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300"
                >
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 col-span-full">
            <div className="inline-flex items-center p-8 bg-gray-100 rounded-3xl mb-8">
              <svg className="w-16 h-16 text-gray-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.669c-.363 1.171-2.18 1.171-2.543 0l-.737-2.165c-.116-.346.123-.712.44-.952l2.387-1.706c.487-.35 1.046-.324 1.453.037zM10.243 7.337L11.312 6.268c.29-.289.756-.237 1.036.114l1.726 2.217a.499.499 0 01-.143.818l-1.726 2.217a.754.754 0 01-1.036.114L10.243 9.337a.752.752 0 01-.113-1.04zM14.458 16.932l-1.205 1.605c-.361.48-1.19.48-1.552 0L11.542 16.93c-.29-.289-.756-.237-1.036.114l-.832 1.07c-.363.466-2.18.466-2.543 0L7.458 16.932c-.29-.289-.756-.237-1.036.114L5.59 18.016c-.363.48-1.19.48-1.552 0L3.542 16.93c-.29-.289-.756-.237-1.036.114l-.832 1.07c-.363.466-2.18.466-2.543 0L1.458 16.932c-.29-.289-.748-.237-1.028.114L.59 18.016c-.363.48-1.19.48-1.552 0L-.458 16.93c-.29-.289-.756-.237-1.036.114L-1.83 18.07c-.363.466-2.18.466-2.543 0L-3.458 16.932c-.29-.289-.756-.237-1.036.114l-.832 1.07z" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No posts found</h3>
                <p className="text-gray-600">Try selecting a different category above.</p>
              </div>
            </div>
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="px-12 py-4 bg-slate-700 text-white font-semibold rounded-3xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;