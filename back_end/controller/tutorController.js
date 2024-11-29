import { Tutor } from "../models/tutor.js";
import bcrypt from "bcrypt";


const registerTutor = async (req, res) => {
    try {
         const { fullName, email, phoneNumber, password } = req.body
    
    const hashedPassword= await bcrypt.hash(password,10)
    
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

const tutorLogin = async (req, res) => {
    try {
        const { Email, Password } = req.body;

       
        if (!Email || !Password) {
            return res.status(400).json({ error: "Email and Password are required." });
        }

        const tutor = await Tutor.findOne({ Email });
        if (!tutor) {
            return res.status(404).json({ error: "Invalid email or password." });
        }

     
        const isMatch = await bcrypt.compare(Password, tutor.Password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        res.status(200).json({ message: "Login successful", Tutor});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred during login." });
    }
};

export {registerTutor,tutorLogin}