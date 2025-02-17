const user = {
    userid:'user123',

    personalInfo: {
        firstName:'John',
        lastName:'Doe',
        email: 'john.doe@eaxmple.com'
    },
    
    preferences:{
        theme:'light',
        notificationEnabled:true
},

    securitySettings:{
        lastLogin:'2023-07-04',
        isAccountActive:true
}

};

Object.freeze(user); // I used freeze para hindi mag changes ung users
Object.freeze(user.preferences); // Ganoon din sa preferences
Object.seal(user.securitySettings);// sa Security naman gumamit ako ng seal to have a changes 


console.log(user);
console.log(user.personalInfo);//
console.log(user.preferences);//
console.log(user.securitySettings);//



