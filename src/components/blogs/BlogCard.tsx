import { Blog } from '../../types';

interface BlogCardProps {
    blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <div className="group flex flex-col gap-y-4 p-4 bg-gray-100 dark:bg-gray-veryDark border dark:border-gray-dark rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:w-1/2 lg:w-1/3 max-w-xs">
            <div className="overflow-hidden rounded-t-lg">
                <img
                    src={blog.image || '/assets/default-image.jpg'}
                    alt={blog.alt || blog.title || 'Imagen del blog'}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                {blog.excerpt}
            </p>
            <a
                href={`/blog/${blog.slug}`}
                aria-label={`Leer más sobre ${blog.title}`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 self-end transition-colors duration-200"
            >
                Leer más
            </a>
        </div>
    );
};

export default BlogCard;