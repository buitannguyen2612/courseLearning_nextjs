
export const data = {
  per_page: 8,
  total: 20,
  data: [
    {
      categoryID: 1,
      id: 1,
      avatar:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      courseName:'Reactjs',
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      imgCourse: 'https://d50cmv7hkyx4e.cloudfront.net/2021/07/1_h5UGPzaL1E4dIy_JWDrsAw.png',
      des: "Despite multiple complications and her near-death experience Gwen had her best sleep ever on her new bed of nails.We need to rent a room for our party.His confidence would have bee admirable if it wasn't for his stupidity.",
    },
    {
      categoryID: 1,
      id: 2,
      avatar:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww",
      courseName:'Basic javascript',
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      imgCourse:'https://img-c.udemycdn.com/course/750x422/495484_385c_3.jpg',
      des: "Despite multiple complications and her near-death experience Gwen had her best sleep ever on her new bed of nails.We need to rent a room for our party.His confidence would have bee admirable if it wasn't for his stupidity.",
    },
    {
      categoryID: 1,
      id: 3,
      avatar:"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
      courseName:'Nextjs',
      email: 'emma.wong@reqres.in',
      first_name: 'Emma',
      last_name: 'Wong',
      imgCourse:'https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg',
      des: "Despite multiple complications and her near-death experience Gwen had her best sleep ever on her new bed of nails.We need to rent a room for our party.His confidence would have bee admirable if it wasn't for his stupidity.",
    },
    {
      categoryID: 1,
      id: 4,
      avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      courseName:'Angularjs',
      email: 'eve.holt@reqres.in',
      first_name: 'Eve',
      last_name: 'Holt',
      imgCourse:'https://5.imimg.com/data5/WA/CH/GT/GLADMIN-13634783/selection-203.png',
      des: "Despite multiple complications and her near-death experience Gwen had her best sleep ever on her new bed of nails.We need to rent a room for our party.His confidence would have bee admirable if it wasn't for his stupidity.",
    },
    {
      categoryID: 1,
      id: 5,
      avatar:"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      courseName:'Vuejs',
      email: 'eve.holt@reqres.in',
      first_name: 'Eve',
      last_name: 'Holt',
      imgCourse:'https://mevn-public.s3-ap-southeast-1.amazonaws.com/marketenterprise.vn/wp-images/2021/04/06170614/vuejs.png',
      des: "Despite multiple complications and her near-death experience Gwen had her best sleep ever on her new bed of nails.We need to rent a room for our party.His confidence would have bee admirable if it wasn't for his stupidity.",
    },
  ],
}

export const GetData = (id) => {
  if (id === 0) {
    return data.data
  } else return data.data.filter((vl) => vl.categoryID === id)
}
