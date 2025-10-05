"use client";

import React from 'react';
import Blogs from '@/components/blogs/Blogs';

const BlogPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 pt-24">
            <Blogs />
        </div>
    );
};

export default BlogPage;

