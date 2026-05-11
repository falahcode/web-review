import { products } from "./data/products";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Review Produk Terbaik
      </h1>

      {products.map((item) => (
        <div key={item.slug} className="border p-4 mb-4 rounded">
          <h2 className="text-xl font-semibold">
  <Link href={`/review/${item.slug}`}>
    {item.title}
  </Link>
</h2>

<p>{item.description}</p>

<a
  href={item.affiliate}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 12px",
    background: "black",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none"
  }}
>
  Beli di Shopee
</a>
        </div>
      ))}
    </main>
  );
}