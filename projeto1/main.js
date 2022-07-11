 const generateotp = () =>{
   let otp = "";
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10);
    };
    return otp;
 };
 generateotp();
 console.log(generateotp());


const data = new Date();

const dataformatada = data.toLocaleDateString(
    {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
     }
)

console.log(dataformatada)
