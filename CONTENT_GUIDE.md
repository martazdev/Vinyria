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
    affiliateLink: "https://amazon.com/..." 
    ---
    ```

3.  **Write Content**: You can use standard Markdown.
    -   Headings, lists, and images are styled automatically.
    -   For buttons, use `<a href="..." class="btn">Text</a>`.

## ✏️ How to Write a Post

With the new setup, you just write standard text, and it will be styled automatically.

### Headings
Use `#` for main titles (handled automatically), `##` for sections, and `###` for sub-sections.
```markdown
## 1. Product Name
### Design & Comfort
```

### Images
Just paste your image URL. It will automatically get rounded corners and shadows.
```markdown
![Sony Headphones](https://images.unsplash.com/...)
```

### Links & Buttons
Standard links look great:
```markdown
Check out the [official website](https://...)
```

To create a **Call to Action Button**, just add the `.btn` class to an HTML link:
```html
<a href="https://amazon.com/..." class="btn">Check Price on Amazon</a>
```

### Bullets & Lists
```markdown
- Pros: Great sound, comfy
- Cons: Expensive
```

## ❌ How to Remove a Post

1.  **Delete the file**: Simply delete the `.md` or `.mdx` file from `src/content/blog/`.
2.  **Archive it**: Alternatively, you can move it to a different folder outside of `src/content/blog/` if you want to keep a backup but not publish it.

## 🖼️ Images

You can use images from:
-   **URL**: Direct links from Unsplash or other hosts.
-   **Local**: Put images in `public/` and reference them like `/my-image.jpg`.
