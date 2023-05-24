import { Client } from "@notionhq/client";

export const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export const fetchPages = () => {
	return notion.databases
		.query({
			database_id: process.env.NOTION_DATABASE_ID,
			filter: {
				property: "Status",
				status: {
					equals: "Done",
				},
			},
		})
		.then((res) => res.results);
};

export const fetchPageBySlug = (slug) => {
	return notion.databases
		.query({
			database_id: process.env.NOTION_DATABASE_ID,
			filter: {
				property: "Slug",
				rich_text: {
					equals: "beginnings",
				},
			},
		})
		.then((res) => res.results[0] || undefined);
};

export const fetchPageBlocks = (pageId) => {
	return notion.blocks.children.list({ block_id: pageId }).then((res) => res.results);
};
