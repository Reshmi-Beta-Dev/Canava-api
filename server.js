const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

const CANVA_API_BASE = "https://api.canva.com/v1";
const ACCESS_TOKEN = process.env.CANVA_ACCESS_TOKEN;

// Endpoint to create a design
app.post("/create-design", async (req, res) => {
    try {
        // Step 1: Create a new design
        const designResponse = await axios.post(
            `${CANVA_API_BASE}/designs`,
            {
                title: "Auto-Generated Design",
                width: 1080,
                height: 1080,
            },
            {
                headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
            }
        );
        const designId = designResponse.data.id;

        // Step 2: Insert a text element
        await axios.post(
            `${CANVA_API_BASE}/designs/${designId}/elements`,
            {
                type: "TEXT",
                text: "Hello Canva!",
                fontSize: 32,
                color: "#FF5733",
                x: 100,
                y: 100,
            },
            {
                headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
            }
        );

        // Step 3: Insert an image
        const assetId = "YOUR_ASSET_ID_HERE"; // Replace with a valid asset_id
        await axios.post(
            `${CANVA_API_BASE}/designs/${designId}/elements`,
            {
                type: "IMAGE",
                assetId: assetId,
                x: 200,
                y: 200,
                width: 500,
                height: 500,
            },
            {
                headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
            }
        );

        // Step 4: Get the design URL
        const designUrl = `${CANVA_API_BASE}/designs/${designId}`;

        res.json({ success: true, designId, designUrl });
    } catch (error) {
        console.error("Error creating design:", error.response?.data || error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
