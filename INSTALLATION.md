# 📦 Installation Guide

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - To check if installed: `node --version`

2. **npm** (comes with Node.js)
   - To check if installed: `npm --version`

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Extract the ZIP file
Extract the portfolio zip file to your desired location.

### Step 2: Install Dependencies
Open terminal/command prompt in the project folder and run:

```bash
npm install
```

This will install all required packages (React, Tailwind CSS, Framer Motion, etc.)

**⏱️ Time:** 2-3 minutes

### Step 3: Start Development Server
```bash
npm run dev
```

**✅ Done!** The portfolio will open at: `http://localhost:3000`

---

## 📝 All Available Commands

### Development
```bash
npm run dev
```
- Starts the development server
- Opens at `http://localhost:3000`
- Hot reload enabled (changes appear instantly)

### Build for Production
```bash
npm run build
```
- Creates optimized production build
- Output folder: `dist/`
- Ready to deploy

### Preview Production Build
```bash
npm run preview
```
- Preview the production build locally
- Test before deploying

---

## 🔧 Troubleshooting

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: Port 3000 already in use
**Solution:** Use a different port:
```bash
npm run dev -- --port 3001
```

### Issue: Installation fails
**Solution:** Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build errors
**Solution:** Make sure you're using Node.js version 18 or higher:
```bash
node --version
```

---

## 📂 Project Structure

```
easyfolio-react/
├── public/              # Static files (images, favicon)
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind CSS config
```

---

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#e87532',    // Change this
  heading: '#0f2943',
  text: '#0a0f14',
}
```

### Add Images
1. Place images in `public/` folder
2. Reference in code: `/image-name.png`

### Update Content
- **About:** `src/components/About.jsx`
- **Portfolio:** `src/components/Portfolio.jsx`
- **Resume:** `src/components/Resume.jsx`
- **Contact:** `src/components/Contact.jsx`

---

## 🌐 Deployment

### Option 1: Netlify (Easiest)
1. Build: `npm run build`
2. Drag `dist` folder to https://app.netlify.com/drop
3. Done! ✅

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Option 3: GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://username.github.io/repo-name",
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

---

## 📞 Need Help?

### Common Questions

**Q: Do I need to install anything else?**
A: No, just Node.js. Everything else installs with `npm install`

**Q: Can I use yarn instead of npm?**
A: Yes! Replace `npm install` with `yarn` and `npm run dev` with `yarn dev`

**Q: How do I stop the development server?**
A: Press `Ctrl + C` in the terminal

**Q: Where do I put my images?**
A: In the `public/` folder, then reference as `/image.png`

**Q: How do I change the website title?**
A: Edit `index.html` - change the `<title>` tag

---

## ✅ Checklist

Before sharing or deploying:

- [ ] Run `npm install` successfully
- [ ] Test with `npm run dev`
- [ ] Replace placeholder images in `public/`
- [ ] Update personal information in components
- [ ] Test on mobile devices
- [ ] Build successfully with `npm run build`
- [ ] Test production build with `npm run preview`

---

## 🎉 You're All Set!

The portfolio is now running on your local machine. Start customizing and make it your own!

**Quick Start:**
```bash
npm install
npm run dev
```

Visit: http://localhost:3000

Happy coding! 🚀
