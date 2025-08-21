import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
        <div className="w-full h-3/4 box-border p-20 flex flex-col justify-center items-center gap-10">
        <h1 className="text-6xl font-extrabold">404 (Not Found)</h1>
        <h3 className="text-2xl">The url you visited is not defined</h3>

        <Link to={'/'}>
        <button className="p-3 rounded-2xl bg-blue-500 text-white">Return back to Home Page</button>
        </Link>
        </div>
        </>
    )
}