import {createGlobalStyle} from 'styled-components';
import {colors} from "../utils/variables"

export const GlobalStyles =  createGlobalStyle`

* {
	margin:0;
	padding:0;
	outline:0;
	box-sizing:border-box;
}

body {
	font-family:fantasy;
	background:${colors.blueZodiac};
	overflow-x:hiden;
}

`