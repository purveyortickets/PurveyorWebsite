import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface ImageModalProps {
  trigger: ReactNode;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal = ({ trigger, imageSrc, imageAlt }: ImageModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 border-0 bg-transparent shadow-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;