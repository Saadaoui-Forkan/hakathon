
type ProgressBarProps = {
    total: number;
    value: number;
}

export default function ProgressBar({ total, value }: ProgressBarProps) {
    return (
        <div className='flex gap-2 items-center'>
            <div className='h-2 rounded-full w-full bg-pureWhite'>
                <div
                    className='bg-crystalTeal h-2 rounded-full'
                    style={{ width: `${(value / total) * 100}%` }}
                />
            </div>
            <span className='text-pureWhite text-nowrap'>{value} / {total}</span>
        </div>
    )
};
