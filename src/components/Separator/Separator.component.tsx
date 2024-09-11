import Image from 'next/image';
import Container from '@/components/Container';
import SeparatorLine from '@/assets/separator.png';
import classNames from 'classnames';

export interface SeperatorProps {
    noPadding: boolean;
}

export default function Seperator({ noPadding }: SeperatorProps) {
    return (
        <div className="bg-black">
            <Container>
                <Image
                    src={SeparatorLine}
                    alt="Seperator Line"
                    className={classNames({
                        'pt-6 pb-12 laptop:pt-12 laptop:pb-20': !noPadding,
                    })}
                />
            </Container>
        </div>
    );
}
