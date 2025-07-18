const prisma = require("../database");
const bcrypt = require("bcrypt");

const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { name: username }
        });

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Senha inválida." });
        }

        await res.status(200).json({ message: "Login efetuado com sucesso!" });

    } catch (err) {
        console.error(err);
        await res.status(200).json({ message: "Ocorreu um erro ao efetuar o login." });
    };
}

module.exports = userLogin; 