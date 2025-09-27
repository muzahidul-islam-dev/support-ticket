export default function Tasks({ tasks, handleResolved }) {
    return (
        <div className="grid gap-4">
            {
                tasks.length > 0 ? tasks?.map((tasItem, index) => (
                    <div key={index} onClick={() => handleResolved(tasItem)} className="rounded-md shadow-lg py-3 px-4 bg-white">
                        <h3 className='text-lg font-semibold text-[#001931] my-2'>{tasItem?.title}</h3>
                        <button className='w-full cursor-pointer rounded-lg bg-[#02A53B] py-3 text-white'>Complete</button>
                    </div>
                )) : <p className="text-gray-800">No task found</p>
            }
        </div>
    )
}