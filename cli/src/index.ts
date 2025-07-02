import config from "./config";

import fs from "fs-extra";
import { join } from "path-browserify";

async function generateComponent(componentName: string) {
  const componentConfig = config.components[componentName];
  if (!componentConfig) {
    throw new Error(`Component ${componentName} not found in configuration`);
  }

  const componentDir = join(process.cwd(), "src/components", componentName);
  await fs.ensureDir(componentDir);

  // Generate component file
  const componentContent = `
import React from "react";
import { cn } from "@/lib/utils";

interface ${componentName.charAt(0).toUpperCase() + componentName.slice(1)}Props
  extends React.ComponentPropsWithRef<"button"> {}

export const ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} = React.forwardRef<
  HTMLButtonElement,
  ${componentName.charAt(0).toUpperCase() + componentName.slice(1)}Props
>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

${componentName.charAt(0).toUpperCase() + componentName.slice(1)}.displayName = "${componentName.charAt(0).toUpperCase() + componentName.slice(1)}";
  `;

  await fs.writeFile(join(componentDir, `${componentName}.tsx`), componentContent);

  // Generate styles file
  const stylesContent = `
.${componentName} {
  @apply px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90;
}

.${componentName}.secondary {
  @apply bg-secondary text-secondary-foreground hover:bg-secondary/80;
}

.${componentName}.destructive {
  @apply bg-destructive text-destructive-foreground hover:bg-destructive/90;
}

.${componentName}.outline {
  @apply border border-input bg-background hover:bg-accent hover:text-accent-foreground;
}

.${componentName}.ghost {
  @apply hover:bg-accent hover:text-accent-foreground;
}

.${componentName}.link {
  @apply underline-offset-4 hover:underline;
}
  `;

  await fs.writeFile(join(componentDir, `${componentName}.css`), stylesContent);

  console.log(`Successfully generated ${componentName} component!`);
}

async function listComponents() {
  console.log("Available components:");
  Object.entries(config.components).forEach(([name, config]) => {
    console.log(`\n${name}:`);
    console.log(`  Description: ${config.description}`);
    console.log(`  Variants: ${config.variants.join(", ")}`);
  });
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  try {
    switch (command) {
      case "generate": {
        const componentName = args[1];
        if (!componentName) {
          throw new Error("Component name is required");
        }
        await generateComponent(componentName);
        break;
      }
      case "components":
        await listComponents();
        break;
      default:
        console.log("Available commands:");
        console.log("  generate <component-name>");
        console.log("  components");
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : "An unknown error occurred");
    process.exit(1);
  }
}

main();
