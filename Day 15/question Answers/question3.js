db.getCollection("Persons").aggregate(


    [
     
        {
            $group: {
                _id:{
                    "gender":"$gender",
                    "isActive":"$isActive"
                },
                count:{$sum:1}
                
       
            }
        },
        {
            $sort: {
          
                count:-1
                
            }
        }
    ],

    {

    }

);
