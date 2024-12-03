import Footer from "../components/Footer";
import Header from "../components/Header"
import Hero from "../components/Hero";

interface Props {
    children: React.ReactNode;
}  //defining type of props as we are in ts.

const Layout = ({children}:Props) =>{ //destructuring props.
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            <div className="container mx-auto py-10 flex-1">{children}</div>{/* flex-1 makes sure that the div takes entire available space and we previously defined parent to take minimum of entire screen */}
            <Footer />
        </div>
    );
};

export default Layout;