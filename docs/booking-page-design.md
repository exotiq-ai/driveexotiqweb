# Booking Page Design Mockup

## Overview

Design specification for the Drive Exotiq booking pages, integrating Wheelbase checkout iframe with branded vehicle browser.

---

## Page Structure

### 1. `/booking` - City Selection Landing Page

```
┌─────────────────────────────────────────────────────┐
│  HEADER                                             │
├─────────────────────────────────────────────────────┤
│  Hero: "RESERVE YOUR RIDE"                          │
│  Subtext: Book exotic experiences...                │
├─────────────────────────────────────────────────────┤
│  HOW IT WORKS (3 steps, ultra-concise)              │
│  [Browse] → [Book] → [Drive]                        │
├─────────────────────────────────────────────────────┤
│  SELECT YOUR CITY                                   │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐               │
│  │ PHOENIX │ │SCOTTSDALE│ │ DENVER │               │
│  │  (img)  │ │  (img)  │ │ (coming)│               │
│  └─────────┘ └─────────┘ └─────────┘               │
├─────────────────────────────────────────────────────┤
│  FOOTER                                             │
└─────────────────────────────────────────────────────┘
```

**Features:**
- Clean hero section with Drive Exotiq branding
- Concise "How It Works" - 3 steps: Browse → Book → Drive
- City selection cards with imagery
- Cities: Phoenix (active), Scottsdale (active), Denver (coming soon)

---

### 2. `/booking/phoenix` - Reservation Page

```
┌─────────────────────────────────────────────────────┐
│  HEADER                                             │
├─────────────────────────────────────────────────────┤
│  Mini Hero: "PHOENIX FLEET"                         │
│  Breadcrumb: Booking > Phoenix                      │
├─────────────────────────────────────────────────────┤
│  TAKE YOUR PICK (Vehicle Browser)                   │
│  [All] [Luxury] [Electric] [Practical]              │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                       │
│  │Car1│ │Car2│ │Car3│ │Car4│  (carousel/grid)      │
│  └────┘ └────┘ └────┘ └────┘                       │
├─────────────────────────────────────────────────────┤
│  BOOK YOUR EXPERIENCE                               │
│  ┌──────────────────────┬─────────────────┐        │
│  │                      │ Location Hours  │        │
│  │   WHEELBASE IFRAME   │ Mon: 8:30-4PM   │        │
│  │   (full checkout)    │ Tue: 8:30-4PM   │        │
│  │                      │ ...             │        │
│  └──────────────────────┴─────────────────┘        │
├─────────────────────────────────────────────────────┤
│  TRUST BADGES: [Romli Logo] [Insurance] [24/7]     │
├─────────────────────────────────────────────────────┤
│  FAQ (Accordion)                                    │
├─────────────────────────────────────────────────────┤
│  FOOTER                                             │
└─────────────────────────────────────────────────────┘
```

**Features:**
- Mini hero with Phoenix branding
- Breadcrumb navigation
- Vehicle browser with category filters (All, Luxury, Electric, Practical)
- Horizontal scrollable carousel with vehicle cards
- Wheelbase iframe integration (split layout on desktop)
- Location hours sidebar
- Trust badges section
- FAQ accordion

---

## Technical Specifications

### Wheelbase Iframe Integration

**Temporary URL (Partner Account):**
```
https://checkout.wheelbasepro.com/reserve/467628?color=000000&locale=en-us&newfilters=true
```

**Parameters:**
- `color=000000` - Dark theme to match Drive Exotiq
- `locale=en-us` - English US
- `newfilters=true` - Enable new filter UI

**Implementation:**
- Use iFrameResizer for dynamic height adjustment
- Mobile-responsive (full-width on mobile, split on desktop)
- Will be replaced with Drive Exotiq's own Wheelbase account URL

### Layout Specifications

**Desktop (lg+):**
- Iframe: 70% width (left)
- Location info sidebar: 30% width (right)

**Mobile:**
- Full-width stacked layout
- Location info below iframe

### Location Hours (From Reference)

| Day       | Pick up         | Drop off            |
|-----------|-----------------|---------------------|
| Monday    | 8:30 AM - 4:00 PM | 7:00 AM - 7:00 PM |
| Tuesday   | 8:30 AM - 4:00 PM | 7:00 AM - 7:00 PM |
| Wednesday | 8:30 AM - 4:00 PM | 7:00 AM - 7:00 PM |
| Thursday  | 8:30 AM - 4:00 PM | 7:00 AM - 7:00 PM |
| Friday    | 8:30 AM - 4:00 PM | Available         |
| Saturday  | 8:30 AM - 4:00 PM | Available         |
| Sunday    | 8:30 AM - 4:00 PM | Available         |

---

## Vehicle Categories

Based on reference screenshots:
- **All** - Show all vehicles
- **Luxury** - Premium brands (Porsche, Mercedes-Benz, BMW, Audi)
- **Electric** - Tesla, Rivian, Ford Lightning, etc.
- **Practical** - Daily drivers, SUVs

### Sample Vehicles (Placeholder Data)

| Brand | Model | Category | Price/Day |
|-------|-------|----------|-----------|
| Porsche | 911 | Luxury | $150 |
| Mercedes-Benz | G-Wagon | Luxury | $200 |
| BMW | M3 | Luxury | $120 |
| Tesla | Model 3 | Electric | $60 |
| Tesla | Model Y | Electric | $69 |
| Ford | Mustang Mach-E | Electric | $69 |
| Ford | F-150 Lightning | Electric | $130 |
| Audi | R8 | Luxury | $600 |
| Rivian | R1S | Electric | $129 |

---

## Design System Alignment

### Colors (from Drive Exotiq)
- Primary: Gulf Blue (#6EC1E4)
- Secondary: Performance Orange (#F15A29)
- Background: Deep Black (#000000), Jet Grey (#1B1B1B)
- Text: Pure White (#FFFFFF), Metallic Silver (#C0C0C0)

### Typography
- Headings: text-h1, text-h2, text-h3 (responsive scale)
- Body: text-body, text-body-sm
- Captions: text-caption (uppercase, wide tracking)

### Components to Use
- Button (primary, secondary, outline variants)
- Card (with hover states)
- Badge (for category filters)
- Input components (if needed)

---

## Assets Required

### From Client:
1. **Romli logo** - For trust badges section
2. **FAQ copy** - Questions and answers content
3. **Phoenix hero image** (optional) - City-specific imagery
4. **Wheelbase account URL** - To replace temporary iframe URL

### Placeholders:
- Vehicle images from reference screenshots
- Generic FAQ structure
- Trust badge icons

---

## Implementation Tasks

- [ ] Create `/booking` landing page with city selection
- [ ] Create `/booking/phoenix` reservation page structure
- [ ] Build vehicle browser component with category filters
- [ ] Implement Wheelbase iframe with dynamic height (iFrameResizer)
- [ ] Add location/pickup info section
- [ ] Create FAQ section (placeholder for copy)
- [ ] Add trust badges section (placeholder for Romli logo)
- [ ] Ensure mobile responsiveness
- [ ] Test iframe integration

---

## References

- Wheelbase checkout: https://checkout.wheelbasepro.com/reserve/467628?color=000000&locale=en-us&newfilters=true
- Reference site: https://www.dryveit.com/bookings
- Drive Exotiq design system: `/tailwind.config.ts`, `/app/globals.css`
