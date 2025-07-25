// This data simulates what your backend API will eventually return.
// It adheres strictly to the schema we defined.

export const mockShipmentData = {
  id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  tracking_id: "CT-2025-123456",
  status: "Tracking",
  sender_name: "John Sender",
  sender_address: "123 Main St, Yaoundé, Cameroon",
  recipient_name: "Jane Recipient",
  recipient_address: "456 Market Rd, Douala, Cameroon",
  item_description: "1x Box of new clothes and 1x laptop in a protective case.",
  item_category: "Clothing & Electronics",
  quantity: 2,
  weight_kg: 8.5,
  dimensions_cm: "50x40x30",
  image_url: "https://via.placeholder.com/400x300.png?text=Shipment+Photo",
  origin: "Yaoundé",
  destination: "Douala",
  travel_date: "2025-07-28",
  service_type: "Express",
};

export const mockTrackingUpdates = [
  {
    id: 1,
    shipment_id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    status_update: "Shipment information received by CamTrack.",
    location: "Yaoundé",
    latitude: 3.848,
    longitude: 11.5021,
    created_at: "2025-07-28T09:00:00Z",
  },
  {
    id: 2,
    shipment_id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    status_update: "Package picked up from sender.",
    location: "Yaoundé",
    latitude: 3.858,
    longitude: 11.5121,
    created_at: "2025-07-28T11:30:00Z",
  },
  {
    id: 3,
    shipment_id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    status_update: "Departed from Yaoundé sorting facility.",
    location: "Yaoundé",
    latitude: 3.868,
    longitude: 11.5221,
    created_at: "2025-07-28T15:00:00Z",
  },
  {
    id: 4,
    shipment_id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    status_update: "In transit to destination city.",
    location: "Between Yaoundé & Douala",
    latitude: 3.95,
    longitude: 10.75,
    created_at: "2025-07-28T18:00:00Z",
  },
];
