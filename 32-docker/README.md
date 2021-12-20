
1. Jelaskan apa yang dimaksud dengan **container** pada docker !
   
   **Jawab:**
    
    Yang dimaksud dengan container pada docker adalah sebuah Wadah atau tempat untuk mengemas dan menjalankan aplikasi, yang biasanyaa berisi kode, runtime, system tools, dan pengaturan. Container hanya bisa mengakses resource yang telah ditentukan dalam Docker image.

2. Jelaskan apa perbedaan antara konsep **container** dengan **virtual machine** !
    
    **Jawab:**
    
    Perbedaan antara konsep container dengan virtual machine adalah container melakukan virtualisasi pada host OS-nya, Container hanya membungkus aplikasinya saja. sehingga memori yang dipakai lebih sedikit dan waktu booting jauh lebih cepat dibandingkan dengan virtual machine.Sedangkan pada virtual machine memakan banyak resource dan waktu utk booting karena melakukan virtualisasi pada host hardware-nya. Kita harus menginstall guest OS agar dapat menjalankan suatu aplikasi,dan yang terjadi adalah memorinya lebih besar dan waktu booting yang cukup lama karena harus menjalankan guest os nya terlebih dahulu.

3. Apa yang dimaksud dengan **docker file** ?
    
    **Jawab:**
    
    Dockerfile adalah file teks yang berisi semua perintah yang bisa dijalankan user pada baris perintah untuk membuat image,yang berisikana instruksi diperlukan oleh docker untuk membangun image.


4. Apa yang dimaksud dengan **docker registery** ?
    
    **Jawab:**
    
    Docker Registry adalah sebuah repository atau sebuah tempat penyimpanan image yang sudah kita buat dan akan bisa digunakan oleh orang banyak.

5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !
    
    **Jawab:**
    
    Dalam menjalankan lebih dari satu container secara bersamaan kita dapat menggunakan docker compose cara menggunakan docker compose seperti berikut:
    Menggunakan Compose pada dasarnya adalah proses tiga langkah:

    a.Tentukan environment aplikasi dengan sebuah Dockerfile sehingga dapat direproduksi di mana saja.

    b.Tentukan layanan yang membentuk aplikasi di dalam docker-compose.yml sehingga dapat dijalankan bersama di lingkungan yang terisolasi.

    c.Jalankan docker compose up dan Docker compose command dimulai dan menjalankan seluruh aplikasi. Kita juga dapat menjalankannya docker-compose up menggunakan biner docker-compose.
