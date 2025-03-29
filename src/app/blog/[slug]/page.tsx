import { AnimationContainer, BlogDetailSection } from '@/components';
import { getBlogDetails } from '@/graphql';
import { BlogProps } from '@/types';
import React from 'react'

interface Props {
    params: {
        slug: string;
    }
}

const Blog = async ({ params }: any) => {

    const { slug } = params;

    const data: BlogProps = await getBlogDetails(slug);

    return (
        <main className="relative flex flex-col items-center justify-center w-full overflow-hidden">
            <BlogDetailSection data={data} />
        </main>
    )
};

export default Blog
