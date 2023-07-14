export class VisaDetails{
    reqid:number;
    empid:number;
    empname:string;
    purpose:string;
    date_of_application:string;
    applied_from:string;
    applied_till:string;
    category:string;
    unit:string;
    country:string;
    status:string;
    visa_type:string;
    location:string;
    managerid:number;
    hrid : number;
    constructor(
        reqid:number,
        empid:number,
        empname:string,
        purpose:string,
        date_of_application:string,
        applied_from:string,
        applied_till:string,
        category:string,
        unit:string,
        country:string,
        status:string,
        visa_type:string,
        location:string,
        managerid:number,
        hrid : number

    ){
        this.reqid=reqid;
        this.empid=empid;
        this.empname=empname;
        this.purpose=purpose;
        this.date_of_application=date_of_application;
        this.applied_from=applied_from;
        this.applied_till=applied_till;
        this.category=category;
        this.unit=unit;
        this.country=country;
        this.status=status;
        this.visa_type=visa_type;
        this.location=location;
        this.managerid=managerid;
        this.hrid=hrid;


    }

}
