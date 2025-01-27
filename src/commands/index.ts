import fs from "node:fs";
import { Command } from "../types";

export const getCommands = async (): Promise<Command[]> => {
	return Promise.all(
		fs
			.readdirSync(__dirname)
			.filter((file) => file !== "index.js" && !file.includes(".map"))
			.map(
				async (filename) => (await import(`${__dirname}/${filename}`)).default
			)
	);
};
