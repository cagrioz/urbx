import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import PartnerPage from '@/templates/PartnerPage.template';

type PageProps = {
    params: { partner: string };
};

export default async function Page({ params }: PageProps) {
    const { partner } = params;

    try {
        // Build the path to the content file dynamically
        const contentPath = path.join(process.cwd(), 'src', 'contents', 'partner', `${partner}.ts`);

        if (!fs.existsSync(contentPath)) {
            return notFound(); // Return 404 if the content file doesn't exist
        }

        // Dynamically import the content module
        const contentModule: any = await import(`../../../contents/partner/${partner}.ts`).then((mod) => mod.default);

        // Render the content with the ProductPage component
        return <PartnerPage {...contentModule} />;
    } catch (error) {
        console.error('Error loading content:', error);
        return notFound();
    }
}
