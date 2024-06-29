import React from 'react';
import { Link } from 'react-router-dom';

const requests = [
    {
        id: 1,
        imgSrc: "https://images.samsung.com/is/image/samsung/p6pim/in/rt34c4523b1-hl/gallery/in-double-door-rt34c4523b1-hl-front-black-536927529?$730_584_PNG$",
        title: "301 L Twin Cooling Plus™ Double Door Refrigerator RT34C4523B1",
        description: "Our Convertible 5in1 Refrigerators understand your life. Powered by the revolutionary Twin Cooling Plus™ Technology, this refrigerator has 5 conversion modes to take care of all your refrigeration needs."
    },
    {
        id: 2,
        imgSrc: "https://images.samsung.com/is/image/samsung/p6pim/in/rt34c4523b1-hl/gallery/in-double-door-rt34c4523b1-hl-front-black-536927529?$730_584_PNG$",
        title: "301 L Twin Cooling Plus™ Double Door Refrigerator RT34C4523B1",
        description: "Our Convertible 5in1 Refrigerators understand your life. Powered by the revolutionary Twin Cooling Plus™ Technology, this refrigerator has 5 conversion modes to take care of all your refrigeration needs."
    },
];

function Request() {
    return (
        <div className="container mx-auto p-4">
            <h3 className='font-semibold text-2xl mb-4'>Request</h3>
            {requests.map(request => (
                <div key={request.id} className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <Link to={`/description/${request.id}`}>
                            <img src={request.imgSrc} alt="home product photo" className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-6 cursor-pointer" />
                        </Link>
                        <div className="flex-grow">
                            <h1 className="font-semibold text-lg mb-2">{request.title}</h1>
                            <p className="text-gray-700 mb-4">{request.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Request;
