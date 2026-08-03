        // 1. Kita cari tombolnya di HTML pakai ID 'tombol-tema'
        const tombol = document.getElementById('tombol-tema');

        // 2. [FITUR INGAT TEMA] - Begitu halaman baru kebuka, langsung cek apakah sebelumnya user milih mode terang
        if (window.name === 'mode-terang') {
            document.body.classList.add('mode-terang');
            if (tombol) {
                tombol.innerHTML = '🌙 Mode Gelap';
            }
        }

        // 3. Kita kasih perintah: "Kalau tombol ini di-klik, jalanin fungsi di bawah ini"
        if (tombol) {
            tombol.addEventListener('click', function() {
                
                // Tambah atau hapus class 'mode-terang' di tag <body>
                document.body.classList.toggle('mode-terang');

                // 4. Ubah teks tombol dan SIMPAN pilihan ke memori tab browser (window.name)
                if (document.body.classList.contains('mode-terang')) {
                    // Kalau mode terang aktif, tombol berubah jadi opsi gelap & catat ke memori
                    tombol.innerHTML = '🌙 Mode Gelap';
                    window.name = 'mode-terang'; 
                } else {
                    // Kalau mode gelap aktif, tombol berubah jadi opsi terang & catat ke memori
                    tombol.innerHTML = '☀️ Mode Terang';
                    window.name = 'mode-gelap';
                }
            });
        }

                /* LOGIKA PENCARIAN */

        // 1. Ambil elemen-elemen yang dibutuhkan dari HTML
        const kotakCari = document.getElementById('input-cari'); // Kotak tempat ngetik
        const semuaKartuKategori = document.querySelectorAll('.item-kategori'); // Ambil semua ke-6 kartu
        const tulisanKosong = document.getElementById('pesan-kosong'); // Ambil teks peringatan kosong

        // Cek dulu apakah kita lagi di halaman kategori yang ada kotak pencariannya
        // Kalau kotakCari ada (gak error), baru jalanin kode pencariannya
        if (kotakCari) {
            
            // 2. Beri perintah: Setiap kali user ngetik ('input'), jalanin fungsi ini
            kotakCari.addEventListener('input', function() {
                
                // Ambil teks yang diketik user, lalu ubah jadi huruf kecil semua biar gampang dicocokin
                const kataKunci = kotakCari.value.toLowerCase();
                
                // Variabel buat ngitung berapa kartu yang cocok/ditampilin
                let jumlahYangCocok = 0;

                // 3. Cek satu-satu setiap kartu yang ada
                semuaKartuKategori.forEach(function(kartu) {
                    
                    // Ambil isi teks judul (h3) dan label kategori dari masing-masing kartu
                    const isiJudul = kartu.querySelector('h3').innerText.toLowerCase();
                    const isiLabel = kartu.querySelector('.kategori-label').innerText.toLowerCase();

                    // 4. Logika utamanya: Apakah judul atau label mengandung kata kunci yang diketik?
                    if (isiJudul.includes(kataKunci) || isiLabel.includes(kataKunci)) {
                        // Kalau cocok, tampilkan kartunya
                        kartu.style.display = 'block'; 
                        jumlahYangCocok++; // Tambah hitungan kartu yang cocok
                    } else {
                        // Kalau nggak cocok, sembunyikan kartunya
                        kartu.style.display = 'none'; 
                    }
                });

                // 5. Setelah ngecek semua kartu, kita lihat hasilnya
                if (jumlahYangCocok === 0) {
                    // Kalau 0 (nggak ada yang cocok), munculin teks "Pesan Kosong"
                    tulisanKosong.style.display = 'block';
                } else {
                    // Kalau ada yang cocok, umpetin lagi teks "Pesan Kosong" nya
                    tulisanKosong.style.display = 'none';
                }
            });
        }