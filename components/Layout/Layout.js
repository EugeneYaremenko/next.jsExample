import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, keys }) => (
  <>
    <Head>
      <title>Next.js | Example </title>
      <meta keywords={"next.js, js, example" + keys}></meta>
    </Head>
    <div className="flex">
      <nav className="flex items-center bg-gray-800 p-3 flex-wrap w-screen justify-around">
        <div className="logo">
          <Link href="/">
            <a href="#" className="p-2 mr-4 inline-flex items-center">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-white h-8 w-8 mr-2"
              >
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <span className="text-xl text-white font-bold uppercase tracking-wide">
                Talwind CSS
              </span>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
              Home
            </a>
          </Link>
          <Link href="/users">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
              Users
            </a>
          </Link>
        </div>
      </nav>
    </div>
    <div>{children}</div>
  </>
);

export default Layout;
