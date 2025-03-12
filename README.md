# FancyButton

A highly customizable, modern button component for React applications with beautiful visual effects and multiple variants.

## Features

- Multiple color variants (white, grey, black, cyan, yellow, pink, purple, blue, gradient)
- Multiple size variants (xs, sm, md, lg, xl)
- Disabled state with CRT-style overlay
- Beautiful visual effects with gradients, shadows, and textures
- Responsive hover and active states
- Fully accessible

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/fancybutton.git
cd fancybutton
npm install
```

## Usage

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the button showcase.

## Component Usage

```jsx
import FancyButton from './components/FancyButton';

// Default button (cyan, medium size)
<FancyButton />

// With custom text
<FancyButton text="Click Me!" />

// Different sizes
<FancyButton size="xs" />
<FancyButton size="sm" />
<FancyButton size="md" /> {/* default */}
<FancyButton size="lg" />
<FancyButton size="xl" />

// Different color variants
<FancyButton color="white" />
<FancyButton color="grey" />
<FancyButton color="black" />
<FancyButton color="cyan" /> {/* default */}
<FancyButton color="yellow" />
<FancyButton color="pink" />
<FancyButton color="purple" />
<FancyButton color="blue" />
<FancyButton color="gradient" />

// Combined with size and color
<FancyButton size="xl" color="gradient" text="Extra Large Button" />

// With click handler
<FancyButton onClick={() => alert('Button clicked!')} />

// Disabled state
<FancyButton disabled />
```

## License

MIT 