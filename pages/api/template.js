export default function handler(req, res) {
    const body = req.body;
    
  
    res.status(200).json({ name: `${body.name}`, adresse: `${body.adresse}` });


  }   