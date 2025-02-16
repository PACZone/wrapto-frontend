import { getStats, StatsResponseT } from "api/services/Stats";
import MetaNumberTicker from "./MetaNumberTicker";
import { useEffect, useState } from "react";
import Spinner from "components/shared/Spinner";

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

    return (
        <section className="flex flex-col md:flex-row gap-sp4 justify-center pb-[200px] max-w-[1186px] mx-auto">
            {isLoading ? (
                <div className="flex py-sp11  justify-center">
                    <Spinner />
                </div>
            ) : (
                data &&
                Object.entries(data).map((key, index) => (
                    <MetaNumberTicker
                        key={key[0] + index}
                        label={key[0].replaceAll("_", " ")}
                        value={key[1]}
                    />
                ))
            )}
        </section>
    );
};

export default MetaNumberTickers;
