
import PageLayout from '@/components/PageLayout';

export default function Testimonials() {
  return (
    <PageLayout withThreeBackground>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Testimonials</h1>
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <p className="text-lg">
            Quotes from mentored students and women will appear here soon...
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
