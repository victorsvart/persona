'use client';

import { ReactElement, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { isValidURL } from '@/lib/utils';
import { saveImageUrl } from '@/app/dashboard/account/actions';
import Image from 'next/image';

type Props = {
  currentUserImage: string | null;
};

export const ChangeProfilePic = ({ currentUserImage }: Props): ReactElement => {
  const [imageUrl, setImageUrl] = useState(currentUserImage);
  const [validUrl, setValidUrl] = useState(false);
  const [saving, setSaving] = useState(false);
  const [open, setOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  useEffect(() => {
    const { error } = isValidURL(imageUrl as string);
    if (error) {
      setValidUrl(false);
      return;
    }

    setValidUrl(true);
  }, [imageUrl]);

  const handleSave = async () => {
    setSaving(true);
    await saveImageUrl(imageUrl as string);
    setSaving(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
          Change profile picture
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
            Update Profile Picture
          </DialogTitle>
          <DialogDescription>
            Enter a URL to your desired profile picture. Make sure the image is
            publicly accessible.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Image URL</label>
            <Input
              placeholder="https://example.com/your-photo.jpg"
              value={imageUrl || ''}
              onChange={handleInputChange}
              className="h-11"
            />
            {imageUrl && (
              <div className="text-xs text-muted-foreground">
                {validUrl ? (
                  <span className="text-green-600">✓ Valid URL format</span>
                ) : (
                  <span className="text-red-600">
                    ✗ Please enter a valid URL
                  </span>
                )}
              </div>
            )}
          </div>

          {imageUrl && validUrl && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Preview</label>
              <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-muted">
                <Image
                  src={imageUrl}
                  alt="Profile preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={saving}
          >
            Cancel
          </Button>
          <Button
            disabled={!validUrl || saving}
            onClick={handleSave}
            className="min-w-[100px]"
          >
            {saving ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Saving...
              </>
            ) : (
              'Save Picture'
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
