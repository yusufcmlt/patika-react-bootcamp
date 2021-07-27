
<video src="https://user-images.githubusercontent.com/58252790/124765496-af7b6c80-df3e-11eb-937a-69af6815b1eb.mp4" width="320" height="200" controls preload autoplay></video>

### Karsilanan Gereksinimler:

- [x] Kullanıcı parayı gönderen hesabı ve paranın gönderileceği hesabı seçmeden gönder butonu aktif olmamalı.
- [x] Kullanıcı gönderilecek para miktarına bakiyesinden daha çok yazamamalı, yazarsa gönder butonu aktif olmamalı ve ekranda hata olmalı.
- [x] Göndere basıldığı zaman miktar 500'den az ise kullanıcıya "Başarılı" geri bildirimi verilmeli.
- [x] Göndere basıldığı zaman miktar 500 veya daha çok ise kullanıcıya "Telefonunuza gelen şifreyi girin" sorusunu soran, 4 karakter numeric input yazabileceği bir UI çıkmalı.
- [x] Şifre girme esnasında 1234 girilirse ve enter'a basılırsa "Başarılı" geri bildirimi verilmeli.
- [x] Şifre 1234 değilse "Şifre yanlış" geri bildirimi verilmeli, 3 kere yanlış şifre girilirse 4.sünde "Hesabınız bloke oldu" geri bildirimi verilmeli
- [x] Herhangi bir işlem esnasında 2 dakikalik geri sayım süresi dolarsa kullanıcıya "Oturumunuz sonlanmıştır" geri bildirimi verilmeli ve sayfa yenilenmeli.

##### Not

- Geri bildirim pencereleri icin sweetalert kullanildi.

##### Bug

- Proje yarn start ile ilk defa calistirildiginda nadiren de olsa stiller yuklenmeyebiliyor (2 kere yasandi). Nedenini arastirmadim ancak islem sonlandirilip tekrar calistirildiginda sorun ortadan kalkiyor.
- Sifre yanlis bildiriminde entera basildiginda tekrar sifreyi sormadan ayni bildirimi veriyor. Sifre girme hakkiniz 1 dusuyor.

### Projeyi calistirma:

Eğer bu repoyu kullanarak kendi bilgisayarinizda development yapmak isterseniz sirasiyla,

1. Repoyu clonelayin
2. yarn veya npm install komutunu calistirin (Sadece birisi)
3. yarn start veya npm start komutunu calistirin (sadece birisi)

index.js'e ve index.html'e kod yazarak baslayabilirsiniz. yarn start yaptiysaniz degisiklikleriniz otomatik olarak ekranda gorulmeli. Sorun yasarsaniz asistanlari bulun.

---

## Odev Hakkinda

#### EFT Uygulaması

Bir banka uygulaması geliştirdiğımizi hayal edelim, bizim sorumlu olduğumuz kısma gelene kadar kullanıcı çoktan giriş yapmış ilgili menüden para transferi seçeneğini seçmiş olsun.
Bizim geliştirmemiz gereken kısımda kullanıcı parayı gönderen hesabı kendi hesapları arasından seçiyor ve paranın gönderileceği hesabın IBAN'ını yazıyor olsun.
Ekranda olması gerekenler;

1. Dropdown (parayı gönderecek hesap - bakiye)
2. Textbox (para gönderilecek IBAN)
3. Numeric box (para miktarı)
4. Gönder butonu
5. Zaman sayacı (saniye cinsinden, 2 dakikadan geri sayar.)

Gereksinimler;

1. Kullanıcı parayı gönderen hesabı ve paranın gönderileceği hesabı seçmeden gönder butonu aktif olmamalı.
2. Kullanıcı gönderilecek para miktarına bakiyesinden daha çok yazamamalı, yazarsa gönder butonu aktif olmamalı ve ekranda hata olmalı.
3. Göndere basıldığı zaman miktar 500'den az ise kullanıcıya "Başarılı" geri bildirimi verilmeli.
4. Göndere basıldığı zaman miktar 500 veya daha çok ise kullanıcıya "Telefonunuza gelen şifreyi girin" sorusunu soran, 4 karakter numeric input yazabileceği bir UI çıkmalı.
5. Şifre girme esnasında 1234 girilirse ve enter'a basılırsa "Başarılı" geri bildirimi verilmeli.
6. Şifre 1234 değilse "Şifre yanlış" geri bildirimi verilmeli, 3 kere yanlış şifre girilirse 4.sünde "Hesabınız bloke oldu" geri bildirimi verilmeli
7. Herhangi bir işlem esnasında 2 dakikalik geri sayım süresi dolarsa kullanıcıya "Oturumunuz sonlanmıştır" geri bildirimi verilmeli ve sayfa yenilenmeli.

Notlar: geri bildirim vermek yada cep şifresi almak için alert/prompt metodları kullanılabileceği gibi tamamen özel bir UI'da yapılabilir. Burası size kalmış.
Kullanıcının bilgileri, hesapları ve bakiye bilgilerini user_information.js dosyası içerisinden kullanın.
