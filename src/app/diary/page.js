import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import Post from "./components/Post";
import { notFound } from "next/navigation";
import { fetchPageBlocks, fetchPages, notion } from "../lib/notion";

export default async function Page() {
	const pages = await fetchPages();
	if (!pages) notFound();

	return(
        <div className="flex flex-col items-center justify-center space-y-12 w-4/12 mx-auto min-h-full py-2 my-24">
            {pages.map((post) => (
                <Post post={post}></Post>
            ))}
        </div>
    )
}
