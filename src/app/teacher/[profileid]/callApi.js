const data = [
  {
    id: 1,
    authorName: "George Bluth",
    avatar:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
    location: "Korean",
    email: 'eve.holt@reqres.in',
    DOB: "26/12/1999",
    description: "I always want my courses to bring you the future",
  },
  {
    id: 2,
    authorName: "Janet Weaver",
    avatar:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww",
    location: "Taiwan",
    email: 'george.bluth@reqres.in',
    DOB: "12/1/1985",
    description:
      "I want everyone to absorb knowledge as quickly as possible and that is my life motto.",
  },
  {
    id: 3,
    authorName: "Emma Wong",
    avatar:"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    location: "Japan",
    email: 'janet.weaver@reqres.in',
    DOB: "26/1/2001",
    description: "I create courses that help build solid foundations.",
  },
  {
    id: 4,
    authorName: "Eve Holt",
    avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    location: "Thai Lan",
    email: 'emma.wong@reqres.in',
    DOB: "26/12/1990",
    description: "I always want my courses to bring you the future",
  },
  {
    id: 5,
    authorName: "Eve Bluth",
    avatar:"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    location: "China",
    email: 'eve.holt@reqres.in',
    DOB: "26/12/2003",
    description: "I always want my courses to bring you the future",
  },
];

export const getProfleByID = (IdParams) =>{
    return data.find(vl => vl.id == IdParams)
}

