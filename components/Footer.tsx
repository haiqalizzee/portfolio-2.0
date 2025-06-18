import { GENERAL_INFO } from '@/lib/data';

const Footer = async () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Any Inquiries?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a className="leading-none text-muted-foreground hover:underline hover:text-white">
                        Design & built by Haiqal Izzee <br />
                        <div className="flex items-center justify-center gap-5 pt-1"></div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
