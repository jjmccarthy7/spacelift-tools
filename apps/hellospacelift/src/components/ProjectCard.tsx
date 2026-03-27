import Image from 'next/image'

interface ProjectCardProps {
  photo: string
  roomType: string
  location: string
}

export default function ProjectCard({ photo, roomType, location }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 group">
      {/* Image — 4:3 aspect ratio, fills card width */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <Image
          src={photo}
          alt={`${roomType} renovation in ${location}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      {/* Text area */}
      <div className="px-6 pt-4 pb-6">
        <p
          className="text-[18px] font-bold text-[#141B24] leading-snug"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          {roomType}
        </p>
        <p className="text-[14px] text-[#8D9EB2] mt-1.5 leading-none">
          {location}
        </p>
      </div>
    </div>
  )
}
