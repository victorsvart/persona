'use server';

import { Card, CardContent } from '@/components/ui/card';
import { getUser } from '../actions';
import { AccountForm } from '@/components/account-form';

export default async function AccountPage() {
  const user = await getUser();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Card className="w-96">
        <CardContent>
          <div className="flex flex-col gap-5">
            <span>Account</span>
            <AccountForm user={user} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
