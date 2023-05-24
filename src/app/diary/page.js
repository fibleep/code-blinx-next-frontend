import { notFound } from "next/navigation";
import { Suspense } from "react";
import { fetchPages } from "../lib/notion";
import LoadingPost from "./components/LoadingPost";
import Post from "./components/Post";

export default async function Page() {
	const pages = await fetchPages();
	if (!pages) notFound();

	return (
		<div className='flex flex-col items-center space-y-12 w-10/12 lg:w-6/12 mx-auto min-h-full py-2 my-24'>
			<Suspense fallback={<LoadingPost></LoadingPost>}>
				{pages.map((post, index) => (
						<Post
							post={post}
							index={index}></Post>
				))}
			</Suspense>
		</div>
	);
}
