import { ArrowTopRightOnSquare } from "assets/icons";
import { Badge } from "components/shared/Badge";
import { format } from "date-fns";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "components/shared/Table";
import { TransactionT } from "types/Transactions";
import { formatNumber } from "lib/utils";
import { companiesLogo } from "./companiesLogo";

type ResultTableProps = {
    data: TransactionT[] | [];
};

export default function ResultTable({ data }: ResultTableProps) {
    return (
        <div className="overflow-hidden">
            <div className="flex flex-col mt-[35px]">
                <div className=" overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-2xl overflow-hidden border-gray-700">
                            <Table className="rounded-lg ">
                                <TableHeader>
                                    <TableRow className="">
                                        <TableHead className="w-[72px]  ">
                                            Row
                                        </TableHead>
                                        <TableHead>Source Chain</TableHead>
                                        <TableHead>Destination Chain</TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead>Fee</TableHead>
                                        <TableHead>Id</TableHead>
                                        <TableHead>Time</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Transaction ID</TableHead>
                                    </TableRow>
                                </TableHeader>
                                {data.slice(0, 10).map((item, key) => {
                                    const formattedDate = format(
                                        new Date(item.date),
                                        "dd.MM.yyyy",
                                    );
                                    const formattedTime = format(
                                        new Date(item.date),
                                        "hh:mm a",
                                    );
                                    const bridgeType = item.bridge_type;
                                    if (!bridgeType) return;
                                    const {
                                        srcFrom,
                                        srcTo,
                                        chainFrom,
                                        chainTo,
                                        explorer,
                                    } = companiesLogo[bridgeType];
                                    return (
                                        <TableBody key={key}>
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    {key + 1}
                                                </TableCell>
                                                <TableCell>
                                                    <div className=" flex gap-sp2 items-center">
                                                        <img
                                                            src={srcFrom}
                                                            alt={chainFrom}
                                                            width={36}
                                                            height={36}
                                                        />
                                                        <div>
                                                            <p className="body-1 text-white truncate max-w-[140px]">
                                                                {chainFrom}
                                                            </p>
                                                            <p className="caption-1 text-gray-300"></p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className=" flex gap-sp2 items-center">
                                                        <img
                                                            src={srcTo}
                                                            alt={chainTo}
                                                            width={36}
                                                            height={36}
                                                        />
                                                        <div>
                                                            <p className="body-1 text-white">
                                                                {chainTo}
                                                            </p>
                                                            <p className="caption-1 text-gray-300 truncate max-w-[140px]">
                                                                {item.to}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    {" "}
                                                    {formatNumber(item.amount)}
                                                </TableCell>
                                                <TableCell>
                                                    {" "}
                                                    {formatNumber(item.fee)}
                                                </TableCell>

                                                <TableCell>{item.id}</TableCell>
                                                <TableCell>
                                                    {" "}
                                                    <div>
                                                        <p className="body-1 text-white">
                                                            {formattedDate}
                                                        </p>
                                                        <p className="caption-1 text-gray-300">
                                                            {formattedTime}
                                                        </p>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge className="lowercase">
                                                        {item.status}{" "}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <a
                                                        className="flex gap-sp2 text-secondary group "
                                                        href={`${explorer}/${item.tx_id}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <ArrowTopRightOnSquare />
                                                        <span className="truncate max-w-[136px] underline">
                                                            {item.tx_id}
                                                        </span>
                                                    </a>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    );
                                })}
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
