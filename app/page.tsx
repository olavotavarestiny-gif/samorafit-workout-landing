import type { Metadata } from 'next';
import WorkoutPreview from './workout/workout-preview';

export const metadata: Metadata = {
  title: 'SamoraFit Workout — Treina ao teu ritmo',
  description:
    'Landing page do Workout Online da SamoraFit, com seleção de plano e checkout.',
};

export default function HomePage() {
  return <WorkoutPreview />;
}
