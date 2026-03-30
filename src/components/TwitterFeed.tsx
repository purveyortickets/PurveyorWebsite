import { useEffect, useRef } from "react";

const TwitterFeed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Load Twitter widgets.js once
    if (!scriptLoaded.current) {
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);
      } else {
        // If script already exists, re-render widgets
        if ((window as any).twttr?.widgets) {
          (window as any).twttr.widgets.load(containerRef.current);
        }
      }
      scriptLoaded.current = true;
    }

    // Re-render when twttr becomes available
    const checkInterval = setInterval(() => {
      if ((window as any).twttr?.widgets && containerRef.current) {
        (window as any).twttr.widgets.load(containerRef.current);
        clearInterval(checkInterval);
      }
    }, 500);

    return () => clearInterval(checkInterval);
  }, []);

  return (
    <section id="twitter-feed" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up text-white">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Proofs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
            Live feed from our official X (Twitter) account showcasing successful ticket purchases.
          </p>
        </div>

        <div className="max-w-2xl mx-auto" ref={containerRef}>
          <div className="bg-gradient-card rounded-2xl border border-border/50 overflow-hidden">
            {/* Twitter Embedded Timeline - official widget, no login needed */}
            <a
              className="twitter-timeline"
              data-theme="dark"
              data-chrome="noheader nofooter noborders transparent"
              data-height="600"
              data-link-color="#a855f7"
              href="https://twitter.com/Purveyorproof"
            >
              Loading tweets by @Purveyorproof...
            </a>
          </div>

          {/* Fallback link */}
          <div className="text-center mt-6">
            <a
              href="https://x.com/Purveyorproof"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
              View all proofs on X @Purveyorproof
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwitterFeed;
