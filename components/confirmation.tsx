
interface Props {
	userName: string,
	password: string,
	email: string,
}

export default function Confirmation({ userName, password, email }: Props) {
	return <div>
		{userName}
		{password}
		{email}
	</div>
}

