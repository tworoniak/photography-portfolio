# Photography Portfolio 📸

A modern, dark-themed photography portfolio built with **React 19 + TypeScript** featuring curated galleries, featured image collections, a carousel highlight reel, and a smooth lightbox viewing experience.

Designed as a clean, editorial-style portfolio site for showcasing concert photography, portraits, and commissioned work.

---

## 🚀 Live Demo

[Photography Portfolio](https://photography-portfolio-iota-eight.vercel.app)

![Portfolio screen 1.](/src/assets/screen-1.png 'Portfolio screen 1.')
![Portfolio screen 2.](/src/assets/screen-2.png 'Portfolio screen 2.')
![Portfolio screen 3.](/src/assets/screen-3.png 'Portfolio screen 3.')
![Portfolio screen 4.](/src/assets/screen-4.png 'Portfolio screen 4.')

---

## ✨ Features

- 🎞️ **Gallery Index**
  - Displays all galleries in a responsive grid
  - Each gallery links to its own dedicated page

- 🔍 **Gallery Filtering**
  - Filter galleries by band name using a search input

- 🖼️ **Featured Images Page**
  - Curated selection of standout work
  - Opens in a lightbox with navigation + captions

- 📰 **Magazine Features / Tear Sheets**
  - Print publication features displayed in a masonry grid

- 🌙 **Dark Cinematic UI**
  - Tailored for photography presentation
  - High contrast and minimal design

- 🎠 **Homepage Carousel**
  - Horizontal scrolling filmstrip carousel
  - Click-to-open lightbox modal

- 🔎 **Lightbox Modal Viewer**
  - Built with `yet-another-react-lightbox`
  - Keyboard navigation + swipe support
  - Captions displayed beneath images

- ☁️ **Cloudinary Image Delivery**
  - Optimized image loading via Cloudinary transformations
  - Helper utility for consistent URL generation

- 📄 **Per-Route Page Titles**
  - Each page sets a unique `document.title` (e.g. `Heilung | Thomas Woroniak Photography`)

- ⬆️ **Scroll to Top on Navigation**
  - Automatically scrolls to the top when changing routes

---

## 🧱 Tech Stack

### Frontend

- **React 19**
- **TypeScript**
- **React Router v7**
- **Tailwind CSS v4**
- **Lucide Icons** + **React Icons**

### Media & UI

- **Cloudinary** — image hosting and transformation
- **yet-another-react-lightbox** — lightbox viewer
- **react-photo-album** — masonry photo grid

### Tooling

- **Vite 7**
- **ESLint**

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```bash
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

> The dev server will throw a descriptive error on startup if this variable is missing.

### 3. Start the dev server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## 🗂 Project Structure

```
src/
  assets/
    screen-1.png
    screen-2.png
    screen-3.png
    screen-4.png

  components/
    AboutUs.tsx
    FeaturedGalleries.tsx
    FeaturedGrid.tsx
    FilterInput.tsx
    Footer.tsx
    GalleryGrid.tsx
    Header.tsx
    Hero.tsx
    HomeCarousel.tsx
    LightboxModal.tsx
    PublishedIn.tsx
    ScrollToTop.tsx
    ScrollToTopButton.tsx
    Services.tsx
    TechStackSection.tsx
    TestimonialGrid.tsx
    VideoEmbed.tsx
    VideoPlayer.tsx
    ViewGalleriesCTA.tsx

  data/
    carousel.ts
    featuredImages.ts
    galleries.ts
    magazines.ts

  hooks/
    usePageTitle.ts
    useScrollPosition.ts

  pages/
    AboutPage.tsx
    FeaturedImages.tsx
    GalleriesIndex.tsx
    GalleryPage.tsx
    HomePage.tsx
    MagazineImages.tsx

  types/
    photo.ts

  utils/
    cloudinary.ts

  App.tsx
  index.css
  main.tsx
```
