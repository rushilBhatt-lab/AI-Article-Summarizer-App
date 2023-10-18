import Logo from '../../assets/logo.svg';

const Header = () => {
	return (
		<header className="w-full flex justify-center items-center flex-col ">
			<nav className="flex justify-between items-center w-full mb-10 pt-3">
				<img src={Logo} className="w-28 object-contain" />
				<button type="button" onClick={() => window.open('github.com')} className="black_btn">
					Github
				</button>
			</nav>
			<h1 className="head_text">
				Summarize Articles with
				<br className="max-md:hidden" />
				<span className="orange_gradient">OpenAI GPT-4</span>
			</h1>
			<h2 className="desc">
				Enhance your reading experience with this app, a powerful open-source article summarization tool designed to distill lengthy articles
				into succinct and easily digestible summaries.
			</h2>
		</header>
	);
};

export default Header;
