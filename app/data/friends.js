// ===============================================================================
// DATA
// Below data will add informarmation to the friends list.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var  friendsArray = [
    {
        "name": "John Andrews",
        "photo": "https://www.menshairstyletrends.com/wp-content/uploads/2017/02/andrewdoeshair-short-sides-long-top-side-part-hair-thick-hair-men-e1486511503622.jpg",
        "scores": [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
        ]
        },
        {
            "name": "Julianne Kestler",
            "photo": "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Samantha-Barks-will-star-in-the-Pretty-Woman-the-musical-1077085.jpg",
            "scores": [
            "2",
            "1",
            "3",
            "3",
            "5",
            "1",
            "3",
            "2",
            "4",
            "5"
            ]
            },
            {
                "name": "Justin Wallace",
                "photo": "https://cdn.sugardaddy.com/photos/08/MAQ5927308_1.jpg",
                "scores": [
                "3",
                "2",
                "4",
                "5",
                "1",
                "1",
                "3",
                "1",
                "3",
                "4"
                ]
                }
];

  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;