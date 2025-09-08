# Qwen Code - Task List and Improvements
Prompt: OAuth “You’re signing back in” Interstitial

Goal

Setelah user memilih akun di Google OAuth (/oauthchooseaccount), jika email sudah terdaftar, JANGAN langsung ke /dashboard.

Tampilkan halaman konfirmasi “You’re signing back in to <APP_NAME>” (mirip Google signin/oauth/id) dengan tombol Continue dan Cancel.

Jika email belum terdaftar, lanjutkan flow sign-up seperti biasa.

Stack

Next.js App Router + TypeScript + Tailwind + shadcn/ui.

Provider Google OAuth (boleh NextAuth atau Supabase Auth – sediakan dua implementasi).

Pastikan session tetap ada sehingga saat klik Continue tidak perlu re-auth.

Routes & Flow

/api/auth/callback/google (atau callback yang setara) menangkap profil Google.

Cek di DB:

exists(email) ?

true → redirect ke /signing-back?email=<email>&provider=google.

false → lanjut registrasi/ onboarding /onboarding.

Page /signing-back:

Headline: “You’re signing back in to <APP_NAME>”

Subtext menampilkan email dan avatar jika tersedia.

Link ke Privacy Policy & Terms.

Tombol:

Cancel → signOut & redirect ke /login.

Continue → redirect ke /dashboard.

Akses langsung ke /dashboard tetap dilindungi session guard.

Acceptance Criteria

User existing selalu melihat halaman interstitial terlebih dulu.

Klik Continue → masuk ke /dashboard tanpa re-auth.

Klik Cancel → kembali ke /login (session dibersihkan).

Halaman responsif & tema gelap/terang mengikuti sistem.

UI

Gunakan Card, Avatar, Button, Separator dari shadcn/ui.

Layout mirip Google: judul besar, email pill, dua tombol (Cancel/Continue), links kecil di footer.

Security

Jangan menaruh data sensitif di query selain email bertipe display; gunakan session/CSRF token untuk aksi Continue.

Validasi bahwa /signing-back hanya bisa diakses jika baru selesai login (mis. flag postAuth=true di cookie selama 5 menit).

Implementasi – NextAuth (pilihan 1)

next-auth config

pages (App Router gunakan callbacks.redirect).

Di callbacks.signIn → setelah sukses & user exists, set cookie postAuth=true dan redirect ke /signing-back.

Di callbacks.session pastikan email & image tersedia.

OIDC params: set authorization dengan prompt: "select_account consent", access_type: "offline", include_granted_scopes: true.

DB check

Fungsi findUserByEmail(email).

/signing-back page

Server component yang membaca session. Jika !cookie.postAuth → redirect ke /dashboard.

Tampilkan UI.

Action:

POST /api/auth/continue → hapus cookie postAuth lalu redirect('/dashboard').

POST /api/auth/cancel → signOut({ callbackUrl: '/login' }).

Middleware

Proteksi /dashboard dkk untuk butuh session, tapi biarkan /signing-back diakses saat postAuth=true.

Implementasi – Supabase Auth (pilihan 2)

Gunakan PKCE + signInWithOAuth({ provider: 'google', options: { queryParams: { prompt: 'select_account consent', access_type: 'offline', include_granted_scopes: 'true' }}}).

Auth callback handler

Setelah supabase.auth.exchangeCodeForSession(), cek user.email.

Jika user exists → set cookie postAuth=true dan redirect('/signing-back').

Jika tidak → redirect('/onboarding').

/signing-back page

Ambil user dari supabase.auth.getUser().

UI sama seperti di atas.

Continue → router.replace('/dashboard') lalu hapus cookie postAuth.

Cancel → supabase.auth.signOut() lalu router.replace('/login').

Route Guard

Middleware yang menolak akses /dashboard bila tidak ada session; /signing-back hanya valid saat postAuth=true.

Komponen UI (ringkas)

SigningBackCard:

Avatar (dari user.image), Email pill.

Title, subtitle.

Buttons: Cancel (ghost) | Continue (primary).

Footer links: Privacy, Terms.

Catatan Parameter OAuth

Gunakan kombinasi prompt=select_account consent agar Google selalu menampilkan pemilihan akun dan konsen granular (mirip URL contoh), namun interstitial “You’re signing back” ditangani DI APLIKASI melalui /signing-back seperti brief ini (jangan bergantung pada variasi halaman Google).

Tambahkan include_granted_scopes=true dan access_type=offline bila perlu refresh token.

Testing

Kasus: existing user (lihat interstitial → Continue/Cancel).

Kasus: new user (langsung onboarding).

Kasus: deep link ke /dashboard tanpa session (harus ke /login).

Kasus: akses /signing-back tanpa postAuth (redirect aman).

Output yang diharapkan

File/komponen untuk page /signing-back.

Handler (NextAuth callbacks atau Supabase callback) yang mengarahkan ke interstitial berdasarkan user exists.

Middleware/guards.

Snippet konfigurasi OAuth (query params seperti di atas).

## Fixed Issues

### Development Commands
- Never run `npm run dev` or `npm run build` directly
- Use the proper development workflow as specified in the project documentation
