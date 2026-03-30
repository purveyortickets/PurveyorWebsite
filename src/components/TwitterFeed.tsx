import { useEffect, useRef } from "react";

const TwitterFeed = () => {
  const embedContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = embedContainerRef.current;
    if (!container) return;

    // Clear any previous content (React strict mode double-mount)
    container.innerHTML = "";

    // Create the Twitter timeline anchor element
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "dark");
    anchor.setAttribute("data-height", "600");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders transparent");
    anchor.setAttribute("data-link-color", "#a855f7");
    anchor.setAttribute("href", "https://twitter.com/Purveyorproof");
    anchor.textContent = "Tweets by @Purveyorproof";
    container.appendChild(anchor);

    // Create and append the Twitter widgets script
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("async", "true");
    script.setAttribute("charset", "utf-8");
    container.appendChild(script);
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
            <div ref={embedContainerRef} />
          </div>

          <div className="text-center mt-6">
            <a
              href="https://x.com/Purveyorproof"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
