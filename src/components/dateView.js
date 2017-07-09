import { RadioButtons } from 'react-native-radio-buttons';
import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
var Moment = require('moment');
import DateElement from './dateElement';
import {dateSelected} from '../Redux/actions/AppointmentAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class DateView extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {selectedOption: 0};
    }
    getItem()
    {
        var dateItems = [];
        var id=[];
            for(var i=0; i<=5; i++)
            {
                var obj = Moment().add(i, 'days');
                var date = obj.format('DD');
                var day = obj.format('ddd');
                var month = obj.format('MMM');
                var year = obj.format('YY');
                var dateObj = {id: i, date: date, day: day, month: month, year: year};
                id.push(i);
                dateItems.push(dateObj);
            }
            return {dateItems, id};
    }
    render() {
        var obj = this.getItem();
        var options = obj.id;
        var dateItems = obj.dateItems;

    function setSelectedOption(selectedOption)
    {
        this.props.dateSelected(dateItems[selectedOption]);
        this.setState({
          selectedOption: selectedOption
        });
    }

  function renderOption(option, selected, onSelect, index){
    const style = selected ? { backgroundColor: 'gray'} : {};
    return (
      <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <View>
              <DateElement _style={style} obj={dateItems[option]}/>
          </View>
      </TouchableWithoutFeedback>
    );
  }

  function renderContainer(optionNodes){
    return <View>{optionNodes}</View>;
  }

  return (
    <View>
      <RadioButtons
        options={ options }
        onSelection={ setSelectedOption.bind(this) }
        selectedOption={this.state.selectedOption }
        renderOption={ renderOption }
        renderContainer={ renderContainer }
      />
    </View>);
}
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        dateSelected: dateSelected
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(DateView);
