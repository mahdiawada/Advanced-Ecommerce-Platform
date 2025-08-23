import NavAdminPage from "./NavAdminPage";
import { Outlet } from "react-router-dom";

export default function AdminPage() {
    return (
        <>
        <NavAdminPage/>
        <div className="py-8 px-5 w-full min-h-screen bg-gray-100 flex flex-col gap-9 sm:pl-64">
            <Outlet /> 
        </div>
        </>
    )
}