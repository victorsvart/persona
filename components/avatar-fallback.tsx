'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { User } from 'better-auth';

type Props = {
  user: User;
};

export const AvatarAndFallback: React.FC<Props> = ({ user }: Props) => {
  return (
    <Avatar className="h-8 w-8 rounded-lg grayscale">
      <AvatarImage src={user?.image ?? undefined} alt={user.name} />
      <AvatarFallback className="rounded-lg">
        {user.name.split(' ').map((x) => x[0])}
      </AvatarFallback>
    </Avatar>
  );
};
