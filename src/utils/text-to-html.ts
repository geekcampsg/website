import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified';

export function textToHtml(text: string) {
  return String(
    unified().use(remarkParse).use(remarkGfm).use(remarkHtml).processSync(text)
  );
}
