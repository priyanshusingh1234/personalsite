# ⭐ Priyanshu's StarDance Project (Hack Club 2026)

> *"Built at 3:42 AM with HTML, CSS, cold iced coffee, and zero frameworks."*

Hiii! Welcome to the repository for my official **StarDance** project site. StarDance is a wild tech competition hosted by **Hack Club**, and this repo holds both the documentation and personal website for my submission!

---

## 🦕 What is StarDance?
StarDance is a Hack Club challenge where high school hackers build creative, rhythm-driven, and hardware/software hacks that merge technology with music, beats, and light. 

Instead of building a sterile corporate app, I built a sound-reactive, rhythm-synchronized hardware rig using an ESP32 microcontroller, 60 WS2812B RGB NeoPixels, and an auto-gain electret microphone!

---

## 🛠️ The Hardware Setup
Here is what's sitting on my desk right now (surrounded by jumper wires and Cheetos):

| Component | What it does | Notes |
|---|---|---|
| **ESP32 NodeMCU** | The brain 🧠 | Fast dual-core chip bought with my saved pocket money |
| **WS2812B NeoPixel Strip (60 LEDs)** | The lights 💡 | Addressable RGB LEDs that flash and wave to the beat |
| **MAX9814 Electret Mic Module** | The ears 🎧 | Listens to ambient room music with auto-gain control |
| **1000µF Capacitor** | The life saver ⚡ | Prevents the ESP32 from brownout resetting when bass drops |
| **Breadboard + 20 Jumper Wires** | The spaghetti 🍝 | Please do not sneeze near it or a wire will disconnect |

---

## 🌐 The Website (`index.html`, `style.css`, `script.js`)
I wanted the site to feel **100% authentically made by a student**, not like a faceless tech company or a cookie-cutter Tailwind template:

- **Zero Framework Bloat:** No 300MB `node_modules` folder, no Vite build steps. Just pure HTML, CSS, and basic JavaScript.
- **Student Aesthetic:** Lined paper styling, retro terminal window bars (`VT323` font), late-night polaroid snapshots of my messy build desk with yellow washi tape, and retro 88x31 web badges.
- **Honest Git History:** Shows my real commit log (including panic moments like *"WHY ARE THE LEDS FLASHING RED HELP"* and *"nvm i plugged wire into wrong pin lol"*).
- **Simple, Non-Advanced JS:** Simple `getElementById`, counters with `localStorage`, and classic browser `alert()` popups when you vote.

---

## 🚀 How to Run Locally

You don't need `npm install` or anything complicated!

### Option 1: Double Click
Literally just double-click `index.html` to open it in Chrome, Edge, Firefox, or Safari!

### Option 2: Local Python Server (Recommended)
If you want to run a local dev server like a real terminal nerd:

```bash
# In this directory:
python -m http.server 8080
```
Then open your browser to:
👉 `http://localhost:8080`

---

## ⚠️ Known Quirks & Bugs
1. **Margin is 2px off on some monitors:** Look, CSS flexbox is hard at 3 AM. It works on my machine™!
2. **The `<marquee>` tag:** Yes, I used a real `<marquee>` tag in 2026. Deal with it, it looks cool.
3. **If you vote 50 times:** The vote counter will happily let you vote as much as you want because I didn't add rate-limiting lol.

---

## 💌 Special Thanks & Shoutouts
- **Hack Club** and **Orpheus 🦕** for running the coolest high school hacker competitions on earth!
- The late-night folks in the Hack Club Slack `#electronics` channel who helped me figure out why my FastLED code was crashing.
- Monster Energy and Flamin' Hot Cheetos for fueling this build.

---

### 📄 License
MIT License — feel free to fork this, learn from it, or use it for your own Hack Club projects! ⭐
