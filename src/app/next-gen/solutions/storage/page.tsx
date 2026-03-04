import { ComingSoonFooter } from '@/components/ComingSoon';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';
import StorageBackdrop from '@/assets/3d_storage_system.png';

export default function NextGenStoragePage() {
    return (
        <>
            <main className="min-h-screen bg-[#07090C] text-white">
                <NextGenMediaShowcase
                    image={StorageBackdrop}
                    imageAlt="URBX vertical storage grid"
                    title="Warehouse Storage Intelligence"
                    description="A high-density storage architecture that scales upward while preserving access speed, reliability, and operational flexibility."
                    action={{ href: '#', variant: 'icon', ariaLabel: 'Open storage page video preview' }}
                />
            </main>
            <ComingSoonFooter />
        </>
    );
}
