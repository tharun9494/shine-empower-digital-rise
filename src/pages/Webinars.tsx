
import PageLayout from '@/components/PageLayout';

export default function Webinars() {
  return (
    <PageLayout withThreeBackground>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Webinars</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-lavender">Upcoming Webinars</h2>
            <p className="text-lg">
              Registration links will appear here soon...
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-teal">Past Webinars</h2>
            <p className="text-lg">
              Records of past webinars will appear here...
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
