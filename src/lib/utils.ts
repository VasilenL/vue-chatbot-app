import {type ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const AI_MODELS = ['GPT-4o', 'GPT-4o-mini', 'deepseek-r1', 'gemini']