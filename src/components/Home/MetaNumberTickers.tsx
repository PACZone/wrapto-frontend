import { getStats, StatsResponseT } from "api/services/Stats";
import MetaNumberTicker from "./MetaNumberTicker";
import { useEffect, useState } from "react";
import Spinner from "components/shared/Spinner";
const metaDataMap: Record<string, string> = {
    total_successful_bridges: "Total Successful Bridges",
    total_wpacs: "Total WPAC",
    total_locked_pacs: "Total Locked PAC",
};

const MetaNumberTickers = () => {
    const [data, setData] = useState<StatsResponseT>();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true);
            try {
                const res = await getStats();
                setData(res.data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetch();
    }, []);

    const metaData =
        data &&
        Object.entries(data).map(([key, value]) => ({
            value,
            label: metaDataMap[key] || key,
        }));
    return (
        <section className="flex flex-col md:flex-row gap-sp4 justify-center pb-[200px] max-w-[1186px] mx-auto">
            {isLoading ? (
                <div className="flex py-sp11  justify-center">
                    <Spinner />
                </div>
            ) : (
                data &&
                metaData?.map((meta, index) => (
                    <MetaNumberTicker key={meta.value + index} {...meta} />
                ))
            )}
        </section>
    );
};

export default MetaNumberTickers;
