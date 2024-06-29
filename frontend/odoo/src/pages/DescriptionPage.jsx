import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoSend } from "react-icons/io5";
const REACT_APP_SERVER = import.meta.env.VITE_REACT_APP_SERVER;
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const requests = [
    {
        id: 1,
        imgSrc: "https://images.samsung.com/is/image/samsung/p6pim/in/rt34c4523b1-hl/gallery/in-double-door-rt34c4523b1-hl-front-black-536927529?$730_584_PNG$",
        title: "301 L Twin Cooling Plus™ Double Door Refrigerator RT34C4523B1",
        description: "Our Convertible 5in1 Refrigerators understand your life. Powered by the revolutionary Twin Cooling Plus™ Technology, this refrigerator has 5 conversion modes to take care of all your refrigeration needs.",
        features: [
            "Twin Cooling Plus™ Technology",
            "Convertible 5in1 Modes",
            "Digital Inverter Compressor",
            "Stabilizer Free Operation"
        ],
        specifications: {
            capacity: "301 L",
            energyRating: "3 Star",
            color: "Black",
            dimensions: "600 x 1715 x 672 mm"
        },
        price: "$599"
    },
];

function DescriptionPage() {
    const { id } = useParams();
    const request = requests.find(req => req.id === parseInt(id));
    const [isNegotiating, setIsNegotiating] = useState(false);
    const [negotiationAmount, setNegotiationAmount] = useState("");

    if (!request) {
        return <p>Request not found.</p>;
    }

    const handleNegotiateClick = () => {
       
        setIsNegotiating(true);
    };

    const handleNegotiationSubmit = () => {
        console.log(`Negotiation amount: ${negotiationAmount}`);
        // Handle the negotiation submission logic here
        setIsNegotiating(false); // Optionally hide the input field after submission
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios
        .get(`${REACT_APP_SERVER}/api/pdf/?vendor=${'kirtan kathiriya'}`)
        .then((data) => {
            if(data["data"])
                {
                    alert("check your email."); 
                }
         
        })
        .catch((error) => console.log(error));
            
          
      };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row">
                <img src={request.imgSrc} alt="product photo" className="w-full md:w-1/2 h-auto object-cover mb-4 md:mb-0 md:mr-6 rounded-lg" />
                <div className="flex-grow">
                    <h1 className="font-semibold text-2xl mb-2">{request.title}</h1>
                    <p className="text-gray-700 mb-4">{request.description}</p>
                    <h2 className="font-semibold text-xl mb-2">Features</h2>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        {request.features.map((feature, index) => (
                            <li key={index} className="text-gray-700">{feature}</li>
                        ))}
                    </ul>
                    <h2 className="font-semibold text-xl mb-2">Specifications</h2>
                    <ul className="list-inside mb-4">
                        {Object.entries(request.specifications).map(([key, value]) => (
                            <li key={key} className="text-gray-700"><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</li>
                        ))}
                    </ul>
                    <h2 className="font-semibold text-xl mb-2">Price</h2>
                    <p className="text-gray-700 text-xl font-bold mb-4">{request.price}</p>

                    <div className="flex space-x-4">
                        <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Accept</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Reject</button>
                        <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                            onClick={handleNegotiateClick}
                        >
                            Negotiate
                        </button>
                    </div>

                    {isNegotiating && (
                        <div className="mt-4 flex justify-center items-center">
                            <input
                                type="text"
                                value={negotiationAmount}
                                onChange={(e) => setNegotiationAmount(e.target.value)}
                                placeholder="Enter your amount"
                                className="border rounded px-3 py-2"
                            />
                            <button
                                onClick={handleNegotiationSubmit}
                                className="ml-2 bg-black text-white px-3 py-2 rounded"
                            >
                                <IoSend className='w-6 h-6' />
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default DescriptionPage;
