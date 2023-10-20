import React, { useState, useEffect } from 'react';
import { useLazyGetSummaryQuery } from '../../services/articles';
import Form from './Form';
import BrowseHistory from './BrowseHistory';
import { ArticleInterface } from 'interface/interface';
import DisplayResults from './DisplayResults';

const Demo = () => {
	const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
	const [article, setArticle] = useState<ArticleInterface>({ url: '', summary: '' });
	const [allArticles, setAllArticles] = useState<ArticleInterface[]>([]);
	const [copied, setCopied] = useState<string>('');
	const [copiedUrls, setCopiedUrls] = useState<string[]>([]);

	useEffect(() => {
		const articlesData = JSON.parse(localStorage.getItem('articles') ?? '[]');

		if (articlesData) {
			setAllArticles(articlesData);
		}
	}, []);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { data } = await getSummary({ articleurl: article.url });

		if (data?.summary) {
			const newArticle = { ...article, summary: data.summary };
			const updatedAllArticles = [newArticle, ...allArticles];
			setArticle(newArticle);
			setAllArticles(updatedAllArticles);
			localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
		}
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setArticle({ ...article, url: e.target.value });
	};

	const handleCopy = (copyUrl: string) => {
		setCopied(copyUrl);
		navigator.clipboard.writeText(copyUrl);
		setCopiedUrls([...copiedUrls, copyUrl]);

		setTimeout(() => setCopied(''), 3000);
	};

	return (
		<section className="mt-16 w-full max-w-xl">
			<div className="flex flex-col w-full gap-2">
				<Form onSubmit={handleSubmit} onInput={handleInput} value={article.url} />
				<BrowseHistory allArticles={allArticles} setArticle={setArticle} handleCopy={handleCopy} copied={copied} />
				<DisplayResults isFetching={isFetching} error={error} article={article} />
			</div>
		</section>
	);
};

export default Demo;
