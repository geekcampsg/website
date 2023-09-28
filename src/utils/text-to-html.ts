import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import remarkGfm from 'remark-gfm';

export function textToHtml(text: string) {
  return String(
    unified().use(remarkParse).use(remarkGfm).use(remarkHtml).processSync(text),
  );
}
