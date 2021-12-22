import Section from "components/Section"

function Home() {

   const items = [
      {
         id: 1,
         title: 'UZI',
         subTitle: 'Artist',
         image: 'https://i.scdn.co/image/ab6761610000517469d9b5209bab2c2d936f2833',
         type: 'artist'
      },
      {
         id: 2,
         title: 'Ezhel',
         subTitle: 'Artist',
         image: 'https://i.scdn.co/image/ab67616100005174dfbabf5f1338d03c97799cd3',
         type: 'artist',
      },
      {
         id: 3,
         title: 'Duman',
         subTitle: 'Artist',
         image: 'https://i.scdn.co/image/ab67616100005174ed30111b433e140bfdd0a038',
         type: 'artist'
      },
      {
         id: 4,
         title: 'Lvbel C5',
         subTitle: 'Artist',
         image: 'https://i.scdn.co/image/ab67616100005174dabf58ed135a7eef37d770e5',
         type: 'artist',
      },
      {
         id: 5,
         title: 'Sezen Aksu',
         subTitle: 'Artist',
         image: 'https://i.scdn.co/image/ab67616100005174b624695e7b95277a7e29adb6',
         type: 'album',
      },
      {
         id: 6,
         title: 'cakal',
         subTitle: 'Artist',
         image: 'https://i.scdn.co/image/ab67616100005174514d157152105d2469c9f132',
         type: 'podcast',
      },
   ]


   return(
      <div>
         <Section title="Recently played" more="/" items={items} />
         <Section title="Recently played" more="/" items={items} />
         <Section title="Recently played" more="/" items={items} />
         <Section title="Recently played" more="/" items={items} />
         <Section title="Recently played" more="/" items={items} />
         <Section title="Recently played" more="/" items={items} />
      </div>
   )
}

export default Home;