import {Link} from "react-router-dom";

const Header = () =>{
    return (
        <div className="bg-blue-800 py-6">
            <div className="container mx-auto flex justify-between"> {/*mx- margin on x, justify-between: space in between*/ }
                <span className="text-3xl text-white font-bold tracking-tight"> {/*reduce text spacing */}
                    <Link to="/">Roomly.com</Link>
                </span>
                <span className="flex-space-x-2"> {/*add space between all child elements} */}
                    <Link to="/sign-in" className="flex bg-white items-center text-blue-600 px-3 py-1 font-bold hover:bg-gray-100">
                        Sign In
                    </Link>
                </span>
            </div>
        </div>
    )
};

export default Header;
