Geekcamp.SG website
===

> By Geeks. For Geeks.

**Web site: http://geekcamp.sg/**

Running local setup
--

This website uses [Hugo](https://gohugo.io/) static site generator.

1. [Install `hugo`](https://gohugo.io/getting-started/installing/).
2. `hugo serve` to start the local server.

The CSS is preprocessed via [Sass](http://sass-lang.com/) and post-processed via [Autoprefixer](https://github.com/postcss/autoprefixer).

1. `npm install` or `yarn` to install the dependencies
2. For the CSS:
  - `npm run css` or `yarn css` to build the CSS
  - `npm run build-css` or `yarn build-css` to run above command with `watch` mode.

To make things easier, both commands are combined into `npm run dev` or `yarn dev`;

Deploy to Github
--

1. Checkout `source` branch.
2. Run `npm run build-hugo` to compile the assets to `public/`. It will also copy `CNAME` file over to the same folder.
3. Then run `git subtree push --prefix public origin master` to push the contents in `public` to `master`

__Note: There's no need to checkout `master` branch and commit directly to it.__
