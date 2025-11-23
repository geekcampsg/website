export default function formatter() {
  const data: string[] = [];
  const obj = {
    addEntry(key: string, value: string, highlight?: boolean) {
      if (data.length > 0) {
        data.push('<i class="c-g">,</i>\n');
      }
      const keyCls = highlight ? 'c-r' : 'c-y';
      const valueCls = highlight ? 'c-r' : 'c-b';

      data.push(
        [
          '  ',
          `<i class="${keyCls}">"</i>`,
          `<i class="${keyCls}">${key}</i>`,
          `<i class="${keyCls}">"</i>`,
          "<i class='c-g'>:</i>",
          ' ',
          `<i class="${valueCls}">"</i>`,
          `<span class="${valueCls}">${value}</span>`,
          `<i class="${valueCls}">"</i>`,
        ].join('')
      );
      return obj;
    },
    toString() {
      data.unshift("<i class='c-g'>{</i>\n");
      data.push("\n<i class='c-g'>}</i>");
      return data.join('');
    },
  };
  return obj;
}
