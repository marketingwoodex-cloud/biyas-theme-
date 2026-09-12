# Section library reference

Every page in `content/pages/*.json` is an ordered list of these sections. Each entry looks like:

```json
{ "type": "<section>", "id": "optional-anchor", "theme": "light|gray|beige|dark", "spacing": "default|tight|none|top|bottom", "enabled": true, "data": { ... } }
```

Common `data` keys used by most sections: `eyebrow` (small label), `title` (supports *markdown* inline), `text` (markdown), `align` (`left|center`), `button` `{label,url,style}` where style is `solid | outline | text | white`.

A section renders its `button` **once**, in the section head. To place it under the grid instead (services-cards, portfolio-grid, blog-grid, overview) set `"footButton": true` — or give `footButton` its own `{label,url,style}` object for a different foot CTA.

Images are referenced by filename from `content/media/` (or absolute/URL). Sections marked **auto** read from `content/<collection>/` — add a Markdown file and it appears.

Append a section with demo data: `npm run import:preset --section=<type> --into=<page>`

| Section | Purpose |
|---|---|
| [`awards`](#awards) | compact list of recognitions / press mentions |
| [`big-statement`](#big-statement) | oversized centred statement with optional masked video/image behind text |
| [`blog-grid`](#blog-grid) | posts from content/posts |
| [`case-study`](#case-study) | one featured project in an editorial layout |
| [`contact-form`](#contact-form) | studio details + enquiry form (uses site.contact + site.forms) |
| [`cta`](#cta) | call-to-action band |
| [`custom-html`](#custom-html) | escape hatch for embeds or one-off markup |
| [`faq`](#faq) | accordion |
| [`feature-rows`](#feature-rows) | alternating image/text rows (service details, process highlights) |
| [`gallery`](#gallery) | masonry/grid of images with lightbox |
| [`hero-image`](#hero-image) | full-width image hero with overlay copy (home v2 / landing) |
| [`hero-slider`](#hero-slider) | full-screen 3-slide hero with curtain intro (home v1) |
| [`hero-split`](#hero-split) | copy left, tall image right, light background (home v3 / about alt) |
| [`image-strip`](#image-strip) | horizontal row of images (3–5) with optional captions |
| [`intro-split`](#intro-split) | big statement + supporting text/image (about story, home intro) |
| [`logos`](#logos) | brand/partner band with optional marquee |
| [`map`](#map) | embedded map + studio card (uses site.contact.mapEmbed) |
| [`marquee`](#marquee) | scrolling text band |
| [`newsletter`](#newsletter) | email capture |
| [`overview`](#overview) | scroll-pinned image swap with numbered list (home "design documentation") |
| [`page-hero`](#page-hero) | standard inner-page hero (about / services / portfolio / blog / contact) |
| [`portfolio-grid`](#portfolio-grid) | filterable project grid from content/projects |
| [`pricing`](#pricing) | plan cards |
| [`process`](#process) | numbered steps timeline |
| [`rich-text`](#rich-text) | plain markdown content column (legal pages, long copy) |
| [`services-cards`](#services-cards) | stacked/sticky service cards (home) or plain grid |
| [`services-list`](#services-list) | numbered hover list of all services with detail links (services index) |
| [`spacer`](#spacer) | vertical space / divider.  data: { size:"small"|"medium"|"large", line:true } |
| [`stats`](#stats) | animated counters |
| [`team`](#team) | people grid from content/team (or inline items) |
| [`testimonials`](#testimonials) | quote cards (grid or slider) |
| [`values`](#values) | icon/number grid of principles or benefits |
| [`video`](#video) | showcase video with marquee headline (home showcase) |

## Heroes

### `hero-slider`

full-screen 3-slide hero with curtain intro (home v1)

**Data shape:** `{ slides:[{ eyebrow, title, text, image }], buttons:[{label,url,style}], autoplay: 5200, showScrollHint }`

Requires headerStyle: "light" on the page for a transparent nav.

```json
{
  "type": "hero-slider",
  "data": {
    "slides": [
      {
        "eyebrow": "",
        "title": "Slide one",
        "text": "",
        "image": "hero-1.jpg"
      },
      {
        "eyebrow": "",
        "title": "Slide two",
        "text": "",
        "image": "hero-2.jpg"
      }
    ],
    "buttons": [
      {
        "label": "Button",
        "url": "/contact/",
        "style": "white"
      }
    ]
  }
}
```

### `hero-image`

full-width image hero with overlay copy (home v2 / landing)

**Data shape:** `{ eyebrow, title, text, image, video?, align:"left"|"center", height:"full"|"large"|"medium", buttons:[...], stats:[{value,label}] }`

```json
{
  "type": "hero-image",
  "data": {
    "eyebrow": "",
    "title": "Title",
    "text": "",
    "image": "hero-1.jpg",
    "align": "left",
    "height": "large",
    "buttons": [
      {
        "label": "Button",
        "url": "/contact/",
        "style": "white"
      }
    ]
  }
}
```

### `hero-split`

copy left, tall image right, light background (home v3 / about alt)

**Data shape:** `{ eyebrow, title, text, image, imageSecondary?, buttons:[...], note }`

```json
{
  "type": "hero-split",
  "data": {
    "eyebrow": "",
    "title": "Title",
    "text": "",
    "image": "portfolio-2.jpg",
    "buttons": [
      {
        "label": "Button",
        "url": "/contact/"
      }
    ]
  }
}
```

### `page-hero`

standard inner-page hero (about / services / portfolio / blog / contact)

**Data shape:** `{ eyebrow, title, text, image, size:"default"|"short", breadcrumbs:[{label,url}] }`

```json
{
  "type": "page-hero",
  "data": {
    "eyebrow": "Page",
    "title": "Title",
    "text": "",
    "size": "short"
  }
}
```


## Trust & social proof

### `logos`

brand/partner band with optional marquee

**Data shape:** `{ title, logos:[{ name, image? }], marquee:true }`

Without images, names render as typographic wordmarks.

```json
{
  "type": "logos",
  "theme": "dark",
  "spacing": "tight",
  "data": {
    "title": "Trusted by",
    "marquee": true,
    "logos": [
      {
        "name": "Client one"
      },
      {
        "name": "Client two"
      },
      {
        "name": "Client three"
      },
      {
        "name": "Client four"
      }
    ]
  }
}
```

### `stats`

animated counters

**Data shape:** `{ eyebrow, title, text, items:[{ value:120, suffix:"+", prefix:"", label }], columns: 4 }`

```json
{
  "type": "stats",
  "data": {
    "items": [
      {
        "value": 120,
        "suffix": "+",
        "label": "Projects"
      },
      {
        "value": 12,
        "label": "Years"
      },
      {
        "value": 18,
        "label": "Team"
      },
      {
        "value": 96,
        "suffix": "%",
        "label": "Referrals"
      }
    ]
  }
}
```

### `testimonials`

quote cards (grid or slider)

**Data shape:** `{ eyebrow, title, text, layout:"grid"|"slider", items:[{ quote, name, role, avatar?, rating? }] }`

```json
{
  "type": "testimonials",
  "theme": "beige",
  "data": {
    "eyebrow": "Client words",
    "title": "What clients say",
    "items": [
      {
        "quote": "Quote.",
        "name": "Name",
        "role": "Role",
        "rating": 5
      }
    ]
  }
}
```

### `awards`

compact list of recognitions / press mentions

**Data shape:** `{ eyebrow, title, items:[{ year, title, by, url? }] }`

```json
{
  "type": "awards",
  "data": {
    "eyebrow": "Recognition",
    "title": "Awards & press",
    "items": [
      {
        "year": "2025",
        "title": "Award title",
        "by": "Organisation"
      }
    ]
  }
}
```


## Story & content

### `intro-split`

big statement + supporting text/image (about story, home intro)

**Data shape:** `{ eyebrow, title, text (markdown), image, alt?, imagePosition:"right"|"left", button, features:[{title,text}], stats:[{value,label}]?, signature? }` — `stats` renders a small proof strip (e.g. `120+ Projects · 12 Years`) under the features.

```json
{
  "type": "intro-split",
  "data": {
    "eyebrow": "About",
    "title": "Headline",
    "text": "Paragraph.",
    "image": "feature-1.jpg",
    "button": {
      "label": "Learn more",
      "url": "/about/",
      "style": "text"
    }
  }
}
```

### `feature-rows`

alternating image/text rows (service details, process highlights)

**Data shape:** `{ eyebrow, title, text, items:[{ id?, number?, title, text(markdown), image, bullets:[], button }] }`

```json
{
  "type": "feature-rows",
  "data": {
    "eyebrow": "Details",
    "title": "What's included",
    "items": [
      {
        "title": "Feature one",
        "text": "Text.",
        "image": "room-1.jpg",
        "bullets": [
          "Point"
        ]
      },
      {
        "title": "Feature two",
        "text": "Text.",
        "image": "room-2.jpg"
      }
    ]
  }
}
```

### `values`

icon/number grid of principles or benefits

**Data shape:** `{ eyebrow, title, text, columns:3|4, items:[{ icon?, title, text }] }`

```json
{
  "type": "values",
  "data": {
    "eyebrow": "Values",
    "title": "What we hold to",
    "columns": 3,
    "items": [
      {
        "icon": "interior",
        "title": "Value",
        "text": "Text."
      },
      {
        "icon": "joinery",
        "title": "Value",
        "text": "Text."
      },
      {
        "icon": "plan",
        "title": "Value",
        "text": "Text."
      }
    ]
  }
}
```

### `process`

numbered steps timeline

**Data shape:** `{ eyebrow, title, text, steps:[{ title, text, duration? }], layout:"grid"|"list" }`

```json
{
  "type": "process",
  "theme": "dark",
  "data": {
    "eyebrow": "Process",
    "title": "How we work",
    "steps": [
      {
        "title": "Discovery",
        "text": ""
      },
      {
        "title": "Concept",
        "text": ""
      },
      {
        "title": "Development",
        "text": ""
      },
      {
        "title": "Delivery",
        "text": ""
      }
    ]
  }
}
```

### `big-statement`

oversized centred statement with optional masked video/image behind text

**Data shape:** `{ text, media?: image|video url, mediaType:"image"|"video", small }`

```json
{
  "type": "big-statement",
  "data": {
    "small": "Statement",
    "text": "A short, bold sentence."
  }
}
```

### `marquee`

scrolling text band

**Data shape:** `{ items:["Residential","Hospitality",...], separator:"•", speed: 28, size:"large"|"medium" }`

```json
{
  "type": "marquee",
  "theme": "beige",
  "data": {
    "items": [
      "Word",
      "Word",
      "Word"
    ],
    "size": "large"
  }
}
```

### `image-strip`

horizontal row of images (3–5) with optional captions

**Data shape:** `{ images:[{ src, alt, caption? }], parallax:true }`

```json
{
  "type": "image-strip",
  "spacing": "tight",
  "data": {
    "parallax": true,
    "images": [
      {
        "src": "room-1.jpg",
        "alt": ""
      },
      {
        "src": "room-2.jpg",
        "alt": ""
      },
      {
        "src": "room-3.jpg",
        "alt": ""
      }
    ]
  }
}
```

### `video`

showcase video with marquee headline (home showcase)

**Data shape:** `{ src, fallback, poster, title, marquee:[...], button }`

```json
{
  "type": "video",
  "theme": "dark",
  "data": {
    "src": "https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4",
    "marquee": [
      "Word",
      "Word"
    ],
    "title": "Headline",
    "button": {
      "label": "Contact",
      "url": "/contact/",
      "style": "white"
    }
  }
}
```

### `overview`

scroll-pinned image swap with numbered list (home "design documentation")

**Data shape:** `{ eyebrow, title, text, items:[{ title, text, image }], button }`

```json
{
  "type": "overview",
  "data": {
    "eyebrow": "Overview",
    "title": "Headline",
    "items": [
      {
        "title": "One",
        "text": "",
        "image": "room-1.jpg"
      },
      {
        "title": "Two",
        "text": "",
        "image": "room-2.jpg"
      },
      {
        "title": "Three",
        "text": "",
        "image": "room-3.jpg"
      }
    ]
  }
}
```

### `rich-text`

plain markdown content column (legal pages, long copy)

**Data shape:** `{ title, body (markdown), width:"narrow"|"default" }`

```json
{
  "type": "rich-text",
  "data": {
    "body": "## Heading\n\nMarkdown content."
  }
}
```


## Collections (auto from content/)

### `services-cards`

stacked/sticky service cards (home) or plain grid

**Data shape:** `{ eyebrow, title, text, source:"services" (auto from content/services) | items:[{title,text,image,url,icon}], limit:3, layout:"stacked"|"grid", button }`

```json
{
  "type": "services-cards",
  "data": {
    "eyebrow": "Services",
    "title": "What we do",
    "source": "services",
    "limit": 3,
    "layout": "stacked"
  }
}
```

### `services-list`

numbered hover list of all services with detail links (services index)

**Data shape:** `{ eyebrow, title, text, source:"services" | items:[...] }`

```json
{
  "type": "services-list",
  "data": {
    "eyebrow": "Services",
    "title": "All services",
    "source": "services"
  }
}
```

### `portfolio-grid`

filterable project grid from content/projects

**Data shape:** `{ eyebrow, title, text, filters:true, limit, columns:3, featuredOnly:false, categories:["residential",...], button }`

```json
{
  "type": "portfolio-grid",
  "data": {
    "eyebrow": "Work",
    "title": "Projects",
    "filters": true,
    "columns": 3
  }
}
```

### `case-study`

one featured project in an editorial layout

**Data shape:** `{ eyebrow, project:"canal-side-residence" (slug) | { title, text, image, url, facts:[{label,value}] }, button }`

```json
{
  "type": "case-study",
  "theme": "beige",
  "data": {
    "eyebrow": "Case study",
    "project": "canal-side-residence"
  }
}
```

### `blog-grid`

posts from content/posts

**Data shape:** `{ eyebrow, title, text, limit:3, columns:3, filters:false, featuredFirst:false, button, exclude:url }`

```json
{
  "type": "blog-grid",
  "data": {
    "eyebrow": "Journal",
    "title": "Latest",
    "limit": 3
  }
}
```

### `team`

people grid from content/team (or inline items)

**Data shape:** `{ eyebrow, title, text, source:"team" | items:[{name,role,image,bio,social:[]}], columns:3 }`

```json
{
  "type": "team",
  "data": {
    "eyebrow": "Team",
    "title": "People",
    "source": "team"
  }
}
```

### `gallery`

masonry/grid of images with lightbox

**Data shape:** `{ eyebrow, title, images:[{ src, alt, caption, span:"wide"|"tall" }], columns:3 }`

```json
{
  "type": "gallery",
  "data": {
    "eyebrow": "Gallery",
    "title": "Images",
    "images": [
      {
        "src": "room-1.jpg",
        "alt": ""
      },
      {
        "src": "room-2.jpg",
        "alt": "",
        "span": "wide"
      },
      {
        "src": "room-3.jpg",
        "alt": ""
      }
    ]
  }
}
```


## Conversion

### `pricing`

plan cards

**Data shape:** `{ eyebrow, title, text, note, plans:[{ name, price, period, text, features:[], button, highlighted }] }`

```json
{
  "type": "pricing",
  "data": {
    "eyebrow": "Pricing",
    "title": "Packages",
    "plans": [
      {
        "name": "Plan",
        "price": "PKR \u2014",
        "text": "",
        "features": [
          "Feature"
        ]
      }
    ]
  }
}
```

### `faq`

accordion

**Data shape:** `{ eyebrow, title, text, items:[{ q, a (markdown) }], layout:"split"|"stack", button }`

```json
{
  "type": "faq",
  "theme": "beige",
  "data": {
    "eyebrow": "FAQ",
    "title": "Questions",
    "items": [
      {
        "q": "Question?",
        "a": "Answer."
      }
    ]
  }
}
```

### `cta`

call-to-action band

**Data shape:** `{ eyebrow, title, text, buttons:[...], image?, layout:"band"|"card" }`

```json
{
  "type": "cta",
  "data": {
    "title": "Ready to talk?",
    "buttons": [
      {
        "label": "Contact us",
        "url": "/contact/",
        "style": "white"
      }
    ]
  }
}
```

### `newsletter`

email capture

**Data shape:** `{ eyebrow, title, text, placeholder, buttonLabel, note }`

```json
{
  "type": "newsletter",
  "theme": "beige",
  "data": {
    "eyebrow": "Newsletter",
    "title": "Stay in touch",
    "text": "One email a month."
  }
}
```

### `contact-form`

studio details + enquiry form (uses site.contact + site.forms)

**Data shape:** `{ eyebrow, title, text, showDetails:true, fields:{ projectTypes:[], budgets:[] }, consentText }`

```json
{
  "type": "contact-form",
  "data": {
    "eyebrow": "Contact",
    "title": "Start a conversation"
  }
}
```

### `map`

embedded map + studio card (uses site.contact.mapEmbed)

**Data shape:** `{ title, text, embed?, height }`

```json
{
  "type": "map",
  "data": {
    "title": "Visit the studio"
  }
}
```


## Utilities

### `custom-html`

escape hatch for embeds or one-off markup

**Data shape:** `{ html }`

```json
{
  "type": "custom-html",
  "data": {
    "html": "<p>Custom markup or embed.</p>"
  }
}
```

### `spacer`

vertical space / divider.  data: { size:"small"|"medium"|"large", line:true }

```json
{
  "type": "spacer",
  "data": {
    "size": "medium",
    "line": true
  }
}
```

