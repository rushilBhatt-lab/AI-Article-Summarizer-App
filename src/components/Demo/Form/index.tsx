import { FC } from 'react';
import { LinkIcon } from 'components/Icons/Icons';

interface Props {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const Form: FC<Props> = ({ onSubmit, onInput, value }) => {
	return (
		<form className="relative flex justify-center items-center" onSubmit={onSubmit}>
			<LinkIcon className="absolute ml-3 left-0 my-2" />
			<input type="url" onChange={onInput} placeholder="Please enter a URL" value={value} required className="url_input peer" />

			<button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">
				<p>↵</p>
			</button>
		</form>
	);
};

export default Form;
