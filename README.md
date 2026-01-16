# AI Self-Healing Playwright

An AI-powered self-healing test automation framework built with Playwright.
This project demonstrates how to build resilient UI automation using:

- Gherkin for intent
- Playwright for execution
- OpenAI for self-healing selectors

## Why?
UI changes break selectors. AI fixes them automatically.

## How It Works
1. Test fails
2. DOM snapshot captured
3. OpenAI suggests a better selector
4. Test retries with validation

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and add your OpenAI API key:
   ```bash
   cp .env.example .env
   ```

3. Run tests:
   ```bash
   npm test
   ```

## Project Structure

- `features/` - Gherkin feature files
- `steps/` - Step definitions
- `core/` - Core framework logic
- `ai/` - AI integration (OpenAI, selector healing)
- `utils/` - Utility functions
- `tests/` - Playwright test specs
