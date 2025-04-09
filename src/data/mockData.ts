import { StoreLocations, DistanceMatrix, Location } from '../types';

// Mock store locations in Manhattan
export const mockStoreLocations: StoreLocations = {
  "Zara": [
    { id: "zara1", name: "Zara", address: "666 5th Ave, New York, NY 10103", lat: 40.7598, lng: -73.9788 },
    { id: "zara2", name: "Zara", address: "101 5th Ave, New York, NY 10003", lat: 40.7379, lng: -73.9921 },
    { id: "zara3", name: "Zara", address: "500 5th Ave, New York, NY 10110", lat: 40.7548, lng: -73.9821 },
  ],
  "Trader Joe's": [
    { id: "tj1", name: "Trader Joe's", address: "675 6th Ave, New York, NY 10010", lat: 40.7417, lng: -73.9948 },
    { id: "tj2", name: "Trader Joe's", address: "207 E 32nd St, New York, NY 10016", lat: 40.7448, lng: -73.9799 },
    { id: "tj3", name: "Trader Joe's", address: "400 Grand St, New York, NY 10002", lat: 40.7161, lng: -73.9840 },
  ],
  "Muji": [
    { id: "muji1", name: "Muji", address: "475 5th Ave, New York, NY 10017", lat: 40.7531, lng: -73.9817 },
    { id: "muji2", name: "Muji", address: "16 W 19th St, New York, NY 10011", lat: 40.7394, lng: -73.9929 },
    { id: "muji3", name: "Muji", address: "455 Broadway, New York, NY 10013", lat: 40.7205, lng: -74.0001 },
  ],
  "Apple Store": [
     { id: "apple1", name: "Apple Store", address: "767 5th Ave, New York, NY 10153", lat: 40.7639, lng: -73.9729 }, // 5th Ave (Existing)
     { id: "apple2", name: "Apple Store", address: "401 W 14th St, New York, NY 10014", lat: 40.7407, lng: -74.0050 }, // West 14th (Existing)
     { id: "apple3", name: "Apple Store", address: "103 Prince St, New York, NY 10012", lat: 40.7243, lng: -73.9992 }, // SoHo (Existing)
  ],
  "Old Navy": [
    { id: "on1", name: "Old Navy", address: "610 6th Ave, New York, NY 10011", lat: 40.7405, lng: -73.9955 }, // Near TJ1/Muji2
    { id: "on2", name: "Old Navy", address: "150 W 34th St, New York, NY 10001", lat: 40.7503, lng: -73.9880 }, // Herald Square
    { id: "on3", name: "Old Navy", address: "503 Broadway, New York, NY 10012", lat: 40.7220, lng: -73.9988 }, // Near Muji3/Apple3
  ],
  "Uniqlo": [
    { id: "uniqlo1", name: "Uniqlo", address: "666 5th Ave, New York, NY 10103", lat: 40.7598, lng: -73.9788 }, // Same building as Zara1
    { id: "uniqlo2", name: "Uniqlo", address: "31 W 34th St, New York, NY 10001", lat: 40.7496, lng: -73.9860 }, // Near Herald Square
    { id: "uniqlo3", name: "Uniqlo", address: "546 Broadway, New York, NY 10012", lat: 40.7230, lng: -73.9975 }, // Near ON3/Apple3
  ]
};

// Mock distance matrix (simplified, not geographically accurate, distances in meters)
// In a real app, this would come from Google Distance Matrix API
// --- Updated with new stores ---
export const mockDistanceMatrix: DistanceMatrix = {
  // Existing locations (Zara, TJ, Muji, Apple) - Original distances retained where applicable
  "zara1": { "zara2": 2400, "zara3": 600, "tj1": 2200, "tj2": 1800, "tj3": 5000, "muji1": 800, "muji2": 2300, "muji3": 4000, "apple1": 650, "apple2": 3500, "apple3": 4200, "on1": 2300, "on2": 1100, "on3": 4100, "uniqlo1": 0, "uniqlo2": 1200, "uniqlo3": 4000 },
  "zara2": { "zara1": 2400, "zara3": 2000, "tj1": 450, "tj2": 1500, "tj3": 2800, "muji1": 1900, "muji2": 150, "muji3": 1800, "apple1": 3000, "apple2": 1200, "apple3": 1600, "on1": 300, "on2": 1400, "on3": 1700, "uniqlo1": 2400, "uniqlo2": 1300, "uniqlo3": 1600 },
  "zara3": { "zara1": 600, "zara2": 2000, "tj1": 1700, "tj2": 1300, "tj3": 4500, "muji1": 250, "muji2": 1800, "muji3": 3500, "apple1": 1200, "apple2": 3000, "apple3": 3700, "on1": 1800, "on2": 600, "on3": 3600, "uniqlo1": 600, "uniqlo2": 700, "uniqlo3": 3500 },
  "tj1": { "zara1": 2200, "zara2": 450, "zara3": 1700, "tj2": 1100, "tj3": 3000, "muji1": 1500, "muji2": 350, "muji3": 2000, "apple1": 2800, "apple2": 800, "apple3": 1800, "on1": 150, "on2": 1100, "on3": 1900, "uniqlo1": 2200, "uniqlo2": 1000, "uniqlo3": 1800 },
  "tj2": { "zara1": 1800, "zara2": 1500, "zara3": 1300, "tj1": 1100, "tj3": 3500, "muji1": 1000, "muji2": 1400, "muji3": 3000, "apple1": 2400, "apple2": 2200, "apple3": 2800, "on1": 1200, "on2": 500, "on3": 2900, "uniqlo1": 1800, "uniqlo2": 400, "uniqlo3": 2800 },
  "tj3": { "zara1": 5000, "zara2": 2800, "zara3": 4500, "tj1": 3000, "tj2": 3500, "muji1": 4300, "muji2": 2900, "muji3": 1000, "apple1": 5500, "apple2": 2500, "apple3": 800, "on1": 3000, "on2": 3800, "on3": 700, "uniqlo1": 5000, "uniqlo2": 3700, "uniqlo3": 600 },
  "muji1": { "zara1": 800, "zara2": 1900, "zara3": 250, "tj1": 1500, "tj2": 1000, "tj3": 4300, "muji2": 1700, "muji3": 3300, "apple1": 1400, "apple2": 2800, "apple3": 3500, "on1": 1600, "on2": 450, "on3": 3400, "uniqlo1": 800, "uniqlo2": 550, "uniqlo3": 3300 },
  "muji2": { "zara1": 2300, "zara2": 150, "zara3": 1800, "tj1": 350, "tj2": 1400, "tj3": 2900, "muji1": 1700, "muji3": 1900, "apple1": 3000, "apple2": 1000, "apple3": 1700, "on1": 200, "on2": 1200, "on3": 1800, "uniqlo1": 2300, "uniqlo2": 1100, "uniqlo3": 1700 },
  "muji3": { "zara1": 4000, "zara2": 1800, "zara3": 3500, "tj1": 2000, "tj2": 3000, "tj3": 1000, "muji1": 3300, "muji2": 1900, "apple1": 4500, "apple2": 1500, "apple3": 200, "on1": 2000, "on2": 2800, "on3": 150, "uniqlo1": 4000, "uniqlo2": 2700, "uniqlo3": 100 },
  "apple1": { "zara1": 650, "zara2": 3000, "zara3": 1200, "tj1": 2800, "tj2": 2400, "tj3": 5500, "muji1": 1400, "muji2": 3000, "muji3": 4500, "apple2": 4000, "apple3": 4800, "on1": 2900, "on2": 1700, "on3": 4600, "uniqlo1": 650, "uniqlo2": 1800, "uniqlo3": 4500 },
  "apple2": { "zara1": 3500, "zara2": 1200, "zara3": 3000, "tj1": 800, "tj2": 2200, "tj3": 2500, "muji1": 2800, "muji2": 1000, "muji3": 1500, "apple1": 4000, "apple3": 1300, "on1": 650, "on2": 1800, "on3": 1400, "uniqlo1": 3500, "uniqlo2": 1700, "uniqlo3": 1300 },
  "apple3": { "zara1": 4200, "zara2": 1600, "zara3": 3700, "tj1": 1800, "tj2": 2800, "tj3": 800, "muji1": 3500, "muji2": 1700, "muji3": 200, "apple1": 4800, "apple2": 1300, "on1": 1800, "on2": 2600, "on3": 100, "uniqlo1": 4200, "uniqlo2": 2500, "uniqlo3": 150 },
  // New locations (Old Navy, Uniqlo) - Add distances to all other locations
  "on1": { "zara1": 2300, "zara2": 300, "zara3": 1800, "tj1": 150, "tj2": 1200, "tj3": 3000, "muji1": 1600, "muji2": 200, "muji3": 2000, "apple1": 2900, "apple2": 650, "apple3": 1800, "on2": 1200, "on3": 1900, "uniqlo1": 2300, "uniqlo2": 1100, "uniqlo3": 1800 },
  "on2": { "zara1": 1100, "zara2": 1400, "zara3": 600, "tj1": 1100, "tj2": 500, "tj3": 3800, "muji1": 450, "muji2": 1200, "muji3": 2800, "apple1": 1700, "apple2": 1800, "apple3": 2600, "on1": 1200, "on3": 2700, "uniqlo1": 1100, "uniqlo2": 150, "uniqlo3": 2600 },
  "on3": { "zara1": 4100, "zara2": 1700, "zara3": 3600, "tj1": 1900, "tj2": 2900, "tj3": 700, "muji1": 3400, "muji2": 1800, "muji3": 150, "apple1": 4600, "apple2": 1400, "apple3": 100, "on1": 1900, "on2": 2700, "uniqlo1": 4100, "uniqlo2": 2600, "uniqlo3": 50 },
  "uniqlo1": { "zara1": 0, "zara2": 2400, "zara3": 600, "tj1": 2200, "tj2": 1800, "tj3": 5000, "muji1": 800, "muji2": 2300, "muji3": 4000, "apple1": 650, "apple2": 3500, "apple3": 4200, "on1": 2300, "on2": 1100, "on3": 4100, "uniqlo2": 1200, "uniqlo3": 4000 },
  "uniqlo2": { "zara1": 1200, "zara2": 1300, "zara3": 700, "tj1": 1000, "tj2": 400, "tj3": 3700, "muji1": 550, "muji2": 1100, "muji3": 2700, "apple1": 1800, "apple2": 1700, "apple3": 2500, "on1": 1100, "on2": 150, "on3": 2600, "uniqlo1": 1200, "uniqlo3": 2500 },
  "uniqlo3": { "zara1": 4000, "zara2": 1600, "zara3": 3500, "tj1": 1800, "tj2": 2800, "tj3": 600, "muji1": 3300, "muji2": 1700, "muji3": 100, "apple1": 4500, "apple2": 1300, "apple3": 150, "on1": 1800, "on2": 2600, "on3": 50, "uniqlo1": 4000, "uniqlo2": 2500 }
};

// Helper to get distance between two location IDs from the mock matrix
export const getMockDistance = (locId1: string, locId2: string): number => {
  if (locId1 === locId2) return 0;
  // Check both directions in the matrix
  const distance = mockDistanceMatrix[locId1]?.[locId2] ?? mockDistanceMatrix[locId2]?.[locId1];
  if (distance === undefined) {
    console.warn(`Distance not found between ${locId1} and ${locId2}. Returning Infinity.`);
    return Infinity; // Return Infinity if distance is missing
  }
  return distance;
};

// Mock API fetch function
export const fetchMockLocations = async (storeName: string): Promise<Location[]> => {
  console.log(`Fetching mock locations for: ${storeName}`);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 100));
  const locations = mockStoreLocations[storeName];
  if (!locations) {
    console.warn(`No mock locations found for ${storeName}`);
    return [];
    // throw new Error(`No locations found for ${storeName}`);
  }
  console.log(`Found ${locations.length} mock locations for ${storeName}`);
  return locations;
};
