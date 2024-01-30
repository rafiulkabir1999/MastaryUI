import Link from "next/link";
const MyComponent = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <p className="text-base font-bold px-6 py-4">MY Web Libery</p>
        <ul className="flex space-x-6 font-bold">
          <Link href="/forms">
            <li className="text-orange-500 text-sm hover:text-orange-700">
              Forms
            </li>
          </Link>
          <Link href="/select">
            <li className="text-orange-500 text-sm hover:text-orange-700">
              Select
            </li>
          </Link>
          <Link href="/card">
            <li className="text-orange-500 text-sm hover:text-orange-700">
              Card
            </li>
          </Link>
          <Link href="/table">
            <li className="text-orange-500 text-sm hover:text-orange-700">
              Table
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MyComponent;
