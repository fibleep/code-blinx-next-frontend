import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { fetchPageBlocks, notion } from "../../lib/notion";
const Post = async ({ post }) => {
	const id = post.id;
	const blocks = await fetchPageBlocks(id);

	const renderer = new NotionRenderer({
		client: notion,
	});

	renderer.use(hljsPlugin());
	renderer.use(bookmarkPlugin());

	const html = await renderer.render(...blocks);

	return (
		<div className='bg-gradient-to-r from-secondary to-accent rounded-xl p-5 text-background text-xl  min-h-[400px] min-w-[400px] w-full'>
			<h1 className='text-4xl font-bold text-center'>{html}</h1>
			<div dangerouslySetInnerHTML={{ __html: html }}></div>
		</div>
	);
};

export default Post;
