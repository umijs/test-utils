# @umijs/test-utils

## 安装

```bash
$ yarn add @umijs/test-utils -D
```

依赖 umi 和 @testing-library/react，请确保同时依赖了他们。

## 测临时文件

```js
import { generateTmp, render } from '@umijs/test-utils';

test('normal', async () => {
  const cwd = join(fixtures, 'normal');
  // 生成临时文件
  await generateTmp({ cwd });
  // 渲染
  const { container } = render({ cwd });
  // 断言
  expect(container.innerHTML).toEqual('<h1>foo</h1>');
});
```

## 测 HTML

```js
import { generateHTML, getHTML } from '@umijs/test-utils';

test('normal', async () => {
  const cwd = join(fixtures, 'normal');
  // 生成 HTML
  await generateHTML({ cwd });
  // 渲染
  const html = getHTML({ cwd });
  // 断言
  expect(html).toContain('<h1>foo</h1>');
});
```

## LICENSE

MIT
