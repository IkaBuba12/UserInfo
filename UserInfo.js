const StudentInformation = {
    firstname: 'Ika',
    lastname: 'Bubashvili',
    age: 16,
    'programing languages': 'HTML, CSS, JavaScript',
    mail: 'ikabuba31@gmail.com'
};

for (let i in StudentInformation) {
    console.log(i + ': ' + StudentInformation[i]);
}

const socialnetworks = {
    facebook: 'https://facebook.com/profile.php?id=100090178980001',
    instagram: 'https://www.instagram.com/i_bubashvili/'
};

for (let key in socialnetworks) {
    console.log(key + ': ' + socialnetworks)
}

let Frequencyofactivity = '1 day in 1 week'
for (let i = 0; i < StudentInformation.length; i++) {
    console.log(StudentInformation[i]);
}

console.log('Frequency of activity: ' + Frequencyofactivity);






