db = db.getSiblingDB("sales");
db.getCollection("Persons").aggregate(
    [
        {
            "$group" : {
                "_id" : "$company.location.country",
                "average" : {
                    "$avg" : "$age"
                }
            }
        }
    ], 
    {
        "allowDiskUse" : false
    }
);
