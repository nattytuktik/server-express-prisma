
# room services
    endpoint =: 
        /room
            get: req.body 
                none
            post: req.body
                {
                    room: int
                    foor: int
                }