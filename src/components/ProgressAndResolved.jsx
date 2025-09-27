import Vector1 from './../assets/vector1.png'
import Vector3 from './../assets/vector3.png'
export default function ProgressAndResolved({tasks, resolved}) {
    return (
        <div className="max-w-[1600px] mx-auto">
            <div className="md:flex gap-5 my-10 px-5">
                <div className="w-full my-2 text-white rounded-md relative bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-14 text-center">
                    <img src={Vector1} alt="" className='h-full object-cover absolute top-0 left-0' />
                    <img src={Vector3} alt="" className='h-full object-cover absolute top-0 right-0' />
                    <h3>In-Progress</h3>
                    <div className="text-5xl font-semibold">{tasks.length}</div>
                </div>
                <div className="w-full my-2 text-white rounded-md relative bg-linear-to-r from-[#54CF68] to-[#00827A] py-14 text-center">
                    <img src={Vector1} alt="" className='h-full object-cover absolute top-0 left-0' />
                    <img src={Vector3} alt="" className='h-full object-cover absolute top-0 right-0' />
                    <h3>In-Progress</h3>
                    <div className="text-5xl font-semibold">{resolved.length}</div>
                </div>
            </div>
        </div>
    )
}