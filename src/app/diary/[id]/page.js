import { fetchPageBlocks } from "@/app/lib/notion";
import { Render } from "@9gustin/react-notion-render";
import "@9gustin/react-notion-render/dist/index.css";
const Page = async ({ params }) => {
	const blocks = await fetchPageBlocks(params.id);
	return (
		<div className='flex flex-col items-center justify-center w-10/12 lg:w-6/12 mx-auto h-auto my-24 bg-gray-800 text-white p-5 rounded-lg'>
			<Render
				blocks={blocks}
				mapImageUrl={(url) =>
					`https://www.notion.so/image/${encodeURIComponent(url)}?table=block&id=${
						params.id
					}&cache=v2`
				}
				emptyBlocks
				useStyles
			/>
		</div>
	);
};

export default Page;
