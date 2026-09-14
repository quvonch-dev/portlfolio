# 🚀 Portfolio Saytini O'rnatish va Ishlatish

## English Version Below ⬇️

---

## 📖 O'ZBEK TILIDA

### Talablar
- Node.js (v16 yoki undan yuqori) - https://nodejs.org
- npm yoki yarn
- Code editor (VS Code tavsiya etiladi)

### O'rnatish Qadamlari

#### 1️⃣ Loyihani Ochish
```bash
# Loyihani ochish
cd portfolio-project
```

#### 2️⃣ Modullarni O'rnatish
```bash
npm install
```
Buni birinchi marta bajaring. Bu barcha kerakli paketlarni yuklab oladi.

#### 3️⃣ Rivojlantirishni Boshlash
```bash
npm run dev
```
Browser avtomatik ravishda `http://localhost:3000` da ochiladi.

### 🎨 Customizatsiya

#### 1. O'zingizning Ma'lumotlarini Qo'shish

Ochish: `src/Portfolio.jsx`

**Qayerlarda o'zgartiriladi:**

```javascript
// Hero seksiyasida
<h1>Your Name - Frontend Developer</h1>
<p>Your bio here</p>

// Kontakt linklar
<a href="mailto:your@email.com">
<a href="https://github.com/yourname">
<a href="https://linkedin.com/in/yourprofile">
```

#### 2. Loyihalaringizni Qo'shish

```javascript
const projects = [
  {
    title: 'Sizning loyihangiz nomi',
    description: 'Loyihani tavsiflab bering',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://loyihaning-linki.com',
    featured: true,
    image: '🎨'
  }
]
```

#### 3. Skillslarni O'zgartirish

```javascript
const skills = [
  { 
    category: 'Frontend', 
    items: ['React', 'JavaScript', 'CSS', 'Tailwind'] 
  }
]
```

#### 4. Ijodiy Ish Tarixini Yangilash

```javascript
const experience = [
  {
    title: 'Frontend Developer',
    company: 'Kompaniya nomi',
    period: '2023 - Present',
    description: 'Nima qildingiz',
    achievements: ['Loyiha 1', 'Loyiha 2']
  }
]
```

### 🌐 Veb Saytni Joylashtirish (Deploy)

#### Vercel da (Eng oson)
1. GitHub ga kod yuklang
2. vercel.com ga o'ting
3. Repository ni ulang
4. Avtomatik deploy bo'ladi

#### Netlify da
1. Yakuniy versiyani yaratish: `npm run build`
2. netlify.com ga o'ting
3. `dist` papkasini drag-drop qilib qo'ying

#### GitHub Pages da
1. package.json da o'zgartiriladi
2. `npm run build` bajarish
3. GitHub da `gh-pages` branch ga yuklash

### ⚙️ Foydalı Komandalr

```bash
# Rivojlantirishni boshlash
npm run dev

# Yakuniy versiyani yaratish
npm run build

# Yakuniy versiyani ko'rish
npm run preview
```

### 📝 Fayl Tuzilishi

```
portfolio-project/
├── public/
│   └── index.html          # HTML sahifa
├── src/
│   ├── Portfolio.jsx       # Asosiy komponent
│   ├── App.jsx             # App o'rami
│   ├── main.jsx            # Kirish nuqtasi
│   └── index.css           # Global stillar
├── package.json            # Paketlar
├── vite.config.js          # Vite sozlamasi
├── tailwind.config.js      # Tailwind sozlamasi
└── README.md               # Dokumentatsiya
```

### 🎯 Tez O'zgartirishlar

**Rang o'zgartirish:**
Tailwind rang kodlarini qidirib o'zgartiring:
- `from-blue-400` → o'z rangingiz
- `to-cyan-400` → o'z rangingiz

**Logo o'zgartirish:**
Portfolio.jsx da:
```javascript
<span className="text-xl font-bold">Sizning logongiz</span>
```

**Telefon nomeri qo'shish:**
```javascript
<a href="tel:+998901234567">+998 90 123 45 67</a>
```

### 🐛 Umumiy Muammolar va Yechimlar

**Muammo:** `npm install` xatosi
**Yechim:** 
```bash
npm cache clean --force
npm install
```

**Muammo:** Port 3000 band
**Yechim:** 
```bash
npm run dev -- --port 3001
```

**Muammo:** Tailwind CSS ishlamayotgan bo'lib ko'rinadi
**Yechim:**
```bash
npm install -D tailwindcss postcss autoprefixer
```

### 📚 Kerakli Linklar
- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev
- Lucide Icons: https://lucide.dev

---

## 🇬🇧 ENGLISH VERSION

### Requirements
- Node.js (v16 or higher) - https://nodejs.org
- npm or yarn
- Code editor (VS Code recommended)

### Installation Steps

#### 1️⃣ Open the Project
```bash
cd portfolio-project
```

#### 2️⃣ Install Dependencies
```bash
npm install
```
Run this first time. It will download all necessary packages.

#### 3️⃣ Start Development
```bash
npm run dev
```
Browser will automatically open at `http://localhost:3000`

### 🎨 Customization

#### 1. Add Your Information

Open: `src/Portfolio.jsx`

**What to change:**

```javascript
// In Hero section
<h1>Your Name - Frontend Developer</h1>
<p>Your bio here</p>

// Contact links
<a href="mailto:your@email.com">
<a href="https://github.com/yourname">
<a href="https://linkedin.com/in/yourprofile">
```

#### 2. Add Your Projects

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Describe your project',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://your-project-link.com',
    featured: true,
    image: '🎨'
  }
]
```

#### 3. Update Skills

```javascript
const skills = [
  { 
    category: 'Frontend', 
    items: ['React', 'JavaScript', 'CSS', 'Tailwind'] 
  }
]
```

#### 4. Update Work Experience

```javascript
const experience = [
  {
    title: 'Frontend Developer',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'What you did',
    achievements: ['Achievement 1', 'Achievement 2']
  }
]
```

### 🌐 Deploy Your Website

#### On Vercel (Easiest)
1. Push code to GitHub
2. Go to vercel.com
3. Connect your repository
4. Auto deploy happens

#### On Netlify
1. Create production build: `npm run build`
2. Go to netlify.com
3. Drag and drop the `dist` folder

#### On GitHub Pages
1. Modify package.json
2. Run: `npm run build`
3. Push `dist` to GitHub Pages branch

### ⚙️ Useful Commands

```bash
# Start development
npm run dev

# Create production build
npm run build

# Preview production build
npm run preview
```

### 📝 Project Structure

```
portfolio-project/
├── public/
│   └── index.html          # HTML page
├── src/
│   ├── Portfolio.jsx       # Main component
│   ├── App.jsx             # App wrapper
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── package.json            # Packages
├── vite.config.js          # Vite config
├── tailwind.config.js      # Tailwind config
└── README.md               # Documentation
```

### 🎯 Quick Changes

**Change Colors:**
Find and replace Tailwind color codes:
- `from-blue-400` → your color
- `to-cyan-400` → your color

**Change Logo:**
In Portfolio.jsx:
```javascript
<span className="text-xl font-bold">Your Logo</span>
```

**Add Phone Number:**
```javascript
<a href="tel:+998901234567">+998 90 123 45 67</a>
```

### 🐛 Common Issues & Solutions

**Issue:** `npm install` error
**Solution:** 
```bash
npm cache clean --force
npm install
```

**Issue:** Port 3000 is in use
**Solution:** 
```bash
npm run dev -- --port 3001
```

**Issue:** Tailwind CSS not working
**Solution:**
```bash
npm install -D tailwindcss postcss autoprefixer
```

### 📚 Useful Links
- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev
- Lucide Icons: https://lucide.dev

---

**Happy coding! 🚀**
