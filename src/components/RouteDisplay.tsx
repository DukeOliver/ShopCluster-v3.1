import React from 'react';
import { RouteResult } from '../types';
import { MapPin, Footprints } from 'lucide-react';

interface RouteDisplayProps {
  routeResult: RouteResult | null;
  error: string | null;
}

const RouteDisplay: React.FC<RouteDisplayProps> = ({ routeResult, error }) => {
  if (error) {
    return (
      // Apply dark mode styles to error message
      <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 px-4 py-3 rounded relative transition-colors duration-300" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  if (!routeResult) {
    return (
      // Apply dark mode styles to initial message
      <div className="bg-blue-100 dark:bg-blue-900 border border-blue-400 dark:border-blue-600 text-blue-700 dark:text-blue-200 px-4 py-3 rounded relative text-center transition-colors duration-300">
        Enter store names above and click "Calculate" to see the optimal route.
      </div>
    );
  }

  const totalDistanceKm = (routeResult.totalDistance / 1000).toFixed(2);
  const estimatedTimeMinutes = Math.round(routeResult.totalDistance / 80); // Avg walking speed 80m/min

  return (
    // Apply dark mode styles to the main container
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg transition-colors duration-300">
      {/* Apply dark mode styles to heading */}
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Optimal Route</h2>

      {/* Apply dark mode styles to info box */}
      <div className="mb-6 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-md transition-colors duration-300">
         {/* Apply dark mode styles to text and icons */}
         <div className="flex items-center text-green-800 dark:text-green-200 mb-2">
             <Footprints size={20} className="mr-2" />
             <span className="font-semibold">Total Walking Distance:</span>
             <span className="ml-2">{totalDistanceKm} km</span>
         </div>
         <div className="flex items-center text-green-700 dark:text-green-300 text-sm">
             <span className="font-semibold">Estimated Time:</span>
             <span className="ml-2">~{estimatedTimeMinutes} minutes</span>
         </div>
      </div>

      {/* Apply dark mode styles to subheading */}
      <h3 className="text-lg font-medium mb-3 text-gray-600 dark:text-gray-300">Stop Order:</h3>
      <ol className="list-decimal list-inside space-y-3">
        {routeResult.orderedAddresses.map((address, index) => (
          <li key={index} className="flex items-start">
            {/* Apply dark mode styles to icon and text */}
            <MapPin size={18} className="text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
            <span className="text-gray-800 dark:text-gray-300">{address}</span>
          </li>
        ))}
      </ol>

      {/* Apply dark mode styles to map placeholder */}
      <div className="mt-6 bg-gray-200 dark:bg-gray-700 h-64 rounded-md flex items-center justify-center text-gray-500 dark:text-gray-400 transition-colors duration-300">
        Map Placeholder
        {/* In a real app, integrate Google Maps Embed API or Leaflet here */}
        {/* Example: <iframe src={`google-maps-embed-url-with-waypoints`} width="100%" height="100%"></iframe> */}
      </div>
    </div>
  );
};

export default RouteDisplay;
