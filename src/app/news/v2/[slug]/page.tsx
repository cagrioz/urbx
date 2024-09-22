import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function PostPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    // Load posts metadata from the JSON file
    const postsFilePath = path.join(process.cwd(), 'src', 'posts.json');
    const allPosts = JSON.parse(fs.readFileSync(postsFilePath, 'utf-8'));

    // Find the post that matches the slug
    const post = allPosts.find((post: { slug: string }) => post.slug === slug);

    // If the post doesn't exist, return 404
    if (!post) {
        return notFound();
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <Image src={post.image} alt={post.title} width={600} height={300} />
            {/* If you want to display more content from the post */}
            {/* <p>{post.content}</p> */}
        </div>
    );
}
