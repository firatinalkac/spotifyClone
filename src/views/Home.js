import Section from "components/Section"

function Home() {

   const items = [
      {
         id: 1,
         title: 'Sezen Aksu',
         songTitle: 'Geri Dön',
         image: 'https://i.scdn.co/image/ab67616100005174b624695e7b95277a7e29adb6',
         type: 'album',
         src: 'https://server1.indiryuklemp3.org/mp3_files/f77305f3751f3a7ebd0b8c01f320a3d7.mp3'
      },
      {
         id: 2,
         title: 'Sezen Aksu',
         songTitle: 'Bende Yoluma Giderim',
         image: 'https://i.scdn.co/image/ab67616d00001e02a0b017662916b6f40e6e1e62',
         type: 'album',
         src: 'https://server1.indiryuklemp3.org/mp3_files/652a3b8f51bfe88925957cf5f58ec580.mp3'
      },
      {
         id: 3,
         title: 'Müslüm Gürses',
         songTitle: 'Nilüfer',
         image: 'https://i.scdn.co/image/ab67616d0000b273aa0eff59b6616372e724731b',
         type: 'album',
         src: 'https://server1.indiryuklemp3.org/mp3_files/db55ad11d0fac672e9b5b9533af40394.mp3'
      },
      {
         id: 4,
         title: 'Sezen Aksu',
         songTitle: 'Tükeneceğiz',
         image: 'https://i.scdn.co/image/ab67616d00001e02689481c6d6defaacae3f6d87',
         type: 'album',
         src: 'https://server1.indiryuklemp3.org/mp3_files/143fcc959357c2d39f95702e9801693e.mp3'
      },
      {
         id: 5,
         title: 'Müslüm Gürses',
         songTitle: 'Gel Bahtımın Kar Beyazı',
         image: 'https://i.scdn.co/image/ab67616d0000b273c3bd47e74d3cdae67485668a',
         type: 'album',
         src: 'https://server1.indiryuklemp3.org/mp3_files/e707aedd17e59d68eb6aa858be11f4db.mp3'
      },
      {
         id: 6,
         title: 'Sıla',
         songTitle: 'Yan Benimle',
         image: 'https://i.scdn.co/image/ab67616d0000b273df17189cc6a3ac99959fb905',
         type: 'album',
         src: 'https://server1.indiryuklemp3.org/mp3_files/yan-benimle-akustik-EzhM0Wqx9i-0.mp3'
      },

   ]


   return(
      <div>
         <Section title="Recently played" more="/" items={items} />
      </div>
   )
}

export default Home;