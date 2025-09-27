export default function Resolved({ resolvedTask }) {
    console.log(resolvedTask)
    return (
        <div>
            {
                resolvedTask.length > 0 ? <div className="rounded-md py-3 px-4 bg-white">
                    {
                        resolvedTask?.map((singleItem, index) => (
                            <div key={index} className="bg-green-50 my-2 py-2 px-3 rounded-md">
                                <h3 className='text-xl font-semibold text-[#001931]'>{singleItem?.title}</h3>
                                <span className="text-green-700 font-semibold mt-1 inline-block">Completed</span>
                            </div>
                        ))
                    }
                </div> : <p className="text-black">No resolved tasks yet</p>
            }
        </div>
    )
}