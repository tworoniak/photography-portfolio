# React + TypeScript + Vite

# Photography Portfolio 📸

A modern, dark-themed photography portfolio built with **React + TypeScript** featuring curated galleries, featured image collections, a carousel highlight reel, and a smooth lightbox viewing experience.

Designed as a clean, editorial-style portfolio site for showcasing concert photography, portraits, and commissioned work.

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

- ⬆️ **Scroll to Top on Navigation**
  - Automatically scrolls to the top when changing routes

---

## 🧱 Tech Stack

### Frontend

- **React**
- **TypeScript**
- **React Router**
- **TailwindCSS**
- **Lucide Icons**

### Media & UI

- **Cloudinary**
- **yet-another-react-lightbox**

### Tooling

- **Vite**
- **ESLint**

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install


```

### Project Structure

```
src/
  components/        # Reusable UI components (carousel, lightbox, grids, etc.)
  pages/             # Route pages (Home, GalleriesIndex, GalleryDetail, FeaturedImages)
  data/              # Gallery + featured image data
  types/             # TypeScript types
  utils/             # Cloudinary helper utilities
  styles/            # Global styles (Tailwind layers)


```
