# Geekcampsg website

## Running local setup

This website uses Hugo static site generator and it is hosted on github pages.

It requires you to have `hugo` install via homebrew using `brew insall hugo`.


Run to run the local server.

```
hugo serve
```

As the css is using Sass pre-processor to compile, run `npm install` to install the neccessary dependencies to run the compilation process.


To compile local css, open another termainal and run:

```
npm run sass
```


## To deploy on Github


Run this command to ask `hugo` to create a `public/` directory in main projecy folder:

```
hugo
```

Switch your branch from `source` to `master` to commit the neccessary assets and pushed.