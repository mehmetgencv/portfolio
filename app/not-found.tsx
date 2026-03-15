import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-8xl font-bold text-teal-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-neutral-800 dark:text-neutral-100">
        Page Not Found
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mt-2 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow hover:bg-teal-700 transition-colors duration-300"
      >
        Go Home
      </Link>
    </div>
  )
}
