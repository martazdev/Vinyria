# Content Management Guide - Vinyria

This guide explains how to manage content on your Vinyria website.

## 📂 Location

All blog posts and reviews are located in:
`src/content/blog/`

## ➕ How to Add a New Post

1.  **Create a new file**: In `src/content/blog/`, create a new file with the `.md` or `.mdx` extension.
    -   Example: `my-new-review.mdx`

2.  **Add Frontmatter**: At the top of the file, you MUST include the following metadata between `---` fences:

    ```yaml
    ---
    title: "Review Title"
    description: "Short description for SEO and cards."
    pubDate: 2024-03-20
    heroImage: "https://images.unsplash.com/photo-..." # Optional
    category: "Tech" # Options: Tech, Home, Software, Lifestyle
    recommended: true # Set to true to feature on homepage
    affiliateLink: "https://amazon.com/..." # Optional
    ---
    ```

3.  **Write Content**: You can use standard Markdown.
    -   If using `.mdx`, you can import components like this:

    ```jsx
    import ComparisonTable from '../../components/ComparisonTable.jsx';
    import ProsCons from '../../components/ProsCons.astro';

    <ProsCons pros={["Benefit 1", "Benefit 2"]} cons={["Drawback 1"]} />
    ```

## ✏️ How to Edit a Post

Simply open the corresponding `.md` or `.mdx` file in `src/content/blog/` and make your changes. The site will update immediately if you are running `npm run dev`.

## ❌ How to Remove a Post

1.  **Delete the file**: Simply delete the `.md` or `.mdx` file from `src/content/blog/`.
2.  **Archive it**: Alternatively, you can move it to a different folder outside of `src/content/blog/` if you want to keep a backup but not publish it.

## 🖼️ Images

You can use images from:
-   **URL**: Direct links from Unsplash or other hosts.
-   **Local**: Put images in `public/` and reference them like `/my-image.jpg`.
