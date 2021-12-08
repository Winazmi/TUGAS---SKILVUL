Pertanyaan :
1.Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?
2.Mohon jelaskan arsitektur dari Node.js?
3.Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
4.Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

Jawab   :
1.Node.js adalah runtime environment untuk JavaScript yang sifatnya open-source dan cross-platform, dengan menggunkan   Node.js kita dapat menjalankan kode JavaScript di mana pun, tidak hanya di dalam lingkungan browser.Kita dapat menjalankan Node.js menggunakan V8 JavaScript engine (yang juga merupakan inti dari Google Chrome) di luar browser.
Sedangkan javaScript sendiri adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif yang dapat meningkatkan fungsionalitas pada halaman web.

2.Ada beberapa arsitektur dari Node.js yaitu :
-Single Thread
    Dalam Konsep single thread, berarti ketika menjalanlan program hanya menggnkan satu tumpukan panggilan saja.    Thread sendiri adalah eksekusi menjalankan beberapa tugas atau program secara bersamaan. Setiap unit yang mampu mengeksekusi kode disebut thread. Prosesnya Javascript menggunakan call stack untuk memanej single thread. Ketika terdapat perintah baru maka akan push dan akan di keluarkan ketika perintahnya sudah pop (selesai).
-Event Loop
    Event loop akan menjadi fasilitas ketika kondisi sedang mengeksekusi, event loop akan memeriksa terus menerus, ketika antrian kosong di call stack dan akan menambah antrian baru dari event queue sampai semua perintah selesai.
-Event queue
    Sedangkan event queue sendiri adalah  sebagai wadah ketika terdapat perintah baru yang akan dieksekusi.
-Server side scripting
    Server side scripting digunakan untuk menjalankan javascript di back end untuk menggunkannya kita perlu menggunakan NodeJS kita untuk menjalankan javascript di server side menggunakan terminal command line dengan menggunakan perintah “node”. 

3.Built-in Module, External Module, dan Custom Module pada Node.js adalah :
  -Built-in Module
    adalah module bawaan dari javascript sendiri yang sudah ada di node JS seperti console,process, OS, Events, Errors, buffer, fs, Timers Semua ini sudah ada pada Node.js.
  -External Module
    adalah sebuah module yang harus kita download terlebih dahulu ketika ingin menggunakanya.
  -Custom Module
    sedangkan costum module adalah module kita buat sendiri menggunakan NPM.
    
4.Contoh dari Built-in Module, External Module, dan Custom Module
Built-in Module : console,process, OS, Events, Errors, buffer, fs, Timers
External Module : Express, Sequlize
Custom Module : 
    const path = require('path')
    const helper = require('./helper')

