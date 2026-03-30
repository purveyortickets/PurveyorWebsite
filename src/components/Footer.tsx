const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/fa21bdb6-a4e1-4d86-8a6e-97c7042719bc.png" 
              alt="Purveyor Tickets Logo" 
              className="w-8 h-8 rounded-lg shadow-md"
            />
            <span className="text-lg font-bold text-foreground">Purveyor Tickets</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 Purveyor Tickets. All rights reserved.
          </p>
          
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;