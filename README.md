# Layrix UI

A modern, customizable UI component library built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Built with Tailwind CSS for maximum customization
- 🚀 Type-safe components with TypeScript
- 📦 CLI for easy component generation
- 🎯 Configurable components with variants and props
- 📦 Component documentation with JSON schema

## Installation

```bash
npm install layrix-ui
```

## Usage

### CLI Commands

```bash
# Generate a new component
npx layrix-ui generate button

# List available components
npx layrix-ui components
```

### Using Components

```tsx
import { Button } from "layrix-ui";

// Default button
<Button>Click me</Button>

// With variants
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
```

## Available Components

- Button
- Input

## Component Configuration

Components can be configured using `components.json`:

```json
{
  "components": {
    "button": {
      "name": "button",
      "description": "A button component",
      "variants": ["default", "secondary", "destructive"],
      "props": {
        "variant": {
          "type": "string",
          "default": "default",
          "description": "The variant of the button"
        }
      }
    }
  }
}
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```
