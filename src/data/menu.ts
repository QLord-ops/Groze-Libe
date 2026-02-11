export interface MenuItem {
  id: string
  name: string
  description: string
  image: string
}

export interface MenuCategory {
  id: string
  title: string
  subtitle?: string
  items: MenuItem[]
}

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=85&fit=crop`

export const menuCategories: MenuCategory[] = [
  {
    id: 'rindsburger',
    title: 'XXL Rindsburger',
    subtitle:
      'Alle mit 226 g reinem Rinderhacksteak vom Grill im Sesambrötchen mit Salat, Tomate, frischer Gurke, Ketchup, unserer Spezialsauce und Pommes inkl. Ketchup & Mayo',
    items: [
      {
        id: 'große-liebe',
        name: 'Hamburger „Große Liebe“',
        description: 'Klassisch, mit Pommes',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&fit=crop',
      },
      {
        id: 'wrapburger',
        name: 'Wrapburger',
        description: 'Der gerollte Hamburger mit Pommes',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=85&fit=crop',
      },
      {
        id: 'heiße-liebe',
        name: 'Chiliburger Heiße Liebe',
        description: 'Mit scharfem Chili-Aufstrich und Pommes',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&fit=crop',
      },
      {
        id: 'cheeseburger',
        name: 'Cheeseburger',
        description: 'Hamburger mit Käse und Pommes',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&fit=crop',
      },
      {
        id: 'südsee',
        name: 'Cheeseburger Hawaii Südsee Liebe',
        description: 'Mit einer Ananasscheibe und Pommes',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&fit=crop',
      },
      {
        id: 'omelett',
        name: 'Omelett Cheeseburger',
        description: 'Mit einem Spiegelei und Pommes',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&fit=crop',
      },
      {
        id: 'bacon',
        name: 'Bacon Cheeseburger',
        description: 'Mit knusprigem Bacon und Pommes',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&fit=crop',
      },
      {
        id: 'avocado',
        name: 'Avocado Cheeseburger',
        description: 'Mit frischer Avocado und Pommes',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&fit=crop',
      },
      {
        id: 'banana',
        name: 'Banana Cheeseburger',
        description: 'Mit frischer Banane und Pommes',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&fit=crop',
      },
      {
        id: 'grenzenlose-liebe',
        name: 'Hamburger Grenzenlose Liebe',
        description: 'Mit 452 g Rindfleisch und Pommes',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&fit=crop',
      },
    ],
  },
  {
    id: 'chickenburger',
    title: 'XXL Chickenburger',
    subtitle: 'Mit Pommes',
    items: [
      {
        id: 'chickenburger',
        name: 'Chickenburger',
        description:
          'Mit 135 g Hähnchenfleisch in knusprigem Teigmantel, Salat, Tomate, Ketchup, Currysauce und Pommes',
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=85&fit=crop',
      },
      {
        id: 'chickenwrap',
        name: 'Chickenwrap',
        description:
          'Mit 135 g Hähnchenfleisch in knusprigem Teigmantel, Salat, Tomate, Ketchup, Currysauce und Pommes',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=85&fit=crop',
      },
    ],
  },
  {
    id: 'veggieburger',
    title: 'XXL Veggieburger',
    subtitle: 'Mit Pommes',
    items: [
      {
        id: 'veggieburger',
        name: 'Veggieburger',
        description:
          'Mit Halloumikäse, Gemüsebratling, Salat, Tomate, Ketchup, Sauce und Pommes',
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f4?w=800&q=85&fit=crop',
      },
      {
        id: 'falafelburger',
        name: 'Falafelburger',
        description: 'Mit Falafel, Salat, Tomate, Ketchup, Sauce und Pommes',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=85&fit=crop',
      },
    ],
  },
  {
    id: 'flammkuchen',
    title: 'Flammkuchen',
    subtitle: 'Leichte Alternative zum Burger',
    items: [
      {
        id: 'flammkuchen-klassik',
        name: 'Flammkuchen klassisch',
        description: 'Mit Crème fraîche, Speck und Zwiebeln',
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=85&fit=crop',
      },
      {
        id: 'flammkuchen-veggie',
        name: 'Flammkuchen vegetarisch',
        description: 'Mit Crème fraîche, Zucchini und Käse',
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=85&fit=crop',
      },
    ],
  },
  {
    id: 'bowls',
    title: 'Bowls',
    subtitle:
      'Wahlweise mit unserem Hausdressing oder Essig & Öl (Balsamico)',
    items: [
      {
        id: 'chickenbowl',
        name: 'Chickenbowl',
        description: 'Gemischter Salat mit 135 g Hähnchenfleisch in knusprigem Teigmantel',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=85&fit=crop',
      },
      {
        id: 'avocadobowl',
        name: 'Avocadobowl',
        description: 'Gemischter Salat mit Avocadoscheiben, Sonnenblumenkernen und Käse',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=85&fit=crop',
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks & Cocktails',
    subtitle: 'Bar',
    items: [
      {
        id: 'cocktails',
        name: 'Cocktails',
        description: 'Klassiker und Hauskreationen',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=85&fit=crop',
      },
      {
        id: 'bier',
        name: 'Bier & Longdrinks',
        description: 'Gezapft und aus der Flasche',
        image: 'https://images.unsplash.com/photo-1608278884652-2c524b2d2c2b?w=800&q=85&fit=crop',
      },
      {
        id: 'soft',
        name: 'Softdrinks & Kaffee',
        description: 'Erfrischungen und warmer Kaffee',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85&fit=crop',
      },
    ],
  },
]
