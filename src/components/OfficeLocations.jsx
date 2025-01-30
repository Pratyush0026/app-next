// import React, { useState } from 'react';
// import { MapPin, Phone, Mail } from 'lucide-react';

// const OfficeLocations = () => {
//   const [activeTab, setActiveTab] = useState('INDIA');

//   const locations = {
//     INDIA: {
//       city: 'Noida, India',
//       address: 'Tapasya Corp Heights, sector 126, Noida',
//       phone: '+91 9474783783',
//       email: 'support@appversal.com',
//       mapUrl: 'YOUR_INDIA_MAP_IMAGE_URL',
//     },
//     USA: {
//       city: 'New York, USA',
//       address: '123 Business Avenue, NY',
//       phone: '+1 234 567 8900',
//       email: 'us.support@appversal.com',
//       mapUrl: 'YOUR_USA_MAP_IMAGE_URL',
//     },
//     'LOREM IPSUM': {
//       city: 'Lorem City',
//       address: '456 Lorem Street',
//       phone: '+1 987 654 3210',
//       email: 'lorem@appversal.com',
//       mapUrl: 'YOUR_LOREM_MAP_IMAGE_URL',
//     },
//   };

//   return (
//     <section className="bg-[#0C2114] w-full py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-[1400px] mx-auto space-y-12">
//         {/* Heading */}
//         <div>
//           <h2 className="text-4xl md:text-5xl lg:text-[40px] text-white font-serif italic">
//             Our Office Locations
//           </h2>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-8 border-b border-gray-700">
//           {Object.keys(locations).map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-4 text-sm tracking-wider ${
//                 activeTab === tab
//                   ? 'text-white border-b-2 border-white'
//                   : 'text-gray-400 hover:text-white'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Map and Location Details */}
//         <div className="grid grid-cols-1 gap-8">
//           {/* Map Container */}
//           <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-gray-200">
//             {/* Location Details Overlay */}
//             <div className="absolute left-8 top-8 bg-white p-6 rounded-lg space-y-4 max-w-xs">
//               <h3 className="font-medium text-lg">
//                 {locations[activeTab].city}
//               </h3>
//               <div className="space-y-3 text-sm">
//                 <div className="flex items-start gap-2">
//                   <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
//                   <p>{locations[activeTab].address}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Phone className="w-4 h-4 flex-shrink-0" />
//                   <p>{locations[activeTab].phone}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Mail className="w-4 h-4 flex-shrink-0" />
//                   <a 
//                     href={`mailto:${locations[activeTab].email}`}
//                     className="text-blue-600 hover:underline"
//                   >
//                     {locations[activeTab].email}
//                   </a>
//                 </div>
//               </div>
//               <a
//                 href="https://maps.google.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block text-sm text-blue-600 hover:underline mt-2"
//               >
//                 See on Google Maps ↗
//               </a>
//             </div>
//             {/* Map Image */}
//             <img
//               src="/api/placeholder/1200/400"
//               alt="Location Map"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OfficeLocations;


import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const OfficeLocations = () => {
  const [activeTab, setActiveTab] = useState('INDIA');

  const locations = {
    INDIA: {
      city: 'Noida, India',
      address: 'Tapasya Corp Heights, sector 126, Noida',
      phone: '+91 9474783783',
      email: 'support@appversal.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.1447164577586!2d77.33571667617715!3d28.54461437566466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce563f889c83b%3A0x2bf3689e4507bb34!2sTapasya%20Corp%20Heights!5e0!3m2!1sen!2sin!4v1696345700000',
    },
    USA: {
      city: 'New York, USA',
      address: '123 Business Avenue, NY',
      phone: '+1 234 567 8900',
      email: 'us.support@appversal.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8552825379637!2d-74.00601518460043!3d40.712775379330025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a317b4c161b%3A0xb4180f12a2628c4b!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1696345700000',
    },
    'LOREM IPSUM': {
      city: 'Lorem City',
      address: '456 Lorem Street',
      phone: '+1 987 654 3210',
      email: 'lorem@appversal.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.18193660596!2d-74.25986663156983!3d40.69767006304388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5a7db7b45%3A0x644e9a8a6c2a14ef!2sLorem%20City!5e0!3m2!1sen!2sus!4v1696345700000',
    },
  };

  return (
    <section className="bg-[#0C2114] w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-[40px] text-white font-serif italic">
            Our Office Locations
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-700">
          {Object.keys(locations).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm tracking-wider ${
                activeTab === tab
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Map and Location Details */}
        <div className="grid grid-cols-1 gap-8">
          {/* Map Container */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            {/* Location Details Overlay */}
            <div className="absolute left-8 top-8 bg-white p-6 rounded-lg space-y-4 max-w-xs">
              <h3 className="font-medium text-lg">
                {locations[activeTab].city}
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p>{locations[activeTab].address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <p>{locations[activeTab].phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a 
                    href={`mailto:${locations[activeTab].email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {locations[activeTab].email}
                  </a>
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  locations[activeTab].address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-blue-600 hover:underline mt-2"
              >
                See on Google Maps ↗
              </a>
            </div>

            {/* Google Maps Embed */}
            <iframe
              src={locations[activeTab].mapUrl}
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-none"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
