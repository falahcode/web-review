import { products } from "../data/products";
import Link from "next/link";

export default function ReviewListPage() {
  return (
    <main style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ marginBottom: "20px" }}>🔥 Rekomendasi Produk Terbaik</h1>

      {products.map((item) => (
        <div
          key={item.slug}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        >
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <Link href={`/review/${item.slug}`}>
            <button
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Lihat Review
            </button>
          </Link>
        </div>
      ))}
    </main>
  );
}