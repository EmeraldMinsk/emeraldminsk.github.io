import React, {PureComponent} from 'react';

export class SvgClear extends PureComponent {

    static defaultProps = {
		className:			"",
        width:              '15px',
        height:             '15px',
        strokeWidth:        1,
        viewBox:            '0 0 357 357',
		fill: 'white',
    };

    render() {
        let {className, width, height, strokeWidth, viewBox, fill, onClick} = this.props;
        return (
            <svg 
                className={className}
                width={width}
                height={height}
                strokeWidth={strokeWidth}
                viewBox={viewBox}
                fill={fill}
                onClick={onClick}
            >
<g>
	<g id="clear">
		<polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
			214.2,178.5 		"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
        )
    }
}
