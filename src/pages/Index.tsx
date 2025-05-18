
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/home/HeroSection';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Services & Programs</h2>
          <p className="text-lg text-foreground/80 mt-2">Discover how I can help you grow</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-lavender mb-4">Student Mentorship</h3>
            <p>Guidance for students to navigate their career paths and develop skills for the future.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-teal mb-4">Women's Empowerment</h3>
            <p>Supporting women faculties, entrepreneurs, and business owners to build their digital presence.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-rose-gold mb-4">AI Training</h3>
            <p>Specialized training in artificial intelligence and its applications in various fields.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
