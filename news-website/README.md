# Modern News Website

A beautiful, modern news website built with React, TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Modern News Cards**: Beautiful cards with hover animations and professional design
- **Category Filtering**: Filter news by IT/Tech, Science, and General categories
- **AI Chatbot**: Interactive chatbot widget with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Powered by Framer Motion for delightful user experience

## Tech Stack

- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React (for icons)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation and category selection
│   ├── NewsCard.tsx    # Individual news card component
│   ├── ChatBot.tsx     # AI chatbot widget
│   └── Footer.tsx      # Footer with links and info
├── data/
│   └── newsData.ts     # Mock news data
├── types/
│   └── index.ts        # TypeScript type definitions
└── App.tsx             # Main application component
```

## Customization

- Add more news items in `src/data/newsData.ts`
- Modify colors in `tailwind.config.js`
- Update the AI chatbot responses in `src/components/ChatBot.tsx`

## Future Enhancements

- Connect to real news API
- Add search functionality
- Implement user authentication
- Add news bookmarking feature
- Integrate with OpenAI API for chatbot responses
