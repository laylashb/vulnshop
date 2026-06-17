import { comments } from "@/lib/db";

export default function CommentairesPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Commentaires</h1>
      {comments.map((c) => (
        <div key={c.id}>
          <b>{c.author} :</b>{" "}
          <span>{c.html}</span>
        </div>
      ))}
    </main>
  );
}
