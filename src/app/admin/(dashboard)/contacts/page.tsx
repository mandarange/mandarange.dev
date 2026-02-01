import { createClientServer } from "@/lib/supabase-server";
import { format } from "date-fns";
import { Trash2, Mail, User, Calendar } from "lucide-react";
import { deleteContact } from "./actions";
import { DeleteButton } from "../writing/DeleteButton";

export default async function AdminContactsPage() {
  const supabase = await createClientServer();
  const { data: contacts } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-serif italic text-charcoal">Inquiries</h1>
        <p className="text-charcoal/60 mt-2">Messages from your contact form.</p>
      </header>

      <div className="grid gap-6">
        {contacts?.map((contact) => (
          <div
            key={contact.id}
            className="p-8 rounded-[2rem] border border-white/5 bg-surface space-y-6 group"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex flex-wrap gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">
                    <User size={12} /> Name
                  </div>
                  <p className="font-medium text-charcoal">{contact.name}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">
                    <Mail size={12} /> Email
                  </div>
                  <a href={`mailto:${contact.email}`} className="font-medium text-mandarange hover:underline">
                    {contact.email}
                  </a>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">
                    <Calendar size={12} /> Received
                  </div>
                  <p className="font-medium text-charcoal/60">
                    {format(new Date(contact.created_at), "MMM d, yyyy HH:mm")}
                  </p>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all">
                <DeleteButton action={deleteContact.bind(null, contact.id)}>
                  <Trash2 size={18} />
                </DeleteButton>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <p className="text-charcoal/80 leading-relaxed whitespace-pre-wrap">
                {contact.message}
              </p>
            </div>
          </div>
        ))}

        {(!contacts || contacts.length === 0) && (
          <div className="py-24 text-center border border-dashed border-white/10 rounded-[2rem]">
            <p className="text-charcoal/40 italic">No messages received yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
