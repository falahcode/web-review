import { products } from "@/app/data/products";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log("SLUG:", slug);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <main style={{ 
  padding: "20px", 
  maxWidth: "700px", 
  margin: "auto",
  lineHeight: "1.6"
}}>
<h1>{product.title}</h1>
<p>{product.description}</p>
<h2 style={{ marginTop: "25px" }}>Kenapa Harus Pilih Produk Ini?</h2>
<p>
Produk ini cocok untuk kamu yang mencari kualitas bagus dengan harga terjangkau.
Selain itu, performanya sudah cukup untuk kebutuhan sehari-hari.
</p>

<h2 style={{ marginTop: "25px" }}>Kelebihan</h2>
<ul>
  <li>Harga terjangkau</li>
  <li>Mudah digunakan</li>
  <li>Cocok untuk pemula</li>
</ul>

<h2 style={{ marginTop: "25px" }}>Kekurangan</h2>
<ul>
  <li>Fitur tidak terlalu lengkap</li>
</ul>

<h2 style={{ marginTop: "25px" }}>Kesimpulan</h2>
<p>
Jika kamu mencari produk terbaik di kelasnya, ini adalah pilihan yang layak
dipertimbangkan.
</p>
<p style={{ marginTop: "20px", fontWeight: "bold" }}>
🔥 Cek harga terbaru dan promo sekarang:
</p>
<a href={product.affiliate} target="_blank">
  <button
    style={{
      marginTop: "20px",
      padding: "12px 18px",
      background: "#ff6600",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "16px"
    }}
  >
    🛒 Beli Sekarang di Shopee
  </button>
</a>
    </main>
  );
}