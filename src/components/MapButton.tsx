'use client';

import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface MapButtonProps {
  mapLink: string;
}

export function MapButton({ mapLink }: MapButtonProps) {
  return (
    <Button
      onClick={() => window.open(mapLink, '_blank')}
      variant="outline"
      className="w-full mt-6 border-accent"
    >
      <ExternalLink className="mr-2 w-4 h-4" />
      In Karten öffnen
    </Button>
  );
}
