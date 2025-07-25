-- This is the PostgreSQL database schema for the Shipment Tracking System.

-- Drop tables if they exist to ensure a clean slat
DROP TABLE IF EXISTS tracking_updates;
DROP TABLE IF EXISTS shipments;

--
-- Table structure for table `shipments`
-- This table holds the master record for each shipment.
--
CREATE TABLE shipments (
    -- Core Identifiers
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Unique internal ID for the database
    tracking_id TEXT UNIQUE NOT NULL,               -- Friendly, public-facing ID (e.g., CT-2025-XXXXXX)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),

    -- Sender Information
    sender_name TEXT NOT NULL,
    sender_email TEXT NOT NULL,
    sender_phone TEXT NOT NULL,
    sender_address TEXT NOT NULL,

    -- Recipient Information
    recipient_name TEXT NOT NULL,
    recipient_phone TEXT NOT NULL,
    recipient_address TEXT NOT NULL,
    recipient_email TEXT, -- Optional

    -- Item (Goods) Details
    item_description TEXT NOT NULL,           -- Detailed description (e.g., "Box of electronics, 1 laptop")
    item_category TEXT,                       -- e.g., "Electronics", "Clothing", "Documents", "Fragile"
    quantity INT NOT NULL DEFAULT 1,          -- Number of items in the shipment
    weight_kg REAL,                           -- Weight in kilograms (e.g., 5.5)
    dimensions_cm TEXT,                       -- Dimensions L x W x H (e.g., "40x30x20")
    declared_value REAL,                      -- Declared value of the goods
    image_url TEXT,                           -- URL to a photo of the item(s), to be stored in the bucket
    special_instructions TEXT,                -- Any special handling instructions

    -- Logistics & Status
    origin TEXT NOT NULL,
    destination TEXT NOT NULL,
    service_type TEXT NOT NULL,               -- e.g., "Standard", "Express"
    travel_date DATE NOT NULL,
    status TEXT NOT NULL DEFAULT 'New'        -- e.g., 'New', 'Approved', 'Tracking', 'Completed', 'Rejected'
);

--
-- Table structure for table `tracking_updates`
-- This table stores a log of every status update for a given shipment.
--
CREATE TABLE tracking_updates (
    id BIGSERIAL PRIMARY KEY,                          -- Auto-incrementing ID for this specific update
    shipment_id UUID NOT NULL REFERENCES shipments(id) ON DELETE CASCADE, -- Links to the shipment
    status_update TEXT NOT NULL,                       -- Description of the update (e.g., "Picked up from sender")
    location TEXT,                                     -- The location name for the update (e.g., "Yaoundé, Cameroon")
    latitude REAL,                                     -- Optional latitude for map plotting
    longitude REAL,                                    -- Optional longitude for map plotting
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Note for the backend developer:
-- A public storage bucket named "shipment-images" will be required for hosting photos of the goods.
-- The `image_url` field in the `shipments` table will store the public URL to the uploaded image.

-- Add indexes for faster lookups
CREATE INDEX idx_shipments_tracking_id ON shipments(tracking_id);
CREATE INDEX idx_tracking_updates_shipment_id ON tracking_updates(shipment_id);