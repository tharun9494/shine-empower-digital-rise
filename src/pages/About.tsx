
import PageLayout from '@/components/PageLayout';

export default function About() {
  return (
    <PageLayout withThreeBackground>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <p className="text-lg mb-6">
            This page will contain your personal bio, story, milestones, and achievements.
          </p>
          <p className="text-lg">
            Content coming soon...
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
