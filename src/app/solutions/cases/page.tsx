import { ComingSoonFooter } from '@/components/ComingSoon';
import NextGenMediaShowcase from '@/components/NextGenMediaShowcase';
import CasesHeroBackdrop from '@/assets/version2/cases_hero.png';
import CaseHandlingCapacityBackdrop from '@/assets/version2/case_handling_capacity.png';
import CaseSequencingBackdrop from '@/assets/version2/vertical_storage.png';
import CasePalletizingBackdrop from '@/assets/version2/automated_palletizing.png';
import CaseHandlerFlexibleOperationsBackdrop from '@/assets/version2/case_gripper.png';

const caseHandlingMetrics = [
    { value: 60, unit: 'lbs' },
    { value: 27, unit: 'kg' },
];

const caseGripperSpeedMetrics = [
    { value: 4, unit: 'm/s²' },
    { value: 6, unit: 'm/s' },
];

const casePalletizingMetrics = [
    { value: 1, unit: 'System', valueColor: '#FFFFFF', unitColor: '#CDCDCD' },
    { value: 2, unit: 'Robots', valueColor: '#FFFFFF', unitColor: '#CDCDCD' },
];

const caseSequencingRows = [
    { header: 'CASE SIZES', text: '151.2 liter' },
    { header: 'PAYLOAD', text: 'Up to 60 lb' },
    { header: 'POWER', text: '48 Volts' },
];

const caseHandlerSpecsRows = [
    { header: 'CASE FOOTPRINT', text: '151.2 liter' },
    { header: 'PAYLOAD', text: 'Up to 60 lb' },
    { header: 'HORIZONTAL SPEED', text: 'Up to 4 m/s' },
    { header: 'POWER', text: '48 volts' },
    { header: 'CONTROLS', text: 'EtherCAT / Beckhoff-ready' },
];

export default function CasesPage() {
    return (
        <>
            <main className="bg-[#07090C] text-white">
                <NextGenMediaShowcase
                    className="z-[1] -mb-[32px]"
                    hasBottomRadius={true}
                    showNavigation={true}
                    image={CasesHeroBackdrop}
                    imageAlt="URBX high-performance case gripper"
                    title="High-Performance Case Gripper"
                    description="Precision grip technology engineered for reliable, high-speed case handling across diverse product types."
                    action={{ href: '#case-handling-capacity', variant: 'icon', ariaLabel: 'Scroll to Case Handling Capacity section' }}
                />
                <NextGenMediaShowcase
                    id="case-handling-capacity"
                    className="scroll-mt-20 tablet:scroll-mt-24 desktop:scroll-mt-28 pt-[32px]"
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={CaseHandlingCapacityBackdrop}
                    imageAlt="URBX case handling capacity"
                    title="Case Handling Capacity"
                    description="High-performance case gripper secures various case sizes up to 60 lbs, eliminating manual decanting processes."
                    titleColor="#000000"
                    descriptionColor="rgba(86, 86, 86, 0.6)"
                    metrics={caseHandlingMetrics}
                />
                <NextGenMediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={CaseHandlingCapacityBackdrop}
                    imageAlt="URBX case gripper speed"
                    title="Case Gripper Speed"
                    description="High-speed operations enable high throughput, allowing your business to scale without additional infrastructure"
                    titleColor="#000000"
                    descriptionColor="rgba(86, 86, 86, 0.6)"
                    metrics={caseGripperSpeedMetrics}
                />
                <NextGenMediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={CaseSequencingBackdrop}
                    imageAlt="URBX case sequencing"
                    title="Case Sequencing"
                    description="Dual-bot system with direct case handling enables in-system case sequencing"
                    specRows={caseSequencingRows}
                />
                <NextGenMediaShowcase
                    hasBottomRadius={false}
                    showNavigation={false}
                    image={CasePalletizingBackdrop}
                    imageAlt="URBX automated palletizing"
                    title="Automated Palletizing"
                    description="Vertical architecture enables direct palletization from storage—eliminating costly buffer systems and manual touchpoints from storage to shipment"
                    metrics={casePalletizingMetrics}
                />
                <NextGenMediaShowcase
                    className="pb-[32px]"
                    hasBottomRadius={false}
                    showNavigation={false}
                    showBottomOverlay={false}
                    image={CaseHandlerFlexibleOperationsBackdrop}
                    imageAlt="URBX case gripper flexible operations"
                    mediaClassName="object-contain object-left-bottom"
                    title="Case Gripper For Flexible Operations"
                    description="Direct case handling eliminates costly tray requirements and decanting operations. By treating cases as native storage units, we remove material handling steps that slow competitors' systems and increase labor costs."
                    textHorizontalPosition="right"
                    specRows={caseHandlerSpecsRows}
                    specRowsPlacement="top"
                    specRowsClassName="max-w-none tablet:w-full desktop:w-full"
                    specHeading="CASE HANDLER SPECS LIST"
                    specTextColor="#FFFFFF"
                />
            </main>
            <ComingSoonFooter />
        </>
    );
}
