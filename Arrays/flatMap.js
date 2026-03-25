const offices = [
  { name: "West Office", employees: ["John", "Sarah"] },
  { name: "East Office", employees: ["Amy", "Michael"] },
  { name: "North Office", employees: ["Dom"] }
];


console.log(offices.flatMap((office)=> office.employees))