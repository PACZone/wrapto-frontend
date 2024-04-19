export default function Footer() {
    return (
        <footer className="flex flex-col items-center gap-sp2 py-sp10">
            <p className="body-2 text-gray-100">
                All Right Reserved For
                <span className="font-bold text-white"> Wrapto.App, </span>
                <span className="">{new Date().getFullYear()}</span>{" "}
            </p>
            <p className="flex gap-1 items-center  body-2">
                <span>Powered by</span>
                <a
                    href="https://dezh.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary shadow-primary"
                >
                    <img src="/companies/dezh.svg" alt="dezh" />
                </a>
            </p>
        </footer>
    );
}
