// 1. Apa itu synchronous?
/*Synchronous merupakan proses  kode yang dijalankan dengan berurutan berdasarkan kode yang tertulis.
*/ 
// 2. Apa itu asynchronous?
/*Asyncrhonous yaitu proses pengeksekusian 
kode yang tidak sesuai seperti urutan yang ada atau disebut 
menjalankan perintah selanjutnya tanpa menunggu perintah sebelumnya selesai.
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
/*Bisa,karena browser memerlukan waktu untuk melakukan request,
sehingga agar tidak terjadi kegagalan, asyncronus akan tetap berjalan pada background thread
tanpa menghalangi tampilan desain
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
/*first log:  1
first log:  2
first log:  3
first log:  4
first log:  5
second log:  6
second log:  6
second log:  6
second log:  6
second log:  6
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
/*deklearasi dalam loop yang merujuk pada variabel lingkup luar dapat menyebabkan semantik yang membingungkan seharusnya menggunakan let*/
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i<=5; i++){
  console.log("first log: ", i); // 01 - Pertama
  setTimeout(() => console.log("second log: ", i>5? i=1 : i+=1), 100); // 02 - Kedua
}