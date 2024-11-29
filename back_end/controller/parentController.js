import { Parent } from "../models/parent.js";
import bcrypt from "bcrypt";


const registerParent = async (req, res) => {
    try {
        const { FullName, Email, PhoneNumber, Password } = req.body;

        const hashedPassword = await bcrypt.hash(Password, 10);

        const parent = new Parent({
            FullName,
            Email,
            PhoneNumber,
            Password: hashedPassword,
        });

        await parent.save();

        res.status(201).json(parent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred during registration." });
    }
};


const parentLogin = async (req, res) => {
    try {
        const { Email, Password } = req.body;

       
        if (!Email || !Password) {
            return res.status(400).json({ error: "Email and Password are required." });
        }

        const parent = await Parent.findOne({ Email });
        if (!parent) {
            return res.status(404).json({ error: "Invalid email or password." });
        }

     
        const isMatch = await bcrypt.compare(Password, parent.Password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        res.status(200).json({ message: "Login successful", parent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred during login." });
    }
};

export { registerParent, parentLogin };
