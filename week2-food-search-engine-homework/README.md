# Yemek Arama Motoru

<video src="https://user-images.githubusercontent.com/58252790/125860162-a1fefb0c-ad7e-4b85-8358-1135ba3e1a28.mp4" width="1280" height="720" controls preload autoplay></video>

#### Demo:

- Projenin calisir haline [buradan ulasabilirsiniz.](https://food-search-week2-yusufcmlt.netlify.app/)
  - Not: demo uzerinde bazen gorseller yuklenmiyor/yavas yukleniyor. Favori ikonu bazen hic yuklenmeyebiliyor. Netlify tarafinda bir sorun :(

#### Genel:

- Yemek listesi icin [TheMealDB](https://www.themealdb.com/api.php) kullanildi.
- Fuse.js icin yemek listesi json dosyasina cevirildi.
  - Oncesinde yemek listesi de api uzerinden aliniyordu. Ancak suanki haliyle proje icerisindeki jsondan kullanilmakta.
- Kullanici listesi verilen api uzerinden aliniyor.

#### Karsilanan gereksinimler:

- [x] Ana ekranda sadece bir arama kutusu, favori tusu ve login olan kullanicinin adı bulunuyor.
- [x] Kullanici veri girdikce bir cikan sonuclar oneri olarak gosteriliyor.
- [x] Onerilenlerden bir liste elemanina tiklanmasi veya arama sonucunda cikan sonuclar kartlarda gosteriliyor.
- [x] Karta tiklanirsa karta odaklaniyor. Kartta favori tusu bulunuyor.
- [x] Favoriler browser localStorage'da tutuluyor.
- [x] Arama islemlerinde fuse.js kullaniliyor.
- [x] Arama icin performans iyilestirmesi (debounce) kullanildi.

---

### Projeyi çalıştırmak için:

Eğer bu repoyu kullanarak kendi bilgisayarinizda development yapmak isterseniz sirasiyla,

1. Repoyu clonelayin
2. `yarn install` veya `npm install` komutunu calistirin (Sadece birisi)
3. `yarn start` veya npm start komutunu calistirin (sadece birisi)

index.js'e ve index.html'e kod yazarak baslayabilirsiniz. yarn start yaptiysaniz degisiklikleriniz otomatik olarak ekranda gorulmeli. Sorun yasarsaniz asistanlari bulun.

---

### Ödev Hakkında:

Bir yemek arama moturu yapmakla sorumlusunuz, ana ekranda sadece bir arama kutusu ve login olan kullanicinin adı olacak.
Kullanici veri girdikce bir arama yapacaksiniz ve cikan sonuclari listeleyeceksiniz.
Cikan sonuclar bir kartta listelenir. Kartın uzerine tıkladığınizda o karta odaklanacak. (Border olabilir ,ekranın ortasına gelebilir.). Kartta favorilere ekle butonu vardır. Kart açıkkan F tuşu ile ya da butona basarak favoriye/ekle çıkar işlemi gerçekleştirilebilir. Browser'i kapatip actiktan sonra da favorilerim kalmaya devam etmeli.

- Login olan kullanıcı bilgileri endpoint: https://jsonplaceholder.typicode.com/users/1
- Tüm yemek listesi endpoint: https://jsonplaceholder.typicode.com/todos (title, yemek adı olsun)
- Uygulama açıldığında kullanıcı bilgileri ve yemek listesi yüklenecek. Bu iki yükleme olurken ekranda loading çıkacak.
- Login olan kullanıci bilgisi arama kutusunun ustunde Merhaba, {name} seklinde yazacak.

* Arama yaparken fuse.js kullanmayı deneyin
* Ard arda arama yaparken olabildiğince performanslı yazmayı deneyin. (Neler yapılabilir?)
