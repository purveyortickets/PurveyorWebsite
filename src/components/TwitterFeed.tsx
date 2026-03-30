import { useEffect, useRef, useState } from "react";

const TwitterFeed = () => {
  const embedRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadTwitterWidget = () => {
      // If twttr is already available, create the timeline directly
      if ((window as any).twttr?.widgets) {
        renderTimeline();
        return;
      }

      // Check if script tag already exists
      const existingScript = document.querySelector(
        'script[src="https://platform.twitter.com/widgets.js"]'
      );

      if (existingScript) {
        // Script exists but twttr not ready yet — wait for it
        existingScript.addEventListener("load", () => {
          renderTimeline();
        });
      } else {
        // Load the script fresh
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        script.onload = () => {
          renderTimeline();
        };
        document.head.appendChild(script);
      }
    };

    const renderTimeline = () => {
      const twttr = (window as any).twttr;
      if (!twttr?.widgets || !embedRef.current) return;

      // Clear any previous content
      embedRef.current.innerHTML = "";

      twttr.widgets
        .createTimeline(
          {
            sourceType: "profile",
            screenName: "Purveyorproof",
          },
          embedRef.current,
          {
            theme: "dark",
            chrome: "noheader nofooter noborders transparent",
            height: 600,
            linkColor: "#a855f7",
            dnt: true,
          }
        )
        .then(() => {
          setLoaded(true);
        })
        .catch(() => {
          setLoaded(true); // show fallback
        });
    };

    loadTwitterWidget();
  }, []);

  return (
    <section id="twitter-feed" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up text-white">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Proofs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
            Live feed from our official X (Twitter) account showcasing
            successful ticket purchases.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-card rounded-2xl border border-border/50 overflow-hidden p-4">
            {/* Loading state */}
            {!loaded && (
              <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                <svg
                  className="w-8 h-8 animate-spin text-primary mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <p className="text-sm">Loading tweets...</p>
              </div>
            )}

            {/* Twitter embed container */}
            <div ref={embedRef} />
          </div>

          {/* Link to profile */}
          <div className="text-center mt-6">
            <a
              href="https://x.com/Purveyorproof"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
