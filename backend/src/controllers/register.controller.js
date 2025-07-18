const prisma = require("../database");
const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
    try {
        const { username, password } = req.body;

        const userExists = await prisma.user.findUnique({
            where: { name: username }
        });

        if (userExists) {
            return res.status(400).json({ message: "Este usuário já existe!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: { name: username, password: hashedPassword }
        });

        return res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao cadastrar usuário." });
    }
}

module.exports = userRegister;