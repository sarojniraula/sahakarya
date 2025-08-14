function Footer() {
    return (
        <footer>
            <p>&copy; 2024 Hamro Sahakarya Samuha</p>
            <p>
                Follow us:
                <a href="fb://page/61567535194163"
                    onClick={() => {
                        // Open a blank tab immediately (browser allows it because it's in click event)
                        const newTab = window.open("", "_blank");

                        // After short delay, set it to the FB web URL
                        setTimeout(() => {
                            if (newTab) {
                                newTab.location.href =
                                    "https://www.facebook.com/people/Hamro-Sahakarya-Samuha/61567535194163/";
                            }
                        }, 500);
                    }}
                >
                    Facebook
                </a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
            </p>
        </footer>
    );
}
export default Footer;
