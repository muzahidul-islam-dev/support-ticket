export default function Resolved({ resolvedTask }) {
    console.log(resolvedTask)
    return (
        <div>
            {
                resolvedTask.length > 0 ? <div>
                    {
                        resolvedTask?.map((singleItem, index) => (
                            <div key={index} className="bg-[#E0E7FF] my-2 py-6 px-3 rounded-md">
                                <h3 className='text-xl font-semibold text-[#001931]'>{singleItem?.title}</h3>
                            </div>
                        ))
                    }
                </div> : <p className="text-black">No resolved tasks yet</p>
            }
        </div>
    )
}