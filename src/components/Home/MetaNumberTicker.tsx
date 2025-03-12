import { NumberTicker } from "components/shared/NumberTicker";
export type MetaNumberTickerProps = {
    value: number;
    label: string;
};
const MetaNumberTicker = ({ value, label }: MetaNumberTickerProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-sp6 w-full animate-fade-up animate-delay-100">
            <div className="lg:heading-2 heading-4 text-secondary">
                <NumberTicker value={value} />
            </div>
            <p className="text-center text-primary lg:title-1 title-2 animate-fade-up animate-delay-150 capitalize">
                {label}
            </p>
        </div>
    );
};

export default MetaNumberTicker;
