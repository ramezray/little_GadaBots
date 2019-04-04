import React, { Component } from 'react';
// import { cover, contain } from 'intrinsic-scale';
class Canvas extends Component {
      componentDidMount() {
            const canvas = this.refs.canvas;
            const canvasbg = this.refs.bgcanvas;
            const ctx = canvas.getContext("2d");
            const ctxbg = canvasbg.getContext("2d");
            // const canvasbg = this.refs.canvas;
            // const ctxbg = canvas.getContext("2d");
            // let { width, height, x, y } = contain(100, 200, 50, 50);
            // const img = this.refs.image
            var background = new Image();
            var botPic = new Image();
            botPic.src = require('../../images/GadaBot.svg');

            background.src = this.props.src;
            // Make sure the image is loaded first otherwise nothing will draw.
            background.onload = () => {
                  // scaleToFit(background);
                  var bg = ctxbg.createPattern(background, "no-repeat");
                  ctxbg.fillStyle = bg;
                  scaleToFit(background);
                  // ctx.fillRect(0, 0, canvas.width, canvas.height);
            }


            botPic.onload = () => {
                  scaleToFitMin(botPic);
                  trackTransforms(ctx);
                  function redraw() {

                        // Clear the entire canvas
                        var p1 = ctx.transformedPoint(0, 0);
                        var p2 = ctx.transformedPoint(canvas.width, canvas.height);
                        ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

                        ctx.save();
                        ctx.setTransform(1, 0, 0, 1, 0, 0);
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.restore();

                        var bg = ctx.createPattern(background, "no-repeat");
                        ctx.fillStyle = bg;
                        scaleToFit(background);
                        // scaleToFitMin(botPic);

                        ctx.drawImage(botPic, 0, 0);

                  }
                  redraw();

                  var lastX = canvas.width / 2, lastY = canvas.height / 2;

                  var dragStart, dragged;

                  canvas.addEventListener('mousedown', function (evt) {
                        document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
                        lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
                        lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
                        dragStart = ctx.transformedPoint(lastX, lastY);
                        dragged = false;
                  }, false);

                  canvas.addEventListener('mousemove', function (evt) {
                        lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
                        lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
                        dragged = true;
                        if (dragStart) {
                              var pt = ctx.transformedPoint(lastX, lastY);
                              ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
                              redraw();
                        }
                  }, false);

                  canvas.addEventListener('mouseup', function (evt) {
                        dragStart = null;
                        if (!dragged) zoom(evt.shiftKey ? -1 : 1);
                  }, false);

                  var scaleFactor = 1.1;

                  var zoom = function (clicks) {
                        var pt = ctx.transformedPoint(lastX, lastY);
                        ctx.translate(pt.x, pt.y);
                        var factor = Math.pow(scaleFactor, clicks);
                        ctx.scale(factor, factor);
                        ctx.translate(-pt.x, -pt.y);
                        redraw();
                  }

                  var handleScroll = function (evt) {
                        var delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.detail ? -evt.detail : 0;
                        if (delta) zoom(delta);
                        return evt.preventDefault() && false;
                  };

                  canvas.addEventListener('DOMMouseScroll', handleScroll, false);
                  canvas.addEventListener('mousewheel', handleScroll, false);
            }
            function scaleToFit(img) {

                  // get the scale
                  var scale = Math.max(canvasbg.width / img.width, canvasbg.height / img.height);
                  // get the top left position of the image
                  var x = (canvasbg.width / 2) - (img.width / 2) * scale;
                  var y = (canvasbg.height / 2) - (img.height / 2) * scale;
                  // ctx.fillRect(x, y, img.width * scale, img.height * scale);
                  ctxbg.drawImage(img, x, y, img.width * scale, img.height * scale);
            }
            function scaleToFitMin(img) {
                  // get the scale
                  var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
                  // get the top left position of the image
                  var x = (canvas.width / 2) - (img.width / 2) * scale;
                  var y = (canvas.height / 2) - (img.height / 2) * scale;
                  ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            }
            function trackTransforms(ctx) {
                  var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
                  var xform = svg.createSVGMatrix();
                  ctx.getTransform = function () { return xform; };

                  var savedTransforms = [];
                  var save = ctx.save;
                  ctx.save = function () {
                        savedTransforms.push(xform.translate(0, 0));
                        return save.call(ctx);
                  };

                  var restore = ctx.restore;
                  ctx.restore = function () {
                        xform = savedTransforms.pop();
                        return restore.call(ctx);
                  };

                  var scale = ctx.scale;
                  ctx.scale = function (sx, sy) {
                        xform = xform.scaleNonUniform(sx, sy);
                        return scale.call(ctx, sx, sy);
                  };

                  var rotate = ctx.rotate;
                  ctx.rotate = function (radians) {
                        xform = xform.rotate(radians * 180 / Math.PI);
                        return rotate.call(ctx, radians);
                  };

                  var translate = ctx.translate;
                  ctx.translate = function (dx, dy) {
                        xform = xform.translate(dx, dy);
                        return translate.call(ctx, dx, dy);
                  };

                  var transform = ctx.transform;
                  ctx.transform = function (a, b, c, d, e, f) {
                        var m2 = svg.createSVGMatrix();
                        m2.a = a; m2.b = b; m2.c = c; m2.d = d; m2.e = e; m2.f = f;
                        xform = xform.multiply(m2);
                        return transform.call(ctx, a, b, c, d, e, f);
                  };

                  var setTransform = ctx.setTransform;
                  ctx.setTransform = function (a, b, c, d, e, f) {
                        xform.a = a;
                        xform.b = b;
                        xform.c = c;
                        xform.d = d;
                        xform.e = e;
                        xform.f = f;
                        return setTransform.call(ctx, a, b, c, d, e, f);
                  };

                  var pt = svg.createSVGPoint();
                  ctx.transformedPoint = function (x, y) {
                        pt.x = x; pt.y = y;
                        return pt.matrixTransform(xform.inverse());
                  }
            }
      }

      render() {
            return (
                  <div style={{
                        position: "relative",
                        width: 400,
                        height: 300
                  }}>
                        <canvas ref="bgcanvas" width={400} height={300} background={this.props.src} style={{
                              position: 'absolute',
                              left: 0,
                              top: 0,
                              // width:400,
                              // height:300
                              // backgroundColor: 'green',
                              // zIndex: -1,
                        }} />
                        <canvas ref="canvas" width={400} height={300} style={{
                              position: 'absolute',
                              left: 0,
                              top: 0,
                              // width:400,
                              // height:300
                              // zIndex: -1,
                        }} />

                        {/* <img ref="image" alt='take pic' src={this.props.src} className="hidden"/> */}
                  </div>
            )
      }
}
export default Canvas