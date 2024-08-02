import { TagModel } from "./tags.model";

export interface Experience {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    technologies: TagModel[];
}