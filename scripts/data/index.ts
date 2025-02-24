import { linuxRepo } from "./linux";
import { reactRepo } from "./react";
import { tensorFlowRepo } from "./tensorflow";
import { swiftRepo } from "./swift";

export type RepoFile = {
	path: string;
	code: string;
}

export type Repo = {
	label: string;
	url: string;
	files: RepoFile[];
}

export const repoOptions: Repo[] = [
	linuxRepo,
	reactRepo,
	tensorFlowRepo,
	swiftRepo
]
