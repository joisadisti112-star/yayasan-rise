import React, { useState } from 'react';
import { 
  Leaf, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Edit3, 
  Save, 
  Heart,
  ChevronRight
} from 'lucide-react';

// Komponen Pembantu untuk Teks yang Bisa Diedit
const EditableText = ({ isEditing, value, onChange, type = "text", className = "", textClassName = "" }) => {
  if (isEditing) {
    if (type === "textarea") {
      return (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-emerald-50/80 border border-emerald-300 rounded p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${className}`}
          rows={4}
        />
      );
    }
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-emerald-50/80 border border-emerald-300 rounded p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${className}`}
      />
    );
  }
  return <span className={textClassName || className}>{value}</span>;
};

export default function App() {
  const [isEditing, setIsEditing] = useState(false);

  // State Sentral untuk Konten Website (Database Simulasi)
  const [content, setContent] = useState({
    heroTitle: "Membangun Keseimbangan Sosial & Ekologis",
    heroSubtitle: "Yayasan Rise Sosial Ekologis Indonesia berdedikasi untuk menciptakan harmoni antara manusia dan alam melalui edukasi, aksi nyata, dan pemberdayaan berkelanjutan.",
    heroButtonText: "Pelajari Lebih Lanjut",
    
    aboutTitle: "Tentang Kami",
    aboutText: "Kami adalah organisasi non-profit yang berbasis di Indonesia, berfokus pada keadilan sosial dan kelestarian lingkungan hidup. Kami percaya bahwa lingkungan yang sehat adalah hak dasar setiap individu, dan masyarakat yang berdaya adalah kunci untuk menjaga kelestarian bumi kita.",
    
    programsTitle: "Program Unggulan",
    program1Title: "Konservasi Alam",
    program1Desc: "Upaya pelestarian hutan, restorasi lahan kritis, dan perlindungan keanekaragaman hayati lokal.",
    program2Title: "Pemberdayaan Masyarakat",
    program2Desc: "Meningkatkan ekonomi lokal melalui sistem pertanian berkelanjutan dan kerajinan ramah lingkungan.",
    program3Title: "Edukasi Ekologis",
    program3Desc: "Program pendidikan lingkungan untuk generasi muda guna membangun kesadaran sejak dini.",
    
    callToActionTitle: "Mari Bergabung Bersama Kami",
    callToActionText: "Setiap langkah kecil sangat berarti. Dukung misi kami untuk Indonesia yang lebih hijau dan sejahtera.",
    callToActionButton: "Donasi Sekarang",

    contactAddress: "Jl. Jenderal Sudirman, Pekanbaru, Riau, Indonesia",
    contactEmail: "halo@yayasansrise.or.id",
    contactPhone: "+62 812 3456 7890"
  });

  const updateContent = (key, value) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-600 text-white p-2 rounded-lg">
                <Leaf size={28} />
              </div>
              <div>
                <h1 className="font-bold text-xl text-emerald-900 leading-tight">Yayasan Rise</h1>
                <p className="text-xs text-emerald-600 font-medium tracking-wide">Sosial Ekologis Indonesia</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-600 hover:text-emerald-600 font-medium transition">Beranda</a>
              <a href="#tentang" className="text-gray-600 hover:text-emerald-600 font-medium transition">Tentang</a>
              <a href="#program" className="text-gray-600 hover:text-emerald-600 font-medium transition">Program</a>
              <a href="#kontak" className="text-gray-600 hover:text-emerald-600 font-medium transition">Kontak</a>
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-medium transition-colors duration-300 hidden md:block shadow-md">
              Dukung Kami
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" 
            alt="Pemandangan Alam Indonesia" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-emerald-900/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 max-w-4xl leading-tight">
            <EditableText 
              isEditing={isEditing} 
              value={content.heroTitle} 
              onChange={(val) => updateContent('heroTitle', val)} 
              type="textarea"
              textClassName="drop-shadow-lg"
            />
          </h2>
          <p className="text-lg md:text-xl text-emerald-50 mb-10 max-w-2xl font-light">
            <EditableText 
              isEditing={isEditing} 
              value={content.heroSubtitle} 
              onChange={(val) => updateContent('heroSubtitle', val)} 
              type="textarea"
            />
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg">
            <EditableText 
              isEditing={isEditing} 
              value={content.heroButtonText} 
              onChange={(val) => updateContent('heroButtonText', val)} 
            />
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">
                Misi Kami
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative">
                <EditableText 
                  isEditing={isEditing} 
                  value={content.aboutTitle} 
                  onChange={(val) => updateContent('aboutTitle', val)} 
                />
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-emerald-500 rounded"></span>
              </h2>
              <div className="text-gray-600 leading-relaxed text-lg">
                <EditableText 
                  isEditing={isEditing} 
                  value={content.aboutText} 
                  onChange={(val) => updateContent('aboutText', val)} 
                  type="textarea"
                />
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80" 
                  alt="Kegiatan Sosial" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                    <Heart size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-xl">10+ Tahun</p>
                    <p className="text-gray-500 text-sm">Mengabdi untuk Bumi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="program" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <EditableText 
                isEditing={isEditing} 
                value={content.programsTitle} 
                onChange={(val) => updateContent('programsTitle', val)} 
              />
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-emerald-100 group">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <EditableText 
                  isEditing={isEditing} 
                  value={content.program1Title} 
                  onChange={(val) => updateContent('program1Title', val)} 
                />
              </h3>
              <p className="text-gray-600">
                <EditableText 
                  isEditing={isEditing} 
                  value={content.program1Desc} 
                  onChange={(val) => updateContent('program1Desc', val)} 
                  type="textarea"
                />
              </p>
            </div>

            {/* Program 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-emerald-100 group">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <EditableText 
                  isEditing={isEditing} 
                  value={content.program2Title} 
                  onChange={(val) => updateContent('program2Title', val)} 
                />
              </h3>
              <p className="text-gray-600">
                <EditableText 
                  isEditing={isEditing} 
                  value={content.program2Desc} 
                  onChange={(val) => updateContent('program2Desc', val)} 
                  type="textarea"
                />
              </p>
            </div>

            {/* Program 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-emerald-100 group">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <EditableText 
                  isEditing={isEditing} 
                  value={content.program3Title} 
                  onChange={(val) => updateContent('program3Title', val)} 
                />
              </h3>
              <p className="text-gray-600">
                <EditableText 
                  isEditing={isEditing} 
                  value={content.program3Desc} 
                  onChange={(val) => updateContent('program3Desc', val)} 
                  type="textarea"
                />
              </p>
            </div>
          </div>
        </div>
        {/* Program 4 */}
<div className="bg-white rounded-2xl p-8 shadow-sm ...">
  <div className="w-16 h-16 bg-emerald-100 ...">
    <Leaf size={32} />
  </div>
  <h3 className="text-xl font-bold text-gray-900 mb-4">
    <EditableText 
      isEditing={isEditing} 
      value={content.program4Title} 
      onChange={(val) => updateContent('program4Title', val)} 
    />
  </h3>
  <p className="text-gray-600">
    <EditableText 
      isEditing={isEditing} 
      value={content.program4Desc} 
      onChange={(val) => updateContent('program4Desc', val)} 
      type="textarea"
    />
  </p>
</div>
{/* Program 5 */}
<div className="bg-white rounded-2xl p-8 shadow-sm ...">
  <div className="w-16 h-16 bg-emerald-100 ...">
    <Leaf size={32} />
  </div>
  <h3 className="text-xl font-bold text-gray-900 mb-4">
    <EditableText 
      isEditing={isEditing} 
      value={content.program5Title} 
      onChange={(val) => updateContent('program5Title', val)} 
    />
  </h3>
  <p className="text-gray-600">
    <EditableText 
      isEditing={isEditing} 
      value={content.program5Desc} 
      onChange={(val) => updateContent('program5Desc', val)} 
      type="textarea"
    />
  </p>
</div>
      </section>

      {/* Footer / Contact */}
      <footer id="kontak" className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-600 text-white p-2 rounded-lg">
                <Leaf size={24} />
              </div>
              <div>
                <h1 className="font-bold text-xl text-white">Yayasan Rise</h1>
              </div>
            </div>
            <p className="text-gray-400">
              Membangun masa depan yang berkelanjutan melalui aksi nyata sosial dan ekologis di seluruh Indonesia.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Hubungi Kami</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-500 mt-1" size={20} />
                <span className="flex-1">
                  <EditableText 
                    isEditing={isEditing} 
                    value={content.contactAddress} 
                    onChange={(val) => updateContent('contactAddress', val)} 
                    type="textarea"
                  />
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-500" size={20} />
                <span>
                  <EditableText 
                    isEditing={isEditing} 
                    value={content.contactEmail} 
                    onChange={(val) => updateContent('contactEmail', val)} 
                  />
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-500" size={20} />
                <span>
                  <EditableText 
                    isEditing={isEditing} 
                    value={content.contactPhone} 
                    onChange={(val) => updateContent('contactPhone', val)} 
                  />
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#beranda" className="hover:text-emerald-400 transition">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-emerald-400 transition">Tentang Kami</a></li>
              <li><a href="#program" className="hover:text-emerald-400 transition">Program Unggulan</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Laporan Tahunan</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Yayasan Rise Sosial Ekologis Indonesia. Hak cipta dilindungi.</p>
        </div>
      </footer>

      {/* Floating Edit Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full shadow-2xl font-bold text-white transition-all duration-300 transform hover:scale-105 ${isEditing ? 'bg-orange-500 hover:bg-orange-600' : 'bg-emerald-600 hover:bg-emerald-700'}`}
        >
          {isEditing ? (
            <>
              <Save size={20} />
              <span>Selesai Edit</span>
            </>
          ) : (
            <>
              <Edit3 size={20} />
              <span>Edit Konten</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}