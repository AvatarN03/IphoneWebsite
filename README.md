
# 📱 iPhone Landing Page (React + GSAP + Three.js)

A modern, sleek, and animated iPhone landing page built with **React**, **GSAP** animations, and **Three.js** for interactive 3D model rendering. Perfect for product showcases, portfolio pieces, or e-commerce product landing.

## 🔥 Features

- ✨ Smooth entrance animations using **GSAP**
- 📦 3D iPhone model integrated using **Three.js**
- ⚙️ Fully responsive and mobile-friendly layout
- 🧠 Clean and modular React code structure
- 🌐 Scroll-triggered and hover animations
- 🕹️ Interactive 3D rotation and lighting

## 📸 Preview

![Landing Page Preview](https://github.com/user-attachments/assets/305ab09b-9138-41e4-be41-b25b81a7c8fa)

![Landing Page Preview - Responsive](https://github.com/user-attachments/assets/841a0bb7-670e-4d4f-9446-0d36c8a719f9)


## 🚀 Live Demo

[🔗 Live Site](https://iphone-website-ecru.vercel.app/)

## 🛠️ Tech Stack

| Tech               | Description                          |
|--------------------|--------------------------------------|
| React              | Frontend library for building UI     |
| GSAP               | Animations and transitions           |
| Three.js           | 3D rendering engine                  |
| React Three Fiber  | React renderer for Three.js          |
| Drei               | Useful helpers for React Three Fiber |
| Vite / CRA         | Development server and bundler       |

<details>
  <summary>## 📁 Project Structure</summary>


```
public/
    ├── assets/
        ├── images/
            ├── apple.svg
            ├── bag.svg
            ├── black.jpg
            ├── blue.jpg
            ├── chip.jpeg
            ├── explore1.jpg
            ├── explore2.jpg
            ├── frame.png
            ├── hero.jpeg
            ├── pause.svg
            ├── play.svg
            ├── replay.svg
            ├── right.svg
            ├── search.svg
            ├── watch.svg
            ├── white.jpg
            └── yellow.jpg
        ├── videos/
            ├── explore.mp4
            ├── frame.mp4
            ├── hero.mp4
            ├── highlight-first.mp4
            ├── hightlight-fourth.mp4
            ├── hightlight-sec.mp4
            ├── hightlight-third.mp4
            └── smallHero.mp4
        └── react.svg
    ├── models/
        └── scene.glb
    └── vite.svg
src/
    ├── components/
        ├── Features.jsx
        ├── Footer.jsx
        ├── Hero.jsx
        ├── Highlights.jsx
        ├── HowItWorks.jsx
        ├── IPhone.jsx
        ├── Lights.jsx
        ├── Loader.jsx
        ├── Modal.jsx
        ├── ModalView.jsx
        ├── Navbar.jsx
        └── VideoCarousel.jsx
    ├── constants/
        └── index.js
    ├── utils/
        ├── animation.js
        └── index.js
    ├── App.jsx
    ├── index.css
    └── main.jsx
.gitignore
eslint.config.js
index.html
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.js
vite.config.js
```
</details>

## 🚧 Installation

```bash
# Clone the repo
git clone https://github.com/AvatarN03/IphoneWebsite.git

# Navigate into the project
cd IphoneWebsite

# Install dependencies
npm install

# Run the development server
npm run dev
```

> Make sure you have a `.glb` iPhone model inside the `public/` folder. You can download one from Sketchfab or similar platforms.

## 🧩 Key Dependencies

```json
"@gsap/react": "^2.1.2",
"@react-three/drei": "^10.0.6",
"@react-three/fiber": "^9.1.2",
"gsap": "^3.12.7",
"react": "^19.0.0",
"react-dom": "^19.0.0",
"three": "^0.175.0"

```

## ✨ Credits

- **Tutorial Source**: Project based on [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) tutorial. Huge thanks for the amazing guidance and resources.
- **3D Model**: [Sketchfab / Author Name]
- **Inspiration**: Apple product landing pages
- **Libraries**: GSAP, Three.js, React Three Fiber, Drei

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

## 💡 Future Enhancements

- Add scroll-based animation triggers
- Add multiple color/model options
- Add CTA and email form integration
- Improve mobile gestures and tilt effects

## 🙋‍♂️ Author

Developed by **[Prashanth Naidu](https://github.com/AvatarN03)**

For inquiries, feel free to reach out!

---

Got it! Since you followed **JavaScript Mastery**'s tutorial, it’s good to mention and credit them properly in your `README.md` too.  
Here’s the updated, **full** text block — including the credit to **JavaScript Mastery** — ready to copy:

---





