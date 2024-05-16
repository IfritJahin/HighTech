
const Body = () => {
    useEffect(() => {
        // Initialize WOW.js
        const wow = new WOW();
        wow.init();

        // Cleanup function
        return () => {
            wow.sync();
        };
    }, []);

    const [showBackToTop, setShowBackToTop] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div></div>

    )
}

export default Body
