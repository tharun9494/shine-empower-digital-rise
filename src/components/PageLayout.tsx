
import { ReactNode } from 'react';
import Navigation from './Navigation';
import ThreeCanvas from './three/ThreeCanvas';

interface PageLayoutProps {
  children: ReactNode;
  withThreeBackground?: boolean;
}

export default function PageLayout({ children, withThreeBackground = false }: PageLayoutProps) {
  return (
    <div className="min-h-screen relative">
      {withThreeBackground && (
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <ThreeCanvas />
        </div>
      )}
      <Navigation />
      <main className="container mx-auto pt-20 pb-12 px-4">
        {children}
      </main>
    </div>
  );
}
