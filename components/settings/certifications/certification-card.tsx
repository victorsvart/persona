'use client';

import { format, isFuture, isPast } from 'date-fns';
import { IconCertificate, IconCalendar, IconExternalLink, IconAlertCircle } from '@tabler/icons-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Certification } from '@prisma/client';

interface CertificationCardProps {
  certification: Certification;
  onClick: () => void;
}

export function CertificationCard({
  certification,
  onClick,
}: CertificationCardProps) {
  const formatDate = (date: Date) => {
    return format(new Date(date), 'MMM yyyy');
  };

  const isExpired = certification.expirationDate 
    ? isPast(new Date(certification.expirationDate)) && !certification.doesNotExpire
    : false;

  const isExpiringSoon = certification.expirationDate && !certification.doesNotExpire
    ? isFuture(new Date(certification.expirationDate)) && 
      new Date(certification.expirationDate).getTime() - Date.now() < 90 * 24 * 60 * 60 * 1000 // 90 days
    : false;

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Certification Name */}
            <div className="flex items-center gap-2 mb-1">
              <IconCertificate className="h-4 w-4 shrink-0 text-muted-foreground" />
              <h3 className="font-semibold text-base truncate">
                {certification.name}
              </h3>
            </div>

            {/* Issuing Organization */}
            <p className="text-sm font-medium text-muted-foreground mb-3">
              {certification.issuingOrganization}
            </p>

            {/* Issue Date & Expiration */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <IconCalendar className="h-3.5 w-3.5 shrink-0" />
              <span>
                Issued: {formatDate(certification.issueDate)}
              </span>
            </div>

            {certification.expirationDate && !certification.doesNotExpire && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <IconCalendar className="h-3.5 w-3.5 shrink-0" />
                <span>
                  Expires: {formatDate(certification.expirationDate)}
                </span>
              </div>
            )}

            {/* Credential Info */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
              {certification.credentialId && (
                <span>ID: {certification.credentialId}</span>
              )}
              {certification.credentialUrl && (
                <div className="flex items-center gap-1">
                  <IconExternalLink className="h-3 w-3" />
                  <span>Verify</span>
                </div>
              )}
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex flex-col gap-2 items-end shrink-0">
            {certification.doesNotExpire && (
              <Badge variant="secondary" className="text-xs">
                No Expiration
              </Badge>
            )}
            {isExpired && (
              <Badge variant="destructive" className="text-xs flex items-center gap-1">
                <IconAlertCircle className="h-3 w-3" />
                Expired
              </Badge>
            )}
            {isExpiringSoon && !isExpired && (
              <Badge variant="outline" className="text-xs text-orange-600 border-orange-600">
                Expiring Soon
              </Badge>
            )}
            {!isExpired && !isExpiringSoon && !certification.doesNotExpire && certification.expirationDate && (
              <Badge variant="default" className="text-xs bg-green-600">
                Active
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

