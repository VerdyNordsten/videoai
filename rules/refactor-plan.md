# Refactor Plan: Naming Convention Consistency

## Issue Identified
The file `src/components/landing/Navbar.tsx` did not follow the kebab-case naming convention.

## Files Renamed
1. `src/components/landing/Navbar.tsx` → `src/components/landing/navbar.tsx` ✅ Completed

## Verification
- Checked that the Navbar component was not imported or used anywhere in the project
- Successfully renamed the file to follow kebab-case convention
- No import statements needed to be updated since the component wasn't used

## Summary
The project now consistently follows the kebab-case naming convention for all files. All component files in the `src/components` directory now use kebab-case naming.