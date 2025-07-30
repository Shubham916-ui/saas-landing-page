# SaaS Landing Page

A modern, responsive SaaS landing page built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Next.js 15
- 🎭 Smooth animations with Framer Motion
- 🌙 Dark/Light theme support
- 📱 Mobile-first approach
- 🎯 SEO optimized

## Tech Stack

- **Framework**: Next.js 15.4.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd saas-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live at `https://your-project.vercel.app`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── atoms/              # Atomic components
├── molecules/          # Molecular components
├── organisms/          # Organism components
└── design-tokens/      # Design system tokens
```

## Configuration

The project includes:
- `next.config.ts` - Next.js configuration with image optimization
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `vercel.json` - Vercel deployment configuration

## Troubleshooting

### Common Issues

1. **Build fails on Vercel**: Ensure all dependencies are in `package.json`
2. **Images not loading**: Check `next.config.ts` for remote patterns
3. **TypeScript errors**: Run `npm run build` locally to catch issues

### Environment Variables

No environment variables are required for basic deployment.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.
