import pic_1 from './men2.jpg';
import pic from './logo.png';
// import pic_17 from './women_shirt.avif';
import pic_18 from './kids_shirt.avif';

const all_product = [
    {
        id: 1,
        name: "Men Yellow Printed Cotton Pure Cotton T-shirt",
        category: "Men",
        image: pic,
        new_price: 85.0,
        old_price: 120.0
    },
    {
        id: 2,
        name: "Women Blue Striped Linen Blend Dress",
        category: "Women",
        image: pic,
        new_price: 150.0,
        old_price: 200.0
    },
    {
        id: 3,
        name: "Kids Red Cartoon Print Cotton T-shirt",
        category: "Kids",
        image: pic,
        new_price: 25.0,
        old_price: 35.0
    },
    {
        id: 4,
        name: "Men Black Slim Fit Denim Jeans",
        category: "Men",
        image: pic,
        new_price: 120.0,
        old_price: 180.0
    },
    {
        id: 5,
        name: "Women Floral Print Maxi Dress",
        category: "Women",
        image: pic,
        new_price: 180.0,
        old_price: 220.0
    },
    {
        id: 6,
        name: "Kids Blue Striped Cotton Shorts",
        category: "Kids",
        image: pic,
        new_price: 30.0,
        old_price: 40.0
    },
    {
        id: 7,
        name: "Men Gray V-neck Casual Sweater",
        category: "Men",
        image: pic,
        new_price: 75.0,
        old_price: 100.0
    },
    {
        id: 8,
        name: "Women White Lace Wedding Gown",
        category: "Women",
        image: pic,
        new_price: 300.0,
        old_price: 400.0
    },
    {
        id: 9,
        name: "Kids Green Dinosaur Print Pajamas",
        category: "Kids",
        image: pic,
        new_price: 20.0,
        old_price: 25.0
    },
    {
        id: 10,
        name: "Men Navy Blue Polo Shirt",
        category: "Men",
        image: pic,
        new_price: 50.0,
        old_price: 70.0
    },
    {
        id: 11,
        name: "Women Striped High-Waisted Skirt",
        category: "Women",
        image: pic,
        new_price: 70.0,
        old_price: 90.0
    },
    {
        id: 12,
        name: "Kids Yellow Hooded Raincoat",
        category: "Kids",
        image: pic,
        new_price: 45.0,
        old_price: 60.0
    },
    {
        id: 13,
        name: "Men Brown Leather Casual Shoes",
        category: "Men",
        image: pic,
        new_price: 110.0,
        old_price: 150.0
    },
    {
        id: 14,
        name: "Women Denim Jacket with Embroidery",
        category: "Women",
        image: pic,
        new_price: 120.0,
        old_price: 160.0
    },
    {
        id: 15,
        name: "Kids Pink Unicorn Print Backpack",
        category: "Kids",
        image: pic,
        new_price: 25.0,
        old_price: 30.0
    },
    {
        id: 16,
        name: "Men Plaid Button-Down Shirt",
        category: "Men",
        image: pic,
        new_price: 65.0,
        old_price: 80.0
    },
    {
        id: 17,
        name: "Women Black Leather Ankle Boots",
        category: "Women",
        image: pic,
        new_price: 140.0,
        old_price: 180.0
    },
    {
        id: 18,
        name: "Kids Purple Tie-Dye Sweatshirt",
        category: "Kids",
        image: pic,
        new_price: 35.0,
        old_price: 45.0
    },
    {
        id: 19,
        name: "Women Blue Striped Linen Blend Dress",
        category: "Women",
        image: pic,
        new_price: 150.0,
        old_price: 200.0
    },
    {
        id: 20,
        name: "Kids Red Cartoon Print Cotton T-shirt",
        category: "Kids",
        image: pic,
        new_price: 25.0,
        old_price: 35.0
    },
    {
        id: 21,
        name: "Men Black Slim Fit Denim Jeans",
        category: "Men",
        image: pic,
        new_price: 120.0,
        old_price: 180.0
    },
    {
        id: 22,
        name: "Women Floral Print Maxi Dress",
        category: "Women",
        image: pic,
        new_price: 180.0,
        old_price: 220.0
    },
    {
        id: 23,
        name: "Kids Blue Striped Cotton Shorts",
        category: "Kids",
        image: pic,
        new_price: 30.0,
        old_price: 40.0
    },
    {
        id: 24,
        name: "Men Gray V-neck Casual Sweater",
        category: "Men",
        image: pic,
        new_price: 75.0,
        old_price: 100.0
    },
    {
        id: 25,
        name: "Women White Lace Wedding Gown",
        category: "Women",
        image: pic,
        new_price: 300.0,
        old_price: 400.0
    },
    {
        id: 26,
        name: "Kids Green Dinosaur Print Pajamas",
        category: "Kids",
        image: pic,
        new_price: 20.0,
        old_price: 25.0
    },
    {
        id: 27,
        name: "Men Navy Blue Polo Shirt",
        category: "Men",
        image: pic,
        new_price: 50.0,
        old_price: 70.0
    },
    {
        id: 28,
        name: "Women Striped High-Waisted Skirt",
        category: "Women",
        image: pic,
        new_price: 70.0,
        old_price: 90.0
    },
    {
        id: 29,
        name: "Kids Yellow Hooded Raincoat",
        category: "Kids",
        image: pic,
        new_price: 45.0,
        old_price: 60.0
    },
    {
        id: 30,
        name: "Men Brown Leather Casual Shoes",
        category: "Men",
        image: pic,
        new_price: 110.0,
        old_price: 150.0
    },
    {
        id: 31,
        name: "Women Denim Jacket with Embroidery",
        category: "Women",
        image: pic,
        new_price: 120.0,
        old_price: 160.0
    },
    {
        id: 32,
        name: "Kids Pink Unicorn Print Backpack",
        category: "Kids",
        image: pic,
        new_price: 25.0,
        old_price: 30.0
    },
    {
        id: 33,
        name: "Men Plaid Button-Down Shirt",
        category: "Men",
        image: pic,
        new_price: 65.0,
        old_price: 80.0
    },
    {
        id: 34,
        name: "Women Black Leather Ankle Boots",
        category: "Women",
        image: pic,
        new_price: 140.0,
        old_price: 180.0
    },
    {
        id: 35,
        name: "Kids Purple Tie-Dye Sweatshirt",
        category: "Kids",
        image: pic,
        new_price: 35.0,
        old_price: 45.0
    },{
        id: 1,
        name: "Men Yellow Printed Cotton Pure Cotton T-shirt",
        category: "Men",
        image: pic,
        new_price: 85.0,
        old_price: 120.0
    }
    
]

export default all_product;