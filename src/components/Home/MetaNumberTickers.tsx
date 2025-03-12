import { useEffect, useState } from "react";
import { getStats, StatsResponseT } from "api/services/Stats";
import MetaNumberTicker from "./MetaNumberTicker";
import Spinner from "components/shared/Spinner";

const metaDataMap: Record<keyof StatsResponseT, string> = {
    total_successful_bridges: "Total Successful Bridges",
    total_wpacs: "Total WPAC",
    total_locked_pacs: "Total Locked PAC",
};

const MetaNumberTickers = () => {
    const [data, setData] = useState<StatsResponseT | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await getStats();
                setData(res.data.data);
            } catch (error) {
                console.error("Failed to fetch stats:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const metaData =
        data &&
        (Object.keys(data) as (keyof StatsResponseT)[]).map(key => ({
            value: data[key],
            label: metaDataMap[key] ?? key,
        }));

    return (
        <section className="flex flex-col md:flex-row gap-sp4 justify-center pb-[200px] max-w-[1186px] mx-auto">
            {isLoading ? (
                <div className="flex py-sp11 justify-center">
                    <Spinner />
                </div>
            ) : (
                metaData?.map((meta, index) => (
                    <MetaNumberTicker
                        key={`${meta.label}-${index}`}
                        {...meta}
                    />
                ))
            )}
        </section>
    );
};

export default MetaNumberTickers;
