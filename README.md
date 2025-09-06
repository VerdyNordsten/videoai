<div align="center">
  <h1>VideoAI - Transform Your Content with AI</h1>
  <p>Turn any Reel, TikTok, or Short into fresh marketing ideas using AI-powered analysis</p>
  
  <p>
    <a href="#tech-stack">
      <img src="https://img.shields.io/badge/tech%20stack-%20%F0%9F%9A%80-green" alt="Tech Stack" />
    </a>
    <a href="https://nextjs.org/">
      <img src="https://img.shields.io/badge/Next.js-15-black" alt="Next.js" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-%3E=5.0-blue" alt="TypeScript" />
    </a>
    <a href="https://tailwindcss.com/">
      <img src="https://img.shields.io/badge/TailwindCSS-v4-38B2AC" alt="TailwindCSS" />
    </a>
    <a href="https://ui.shadcn.com/">
      <img src="https://img.shields.io/badge/UI-shadcn/ui-orange" alt="shadcn/ui" />
    </a>
  </p>
</div>

## 🎯 About VideoAI

VideoAI is a cutting-edge SaaS platform that transforms any Reel, TikTok, or Short into fresh marketing ideas using AI-powered analysis. Our platform helps content creators and marketers maximize their video content's potential by automatically generating new, engaging variations.

## ✨ Key Features

- **AI-Powered Video Analysis** - Automatically analyze your short-form videos to understand key elements that make them engaging.
- **Content Repurposing** - Transform existing videos into new marketing materials with fresh perspectives.
- **Automated Ideation** - Generate new content ideas based on your successful videos.
- **Dashboard Analytics** - Track performance metrics and insights for all your transformed content.
- **Easy Integration** - Seamless integration with popular social media platforms.

## 🚀 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | [Next.js 15](https://nextjs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) |
| **Database** | [PostgreSQL](https://www.postgresql.org/) |
| **ORM** | [Drizzle ORM](https://orm.drizzle.team/) |
| **Authentication** | [JWT](https://jwt.io/) |
| **Payments** | [Stripe](https://stripe.com/) |
| **Deployment** | [Vercel](https://vercel.com/) |

### 📦 Key Dependencies

- **React 19** - Latest React with concurrent features
- **Lucide React** - Beautiful & consistent icons
- **Radix UI** - Unstyled, accessible components
- **Framer Motion** - Smooth animations and transitions
- **Zod** - TypeScript-first schema validation

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) >= 8.x
- [PostgreSQL](https://www.postgresql.org/) database

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd videoai
npm install
```

### Environment Setup

Set up your environment variables by copying the example file:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/videoai

# Authentication
JWT_SECRET=your-super-secret-jwt-key
SESSION_SECRET=your-session-secret

# Stripe (for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

### Database Setup

Initialize the database:

```bash
npm run db:setup
npm run db:seed
```

### Development

Run the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## 🐳 Docker Development

You can also run the application using Docker for a consistent environment across all development machines.

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) for Windows or Mac
- For Linux, install both [Docker Engine](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)

### Running with Docker

```bash
# Start the development environment
docker-compose -f docker-compose.dev.yml up

# Stop the development environment
docker-compose -f docker-compose.dev.yml down
```

This will start both the Next.js application and PostgreSQL database in separate containers. The application will be available at [http://localhost:3000](http://localhost:3000).

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## 🐳 Docker Production Deployment

To deploy the application using Docker:

```bash
# Build and start the production environment
docker-compose up --build

# Stop the production environment
docker-compose down
```

For production deployments, make sure to update the environment variables in the `docker-compose.yml` file with your actual secrets and configuration.

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) for Windows or Mac
- For Linux, install both [Docker Engine](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)

## ☁️ Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/), the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/your-username/videoai)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🧪 Testing

Run the test suite:

```bash
# Coming soon
```

## 📖 Documentation

- [Project Wiki](#) - Comprehensive documentation (Coming Soon)
- [API Reference](#) - API endpoints and usage (Coming Soon)
- [Contributing Guide](#) - How to contribute to the project (Coming Soon)

## 🤝 Contributing

We welcome contributions to VideoAI! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read our [Contributing Guide](#) for detailed information on our code of conduct and development process.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Lead Developer* - [GitHub Profile](https://github.com/your-username)

See also the list of [contributors](https://github.com/your-username/videoai/contributors) who participated in this project.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [shadcn](https://twitter.com/shadcn) for the incredible UI components
- [Vercel](https://vercel.com/) for seamless deployment
- All the open-source contributors who made this project possible

---

<div align="center">
  <sub>Built with ❤️ by creators, for creators.</sub>
</div>