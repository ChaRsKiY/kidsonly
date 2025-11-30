'use client';

import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface MapButtonProps {
  mapLink: string;
}

export function MapButton({ mapLink }: MapButtonProps) {
  const t = useTranslations('branchPage');
  return (
    <Button
      onClick={() => window.open(mapLink, '_blank')}
      variant="outline"
      className="w-full mt-6 border-accent"
    >
      <ExternalLink className="mr-2 w-4 h-4" />
      {t('mapButton')}
    </Button>
  );
}
