'use server';

import { handleDashboardRedirect } from './actions';

export default async function DashboardPage() {
  // send users to their first app or onboard
  await handleDashboardRedirect();

  // should never get hit
  return null;
}
