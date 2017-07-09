import React, {Component} from 'react';
import {View, Text, Image, ScrollView, RefreshControl} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchStoresStart, receiveStores} from './Redux/actions/index';
import {getStores} from './Redux/api/API';
import MyCard from './MyCard';
import LoadingIndicator from './components/home/loadingIndicator';

class Stores extends Component
{
  componentWillMount()
  {
      this.props.fetchStoresStart();
      getStores().then((res)=>{
          this.props.receiveStores(res);
      });
  }
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
  _onRefresh() {
    this.setState({refreshing: true});
    getStores().then((res)=>{
        this.setState({refreshing: false});
        this.props.receiveStores(res);
    });
  }
  getStoresView()
  {
      return this.props.stores.stores.map((data)=>{
        return (<MyCard navigation={this.props.forNavigation.navigation} storeObj={data} key={data.store_id} />);
        });
  }
  getHomeView()
  {
    if(this.props.stores.isLoading)
    {
      return <LoadingIndicator size={50} />
    }
    else if(this.props.stores.isFetched)
    {
      return this.getStoresView();
    }
  }
  render()
  {
    return (
        <ScrollView refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
        {this.getHomeView()}
    </ScrollView>

    );
  }
}

function mapStateToProps(state)
{
    return {
        stores: state.stores,
        forNavigation: state.forNavigation
    }
}
function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        fetchStoresStart: fetchStoresStart,
        receiveStores: receiveStores
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Stores);
