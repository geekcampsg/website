Geekcamp.SG website
===

> By Geeks. For Geeks.

**Web site: http://geekcamp.sg/**

Running local setup
--

This website uses [Hugo](https://gohugo.io/) static site generator.

1. [Install `hugo`](https://gohugo.io/getting-started/installing/).
2. Checkout `source` branch: `git checkout source`
2. `hugo serve` to start the local server.

The CSS is preprocessed via [Sass](http://sass-lang.com/) and post-processed via [Autoprefixer](https://github.com/postcss/autoprefixer).

1. `npm install` or `yarn` to install the dependencies
2. For the CSS:
  - `npm run css` or `yarn css` to build the CSS
  - `npm run build-css` or `yarn build-css` to run above command with `watch` mode.

To make things easier, both commands are combined into `npm run dev` or `yarn dev`;

Deploy the Website
--
View the deployed website at http://netlify.geekcamp.sg

Simply make a commit to the `master` branch. It will be autodeployed onto netlify. This will usually take around 30 seconds after completing the push.
