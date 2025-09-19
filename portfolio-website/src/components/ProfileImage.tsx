'use client';

interface ProfileImageProps {
  src: string;
  alt: string;
  fallbackText: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'circle' | 'resume';
}

export default function ProfileImage({ src, alt, fallbackText, size = 'md', variant = 'circle' }: ProfileImageProps) {
  const sizeClasses = {
    circle: {
      sm: 'w-16 h-16',
      md: 'w-24 h-24',
      lg: 'w-32 h-32',
      xl: 'w-40 h-40'
    },
    resume: {
      sm: 'w-16 h-20',      // 3:4 비율 (64px × 85px)
      md: 'w-24 h-32',      // 3:4 비율 (96px × 128px)
      lg: 'w-32 h-40',      // 3:4 비율 (128px × 160px)
      xl: 'w-40 h-52'       // 3:4 비율 (160px × 208px)
    }
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const roundedClass = variant === 'circle' ? 'rounded-full' : 'rounded-2xl';
  const currentSizeClass = sizeClasses[variant][size];

  return (
    <div className={`${currentSizeClass} ${roundedClass} overflow-hidden shadow-xl mr-6 border-4 border-gray-200 flex-shrink-0 bg-gradient-to-br from-blue-50 to-purple-50`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.parentElement;
          if (fallback) {
            fallback.className = `${currentSizeClass} bg-gradient-to-r from-blue-500 to-purple-600 ${roundedClass} flex items-center justify-center text-white ${textSizeClasses[size]} font-bold shadow-xl mr-6 flex-shrink-0`;
            fallback.innerHTML = fallbackText;
          }
        }}
      />
    </div>
  );
}