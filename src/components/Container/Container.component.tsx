import classNames from 'classnames';

export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className }: ContainerProps) {
    return (
        <div
            className={classNames(
                'relative px-8 desktop:px-0 tablet:max-w-5xl laptop:max-w-[1120px] mx-auto w-full',
                className
            )}
        >
            {children}
        </div>
    );
}
