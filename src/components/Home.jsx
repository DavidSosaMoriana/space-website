import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section className="home px-5">
                <div className="overlay">
                    <article className="lg:w-1/2 lg:mr-20">
                        <h1 className="text-2xl text-gray-400">
                            SO, YOU WANT TO TRAVEL TO{' '}
                            <span className="block text-4xl lg:text-6xl text-white mt-5 mb-10">
                                SPACE
                            </span>
                        </h1>
                        <p className="text-gray-400">
                            Let’s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world
                            experience!
                        </p>
                    </article>
                    <article className="mt-20">
                        <button className="bg-white text-gray-900 font-bold uppercase text-2xl w-40 h-40 rounded-full shadow xl:h-52 xl:w-52 xl:text-4xl animate-pulse mt-10 md:mt-0">
                            <Link to="/Destination">Explore</Link>
                        </button>
                    </article>
                </div>
            </section>
        </>
    );
}
