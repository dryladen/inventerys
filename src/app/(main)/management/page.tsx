import { api } from "~/trpc/server";
import { DataTable } from "../../_components/data-table";
import { columns } from "./column";
import { FormUser } from "~/app/_components/form-user";
import { UserPlus } from "lucide-react";
import { Button } from "~/components/ui/button";
export default async function Page() {
  const data = await api.user.all.query();
  const formattedData = data.map((user) => ({
    ...user,
    emailVerified: user.emailVerified?.toISOString() || null,
  }));
  return (
    <>
      <DataTable
        columns={columns}
        data={formattedData}
        buttonComponent={
          <FormUser
            icon={
              <Button variant="outline" className="ml-2">
                <UserPlus className="mr-2 h-4 w-4 cursor-pointer " />
                Add Member
              </Button>
            }
          />
        }
      />
    </>
  );
}
