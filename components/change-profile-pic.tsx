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
  });

  const handleSave = async () => {
    setSaving(true);
    await saveImageUrl(imageUrl as string);
    setSaving(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex justify-start text-xs cursor-pointer hover:bg-zinc-700 transition-all">
          Change profile picture
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change your profile picture</DialogTitle>
          <DialogDescription>
            Paste a URL for your desired profile picture.
          </DialogDescription>
        </DialogHeader>

        <Input
          placeholder="http://coolimage.com/example.jpg"
          value={imageUrl || ''}
          onChange={handleInputChange}
        />

        <Button
          disabled={!validUrl || saving}
          className="mt-4"
          onClick={handleSave}
        >
          {saving ? 'Saving...' : 'Save'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
