export default function Header(){
    return (
        <header className="py-5 bg-white">
            <div className="max-w-[1600px] px-5 mx-auto ">
                <div className="flex justify-between items-center">
                <h3 className="text-xl md:text-2xl text-gray-900 font-semibold">CS — Ticket System</h3>
                <nav className="flex gap-3 items-center">
                    <ul className="md:flex gap-5 hidden">
                        <li><a href="#" className="text-black">Home</a></li>
                        <li><a href="#" className="text-black">FAQ</a></li>
                        <li><a href="#" className="text-black">Changelog</a></li>
                        <li><a href="#" className="text-black">Blog</a></li>
                        <li><a href="#" className="text-black">Download</a></li>
                        <li><a href="#" className="text-black">Contact</a></li>
                    </ul>
                    <button className="py-2 rounded px-5 font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">+ New Ticket</button>
                </nav>
            </div>
            </div>
        </header>
    )
}