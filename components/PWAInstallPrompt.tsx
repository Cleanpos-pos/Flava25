import React, { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);

            // Show prompt after a short delay for better UX
            setTimeout(() => {
                setShowPrompt(true);
            }, 2000);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
        }

        setDeferredPrompt(null);
        setShowPrompt(false);
    };

    const handleDismiss = () => {
        setShowPrompt(false);
        // Store dismissal in localStorage to not show again for 7 days
        localStorage.setItem('pwa-install-dismissed', Date.now().toString());
    };

    // Check if user dismissed recently
    useEffect(() => {
        const dismissed = localStorage.getItem('pwa-install-dismissed');
        if (dismissed) {
            const dismissedTime = parseInt(dismissed);
            const sevenDays = 7 * 24 * 60 * 60 * 1000;
            if (Date.now() - dismissedTime < sevenDays) {
                setShowPrompt(false);
            }
        }
    }, []);

    if (!showPrompt || !deferredPrompt) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto animate-fadeIn"
                onClick={handleDismiss}
            />

            {/* Install Prompt Card */}
            <div
                className="relative w-full max-w-md mx-4 mb-6 pointer-events-auto"
                style={{
                    animation: 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                }}
            >
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl shadow-2xl border border-neutral-700 overflow-hidden">
                    {/* Flame accent bar */}
                    <div className="h-1.5 bg-gradient-to-r from-orange-600 via-orange-500 to-green-500" />

                    <div className="p-6">
                        {/* Icon and Title */}
                        <div className="flex items-start gap-4 mb-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-1 oswald">
                                    Install Flava25 App
                                </h3>
                                <p className="text-neutral-300 text-sm leading-relaxed">
                                    Get quick access to our menu, special offers, and order tracking. Install our app for the best experience!
                                </p>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-sm text-neutral-200">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Works offline</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-neutral-200">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Fast loading</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-neutral-200">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>One-tap access from home screen</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={handleInstallClick}
                                className="flex-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl oswald"
                            >
                                INSTALL NOW
                            </button>
                            <button
                                onClick={handleDismiss}
                                className="px-6 py-3 text-neutral-400 hover:text-white font-semibold rounded-xl transition-colors duration-300 hover:bg-neutral-700/50"
                            >
                                Later
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes slideUp {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default PWAInstallPrompt;
