import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";
import ImageModal from "@/components/ImageModal";

export interface OngoingEvent {
  id: string;
  name: string;
  image: string;
  date: string;
  venue: string;
  time: string;
  category: string;
}

// You can easily add/remove events by modifying this array
const ongoingEvents: OngoingEvent[] = [
 {
    id: "1",
    name: "Twice Philippines This is for Tour",
    image: "https://pbs.twimg.com/media/GtCxMh4WEAANW6u?format=jpg&name=large",
    date: "October 4, 2025",
    venue: "Philippine Arena",
    time: "8:00 PM",
    category: "K-Pop"
  },
  {
    id: "2",
    name: "My Chemical Romance Philippines",
    image: "https://pbs.twimg.com/media/GvQVR5easAAMEhb?format=jpg&name=4096x4096",
    date: "April 25, 2026",
    venue: "Philippine Arena",
    time: "8:00 PM",
    category: "Rock"
  },
  {
    id: "3",
    name: "Super Junior Super Show 10",
    image: "https://pbs.twimg.com/media/GwHCJtqX0AA0-iZ?format=jpg&name=4096x4096",
    date: "October 4, 2025",
    venue: "SM Mall of Asia Arena",
    time: "7:00 PM",
    category: "K-Pop"
  },
  {
    id: "4",
    name: "2025 BAEKHYUN WORLD TOUR Reverie IN MANILA",
    image: "https://pbs.twimg.com/media/GwyZ9V8asAA30zC?format=jpg&name=4096x4096",
    date: "Coming Soon",
    venue: "TBA",
    time: "TBA",
    category: "K-Pop"
  },
  {
    id: "5",
    name: "Jackson Wang Magic Man 2 Philippines",
    image: "https://pbs.twimg.com/media/GxZ-jjZa4AE3yi-?format=jpg&name=large",
    date: "Coming Soon",
    venue: "TBA",
    time: "TBA",
    category: "Hip-Hop"
  },
    {
    id: "6",
    name: "Tyla : We Wanna Party Asia in Manila",
    image: "https://pbs.twimg.com/media/GxPBkVNbgAAZsvv?format=jpg&name=large",
    date: "December 3, 2025",
    venue: "SM Mall of Asia Arena",
    time: "August 6,7,8 (TICKETING)",
    category: "Hip-Hop"
  },
      {
    id: "7",
    name: "Day 6, 10th Anniversary Tour <The DECADE> IN MANILA",
    image: "https://pbs.twimg.com/media/Gxj7t6vbkAA4gSq?format=jpg&name=900x900",
    date: "January 24, 2026",
    venue: "SM Mall of Asia Arena",
    time: "TICKETING DATE: TBA",
    category: "K-Pop"
  }
];

const UpcomingEvents = () => {
  return (
    <section id="ongoing-events" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Current and upcoming events we're providing ticket assistance for
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {ongoingEvents.map((event) => (
                <CarouselItem key={event.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in hover-scale overflow-hidden h-[420px] flex flex-col">
                    {/* Event Image */}
                    <ImageModal
                      imageSrc={event.image}
                      imageAlt={event.name}
                      trigger={
                        <div className="relative h-48 overflow-hidden flex-shrink-0 bg-gradient-to-br from-muted/20 to-muted/40 cursor-pointer">
                          <img 
                            src={event.image} 
                            alt={event.name}
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <Badge className="absolute top-3 right-3 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                            COMING SOON
                          </Badge>
                        </div>
                      }
                    />
                    
                    <CardHeader className="flex-shrink-0 pb-3">
                      <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {event.name}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col justify-between pt-0">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          {event.venue}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          {event.time}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
