import { SlCalender } from "react-icons/sl";

export default function Tickets({ tickets, handleTaskSubmit }) {

    function formatDate(input) {
        const date = input instanceof Date ? input : new Date(input);
        if (Number.isNaN(date.getTime())) return "";
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                tickets?.map((ticketItem, index) => (
                    <div key={index} onClick={() => handleTaskSubmit(ticketItem)} className="cursor-pointer shadow-md bg-white rounded-md py-5 px-7">
                        <div className="flex justify-between gap-5 items-center">
                            <h3 className="font-semibold text-black">{ticketItem?.title}</h3>
                            <span className={`rounded-full ${ticketItem?.status == 'Open' ? 'text-[#0B5E06]' : 'text-[#9C7700]'} text-sm py-1 px-3  flex items-center gap-1 ${ticketItem.status == 'Open' ? 'bg-[#b9f8cf]' : 'bg-[#F8F3B9]'}`}><div className={`h-3 w-3 rounded-full ${ticketItem?.status == 'Open' ? 'bg-[#02A53B]' : 'bg-[#FEBB0C]'}`}></div>{ticketItem?.status}</span>
                        </div>
                        <p className="text-sm mt-2 text-[#627382]">{ticketItem?.description}...</p>
                        <div className="flex justify-between mt-5">
                            <div className="flex gap-2">
                                <span className="text-sm font-medium text-[#627382]">#{ticketItem?.id}</span>
                                <span className={`text-sm font-medium ${ticketItem.priority == 'HIGH PRIORITY' ? 'text-[#F83044]' : 'text-[#FEBB0C]'}`}>{ticketItem?.priority}</span>
                            </div>
                            <div className="flex gap-1">
                                <span className="text-sm font-medium text-[#627382]">{ticketItem?.customer}</span>
                                <span className="text-sm font-medium text-[#627382] flex items-center gap-1"><SlCalender /> {formatDate(ticketItem?.createdAt)}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}    