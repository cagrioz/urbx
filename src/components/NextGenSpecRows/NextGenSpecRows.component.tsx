import classNames from 'classnames';

export interface NextGenSpecRow {
    header: string;
    text: string;
    headerColor?: string;
    textColor?: string;
    borderColor?: string;
}

export interface NextGenSpecRowsProps {
    rows: NextGenSpecRow[];
    headerColor?: string;
    textColor?: string;
    borderColor?: string;
    className?: string;
}

export default function NextGenSpecRows({
    rows,
    headerColor = 'rgba(255,255,255,0.6)',
    textColor = '#FFFFFF',
    borderColor = 'rgba(255,255,255,0.22)',
    className,
}: NextGenSpecRowsProps) {
    return (
        <div className={classNames('w-full tablet:w-[clamp(340px,44vw,480px)] desktop:w-[480px]', className)}>
            {rows.map((row, index) => {
                const isLastRow = index === rows.length - 1;
                const resolvedHeaderColor = row.headerColor ?? headerColor;
                const resolvedTextColor = row.textColor ?? textColor;
                const resolvedBorderColor = row.borderColor ?? borderColor;

                return (
                    <div
                        key={`${row.header}-${row.text}-${index}`}
                        className={classNames('grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 py-1.5', {
                            'border-b border-dashed': !isLastRow,
                        })}
                        style={!isLastRow ? { borderColor: resolvedBorderColor } : undefined}
                    >
                        <span
                            className="font-general-sans text-[14px] font-medium leading-[1.4] tracking-[-0.01em]"
                            style={{ color: resolvedHeaderColor }}
                        >
                            {row.header}
                        </span>
                        <span
                            className="whitespace-nowrap text-right font-ibm-mono text-[14px] font-medium leading-[1.4] tracking-[-0.0312em]"
                            style={{ color: resolvedTextColor }}
                        >
                            {row.text}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
