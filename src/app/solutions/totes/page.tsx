import { ComingSoonFooter } from '@/components/ComingSoon';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';
import ToteBackdrop from '@/assets/version2/tote-gripper.png';
import ToteHandlingCapacityBackdrop from '@/assets/version2/tote-handling-capacity.png';
import DynamicToteHeightBackdrop from '@/assets/version2/dynamic-tote-height.png';
import PickStationBackdrop from '@/assets/version2/pickstation.png';
import VerticalStorageBackdrop from '@/assets/version2/vertical_storage.png';
import ProductionSystemBackdrop from '@/assets/version2/production_system.png';
import GripperSpecificationBackdrop from '@/assets/version2/gripper_specification.png';

const toteHandlingMetrics = [
    { value: 100, unit: 'lbs' },
    { value: 45, unit: 'kg' },
];

const toteGripperSpeedMetrics = [
    { value: 4, unit: 'm/s²' },
    { value: 6, unit: 'm/s' },
];

const dynamicToteHeightRowStyle = {
    headerColor: 'rgba(0,0,0,0.6)',
    textColor: '#000000',
    borderColor: 'rgba(0,0,0,0.2)',
};

const dynamicToteHeightRows = [
    { header: 'SMALL', text: '24in x 24in x 12in', ...dynamicToteHeightRowStyle },
    { header: 'MEDIUM', text: '24in x 24in x 16.5in', ...dynamicToteHeightRowStyle },
    { header: 'LARGE', text: '24in x 24in x 53in', ...dynamicToteHeightRowStyle },
];

const pickStationRows = [
    { header: 'ROBOTIC PICKING', text: '1,000-2,000 PPH' },
    { header: 'HUMAN PICKING', text: '500-1,000 PPH' },
    { header: 'CONFIGURATION', text: 'CASE & TOTE COMPATIBLE' },
];

const pickStationSlides = [
    { image: PickStationBackdrop, imageAlt: 'URBX ergonomic pick station' },
    { image: VerticalStorageBackdrop, imageAlt: 'URBX vertical storage and pick station' },
    { image: ProductionSystemBackdrop, imageAlt: 'URBX automated in-system handling' },
];

const toteHandlerSpecificationRows = [
    { header: 'TOTE FOOTPRINT', text: '600mm × 600mm double deep' },
    { header: 'PAYLOAD', text: 'Up to 100 lb' },
    { header: 'HORIZONTAL SPEED', text: 'Up to 4 m/s' },
    { header: 'POWER', text: '48 volts' },
    { header: 'CONTROLS', text: 'EtherCAT / Beckhoff-ready' },
];

export default function NextGenTotesPage() {
    return (
        <>
            <main className="bg-[#07090C] text-white">
                <NextGenMediaShowcase
                    hasBottomRadius={true}
                    showNavigation={true}
                    image={ToteBackdrop}
                    imageAlt="URBX tote gripper"
                    title="High - Performance Tote Gripper"
                    description="Reliable tote handling engineered for extended service life — reducing maintenance costs and maximizing uptime."
                    action={{ href: '#tote-handling-capacity', variant: 'icon', ariaLabel: 'Scroll to Total Handling Capacity section' }}
                />
                <NextGenMediaShowcase
                    id="tote-handling-capacity"
                    className="scroll-mt-20 tablet:scroll-mt-24 desktop:scroll-mt-28"
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={ToteHandlingCapacityBackdrop}
                    imageAlt="URBX tote handling capacity"
                    title="Tote Handling Capacity"
                    description="Industry-leading payload capacity enables the handling of a diverse range of goods"
                    metrics={toteHandlingMetrics}
                />
                <NextGenMediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={ToteBackdrop}
                    imageAlt="URBX tote gripper speed"
                    title="Tote Gripper Speed"
                    description="Industry-leading speed increases throughput and accelerates fulfillment"
                    metrics={toteGripperSpeedMetrics}
                />
                <NextGenMediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={DynamicToteHeightBackdrop}
                    imageAlt="URBX dynamic tote height"
                    title="Dynamic Tote Height"
                    description="Accommodates diverse tote sizes without system reconfiguration"
                    specRows={dynamicToteHeightRows}
                />
                <NextGenMediaShowcase
                    id="pick-station"
                    className="scroll-mt-20 tablet:scroll-mt-24 desktop:scroll-mt-28"
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={PickStationBackdrop}
                    imageAlt="URBX ergonomic pick station"
                    title="Ergonomic Pick Station"
                    description="Brings cases and totes directly to operators, eliminating travel and maximizing throughput"
                    carouselSlides={pickStationSlides}
                    specRows={pickStationRows}
                />
                <NextGenMediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={GripperSpecificationBackdrop}
                    imageAlt="URBX tote gripper specification"
                    title="Tote Gripper Specification"
                    description="Tote handler engineered for speed and reliability-delivering high-throughput pick-and-place operations that scale with demand. Designed for continuous operation with minimal maintenance, enabling businesses to meet peak season requirements without additional labor or system downtime."
                    textPosition="top"
                    specHeading="TOTE HANDLER SPECIFICATIONS"
                    specRows={toteHandlerSpecificationRows}
                />
            </main>
            <ComingSoonFooter />
        </>
    );
}
