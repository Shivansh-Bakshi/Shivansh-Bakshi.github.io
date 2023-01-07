import React, { useRef } from 'react';
import Sketch from 'react-p5';
import { useEffectAfterFirstRender, useWindowDimensions } from '../utils/hooks';

var cols, rows;
const scl = 60;
const altitude = 100;
const increment = 0.2;

var flying = 0;
const speed = 0.05;

var terrain = [];
var P5;

const Background = () => {
    const { height, width } = useWindowDimensions();
    const isFirstRender = useRef(true);

    const setup = (p5, canvasParentRef) => {
        P5 = p5;
        p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef);
        cols = 2 * width / scl;
        rows = 1.5 * height / scl;

        for (var x = 0; x < cols; x++) {
            terrain[x] = [];
            for (var y = 0; y < rows; y++) {
                terrain[x][y] = 0;
            }
        }
    }

    useEffectAfterFirstRender(isFirstRender, () => {
        P5.resizeCanvas(width, height);
    }, [height, width]);

    const draw = p5 => {
        p5.background(0);
        p5.stroke(255);
        p5.strokeWeight(1.5);
        p5.noFill();
        p5.frameRate(30);
        p5.rotateX(p5.PI / 3);
        p5.translate(-width, -height / 2);

        flying -= speed;
        var yOff = flying;
        for (let y = 0; y < rows; y++) {
            var xOff = 0;
            for (let x = 0; x < cols; x++) {
                terrain[x][y] = p5.map(p5.noise(xOff, yOff), 0, 1, -altitude, altitude);
                xOff += increment;
            }
            yOff += increment;
        }

        for (let y = 0; y < rows - 1; y++) {
            p5.beginShape(p5.TRIANGLE_STRIP);
            for (let x = 0; x < cols; x++) {
                p5.vertex(x * scl, y * scl, terrain[x][y]);
                p5.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
            }
            p5.endShape();
        }
    }

    return <Sketch setup={setup} draw={draw} />
}

export default Background