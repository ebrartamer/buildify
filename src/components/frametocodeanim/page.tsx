"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Pencil, ArrowRight, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function FrameToCode() {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  // IDE-like syntax highlighting için renkler
  const colors = {
    keyword: "text-purple-400", // function, return gibi keywordler
    component: "text-blue-400", // Component isimleri
    prop: "text-sky-300", // Props
    string: "text-green-400", // String değerler
    punctuation: "text-gray-400", // Parantezler, noktalama
    value: "text-orange-400", // Değerler
  };

  // Kod satırları ve syntax highlighting
  const codeLines = [
    [
      { text: "function ", color: colors.keyword },
      { text: "Button", color: colors.component },
      { text: "() {", color: colors.punctuation },
    ],
    [
      { text: "  ", color: "text-white" },
      { text: "return", color: colors.keyword },
      { text: " (", color: colors.punctuation },
    ],
    [
      { text: "    <", color: colors.punctuation },
      { text: "button", color: colors.component },
      { text: " ", color: "text-white" },
      { text: "className", color: colors.prop },
      { text: "=", color: colors.punctuation },
      { text: '"px-4 py-2 bg-blue-500 rounded"', color: colors.string },
      { text: ">", color: colors.punctuation },
    ],
    [{ text: "      Click me", color: colors.value }],
    [
      { text: "    </", color: colors.punctuation },
      { text: "button", color: colors.component },
      { text: ">", color: colors.punctuation },
    ],
    [{ text: "  )", color: colors.punctuation }],
    [{ text: "}", color: colors.punctuation }],
  ];

  const handleTransform = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 3000);
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Kodunuzu İki Farklı Yöntemle Oluşturun
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            İster frame çizerek ister görsel yükleyerek, hayalinizdeki web sitesini kolayca oluşturun
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frame to Code Section */}
          <div className="group relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
              <div className="p-2 bg-blue-500/10 rounded-xl">
                <Pencil className="w-6 h-6 text-blue-400" />
              </div>
              Frame'den Kod Oluştur
            </h2>
            
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-700 rounded-2xl p-8 min-h-[300px] flex items-center justify-center bg-gray-900/50 group-hover:border-blue-500/30 transition-colors duration-300">
                {/* Mevcut Frame animasyonu */}
                <motion.div
                  animate={isAnimating ? {
                    scale: [1, 0.9, 0.9, 1],
                    x: [0, 20, -20, 0],
                    opacity: [1, 0.5, 0.5, 1],
                  } : {}}
                  transition={{ duration: 2, times: [0, 0.2, 0.8, 1] }}
                  className="w-32 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-medium shadow-lg shadow-blue-500/20"
                >
                  Button
                </motion.div>
              </div>
              
              <Link
                href="/buildfy"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium 
                  hover:from-blue-600 hover:to-blue-700 transition-all transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Frame'i Koda Dönüştür
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Image to Code Section */}
          <div className="group relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-700/50">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
              <div className="p-2 bg-purple-500/10 rounded-xl">
                <Upload className="w-6 h-6 text-purple-400" />
              </div>
              Görselden Kod Oluştur
            </h2>
            
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-700 rounded-2xl p-8 min-h-[300px] flex flex-col items-center justify-center bg-gray-900/50 group-hover:border-purple-500/30 transition-colors duration-300">
                <Upload className="w-16 h-16 text-gray-600 mb-4 group-hover:text-purple-400 transition-colors duration-300" />
                <p className="text-gray-400 text-center mb-4">
                  Görselinizi sürükleyip bırakın veya seçin
                </p>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  id="imageUpload"
                />
                <label
                  htmlFor="imageUpload"
                  className="px-6 py-3 bg-purple-500/10 text-purple-400 rounded-xl cursor-pointer hover:bg-purple-500/20 transition-colors duration-300"
                >
                  Görsel Seç
                </label>
              </div>
              
              <Link
                href="/buildfy"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-medium 
                  hover:from-purple-600 hover:to-purple-700 transition-all transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30"
              >
                Görseli Koda Dönüştür
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
