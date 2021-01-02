import React, {PureComponent} from 'react';

export class SvgList extends PureComponent {

    static defaultProps = {
		className:			"",
        width:              '15px',
        height:             '15px',
        strokeWidth:        1,
        viewBox:            '0 0 512 512',
		fill: 'white',
    };

    render() {
        let {className, width, height, strokeWidth, viewBox, fill} = this.props;
        return (
            <svg 
                className={className}
                width={width}
                height={height}
                strokeWidth={strokeWidth}
                viewBox={viewBox}
                fill={fill}
            >
             <g>
	<g>
		<g>
			<path d="M400,0H112C50.144,0,0,50.144,0,112v288c0,61.856,50.144,112,112,112h288c61.856,0,112-50.144,112-112V112
				C512,50.144,461.856,0,400,0z M480,400c0,44.183-35.817,80-80,80H112c-44.183,0-80-35.817-80-80V112c0-44.183,35.817-80,80-80
				h288c44.183,0,80,35.817,80,80V400z"/>
			<path d="M160,112h-32c-8.837,0-16,7.163-16,16v32c0,8.837,7.163,16,16,16h32c8.837,0,16-7.163,16-16v-32
				C176,119.163,168.837,112,160,112z"/>
			<path d="M160,224h-32c-8.837,0-16,7.163-16,16v32c0,8.837,7.163,16,16,16h32c8.837,0,16-7.163,16-16v-32
				C176,231.163,168.837,224,160,224z"/>
			<path d="M160,336h-32c-8.837,0-16,7.163-16,16v32c0,8.837,7.163,16,16,16h32c8.837,0,16-7.163,16-16v-32
				C176,343.163,168.837,336,160,336z"/>
			<rect x="208" y="128" width="192" height="32"/>
			<rect x="208" y="240" width="192" height="32"/>
			<rect x="208" y="352" width="192" height="32"/>
		</g>
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
</g></svg>
        )
    }
}
