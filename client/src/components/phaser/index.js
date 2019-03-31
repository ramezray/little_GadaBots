import React, { Component } from 'react';
// import Phaser from 'phaser-ce/build/phaser.min.js';
// import Phaser from '../../bin/phaser.min.js'

class PhaserBot extends Component {
    // src = this.props.src;
    constructor(props) {
        super(props);

        this.game=null;
        this.componentDidMount = this.componentDidMount.bind(this);
        // this.preload = this.preload.bind(this);
        // this.create = this.create.bind(this);
        // this.update = this.update.bind(this);
    }
    componentDidMount() {
        //n is the total different of src
        var src = this.props.src;
        // var srcArray = this.props.srcArray;
        // var phaserContainer='phaser-container';
        var background;
        var srcBot = require('../../images/classic_flat_stanley.png');
        var l = 0.5;
    //    for(let i=0;i<srcArray.length;i++){
    //     phaserContainer+=i;
    //    }
        this.game = new (window.Phaser.Game)(450, 300, window.Phaser.AUTO, 'phaser-container', { preload: preload, create: create, update: update });
        alert(typeof this.game);
        // this.game = new (window.Phaser.Game)(460, 300, window.Phaser.AUTO, 'phaser-container2', { preload: preload });
        // this.preload = () => {
        //     window.game.load.image('sky', src);
        //     window.game.load.image('stanley', srcBot);
        // }
        function preload() {
            this.game.load.image('sky', src);
            // alert(src);
            // this.game.load.spritesheet('sky', src,);
            this.game.load.image('stanley', srcBot);
        }
        function create() {
            background= this.game.add.sprite(0, 0, 'sky');
            background.scale.setTo(0.6, 0.6);
            window.stanley = this.game.add.sprite(150, 150, 'stanley');

            //  Input Enable the sprites
            window.stanley.inputEnabled = true;

            //  Allow dragging - the 'true' parameter will make the sprite snap to the center
            window.stanley.input.enableDrag(true);

            window.stanley.scale.setTo(l, l);
            window.cursors = this.game.input.keyboard.createCursorKeys();
        }

        function update() {
            if (window.cursors.down.isDown || window.cursors.left.isDown) {
                l = l - 0.01;
                if (l > 0) {
                    window.stanley.scale.setTo(l, l);
                } else {
                    window.stanley.scale.setTo(0.5, 0.5);
                }

            }
            else if (window.cursors.up.isDown || window.cursors.right.isDown) {
                l = l + 0.01;
                if (l < 1) {
                    window.stanley.scale.setTo(l, l);
                } else {
                    window.stanley.scale.setTo(1, 1);
                }
            }
        }

    }
    render() {
        var divStyle={
            // backgroundImage: 'url(' + this.props.src + ')',
            // margin:2
        };
        return (
            <div style={divStyle}>
                {/* <Image src={this.props.src}></Image> */}
                <div id="phaser-container"></div>
                {/* <div id="phaser-container2"></div> */}
            </div>
           
        );
    }
}
export default PhaserBot;