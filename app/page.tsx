import Rogaines from "./components/Rogaines"

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Welcome to the directory of Permanent Rogaine Courses around the world.
      </p>
      <Rogaines />
    </main >
  )
}
