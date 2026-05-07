import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>
    <nav
  style={{
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "20px 8%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(0,0,0,0.3)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
    color: "white",
  }}
>
  <h2>RISE</h2>

  <div style={{ display: "flex", gap: "30px" }}>
    <a href="#tentang" style={{ color: "white", textDecoration: "none" }}>
      Tentang
    </a>

    <a href="#program" style={{ color: "white", textDecoration: "none" }}>
      Program
    </a>

    <a href="#struktur" style={{ color: "white", textDecoration: "none" }}>
      Struktur
    </a>
  </div>
</nav>  
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,80,50,0.7), rgba(0,80,50,0.7)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/427/427735.png"
            alt="logo"
            style={{
              width: "120px",
              marginBottom: "30px",
              background: "white",
              borderRadius: "50%",
              padding: "20px",
            }}
          />

          <h1 style={{ fontSize: "64px", marginBottom: "20px" }}>
            RISE Sosial Ekologi Indonesia
          </h1>

          <p style={{ fontSize: "28px", marginBottom: "20px" }}>
            Riau Center for Socio-Ecological Research and Policy
          </p>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Lembaga independen yang bergerak di bidang riset sosial-ekologis,
            kebijakan publik, resolusi konflik, pemberdayaan masyarakat,
            pendidikan lingkungan, dan transformasi pembangunan berkelanjutan.
          </p>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" style={{ padding: "80px 10%" }}>
        <h2 style={{ fontSize: "42px", color: "#065f46" }}>
          Tentang Yayasan
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.9",
            marginTop: "30px",
            color: "#333",
          }}
        >
          Yayasan RISE Sosial Ekologi Indonesia merupakan lembaga yang fokus
          pada pengembangan riset sosial-ekologis, penguatan kebijakan publik,
          penyelesaian konflik sumber daya alam, pemberdayaan masyarakat, serta
          pengembangan tata kelola lingkungan yang berkelanjutan.
        </p>
      </section>
{/* PROGRAM */}
<section
  id="program"
  style={{
    background: "#f0fdf4",
    padding: "80px 10%",
  }}
>
  <h2 style={{ fontSize: "42px", color: "#065f46" }}>
    Program Yayasan
  </h2>

  <div
    style={{
      marginTop: "30px",
      fontSize: "20px",
      lineHeight: "2",
      color: "#333",
    }}
  >
    <p>• Riset Sosial-Ekologis</p>
    <p>• Resolusi Konflik Sumber Daya Alam</p>
    <p>• Pendidikan dan Literasi Lingkungan</p>
    <p>• Pemberdayaan Masyarakat</p>
    <p>• Advokasi Kebijakan Publik</p>
  </div>
</section>
      {/* LEGAlITAS */}
      <section
  id="legalitas"
  style={{
          background: "white",
          padding: "80px 10%",
        }}
      >
        <h2 style={{ fontSize: "42px", color: "#065f46" }}>
          Legalitas Yayasan
        </h2>

        <div style={{ marginTop: "30px", fontSize: "20px", lineHeight: "2" }}>
          <p>
            <strong>Nama Yayasan:</strong> Yayasan RISE Sosial Ekologi Indonesia
          </p>

          <p>
            <strong>Nomor AHU:</strong> AHU-0011198.AH.01.04 Tahun 2026
          </p>

          <p>
            <strong>Tanggal Pengesahan:</strong> 05 Mei 2026
          </p>

          <p>
            <strong>Kedudukan:</strong> Kota Pekanbaru, Riau
          </p>

          <p>
            <strong>Notaris:</strong> Miftahul Haq, S.H., M.Kn.
          </p>
        </div>
      </section>

      {/* PENGURUS */}
      <section id="struktur" style={{ padding: "80px 10%" }}>
        <h2 style={{ fontSize: "42px", color: "#065f46" }}>
          Struktur Yayasan
        </h2>

        <div
          style={{
            marginTop: "40px",
            display: "grid",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
            }}
          >
            <h3 style={{ color: "#065f46" }}>Ketua Yayasan</h3>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Anto Ariyanto
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
            }}
          >
            <h3 style={{ color: "#065f46" }}>Sekretaris</h3>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Istiqomah Marfuah
            </p>
          </div>
<div
  style={{
    background: "white",
    padding: "30px",
    borderRadius: "16px",
  }}
>
  <h3 style={{ color: "#065f46" }}>Bendahara</h3>
  <p style={{ fontSize: "22px", fontWeight: "bold" }}>
    Anggi Kemala Rezki
  </p>
</div>

<div
  style={{
    background: "white",
    padding: "30px",
    borderRadius: "16px",
  }}
>
  <h3 style={{ color: "#065f46" }}>Koordinator Program</h3>
  <p style={{ fontSize: "22px", fontWeight: "bold" }}>
    Rahmaidi Azani
  </p>
</div>
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
            }}
          >
            <h3 style={{ color: "#065f46" }}>Pembina</h3>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              M. Rawa El Amady
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
            }}
          >
            <h3 style={{ color: "#065f46" }}>Pengawas</h3>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Dr. Ir. Ervayenri, M.Si.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#064e3b",
          color: "white",
          textAlign: "center",
          padding: "40px",
          marginTop: "60px",
        }}
      >
        <h3>RISE Sosial Ekologi Indonesia</h3>

        <p style={{ marginTop: "10px" }}>
          Mendorong transformasi sosial-ekologi yang adil dan berkelanjutan.
        </p>

        <p style={{ marginTop: "20px", opacity: 0.8 }}>
          © 2026 RISE Sosial Ekologi Indonesia
        </p>
      </footer>

    </div>
  );
}