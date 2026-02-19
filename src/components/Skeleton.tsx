
type SkeletonProps = {
    className?: string;
    width?: string | number;
    height?: string | number;
    variant?: 'rect' | 'circle';
};

export function Skeleton({ className = '', width, height, variant = 'rect' }: SkeletonProps) {
    const style = {
        width,
        height,
    };

    const baseClasses = "animate-shimmer bg-gray-200 border-2 border-transparent";
    const variantClasses = variant === 'circle' ? 'rounded-full' : 'rounded-xl';

    return (
        <div
            className={`${baseClasses} ${variantClasses} ${className}`}
            style={style}
            aria-hidden="true"
        />
    );
}
