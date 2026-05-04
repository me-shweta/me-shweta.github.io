# Setup Guide - Shweta's Portfolio

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to see your portfolio!

### 3. Build for Production
```bash
npm run build
```

## Adding Your Content

### 📸 Adding Images

1. Place your images in the `public` folder:
   ```
   public/
   ├── profile-1.webp          # Hero section image
   ├── profile-square-2.webp   # About section image
   ├── portfolio-1.webp        # Portfolio project images
   ├── portfolio-2.webp
   └── ...
   ```

2. Reference them in components using `/image-name.webp`

### ✏️ Updating Personal Information

**Hero Section** (`src/components/Hero.jsx`)
- Update title, description, and stats
- Change CTA button links

**About Section** (`src/components/About.jsx`)
- Edit bio text
- Update personal information grid
- Modify "What I'm Doing" cards

**Skills Section** (`src/components/Skills.jsx`)
- Update skills array with your tools
- Adjust percentage values

**Resume Section** (`src/components/Resume.jsx`)
- Edit `workExperience` array with your internships
- Update `education` array with your qualifications

**Achievements Section** (`src/components/Achievements.jsx`)
- Modify achievements array
- Update positions of responsibility

**Portfolio Section** (`src/components/Portfolio.jsx`)
- Update `portfolioItems` array with your projects
- Add project images to `public` folder
- Adjust filter categories if needed

**Contact Section** (`src/components/Contact.jsx`)
- Update contact information
- Connect form to your backend API

### 🎨 Customizing Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: '#e87532',    // Your brand color
  heading: '#0f2943',    // Heading text color
  text: '#0a0f14',       // Body text color
}
```

### 🔗 Social Media Links

Update in `src/components/Header.jsx` and `src/components/Footer.jsx`:

```jsx
<a href="https://twitter.com/yourhandle" className="...">
  <FaTwitter size={16} />
</a>
```

## Deployment

### Deploy to Netlify

1. Build your project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to Netlify

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/your-repo",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- --port 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
- Ensure images are in the `public` folder
- Use `/image-name.ext` (with leading slash)
- Check file extensions match (case-sensitive)

## Need Help?

- Check the main [README.md](README.md) for more details
- Review component files for inline comments
- Refer to [React documentation](https://react.dev)
- Check [Tailwind CSS docs](https://tailwindcss.com)

## Next Steps

1. ✅ Add your personal images
2. ✅ Update all text content
3. ✅ Customize colors to match your brand
4. ✅ Add your portfolio projects
5. ✅ Connect contact form to backend
6. ✅ Test on mobile devices
7. ✅ Deploy to production!

Happy coding! 🚀
