# Overview

This is a professional German-language website for Joachim Hummel, an AI automation specialist with 30 years of IT experience. The site showcases his expertise in AI automation, workflow development, and self-hosting solutions targeting IT freelancers and businesses. Built as a modern single-page application with a contact form integration, the website features an N8N-inspired color scheme (deep blue and violet) and comprehensive service offerings in AI consulting, n8n workflow development, and infrastructure solutions.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library providing consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and React hooks for local state
- **Design System**: Custom N8N-inspired color palette (deep blue #220 85% 15%, violet #270 75% 25%) with Inter font family

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Structure**: RESTful API with `/api/contact` endpoint for form submissions
- **Email Service**: Brevo (formerly Sendinblue) integration for transactional emails including contact form processing and confirmation emails
- **Validation**: Zod schemas for request validation and type safety
- **Error Handling**: Centralized error middleware with proper HTTP status codes

## Component Structure
The application follows a modular component architecture:
- **Layout Components**: Navigation, Hero, About, Services, Contact, Footer
- **UI Components**: shadcn/ui component library providing buttons, cards, forms, toasts, and other interactive elements
- **Form Handling**: React Hook Form with Zod validation for the contact form
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities

## Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Fast production builds for the server
- **Hot Module Replacement**: Development server with instant updates
- **Path Aliases**: Configured aliases (@/, @shared/) for clean imports

# External Dependencies

## Email Service
- **Brevo API**: Transactional email service for contact form submissions and automated confirmations
- **Configuration**: Requires BREVO_API_KEY and BREVO_SENDER_EMAIL environment variables

## Database Infrastructure
- **ORM**: Drizzle ORM configured for PostgreSQL with connection pooling via @neondatabase/serverless
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Current Usage**: Minimal database usage with basic user schema (primarily for future expansion)

## UI Component Library
- **Radix UI**: Accessible, unstyled components as foundation for custom design system
- **Lucide React**: Icon library providing consistent iconography throughout the application
- **Class Variance Authority**: Type-safe variant-based component styling

## Development Dependencies
- **Replit Integration**: Custom Replit development plugins for enhanced development experience
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **Runtime Error Overlay**: Development error handling and debugging tools