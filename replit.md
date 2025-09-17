# My Club History - Sports Heritage Books Platform

## Overview

My Club History is a premium publishing service that creates multimedia hardcover history books for sports clubs across Ireland. The platform combines traditional book publishing with cutting-edge augmented reality (AR) technology, allowing readers to hold their phone over pages to watch goal celebrations, interviews, and historic moments come alive. The business model focuses on preserving club heritage through collaborative storytelling, where clubs share their memories and the company handles all aspects of production and delivery.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/UI component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system featuring sports-inspired colors (Deep Premium Blue, Warm Gold, Rich Navy)
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation

### Design System
- **Typography**: Playfair Display (serif) for headers, Inter (sans-serif) for body text
- **Color Palette**: Custom HSL color system with light/dark mode support
- **Layout**: Mobile-first responsive design with 12-column grid system
- **Component Library**: Comprehensive UI components built on Radix UI primitives

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Design**: RESTful endpoints with structured error handling
- **Database Layer**: Drizzle ORM with PostgreSQL schema definitions
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Development**: Hot module replacement and development server integration

### Data Storage
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless database integration
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Data Validation**: Zod schemas for runtime type checking and validation

### Core Business Logic
- **Contact Management**: System for capturing and managing club inquiries with validation
- **User Management**: Basic user authentication and management system
- **Content Structure**: Schema designed to support sports club information including club name, contact details, county, and project messages

### Development Infrastructure
- **Build System**: Vite for frontend bundling with esbuild for server-side builds
- **Type Safety**: Full TypeScript implementation across frontend, backend, and shared schemas
- **Development Tools**: Runtime error overlays, hot reloading, and development-specific tooling
- **Path Aliases**: Organized import structure with @ aliases for clean code organization

## External Dependencies

### UI and Styling
- **Radix UI**: Complete set of accessible, unstyled UI primitives for building the design system
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for the sports-inspired design
- **Lucide React**: Icon library providing consistent iconography throughout the application
- **Class Variance Authority**: Utility for creating variant-based component APIs

### Data and Forms
- **TanStack Query**: Powerful data synchronization and caching for server state management
- **React Hook Form**: Performant forms library with minimal re-renders and easy validation
- **Zod**: TypeScript-first schema validation library used across forms and API validation
- **Date-fns**: Modern JavaScript date utility library for date manipulation

### Development and Build Tools
- **Vite**: Fast build tool and development server with React plugin support
- **TypeScript**: Full type safety across the entire application stack
- **ESBuild**: Fast JavaScript bundler used for production server builds
- **Drizzle Kit**: CLI tool for database schema management and migrations

### Database and Backend
- **Neon Database**: Serverless PostgreSQL platform for scalable database hosting
- **Drizzle ORM**: Lightweight, type-safe ORM with excellent TypeScript integration
- **Express.js**: Minimal web framework for building the REST API
- **Connect-pg-simple**: PostgreSQL session store for Express sessions

### UI Enhancement Libraries
- **Embla Carousel**: Touch-friendly carousel library for image galleries and content sliders
- **React Day Picker**: Flexible date picker component for forms requiring date selection
- **CMDK**: Command palette component for enhanced user navigation and search functionality