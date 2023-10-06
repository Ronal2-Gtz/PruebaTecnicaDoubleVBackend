import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@Column({unique: true})
	login: string;

	@Column({ nullable: true })
	location: string;

	@Column({ nullable: true })
	bio: string;

	@Column()
	public_repos: number;

	@Column()
	followers: number;

	@Column()
	following: number;

	@Column()
	avatar_url: string;
}