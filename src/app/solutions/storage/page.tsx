import { ComingSoonFooter } from '@/components/ComingSoon';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';
import StorageHeroBackdrop from '@/assets/version2/storage_hero.png';
import AislesBackdrop from '@/assets/version2/aisles.png';
import ServiceabilityBackdrop from '@/assets/version2/serviceability.png';
import StorageAdaptiveNetworkBackdrop from '@/assets/version2/storage_adaptive_network.png';

 
const aislesMetrics = [
    { value: '3x', unit: 'Density' },
    { value: '1/3', unit: 'Space' },
];

const infillsMetrics = [
    { value: '4x', unit: 'Density' },
    { value: '1/3', unit: 'Space' },
];

const serviceabilityRows = [
    { header: 'ROBOTIC PICKING', text: '1,000-2,000 PPH' },
    { header: 'HUMAN PICKING', text: '500-1,000 PPH' },
    { header: 'CONFIGURATION', text: 'CASE & TOTE COMPATIBLE' },
];

const storageRackSpecsRows = [
    { header: 'SYSTEM HEIGHT', text: '20 to 120 ft (site dependent)' },
    { header: 'AISLE CONFIGURATION', text: '151.2 liter' },
    { header: 'INFILL CONFIGURATION', text: 'Up to 60 lb' },
    { header: 'MODULAR', text: 'Up to 4 m/s' },
    { header: 'POWER', text: '48 volts' },
    { header: 'CONTROLS', text: 'EtherCAT / Beckhoff-ready' },
];

const adaptiveVerticalNetworkDescription = (
    <>
        A core differentiator of URBX is its ability to handle cases without the need for trays- a concept we define as{' '}
        <span className="text-[#0F2036]">"case-as-a-tote."</span> This capability is
        designed to eliminate the decanting process for cases that are adequately packaged for direct handling. This
        innovation has the potential to significantly transform operational efficiency.
    </>
);

export default function StoragePage() {
    return (
        <>
            <main className="-mb-[32px] bg-[#07090C] text-white">
                <NextGenMediaShowcase
                    hasBottomRadius={true}
                    showNavigation={true}
                    image={StorageHeroBackdrop}
                    imageAlt="URBX warehouse storage system"
                    title="Warehouse Storage Reimagined"
                    description="Engineered for maximum density, unmatched reliability, and effortless scalability."
                    action={{ href: '#aisles', variant: 'icon', ariaLabel: 'Scroll to Aisles section' }}
                />
                <NextGenMediaShowcase
                    id="aisles"
                    className="scroll-mt-20 tablet:scroll-mt-24 desktop:scroll-mt-28"
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={AislesBackdrop}
                    imageAlt="URBX warehouse aisles system"
                    title="Aisles"
                    description="Industry-leading payload capacity enables handling of diverse range of goods."
                    titleColor="#000000"
                    descriptionColor="rgba(86, 86, 86, 0.6)"
                    metrics={aislesMetrics}
                />
                <NextGenMediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={AislesBackdrop}
                    imageAlt="URBX warehouse infills system"
                    title="Infills"
                    description="Industry-leading payload capacity enables handling of diverse range of goods."
                    titleColor="#000000"
                    descriptionColor="rgba(86, 86, 86, 0.6)"
                    metrics={infillsMetrics}
                />
                <NextGenMediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={ServiceabilityBackdrop}
                    imageAlt="URBX warehouse serviceability system"
                    title="Serviceability"
                    description="Industry-leading payload capacity enables handling of diverse range of goods."
                    specRows={serviceabilityRows}
                />
                <NextGenMediaShowcase
                    className="pb-[32px]"
                    hasBottomRadius={false}
                    showNavigation={false}
                    showBottomOverlay={false}
                    image={StorageAdaptiveNetworkBackdrop}
                    imageAlt="URBX adaptive vertical network"
                    mediaClassName="object-contain object-left-bottom"
                    title="The Adaptive Vertical Network"
                    description=""
                    descriptionContent={adaptiveVerticalNetworkDescription}
                    textHorizontalPosition="right"
                    specRows={storageRackSpecsRows}
                    specRowsPlacement="top"
                    specRowsClassName="max-w-none tablet:w-full desktop:w-full"
                    specHeading="STORAGE RACK SPECS LIST"
                />
            </main>
            <ComingSoonFooter />
        </>
    );
}
