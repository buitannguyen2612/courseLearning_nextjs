export const OwnProductList = {
  per_page: 8,
  total: 20,
  data: [
    {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar: 'https://images.unsplash.com/photo-1695997592672-61c82527afa9',
      des: "Despite multiple complications and her near-death experience Gwen had her best sleep ever on her new bed of nails.We need to rent a room for our party.His confidence would have bee admirable if it wasn't for his stupidity.",
    },
    {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar:
        'https://plus.unsplash.com/premium_photo-1668447592192-0c1ebadfc1c0',
      des: "Despite multiple complications and her near-death experience Gwen had her best sleep ever on her new bed of nails.We need to rent a room for our party.His confidence would have bee admirable if it wasn't for his stupidity.",
    },
  ],
}

export const handlePageOnw = () => {
  return OwnProductList
}
