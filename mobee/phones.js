// Phone Database
const phoneDatabase = [
    // Apple iPhones
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        year: 2023,
        os: "iOS 17",
        ram: "8GB",
        storage: "256GB",
        battery: "4441mAh",
        image: "https://via.placeholder.com/400x400/1a1a1a/ffffff?text=iPhone+15+Pro+Max",
        popular: true,
        features: ["A17 Pro Chip", "Titanium Design", "Action Button", "USB-C", "48MP Camera"]
    },
    {
        id: 2,
        name: "iPhone 15",
        brand: "Apple",
        year: 2023,
        os: "iOS 17",
        ram: "6GB",
        storage: "128GB",
        battery: "3349mAh",
        image: "https://via.placeholder.com/400x400/ff6b9d/ffffff?text=iPhone+15",
        popular: true,
        features: ["A16 Bionic", "Dynamic Island", "USB-C", "48MP Camera", "Ceramic Shield"]
    },
    {
        id: 3,
        name: "iPhone 14 Pro",
        brand: "Apple",
        year: 2022,
        os: "iOS 16",
        ram: "6GB",
        storage: "128GB",
        battery: "3200mAh",
        image: "https://via.placeholder.com/400x400/4a00e0/ffffff?text=iPhone+14+Pro",
        popular: true,
        features: ["A16 Bionic", "Dynamic Island", "Always-On Display", "Pro Camera System"]
    },

    // Samsung Galaxy
    {
        id: 4,
        name: "Galaxy S24 Ultra",
        brand: "Samsung",
        year: 2024,
        os: "Android 14",
        ram: "12GB",
        storage: "256GB",
        battery: "5000mAh",
        image: "https://via.placeholder.com/400x400/1565c0/ffffff?text=Galaxy+S24+Ultra",
        popular: true,
        features: ["Snapdragon 8 Gen 3", "S Pen", "200MP Camera", "AI Features", "Titanium Frame"]
    },
    {
        id: 5,
        name: "Galaxy S23",
        brand: "Samsung",
        year: 2023,
        os: "Android 13",
        ram: "8GB",
        storage: "128GB",
        battery: "3900mAh",
        image: "https://via.placeholder.com/400x400/00c853/ffffff?text=Galaxy+S23",
        popular: true,
        features: ["Snapdragon 8 Gen 2", "50MP Camera", "120Hz Display", "Wireless Charging"]
    },
    {
        id: 6,
        name: "Galaxy Z Fold 5",
        brand: "Samsung",
        year: 2023,
        os: "Android 13",
        ram: "12GB",
        storage: "256GB",
        battery: "4400mAh",
        image: "https://via.placeholder.com/400x400/ff9800/ffffff?text=Galaxy+Z+Fold+5",
        popular: false,
        features: ["Foldable Display", "S Pen Support", "Multi-tasking", "Flex Mode", "IPX8"]
    },

    // Google Pixel
    {
        id: 7,
        name: "Pixel 8 Pro",
        brand: "Google",
        year: 2023,
        os: "Android 14",
        ram: "12GB",
        storage: "128GB",
        battery: "5050mAh",
        image: "https://via.placeholder.com/400x400/4285f4/ffffff?text=Pixel+8+Pro",
        popular: true,
        features: ["Google Tensor G3", "AI Photography", "Magic Eraser", "Pure Android", "Titan M"]
    },
    {
        id: 8,
        name: "Pixel 7a",
        brand: "Google",
        year: 2023,
        os: "Android 13",
        ram: "8GB",
        storage: "128GB",
        battery: "4385mAh",
        image: "https://via.placeholder.com/400x400/34a853/ffffff?text=Pixel+7a",
        popular: true,
        features: ["Google Tensor G2", "64MP Camera", "Wireless Charging", "IP67", "5 Years Updates"]
    },

    // OnePlus
    {
        id: 9,
        name: "OnePlus 12",
        brand: "OnePlus",
        year: 2024,
        os: "Android 14",
        ram: "12GB",
        storage: "256GB",
        battery: "5400mAh",
        image: "https://via.placeholder.com/400x400/ff4444/ffffff?text=OnePlus+12",
        popular: true,
        features: ["Snapdragon 8 Gen 3", "100W Fast Charging", "50MP Hasselblad Camera", "120Hz AMOLED"]
    },
    {
        id: 10,
        name: "OnePlus 11",
        brand: "OnePlus",
        year: 2023,
        os: "Android 13",
        ram: "8GB",
        storage: "128GB",
        battery: "5000mAh",
        image: "https://via.placeholder.com/400x400/00acc1/ffffff?text=OnePlus+11",
        popular: false,
        features: ["Snapdragon 8 Gen 2", "Hasselblad Camera", "80W Charging", "Alert Slider"]
    },

    // Xiaomi
    {
        id: 11,
        name: "Xiaomi 14 Ultra",
        brand: "Xiaomi",
        year: 2024,
        os: "Android 14",
        ram: "16GB",
        storage: "512GB",
        battery: "5300mAh",
        image: "https://via.placeholder.com/400x400/ff6f00/ffffff?text=Xiaomi+14+Ultra",
        popular: false,
        features: ["Snapdragon 8 Gen 3", "Leica Camera", "120W HyperCharge", "2K AMOLED"]
    },
    {
        id: 12,
        name: "Redmi Note 13 Pro",
        brand: "Xiaomi",
        year: 2023,
        os: "Android 13",
        ram: "8GB",
        storage: "256GB",
        battery: "5100mAh",
        image: "https://via.placeholder.com/400x400/9c27b0/ffffff?text=Redmi+Note+13+Pro",
        popular: true,
        features: ["MediaTek Dimensity 7200", "200MP Camera", "120W Fast Charging", "IP54"]
    },

    // Huawei
    {
        id: 13,
        name: "Huawei P60 Pro",
        brand: "Huawei",
        year: 2023,
        os: "HarmonyOS 3.1",
        ram: "8GB",
        storage: "256GB",
        battery: "4815mAh",
        image: "https://via.placeholder.com/400x400/795548/ffffff?text=Huawei+P60+Pro",
        popular: false,
        features: ["Kirin 9000s", "Leica Camera", "88W Charging", "IP68", "Satellite Communication"]
    },

    // Sony
    {
        id: 14,
        name: "Xperia 1 V",
        brand: "Sony",
        year: 2023,
        os: "Android 13",
        ram: "12GB",
        storage: "256GB",
        battery: "5000mAh",
        image: "https://via.placeholder.com/400x400/607d8b/ffffff?text=Xperia+1+V",
        popular: false,
        features: ["Snapdragon 8 Gen 2", "4K OLED", "Pro Camera", "21:9 Display", "3.5mm Jack"]
    },

    // Nothing
    {
        id: 15,
        name: "Nothing Phone 2",
        brand: "Nothing",
        year: 2023,
        os: "Android 13",
        ram: "8GB",
        storage: "128GB",
        battery: "4700mAh",
        image: "https://via.placeholder.com/400x400/424242/ffffff?text=Nothing+Phone+2",
        popular: true,
        features: ["Snapdragon 8+ Gen 1", "Glyph Interface", "50MP Camera", "120Hz OLED", "Wireless Charging"]
    },

    // Oppo
    {
        id: 16,
        name: "Oppo Find X6 Pro",
        brand: "Oppo",
        year: 2023,
        os: "Android 13",
        ram: "12GB",
        storage: "256GB",
        battery: "5000mAh",
        image: "https://via.placeholder.com/400x400/e91e63/ffffff?text=Oppo+Find+X6+Pro",
        popular: false,
        features: ["Snapdragon 8 Gen 2", "Hasselblad Camera", "100W SuperVOOC", "2K AMOLED"]
    },

    // Vivo
    {
        id: 17,
        name: "Vivo X100 Pro",
        brand: "Vivo",
        year: 2023,
        os: "Android 14",
        ram: "12GB",
        storage: "256GB",
        battery: "5400mAh",
        image: "https://via.placeholder.com/400x400/3f51b5/ffffff?text=Vivo+X100+Pro",
        popular: false,
        features: ["MediaTek Dimensity 9300", "Zeiss Camera", "120W Charging", "50MP Periscope"]
    },

    // Realme
    {
        id: 18,
        name: "Realme GT 5 Pro",
        brand: "Realme",
        year: 2023,
        os: "Android 14",
        ram: "12GB",
        storage: "256GB",
        battery: "5400mAh",
        image: "https://via.placeholder.com/400x400/ffc107/ffffff?text=Realme+GT+5+Pro",
        popular: false,
        features: ["Snapdragon 8 Gen 3", "100W Charging", "50MP OIS Camera", "144Hz Display"]
    },

    // Motorola
    {
        id: 19,
        name: "Motorola Edge 40 Pro",
        brand: "Motorola",
        year: 2023,
        os: "Android 13",
        ram: "12GB",
        storage: "256GB",
        battery: "4600mAh",
        image: "https://via.placeholder.com/400x400/009688/ffffff?text=Motorola+Edge+40+Pro",
        popular: false,
        features: ["Snapdragon 8 Gen 2", "165Hz Display", "50MP Camera", "125W Charging", "IP68"]
    },

    // Honor
    {
        id: 20,
        name: "Honor Magic 6 Pro",
        brand: "Honor",
        year: 2024,
        os: "Android 14",
        ram: "12GB",
        storage: "512GB",
        battery: "5600mAh",
        image: "https://via.placeholder.com/400x400/673ab7/ffffff?text=Honor+Magic+6+Pro",
        popular: false,
        features: ["Snapdragon 8 Gen 3", "180MP Periscope", "100W Charging", "Silicon Battery", "AI Photography"]
    }
];

// Export for use in other files
window.phoneDatabase = phoneDatabase;