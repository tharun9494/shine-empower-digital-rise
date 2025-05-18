
import PageLayout from '@/components/PageLayout';

export default function Circle() {
  return (
    <PageLayout withThreeBackground>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Women Empowerment Circle</h1>
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <p className="text-lg mb-6">
            Information dedicated to women faculties, entrepreneurs, and business owners.
          </p>
          <p className="text-lg">
            Content coming soon...
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
