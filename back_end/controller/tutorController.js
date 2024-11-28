import { Tutor } from "../models/tutor";
import bcyrpt from "bcrypt";


const registerTutor = async (req, res) => {
    try {
         const { fullName, email, phoneNumber, password } = req.body
    
    const hashedPassword= await bcyrpt.hash(password,10)
    
    const tutor = new Tutor({
      FullName:fullName,
      Email:email,
      PhoneNumber:phoneNumber,
      Password:hashedPassword
    })
    
        await tutor.save()
        res.status(200).json(tutor)
        
    } catch (error) {
        console.log(error)
        
    }
   
    
}

export {registerTutor}