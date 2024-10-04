import { notFound } from 'next/navigation';

import SinglePostPage from '@/templates/SinglePostPage.template';
import { allPosts } from '@/posts';

export default async function PostPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    // Find the post that matches the slug
    const post = allPosts.find((post) => post.slug === slug);

    // If the post doesn't exist, return 404
    if (!post) {
        return notFound();
    }

    return <SinglePostPage {...post} />;
}
