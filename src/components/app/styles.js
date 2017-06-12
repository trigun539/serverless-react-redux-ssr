import { css } from 'glamor';

const wrapper = css({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: '#191919'
});

const title = css({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	color: '#ffd426',
	fontFamily: 'Monaco, Inconsolata, monospace'
});

const styles = {
	wrapper,
	title
};

export default styles;
