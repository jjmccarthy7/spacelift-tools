import Image from 'next/image'

interface ProjectCardProps {
  photo: string
  roomType: string
  location: string
}

export default function ProjectCard({ photo, roomType, location }: ProjectCardProps) {
  return (
    <div
      className="bg-white overflow-hidden shadow group
        hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]
        transition-[transform,box-shadow] duration-200 ease-out"
      style={{ borderRadius: '24px' }}
    >
      {/* Image — 4:3 aspect ratio, 26px top radius */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: '4/3', borderRadius: '26px 26px 0 0' }}
      >
        <Image
          src={photo}
          alt={`${roomType} renovation in ${location}`}
          fill
          className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03]"
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
