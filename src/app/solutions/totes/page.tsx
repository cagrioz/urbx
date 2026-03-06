import { ComingSoonFooter } from '@/components/ComingSoon';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';
import ToteBackdrop from '@/assets/version2/tote-gripper.png';
import ToteHandlingCapacityBackdrop from '@/assets/version2/tote-handling-capacity.png';
import DynamicToteHeightBackdrop from '@/assets/version2/dynamic-tote-height.png';

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
                    image={ToteBackdrop}
                    imageAlt="URBX tote handling capacity"
                    title="Tote Handling Capacity"
                    description="Industry-leading payload capacity enables the handling of a diverse range of goods"

                />  
            </main>
            <ComingSoonFooter />
        </>
    );
}
