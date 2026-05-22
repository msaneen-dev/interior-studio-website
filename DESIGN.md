---
name: Architectural Elegance
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#625e54'
  on-secondary: '#ffffff'
  secondary-container: '#e9e2d4'
  on-secondary-container: '#696459'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2c1600'
  on-tertiary-container: '#a57c52'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e9e2d4'
  secondary-fixed-dim: '#ccc6b9'
  on-secondary-fixed: '#1e1b13'
  on-secondary-fixed-variant: '#4a463d'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#eebd8e'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#61401b'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  headline-display:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 128px
---

## Brand & Style

This design system is built for a premium interior design and architecture studio, focusing on the intersection of structural precision and domestic warmth. The brand personality is authoritative yet inviting, reflecting a high-end agency aesthetic that values quality over quantity. 

The visual style is **Minimalist-Editorial**. It utilizes generous whitespace, a strict "less is more" approach to UI elements, and a focus on high-fidelity photography. The emotional response should be one of calm, sophistication, and trust—evoking the feeling of stepping into a well-curated, quiet gallery space. Every element is designed to feel intentional, balanced, and permanent.

## Colors

The palette is rooted in architectural materials. **Charcoal (#1A1A1A)** serves as the primary color, used for typography and structural elements to provide weight and authority. **Beige (#D9D2C5)** acts as a secondary "foundation" color, mimicking natural stone or linen to soften the interface.

A **Warm Accent (#A67C52)**—reminiscent of polished wood or brass—is used sparingly for interactive cues and highlights to guide the user's eye without disrupting the minimal aesthetic. The background environment is a "soft white" **Neutral (#F9F8F6)**, which reduces the harshness of pure white and provides a sophisticated, paper-like quality to the screen.

## Typography

The typography strategy employs a classic serif/sans-serif pairing to distinguish between narrative and utility. **EB Garamond** is used for all headlines and display text, bringing a timeless, literary elegance to project titles and editorial sections. It should be set with tight tracking for a premium feel.

**Hanken Grotesk** is used for body copy and labels. Its contemporary, sharp geometry provides a functional contrast to the serif headings, ensuring maximum readability for technical details and navigation. Use the `label-caps` style for navigation items and small subtitles to create a clear visual hierarchy through casing and letter spacing rather than weight alone.

## Layout & Spacing

This design system uses a **Fixed Grid** model for desktop to maintain a gallery-like composition, transitioning to a fluid model for mobile. The layout is defined by its "breatheable" air—vertical spacing between major sections (`section-gap`) is intentionally large to allow the architectural photography to be processed individually.

- **Desktop:** 12-column grid with a 1280px max-width. Large 64px outer margins create a frame-like effect.
- **Tablet:** 8-column grid with 32px margins. 
- **Mobile:** 4-column grid with 24px margins.

Elements should often span 6 or 8 columns to avoid overcrowding the horizontal plane. Asymmetry is encouraged in project galleries to create a dynamic, curated feel.

## Elevation & Depth

To maintain a grounded, architectural aesthetic, the design system avoids heavy shadows or floating effects. Instead, it utilizes **Tonal Layers** and **Subtle Ambient Shadows**.

Depth is primarily communicated through color layering (e.g., a Charcoal element sitting on a Beige surface). Where elevation is required—such as on hover states for project cards—use an extremely diffused, low-opacity shadow (`y-offset: 4px, blur: 20px, opacity: 0.04`) to suggest the object is lifting slightly off a flat surface. 

**Low-contrast outlines** (1px strokes in a slightly darker shade of the background) are preferred over shadows for defining input fields and containers, keeping the UI looking crisp and technical.

## Shapes

The shape language is strictly **Sharp (0px)**. This mimics the precision of architectural blueprints and the clean lines of modern interior structures. Every button, image container, and form field should feature 90-degree corners.

This lack of rounding reinforces the "premium" and "structural" nature of the brand. In rare instances where icons require a softer touch, they should still be enclosed in sharp-edged containers to maintain system consistency.

## Components

### Buttons
Primary buttons are solid Charcoal with White text, using the `label-caps` typography style. Secondary buttons are outlined (1px Charcoal) with no fill. All buttons are rectangular with zero radius. Hover states should involve a subtle shift to the Beige background or a slight opacity change.

### Cards
Project cards are image-centric. Typography (Title and Category) should sit below the image in a clean, stacked arrangement. Avoid placing text over images unless using a subtle dark overlay to ensure the "Editorial" readability of the serif typeface.

### Input Fields
Inputs are represented by a single bottom border (1px Charcoal) rather than a full box where possible. This "underlined" look minimizes visual clutter and aligns with the minimalist aesthetic.

### Navigation
The header should be minimal and transparent, turning to a solid Beige or White on scroll. Use high-contrast Charcoal text for links.

### Lists & Dividers
Dividers should be used sparingly. When necessary, use a thin 1px line in a light beige tone (`#E5E5E5`). Lists should have generous vertical padding (at least 16px) between items to maintain the spacious feel of the layout.