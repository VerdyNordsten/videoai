# Development Workflow Guidelines

## Important Restriction

⚠️ **Do not run `npm run dev` or `npm run build` directly**

These commands should never be executed directly as they can cause conflicts with the project's development environment and build process.

## Proper Development Workflow

Instead of running the commands directly, follow these steps:

1. Use the designated development scripts provided in the project
2. Follow the Docker-based development workflow when available
3. Use the proper build pipeline as documented in the deployment guide

## Reasoning

This restriction exists to:
- Maintain consistency across development environments
- Prevent conflicts with the project's Turbopack configuration
- Ensure proper handling of environment variables
- Avoid issues with the Supabase authentication setup
- Maintain compatibility with the project's CI/CD pipeline

## Alternative Development Commands

For development, use:
- Docker-based development environment
- Designated scripts in package.json that don't directly invoke Next.js dev server
- The proper testing workflow as defined in the project documentation

## Production Builds

For production builds, always use:
- The designated build pipeline
- CI/CD processes
- Docker-based build processes

This ensures that all necessary environment variables and configurations are properly applied.