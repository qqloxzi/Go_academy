---
layout: ../../layouts/MarkdownPostLayout.astro
title: "4-1 kyu Ligi"
description: "afagagasg"
theme: "theme-1"
maddeler:
  - "Eğitmen: Tuğkan Eren (4D)"
  - "Eğitim süresi: 3 Ay"
  - ""
---

<h3 style="text-align: center;">4-1 kyu</h3>

<ul class="detay-kutucuklari">
  <li>
    <strong>Kimler Katılabilir:</strong> 10 kyu ve üstü goseverler
  </li>
  <li>
    <strong>Eğitmen:</strong> Tuğkan Eren (4D)
  </li>
  <li>
    <strong>Ders Süreci ve Kapsamı:</strong> Yakında duyurulacak
  </li>
  <li id="egitim-ucreti-satiri">
    <strong>Eğitim Ücreti:</strong> Yakında duyurulacak
  </li>
</ul>

<div class="button-container">
  <button id="ucret-goster-button">
    Üniversite öğrencisiyim
  </button>
</div>


<style>
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 15px;
  }

  #ucret-goster-button {
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    background-color: var(--color-accent, #8A2BE2); 
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;
  }

  #ucret-goster-button:hover {
    transform: scale(1.05);
    background-color: var(--color-accent-dark, #7a20c9);
  }

  /* Bu stil artık kullanılmayacak ama kalsa da zararı yok */
  #ucret-goster-button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
    transform: none;
  }
</style>


<script>
  // Gerekli elementleri bul
  const ucretButton = document.getElementById('ucret-goster-button');
  const ucretSatiri = document.getElementById('egitim-ucreti-satiri');

  // YAZI SEÇENEKLERİ:
  // Buraya istediğiniz kadar seçenek ekleyebilirsiniz.
  // Sırayla bunlar gösterilecektir.
  const ucretSecenekleri = [
    '<strong>Eğitim Ücreti:</strong> 5000TL',
    '<strong>Eğitim Ücreti:</strong> 3000TL (Üniversite öğrencileri için)',
  ];

  // Hangi seçenekte olduğumuzu takip eden değişken (0 = ilk seçenek)
  let guncelIndex = 0;

  // Butona tıklama olayı
  ucretButton.addEventListener('click', () => {
    // 1. Index'i bir artır
    guncelIndex = guncelIndex + 1;

    // 2. Eğer index, listenin sonunu aştıysa, başa (0'a) dön
    if (guncelIndex >= ucretSecenekleri.length) {
      guncelIndex = 0;
    }

    // 3. Satırın içeriğini dizideki yeni index'e göre güncelle
    ucretSatiri.innerHTML = ucretSecenekleri[guncelIndex];

    // 4. Butonu devre dışı BIRAKMIYORUZ.
  });
</script>