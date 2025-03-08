import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ResultTable from "./ResultTable";
import { motion } from "framer-motion";
import { getTransactions, searchServices } from "api/services/Transaction";
import { TransactionT } from "types/Transactions";
import { Button } from "components/shared/Button";
import { CloseIcon } from "assets/icons";
import { Badge } from "components/shared/Badge";
import Spinner from "components/shared/Spinner";
import { useSearchParams } from "react-router-dom";

export default function Transactions() {
    const [searchValue, setSearchValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("q");
    const [data, setData] = useState<TransactionT[] | []>([]);
    const [reFetch, setReFetch] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleReset = () => {
        searchParams.delete("q");
        setSearchParams(searchParams);
        setReFetch(!reFetch);
        setSearchValue("");
    };
    const fetchBySearch = async (value: string) => {
        setIsLoading(true);
        try {
            const res = await searchServices(value);
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
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
        searchQuery ? fetchBySearch(searchQuery) : fetch();
    }, [reFetch]);

    const handleSearch = async (value: string) => {
        // Here, you can access the search value when Enter is pressed
        setSearchValue(value);
        setSearchParams({ ["q"]: value });
        fetchBySearch(value);
    };

    return (
        <main className="container mx-auto w-full">
            <SearchBox onSearch={handleSearch} />
            <div key={searchValue}>
                <div className="flex justify-between md:flex-nowrap gap-sp2 flex-wrap">
                    <h4 className="title-2 flex gap-sp1 flex-wrap w-full items-center">
                        {searchValue ? (
                            <>
                                <span>Search Result for </span>
                                <Badge className="text-secondary max-w-[152px] truncate underline">
                                    {searchValue}
                                </Badge>
                                <span>
                                    Transaction ID Pactus Blockchain Network:
                                </span>
                            </>
                        ) : (
                            "All Recent Transaction"
                        )}
                    </h4>
                    {searchQuery && (
                        <Button
                            onClick={handleReset}
                            className="max-w-[106px] w-full "
                            size="default"
                            leftIcon={<CloseIcon className="size-sp5" />}
                        >
                            Close
                        </Button>
                    )}
                </div>
                {isLoading ? (
                    <div className="flex py-sp11  justify-center">
                        <Spinner />
                    </div>
                ) : data.length > 0 ? (
                    <motion.div
                        key={searchValue}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 100 }}
                        transition={{ duration: 1 }}
                    >
                        <ResultTable data={data} />
                    </motion.div>
                ) : (
                    <div className="flex justify-center py-sp11 heading-6">
                        No data found!
                    </div>
                )}
            </div>
        </main>
    );
}
