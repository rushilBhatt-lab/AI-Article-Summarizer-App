import { FC } from 'react';
import { Loader } from 'components/Icons/Icons';
import { ArticleInterface } from 'interface/interface';

interface Props {
	isFetching: boolean;
	error: any;
	article: ArticleInterface;
}

const DisplayResults: FC<Props> = ({ isFetching, error, article }) => {
	console.log('article', article);
	return (
		<div className="my-10 max-w-full flex justify-center items-center">
			{isFetching ? (
				<span className="w-20 h-20 object-contain">
					<Loader />
				</span>
			) : error ? (
				<p className="font-inter font-bold text-black text-center">
					Well, this was not the intended behavior...
					<br />
					<span className="font-satoshi font-normal text-gray-700">{error?.data?.error}</span>
				</p>
			) : (
				article.summary && (
					<div className="flex flex-col gap-3">
						<h2 className="font-satoshi font-bold text-gray-600 text-xl">
							Article <span className="blue_gradient">Summary</span>
						</h2>
						<div className="summary_box">
							<p className="font-inter font-medium text-sm text-gray-700">{article.summary}</p>
						</div>
					</div>
				)
			)}
		</div>
	);
};

export default DisplayResults;
