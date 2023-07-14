export class empData {
    empid: number;
    emp_lname: string;
    emp_fname: string;
    dob: string;
    contact_no: string;
    address_1: string;
    address_2: string;
    pincode: number;
    district: string;
    state: string;
    nationality: string;
    aadharno: number;
    password:string;


constructor(empid:number, emp_lname:string,emp_fname:string,dob:string,
contact_no:string, address_1:string, address_2:string, pincode:number,
district:string, state:string, nationality:string, aadharno:number, password:string ) {
    this.empid = empid;
    this.emp_lname = emp_lname;
    this.emp_fname = emp_fname;
    this.dob = dob;
    this.contact_no = contact_no;
    this.address_1 = address_1;
    this.address_2 = address_2;
    this.pincode = pincode;
    this.district = district;
    this.state = state;
    this.nationality = nationality;
    this.aadharno = aadharno;
    this.password = password;
 }

}
