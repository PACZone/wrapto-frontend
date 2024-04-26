import Search from "components/shared/Search";

export type SearchProps = {
    onSearch: (value: string) => void;
};

const SearchBox = (props: SearchProps) => {
    const { onSearch } = props;

    return (
        <div className="bg-[#0C0E0ECC] py-sp7 px-9 space-y-sp5 w-full max-w-[884px] mx-auto border border-gray-900 rounded-xl my-sp12">
            <h2 className="heading-6 text-white text-center h-[73px] flex items-center justify-center">
                Search Your Transaction
            </h2>
            <Search onSearch={onSearch} />
        </div>
    );
};

export default SearchBox;
