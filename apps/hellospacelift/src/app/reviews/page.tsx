import ReviewCard from '@/components/ReviewCard'

const reviews = [
  { quote: 'Spacelift made the whole process so much less stressful. Our advisor was phenomenal and our contractor was amazing.', name: 'Sarah M.', role: 'Homeowner in Austin, TX', rating: 5, initials: 'SM', avatarColor: '#FC4C4C' },
  { quote: 'We got three great contractor matches within 48 hours. The whole project came in on time and under budget.', name: 'James L.', role: 'Homeowner in Denver, CO', rating: 5, initials: 'JL', avatarColor: '#3B86E1' },
  { quote: 'I was nervous about a big renovation but Spacelift guided us every step of the way. Truly a 5-star experience.', name: 'Priya K.', role: 'Homeowner in Chicago, IL', rating: 5, initials: 'PK', avatarColor: '#A27BFC' },
  { quote: 'The advisor matched us with a contractor who totally got our vision. Our kitchen looks like a magazine shoot.', name: 'Tom & Lisa R.', role: 'Homeowners in Seattle, WA', rating: 5, initials: 'TR', avatarColor: '#0ED096' },
  { quote: 'Never thought renovating could actually be enjoyable. Spacelift changed that completely.', name: 'Michelle D.', role: 'Homeowner in Nashville, TN', rating: 5, initials: 'MD', avatarColor: '#FFBFD0' },
  { quote: 'Fast, professional, and transparent. I knew what was happening at every stage of the project.', name: 'Carlos V.', role: 'Homeowner in Boston, MA', rating: 5, initials: 'CV', avatarColor: '#E4FFA4' },
]

export default function ReviewsPage() {
  return (
    <div className="pt-16">
      <section className="bg-[#F7F8FA] py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-xs font-black uppercase tracking-widest text-[#3B86E1] mb-4">Reviews</p>
          <h1 className="text-5xl md:text-6xl font-black text-[#141B24] leading-tight tracking-tight mb-6 max-w-2xl">
            Homeowners love us.
          </h1>
          <p className="text-xl text-[#8D9EB2] leading-relaxed max-w-lg">
            Real stories from real homeowners who renovated with Spacelift.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
