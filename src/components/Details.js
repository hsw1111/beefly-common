import React from 'react';
import cs from 'classnames'
import _ from 'lodash';


export default class Details extends React.Component {

    render() {
        let {list, cols} = this.props;
        
        if(cols > 1){
            list = _.chunk(list, 2);
        }

        return (
            <form className="form-horizontal details">
                {list.map((d,i)=> cols == 1? this.render_col1(d, i): this.render_col2(d, i))} 
            </form>
        )
    }

    render_col1(d, i){
        return (
            <div key={i} className="form-group">
                <label className="col-sm-2 control-label">{d.title}</label>
                <div className="col-sm-10 control-content">
                    {d.value ? d.value: d.render}
                </div>
            </div>
        )
    }

    render_col2(d, i){
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-sm-4 control-label">{d[0].title}</label>
                        <div className="col-sm-8 control-content">
                            {d[0].value ? d[0].value: d[0].render}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-sm-4 control-label">{d[1].title}</label>
                        <div className="col-sm-8 control-content">
                            {d[1].value ? d[1].value: d[1].render}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}

Details.propTypes = {
    list: React.PropTypes.array,
    cols: React.PropTypes.number,
}

Details.defaultProps = {
    list: [],
    cols: 2,
}

