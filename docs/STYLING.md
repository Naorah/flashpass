# FlashPass – Style Guide

This document outlines the visual and styling conventions used in the FlashPass app.

---

## Utility Framework

We use [**Tailwind CSS**](https://tailwindcss.com/) for all styling.

Make sure to keep styling **declarative** and **utility-first**, avoiding custom CSS unless necessary.

---

## Gradients & Colors

### Gradient Elements

Use the following gradient style for prominent visual components (cards, buttons, headers, etc.):

```html
bg-gradient-to-br from-indigo-500 to-purple-600
```

This creates a diagonal gradient from top-left to bottom-right, shifting from indigo to purple.

## Section Separators (Homepage)
To add separation between homepage sections, use:

```html
bg-indigo-500
```

This keeps a consistent branding color between parts of the page.

## Footer Background
The footer should have a neutral, dark tone using:

```html
bg-gray-900
```

This provides contrast and balance at the bottom of the page.

## Components Naming
Components follow the PascalCase naming convention:

```bash
# ✅ Correct
HowItWorks.svelte
FooterSection.svelte

# ❌ Not recommended
howitworks.svelte
how-it-works.svelte
```

## Other Conventions

Use spacing and padding via Tailwind utilities (p-4, mt-6, etc.)

Prefer rounded-2xl, shadow-md or shadow-lg for soft UI elements

Keep hover and focus states consistent (hover:opacity-90, focus:outline-none)

Mobile-first: prioritize responsive design using sm:, md:, lg:, etc.

## Tip
You can use [Tailwind Play](https://play.tailwindcss.com/) to prototype styles before adding them into the app.

Feel free to open a PR if you'd like to propose new UI rules or update this style guide.
