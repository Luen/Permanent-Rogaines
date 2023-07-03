import Link from "next/link"

type Props = {
    rogaine: Rogaine
}

export default function ListItem({ rogaine }: Props) {
    const { id, title, coordinates } = rogaine

    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/rogaines/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{coordinates}</p>
        </li>
    )
}