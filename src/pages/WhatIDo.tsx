
import PageLayout from '@/components/PageLayout';

export default function WhatIDo() {
  return (
    <PageLayout withThreeBackground>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">What I Do</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-lavender">For Students</h2>
            <p className="text-lg">
              AI training, career mentorship, and more. Content coming soon...
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-teal">For Women</h2>
            <p className="text-lg">
              Personal branding, digital presence, visibility coaching. Content coming soon...
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
