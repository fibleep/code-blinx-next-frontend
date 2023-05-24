import { Client } from "@notionhq/client";

export const fetchPages = async () => {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});

	try {
		const response = await notion.databases.query({
			database_id: process.env.NOTION_DATABASE_ID,
			filter: {
				property: "Status",
				status: {
					equals: "Done",
				},
			},
		});
		return response.results;
	} catch (error) {
		console.error("Failed to fetch pages:", error);
		return [];
	}
};

export const fetchPageBySlug = async (slug) => {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});

	try {
		const response = await notion.databases.query({
			database_id: process.env.NOTION_DATABASE_ID,
			filter: {
				property: "Slug",
				rich_text: {
					equals: "beginnings",
				},
			},
		});
		return response.results[0] || undefined;
	} catch (error) {
		console.error("Failed to fetch page by slug:", error);
		return undefined;
	}
};

export const fetchPageBlocks = async (pageId) => {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});

	try {
		const response = await notion.blocks.children.list({ block_id: pageId });
		return response.results;
	} catch (error) {
		console.error("Failed to fetch page blocks:", error);
		return [];
	}
};
