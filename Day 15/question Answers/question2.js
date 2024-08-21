db = db.getSiblingDB("sales");
db.getCollection("Persons").aggregate(
    [
        {
            "$group" : {
                "_id" : "$favoriteFruit",
                "count" : {
                    "$sum" : NumberInt(1)
                }
            }
        }, 
        {
            "$sort" : {
                "count" : NumberInt(-1)
            }
        }, 
        {
            "$limit" : NumberInt(1)
        }
    ], 
    {
        "allowDiskUse" : false
    }
);
