db = db.getSiblingDB("sales");
db.getCollection("sales").aggregate(
    [
        {
            "$group" : {
                "_id" : "$product",
                "average" : {
                    "$avg" : "$amount"
                }
            }
        }, 
        {
            "$sort" : {
                "average" : NumberInt(-1)
            }
        }, 
        {
            "$limit" : NumberInt(3)
        }
    ], 
    {
        "allowDiskUse" : false
    }
);
