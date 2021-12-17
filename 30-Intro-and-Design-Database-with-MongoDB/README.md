1. Buatlah skema untuk kebutuhan data profile pengguna aplikasi *Skiljek* dan relasi apakah yang tepat untuk data tersebut?
Data yang dibutuhkan adalah:
- **Full Name**
- **Email**
- **Phone Number**

**Jawab:**
    Relasi yang tepat adalah One-to-one.

**Skema Data**:
```json
{
  "_id":"ObjectId(61bca13798857b6c0bee9934)",
  "fullName":"Suka Relawan",
  "email":"sukare0@gmail.com",
  "phoneNumber":"08229999999"
}
```

2. Buatlah skema untuk kebutuhan data alamat pengguna *SkilShop* dimana alamat yang dapat didaftarkan maksimal 2 alamat. Jelaskan juga relasi apakah yang tepat untuk data tersebut?
Data yang dibutuhkan adalah:
- **Full Name**
- **Phone Number**
- **Address (Max 2)**

**Jawab:**
    Relasi yang tepat adalah One To Many

**Skema Data**:
```json
{
    "_id": "ObjectId(61bcb13798857b6c0bee9935)",
    "fullName": "Relawan Putra",
    "phoneNumber": "08229999999",
    "address": ["Aceh", "Yogyakarta"]
}
```

3. **Relasi:** 
    Relasi yang tepat adalah one to many

**Skema Data**:
```json
{
    "_id": "ObjectId(61bda13798857b6c0bee9940)",
    "productName": "Kaos Polos",
    "brandName": "SkilShirt",
    "variants": ["ObjectId('61bda13798857b6c0bee001')", "ObjectId('61bda13798857b6c0bee002')"]
},

{
    "_id": "ObjectId('61bda13798857b6c0bee001')",
    "nameVariant": "kaos Polos Hitam",
    "color": "Hitam",
    "qty": 12,
    "price": 99000
},

{
    "_id": "ObjectId('61bda13798857b6c0bee002')",
    "nameVariant": "kaos Polos Navy",
    "color": "Navy",
    "qty": 10,
    "price": 99000
}
```

4. **Relasi:**
    Relasi yang tepat adalah one to one

**Skema Data**:
```json
{
    "_id": "ObjectId(61bdb13798857b6c0bee9935)",
    "cinemaName": "Cinema31",
    "films": ["Venom 2", "Spiderman No Way Home"],
    "location": "Pondok Indah Mall"
},

{
    "_id": "ObjectId(61bdc13798857b6c0bee9936)",
    "cinemaName": "CGF",
    "films": ["Venom 2", "Spiderman No Way Home"],
    "location": "Mall Kelapa Gading"
},
```