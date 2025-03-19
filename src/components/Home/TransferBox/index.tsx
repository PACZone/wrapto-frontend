import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "components/shared/Select";
import { TextField } from "components/shared/TextField";
import { useTransferBoxContext } from "context/TransferBoxContext";
import { HTMLInputTypeAttribute, useEffect } from "react";
import { useSwitchChain, useChainId } from "wagmi";
type SelectItemsT = {
    title: string;
    icon: string;
    value: string;
    chainId?: number;
};
type TransferBoxProps = {
    title: string;
    value?: string | number;
    helperText?: string;
    selectItems: SelectItemsT[];
    actionButton?: React.ReactNode;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    inputType?: HTMLInputTypeAttribute;
    placeholder?: string;
    label?: string;
    leading?: string | boolean;
    errorText?: string;
    defaultValue?: string | number;
};
export default function TransferBox({
    onChange,
    helperText,
    label,
    placeholder,
    title,
    selectItems,
    actionButton,
    value,
    inputType,
    errorText,
    defaultValue,
    leading = false,
}: TransferBoxProps) {
    const { setNetwork } = useTransferBoxContext();
    const { switchChain } = useSwitchChain();
    const chainId = useChainId();
    const selectDefaultValue = selectItems.find(
        chain => chain.chainId === chainId,
    )?.value;
    useEffect(() => { 
        if (selectDefaultValue) setNetwork(selectDefaultValue);
    }, []);
    return (
        <div className=" py-sp7 rounded-xl bg-[#0C0E0ECC] bg-opacity-80 border-[1.5px] border-gray-700 transition-all ">
            <div className="flex items-center justify-between py-[6px] mb-sp5 md:px-sp7 px-sp2 ">
                <div id="transfer-box" className="text-gray-400 body-1 ">
                    {title}
                </div>
                <div className="animate-fade  animate-delay-[150ms] ">
                    {selectItems.length > 1 ? (
                        <Select
                            defaultValue={
                                selectDefaultValue ??
                                selectItems[0].value ??
                                "pac"
                            }
                            onValueChange={value => {
                                setNetwork(value);
                                const selectedItem = selectItems.find(
                                    item => item.value === value,
                                );
                                if (selectedItem && selectedItem.chainId) {
                                    switchChain({
                                        chainId: selectedItem.chainId,
                                    });
                                }
                            }}
                        >
                            <SelectGroup>
                                <SelectTrigger className="w-fit truncate">
                                    <SelectValue
                                        className="body-2"
                                        placeholder="Select an cryptocurrency"
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    {selectItems.map((item, key) => (
                                        <SelectItem
                                            className=" gap-2 "
                                            value={item.value}
                                            key={key}
                                        >
                                            <div className="flex body-2 text-gray-50 gap-2 items-center justify-between w-full">
                                                <img
                                                    src={item.icon}
                                                    alt={item.title}
                                                    width={36}
                                                    height={36}
                                                />
                                                <span className="text-start  whitespace-nowrap">
                                                    {item.title}
                                                </span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </SelectGroup>
                        </Select>
                    ) : (
                        <div className="flex gap-2 body-2 text-gray-50  items-center justify-end w-full max-w-[250px] truncate">
                            <img
                                src={selectItems[0].icon}
                                alt={selectItems[0].title}
                                width={36}
                                height={36}
                            />
                            <span className="text-start  whitespace-nowrap">
                                {selectItems[0].title}
                            </span>
                        </div>
                    )}
                </div>
            </div>
            {/* {(!isFromPac || selectItems.length > 1) && ( */}
            <div className="border-t border-gray-900 py-sp5 md:px-sp7 px-sp2">
                <TextField
                    type={inputType}
                    defaultValue={defaultValue}
                    value={value || ""}
                    onChange={onChange}
                    helperText={helperText}
                    placeholder={placeholder}
                    leftIcon={
                        leading ?? <span className="min-w-[54px]">PAC</span>
                    }
                    label={label}
                    labelClasses="!text-gray-100"
                    rightIcon={actionButton}
                />
                {errorText && (
                    <p className="caption-1 text-error animate-fade-up transition-all duration-700 pt-sp2">
                        {errorText}
                    </p>
                )}
            </div>
            {/* )} */}
        </div>
    );
}
