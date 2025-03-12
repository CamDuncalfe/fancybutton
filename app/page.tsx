import React from 'react';
import FancyButton from './components/FancyButton';

const colorVariants = ['white', 'grey', 'black', 'cyan', 'yellow', 'pink', 'purple', 'blue', 'gradient'] as const;
const sizeVariants = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 py-12 px-4">
      <h1 className="text-4xl font-ost font-extrabold mb-8">Fancy Button Showcase</h1>
      
      {/* Size Showcase */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-ost font-bold mb-6">Size Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {sizeVariants.map((size) => (
            <div key={size} className="flex flex-col items-center gap-4">
              <p className="text-xl font-ost">{size.toUpperCase()}</p>
              <FancyButton text={`${size.toUpperCase()} Button`} size={size} />
            </div>
          ))}
        </div>
      </section>
      
      {/* Color Showcase */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-ost font-bold mb-6">Color Variants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {colorVariants.map((color) => (
            <div key={color} className="flex flex-col items-center gap-4">
              <p className="text-xl font-ost capitalize">{color}</p>
              <FancyButton text={`${color} Button`} color={color} />
            </div>
          ))}
        </div>
      </section>
      
      {/* Disabled Button Showcase */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-ost font-bold mb-6">Disabled Buttons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {colorVariants.map((color) => (
            <div key={color} className="flex flex-col items-center gap-4">
              <p className="text-xl font-ost capitalize">{color} (Disabled)</p>
              <FancyButton text={`${color} Button`} color={color} disabled />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {sizeVariants.map((size) => (
            <div key={size} className="flex flex-col items-center gap-4">
              <p className="text-xl font-ost">{size.toUpperCase()} (Disabled)</p>
              <FancyButton text={`${size.toUpperCase()} Button`} size={size} disabled />
            </div>
          ))}
        </div>
      </section>
      
      {/* Complete Matrix: Sizes × Colors */}
      <section className="w-full max-w-6xl overflow-x-auto">
        <h2 className="text-2xl font-ost font-bold mb-6">Complete Matrix</h2>
        <table className="min-w-full border-collapse mb-12">
          <thead>
            <tr>
              <th className="p-3 border border-purple-grey-300 bg-purple-grey-100 font-ost"></th>
              {sizeVariants.map((size) => (
                <th key={size} className="p-3 border border-purple-grey-300 bg-purple-grey-100 font-ost">
                  {size.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {colorVariants.map((color) => (
              <tr key={color}>
                <th className="p-3 border border-purple-grey-300 bg-purple-grey-100 font-ost capitalize">{color}</th>
                {sizeVariants.map((size) => (
                  <td key={`${color}-${size}`} className="p-4 border border-purple-grey-300 text-center">
                    <div className="flex justify-center">
                      <FancyButton text="Button" color={color} size={size} />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      
      <section className="w-full max-w-3xl mx-auto px-4 mt-8">
        <h2 className="text-2xl font-ost font-bold mb-4">Usage</h2>
        <pre className="bg-purple-grey-800 text-cyan-grey-100 p-4 rounded-lg overflow-x-auto font-dos">
          {`import FancyButton from './components/FancyButton';

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

// Combined with size and color
<FancyButton size="xl" color="gradient" text="Extra Large Button" />

// With click handler
<FancyButton onClick={() => alert('Button clicked!')} />

// Disabled state
<FancyButton disabled />
<FancyButton color="gradient" size="lg" disabled />`}
        </pre>
      </section>
    </div>
  );
} 