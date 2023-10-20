import { FC } from 'react';
import { CopyIcon } from 'components/Icons/Icons';
import { ArticleInterface } from 'interface/interface';
import { TickIcon } from 'components/Icons/Icons';

interface Props {
	allArticles: ArticleInterface[];
	setArticle: (item: ArticleInterface) => void;
	handleCopy: (url: string) => void;
	copied: string;
}

const BrowseHistory: FC<Props> = ({ allArticles, setArticle, handleCopy, copied }) => {
	return (
		<div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
			{allArticles.reverse().map((item: ArticleInterface, index: number) => (
				<div
					key={`link-${index}`}
					onClick={() => {
						setArticle(item);
					}}
					className="link_card"
				>
					{copied === item.url ? <TickIcon /> : <CopyIcon className="w-[3%] h-[3%]" onClick={() => handleCopy(item.url)} />}
					<p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">{item.url}</p>
				</div>
			))}
		</div>
	);
};

export default BrowseHistory;
