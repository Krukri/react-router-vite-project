import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  throw new Error("OMG! It will be deleted. Sad life.");
  await deleteContact(params.contactId);
  return redirect("/");
}
