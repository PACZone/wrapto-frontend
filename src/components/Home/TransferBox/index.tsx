import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "components/shared/Select";
import { TextField } from "components/shared/TextField";

type SelectItemsT = {
    title: string;
    icon: string;
};
type TransferBoxProps = {
    title: string;
    selectItems: SelectItemsT[];
};
export default function TransferBox({ title, selectItems }: TransferBoxProps) {
    return (
        <div className=" p-sp7 rounded-xl bg-[#0C0E0ECC] bg-opacity-80">
            <div className="flex items-center justify-between py-[6px] mb-sp5">
                <div id="transfer-box" className="text-gray-400 body-1">
                    {title}
                </div>
                <Select>
                    <SelectGroup>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select an cryptocurrency" />
                        </SelectTrigger>
                        <SelectContent>
                            {selectItems.map((item, key) => (
                                <SelectItem
                                    className=" gap-2 "
                                    value={item.title}
                                    key={key}
                                >
                                    <div className="flex  gap-2  items-center justify-between w-full">
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            width={36}
                                            height={36}
                                        />
                                        <span>{item.title}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </SelectGroup>
                </Select>
            </div>
            <div className="border-t border-gray-900 py-sp5">
                <TextField placeholder="0" leftIcon={"PAC"} label="Amount" />
            </div>
        </div>
    );
}
