import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini API'yi başlat
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

// POST metodunu export edelim
export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Sen uzman bir web geliştiricisisin. Verilen görevi HTML, CSS ve JavaScript kullanarak gerçekleştirmen gerekiyor.

    GÖREV: ${text}

    Lütfen aşağıdaki kurallara kesinlikle uy:

    1. HTML Kuralları:
    - Sadece HTML5 semantic etiketleri kullan
    - Her elemana uygun ID ve class isimleri ver
    - Tüm etiketleri düzgün kapat
    - Gerekli yerlerde data-* özelliklerini kullan
    - HTML dosyası tam ve eksiksiz olmalı

    2. CSS Kuralları:
    - CSS değişkenleri (custom properties) kullan
    - BEM metodolojisini takip et
    - Flexbox veya Grid sistemini kullan
    - Medya sorguları ekle (600px, 900px, 1200px)
    - Tüm hover/focus durumlarını belirt
    - Animasyonları transition ile yap
    - Prefix'leri ekle (-webkit, -moz vb.)

    3. JavaScript Kuralları:
    - Sadece ES6+ modern syntax kullan
    - querySelector ve addEventListener kullan
    - Async işlemler için Promise veya async/await kullan
    - Try-catch blokları ile hata yönetimi yap
    - Console.log'ları kaldır
    - Tüm değişkenler const veya let olmalı
    - Arrow function kullan
    - Destructuring kullan
    - Event delegation uygula

    KOD FORMATI:

    \`\`\`html
    <!DOCTYPE html>
    <html lang="tr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Web Uygulaması</title>
    </head>
    <body>
        <!-- Kodun buraya gelecek -->
    </body>
    </html>
    \`\`\`

    \`\`\`css
    /* CSS Variables */
    :root {
        /* Renk paleti */
        /* Boşluklar */
        /* Yazı tipleri */
    }

    /* Base styles */
    /* Components */
    /* Utilities */
    /* Media Queries */
    \`\`\`

    \`\`\`javascript
    // Constants
    // Event Listeners
    // Functions
    // Error Handling
    // Async Operations
    \`\`\`

    ÖNEMLİ KONTROLLER:
    - HTML geçerli ve semantic olmalı
    - CSS çakışması olmamalı
    - JavaScript hatasız çalışmalı
    - Responsive tasarım olmalı
    - Performans optimize edilmeli
    - Cross-browser uyumlu olmalı

    Şimdi bu kurallara uygun kodları üret.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedText = response.text();

    // Yanıtı kontrol et ve düzenle
    if (!generatedText.includes("```html") || 
        !generatedText.includes("```css") || 
        !generatedText.includes("```javascript")) {
      throw new Error("Eksik kod bloğu");
    }

    return NextResponse.json({
      generated_text: generatedText
    });

  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: "Kod üretilirken bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}

// OPTIONS metodunu da ekleyelim CORS için
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}