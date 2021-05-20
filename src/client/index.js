import './styles/base.scss';
import './styles/typography.scss';
import './styles/elements.scss';

import Icon from './imgs/menu.svg';
import SearchIcon from './imgs/search.svg';

// Add the image to our existing div.
const myIcon1 = new Image();
myIcon1.src = Icon;
const elem1 = document.getElementById('icon');
elem1.appendChild(myIcon1);

const myIcon2 = new Image();
myIcon2.src = SearchIcon;
const elem2 = document.getElementById('search');
elem2.appendChild(myIcon2);
