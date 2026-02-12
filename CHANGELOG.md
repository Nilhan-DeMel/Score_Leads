# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-02-12

### Added

- **Core Engine**: Deterministic lead parser and scoring engine with explainable signals.
- **Service Profiles**: ICP-grounded scoring logic with keywords and region rules.
- **Batch Processing**: Support for CSV upload and bulk lead processing.
- **History & Persistence**: Auto-saving scoring runs to local IndexedDB with export support (CSV/JSON).
- **UI/UX**: Premium "Glassmorphism" mobile-first interface with motion animations.
- **CI/CD**: Multi-lane deployment to Vercel (Previews) and Firebase (Hosting).
- **Security**: Automated CodeQL scanning, Dependabot, and Dependency Review gates.
- **Agent Native**: Full `.agent/` onboarding pack for seamless AI collaboration.

### Changed

- Refactored scoring logic to support "Hard Exclusions" (-100 points).
- Optimized lead parsing for public suffixes and bare domain heuristics.

### Infrastructure

- Playwright E2E smoke tests for mobile and desktop viewports.
- Integrated Vitest for unit and component testing.
- Automated repository mapping for agent context.
