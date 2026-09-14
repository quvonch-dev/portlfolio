# Portfolio Website - React + Tailwind CSS

Modern, responsive portfolio website built with React and Tailwind CSS. Perfect for showcasing your projects and skills.

## Features

✨ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
🎨 **Modern UI** - Beautiful gradient design with smooth animations
⚡ **Fast Performance** - Built with Vite for lightning-fast development
📱 **Mobile Optimized** - Mobile-first approach
🎭 **Interactive** - Smooth transitions and hover effects
📊 **Multiple Sections** - About, Skills, Projects, Experience, Services, Testimonials, and Contact

## Sections Included

- **Hero Section** - Eye-catching introduction
- **Stats** - Project counts, clients, experience, dedication
- **About** - Personal introduction and achievements
- **Services** - Services you offer (Web Development, Optimization, etc.)
- **Experience** - Work history and education
- **Projects** - Featured and other projects with descriptions
- **Skills** - Frontend, Backend, Tools, and Design skills
- **Testimonials** - Client reviews and ratings
- **Contact** - Multiple contact methods
- **Footer** - Navigation links and social media

## Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Extract the zip file
2. Navigate to the project directory:
```bash
cd portfolio-project
```

3. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Customization Guide

### 1. Update Personal Information

Open `src/Portfolio.jsx` and update:

- **Hero Section**: Change your name, title, and description
- **Contact Links**: Update email, GitHub, LinkedIn URLs
- **Location**: Change "Qarshi, Uzbekistan" to your location

### 2. Add Your Projects

In the `projects` array, update with your actual projects:

```javascript
{
  title: 'Your Project Title',
  description: 'Project description',
  tech: ['Technology1', 'Technology2'],
  link: 'https://your-project-link.com',
  featured: true,
  image: '🎨' // Use any emoji
}
```

### 3. Update Skills

Modify the `skills` array to match your expertise:

```javascript
{ category: 'Frontend', items: ['Your', 'Skills', 'Here'] }
```

### 4. Add Your Experience

Update the `experience` array with your work history and education

### 5. Change Colors (Optional)

To customize colors:
- Edit `tailwind.config.js` for theme colors
- Update gradient colors in the JSX (e.g., `from-blue-400 to-cyan-400`)

### 6. Add Your Resume

Replace the Resume button link with your actual resume URL

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your repository
4. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder

### Other Platforms

The `dist` folder created by `npm run build` can be deployed to:
- GitHub Pages
- AWS S3
- Firebase Hosting
- Any static hosting service

## File Structure

```
portfolio-project/
├── public/
│   └── index.html
├── src/
│   ├── Portfolio.jsx      # Main component
│   ├── App.jsx            # App wrapper
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## Tips

- **Test Responsiveness**: Use browser DevTools (F12) to test on different screen sizes
- **Optimize Images**: Use compressed images for better performance
- **SEO**: Update the meta tags in `public/index.html`
- **Analytics**: Add Google Analytics or similar to track visitors
- **Performance**: Use Lighthouse in Chrome DevTools to check performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use for personal and commercial projects.

## Support

For questions or issues:
1. Check the code comments
2. Refer to documentation:
   - [React Documentation](https://react.dev)
   - [Tailwind CSS](https://tailwindcss.com)
   - [Vite](https://vitejs.dev)

## Need Help?

### Change Fonts

Update the font in `src/index.css`:
```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

### Add More Sections

Copy an existing section in `Portfolio.jsx` and customize it.

### Performance Tips

1. Lazy load images
2. Minimize animations
3. Optimize font loading
4. Use the production build

---

**Made with ❤️ by a developer passionate about web development**
# portlfolio
# portlfolio
