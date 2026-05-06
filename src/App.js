# App.js Final — RISE Sosial Ekologi Indonesia

```jsx
import React from 'react';
import {
  Leaf,
  Users,
  BookOpen,
  ShieldCheck,
  Globe,
  Landmark,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-2xl">
              <Leaf className="text-emerald-700" size={54} />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            RISE Sosial Ekologi Indonesia
          </h1>

          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            Riau Center for Socio-Ecological Research and Policy
          </p>

          <p className="mt-8 max-w-4xl mx-auto text-lg text-gray-200 leading-relaxed">
            Lembaga independen yang bergerak di bidang riset sosial-ekologis,
            kebijakan publik, resolusi konflik, pemberdayaan masyarakat,
            pendidikan lingkungan, dan transformasi pembangunan berkelanjutan.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#tentang"
              className="bg-white text-emerald-800 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-emerald-50 transition"
            >
              Tentang Kami
            </a>

            <a
              href="#program"
              className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-800 transition"
            >
              Program
            </a>
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-emerald-800 mb-8">
              Tentang RISE
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Yayasan RISE Sosial Ekologi Indonesia merupakan lembaga yang
              berfokus pada pengembangan riset sosial-ekologis, penguatan
              kebijakan publik, penyelesaian konflik sumber daya alam,
              pemberdayaan masyarakat, serta pengembangan tata kelola
              lingkungan yang berkelanjutan.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              RISE hadir sebagai ruang kolaboratif antara akademisi,
              peneliti, masyarakat sipil, komunitas lokal, pemerintah,
              dan sektor usaha untuk mendorong pembangunan yang adil,
              inklusif, dan berkelanjutan.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Pendekatan kerja RISE mengintegrasikan penelitian ilmiah,
              advokasi berbasis bukti, pendidikan lingkungan, dan penguatan
              ekonomi lokal sebagai bagian dari transformasi sosial-ekologi
              di Indonesia.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-3xl p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-emerald-800 mb-6">
              Legalitas Yayasan
            </h3>

            <div className="space-y-5 text-gray-700 text-lg">
              <div>
                <span className="font-semibold">Nama Yayasan:</span><br />
                Yayasan RISE Sosial Ekologi Indonesia
              </div>

              <div>
                <span className="font-semibold">Nomor AHU:</span><br />
                AHU-0011198.AH.01.04.Tahun 2026
              </div>

              <div>
                <span className="font-semibold">Tanggal Pengesahan:</span><br />
                05 Mei 2026
              </div>

              <div>
                <span className="font-semibold">Kedudukan:</span><br />
                Kota Pekanbaru, Riau
              </div>

              <div>
                <span className="font-semibold">Notaris:</span><br />
                Miftahul Haq, S.H., M.Kn.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">
              Fokus Program
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Program-program RISE dikembangkan untuk memperkuat transformasi
              sosial-ekologis berbasis riset, kolaborasi, dan keberlanjutan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf size={36} />,
                title: 'Sosial Ekologi',
                desc: 'Penguatan pendekatan sosial-ekologis dalam pembangunan dan pengelolaan sumber daya alam.',
              },
              {
                icon: <BookOpen size={36} />,
                title: 'Riset Kebijakan',
                desc: 'Penelitian berbasis bukti untuk mendukung kebijakan publik yang inklusif dan berkelanjutan.',
              },
              {
                icon: <Users size={36} />,
                title: 'Pemberdayaan Komunitas',
                desc: 'Penguatan kapasitas masyarakat adat dan lokal melalui pendekatan partisipatif.',
              },
              {
                icon: <ShieldCheck size={36} />,
                title: 'Resolusi Konflik',
                desc: 'Fasilitasi penyelesaian konflik sumber daya alam melalui dialog dan pendekatan multipihak.',
              },
              {
                icon: <Globe size={36} />,
                title: 'Lingkungan & ESG',
                desc: 'Pengembangan tata kelola keberlanjutan, ESG, dan mitigasi perubahan iklim.',
              },
              {
                icon: <Landmark size={36} />,
                title: 'Pendidikan & Pelatihan',
                desc: 'Pendidikan lingkungan, pelatihan masyarakat, dan penguatan kapasitas institusi.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUKTUR */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">
              Struktur Yayasan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">
                Pembina
              </h3>
              <p className="text-lg font-semibold">M. Rawa El Amady</p>
              <p className="text-gray-600">Ketua Pembina</p>
            </div>

            <div className="bg-emerald-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">
                Pengurus
              </h3>

              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold">Anto Ariyanto</p>
                  <p>Ketua</p>
                </div>

                <div>
                  <p className="font-semibold">Istiqomah Marfuah</p>
                  <p>Sekretaris</p>
                </div>

                <div>
                  <p className="font-semibold">Anggi Kemala Rezki</p>
                  <p>Bendahara</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">
                Pengawas
              </h3>
              <p className="text-lg font-semibold">Dr. Ir. Ervayenri, M.Si.</p>
              <p className="text-gray-600">Ketua Pengawas</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFIL PIMPINAN */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">
              Profil Pimpinan
            </h2>
          </div>

          <div className="space-y-10">
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">
                Anto Ariyanto
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                Akademisi, peneliti, dan penggerak sosial-ekologi yang memiliki
                perhatian kuat pada isu pembangunan berkelanjutan, ekonomi hijau,
                tata kelola sumber daya alam, dan pemberdayaan masyarakat berbasis
                lingkungan. Aktif dalam pengembangan riset agribisnis berkelanjutan,
                ekonomi lingkungan, serta transformasi kebijakan sosial-ekologis.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">
                Istiqomah Marfuah
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                Peneliti sosial dan mediator konflik sumber daya alam dengan pengalaman
                lebih dari satu dekade dalam isu masyarakat adat, konflik tenurial,
                gender, dan tata kelola keberlanjutan. Aktif dalam pendekatan ADR,
                FPIC, dan penelitian etnografi berbasis masyarakat.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">
                M. Rawa El Amady
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                Doktor Antropologi Universitas Indonesia yang telah lebih dari dua
                dekade fokus pada resolusi konflik, pemberdayaan masyarakat, dan
                penelitian sosial-ekologis. Pengembang pendekatan Pialang Budaya,
                Etnografi Pemberdayaan, dan Etnografi Cepat.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">
                Dr. Ir. Ervayenri, M.Si.
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                Akademisi dan peneliti senior Universitas Lancang Kuning dengan
                kepakaran pada bidang silvikultur, mikoriza, konservasi sumber daya
                hutan, serta pengelolaan lingkungan hidup berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              RISE Sosial Ekologi Indonesia
            </h3>

            <p className="text-emerald-100 leading-relaxed">
              Mendorong transformasi sosial-ekologis melalui riset,
              pemberdayaan masyarakat, pendidikan lingkungan,
              dan kebijakan berkelanjutan.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-5">Kontak</h4>

            <div className="space-y-4 text-emerald-100">
              <div className="flex items-start gap-3">
                <MapPin size={20} />
                <span>
                  Perumahan Villa Garuda Mas, Pekanbaru, Riau
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>risepolicycenter@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>+62 000 0000 0000</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-5">Legalitas</h4>

            <p className="text-emerald-100 leading-relaxed">
              AHU-0011198.AH.01.04.Tahun 2026
              <br /><br />
              Yayasan RISE Sosial Ekologi Indonesia
              telah disahkan oleh Kementerian Hukum
              Republik Indonesia.
            </p>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-12 pt-8 text-center text-emerald-200">
          © 2026 RISE Sosial Ekologi Indonesia. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
```

# Langkah Memasang di VS Code

1. Buka file:

```text
src/App.js
```

2. Hapus semua isi lama.

3. Paste seluruh kode di atas.

4. Save:

```text
Ctrl + S
```

5. Jalankan terminal:

```bash
```
