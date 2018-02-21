import React, { Component } from 'react';
import _ from 'lodash';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import HotelItem from './HotelItem';


class HotelsList extends Component {
    componentWillMount() {
       
        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {
       
        this.createDataSource(nextProps);
    }
    createDataSource({ libraries }) {
        var listing;
        var page = this.props.page_name;
        if(page=='WhereToStay')
            listing =  libraries[0].all_hotels;
        else if(page=='HomesAndVilla')
            listing =  libraries[0].homes_villa;
        else if(page=='Sayulita')
            listing =  libraries[0].sayulita;
        else
            listing =  libraries[0].all_hotels;

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(listing);
    }
    renderRow(library) {
        
        return <HotelItem library={library} />;
    }
    render() {
        return (
            <ListView 
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const libraries = _.map(state.libraries, (val, id) => {
        return { ...val, id };
    });
    return { libraries };
};


export default connect(mapStateToProps)(HotelsList);
