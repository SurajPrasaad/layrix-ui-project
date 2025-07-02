# Layrix UI

A modern, customizable UI component library built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Built with Tailwind CSS for maximum customization
- 🚀 Type-safe components with TypeScript
- 📦 CLI for easy component generation
- 🎯 Configurable components with variants and props
- 📦 Component documentation with JSON schema
- 🎯 Supports React 18.2.0 and above

## Installation

```bash
npm install @layrix-ui/react
```

## Usage

### CLI Commands

```bash
# Generate a new component
npx layrix-ui-cli generate button

# List available components
npx layrix-ui-cli components
```

### Using Components

```tsx
import { Button, Card } from "@layrix-ui/react";

// Default button
<Button>Click me</Button>

// With variants
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>

// Card component
<Card>
  <h2>Card Title</h2>
  <p>Card content goes here...</p>
</Card>

// Card with header
<Card header={<h2>Card Title</h2>}>
  <p>Card content goes here...</p>
</Card>
```

## Available Components

- Button
- Card
- Input
- Accordion
- Navigation
- AnimatedBadgeButton

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
    },
    "card": {
      "name": "card",
      "description": "A card component",
      "variants": ["default", "elevated"],
      "props": {
        "variant": {
          "type": "string",
          "default": "default",
          "description": "The variant of the card"
        },
        "header": {
          "type": "React.ReactNode",
          "description": "Header content for the card"
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
