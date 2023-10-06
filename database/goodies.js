const goodies = [
  { id: 1, goodyName: 'Sasaki and Miyano', type: 'Merch and Manga', price: 20 },
  { id: 2, goodyName: 'Therapy Game', type: 'Merch and Manga', price: 15 },
  { id: 3, goodyName: 'Given', type: 'Manga', price: 10 },
  { id: 4, goodyName: 'Yamada Nonono', type: 'Manga', price: 4 },
  { id: 5, goodyName: 'Little Mushroom', type: 'Novel', price: 10 },
];

export default function getGoodies() {
  return goodies;
}

export function getGoody(id) {
  return goodies.find((goody) => goody.id === id);
}
