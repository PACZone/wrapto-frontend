import { getTransactions } from "api/services/Transaction";
import { ArrowsUpDown, ArrowTopRightOnSquare } from "assets/icons";
import Spinner from "components/shared/Spinner";
import { companiesLogo } from "components/Transactions/companiesLogo";
import { formatNumber } from "lib/utils";
import { useEffect, useState } from "react";
import { TransactionT } from "types/Transactions";

export default function RecentlyBridge() {
    const [data, setData] = useState<TransactionT[] | []>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true);
            try {
                const res = await getTransactions();
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
        <div className="pb-sp7 pt-sp9 my-sp11 ">
            <h3 className="grid content-center heading-6 mb-[35px] text-center h-[72px] align-middle">
                RecentlyBridge
            </h3>
            {isLoading ? (
                <div className="flex py-sp11  justify-center">
                    <Spinner />
                </div>
            ) : data.length > 0 ? (
                <div className="flex flex-col border border-gray-700 rounded-md max-w-[884px]  mx-auto  divide-y divide-gray-700 bg-[#0C0E0ECC] overflow-x-auto">
                    {data.slice(0, 10).map((item, key) => {
                        const bridgeType = item.bridge_type;
                        const { srcFrom, srcTo, chainFrom, chainTo, explorer } =
                            companiesLogo[bridgeType];
                        return (
                            <div
                                key={key}
                                className="flex  h-[72px] items-center  px-sp5  md:px-sp7"
                            >
                                <div className=" flex gap-sp5 items-center w-full md:grow ">
                                    <img
                                        src={srcFrom}
                                        alt={chainFrom}
                                        width={24}
                                        height={24}
                                    />
                                    <ArrowsUpDown className="rotate-90 text-secondary size-sp7" />
                                    <img
                                        src={srcTo}
                                        alt={chainTo}
                                        width={24}
                                        height={24}
                                    />
                                </div>

                                <div className=" w-full md:max-w-[147px] text-center">
                                    {formatNumber(item.amount)}
                                </div>

                                <div className="md:w-full md:max-w-[157px] ">
                                    <a
                                        className="flex gap-sp1 text-secondary group  justify-center"
                                        href={`${explorer}/${item.tx_id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ArrowTopRightOnSquare />
                                        <span className="body-1 underline hidden md:block">
                                            View Detail
                                        </span>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="flex justify-center py-sp11 heading-6">
                    No data found!
                </div>
            )}
        </div>
    );
}
