var nameList = [
    'Aarav', 'Aanya', 'Aarush', 'Aadhya', 'Advait', 'Ananya', 'Arjun', 'Avni', 'Akshay', 'Aisha',
    'Bhavya', 'Bhuvan', 'Bharati', 'Babita', 'Chirag', 'Chhavi', 'Chetan', 'Charvi', 'Dev', 'Divya',
    'Dhruv', 'Dia', 'Dhruvi', 'Dinesh', 'Eesha', 'Ekansh', 'Ekta', 'Eshaan', 'Firoz', 'Fatima',
    'Gaurav', 'Gargi', 'Ganesh', 'Gunjan', 'Harsh', 'Hansa', 'Hrithik', 'Hiral', 'Ishaan', 'Inaya',
    'Ishita', 'Imran', 'Jatin', 'Jhanvi', 'Jay', 'Janhavi', 'Jaidev', 'Juhi', 'Kabir', 'Kavya',
    'Karan', 'Khushi', 'Kunal', 'Kirti', 'Laksh', 'Leela', 'Luv', 'Lavanya', 'Manish', 'Mehak',
    'Mohit', 'Mira', 'Mukesh', 'Meera', 'Nikhil', 'Neha', 'Navin', 'Navya', 'Omkar', 'Ojas',
    'Oishi', 'Pranav', 'Prisha', 'Prateek', 'Pooja', 'Qamar', 'Qadir', 'Quasar', 'Quinn', 'Raj',
    'Riya', 'Rohan', 'Ritika', 'Ranbir', 'Rashmi', 'Sahil', 'Shreya', 'Siddharth', 'Sanya', 'Surya',
    'Suhani', 'Tanishq', 'Tanya', 'Tarun', 'Tithira', 'Uday', 'Uma', 'Utkarsh', 'Urvi', 'Vedant',
    'Vanya', 'Vikram', 'Vidhi', 'Varun', 'Varsha', 'Waseem', 'Wafa', 'Yash', 'Yamini', 'Yuvan',
    'Yamika', 'Zaara', 'Zain', 'Zoya'
];
    export function generateRandom() {
           return nameList[Math.floor( Math.random() * nameList.length )];
        };

    export function makeRandomMessage(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
              counter += 1;
            }
            return result;
        }
        export function generateRandomSentence() {

            const subjects = ['I', 'You', 'We']; 
            const verbs = ['discover', 'understand', 'appreciate'];
            const adjectives = ['deep', 'profound', 'meaningful'];  
            const objects = ['truth', 'beauty', 'wisdom', 'purpose', 'love'];
            
            const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
          
            let subject = getRandomElement(subjects);
            let verb = getRandomElement(verbs);
            let adjective = getRandomElement(adjectives);
            let object = getRandomElement(objects);
          
            return `${subject} ${verb} the ${adjective} ${object} in life.`; 
          
          }