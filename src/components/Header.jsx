import { MdMenu } from "react-icons/md";


export default function Header() {
    return (
        <header className="py-5 bg-white">
            <div className="max-w-[1600px] px-5 mx-auto ">
                <div className="flex justify-between items-center">
                    <h3 className="md:text-2xl text-gray-900 font-semibold">CS — Ticket System</h3>
                    <nav className="flex gap-3 items-center">
                        <ul className="md:flex gap-5 hidden">
                            <li><a href="#" className="text-black">Home</a></li>
                            <li><a href="#" className="text-black">FAQ</a></li>
                            <li><a href="#" className="text-black">Changelog</a></li>
                            <li><a href="#" className="text-black">Blog</a></li>
                            <li><a href="#" className="text-black">Download</a></li>
                            <li><a href="#" className="text-black">Contact</a></li>
                        </ul>
                        <div className="flex gap-2 justify-between md:gap-0 items-center">
                            <button className="py-2 rounded px-3 text-sm md:text-lg md:px-5 font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">+ New Ticket</button>

                            <div className="drawer drawer-end w-max justify-end">
                                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    <label htmlFor="my-drawer-4"><MdMenu className="text-black text-4xl md:hidden" /></label>
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay bg"></label>
                                    <ul className="menu bg-white text-base-content min-h-full w-80 p-4">
                                        <li><a href="#" className="text-black">Home</a></li>
                                        <li><a href="#" className="text-black">FAQ</a></li>
                                        <li><a href="#" className="text-black">Changelog</a></li>
                                        <li><a href="#" className="text-black">Blog</a></li>
                                        <li><a href="#" className="text-black">Download</a></li>
                                        <li><a href="#" className="text-black">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </nav>

                </div>
            </div>
        </header>
    )
}