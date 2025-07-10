import { NavLink } from "react-router-dom";
import Header from "./Header";

const PageNotFound = () => {
    return (
        <>
        <Header />
        <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
        <div className="text-center">
            <div className="flex items-center gap-2 justify-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800 text-white">404</h1>
            <p className="text-lg text-gray-600 text-white"> | Page Not Found</p>
            </div>
            <NavLink to={'/'} className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Go to Home
            </NavLink>
        </div>
        </div>
        </>
    );
}

export default PageNotFound;