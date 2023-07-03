import { getSortedRogainesData } from "@/lib/rogaines"
import ListItem from "./ListItem"

export default function Rogaines() {
    const rogaines = getSortedRogainesData()

    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-white/90">Rogaines</h2>
            <ul className="w-full">
                {rogaines.map(rogaine => (
                    <ListItem key={rogaine.id} rogaine={rogaine} />
                ))}
            </ul>
        </section>
    )
}
