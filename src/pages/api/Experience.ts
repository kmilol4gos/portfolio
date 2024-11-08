import experienceData from '../../../data/experience.json';
import { NextApiRequest, NextApiResponse } from 'next';

interface Experience {
  id: number;
	title: string;
	date: string;
	description: string;
	ubication: string;
	company: string;
}

export default function Handler (req: NextApiRequest, res: NextApiResponse<Experience[]>) {
  res.status(200).json(experienceData);
}