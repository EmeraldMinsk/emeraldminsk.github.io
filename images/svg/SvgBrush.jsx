import React, {PureComponent} from 'react';

export class SvgBrush extends PureComponent {

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
	<path d="M443.911,156.283L421.4,133.773c-7.579-7.579-18.372-10.354-28.306-7.94c2.416-9.938-0.364-20.729-7.94-28.306
		l-48.83-48.83c-4.514-4.514-10.21-7.353-16.215-8.367c-1.015-6.01-3.858-11.706-8.367-16.215L296.414,8.787
		c-11.716-11.716-30.711-11.716-42.427,0L100.481,162.294c-11.716,11.715-11.716,30.71,0,42.426l32.694,32.694
		c3.065,3.064,4.551,7.294,4.078,11.604c-0.473,4.31-2.849,8.122-6.519,10.461c-97.448,62.117-106.6,71.269-110.509,75.178
		c-26.967,26.967-26.968,70.847,0,97.813c26.967,26.968,70.846,26.968,97.814,0c3.909-3.909,13.062-13.062,75.178-110.509
		c2.327-3.651,6.136-6.016,10.451-6.49c4.332-0.476,8.565,1,11.615,4.05l32.694,32.694c11.716,11.716,30.711,11.715,42.427,0
		L443.911,198.71C455.626,186.994,455.626,167.999,443.911,156.283z M269.191,331.004l-32.694-32.694
		c-9.479-9.479-22.776-14.121-36.101-12.658c-13.325,1.463-25.27,8.882-32.475,20.186c-27.532,43.192-62.214,96.542-71.094,105.421
		c-15.295,15.295-40.093,15.295-55.388,0c-15.295-15.295-15.295-40.092,0-55.388c8.879-8.879,62.229-43.561,105.421-71.094
		c11.31-7.209,18.75-19.152,20.213-32.484s-3.202-26.608-12.685-36.092l-32.694-32.694l23.841-23.841l0,0l147.496,147.496
		L269.191,331.004z M314.264,285.93L314.264,285.93L166.767,138.434L275.201,30l15.328,15.327L273.41,83.303
		c-0.583,1.294-0.304,2.813,0.697,3.814c0.01,0.01,0.021,0.02,0.031,0.03c1.027,1.001,2.57,1.253,3.862,0.631l37.111-17.868
		l48.83,48.83l-65.291,97.305c-0.909,1.354-0.732,3.161,0.421,4.313c0.002,0.002,0.005,0.005,0.007,0.007
		c1.158,1.152,2.972,1.32,4.322,0.402l96.787-65.782l22.511,22.51L314.264,285.93z"/>
	<circle cx="73.846" cy="378.852" r="17.666"/>
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
