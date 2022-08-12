var person = {
   fname: "pradeep",
   lastname: "guna",
   sub:"math",
   address:{
     phone1:937948374,
     phone2:974987656,
    },
    greeting: function () {
      let msg = `My name is ${fname} and my intrest is ${phone1}`;
      console.log(msg);        
    }
}
console.log(person.greeting);
