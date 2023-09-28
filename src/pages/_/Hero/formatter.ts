export default function formatter() {
  const data: string[] = [];
  let obj = {
    addEntry(key: string, value: string, highlight?: boolean) {
      if (data.length > 0) {
        data.push('<i class="c-g">,</i>\n');
      }
      data.push(
        [
          '  ',
          '<i class="c-b">"</i>',
          `<i class='c-${highlight ? 'r' : 'y'}'>${key}</i>`,
          '<i class="c-b">"</i>',
          "<i class='c-g'>:</i>",
          ' ',
          '<i class="c-b">"</i>',
          value,
          '<i class="c-b">"</i>',
        ].join(''),
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
