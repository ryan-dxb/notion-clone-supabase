import React from "react";
import { NextPage } from "next";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import db from "@/lib/supabase/db";
import { redirect } from "next/navigation";
import DashboardSetup from "@/components/dashboard-setup/dashboard-setup";

interface DashboardProps {
  // Add your prop types here
}

const Dashboard: NextPage<DashboardProps> = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const workspace = await db.query.workspaces.findFirst({
    where: (workspace, { eq }) => eq(workspace.workspaceOwner, user.id),
  });

  //   const { data: subscription, error: subscriptionError } =
  //     await getUserSubscriptionStatus(user.id);

  //   if (subscriptionError) return;

  if (!workspace)
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-background ">
        {/* <DashboardSetup user={user} subscription={subscription} /> */}
        <DashboardSetup user={user} />
      </div>
    );

  redirect(`/dashboard/${workspace.id}`);
};

export default Dashboard;
