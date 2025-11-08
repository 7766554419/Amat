# Cloud Nine Baby

A modern, beautiful e-commerce website for authentic Peruvian baby clothes, built with Next.js, React, and TailwindCSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account
- Netlify account

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` folder.

## 📦 Deployment to Netlify

### Step 1: Push to GitHub

1. Create a new repository on GitHub named `stuffwhenisleep`
2. In your terminal, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/stuffwhenisleep.git
   git push -u origin main
   ```

### Step 2: Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify
4. Select your `stuffwhenisleep` repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
6. Click "Deploy site"

### Step 3: Configure Custom Domain

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter `stuffwhenisleep.com` (or your domain)
4. Follow DNS configuration instructions
5. Netlify will automatically provision SSL certificate

## 🎨 Customization

### Update Site Content
- Edit `app/page.tsx` to change homepage content
- Modify `app/layout.tsx` for site-wide settings
- Update `app/globals.css` for custom styles

### Add New Pages
Create new files in the `app/` directory:
- `app/about/page.tsx` → `/about`
- `app/blog/page.tsx` → `/blog`

### Styling
- Uses TailwindCSS for styling
- Dark mode support built-in
- Customize colors in `tailwind.config.ts`

## 📁 Project Structure

```
stuffwhenisleep/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── public/             # Static files
├── package.json        # Dependencies
├── next.config.mjs     # Next.js config
└── tailwind.config.ts  # Tailwind config
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Icons:** Lucide React
- **Deployment:** Netlify
- **Version Control:** GitHub

## 📝 License

This project is open source and available under the MIT License.
cd C:\Users\USER\CascadeProjects\stuffwhenisleep
npm install
npm run dev
npm run build
