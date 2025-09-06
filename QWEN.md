Prompt Rework Project (Naming Convention)

Instruksi:
Tolong lakukan refactor penuh terhadap struktur proyek saya agar konsisten dengan best practice startup React/Next.js untuk penamaan.

Aturan yang harus dipatuhi:

Komponen React → gunakan PascalCase.

Contoh: LoginForm, UserProfileCard.

Hooks, fungsi, variabel, props → gunakan camelCase.

Contoh: useAuthContext, handleSubmit, isLoggedIn.

Files & Folders → gunakan kebab-case.

Contoh: login-form.tsx, user-profile-card.tsx.

Jika ada folder Auth atau Components, ubah jadi auth/ atau components/.

Constants & Environment Variables → gunakan UPPER_CASE.

Contoh: API_URL, MAX_RETRY_COUNT.

Types & Interfaces → gunakan PascalCase.

Contoh: UserProps, AuthResponse.

Context & Provider → gunakan PascalCase.

Contoh: AuthContext, ThemeProvider.

Index Files → gunakan index.ts untuk ekspor agar import lebih rapi.

Contoh: components/ui/index.ts → export { Button } from "./button".

Hal yang tidak boleh dilakukan:

Jangan sisakan nama file/folder dengan CamelCase atau snake_case.

Jangan ada auth/Login.tsx → harus jadi auth/login/page.tsx atau login-form.tsx sesuai kebutuhan.

Jangan ubah isi kode yang tidak berkaitan dengan naming convention.

Output yang saya mau:

Tunjukkan struktur folder & file baru setelah refactor.

Beri tahu file/komponen apa saja yang di-rename.

Jika ada import yang perlu di-update karena perubahan nama, perlihatkan contoh update-nya.

Fokus utama: semua konsisten mengikuti aturan penamaan di atas.

## Refactor Plan

### Files/Folders to be renamed (kebab-case):
1. src/components/landing/DashboardPreview.tsx → src/components/landing/dashboard-preview.tsx
2. src/components/landing/FAQ.tsx → src/components/landing/faq.tsx
3. src/components/landing/FeaturesShowcase.tsx → src/components/landing/features-showcase.tsx
4. src/components/landing/FinalCTA.tsx → src/components/landing/final-cta.tsx
5. src/components/landing/Footer.tsx → src/components/landing/footer.tsx
6. src/components/landing/HeroSection.tsx → src/components/landing/hero-section.tsx
7. src/components/landing/HowItWorks.tsx → src/components/landing/how-it-works.tsx
8. src/components/landing/Integrations.tsx → src/components/landing/integrations.tsx
9. src/components/landing/LandingPage.tsx → src/components/landing/landing-page.tsx
10. src/components/landing/Navbar.tsx → src/components/landing/navbar.tsx
11. src/components/landing/Pricing.tsx → src/components/landing/pricing.tsx
12. src/components/landing/SampleOutputPreview.tsx → src/components/landing/sample-output-preview.tsx
13. src/components/landing/Testimonials.tsx → src/components/landing/testimonials.tsx
14. src/components/landing/ui/FloatingElements.tsx → src/components/landing/ui/floating-elements.tsx
15. src/components/landing/ui/HeroButtons.tsx → src/components/landing/ui/hero-buttons.tsx
16. src/components/landing/ui/HeroSubtitle.tsx → src/components/landing/ui/hero-subtitle.tsx
17. src/components/landing/ui/HeroTitle.tsx → src/components/landing/ui/hero-title.tsx
18. src/components/landing/ui/HowItWorksStep.tsx → src/components/landing/ui/how-it-works-step.tsx
19. src/components/landing/ui/UserTrustSection.tsx → src/components/landing/ui/user-trust-section.tsx
20. src/components/shared/ThemeProvider.tsx → src/components/shared/theme-provider.tsx
21. src/components/shared/ThemeToggle.tsx → src/components/shared/theme-toggle.tsx

### Components that follow PascalCase (no changes needed):
All components already follow PascalCase:
1. DashboardPreview
2. FAQ
3. FeaturesShowcase
4. FinalCTA
5. Footer
6. HeroSection
7. HowItWorks
8. Integrations
9. LandingPage
10. Navbar
11. Pricing
12. SampleOutputPreview
13. Testimonials
14. FloatingElements
15. HeroButtons
16. HeroSubtitle
17. HeroTitle
18. HowItWorksStep
19. UserTrustSection
20. ThemeProvider
21. ThemeToggle
22. AuthFormWrapper
23. EmailInput
24. LoginForm
25. PasswordInput
26. SocialLoginButtons
27. Login

### Files that already follow kebab-case (no changes needed):
1. src/components/auth/auth-form-wrapper.tsx
2. src/components/auth/email-input.tsx
3. src/components/auth/index.ts
4. src/components/auth/login-form.tsx
5. src/components/auth/password-input.tsx
6. src/components/auth/social-login-buttons.tsx
7. src/app/(auth)/login/actions.ts
8. src/app/(auth)/login/layout.tsx
9. src/app/(auth)/login/login.tsx
10. src/app/(auth)/login/page.tsx
11. src/app/(auth)/register/actions.ts
12. src/app/(auth)/register/layout.tsx
13. src/app/(auth)/register/login.tsx
14. src/app/(auth)/register/page.tsx
15. All files in src/app/(dashboard)/ directory
16. All files in src/app/api/ directory
17. src/app/layout.tsx
18. src/app/not-found.tsx
19. src/app/page.tsx
20. All files in src/components/ui/ directory
21. All files in src/lib/ directory

### Import paths that need to be updated:
After renaming the files, all import paths referencing the renamed files have been updated. For example:
1. src/app/page.tsx: import LandingPage from '@/components/landing/LandingPage' → import LandingPage from '@/components/landing/landing-page'
2. src/components/landing/landing-page.tsx: import Navbar from '@/components/landing/Navbar' → import Navbar from '@/components/landing/navbar'
3. src/app/layout.tsx: import { ThemeProvider } from '@/components/shared/ThemeProvider' → import { ThemeProvider } from '@/components/shared/theme-provider'

## Refactor Completed

All files have been successfully renamed to follow kebab-case naming convention, and all import paths have been updated accordingly. The project now follows consistent naming conventions:

1. Files & Folders → kebab-case
2. Components → PascalCase
3. Hooks, functions, variables, props → camelCase
4. Constants & Environment Variables → UPPER_CASE
5. Types & Interfaces → PascalCase
6. Context & Provider → PascalCase