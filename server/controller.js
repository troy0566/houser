module.exports = {
    create: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { name, address, city, state, zip, image, mort, rent } = req.body;
 
      dbInstance.create_property([ name, address, city, state, zip, image, mort, rent ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
      res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
      console.log(err)
      } );
    },
  
    // getOne: ( req, res, next ) => {
    //   const dbInstance = req.app.get('db');
    //   const { params } = req;
  
    //   dbInstance.read_product([ params.id ])
    //     .then( product => res.status(200).send( product ) )
    //     .catch( err => {
    //       res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
    //       console.log(err)
    //     } );
    // },
  
    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_properties()
          .then( properties => {console.log(properties); res.status(200).send( properties )} )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },
  
    // update: ( req, res, next ) => {
    //   const dbInstance = req.app.get('db');
    //   const { params, query } = req;

    //   dbInstance.update_product([ params.id, query.desc ])
    //   .then( () => res.sendStatus(200) )
    //   .catch( err => {
    //   res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
    //   console.log(err)
    //   } );
    // },
  
    deleteProp: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params } = req;

      dbInstance.delete_property([ params.id ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
      res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
      console.log(err)
      } );
    }
  };