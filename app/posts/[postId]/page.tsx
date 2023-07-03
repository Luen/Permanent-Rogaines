import { getSortedRogainesData, getRogaineData } from "@/lib/rogaines"
import { notFound } from "next/navigation"
import Link from "next/link"


export function generateStaticParams() {
    const rogaines = getSortedRogainesData()

    return rogaines.map((rogaine) => ({
        rogaineId: rogaine.id
    }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {

    const rogaines = getSortedRogainesData()
    const { postId } = params

    const rogaine = rogaines.find(rogaine => rogaine.id === postId)

    if (!rogaine) {
        return {
            title: 'Rogaine Not Found'
        }
    }

    return {
        title: rogaine.title,
    }
}

export default async function Rogaine({ params }: { params: { postId: string } }) {

    const rogaines = getSortedRogainesData()
    const { postId } = params

    if (!rogaines.find(rogaine => rogaine.id === postId)) notFound()

    const { title, coordinates, contentHtml } = await getRogaineData(postId)
    
    // link all urls
    const linkedHtml = contentHtml.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>')

    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-0">
                <a href={`https://www.google.com/maps/search/?api=1&basemap=satellite&query=${coordinates}`} target="_blank" rel="noopener noreferrer">{coordinates}</a>
            </p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: linkedHtml }} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
    )
}