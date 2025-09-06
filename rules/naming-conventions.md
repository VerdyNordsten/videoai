# Project Naming Conventions

## File and Folder Names
- Use kebab-case for all file and folder names
- Example: `login-form.tsx`, `user-profile-card.tsx`

## Component Names
- Use PascalCase for React component names
- Example: `LoginForm`, `UserProfileCard`

## Functions, Variables, and Props
- Use camelCase for functions, variables, and props
- Example: `handleSubmit`, `isLoggedIn`, `onSubmit`

## Constants and Environment Variables
- Use UPPER_CASE for constants and environment variables
- Example: `API_URL`, `MAX_RETRY_COUNT`

## Types and Interfaces
- Use PascalCase for types and interfaces
- Example: `UserProps`, `AuthResponse`

## Context and Provider Names
- Use PascalCase for context and provider names
- Example: `AuthContext`, `ThemeProvider`

## Index Files
- Use `index.ts` for exporting components to make imports cleaner
- Example: `components/ui/index.ts` should export `{ Button } from "./button"`

## What NOT to do
- Do not use CamelCase or snake_case for file/folder names
- Do not use patterns like `auth/Login.tsx` - should be `auth/login/page.tsx` or `login-form.tsx`
- Do not change code content that is not related to naming conventions

## Current Project Structure
The project follows a standard Next.js 15+ structure with:
- `src/app` for application routes and layouts
- `src/components` for React components organized by feature
- `src/lib` for utility functions and business logic
- `src/components/ui` for shared UI components