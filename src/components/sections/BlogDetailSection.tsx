import { BlogProps } from '@/types';
import BlogDetails from '../utils/BlogDetails';
import { Wrapper } from '../wrapper';

interface Props {
    data: BlogProps;
}

const BlogDetailSection = ({ data: blog }: Props) => {
    return (
        <Wrapper>
            <div className="flex flex-col items-start w-full px-2 md:px-4 py-20">
                <BlogDetails blog={blog} />
            </div>
        </Wrapper>
    )
};

export default BlogDetailSection
