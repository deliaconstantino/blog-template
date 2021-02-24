# 🚧 WIP 🚧

A minimal blog template, based on markdown and [next.js](https://nextjs.org/).

# Blog posts

Add your blog posts as markdown files into the `posts` directory (the directory currently contains 5 example posts).

Each markdown file needs the following frontmatter (specifically, [gray-matter](https://github.com/jonschlinkert/gray-matter)) in order to be correctly parsed:

Key | Value
--- | ----
authors | _string[]_.
date | _string_. Must be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
thumbnail | _string_. A URI.
tags | _string[]_. ⚠️ Not currently in use. ⚠️
title | _string_. The post's title.

On the home page, posts are ordered by date descending.

# Configuration

The blog is configurable through the use of a `blog.config.js`. An example `blog.config.js` is below, listing all available options:

```javascript
module.exports = {
  css: {
    // Dark mode.
    dark: {
      backgroundColor: "#4d607c", // The background color.
      color1: "#e8eff7", // The primary text color.
      themeChangerBackgroundColor: "#627693", // The background color for the theme changer.
    },
    // Light mode.
    light: {
      backgroundColor: "#e8eff7", // The background color.
      color1: "#2f7fef", // The primary text color.
      themeChangerBackgroundColor: "#768ba7", // The background color for the theme changer.
    }
  }
};
```

# Development

```bash
npm install
npm run dev
```

# Deployment

There are _many_ ways to host a next.js app. I recommend [hosting on Vercel](https://vercel.com/docs/next.js/overview).

# To do

- [ ] Increase the amount of configuration.
  - [ ] Change favicon.
  - [ ] Change blog icon in navbar.

# Inspiration

- https://github.com/vercel/next.js/tree/canary/examples/blog-starter
- https://github.com/itsnwa/gridsome-forestry-starter
