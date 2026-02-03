import Link from "next/link";
import WritingForm from "../WritingForm";

export default function NewWritingPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2 admin-fade-up">
        <Link href="/admin/writing" className="text-sm text-charcoal/60 hover:text-charcoal">
          Back to Writing
        </Link>
        <h1 className="text-4xl font-serif italic text-charcoal">New Article</h1>
      </div>
      <WritingForm />
    </div>
  );
}
