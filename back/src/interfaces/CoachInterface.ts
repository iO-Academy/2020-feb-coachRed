export interface CoachInterface  {

    firstName: string, //think we'll have to split name into 2
    lastName: string,
    email: string, //can we typehint an email address somehow?
    phone: string, 
    dob: string,
    
    houseNumber: number, //  either number or name
    houseName: string, // either number or name
    address1: string,
    address2: string | null,
    town: string,
    county: string,
    postcode: string, // can typehint a postcode with regex?
    location: Object, //needs to be location typehinted probably
  
    qualifications: string, //array best way to handle multiple?
    yearsCoaching: string,
    sport: string, // list from database. Typehint to sport?
    expertise: string,
  
    password: string | null //obvs needs sorting out
  }