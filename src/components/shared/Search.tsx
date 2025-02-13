import { SearchIcon } from "assets/icons";
import { Button } from "components/shared/Button";
import { TextField } from "components/shared/TextField";
import React, { ChangeEvent, useState } from "react";

export type SearchProps = {
    onSearch: (value: string) => void;
};

const Search = (props: SearchProps) => {
    const { onSearch } = props;
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        setValue(target.value);
        setError(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (!value) return setError(true);
            onSearch(value);
        }
    };
    const handleSearch = () => {
        if (!value) {
            return setError(true);
        }
        onSearch(value);
    };

    return (
        <TextField
            type="search"
            name="search"
            placeholder={"Search by TX Hash / Order ID..."}
            onChange={event => searchHandler(event)}
            onKeyDown={handleKeyDown}
            rightIcon={
                <Button onClick={handleSearch} type="submit" size="default">
                    Search
                </Button>
            }
            leftIcon={<SearchIcon />}
            helperText={error && <p className="!text-error">Enter a value!</p>}
        />
    );
};

export default Search;
