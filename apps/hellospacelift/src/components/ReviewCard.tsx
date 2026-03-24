import { Star } from 'lucide-react'

interface ReviewCardProps {
  quote: string
  name: string
  role: string
  rating: number
  initials: string
  avatarColor?: string
}

export default function ReviewCard({
  quote,
  name,
  role,
  rating,
  initials,
  avatarColor = '#FC4C4C',
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-[#EEF1F4] p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            strokeWidth={1.25}
            className={i < rating ? 'text-[#FC4C4C] fill-[#FC4C4C]' : 'text-[#EEF1F4] fill-[#EEF1F4]'}
          />
        ))}
      </div>
      {/* Quote */}
      <p className="text-[#141B24] text-sm leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </p>
      {/* Reviewer */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: avatarColor }}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-bold text-[#141B24]">{name}</p>
          <p className="text-xs text-[#8D9EB2]">{role}</p>
        </div>
      </div>
    </div>
  )
}
