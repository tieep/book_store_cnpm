import Footer from "../footer";
import Headers from "../header";

const MasterLayout = ({children, ...props}) => {
    return (
        <div className="page-wrapper" {...props}>
            <Headers />
            <main className="content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default MasterLayout;
