// Import stylesheets
import './style.css';

import { CreateCanvas } from './ts/createCanvas';
import { DrawPlayGround } from './ts/drawPlayground';

const canvas = new CreateCanvas('');
const playground = new DrawPlayGround(canvas.Canvas, 10);
playground.draw();
