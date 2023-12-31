import UserModel from "#Schemas/user.schema.js";

const userProfileController = async (req, res) => {
    const { id } = req;

    const existingUserById = await UserModel.findById(id).exec();

    if(!existingUserById) return res.status(401).send({errors: ['Usuario no autorizado']});

    return res.send(existingUserById)
}

export default userProfileController;