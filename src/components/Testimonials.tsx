import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, TrendingUp } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import ImageModal from "@/components/ImageModal";

const Testimonials = () => {
  const testimonialsLeft = [
    {
      name: "BLINKS.",
      event: "BLACK PINK <DEADLINE> in Bulacan",
      text: "Secured VIP Pit, VIP SC, LBA PREM ... up to UBC for all the BLINK Fans who availed",
      rating: 5,
      avatar: "SM",
      userImage: "https://vectorseek.com/wp-content/uploads/2023/06/vectorseek.com-Blackpink-Logo-Vector.png",
      testimonialImage: "https://pbs.twimg.com/media/GtzEQ6sW4AAbaLq?format=jpg&name=medium"
    },
    {
      name: "Se**j****e",
      event: "Seventeen <Right Here> World Tour in Bulacan",
      text: "thank you so much for this super low qn purveyor team!! 💗  Queue Number #0001",
      rating: 5,
      avatar: "MC",
      userImage: "https://cdn.discordapp.com/avatars/884358656622211072/f0e61b79f2ee583732da2f3b79f6613f.webp?size=80",
      testimonialImage: "https://i.imgur.com/ClyrUsP.png"
    },
    {
      name: "J",
      event: "BINI HERE WITH YOU HOME COMING FAN MEET",
      text: "thank u so muchhh!!! Purveyor tickets 🥹💗 always super soliddd! huhu partida I wasn't able to reply when he sent the ticket link pero he did an extra mile para lang 'di masayang yung Patron ticket ko bc of me being offline 🥲 appreciate you guysss alwaysss! 💗💗💗",
      rating: 5,
      avatar: "JR",
      userImage: "https://cdn.discordapp.com/avatars/739464172860997702/321614cb87aa531b8cc55a3bc6ea86bd.webp?size=80",
      testimonialImage: "https://i.imgur.com/BLGcsE9.png"
    },
    {
      name: "J******a M****a",
      event: "Seventeen New_ in Bulacan",
      text: "Sir!!! Thank you sa pag secure, 196-197 qn namin pero nakapagbarricade pa rin kami!!! 🥹🫶🏻",
      rating: 5,
      avatar: "JM",
      userImage: "https://scontent.fmnl45-1.fna.fbcdn.net/v/t39.30808-1/608709130_23986692091028997_3292636381531132769_n.jpg?stp=c0.0.1672.1672a_cp0_dst-jpg_s60x60_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=GRn_7TmohUgQ7kNvwG5Y3Pr&_nc_oc=Adp9_Q53i4eiX1ZrYiX0L1WEWVl-e9sBG55609bfA0lT7f0gTlN9XLooVedy_AyLaqZWe7wT7bBPc1KNB3W4shs7&_nc_zt=24&_nc_ht=scontent.fmnl45-1.fna&_nc_gid=B3AdhKPLH5Il3FvcJZNblA&_nc_ss=7a3a8&oh=00_AfzrJS2wFqRncLqBVDCHfO_hl90xtytjrnmjHWXzudc3Sw&oe=69D00496",
      testimonialImage: "https://pbs.twimg.com/media/HET8_D7awAAHL51?format=jpg&name=4096x4096"
    },
    {
      name: "M**k J****o",
      event: "LANY: SOFT WORLD TOUR",
      text: "Smooth as always! Thank you! ",
      rating: 5,
      avatar: "MJ",
      userImage: "https://scontent.fmnl45-1.fna.fbcdn.net/v/t39.30808-6/488054016_10161116014795665_1404383546070569900_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=iDlQIOkSa7kQ7kNvwGJSRIp&_nc_oc=AdpLuJwagkoseqhyaH9G-wNYlczMMnQWI8e8FAdqCxzLFiOYf7qnNFwF4_04jXTojIwZhKK9Bmy4Qkk3MXhWtme1&_nc_zt=23&_nc_ht=scontent.fmnl45-1.fna&_nc_gid=kDKZ8WNfj5L2t0fcfE8_gA&_nc_ss=7a3a8&oh=00_AfwblXWsvzy42kaxNGVO0_1fu7C8kMb2yH5zZcEWKb1KuA&oe=69D006AA",
      testimonialImage: "https://pbs.twimg.com/media/HET0AoPbkAAZCiB?format=png&name=small"
    },
    {
      name: "Alex Rodriguez",
      event: "The Weeknd After Hours Tour",
      text: "I've used other services before, but none compare to Purveyor Tickets. Fast, reliable, and they use your own credentials for security.",
      rating: 5,
      avatar: "AR",
      userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      testimonialImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop"
    },
    {
      name: "Ri****",
      event: "SEVENTEEN <Right Here> World Tour in Manila",
      text: "sobrang ganda ng service! super legit po ng purveyor tickets 💗 nakabili ako ng VIP standing ticket salamat po!",
      rating: 5,
      avatar: "RL",
      userImage: "https://cdn.discordapp.com/avatars/123456789012345678/example.webp?size=80",
      testimonialImage: "https://i.imgur.com/ExampleSVT.png"
    }
  ];

  const testimonialsRight = [
    {
      name: "David Park",
      event: "Coldplay Concert",
      text: "Quick, efficient, and affordable. They handled everything while I was at work. Got the notification that tickets were secured in just 2 hours!",
      rating: 5,
      avatar: "DP",
      userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonialImage: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&h=200&fit=crop"
    },
    {
      name: "Emma Thompson",
      event: "Bruno Mars 24K Magic Tour",
      text: "Best investment ever! Not only did they get the tickets, but they also provided excellent customer service throughout the process.",
      rating: 5,
      avatar: "ET",
      userImage: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      testimonialImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
    },
    {
      name: "Alex Rodriguez",
      event: "The Weeknd After Hours Tour",
      text: "I've used other services before, but none compare to Purveyor Tickets. Fast, reliable, and they use your own credentials for security.",
      rating: 5,
      avatar: "AR",
      userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      testimonialImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop"
    },
    {
      name: "Ri****",
      event: "SEVENTEEN <Right Here> World Tour in Manila",
      text: "sobrang ganda ng service! super legit po ng purveyor tickets 💗 nakabili ako ng VIP standing ticket salamat po!",
      rating: 5,
      avatar: "RL",
      userImage: "https://cdn.discordapp.com/avatars/123456789012345678/example.webp?size=80",
      testimonialImage: "https://i.imgur.com/ExampleSVT.png"
    },
      {
      name: "BLINKS.",
      event: "BLACK PINK <DEADLINE> in Bulacan",
      text: "Secured VIP Pit, VIP SC, LBA PREM ... up to UBC for all the BLINK Fans who availed",
      rating: 5,
      avatar: "SM",
      userImage: "https://vectorseek.com/wp-content/uploads/2023/06/vectorseek.com-Blackpink-Logo-Vector.png",
      testimonialImage: "https://pbs.twimg.com/media/GtzEQ6sW4AAbaLq?format=jpg&name=medium"
    },
    {
      name: "Se**j****e",
      event: "Seventeen <Right Here> World Tour in Bulacan",
      text: "thank you so much for this super low qn purveyor team!! 💗  Queue Number #0001",
      rating: 5,
      avatar: "MC",
      userImage: "https://cdn.discordapp.com/avatars/884358656622211072/f0e61b79f2ee583732da2f3b79f6613f.webp?size=80",
      testimonialImage: "https://i.imgur.com/ClyrUsP.png"
    },
    {
      name: "J",
      event: "BINI HERE WITH YOU HOME COMING FAN MEET",
      text: "thank u so muchhh!!! Purveyor tickets 🥹💗 always super soliddd! huhu partida I wasn't able to reply when he sent the ticket link pero he did an extra mile para lang 'di masayang yung Patron ticket ko bc of me being offline 🥲 appreciate you guysss alwaysss! 💗💗💗",
      rating: 5,
      avatar: "JR",
      userImage: "https://cdn.discordapp.com/avatars/739464172860997702/321614cb87aa531b8cc55a3bc6ea86bd.webp?size=80",
      testimonialImage: "https://i.imgur.com/BLGcsE9.png"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up text-white">
            Recent <span className="bg-gradient-primary bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
            Proof of our reliable and successful ticket purchases for high-demand events!
          </p>
        </div>

        {/* First Carousel - Moving Left */}
        <Carousel
          className="max-w-7xl mx-auto mb-8"
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonialsLeft.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in hover-scale overflow-hidden h-[420px] flex flex-col">
                  {/* Testimonial Screenshot */}
                  <ImageModal
                    imageSrc={testimonial.testimonialImage}
                    imageAlt={`${testimonial.event} testimonial`}
                    trigger={
                      <div className="relative h-40 overflow-hidden flex-shrink-0 cursor-pointer">
                        <img 
                          src={testimonial.testimonialImage} 
                          alt={`${testimonial.event} testimonial`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                    }
                  />
                  
                  <CardHeader className="flex-shrink-0 pb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="border-2 border-primary/20 w-10 h-10 flex-shrink-0">
                        <AvatarImage src={testimonial.userImage} alt={testimonial.name} />
                        <AvatarFallback className="bg-gradient-primary text-white font-semibold text-xs">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-foreground text-sm truncate">{testimonial.name}</h4>
                        <p className="text-xs text-primary font-medium truncate">{testimonial.event}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-1 mt-2 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary text-primary animate-fade-in" />
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex items-start pt-2">
                    <blockquote className="text-muted-foreground italic text-sm leading-relaxed line-clamp-4">
                      "{testimonial.text}"
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Second Carousel - Moving Right */}
        <Carousel
          className="max-w-7xl mx-auto"
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonialsRight.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-slide-up hover-scale overflow-hidden h-[420px] flex flex-col">
                  {/* Testimonial Screenshot */}
                  <ImageModal
                    imageSrc={testimonial.testimonialImage}
                    imageAlt={`${testimonial.event} testimonial`}
                    trigger={
                      <div className="relative h-40 overflow-hidden flex-shrink-0 cursor-pointer">
                        <img 
                          src={testimonial.testimonialImage} 
                          alt={`${testimonial.event} testimonial`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                    }
                  />
                  
                  <CardHeader className="flex-shrink-0 pb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="border-2 border-primary/20 w-10 h-10 flex-shrink-0">
                        <AvatarImage src={testimonial.userImage} alt={testimonial.name} />
                        <AvatarFallback className="bg-gradient-primary text-white font-semibold text-xs">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-foreground text-sm truncate">{testimonial.name}</h4>
                        <p className="text-xs text-primary font-medium truncate">{testimonial.event}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-1 mt-2 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary text-primary animate-fade-in" />
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex items-start pt-2">
                    <blockquote className="text-muted-foreground italic text-sm leading-relaxed line-clamp-4">
                      "{testimonial.text}"
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

      </div>
    </section>
  );
};

export default Testimonials;
