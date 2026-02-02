import React, { useState } from 'react';
import type { PageView } from './types';
import HomeView from './components/HomeView';
import { StillLifeView, MovingImagesView, MusicView, AboutView, PortfolioView } from './components/Views';
import PixelButton from './components/PixelButton';

const App: React.FC = () => {
    const [view, setView] = useState<PageView>('home');

    const renderView = () => {
        switch (view) {
            case 'still-life':
                return <StillLifeView />;
            case 'moving images':
                return <MovingImagesView />;
            case 'music':
                return <MusicView />;
            case 'about':
                return <AboutView />;
            case 'portfolio':
                return <PortfolioView />;
            case 'home':
            default:
                return <HomeView navigateTo={setView} />;
        }
    };
    
    const WindowHeader: React.FC = () => (
        <div className="flex items-center gap-2 p-3 bg-gray-300 border-b-8 border-brand-fg">
            <span className="w-4 h-4 bg-red-500 border-2 border-brand-fg rounded-full"></span>
            <span className="w-4 h-4 bg-yellow-500 border-2 border-brand-fg rounded-full"></span>
            <span className="w-4 h-4 bg-green-500 border-2 border-brand-fg rounded-full"></span>
        </div>
    );

    return (
        <div className="bg-brand-bg text-brand-fg min-h-screen font-sans antialiased p-4 sm:p-6 md:p-8">
            <main className="max-w-7xl mx-auto border-8 border-brand-fg shadow-hard bg-white">
                <WindowHeader />
                <div className="p-4 sm:p-8">
                    {view !== 'home' && (
                        <div className="mb-8">
                            {/* FIX: Corrected typo in closing tag for PixelButton component. */}
                            <PixelButton onClick={() => setView('home')}>
                                &lt;-- Back to Home
                            </PixelButton>
                        </div>
                    )}
                    {renderView()}
                </div>
            </main>
        </div>
    );
};

export default App;

