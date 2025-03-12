import { ButtonHTMLAttributes, useMemo } from 'react';

type ColorVariant = 'white' | 'grey' | 'black' | 'cyan' | 'yellow' | 'pink' | 'purple' | 'blue' | 'gradient';
type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface FancyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  color?: ColorVariant;
  size?: SizeVariant;
  disabled?: boolean;
}

// Size class mapping - increased bottom padding
const sizeClasses = {
  xs: 'text-xs py-[0.5em] pb-[0.6em]',
  sm: 'text-sm py-[0.6em] pb-[0.7em]',
  md: 'text-base py-[0.8em] pb-[0.9em]',
  lg: 'text-lg py-[0.9em] pb-[1em]',
  xl: 'text-xl py-[1em] pb-[1.1em]'
};

// Get text color based on button background color
const getTextColor = (color: ColorVariant): string => {
  switch (color) {
    case 'black':
      // White text for black button (95% opacity)
      return 'text-[rgba(255,255,255,0.95)]';
    case 'white':
      // Dark text for white button (90% opacity black)
      return 'text-[rgba(0,0,0,0.9)]';
    case 'grey':
    case 'blue':
    case 'purple':
    case 'pink':
    case 'gradient':
      // White text for these buttons (95% opacity)
      return 'text-[rgba(255,255,255,0.95)]';
    default:
      // Default dark text for other colors (90% opacity black)
      return 'text-[rgba(0,0,0,0.9)]';
  }
};

// Get border radius values based on size
const getOuterRadius = (size: SizeVariant): string => {
  switch (size) {
    case 'xs': return 'rounded-[0.55em]';
    case 'sm': return 'rounded-[0.75em]';
    case 'lg': return 'rounded-[1.15em]';
    case 'xl': return 'rounded-[1.35em]';
    default:   return 'rounded-[0.9em]';
  }
};

const getInnerRadius = (size: SizeVariant): string => {
  switch (size) {
    case 'xs': return 'rounded-[0.6em] [clip-path:inset(0_0_0_0_round_0.6em)]';
    case 'lg': return 'rounded-[1em] [clip-path:inset(0_0_0_0_round_1em)]';
    case 'xl': return 'rounded-[1.2em] [clip-path:inset(0_0_0_0_round_1.2em)]';
    default:   return 'rounded-[0.8em] [clip-path:inset(0_0_0_0_round_0.8em)]';
  }
};

const getButtonRadius = (size: SizeVariant): string => {
  switch (size) {
    case 'xs': return 'rounded-[0.8em]';
    case 'lg': return 'rounded-[1.2em]';
    case 'xl': return 'rounded-[1.4em]';
    default:   return 'rounded-[1em]';
  }
};

export default function FancyButton({ 
  text = 'Push',
  color = 'cyan',
  size = 'md',
  className = '',
  disabled = false,
  ...props 
}: FancyButtonProps) {
  // Generate button variant class - memoized to prevent recalculation on each render
  const buttonClass = useMemo(() => `
    fancy-button
    fancy-button-${color}
    size-${size}
    relative
    cursor-pointer
    bg-black
    ${getButtonRadius(size)}
    [-webkit-tap-highlight-color:rgba(0,0,0,0)]
    transition-transform
    duration-300
    ease-[ease]
    will-change-transform
    ${disabled ? 'disabled' : ''}
    ${className}
  `, [color, size, className, disabled]);

  return (
    <button 
      className={buttonClass}
      disabled={disabled}
      {...props}
    >
      <div className={`
        button-outer
        relative
        z-[1]
        ${getOuterRadius(size)}
        bg-black
        transition-[box-shadow,transform]
        duration-300
        ease-[ease]
        will-change-[box-shadow,transform]
      `}>
        <div className={`
          button-inner
          relative
          z-[1]
          ${sizeClasses[size]}
          ${getInnerRadius(size)}
          px-[1.5em]
          min-w-[10em]
          flex
          justify-center
          overflow-clip
          transition-[box-shadow,clip-path,background-image,transform]
          duration-[300ms,250ms,250ms,250ms]
          ease-[ease]
          will-change-[box-shadow,clip-path,background-image,transform]
          active:transform
          active:scale-[0.97]
          active:transition-[transform,box-shadow]
          active:duration-[250ms,300ms]
        `}>
          <span className={`
            relative
            z-[4]
            block
            font-inter
            font-bold
            tracking-normal
            ${getTextColor(color)}
            transition-transform
            duration-[250ms]
            ease-[ease]
            will-change-transform
            select-none
            hover:scale-[0.975]
            hover:transition-transform
            hover:duration-[250ms]
            hover:ease-[ease]
          `}>
            {text}
          </span>
        </div>
      </div>
    </button>
  );
} 