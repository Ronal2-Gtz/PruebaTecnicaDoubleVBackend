import { type Request, type Response } from 'express';
import { User } from '../entities/User';

const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(404).json(error);
	}
};

const getUserById = async (req: Request, res: Response) => {
	try {
		const { login } = req.params;
		const user = await User.find({
			where: { login }
		});
		if(!user.length) return res.json({isFavorite: false});
		res.json({user, isFavorite: true});
	} catch (error) {
		res.status(404).json({error, isFavorite: false});
	}
};

const createUser = async (req: Request, res: Response) => {
	try {
		const { name, login, location, bio, public_repos, followers, following, avatar_url} = req.body;

		const user = new User();
        user.name = name;
        user.login = login;
        user.location = location;
        user.bio = bio;
        user.public_repos = public_repos;
        user.followers = followers;
        user.following = following;
        user.avatar_url = avatar_url;

		const newUser = await user.save();

		res.json({ message: 'User created', newUser });

	} catch (error) {
		res.status(404).json(error);
	}
};

const deleteUser = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const deleteUser = await User.delete({ id });
		if (!deleteUser.affected)
			return res.status(404).json({ message: 'User does not found' });

		res.json({ message: 'User deleted' });
	} catch (error) {
		res.status(404).json(error);
	}
};

export {
    getUsers,
	getUserById,
    createUser,
    deleteUser
}