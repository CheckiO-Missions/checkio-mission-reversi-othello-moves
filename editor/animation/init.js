requirejs(['ext_editor_io2', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function reversiOthelloMoves_visualization(tgt_node, data) {
            if (!data || !data.ext) {
                return
            }

            const input = data.in
            const output = data.out

            /*----------------------------------------------*
             *
             * attr
             *
             *----------------------------------------------*/
            const attr = {
                frame: {
                    'stroke-width': '1.5px',
                    'stroke': '#4094c7',
                    'arrow-end': 'block-wide-long',
                },
                grid: {
                    'stroke-width': '0.7px',
                    'stroke': '#4094c7',
                },
                pieces: {
                    black: {
                        'fill': 'black',
                    },
                    white: {
                        'fill': 'white',
                    },
                    answer: {
                        'stroke-width': '0px',
                        'fill': '#ffc965',
                    },
                },
                number: {
                    'font-family': 'times',
                    'font-weight': 'bold',
                    'stroke-width': 0,
                    'fill': '#294270',
                    'font-size': '13px',
                },
            }

            /*----------------------------------------------*
             *
             * values
             *
             *----------------------------------------------*/
            const grid_size_px = 200
            const os = 15
            const unit = grid_size_px / 9

            /*----------------------------------------------*
             *
             * paper
             *
             *----------------------------------------------*/
            const paper = Raphael(tgt_node, grid_size_px + os*2, grid_size_px + +os*2, 0, 0)

            /*----------------------------------------------*
             *
             * draw grid
             *
             *----------------------------------------------*/
            for (let i=1; i <= 9; i += 1) {
                paper.path(['M', unit*i+os, os, 'v', grid_size_px]).attr(attr.grid)
                paper.path(['M', os, unit*i+os, 'h', grid_size_px]).attr(attr.grid)
            }

            /*----------------------------------------------*
             *
             * draw outside frame
             *
             *----------------------------------------------*/
            paper.rect(unit+os, unit+os, unit*8, unit*8).attr(attr.frame)

            /*----------------------------------------------*
             *
             * draw coord numbers
             *
             *----------------------------------------------*/
            for (let i=0; i < 8; i += 1) {
                paper.text((i+1)*unit+unit/2+os, unit/2 + os, i).attr(attr.number)
                paper.text(unit/2 + os, (i+1)*unit+unit/2+os, i).attr(attr.number)
            }

            /*----------------------------------------------*
             *
             * draw pieces
             *
             *----------------------------------------------*/
            const r = unit*0.45
            // black pieces
            input[0].forEach(inp=>{
                const [x, y] = inp.values
                paper.circle((x+1)*unit+unit/2+os, (y+1)*unit+unit/2+os, r).attr(attr.pieces.black)
            })
            // white pieces
            input[1].forEach(inp=>{
                const [x, y] = inp.values
                paper.circle((x+1)*unit+unit/2+os, (y+1)*unit+unit/2+os, r).attr(attr.pieces.white)
            })
            // answer pieces
            if (Array.isArray(output)) {
                output.forEach(o=>{
                    const op_v = o.values
                    if (Array.isArray(op_v) &&
                            op_v.length == 3 &&
                            Number.isInteger(op_v[0]) &&
                            Number.isInteger(op_v[1]) &&
                            Number.isInteger(op_v[2])) {
                        const [x, y, f] = op_v
                        paper.circle((x+1)*unit+unit/2+os, (y+1)*unit+unit/2+os, r).attr(attr.pieces.answer)
                        paper.text((x+1)*unit+unit/2+os, (y+1)*unit+unit/2+os, f).attr(attr.number)
                    }
                })
            }
        }
        var io = new extIO({
            animation: function($expl, data){
                reversiOthelloMoves_visualization(
                    $expl[0],
                    data,
                );
            }
        });
        io.start();
    }
);
