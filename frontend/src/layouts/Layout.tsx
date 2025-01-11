import Footer from "../components/Footer";
import Header from "../components/Header"
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

interface Props {
    children: React.ReactNode;
}  

const Layout = ({children}:Props) =>{ 
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            <div className="container mx-auto"><SearchBar /></div>
            <div className="container mx-auto py-10 flex-1">{children}</div>{/* flex-1 makes sure that the div takes entire available space and we previously defined parent to take minimum of entire screen */}
            <Footer />
        </div>
    );
};

export default Layout;