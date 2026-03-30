const TwitterFeed = () => {
  return (
    <section id="twitter-feed" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up text-white">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Proofs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
            To view our Proofs go to our official X (Twitter) account showcasing successful ticket purchases, click the link below.
          </p>
        </div>

        <div className="text-center">
          <a
            href="https://x.com/Purveyorproof"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-lg font-medium"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            View all proofs on X @Purveyorproof
          </a>
        </div>
      </div>
    </section>
  );
};

export default TwitterFeed;
