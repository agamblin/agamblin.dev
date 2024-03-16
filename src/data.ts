import { cache } from 'react';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function getDirectoryFiles<M>(path: string, extension = 'md') {
  const fileNames = await readDirectory(`/content/${path}`);

  const files: (M & { content: string })[] = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${path}/${fileName}`);

    const { data: frontmatter, content } = matter(rawContent);

    files.push({
      content,
      ...(frontmatter as M),
    });
  }

  return files;
}

export const loadFile = cache(async function (slug: string, extension = 'md') {
  const rawContent = await readFile(`/content/${slug}.${extension}`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
