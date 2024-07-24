import classNames from 'classnames';

export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className }: ContainerProps) {
    return <div className={classNames('max-w-[1120px] mx-auto', className)}>{children}</div>;
}
