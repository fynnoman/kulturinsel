// Unsplash-Platzhalter. Vor Veröffentlichung durch echte Aufnahmen des Vereins ersetzen.
// Format: https://images.unsplash.com/photo-<id>?... — IDs werden ohne Query-Parameter gespeichert.

const base = "https://images.unsplash.com";
const q = "auto=format&fit=crop&w=2000&q=80";

export const IMG = {
  // Hero / Landscape / Pilger
  pilgerPath: `${base}/photo-1527838832700-5059252407fa?${q}`, // path through fields
  moselleLandscape: `${base}/photo-1506905925346-21bda4d32df4?${q}`, // rolling hills
  threeCountries: `${base}/photo-1464822759023-fed622ff2c3b?${q}`, // misty landscape
  stoneChapel: `${base}/photo-1519452635265-7b1fbfd1e4e0?${q}`, // stone building

  // Kapelle / Interior
  chapelInterior: `${base}/photo-1519741497674-611481863552?${q}`, // small chapel
  candles: `${base}/photo-1519681393784-d120267933ba?${q}`, // candle light
  stainedGlass: `${base}/photo-1472214103451-9374bd1c798e?${q}`, // stained glass / cathedral light
  altarStone: `${base}/photo-1519125323398-675f0ddb6308?${q}`, // stone altar

  // Pilger / Walking / Shell
  pilgrim: `${base}/photo-1533873984035-25970ab07461?${q}`, // walker with backpack
  pilgrimPath2: `${base}/photo-1504280390367-361c6d9f38f4?${q}`, // trail in woods
  shellSymbol: `${base}/photo-1555072956-7758afb20e8f?${q}`, // sea shell / jakobsmuschel
  wayMarker: `${base}/photo-1517154421773-0529f29ea451?${q}`, // marker stone

  // Dorf / Community / Theater
  villageHouse: `${base}/photo-1572120360610-d971b9d7767c?${q}`, // village houses
  dorfplatz: `${base}/photo-1519120944692-1a8d8cfc107f?${q}`, // village square
  theater: `${base}/photo-1503095396549-807759245b35?${q}`, // open-air theater stage
  community: `${base}/photo-1511632765486-a01980e01a18?${q}`, // people together

  // Regional / Moselle / Vineyards
  vineyard: `${base}/photo-1506377295352-e3154d43ea9e?${q}`, // vineyard
  borderLandscape: `${base}/photo-1500382017468-9049fed747ef?${q}`, // open landscape
  moselRiver: `${base}/photo-1508807526345-15e9b5f4eaff?${q}`, // river bend

  // Archive / Historic
  archivePaper: `${base}/photo-1519682337058-a94d519337bc?${q}`, // old paper
  stoneWall: `${base}/photo-1506973035872-a4ec16b8e8d9?${q}`, // stone texture
} as const;

export type ImageKey = keyof typeof IMG;
