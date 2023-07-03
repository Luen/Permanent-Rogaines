import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const rogainesDirectory = path.join(process.cwd(), 'rogaines')

export function getSortedRogainesData() {
    // Get file names under /rogaines
    const fileNames = fs.readdirSync(rogainesDirectory);
    const allRogainesData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(rogainesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the rogaine metadata section
        const matterResult = matter(fileContents);

        const Rogaine: Rogaine = {
            id,
            title: matterResult.data.title,
            coordinates: matterResult.data.coordinates,
        }

        // Combine the data with the id
        return Rogaine
    });
    return allRogainesData;
}

export async function getRogaineData(id: string) {
    const fullPath = path.join(rogainesDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the rogaine metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const RogaineWithHTML: Rogaine & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        coordinates: matterResult.data.coordinates,
        contentHtml,
    }

    // Combine the data with the id
    return RogaineWithHTML
}