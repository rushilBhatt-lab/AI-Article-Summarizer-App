import { FC } from 'react';
import { IconProps } from '../../interface/interface';

export const Logo: FC<IconProps> = (props) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={props.className}>
			<path
				fill="#fc6459"
				d="M40.53 28.65A16.93 16.93 0 0 1 39 32.4l1.89 4.42-4 4L32.4 39a16.93 16.93 0 0 1-3.75 1.55L26.86 45H23v-9a12 12 0 0 0 0-24V3h3.86l1.79 4.47A16.93 16.93 0 0 1 32.4 9l4.42-1.89 4 4.05L39 15.6a16.93 16.93 0 0 1 1.55 3.75L45 21.14v5.72Z"
			/>
			<path
				fill="#bfbfbf"
				d="M16.5 39a1 1 0 0 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1c2.09 0 .81 5-3 5zM9 25a1 1 0 0 1 2 0 2 2 0 0 0 2 2 1 1 0 0 1 1 1c0 2.09-5 .81-5-3zm3-4c-2.09 0-.81-5 3-5a1 1 0 0 1 0 2 2 2 0 0 0-2 2 1 1 0 0 1-1 1zm12 3a1 1 0 0 1-1-1 2 2 0 0 0-3.49-1.33A1 1 0 1 1 18 20.33 4 4 0 0 1 25 23a1 1 0 0 1-1 1zm0 9a1 1 0 0 1-1-1 3 3 0 0 0-6 0 1 1 0 0 1-2 0 5 5 0 0 1 10 0 1 1 0 0 1-1 1z"
			/>
			<path
				fill="#424242"
				d="M24.75 1.7a5 5 0 0 0-8.52 1.79A8 8 0 0 0 11 11.07 7 7 0 0 0 5.69 21a8 8 0 0 0 1.55 13 8 8 0 0 0 7.09 10 6 6 0 0 0 10.47 1.6c.3-.4.2 2.31.2-43.24a1 1 0 0 0-.25-.66ZM23 44.64a4 4 0 0 1-6.53-.78 7.39 7.39 0 0 0 1.46-.42 1 1 0 1 0-.76-1.86 6 6 0 0 1-8-6.81 7.78 7.78 0 0 0 3 .15 1 1 0 0 0-.3-2A6 6 0 0 1 5 27a6 6 0 0 1 2.55-4.9 1 1 0 0 0 .26-1.37 5 5 0 0 1 5.86-7.45 1 1 0 0 0 .66-1.88 6.78 6.78 0 0 0-1.33-.32 6 6 0 0 1 4.34-5.85 1 1 0 0 0 .71-.78A3 3 0 0 1 23 2.77Z"
			/>
		</svg>
	);
};

export const CopyIcon: FC<IconProps> = (props) => {
	return (
		<svg
			className={props.className}
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			width="14"
			height="14"
			xmlns="http://www.w3.org/2000/svg"
			onClick={props.onClick}
		>
			<path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z" />
		</svg>
	);
};

export const TickIcon: FC<IconProps> = (props) => {
	return (
		<svg
			fill="none"
			className={props.className}
			stroke="currentColor"
			viewBox="0 0 24 24"
			width="14"
			height="14"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M20 6 9 17l-5-5" />
		</svg>
	);
};

export const LinkIcon: FC<IconProps> = (props) => {
	return (
		<svg fill="none" className={props.className} stroke="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
			<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3M8 12h8" />
		</svg>
	);
};
export const Loader: FC<IconProps> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style={{ margin: 'auto', background: '0 0', display: 'block' }}
			width="200"
			height="200"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
			className={props.className}
		>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9333333333333333s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(24 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8666666666666667s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(48 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(72 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.7333333333333333s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(96 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(120 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(144 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5333333333333333s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(168 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4666666666666667s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(192 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(216 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(240 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.26666666666666666s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(264 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.2s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(288 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.13333333333333333s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(312 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.06666666666666667s" repeatCount="indefinite" />
			</rect>
			<rect x="47.5" y="12.5" rx="1.5" ry="1.5" width="5" height="15" fill="#ee6123" transform="rotate(336 50 50)">
				<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
			</rect>
		</svg>
	);
};
