export default function SimWaveAnimation() {
  const bars = [
    { key: 1, delay: '0s', height: 'h-16' },
    { key: 2, delay: '0.1s', height: 'h-24' },
    { key: 3, delay: '0.2s', height: 'h-32' },
    { key: 4, delay: '0.3s', height: 'h-24' },
    { key: 5, delay: '0.4s', height: 'h-16' },
  ];

  return (
    <div className="flex items-end justify-center gap-2 h-40">
      {bars.map(bar => (
        <div
          key={bar.key}
          className={`w-6 ${bar.height} bg-primary/80 rounded-t-full animate-signal-wave origin-bottom`}
          style={{ animationDelay: bar.delay }}
        />
      ))}
    </div>
  );
}
