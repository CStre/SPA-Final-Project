
// constructor for the entire project to set all of the elements found in the form

export class Booking {
  constructor(
    public id: number,
    public name?: string,
    public banner?: string,
    public email?: string,
    public pronouns?: string,
    public classification?: string,
    public semester?: string,
    public resident?: string,
    public style?: string,
    public hall?: string,
    public room?: string,
    public meals?: string,
    public parking?: string,
    public lot?: string
  ) {}


}


