# How to Deploy Vinyria to Vercel

Since this project is built with **Astro**, deploying to Vercel is extremely straightforward. Vercel will automatically detect your framework and configure the build settings.

## Option 1: Deploy via Git (Recommended)

This method ensures your site automatically updates whenever you push changes to your repository.

1.  **Push your code to a Git provider**:
    -   Initialize a git repo if you haven't: `git init`, `git add .`, `git commit -m "Initial commit"`.
    -   Push to **GitHub**, **GitLab**, or **Bitbucket**.

2.  **Import Project in Vercel**:
    -   Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
    -   Click **"Add New..."** -> **"Project"**.
    -   Select your repository from the list.

3.  **Configure Deployment**:
    -   **Framework Preset**: Vercel should automatically select `Astro`.
    -   **Root Directory**: `./` (default).
    -   **Build Command**: `astro build` (default).
    -   **Output Directory**: `dist` (default).
    -   Click **Deploy**.

## Option 2: Deploy via Vercel CLI

If you prefer deploying directly from your terminal:

1.  **Install Vercel CLI**:
    ```bash
    npm i -g vercel
    ```

2.  **Login**:
    ```bash
    vercel login
    ```

3.  **Deploy**:
    Run the following command in your project root:
    ```bash
    vercel
    ```
    -   Follow the prompts (accept defaults).
    -   Vercel will build and deploy your site to a preview URL.
    -   To deploy to production, run `vercel --prod`.

## Note on 'static' vs 'server' mode

Currently, your Astro config is set to generate a **Static Site** (default). This is perfect for Vercel's Edge Network (CDN).

If you stick to static hosting, no extra configuration is needed!

If you later decide to use **SSR (Server Side Rendering)** features (like API routes that run on demand), you will need to install the Vercel adapter:
```bash
npx astro add vercel
```
But for now, you are good to go without it.
