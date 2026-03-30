import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";

const PostTicket = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              Available Tickets
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium concert tickets ready for purchase
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Sample Item 1 - Enhanced Design */}
            <Card className="group bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-500 hover-scale overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="space-y-6">
                  <div className="text-center border-b border-border/30 pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <span className="text-2xl">🎵</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                      Black Pink &lt;Deadline&gt; Tour in Bulacan
                    </h3>
                    <div className="inline-block px-3 py-1 bg-primary/20 rounded-full">
                      <span className="text-sm font-medium text-primary">PREMIUM EVENT</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="p-4 bg-background/30 rounded-lg border border-border/20">
                      <p className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-2">Section</p>
                      <p className="text-lg font-bold text-foreground">UBB PREM</p>
                    </div>
                    <div className="p-4 bg-background/30 rounded-lg border border-border/20">
                      <p className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-2">Quantity</p>
                      <p className="text-lg font-bold text-foreground">1 Pc.</p>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-border/30">
                    <p className="text-sm font-medium text-primary/70 uppercase tracking-wider mb-2">Price</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">₱8,500</span>
                      <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sample Item 2 - Enhanced Design */}
            <Card className="group bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-500 hover-scale overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="space-y-6">
                  <div className="text-center border-b border-border/30 pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <span className="text-2xl">🎤</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                      Taylor Swift Eras Tour Manila
                    </h3>
                    <div className="inline-block px-3 py-1 bg-primary/20 rounded-full">
                      <span className="text-sm font-medium text-primary">HOT TICKET</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="p-4 bg-background/30 rounded-lg border border-border/20">
                      <p className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-2">Section</p>
                      <p className="text-lg font-bold text-foreground">VIP Standing</p>
                    </div>
                    <div className="p-4 bg-background/30 rounded-lg border border-border/20">
                      <p className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-2">Quantity</p>
                      <p className="text-lg font-bold text-foreground">2 Pcs.</p>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-border/30">
                    <p className="text-sm font-medium text-primary/70 uppercase tracking-wider mb-2">Price</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">₱12,000</span>
                      <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sample Item 3 - Enhanced Design */}
            <Card className="group bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-500 hover-scale overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="space-y-6">
                  <div className="text-center border-b border-border/30 pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <span className="text-2xl">💜</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                      BTS Permission to Dance Manila
                    </h3>
                    <div className="inline-block px-3 py-1 bg-primary/20 rounded-full">
                      <span className="text-sm font-medium text-primary">EXCLUSIVE</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="p-4 bg-background/30 rounded-lg border border-border/20">
                      <p className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-2">Section</p>
                      <p className="text-lg font-bold text-foreground">Lower Box A</p>
                    </div>
                    <div className="p-4 bg-background/30 rounded-lg border border-border/20">
                      <p className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-2">Quantity</p>
                      <p className="text-lg font-bold text-foreground">1 Pc.</p>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-border/30">
                    <p className="text-sm font-medium text-primary/70 uppercase tracking-wider mb-2">Price</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">₱15,500</span>
                      <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center p-6 bg-muted/20 rounded-lg border border-border/50">
            <p className="text-lg text-muted-foreground">
              💬 <strong>DM our socials</strong> or <strong>Join our Discord and create a ticket</strong> to transact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTicket;