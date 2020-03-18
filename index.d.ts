import { RenderResult } from '@testing-library/react';

export function generateTmp(opts: { cwd: string }): Promise<void>;
export function generateHTML(opts: { cwd: string }): Promise<void>;
export function render(opts: { cwd: string }): RenderResult;
export function getHTML(opts: { cwd: string }): string;
