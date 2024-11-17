// components/BackgroundAnimation.js
export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="relative w-full h-full">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute bg-blue-500 w-4 h-4 rounded-full animate-floating"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
