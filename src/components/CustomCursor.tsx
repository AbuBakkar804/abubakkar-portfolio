import { useCustomCursor } from '@/hooks/useCustomCursor'

export default function CustomCursor() {
  const { dotRef, ringRef, hovering } = useCustomCursor()

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block"
        style={{ width: 8, height: 8, background: '#00E5FF', transition: 'transform 0.05s linear' }}
      />
      <div
        ref={ringRef}
        className="cursor-dot hidden md:block border"
        style={{
          width: 32,
          height: 32,
          borderColor: '#38BDF8',
          borderWidth: hovering ? 2 : 1,
          background: hovering ? 'rgba(56,189,248,0.15)' : 'transparent',
          transition: 'width 0.2s, height 0.2s, background 0.2s, border-width 0.2s',
        }}
      />
    </>
  )
}
