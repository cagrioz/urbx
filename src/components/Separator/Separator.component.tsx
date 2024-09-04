import Image from 'next/image';
import Container from '@/components/Container';
import SeparatorLine from '@/assets/separator.png';
export default function Hero() {
    return (
        <Container>
            <Image src={SeparatorLine} alt="Seperator Line" className="pt-6 pb-12 laptop:pt-12 laptop:pb-20" />
        </Container>
    );
}
